/** 藏品 report 数据到 FormulaBook 的稳定编排入口。 */

import type { WrappedRelicItem } from "@arkrog/arknights-gamedata-report";

import { item as createFormulaItem } from "../formula/ast.js";
import type { FormulaBook } from "../formula/formula-book.js";
import type {
  AppliedFormulaItem,
  MechanicsAnalysis,
  MechanicsEffectInput,
} from "./contracts/index.js";
import { resolveRelicProgram } from "./relic-programs/registry.js";
import {
  describeBuffConditions,
  isBuffActive,
  type FormulaActivationContext,
} from "./shared/activation.js";
import { resolveMechanicName } from "./shared/blackboard.js";

/** 藏品入口的公共选项。 */
export interface RelicAnalysisOptions {
  /** 当前集成战略主题 ID，用于构造稳定 effectId。 */
  topicId?: string;
  /** 当前敌人、干员和关卡事实；静态分析不会执行这些条件。 */
  activation?: FormulaActivationContext;
}

/** 带原始黑板的内部逐效果记录。 */
interface RelicEffectRecord {
  effect: MechanicsEffectInput;
  /** 职业新典训由奖励券声明、需要补入 charBuffData 条件。 */
  recipientProfession?: string;
}

/** 从立即进阶奖励券 ID 推导 charBuffData 的受赠职业。 */
function inferRecipientProfession(relic: WrappedRelicItem): string | undefined {
  for (const buff of relic.relic.buffs ?? []) {
    if (buff.key !== "immediate_reward") continue;
    const rewardId = buff.blackboard.find((entry) => entry.key.trim() === "id")?.valueStr;
    const matched = rewardId?.match(/_upgrade_ticket_([a-z]+)_from_relic$/);
    if (matched?.[1]) return matched[1];
  }
  return undefined;
}

/** 将一件包装藏品展开为直接 buff 与关联 charBuffData。 */
function relicEffects(
  relic: WrappedRelicItem,
  topicId: string,
): RelicEffectRecord[] {
  const records: RelicEffectRecord[] = [];
  for (const [buffIndex, buff] of (relic.relic.buffs ?? []).entries()) {
    records.push({
      effect: {
        effectId: `effect:${topicId}:${relic.id}:${buffIndex}`,
        source: `relics:${relic.id}`,
        key: buff.key,
        mechanicName: resolveMechanicName(buff.key, buff.blackboard),
        blackboard: buff.blackboard,
        layer: relic.layer,
        displayName: relic.name,
      },
    });
  }

  const recipientProfession = inferRecipientProfession(relic);
  for (const characterBuff of relic.charBuffs) {
    for (const [buffIndex, buff] of (characterBuff.buffs ?? []).entries()) {
      records.push({
        effect: {
          effectId: `effect:${topicId}:charBuffData:${characterBuff.id}:${buffIndex}`,
          source: `charBuffData:${characterBuff.id}`,
          key: buff.key,
          mechanicName: resolveMechanicName(buff.key, buff.blackboard),
          blackboard: buff.blackboard,
          layer: relic.layer,
          displayName: relic.name,
        },
        recipientProfession,
      });
    }
  }
  return records;
}

/** 为职业奖励券补入只用于生效判断和静态说明的选择器。 */
function activationBlackboard(record: RelicEffectRecord) {
  if (!record.recipientProfession) return record.effect.blackboard;
  return [
    ...record.effect.blackboard,
    {
      key: "selector.profession",
      value: 0,
      valueStr: record.recipientProfession,
    },
  ];
}

/** 静态分析单件藏品；忽略生效条件，但保留条件说明。 */
export function analyzeRelic(
  relic: WrappedRelicItem,
  options: RelicAnalysisOptions = {},
): MechanicsAnalysis[] {
  const topicId = options.topicId ?? "unknown";
  return relicEffects(relic, topicId).flatMap((record): MechanicsAnalysis[] => {
    const resolution = resolveRelicProgram(record.effect);
    if (resolution.status === "unknown") {
      return [{ effectId: record.effect.effectId, status: "unknown" }];
    }
    if (resolution.status === "not_applicable") {
      return [{ effectId: record.effect.effectId, status: "not_applicable" }];
    }
    // report 的初始 layer 固定为 0，但静态分析要展示“单次/单层”的乘区贡献；
    // 真正应用时仍由 applyRelic 使用原始 layer 和 activation 判断当前数值。
    const staticEffect = record.effect.layer === 0
      ? { ...record.effect, layer: 1 }
      : record.effect;
    const contributions = resolution.program(staticEffect);
    if (contributions.length === 0) {
      // 已匹配程序但当前参数无法形成有效公式项时保持未知，禁止静默遗漏。
      return [{ effectId: record.effect.effectId, status: "unknown" }];
    }
    const commonConditions = describeBuffConditions(activationBlackboard(record));
    return contributions.map((contribution) => ({
      effectId: record.effect.effectId,
      status: "supported",
      zoneId: contribution.zoneId,
      item: createFormulaItem(record.effect.displayName, contribution.value),
      conditions: [...commonConditions, ...(contribution.conditions ?? [])],
    }));
  });
}

/** 静态分析多件藏品，保持调用方给出的顺序。 */
export function analyzeRelics(
  relics: readonly WrappedRelicItem[],
  options: RelicAnalysisOptions = {},
): MechanicsAnalysis[] {
  return relics.flatMap((relic) => analyzeRelic(relic, options));
}

/** 将单件藏品当前真正生效的贡献写入传入 FormulaBook。 */
export function applyRelic(
  relic: WrappedRelicItem,
  book: FormulaBook,
  options: RelicAnalysisOptions = {},
): AppliedFormulaItem[] {
  if (!relic.enable) return [];
  const topicId = options.topicId ?? "unknown";
  const activation: FormulaActivationContext = options.activation ?? {};
  return relicEffects(relic, topicId).flatMap((record): AppliedFormulaItem[] => {
    const resolution = resolveRelicProgram(record.effect);
    if (resolution.status !== "supported") return [];
    const blackboard = activationBlackboard(record);
    if (!isBuffActive(record.effect.key, blackboard, activation)) return [];
    return resolution.program(record.effect).flatMap((contribution): AppliedFormulaItem[] => {
      if (contribution.active && !contribution.active(activation)) return [];
      const formulaItem = createFormulaItem(record.effect.displayName, contribution.value);
      book.add_item(contribution.zoneId, formulaItem);
      return [{ zoneId: contribution.zoneId, item: formulaItem }];
    });
  });
}

/** 将多件藏品当前真正生效的贡献写入传入 FormulaBook。 */
export function applyRelics(
  relics: readonly WrappedRelicItem[],
  book: FormulaBook,
  options: RelicAnalysisOptions = {},
): AppliedFormulaItem[] {
  const enabledRelicIds = new Set(relics.filter((relic) => relic.enable).map((relic) => relic.id));
  const activation = { ...options.activation, selectedRelicIds: enabledRelicIds };
  return relics.flatMap((relic) => applyRelic(relic, book, {
    ...options,
    activation,
  }));
}
