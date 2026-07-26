/**
 * buff_template_data 的 R 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+RistarRecordDirection, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface RistarRecordDirectionAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+RistarRecordDirection, Assembly-CSharp";
  /** RistarRecordDirectionAction 的 `isAura` 配置字段；准确战斗语义待确认。 */
  "_isAura": boolean;
  /** RistarRecordDirectionAction 的 `source` 配置字段；准确战斗语义待确认。 */
  "_source": "BUFF_SOURCE" | "MODIFIER_SOURCE";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+RO4DLC2EndBossSealTileSkill, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface RO4DLC2EndBossSealTileSkillAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+RO4DLC2EndBossSealTileSkill, Assembly-CSharp";
  /** RO4DLC2EndBossSealTileSkillAction 的 `evnSysKey` 配置字段；准确战斗语义待确认。 */
  "_evnSysKey": string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+RO4DLC2TriggerBossSealTileSkill, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface RO4DLC2TriggerBossSealTileSkillAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+RO4DLC2TriggerBossSealTileSkill, Assembly-CSharp";
  /** RO4DLC2TriggerBossSealTileSkillAction 的 `endColKey` 配置字段；准确战斗语义待确认。 */
  "_endColKey": string;
  /** RO4DLC2TriggerBossSealTileSkillAction 的 `evnSysKey` 配置字段；准确战斗语义待确认。 */
  "_evnSysKey": string;
  /** RO4DLC2TriggerBossSealTileSkillAction 的 `intervalKey` 配置字段；准确战斗语义待确认。 */
  "_intervalKey": string;
  /** RO4DLC2TriggerBossSealTileSkillAction 的 `startColKey` 配置字段；准确战斗语义待确认。 */
  "_startColKey": string;
  /** RO4DLC2TriggerBossSealTileSkillAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+Rogue6StormDirectionCheck, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface Rogue6StormDirectionCheckAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+Rogue6StormDirectionCheck, Assembly-CSharp";
  /** Rogue6StormDirectionCheckAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+RoguelikeAssignCharacterInCandleHolderCntToBlackboard, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface RoguelikeAssignCharacterInCandleHolderCntToBlackboardAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+RoguelikeAssignCharacterInCandleHolderCntToBlackboard, Assembly-CSharp";
  /** RoguelikeAssignCharacterInCandleHolderCntToBlackboardAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
  /** RoguelikeAssignCharacterInCandleHolderCntToBlackboardAction 的 `blackboardKey` 配置字段；准确战斗语义待确认。 */
  "blackboardKey": string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+RoguelikeCheckZoneType, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface RoguelikeCheckZoneTypeAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+RoguelikeCheckZoneType, Assembly-CSharp";
  /** RoguelikeCheckZoneTypeAction 的 `zoneType` 配置字段；准确战斗语义待确认。 */
  "_zoneType": "SP";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+RoguelikeDeifyModeCheckStage, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface RoguelikeDeifyModeCheckStageAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+RoguelikeDeifyModeCheckStage, Assembly-CSharp";
  /** RoguelikeDeifyModeCheckStageAction 的 `gameStage` 配置字段；准确战斗语义待确认。 */
  "gameStage": string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+RoguelikeDeifyModeRegisterChosenCharacter, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface RoguelikeDeifyModeRegisterChosenCharacterAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+RoguelikeDeifyModeRegisterChosenCharacter, Assembly-CSharp";
  /** RoguelikeDeifyModeRegisterChosenCharacterAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "TARGET";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+RoguelikeDeifyModeRegisterDeifyTrap, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface RoguelikeDeifyModeRegisterDeifyTrapAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+RoguelikeDeifyModeRegisterDeifyTrap, Assembly-CSharp";
  /** RoguelikeDeifyModeRegisterDeifyTrapAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+RoguelikeDuelModeCheckStage, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface RoguelikeDuelModeCheckStageAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+RoguelikeDuelModeCheckStage, Assembly-CSharp";
  /** RoguelikeDuelModeCheckStageAction 的 `gameStage` 配置字段；准确战斗语义待确认。 */
  "gameStage": string;
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionR07 = RistarRecordDirectionAction | RO4DLC2EndBossSealTileSkillAction | RO4DLC2TriggerBossSealTileSkillAction | Rogue6StormDirectionCheckAction | RoguelikeAssignCharacterInCandleHolderCntToBlackboardAction | RoguelikeCheckZoneTypeAction | RoguelikeDeifyModeCheckStageAction | RoguelikeDeifyModeRegisterChosenCharacterAction | RoguelikeDeifyModeRegisterDeifyTrapAction | RoguelikeDuelModeCheckStageAction;
