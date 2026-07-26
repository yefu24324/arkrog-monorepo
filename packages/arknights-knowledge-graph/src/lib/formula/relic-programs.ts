/**
 * 藏品 → 公式簿乘区「程序」：
 * 1) 路由：classify / engine-rules 判定进哪些乘区
 * 2) 生效：ActivationContext（前置藏品 / 敌人 / 职业 / 关卡）
 * 3) 写入：把黑板数值灌进 FormulaContext（active=false 仍保留记录，不参与求值）
 */

import {
  classifyRelicEffect,
  type ClassifyRelicEffectInput,
  type MechanicIndex,
} from "../classify/index.js";
import type { BlackboardValue, ExportedRelicEffect, ExportedZonePrediction } from "../classify/types.js";
import type { DamageZoneId } from "../domain/damage-zones.js";
import {
  evaluateBuffActivation,
  type FormulaActivationContext,
} from "./activation.js";
import {
  FormulaContext,
  type FormulaContribution,
} from "./context.js";
import {
  buildRelicContributions,
  contributionsFromClassifiedEffect,
  toContributionEffect,
  type RelicItemForContribution,
} from "./relic-contributions.js";

/** 单条 buff 路由结果：进哪些乘区。 */
export interface RelicBuffZoneRoute {
  /** classify 后的完整效果。 */
  effect: ExportedRelicEffect;
  /** 仅乘区 ID 列表（去重）。 */
  zoneIds: DamageZoneId[];
  /** 原始预测行。 */
  predictions: ExportedZonePrediction[];
}

/** 写入时附带的生效选项。 */
export interface ApplyRelicProgramOptions {
  /** 运行时生效上下文；存在选择器却缺少对应上下文时会保守判为不生效。 */
  activation?: FormulaActivationContext;
}

/** CalcCenter 可直接传入的单件藏品最小结构。 */
export interface RelicForFormulaContext {
  /** 藏品 ID；同时用于自动解析 reliance_relics。 */
  id: string;
  /** 显示名（tooltip）。 */
  name: string;
  /** 原始 buff 列表。 */
  buffs: ReadonlyArray<{ key: string; blackboard: BlackboardValue[] }>;
}

/** 批量应用藏品时的运行时输入。 */
export interface ApplyRelicBuffsToFormulaContextInput {
  /** 当前选中且由用户启用的完整藏品列表。 */
  relics: readonly RelicForFormulaContext[];
  /** 主题 ID，用于构造稳定 effectId / jsonPath。 */
  topicId?: string;
  /** 战斗模板索引。 */
  mechanicIndex?: MechanicIndex;
  /** 干员、敌人和关卡上下文；已选藏品 ID 由 relics 自动推导。 */
  activation?: Omit<FormulaActivationContext, "selectedRelicIds">;
}

/**
 * 路由程序：给定一条 buff，预测它进入公式簿的哪些乘区。
 * 复用 classifyRelicEffect / predictEngineZones。
 */
export function routeRelicBuffToZones(
  input: Omit<ClassifyRelicEffectInput, "mechanicIndex"> & {
    /** 战斗模板索引；可传空 Map（仅 effectKey/黑板规则仍可命中）。 */
    mechanicIndex?: MechanicIndex;
  },
): RelicBuffZoneRoute {
  const effect = classifyRelicEffect({
    ...input,
    mechanicIndex: input.mechanicIndex ?? new Map(),
  });
  const zoneIds = [...new Set(effect.predictions.map((prediction) => prediction.id as DamageZoneId))];
  return {
    effect,
    zoneIds,
    predictions: effect.predictions,
  };
}

/**
 * 写入程序：把已分类效果的贡献灌进 FormulaContext。
 * 会按 activation 设置 contribution.active。
 */
export function applyClassifiedEffectToFormulaContext(
  context: FormulaContext,
  item: Pick<RelicItemForContribution, "id" | "name">,
  effect: ExportedRelicEffect | RelicItemForContribution["effects"][number],
  options: ApplyRelicProgramOptions = {},
): FormulaContribution[] {
  const contributionEffect =
    "classification" in effect ? toContributionEffect(effect) : effect;
  const activationResult = evaluateBuffActivation(
    contributionEffect.key,
    contributionEffect.blackboard,
    options.activation ?? {},
  );
  const contributions = contributionsFromClassifiedEffect(item, contributionEffect, {
    active: activationResult.active,
    inactiveReasons: activationResult.inactiveReasons,
  });
  for (const contribution of contributions) {
    context.addContribution(contribution);
  }
  return contributions;
}

/**
 * 组合程序：对全部选中藏品先路由、再按生效上下文写入公式簿。
 * 每条 buff 现场 classify；reliance_relics 直接从同批 relics 中解析，调用方无需维护第二份 ID 列表。
 */
export function applyRelicBuffsToFormulaContext(
  context: FormulaContext,
  input: ApplyRelicBuffsToFormulaContextInput,
): FormulaContribution[] {
  const topicId = input.topicId ?? "unknown";
  const applied: FormulaContribution[] = [];
  // 从同一份藏品列表推导依赖集合，避免 UI 列表与 activation.selectedRelicIds 不一致。
  const activation: FormulaActivationContext = {
    ...input.activation,
    selectedRelicIds: input.relics.map((relic) => relic.id),
  };
  for (const relic of input.relics) {
    relic.buffs.forEach((buff, buffIndex) => {
      const routed = routeRelicBuffToZones({
        effectId: `effect:${topicId}:${relic.id}:${buffIndex}`,
        source: "relics",
        sourceKind: "relics",
        buffIndex,
        key: buff.key,
        blackboard: buff.blackboard,
        jsonPath: `$.details.${topicId}.relics[${JSON.stringify(relic.id)}].buffs[${buffIndex}]`,
        mechanicIndex: input.mechanicIndex,
      });
      applied.push(
        ...applyClassifiedEffectToFormulaContext(
          context,
          { id: relic.id, name: relic.name },
          routed.effect,
          { activation },
        ),
      );
    });
  }
  return applied;
}

/**
 * 批量：已带 predictions 的藏品列表 → 按生效上下文写入 FormulaContext。
 */
export function applyRelicItemsToFormulaContext(
  context: FormulaContext,
  items: readonly RelicItemForContribution[],
  options: ApplyRelicProgramOptions = {},
): FormulaContribution[] {
  const applied: FormulaContribution[] = [];
  for (const item of items) {
    for (const effect of item.effects) {
      applied.push(
        ...applyClassifiedEffectToFormulaContext(context, item, effect, options),
      );
    }
  }
  return applied;
}

/**
 * 在 FormulaContext 上按新的生效上下文重算已有藏品贡献的 active 标志。
 * 要求贡献的 source 带有 buffKey，且调用方提供「贡献 id → 原始黑板」查表；
 * 更推荐场景变化时重建 context 并重新 applyRelicBuffsToFormulaContext。
 */
export function reapplyActivationOnFormulaContext(
  context: FormulaContext,
  input: {
    /** 乘区列表；省略则遍历公式簿全部乘区定义过于宽泛，这里要求显式传入已写入的 zone。 */
    zoneIds: readonly DamageZoneId[];
    /** 贡献 ID → 用于重判的 effectKey + blackboard。 */
    resolveEffect: (contribution: FormulaContribution) => {
      effectKey: string;
      blackboard: readonly BlackboardValue[];
    } | null;
    activation: FormulaActivationContext;
  },
): void {
  for (const zoneId of input.zoneIds) {
    const entries = context.getContributions(zoneId, { includeInactive: true });
    for (const entry of entries) {
      const resolved = input.resolveEffect(entry);
      if (!resolved) continue;
      const result = evaluateBuffActivation(
        resolved.effectKey,
        resolved.blackboard,
        input.activation,
      );
      context.setContributionActive(entry.id, zoneId, result.active);
    }
  }
}

// 保留旧批量 API 名的无 activation 快捷方式（内部仍走带 options 路径）。
export { buildRelicContributions };
