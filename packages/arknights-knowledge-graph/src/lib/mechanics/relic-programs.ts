/**
 * 攻击力、攻击速度、防御力与最大生命藏品运行时链：原始 buff 路由、激活判定、FormulaItemExpression 构造和 FormulaBook 写入。
 */

import type { WrappedRelicItem } from "@arkrog/arknights-schema/game-data";

import type { MechanicIndex } from "../classify/mechanic-index.js";
import { resolveMechanicName } from "../classify/mechanic-index.js";
import { predictEngineZones, type EnginePrediction } from "../domain/engine-rules.js";
import { FormulaBook, type FormulaWritableZoneId } from "../formula/formula-book.js";
import {
  evaluateBuffActivation,
  type FormulaActivationContext,
} from "./activation.js";
import {
  formulaItemsFromRelicEffect,
  type BlackboardEntry,
  type FormulaItemPlacement,
  type RelicFormulaEffect,
} from "./relic-items.js";

/** 单条原始 buff 的属性路由输入。 */
export interface RelicBuffRouteInput {
  /** 稳定效果 ID。 */
  effectId: string;
  /** relics 或 charBuffData:... 来源标签。 */
  source: string;
  /** 原始 buffs 数组下标。 */
  buffIndex: number;
  /** buff 载体 key。 */
  key: string;
  /** 原始黑板。 */
  blackboard: readonly BlackboardEntry[];
  /** 原始 GameData JSON 路径。 */
  jsonPath: string;
  /** 战斗模板索引；浏览器未加载模板时可以省略。 */
  mechanicIndex?: MechanicIndex;
}

/** 单条 buff 的属性乘区路由结果。 */
export interface RelicBuffZoneRoute {
  /** 交给运行时数值程序的属性效果。 */
  effect: RelicFormulaEffect;
  /** FormulaBook 中的去重真实写入 zone。 */
  zoneIds: FormulaWritableZoneId[];
  /** 原始语义规则预测，供图谱或调试展示。 */
  predictions: EnginePrediction[];
  /** 未映射效果与非战斗效果保持可区分状态。 */
  classification: "predicted" | "unknown" | "not_applicable";
  /** 未产生已支持属性 zone 时的保守说明。 */
  unclassifiedReason: string | null;
}

/** 应用包装藏品时附带的运行时选项。 */
export interface ApplyRelicItemsOptions {
  /** 当前主题 ID，用于构造稳定 effectId 与 GameData 路径。 */
  topicId?: string;
  /** 干员、敌人和关卡生效上下文；已启用藏品 ID 由 items 自动推导。 */
  activation?: Omit<FormulaActivationContext, "selectedRelicIds">;
  /** 战斗模板索引；提供后可把 Action 证据提升为 verified。 */
  mechanicIndex?: MechanicIndex;
}

/** 单条已路由效果写入时的内部选项。 */
export interface ApplyRelicEffectOptions {
  /** 完整生效上下文。 */
  activation: FormulaActivationContext;
  /** 当前层数，由具体战斗模板解释。 */
  layer: number;
  /** 新典训进阶券隐式声明的受赠职业。 */
  recipientProfession?: string;
}

/** 将黑板转成 engine-rules 消费的只读参数 Map。 */
function parameterMap(
  blackboard: readonly BlackboardEntry[],
): ReadonlyMap<string, number | string | null> {
  return new Map(
    blackboard.map((parameter) => [
      parameter.key.trim(),
      parameter.valueStr ?? parameter.value,
    ]),
  );
}

/** 对未进入当前属性规则的效果给出保守分类，不猜测其他属性的乘区。 */
function classifyUnmappedEffect(
  effectKey: string,
  blackboard: readonly BlackboardEntry[],
): Pick<RelicBuffZoneRoute, "classification" | "unclassifiedReason"> {
  const signal = `${effectKey} ${blackboard.map((entry) => entry.key).join(" ")}`;
  const isCombatValue = /atk|attack|damage|def|resistance|max_hp|attack_speed/i.test(signal);
  return isCombatValue
    ? {
        classification: "unknown",
        unclassifiedReason: "效果涉及战斗数值，但当前属性规则没有对应 FormulaBook 写入规则。",
      }
    : {
        classification: "not_applicable",
        unclassifiedReason: "奖励、资源或部署规则等效果不进入当前属性公式。",
      };
}

/** 从立即进阶奖励券的稳定 ID 推导 charBuffData 受赠职业。 */
function inferRecipientProfession(item: WrappedRelicItem): string | undefined {
  for (const buff of item.relic.buffs) {
    if (buff.key !== "immediate_reward") continue;
    const rewardId = buff.blackboard.find((entry) => entry.key.trim() === "id")?.valueStr;
    const matched = rewardId?.match(/_upgrade_ticket_([a-z]+)_from_relic$/);
    if (matched?.[1]) return matched[1];
  }
  return undefined;
}

/** 路由单条原始 buff；分类过程与是否在当前场景生效保持正交。 */
export function routeRelicBuffToZones(input: RelicBuffRouteInput): RelicBuffZoneRoute {
  const mechanicName = resolveMechanicName(input.blackboard);
  const predictions = predictEngineZones({
    effectKey: input.key,
    parameters: parameterMap(input.blackboard),
    mechanicName,
    actions: input.mechanicIndex?.get(mechanicName) ?? [],
    sourceKind: input.source,
    jsonPath: input.jsonPath,
  });
  const effect: RelicFormulaEffect = {
    effectId: input.effectId,
    source: input.source,
    key: input.key,
    mechanicName,
    blackboard: input.blackboard,
    jsonPath: input.jsonPath,
    predictions,
  };
  if (predictions.length === 0) {
    return {
      effect,
      zoneIds: [],
      predictions,
      ...classifyUnmappedEffect(input.key, input.blackboard),
    };
  }
  return {
    effect,
    zoneIds: [...new Set(predictions.map((prediction) => prediction.zoneId))],
    predictions,
    classification: "predicted",
    unclassifiedReason: null,
  };
}

/** 将一条已路由且已激活的属性效果直接追加到当前 FormulaBook 实例。 */
export function applyRelicEffectToFormulaBook(
  book: FormulaBook,
  relic: Pick<WrappedRelicItem, "name">,
  effect: RelicFormulaEffect,
  options: ApplyRelicEffectOptions,
): FormulaItemPlacement[] {
  // 新典训职业限制位于直接奖励券而非 charBuffData 黑板，此处仅补入激活判断。
  const activationBlackboard = options.recipientProfession
    ? [
        ...effect.blackboard,
        {
          key: "selector.profession",
          value: 0,
          valueStr: options.recipientProfession,
        },
      ]
    : effect.blackboard;
  const activationResult = evaluateBuffActivation(
    effect.key,
    activationBlackboard,
    options.activation,
  );
  if (!activationResult.active) return [];

  const placements = formulaItemsFromRelicEffect(relic, effect, {
    layer: options.layer,
  });
  for (const placement of placements) {
    // FormulaBook 是公式结构和本次计算状态的唯一持有者，业务层不再经过 Context。
    book.add_item(placement.zoneId, placement.item);
  }
  return placements;
}

/**
 * 将启用的原始包装藏品现场路由并写入 FormulaBook。
 * `enable=false` 的藏品既不写入 item，也不参与 reliance_relics 依赖集合。
 */
export function applyRelicItemsToFormulaBook(
  book: FormulaBook,
  items: readonly WrappedRelicItem[],
  options: ApplyRelicItemsOptions = {},
): FormulaItemPlacement[] {
  const topicId = options.topicId ?? "unknown";
  const enabledItems = items.filter((item) => item.enable);
  const activation: FormulaActivationContext = {
    ...options.activation,
    selectedRelicIds: enabledItems.map((item) => item.id),
  };
  const applied: FormulaItemPlacement[] = [];

  for (const relic of enabledItems) {
    const recipientProfession = inferRecipientProfession(relic);
    relic.relic.buffs.forEach((buff, buffIndex) => {
      const routed = routeRelicBuffToZones({
        effectId: `effect:${topicId}:${relic.id}:${buffIndex}`,
        source: "relics",
        buffIndex,
        key: buff.key,
        blackboard: buff.blackboard,
        jsonPath: `$.details.${topicId}.relics[${JSON.stringify(relic.id)}].buffs[${buffIndex}]`,
        mechanicIndex: options.mechanicIndex,
      });
      applied.push(...applyRelicEffectToFormulaBook(book, relic, routed.effect, {
        activation,
        layer: relic.layer,
      }));
    });

    for (const characterBuff of relic.charBuffs) {
      (characterBuff.buffs ?? []).forEach((buff, buffIndex) => {
        const routed = routeRelicBuffToZones({
          effectId: `effect:${topicId}:charBuffData:${characterBuff.id}:${buffIndex}`,
          source: `charBuffData:${characterBuff.id}`,
          buffIndex,
          key: buff.key,
          blackboard: buff.blackboard,
          jsonPath: `$.details.${topicId}.charBuffData[${JSON.stringify(characterBuff.id)}].buffs[${buffIndex}]`,
          mechanicIndex: options.mechanicIndex,
        });
        applied.push(...applyRelicEffectToFormulaBook(book, relic, routed.effect, {
          activation,
          layer: relic.layer,
          // charBuffData 默认应用给当前干员，新典训还需满足奖励券声明的职业。
          recipientProfession,
        }));
      });
    }
  }

  return applied;
}
