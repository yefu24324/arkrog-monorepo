/**
 * buff_template_data 的 H 组 Action Zod Schema。
 */

import { z } from "zod";

import type { HalfIdleUpgradeTrapWithRangeCheckAction, HasCertainCharacterInFrontOfMeAction, HasCharacterInCertainDirectionAction, HasTeammateAction, HasTileAlongDirectionAction, HaveShieldRoguelikeAction, Headb2FinishHighlandAOEAction, HealCurrentGiantBossViaMaxHpRatioAction, HealSplitToUnionFindMembersAction, HealTokenAction, BattleActionH04 } from "../../../../types/buff-template-data/actions/h/actions-h-04.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+HalfIdleUpgradeTrapWithRangeCheck, Assembly-CSharp 的严格 Action 数据。
 */
export const HalfIdleUpgradeTrapWithRangeCheckActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+HalfIdleUpgradeTrapWithRangeCheck, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** HalfIdleUpgradeTrapWithRangeCheckAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
    "_abilityName": z.string().describe("HalfIdleUpgradeTrapWithRangeCheckAction 的 `abilityName` 配置字段；准确战斗语义待确认。"),
    /** HalfIdleUpgradeTrapWithRangeCheckAction 的 `sourcePosType` 配置字段；准确战斗语义待确认。 */
    "_sourcePosType": z.literal("BUFF_OWNER").describe("HalfIdleUpgradeTrapWithRangeCheckAction 的 `sourcePosType` 配置字段；准确战斗语义待确认。"),
    /** HalfIdleUpgradeTrapWithRangeCheckAction 的 `targetPosType` 配置字段；准确战斗语义待确认。 */
    "_targetPosType": z.literal("BUFF_OWNER").describe("HalfIdleUpgradeTrapWithRangeCheckAction 的 `targetPosType` 配置字段；准确战斗语义待确认。"),
    /** HalfIdleUpgradeTrapWithRangeCheckAction 的 `upgradeMaps` 配置字段；准确战斗语义待确认。 */
    "_upgradeMaps": z.array(z.strictObject({
                          /** HalfIdleUpgradeTrapWithRangeCheckAction 的 `direvedTrapID` 配置字段；准确战斗语义待确认。 */
                          "direvedTrapID": z.string().describe("HalfIdleUpgradeTrapWithRangeCheckAction 的 `direvedTrapID` 配置字段；准确战斗语义待确认。"),
                          /** HalfIdleUpgradeTrapWithRangeCheckAction 的 `trapTag` 配置字段；准确战斗语义待确认。 */
                          "trapTag": z.string().describe("HalfIdleUpgradeTrapWithRangeCheckAction 的 `trapTag` 配置字段；准确战斗语义待确认。"),
                        })).describe("HalfIdleUpgradeTrapWithRangeCheckAction 的 `upgradeMaps` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+HalfIdleUpgradeTrapWithRangeCheck, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<HalfIdleUpgradeTrapWithRangeCheckAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+HasCertainCharacterInFrontOfMe, Assembly-CSharp 的严格 Action 数据。
 */
export const HasCertainCharacterInFrontOfMeActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+HasCertainCharacterInFrontOfMe, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** HasCertainCharacterInFrontOfMeAction 的 `characterKey` 配置字段；准确战斗语义待确认。 */
    "_characterKey": z.string().describe("HasCertainCharacterInFrontOfMeAction 的 `characterKey` 配置字段；准确战斗语义待确认。"),
    /** HasCertainCharacterInFrontOfMeAction 的 `source` 配置字段；准确战斗语义待确认。 */
    "_source": z.literal("SOURCE").describe("HasCertainCharacterInFrontOfMeAction 的 `source` 配置字段；准确战斗语义待确认。"),
    /** HasCertainCharacterInFrontOfMeAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("TARGET").describe("HasCertainCharacterInFrontOfMeAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+HasCertainCharacterInFrontOfMe, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<HasCertainCharacterInFrontOfMeAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+HasCharacterInCertainDirection, Assembly-CSharp 的严格 Action 数据。
 */
export const HasCharacterInCertainDirectionActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+HasCharacterInCertainDirection, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** HasCharacterInCertainDirectionAction 的 `checkSameSide` 配置字段；准确战斗语义待确认。 */
    "_checkSameSide": z.boolean().describe("HasCharacterInCertainDirectionAction 的 `checkSameSide` 配置字段；准确战斗语义待确认。"),
    /** HasCharacterInCertainDirectionAction 的 `direction` 配置字段；准确战斗语义待确认。 */
    "_direction": z.string().describe("HasCharacterInCertainDirectionAction 的 `direction` 配置字段；准确战斗语义待确认。"),
    /** HasCharacterInCertainDirectionAction 的 `excludeTrapCategory` 配置字段；准确战斗语义待确认。 */
    "_excludeTrapCategory": z.boolean().describe("HasCharacterInCertainDirectionAction 的 `excludeTrapCategory` 配置字段；准确战斗语义待确认。"),
    /** HasCharacterInCertainDirectionAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("HasCharacterInCertainDirectionAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+HasCharacterInCertainDirection, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<HasCharacterInCertainDirectionAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+HasTeammate, Assembly-CSharp 的严格 Action 数据。
 */
export const HasTeammateActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+HasTeammate, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+HasTeammate, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<HasTeammateAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+HasTileAlongDirection, Assembly-CSharp 的严格 Action 数据。
 */
export const HasTileAlongDirectionActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+HasTileAlongDirection, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** HasTileAlongDirectionAction 的 `isGravity` 配置字段；准确战斗语义待确认。 */
    "_isGravity": z.boolean().describe("HasTileAlongDirectionAction 的 `isGravity` 配置字段；准确战斗语义待确认。"),
    /** HasTileAlongDirectionAction 的 `tileKeyList` 配置字段；准确战斗语义待确认。 */
    "_tileKeyList": z.array(z.string()).describe("HasTileAlongDirectionAction 的 `tileKeyList` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+HasTileAlongDirection, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<HasTileAlongDirectionAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+HaveShieldRoguelike, Assembly-CSharp 的严格 Action 数据。
 */
export const HaveShieldRoguelikeActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+HaveShieldRoguelike, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** HaveShieldRoguelikeAction 的 `onlyCheckWhetherHaveShieldWhenEnteringBattle` 配置字段；准确战斗语义待确认。 */
    "_onlyCheckWhetherHaveShieldWhenEnteringBattle": z.boolean().describe("HaveShieldRoguelikeAction 的 `onlyCheckWhetherHaveShieldWhenEnteringBattle` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+HaveShieldRoguelike, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<HaveShieldRoguelikeAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Headb2FinishHighlandAOE, Assembly-CSharp 的严格 Action 数据。
 */
export const Headb2FinishHighlandAOEActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Headb2FinishHighlandAOE, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Headb2FinishHighlandAOEAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("Headb2FinishHighlandAOEAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Headb2FinishHighlandAOE, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Headb2FinishHighlandAOEAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+HealCurrentGiantBossViaMaxHpRatio, Assembly-CSharp 的严格 Action 数据。
 */
export const HealCurrentGiantBossViaMaxHpRatioActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+HealCurrentGiantBossViaMaxHpRatio, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** HealCurrentGiantBossViaMaxHpRatioAction 的 `canGeneralShield` 配置字段；准确战斗语义待确认。 */
    "_canGeneralShield": z.boolean().describe("HealCurrentGiantBossViaMaxHpRatioAction 的 `canGeneralShield` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+HealCurrentGiantBossViaMaxHpRatio, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<HealCurrentGiantBossViaMaxHpRatioAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+HealSplitToUnionFindMembers, Assembly-CSharp 的严格 Action 数据。
 */
export const HealSplitToUnionFindMembersActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+HealSplitToUnionFindMembers, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** HealSplitToUnionFindMembersAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
    "_abilityName": z.string().describe("HealSplitToUnionFindMembersAction 的 `abilityName` 配置字段；准确战斗语义待确认。"),
    /** HealSplitToUnionFindMembersAction 的 `customKey` 配置字段；准确战斗语义待确认。 */
    "_customKey": z.string().describe("HealSplitToUnionFindMembersAction 的 `customKey` 配置字段；准确战斗语义待确认。"),
    /** HealSplitToUnionFindMembersAction 的 `filterId` 配置字段；准确战斗语义待确认。 */
    "_filterId": z.array(z.never()).describe("HealSplitToUnionFindMembersAction 的 `filterId` 配置字段；准确战斗语义待确认。"),
    /** HealSplitToUnionFindMembersAction 的 `filterTags` 配置字段；准确战斗语义待确认。 */
    "_filterTags": z.array(z.string()).describe("HealSplitToUnionFindMembersAction 的 `filterTags` 配置字段；准确战斗语义待确认。"),
    /** HealSplitToUnionFindMembersAction 的 `skipModifierEvt` 配置字段；准确战斗语义待确认。 */
    "_skipModifierEvt": z.boolean().describe("HealSplitToUnionFindMembersAction 的 `skipModifierEvt` 配置字段；准确战斗语义待确认。"),
    /** HealSplitToUnionFindMembersAction 的 `targetOptions` 配置字段；准确战斗语义待确认。 */
    "_targetOptions": z.strictObject({
                            /** HealSplitToUnionFindMembersAction 的 `abnormalCombo` 配置字段；准确战斗语义待确认。 */
                            "abnormalCombo": z.string().describe("HealSplitToUnionFindMembersAction 的 `abnormalCombo` 配置字段；准确战斗语义待确认。"),
                            /** HealSplitToUnionFindMembersAction 的 `abnormalFlag` 配置字段；准确战斗语义待确认。 */
                            "abnormalFlag": z.literal("STUNNED").describe("HealSplitToUnionFindMembersAction 的 `abnormalFlag` 配置字段；准确战斗语义待确认。"),
                            /** HealSplitToUnionFindMembersAction 的 `checkUnitType` 配置字段；准确战斗语义待确认。 */
                            "checkUnitType": z.boolean().describe("HealSplitToUnionFindMembersAction 的 `checkUnitType` 配置字段；准确战斗语义待确认。"),
                            /** HealSplitToUnionFindMembersAction 的 `containAbnormalFlag` 配置字段；准确战斗语义待确认。 */
                            "containAbnormalFlag": z.literal("STUNNED").describe("HealSplitToUnionFindMembersAction 的 `containAbnormalFlag` 配置字段；准确战斗语义待确认。"),
                            /** HealSplitToUnionFindMembersAction 的 `containSomeAbnormalFlags` 配置字段；准确战斗语义待确认。 */
                            "containSomeAbnormalFlags": z.boolean().describe("HealSplitToUnionFindMembersAction 的 `containSomeAbnormalFlags` 配置字段；准确战斗语义待确认。"),
                            /** HealSplitToUnionFindMembersAction 的 `enableAdvancedOptions` 配置字段；准确战斗语义待确认。 */
                            "enableAdvancedOptions": z.boolean().describe("HealSplitToUnionFindMembersAction 的 `enableAdvancedOptions` 配置字段；准确战斗语义待确认。"),
                            /** HealSplitToUnionFindMembersAction 的 `excludeAbnormalFlag` 配置字段；准确战斗语义待确认。 */
                            "excludeAbnormalFlag": z.literal("STUNNED").describe("HealSplitToUnionFindMembersAction 的 `excludeAbnormalFlag` 配置字段；准确战斗语义待确认。"),
                            /** HealSplitToUnionFindMembersAction 的 `excludeSomeAbnormalFlags` 配置字段；准确战斗语义待确认。 */
                            "excludeSomeAbnormalFlags": z.boolean().describe("HealSplitToUnionFindMembersAction 的 `excludeSomeAbnormalFlags` 配置字段；准确战斗语义待确认。"),
                            /** HealSplitToUnionFindMembersAction 的 `ignoreAllyTargetFree` 配置字段；准确战斗语义待确认。 */
                            "ignoreAllyTargetFree": z.boolean().describe("HealSplitToUnionFindMembersAction 的 `ignoreAllyTargetFree` 配置字段；准确战斗语义待确认。"),
                            /** HealSplitToUnionFindMembersAction 的 `ignoreHealFree` 配置字段；准确战斗语义待确认。 */
                            "ignoreHealFree": z.boolean().describe("HealSplitToUnionFindMembersAction 的 `ignoreHealFree` 配置字段；准确战斗语义待确认。"),
                            /** HealSplitToUnionFindMembersAction 的 `ignoreTargetFree` 配置字段；准确战斗语义待确认。 */
                            "ignoreTargetFree": z.boolean().describe("HealSplitToUnionFindMembersAction 的 `ignoreTargetFree` 配置字段；准确战斗语义待确认。"),
                            /** HealSplitToUnionFindMembersAction 的 `ignoreTargetSide` 配置字段；准确战斗语义待确认。 */
                            "ignoreTargetSide": z.boolean().describe("HealSplitToUnionFindMembersAction 的 `ignoreTargetSide` 配置字段；准确战斗语义待确认。"),
                            /** HealSplitToUnionFindMembersAction 的 `onlyIgnoreSomeOfTargetFreeCase` 配置字段；准确战斗语义待确认。 */
                            "onlyIgnoreSomeOfTargetFreeCase": z.boolean().describe("HealSplitToUnionFindMembersAction 的 `onlyIgnoreSomeOfTargetFreeCase` 配置字段；准确战斗语义待确认。"),
                            /** HealSplitToUnionFindMembersAction 的 `professionMask` 配置字段；准确战斗语义待确认。 */
                            "professionMask": z.literal("NONE").describe("HealSplitToUnionFindMembersAction 的 `professionMask` 配置字段；准确战斗语义待确认。"),
                            /** HealSplitToUnionFindMembersAction 的 `purposeMask` 配置字段；准确战斗语义待确认。 */
                            "purposeMask": z.literal("NONE").describe("HealSplitToUnionFindMembersAction 的 `purposeMask` 配置字段；准确战斗语义待确认。"),
                            /** HealSplitToUnionFindMembersAction 的 `targetCategory` 配置字段；准确战斗语义待确认。 */
                            "targetCategory": z.literal("DEFAULT").describe("HealSplitToUnionFindMembersAction 的 `targetCategory` 配置字段；准确战斗语义待确认。"),
                            /** HealSplitToUnionFindMembersAction 的 `targetMotion` 配置字段；准确战斗语义待确认。 */
                            "targetMotion": z.literal("WALK_ONLY").describe("HealSplitToUnionFindMembersAction 的 `targetMotion` 配置字段；准确战斗语义待确认。"),
                            /** HealSplitToUnionFindMembersAction 的 `targetSide` 配置字段；准确战斗语义待确认。 */
                            "targetSide": z.literal("ALLY").describe("HealSplitToUnionFindMembersAction 的 `targetSide` 配置字段；准确战斗语义待确认。"),
                            /** HealSplitToUnionFindMembersAction 的 `unitTypeMask` 配置字段；准确战斗语义待确认。 */
                            "unitTypeMask": z.literal("NONE").describe("HealSplitToUnionFindMembersAction 的 `unitTypeMask` 配置字段；准确战斗语义待确认。"),
                          }).describe("HealSplitToUnionFindMembersAction 的 `targetOptions` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+HealSplitToUnionFindMembers, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<HealSplitToUnionFindMembersAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+HealToken, Assembly-CSharp 的严格 Action 数据。
 */
export const HealTokenActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+HealToken, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** HealTokenAction 的 `createEffect` 配置字段；准确战斗语义待确认。 */
    "_createEffect": z.boolean().describe("HealTokenAction 的 `createEffect` 配置字段；准确战斗语义待确认。"),
    /** HealTokenAction 的 `filterTokenMode` 配置字段；准确战斗语义待确认。 */
    "_filterTokenMode": z.boolean().describe("HealTokenAction 的 `filterTokenMode` 配置字段；准确战斗语义待确认。"),
    /** HealTokenAction 的 `healByRatio` 配置字段；准确战斗语义待确认。 */
    "_healByRatio": z.boolean().describe("HealTokenAction 的 `healByRatio` 配置字段；准确战斗语义待确认。"),
    /** HealTokenAction 的 `ignoreHealFree` 配置字段；准确战斗语义待确认。 */
    "_ignoreHealFree": z.boolean().describe("HealTokenAction 的 `ignoreHealFree` 配置字段；准确战斗语义待确认。"),
    /** HealTokenAction 的 `sourceTarget` 配置字段；准确战斗语义待确认。 */
    "_sourceTarget": z.literal("BUFF_OWNER").describe("HealTokenAction 的 `sourceTarget` 配置字段；准确战斗语义待确认。"),
    /** HealTokenAction 的 `tokenModes` 配置字段；准确战斗语义待确认。 */
    "_tokenModes": z.array(z.number()).describe("HealTokenAction 的 `tokenModes` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+HealToken, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<HealTokenAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionH04Schema = z
  .discriminatedUnion("$type", [HalfIdleUpgradeTrapWithRangeCheckActionSchema, HasCertainCharacterInFrontOfMeActionSchema, HasCharacterInCertainDirectionActionSchema, HasTeammateActionSchema, HasTileAlongDirectionActionSchema, HaveShieldRoguelikeActionSchema, Headb2FinishHighlandAOEActionSchema, HealCurrentGiantBossViaMaxHpRatioActionSchema, HealSplitToUnionFindMembersActionSchema, HealTokenActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionH04>;
