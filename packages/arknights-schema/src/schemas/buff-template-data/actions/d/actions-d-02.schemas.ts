/**
 * buff_template_data 的 D 组 Action Zod Schema。
 */

import { z } from "zod";

import type { DamageViaMaxHpRatioAction, DiceAction, DiceByBuffKeysAction, DiceSlapShotAction, DisableEnemyHudAction, DisableEnemySwitchFaceByMoveAction, DisableTraitAction, DoCatchFootballAction, DoClearanceAction, DoDribbleAction, BattleActionD02 } from "../../../../types/buff-template-data/actions/d/actions-d-02.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+DamageViaMaxHpRatio, Assembly-CSharp 的严格 Action 数据。
 */
export const DamageViaMaxHpRatioActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+DamageViaMaxHpRatio, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** DamageViaMaxHpRatioAction 的 `applyWay` 配置字段；准确战斗语义待确认。 */
    "_applyWay": z.enum(["ALL","MELEE","NONE"]).describe("DamageViaMaxHpRatioAction 的 `applyWay` 配置字段；准确战斗语义待确认。"),
    /** DamageViaMaxHpRatioAction 的 `attackType` 配置字段；准确战斗语义待确认。 */
    "_attackType": z.enum(["BUFF","NONE","NORMAL"]).describe("DamageViaMaxHpRatioAction 的 `attackType` 配置字段；准确战斗语义待确认。"),
    /** 本次伤害使用的伤害类型。 */
    "_damageType": z.enum(["MAGICAL","PURE"]).describe("本次伤害使用的伤害类型。"),
    /** DamageViaMaxHpRatioAction 的 `getMaxHpFromTarget` 配置字段；准确战斗语义待确认。 */
    "_getMaxHpFromTarget": z.boolean().describe("DamageViaMaxHpRatioAction 的 `getMaxHpFromTarget` 配置字段；准确战斗语义待确认。"),
    /** DamageViaMaxHpRatioAction 的 `ignoreForSp` 配置字段；准确战斗语义待确认。 */
    "_ignoreForSp": z.boolean().describe("DamageViaMaxHpRatioAction 的 `ignoreForSp` 配置字段；准确战斗语义待确认。"),
    /** DamageViaMaxHpRatioAction 的 `isUndeadable` 配置字段；准确战斗语义待确认。 */
    "_isUndeadable": z.boolean().describe("DamageViaMaxHpRatioAction 的 `isUndeadable` 配置字段；准确战斗语义待确认。"),
    /** DamageViaMaxHpRatioAction 的 `multiplierKey` 配置字段；准确战斗语义待确认。 */
    "_multiplierKey": z.string().describe("DamageViaMaxHpRatioAction 的 `multiplierKey` 配置字段；准确战斗语义待确认。"),
    /** DamageViaMaxHpRatioAction 的 `multiplyByKey` 配置字段；准确战斗语义待确认。 */
    "_multiplyByKey": z.boolean().describe("DamageViaMaxHpRatioAction 的 `multiplyByKey` 配置字段；准确战斗语义待确认。"),
    /** DamageViaMaxHpRatioAction 的 `noSourceDamage` 配置字段；准确战斗语义待确认。 */
    "_noSourceDamage": z.boolean().describe("DamageViaMaxHpRatioAction 的 `noSourceDamage` 配置字段；准确战斗语义待确认。"),
    /** DamageViaMaxHpRatioAction 的 `skipModifierEvent` 配置字段；准确战斗语义待确认。 */
    "_skipModifierEvent": z.boolean().describe("DamageViaMaxHpRatioAction 的 `skipModifierEvent` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","BUFF_SOURCE","MODIFIER_TARGET","SOURCE","TARGET"]).describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+DamageViaMaxHpRatio, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<DamageViaMaxHpRatioAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Dice, Assembly-CSharp 的严格 Action 数据。
 */
export const DiceActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Dice, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** DiceAction 的 `probKey` 配置字段；准确战斗语义待确认。 */
    "_probKey": z.string().describe("DiceAction 的 `probKey` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Dice, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<DiceAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+DiceByBuffKeys, Assembly-CSharp 的严格 Action 数据。
 */
export const DiceByBuffKeysActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+DiceByBuffKeys, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** DiceByBuffKeysAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
    "_buffKey": z.string().describe("DiceByBuffKeysAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
    /** DiceByBuffKeysAction 的 `isReverseProb` 配置字段；准确战斗语义待确认。 */
    "_isReverseProb": z.boolean().describe("DiceByBuffKeysAction 的 `isReverseProb` 配置字段；准确战斗语义待确认。"),
    /** DiceByBuffKeysAction 的 `probKey` 配置字段；准确战斗语义待确认。 */
    "_probKey": z.string().describe("DiceByBuffKeysAction 的 `probKey` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+DiceByBuffKeys, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<DiceByBuffKeysAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+DiceSlapShot, Assembly-CSharp 的严格 Action 数据。
 */
export const DiceSlapShotActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+DiceSlapShot, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+DiceSlapShot, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<DiceSlapShotAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+DisableEnemyHud, Assembly-CSharp 的严格 Action 数据。
 */
export const DisableEnemyHudActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+DisableEnemyHud, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** DisableEnemyHudAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("DisableEnemyHudAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+DisableEnemyHud, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<DisableEnemyHudAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+DisableEnemySwitchFaceByMove, Assembly-CSharp 的严格 Action 数据。
 */
export const DisableEnemySwitchFaceByMoveActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+DisableEnemySwitchFaceByMove, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** DisableEnemySwitchFaceByMoveAction 的 `disabled` 配置字段；准确战斗语义待确认。 */
    "_disabled": z.boolean().describe("DisableEnemySwitchFaceByMoveAction 的 `disabled` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+DisableEnemySwitchFaceByMove, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<DisableEnemySwitchFaceByMoveAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+DisableTrait, Assembly-CSharp 的严格 Action 数据。
 */
export const DisableTraitActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+DisableTrait, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+DisableTrait, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<DisableTraitAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+DoCatchFootball, Assembly-CSharp 的严格 Action 数据。
 */
export const DoCatchFootballActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+DoCatchFootball, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_SOURCE").describe("Action 读取的来源实体类型。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+DoCatchFootball, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<DoCatchFootballAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+DoClearance, Assembly-CSharp 的严格 Action 数据。
 */
export const DoClearanceActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+DoClearance, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+DoClearance, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<DoClearanceAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+DoDribble, Assembly-CSharp 的严格 Action 数据。
 */
export const DoDribbleActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+DoDribble, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+DoDribble, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<DoDribbleAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionD02Schema = z
  .discriminatedUnion("$type", [DamageViaMaxHpRatioActionSchema, DiceActionSchema, DiceByBuffKeysActionSchema, DiceSlapShotActionSchema, DisableEnemyHudActionSchema, DisableEnemySwitchFaceByMoveActionSchema, DisableTraitActionSchema, DoCatchFootballActionSchema, DoClearanceActionSchema, DoDribbleActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionD02>;
