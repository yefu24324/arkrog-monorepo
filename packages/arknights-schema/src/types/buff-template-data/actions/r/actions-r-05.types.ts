/**
 * buff_template_data 的 R 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+ReplaceAbilityDamageType, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface ReplaceAbilityDamageTypeAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+ReplaceAbilityDamageType, Assembly-CSharp";
  /** 本次伤害使用的伤害类型。 */
  "_damageType": "MAGICAL" | "PHYSICAL";
  /** ReplaceAbilityDamageTypeAction 的 `modes` 配置字段；准确战斗语义待确认。 */
  "_modes": Array<number>;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+ResetAbilityAtkScale, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface ResetAbilityAtkScaleAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+ResetAbilityAtkScale, Assembly-CSharp";
  /** ResetAbilityAtkScaleAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
  "_abilityName": string;
  /** ResetAbilityAtkScaleAction 的 `atkScale` 配置字段；准确战斗语义待确认。 */
  "_atkScale": string;
  /** ResetAbilityAtkScaleAction 的 `defaultAtkScale` 配置字段；准确战斗语义待确认。 */
  "_defaultAtkScale": number;
  /** ResetAbilityAtkScaleAction 的 `overwriteAtkScale` 配置字段；准确战斗语义待确认。 */
  "_overwriteAtkScale": boolean;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "BUFF_SOURCE";
  /** ResetAbilityAtkScaleAction 的 `useBuffAbility` 配置字段；准确战斗语义待确认。 */
  "_useBuffAbility": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+ResetAllBuffsTriggerTimer, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface ResetAllBuffsTriggerTimerAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+ResetAllBuffsTriggerTimer, Assembly-CSharp";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+ResetBornState, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface ResetBornStateAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+ResetBornState, Assembly-CSharp";
  /** ResetBornStateAction 的 `animKey` 配置字段；准确战斗语义待确认。 */
  "_animKey": string;
  /** ResetBornStateAction 的 `effect` 配置字段；准确战斗语义待确认。 */
  "_effect": string;
  /** ResetBornStateAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+ResetBuffAbilityAtkScaleWithBuffCnt, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface ResetBuffAbilityAtkScaleWithBuffCntAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+ResetBuffAbilityAtkScaleWithBuffCnt, Assembly-CSharp";
  /** ResetBuffAbilityAtkScaleWithBuffCntAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
  "_buffKey": string;
  /** ResetBuffAbilityAtkScaleWithBuffCntAction 的 `buffSourceType` 配置字段；准确战斗语义待确认。 */
  "_buffSourceType": "BUFF_SOURCE";
  /** ResetBuffAbilityAtkScaleWithBuffCntAction 的 `checkBuffSource` 配置字段；准确战斗语义待确认。 */
  "_checkBuffSource": boolean;
  /** ResetBuffAbilityAtkScaleWithBuffCntAction 的 `defaultValue` 配置字段；准确战斗语义待确认。 */
  "_defaultValue": string;
  /** ResetBuffAbilityAtkScaleWithBuffCntAction 的 `factorValue` 配置字段；准确战斗语义待确认。 */
  "_factorValue": string;
  /** ResetBuffAbilityAtkScaleWithBuffCntAction 的 `overwriteAtkScale` 配置字段；准确战斗语义待确认。 */
  "_overwriteAtkScale": boolean;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+ResetCardRespawnTime, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface ResetCardRespawnTimeAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+ResetCardRespawnTime, Assembly-CSharp";
  /** ResetCardRespawnTimeAction 的 `blackBoardKey` 配置字段；准确战斗语义待确认。 */
  "_blackBoardKey": string;
  /** ResetCardRespawnTimeAction 的 `waitFirstPeriod` 配置字段；准确战斗语义待确认。 */
  "_waitFirstPeriod": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+ResetDataFunLiveModeOnly, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface ResetDataFunLiveModeOnlyAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+ResetDataFunLiveModeOnly, Assembly-CSharp";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+ResetTokenRespawnTime, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface ResetTokenRespawnTimeAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+ResetTokenRespawnTime, Assembly-CSharp";
  /** ResetTokenRespawnTimeAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
  /** ResetTokenRespawnTimeAction 的 `waitFirstPeriod` 配置字段；准确战斗语义待确认。 */
  "_waitFirstPeriod": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+RespawnCharacter, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface RespawnCharacterAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+RespawnCharacter, Assembly-CSharp";
  /** RespawnCharacterAction 的 `addSharedBlackboardValueIfExists` 配置字段；准确战斗语义待确认。 */
  "_addSharedBlackboardValueIfExists": boolean;
  /** RespawnCharacterAction 的 `assignSkillProgress` 配置字段；准确战斗语义待确认。 */
  "_assignSkillProgress": boolean;
  /** RespawnCharacterAction 的 `buildCheckParam` 配置字段；准确战斗语义待确认。 */
  "_buildCheckParam": {
                           /** RespawnCharacterAction 的 `ignoreBuildableType` 配置字段；准确战斗语义待确认。 */
                           "ignoreBuildableType": boolean;
                         };
  /** RespawnCharacterAction 的 `canRespawnInPlace` 配置字段；准确战斗语义待确认。 */
  "_canRespawnInPlace": boolean;
  /** RespawnCharacterAction 的 `colKey` 配置字段；准确战斗语义待确认。 */
  "_colKey": string;
  /** RespawnCharacterAction 的 `forceRespawnInPlace` 配置字段；准确战斗语义待确认。 */
  "_forceRespawnInPlace": boolean;
  /** RespawnCharacterAction 的 `forceSpawn` 配置字段；准确战斗语义待确认。 */
  "_forceSpawn": boolean;
  /** RespawnCharacterAction 的 `ignoreAdvancedBuildableMask` 配置字段；准确战斗语义待确认。 */
  "_ignoreAdvancedBuildableMask": boolean;
  /** RespawnCharacterAction 的 `loadDirectionFromBB` 配置字段；准确战斗语义待确认。 */
  "_loadDirectionFromBB": boolean;
  /** RespawnCharacterAction 的 `loadPosFromSharedBlackboard` 配置字段；准确战斗语义待确认。 */
  "_loadPosFromSharedBlackboard": boolean;
  /** RespawnCharacterAction 的 `recordRespawnToSharedData` 配置字段；准确战斗语义待确认。 */
  "_recordRespawnToSharedData": boolean;
  /** RespawnCharacterAction 的 `respawnBBKey` 配置字段；准确战斗语义待确认。 */
  "_respawnBBKey": string;
  /** RespawnCharacterAction 的 `respawnBlackboardKeys` 配置字段；准确战斗语义待确认。 */
  "_respawnBlackboardKeys": Array<string>;
  /** RespawnCharacterAction 的 `respawnInPlaceBBKey` 配置字段；准确战斗语义待确认。 */
  "_respawnInPlaceBBKey": string;
  /** RespawnCharacterAction 的 `respawnInSameTile` 配置字段；准确战斗语义待确认。 */
  "_respawnInSameTile": boolean;
  /** RespawnCharacterAction 的 `rowKey` 配置字段；准确战斗语义待确认。 */
  "_rowKey": string;
  /** RespawnCharacterAction 的 `skillProgressBBKey` 配置字段；准确战斗语义待确认。 */
  "_skillProgressBBKey": string;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "SOURCE";
  /** RespawnCharacterAction 的 `useExternalRespawn` 配置字段；准确战斗语义待确认。 */
  "_useExternalRespawn": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+RespawnCharacterByCardUid, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface RespawnCharacterByCardUidAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+RespawnCharacterByCardUid, Assembly-CSharp";
  /** RespawnCharacterByCardUidAction 的 `ignoreAdvancedBuildableMask` 配置字段；准确战斗语义待确认。 */
  "_ignoreAdvancedBuildableMask": boolean;
  /** Action 作用的目标实体类型。 */
  "_targetType": "TARGET";
  /** RespawnCharacterByCardUidAction 的 `uidKey` 配置字段；准确战斗语义待确认。 */
  "_uidKey": string;
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionR05 = ReplaceAbilityDamageTypeAction | ResetAbilityAtkScaleAction | ResetAllBuffsTriggerTimerAction | ResetBornStateAction | ResetBuffAbilityAtkScaleWithBuffCntAction | ResetCardRespawnTimeAction | ResetDataFunLiveModeOnlyAction | ResetTokenRespawnTimeAction | RespawnCharacterAction | RespawnCharacterByCardUidAction;
