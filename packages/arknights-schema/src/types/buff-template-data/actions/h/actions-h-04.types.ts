/**
 * buff_template_data 的 H 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+HalfIdleUpgradeTrapWithRangeCheck, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface HalfIdleUpgradeTrapWithRangeCheckAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+HalfIdleUpgradeTrapWithRangeCheck, Assembly-CSharp";
  /** HalfIdleUpgradeTrapWithRangeCheckAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
  "_abilityName": string;
  /** HalfIdleUpgradeTrapWithRangeCheckAction 的 `sourcePosType` 配置字段；准确战斗语义待确认。 */
  "_sourcePosType": "BUFF_OWNER";
  /** HalfIdleUpgradeTrapWithRangeCheckAction 的 `targetPosType` 配置字段；准确战斗语义待确认。 */
  "_targetPosType": "BUFF_OWNER";
  /** HalfIdleUpgradeTrapWithRangeCheckAction 的 `upgradeMaps` 配置字段；准确战斗语义待确认。 */
  "_upgradeMaps": Array<{
                       /** HalfIdleUpgradeTrapWithRangeCheckAction 的 `direvedTrapID` 配置字段；准确战斗语义待确认。 */
                       "direvedTrapID": string;
                       /** HalfIdleUpgradeTrapWithRangeCheckAction 的 `trapTag` 配置字段；准确战斗语义待确认。 */
                       "trapTag": string;
                     }>;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+HasCertainCharacterInFrontOfMe, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface HasCertainCharacterInFrontOfMeAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+HasCertainCharacterInFrontOfMe, Assembly-CSharp";
  /** HasCertainCharacterInFrontOfMeAction 的 `characterKey` 配置字段；准确战斗语义待确认。 */
  "_characterKey": string;
  /** HasCertainCharacterInFrontOfMeAction 的 `source` 配置字段；准确战斗语义待确认。 */
  "_source": "SOURCE";
  /** HasCertainCharacterInFrontOfMeAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "TARGET";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+HasCharacterInCertainDirection, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface HasCharacterInCertainDirectionAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+HasCharacterInCertainDirection, Assembly-CSharp";
  /** HasCharacterInCertainDirectionAction 的 `checkSameSide` 配置字段；准确战斗语义待确认。 */
  "_checkSameSide": boolean;
  /** HasCharacterInCertainDirectionAction 的 `direction` 配置字段；准确战斗语义待确认。 */
  "_direction": string;
  /** HasCharacterInCertainDirectionAction 的 `excludeTrapCategory` 配置字段；准确战斗语义待确认。 */
  "_excludeTrapCategory": boolean;
  /** HasCharacterInCertainDirectionAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+HasTeammate, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface HasTeammateAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+HasTeammate, Assembly-CSharp";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+HasTileAlongDirection, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface HasTileAlongDirectionAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+HasTileAlongDirection, Assembly-CSharp";
  /** HasTileAlongDirectionAction 的 `isGravity` 配置字段；准确战斗语义待确认。 */
  "_isGravity": boolean;
  /** HasTileAlongDirectionAction 的 `tileKeyList` 配置字段；准确战斗语义待确认。 */
  "_tileKeyList": Array<string>;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+HaveShieldRoguelike, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface HaveShieldRoguelikeAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+HaveShieldRoguelike, Assembly-CSharp";
  /** HaveShieldRoguelikeAction 的 `onlyCheckWhetherHaveShieldWhenEnteringBattle` 配置字段；准确战斗语义待确认。 */
  "_onlyCheckWhetherHaveShieldWhenEnteringBattle": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+Headb2FinishHighlandAOE, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface Headb2FinishHighlandAOEAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+Headb2FinishHighlandAOE, Assembly-CSharp";
  /** Headb2FinishHighlandAOEAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+HealCurrentGiantBossViaMaxHpRatio, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface HealCurrentGiantBossViaMaxHpRatioAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+HealCurrentGiantBossViaMaxHpRatio, Assembly-CSharp";
  /** HealCurrentGiantBossViaMaxHpRatioAction 的 `canGeneralShield` 配置字段；准确战斗语义待确认。 */
  "_canGeneralShield": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+HealSplitToUnionFindMembers, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface HealSplitToUnionFindMembersAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+HealSplitToUnionFindMembers, Assembly-CSharp";
  /** HealSplitToUnionFindMembersAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
  "_abilityName": string;
  /** HealSplitToUnionFindMembersAction 的 `customKey` 配置字段；准确战斗语义待确认。 */
  "_customKey": string;
  /** HealSplitToUnionFindMembersAction 的 `filterId` 配置字段；准确战斗语义待确认。 */
  "_filterId": never[];
  /** HealSplitToUnionFindMembersAction 的 `filterTags` 配置字段；准确战斗语义待确认。 */
  "_filterTags": Array<string>;
  /** HealSplitToUnionFindMembersAction 的 `skipModifierEvt` 配置字段；准确战斗语义待确认。 */
  "_skipModifierEvt": boolean;
  /** HealSplitToUnionFindMembersAction 的 `targetOptions` 配置字段；准确战斗语义待确认。 */
  "_targetOptions": {
                         /** HealSplitToUnionFindMembersAction 的 `abnormalCombo` 配置字段；准确战斗语义待确认。 */
                         "abnormalCombo": string;
                         /** HealSplitToUnionFindMembersAction 的 `abnormalFlag` 配置字段；准确战斗语义待确认。 */
                         "abnormalFlag": "STUNNED";
                         /** HealSplitToUnionFindMembersAction 的 `checkUnitType` 配置字段；准确战斗语义待确认。 */
                         "checkUnitType": boolean;
                         /** HealSplitToUnionFindMembersAction 的 `containAbnormalFlag` 配置字段；准确战斗语义待确认。 */
                         "containAbnormalFlag": "STUNNED";
                         /** HealSplitToUnionFindMembersAction 的 `containSomeAbnormalFlags` 配置字段；准确战斗语义待确认。 */
                         "containSomeAbnormalFlags": boolean;
                         /** HealSplitToUnionFindMembersAction 的 `enableAdvancedOptions` 配置字段；准确战斗语义待确认。 */
                         "enableAdvancedOptions": boolean;
                         /** HealSplitToUnionFindMembersAction 的 `excludeAbnormalFlag` 配置字段；准确战斗语义待确认。 */
                         "excludeAbnormalFlag": "STUNNED";
                         /** HealSplitToUnionFindMembersAction 的 `excludeSomeAbnormalFlags` 配置字段；准确战斗语义待确认。 */
                         "excludeSomeAbnormalFlags": boolean;
                         /** HealSplitToUnionFindMembersAction 的 `ignoreAllyTargetFree` 配置字段；准确战斗语义待确认。 */
                         "ignoreAllyTargetFree": boolean;
                         /** HealSplitToUnionFindMembersAction 的 `ignoreHealFree` 配置字段；准确战斗语义待确认。 */
                         "ignoreHealFree": boolean;
                         /** HealSplitToUnionFindMembersAction 的 `ignoreTargetFree` 配置字段；准确战斗语义待确认。 */
                         "ignoreTargetFree": boolean;
                         /** HealSplitToUnionFindMembersAction 的 `ignoreTargetSide` 配置字段；准确战斗语义待确认。 */
                         "ignoreTargetSide": boolean;
                         /** HealSplitToUnionFindMembersAction 的 `onlyIgnoreSomeOfTargetFreeCase` 配置字段；准确战斗语义待确认。 */
                         "onlyIgnoreSomeOfTargetFreeCase": boolean;
                         /** HealSplitToUnionFindMembersAction 的 `professionMask` 配置字段；准确战斗语义待确认。 */
                         "professionMask": "NONE";
                         /** HealSplitToUnionFindMembersAction 的 `purposeMask` 配置字段；准确战斗语义待确认。 */
                         "purposeMask": "NONE";
                         /** HealSplitToUnionFindMembersAction 的 `targetCategory` 配置字段；准确战斗语义待确认。 */
                         "targetCategory": "DEFAULT";
                         /** HealSplitToUnionFindMembersAction 的 `targetMotion` 配置字段；准确战斗语义待确认。 */
                         "targetMotion": "WALK_ONLY";
                         /** HealSplitToUnionFindMembersAction 的 `targetSide` 配置字段；准确战斗语义待确认。 */
                         "targetSide": "ALLY";
                         /** HealSplitToUnionFindMembersAction 的 `unitTypeMask` 配置字段；准确战斗语义待确认。 */
                         "unitTypeMask": "NONE";
                       };
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+HealToken, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface HealTokenAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+HealToken, Assembly-CSharp";
  /** HealTokenAction 的 `createEffect` 配置字段；准确战斗语义待确认。 */
  "_createEffect": boolean;
  /** HealTokenAction 的 `filterTokenMode` 配置字段；准确战斗语义待确认。 */
  "_filterTokenMode": boolean;
  /** HealTokenAction 的 `healByRatio` 配置字段；准确战斗语义待确认。 */
  "_healByRatio": boolean;
  /** HealTokenAction 的 `ignoreHealFree` 配置字段；准确战斗语义待确认。 */
  "_ignoreHealFree": boolean;
  /** HealTokenAction 的 `sourceTarget` 配置字段；准确战斗语义待确认。 */
  "_sourceTarget": "BUFF_OWNER";
  /** HealTokenAction 的 `tokenModes` 配置字段；准确战斗语义待确认。 */
  "_tokenModes": Array<number>;
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionH04 = HalfIdleUpgradeTrapWithRangeCheckAction | HasCertainCharacterInFrontOfMeAction | HasCharacterInCertainDirectionAction | HasTeammateAction | HasTileAlongDirectionAction | HaveShieldRoguelikeAction | Headb2FinishHighlandAOEAction | HealCurrentGiantBossViaMaxHpRatioAction | HealSplitToUnionFindMembersAction | HealTokenAction;
