/**
 * buff_template_data 的 A 组 Action Zod Schema。
 */

import { z } from "zod";

import type { ApplyFixedElementDamageAction, ApplyForceOnRogue4DLC2BounceEnemyAction, ApplyHealAction, ArcgachaGainTrapAction, AssignAbilityBlackboardAction, AssignAbilityBlackboardFromOthersAction, AssignAmmoSkillMaxCountToBBAction, AssignAmmoSkillRemainingCountToBBAction, AssignAphrisRangeInfoToBBAction, AssignAttributeAsDynamicVarToBBAction, BattleActionA16 } from "../../../../types/buff-template-data/actions/a/actions-a-16.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+ApplyFixedElementDamage, Assembly-CSharp 的严格 Action 数据。
 */
export const ApplyFixedElementDamageActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+ApplyFixedElementDamage, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** ApplyFixedElementDamageAction 的 `allowNoSourceDamage` 配置字段；准确战斗语义待确认。 */
    "_allowNoSourceDamage": z.boolean().describe("ApplyFixedElementDamageAction 的 `allowNoSourceDamage` 配置字段；准确战斗语义待确认。"),
    /** ApplyFixedElementDamageAction 的 `damageScaleKey` 配置字段；准确战斗语义待确认。 */
    "_damageScaleKey": z.union([
                             z.null(),
                             z.string(),
                           ]).describe("ApplyFixedElementDamageAction 的 `damageScaleKey` 配置字段；准确战斗语义待确认。"),
    /** ApplyFixedElementDamageAction 的 `damageValueKey` 配置字段；准确战斗语义待确认。 */
    "_damageValueKey": z.string().describe("ApplyFixedElementDamageAction 的 `damageValueKey` 配置字段；准确战斗语义待确认。"),
    /** ApplyFixedElementDamageAction 的 `elementType` 配置字段；准确战斗语义待确认。 */
    "_elementType": z.enum(["FIRE","SANITY","WATER"]).describe("ApplyFixedElementDamageAction 的 `elementType` 配置字段；准确战斗语义待确认。"),
    /** ApplyFixedElementDamageAction 的 `isEnvDamage` 配置字段；准确战斗语义待确认。 */
    "_isEnvDamage": z.boolean().describe("ApplyFixedElementDamageAction 的 `isEnvDamage` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_SOURCE").describe("Action 读取的来源实体类型。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+ApplyFixedElementDamage, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<ApplyFixedElementDamageAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+ApplyForceOnRogue4DLC2BounceEnemy, Assembly-CSharp 的严格 Action 数据。
 */
export const ApplyForceOnRogue4DLC2BounceEnemyActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+ApplyForceOnRogue4DLC2BounceEnemy, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** ApplyForceOnRogue4DLC2BounceEnemyAction 的 `applyForceDirectly` 配置字段；准确战斗语义待确认。 */
    "_applyForceDirectly": z.boolean().describe("ApplyForceOnRogue4DLC2BounceEnemyAction 的 `applyForceDirectly` 配置字段；准确战斗语义待确认。"),
    /** ApplyForceOnRogue4DLC2BounceEnemyAction 的 `directionKey` 配置字段；准确战斗语义待确认。 */
    "_directionKey": z.string().describe("ApplyForceOnRogue4DLC2BounceEnemyAction 的 `directionKey` 配置字段；准确战斗语义待确认。"),
    /** ApplyForceOnRogue4DLC2BounceEnemyAction 的 `source` 配置字段；准确战斗语义待确认。 */
    "_source": z.literal("BUFF_OWNER").describe("ApplyForceOnRogue4DLC2BounceEnemyAction 的 `source` 配置字段；准确战斗语义待确认。"),
    /** ApplyForceOnRogue4DLC2BounceEnemyAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("ApplyForceOnRogue4DLC2BounceEnemyAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+ApplyForceOnRogue4DLC2BounceEnemy, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<ApplyForceOnRogue4DLC2BounceEnemyAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+ApplyHeal, Assembly-CSharp 的严格 Action 数据。
 */
export const ApplyHealActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+ApplyHeal, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** ApplyHealAction 的 `isCont` 配置字段；准确战斗语义待确认。 */
    "_isCont": z.boolean().describe("ApplyHealAction 的 `isCont` 配置字段；准确战斗语义待确认。"),
    /** ApplyHealAction 的 `isHpRatio` 配置字段；准确战斗语义待确认。 */
    "_isHpRatio": z.boolean().describe("ApplyHealAction 的 `isHpRatio` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+ApplyHeal, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<ApplyHealAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+ArcgachaGainTrap, Assembly-CSharp 的严格 Action 数据。
 */
export const ArcgachaGainTrapActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+ArcgachaGainTrap, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+ArcgachaGainTrap, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<ArcgachaGainTrapAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AssignAbilityBlackboard, Assembly-CSharp 的严格 Action 数据。
 */
export const AssignAbilityBlackboardActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AssignAbilityBlackboard, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** AssignAbilityBlackboardAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
    "_abilityName": z.string().describe("AssignAbilityBlackboardAction 的 `abilityName` 配置字段；准确战斗语义待确认。"),
    /** 读取或写入战斗黑板的参数键。 */
    "_blackboardKey": z.string().describe("读取或写入战斗黑板的参数键。"),
    /** AssignAbilityBlackboardAction 的 `defaultValue` 配置字段；准确战斗语义待确认。 */
    "_defaultValue": z.string().describe("AssignAbilityBlackboardAction 的 `defaultValue` 配置字段；准确战斗语义待确认。"),
    /** AssignAbilityBlackboardAction 的 `targetBlackboardKey` 配置字段；准确战斗语义待确认。 */
    "_targetBlackboardKey": z.string().describe("AssignAbilityBlackboardAction 的 `targetBlackboardKey` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
    /** AssignAbilityBlackboardAction 的 `stringValue` 配置字段；准确战斗语义待确认。 */
    "stringValue": z.boolean().describe("AssignAbilityBlackboardAction 的 `stringValue` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AssignAbilityBlackboard, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AssignAbilityBlackboardAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AssignAbilityBlackboardFromOthers, Assembly-CSharp 的严格 Action 数据。
 */
export const AssignAbilityBlackboardFromOthersActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AssignAbilityBlackboardFromOthers, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** AssignAbilityBlackboardFromOthersAction 的 `sourceAbilityName` 配置字段；准确战斗语义待确认。 */
    "_sourceAbilityName": z.string().describe("AssignAbilityBlackboardFromOthersAction 的 `sourceAbilityName` 配置字段；准确战斗语义待确认。"),
    /** AssignAbilityBlackboardFromOthersAction 的 `sourceBBKeys` 配置字段；准确战斗语义待确认。 */
    "_sourceBBKeys": z.array(z.never()).describe("AssignAbilityBlackboardFromOthersAction 的 `sourceBBKeys` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.enum(["BUFF_OWNER","SOURCE"]).describe("Action 读取的来源实体类型。"),
    /** AssignAbilityBlackboardFromOthersAction 的 `targetAbilityName` 配置字段；准确战斗语义待确认。 */
    "_targetAbilityName": z.string().describe("AssignAbilityBlackboardFromOthersAction 的 `targetAbilityName` 配置字段；准确战斗语义待确认。"),
    /** AssignAbilityBlackboardFromOthersAction 的 `targetBBKeys` 配置字段；准确战斗语义待确认。 */
    "_targetBBKeys": z.array(z.never()).describe("AssignAbilityBlackboardFromOthersAction 的 `targetBBKeys` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
    /** AssignAbilityBlackboardFromOthersAction 的 `useSnapshotAbilityAsTarget` 配置字段；准确战斗语义待确认。 */
    "_useSnapshotAbilityAsTarget": z.boolean().describe("AssignAbilityBlackboardFromOthersAction 的 `useSnapshotAbilityAsTarget` 配置字段；准确战斗语义待确认。"),
    /** AssignAbilityBlackboardFromOthersAction 的 `useSourceHost` 配置字段；准确战斗语义待确认。 */
    "_useSourceHost": z.boolean().describe("AssignAbilityBlackboardFromOthersAction 的 `useSourceHost` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AssignAbilityBlackboardFromOthers, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AssignAbilityBlackboardFromOthersAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AssignAmmoSkillMaxCountToBB, Assembly-CSharp 的严格 Action 数据。
 */
export const AssignAmmoSkillMaxCountToBBActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AssignAmmoSkillMaxCountToBB, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 读取或写入战斗黑板的参数键。 */
    "_blackboardKey": z.string().describe("读取或写入战斗黑板的参数键。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
    /** AssignAmmoSkillMaxCountToBBAction 的 `originalMaxCount` 配置字段；准确战斗语义待确认。 */
    "originalMaxCount": z.boolean().describe("AssignAmmoSkillMaxCountToBBAction 的 `originalMaxCount` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AssignAmmoSkillMaxCountToBB, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AssignAmmoSkillMaxCountToBBAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AssignAmmoSkillRemainingCountToBB, Assembly-CSharp 的严格 Action 数据。
 */
export const AssignAmmoSkillRemainingCountToBBActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AssignAmmoSkillRemainingCountToBB, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 读取或写入战斗黑板的参数键。 */
    "_blackboardKey": z.string().describe("读取或写入战斗黑板的参数键。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","BUFF_SOURCE"]).describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AssignAmmoSkillRemainingCountToBB, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AssignAmmoSkillRemainingCountToBBAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AssignAphrisRangeInfoToBB, Assembly-CSharp 的严格 Action 数据。
 */
export const AssignAphrisRangeInfoToBBActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AssignAphrisRangeInfoToBB, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** AssignAphrisRangeInfoToBBAction 的 `aphrisRangeSource` 配置字段；准确战斗语义待确认。 */
    "_aphrisRangeSource": z.literal("BUFF_SOURCE").describe("AssignAphrisRangeInfoToBBAction 的 `aphrisRangeSource` 配置字段；准确战斗语义待确认。"),
    /** AssignAphrisRangeInfoToBBAction 的 `dirChangeTimesBbKey` 配置字段；准确战斗语义待确认。 */
    "_dirChangeTimesBbKey": z.string().describe("AssignAphrisRangeInfoToBBAction 的 `dirChangeTimesBbKey` 配置字段；准确战斗语义待确认。"),
    /** AssignAphrisRangeInfoToBBAction 的 `extendTimesBbKey` 配置字段；准确战斗语义待确认。 */
    "_extendTimesBbKey": z.string().describe("AssignAphrisRangeInfoToBBAction 的 `extendTimesBbKey` 配置字段；准确战斗语义待确认。"),
    /** AssignAphrisRangeInfoToBBAction 的 `gridIndexBbKey` 配置字段；准确战斗语义待确认。 */
    "_gridIndexBbKey": z.null().describe("AssignAphrisRangeInfoToBBAction 的 `gridIndexBbKey` 配置字段；准确战斗语义待确认。"),
    /** AssignAphrisRangeInfoToBBAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("AssignAphrisRangeInfoToBBAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AssignAphrisRangeInfoToBB, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AssignAphrisRangeInfoToBBAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AssignAttributeAsDynamicVarToBB, Assembly-CSharp 的严格 Action 数据。
 */
export const AssignAttributeAsDynamicVarToBBActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AssignAttributeAsDynamicVarToBB, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 属性修改器指向的战斗属性。 */
    "_attributeType": z.enum(["ATK","MAX_HP"]).describe("属性修改器指向的战斗属性。"),
    /** AssignAttributeAsDynamicVarToBBAction 的 `scaleVar` 配置字段；准确战斗语义待确认。 */
    "_scaleVar": z.string().describe("AssignAttributeAsDynamicVarToBBAction 的 `scaleVar` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","BUFF_SOURCE","TARGET"]).describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AssignAttributeAsDynamicVarToBB, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AssignAttributeAsDynamicVarToBBAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionA16Schema = z
  .discriminatedUnion("$type", [ApplyFixedElementDamageActionSchema, ApplyForceOnRogue4DLC2BounceEnemyActionSchema, ApplyHealActionSchema, ArcgachaGainTrapActionSchema, AssignAbilityBlackboardActionSchema, AssignAbilityBlackboardFromOthersActionSchema, AssignAmmoSkillMaxCountToBBActionSchema, AssignAmmoSkillRemainingCountToBBActionSchema, AssignAphrisRangeInfoToBBActionSchema, AssignAttributeAsDynamicVarToBBActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionA16>;
