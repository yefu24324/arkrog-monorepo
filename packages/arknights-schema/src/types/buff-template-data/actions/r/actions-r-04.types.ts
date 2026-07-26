/**
 * buff_template_data 的 R 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+RegistTaskUI, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface RegistTaskUIAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+RegistTaskUI, Assembly-CSharp";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+ReInitEnemySkillCoolDown, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface ReInitEnemySkillCoolDownAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+ReInitEnemySkillCoolDown, Assembly-CSharp";
  /** ReInitEnemySkillCoolDownAction 的 `checkSkillActive` 配置字段；准确战斗语义待确认。 */
  "_checkSkillActive": boolean;
  /** ReInitEnemySkillCoolDownAction 的 `onlyResetCD` 配置字段；准确战斗语义待确认。 */
  "_onlyResetCD": boolean;
  /** ReInitEnemySkillCoolDownAction 的 `ownerType` 配置字段；准确战斗语义待确认。 */
  "_ownerType": "BUFF_OWNER";
  /** ReInitEnemySkillCoolDownAction 的 `skillName` 配置字段；准确战斗语义待确认。 */
  "_skillName": null | string;
  /** ReInitEnemySkillCoolDownAction 的 `waitFirstPeriod` 配置字段；准确战斗语义待确认。 */
  "_waitFirstPeriod": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+ReleaseEnemyFromCurrentWave, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface ReleaseEnemyFromCurrentWaveAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+ReleaseEnemyFromCurrentWave, Assembly-CSharp";
  /** ReleaseEnemyFromCurrentWaveAction 的 `removeWaveCache` 配置字段；准确战斗语义待确认。 */
  "_removeWaveCache": boolean;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER" | "BUFF_SOURCE";
  /** ReleaseEnemyFromCurrentWaveAction 的 `trackEnemyAtNextWave` 配置字段；准确战斗语义待确认。 */
  "_trackEnemyAtNextWave": boolean;
  /** ReleaseEnemyFromCurrentWaveAction 的 `trackEnemyAtSpecificWave` 配置字段；准确战斗语义待确认。 */
  "_trackEnemyAtSpecificWave": boolean;
  /** ReleaseEnemyFromCurrentWaveAction 的 `trackEnemyAtWaveDelta` 配置字段；准确战斗语义待确认。 */
  "_trackEnemyAtWaveDelta": number;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+ReleaseFromBlocker, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface ReleaseFromBlockerAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+ReleaseFromBlocker, Assembly-CSharp";
  /** ReleaseFromBlockerAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER" | "BUFF_SOURCE" | "TARGET";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+RemainingRatioToAttributeModifier, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface RemainingRatioToAttributeModifierAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+RemainingRatioToAttributeModifier, Assembly-CSharp";
  /** 属性修改器指向的战斗属性。 */
  "_attributeType": "ATK" | "ATTACK_SPEED" | "DEF" | "MOVE_SPEED";
  /** RemainingRatioToAttributeModifierAction 的 `endTime` 配置字段；准确战斗语义待确认。 */
  "_endTime": number;
  /** RemainingRatioToAttributeModifierAction 的 `formulaType` 配置字段；准确战斗语义待确认。 */
  "_formulaType": "ADDITION" | "MULTIPLIER";
  /** RemainingRatioToAttributeModifierAction 的 `isInversed` 配置字段；准确战斗语义待确认。 */
  "_isInversed": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+RemoveCostTimerModifier, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface RemoveCostTimerModifierAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+RemoveCostTimerModifier, Assembly-CSharp";
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+RemoveFearTargetTiles, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface RemoveFearTargetTilesAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+RemoveFearTargetTiles, Assembly-CSharp";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+RemoveGameFinishBlockerByKey, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface RemoveGameFinishBlockerByKeyAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+RemoveGameFinishBlockerByKey, Assembly-CSharp";
  /** RemoveGameFinishBlockerByKeyAction 的 `blockerKey` 配置字段；准确战斗语义待确认。 */
  "_blockerKey": string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+RemoveRootTileFromBB, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface RemoveRootTileFromBBAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+RemoveRootTileFromBB, Assembly-CSharp";
  /** RemoveRootTileFromBBAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
  "_buffKey": string;
  /** RemoveRootTileFromBBAction 的 `buffSource` 配置字段；准确战斗语义待确认。 */
  "_buffSource": "BUFF_SOURCE";
  /** RemoveRootTileFromBBAction 的 `specificBuffBB` 配置字段；准确战斗语义待确认。 */
  "_specificBuffBB": boolean;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+RemoveTileBindingGlobalBuff, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface RemoveTileBindingGlobalBuffAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+RemoveTileBindingGlobalBuff, Assembly-CSharp";
  /** RemoveTileBindingGlobalBuffAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
  "_abilityName": string;
  /** RemoveTileBindingGlobalBuffAction 的 `abilitySource` 配置字段；准确战斗语义待确认。 */
  "_abilitySource": "SOURCE";
  /** RemoveTileBindingGlobalBuffAction 的 `globalBuffKey` 配置字段；准确战斗语义待确认。 */
  "_globalBuffKey": string;
  /** RemoveTileBindingGlobalBuffAction 的 `globalBuffPrefabKey` 配置字段；准确战斗语义待确认。 */
  "_globalBuffPrefabKey": string;
  /** RemoveTileBindingGlobalBuffAction 的 `selectorTarget` 配置字段；准确战斗语义待确认。 */
  "_selectorTarget": "TARGET";
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionR04 = RegistTaskUIAction | ReInitEnemySkillCoolDownAction | ReleaseEnemyFromCurrentWaveAction | ReleaseFromBlockerAction | RemainingRatioToAttributeModifierAction | RemoveCostTimerModifierAction | RemoveFearTargetTilesAction | RemoveGameFinishBlockerByKeyAction | RemoveRootTileFromBBAction | RemoveTileBindingGlobalBuffAction;
