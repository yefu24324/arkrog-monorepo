/**
 * buff_template_data 的 M 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+ModifyAttackMaxTarget, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface ModifyAttackMaxTargetAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+ModifyAttackMaxTarget, Assembly-CSharp";
  /** ModifyAttackMaxTargetAction 的 `maxTarget` 配置字段；准确战斗语义待确认。 */
  "_maxTarget": number;
  /** ModifyAttackMaxTargetAction 的 `modeIndex` 配置字段；准确战斗语义待确认。 */
  "_modeIndex": number;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+ModifyAttackMaxTileNum, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface ModifyAttackMaxTileNumAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+ModifyAttackMaxTileNum, Assembly-CSharp";
  /** ModifyAttackMaxTileNumAction 的 `maxTileNum` 配置字段；准确战斗语义待确认。 */
  "_maxTileNum": number;
  /** ModifyAttackMaxTileNumAction 的 `modeIndex` 配置字段；准确战斗语义待确认。 */
  "_modeIndex": number;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+ModifyAttributeDataRangeOverride, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface ModifyAttributeDataRangeOverrideAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+ModifyAttributeDataRangeOverride, Assembly-CSharp";
  /** 属性修改器指向的战斗属性。 */
  "_attributeType": "ATTACK_SPEED" | "BASE_ATTACK_TIME" | "MAX_HP" | "MOVE_SPEED";
  /** ModifyAttributeDataRangeOverrideAction 的 `doClear` 配置字段；准确战斗语义待确认。 */
  "_doClear": boolean;
  /** ModifyAttributeDataRangeOverrideAction 的 `maxValueKey` 配置字段；准确战斗语义待确认。 */
  "_maxValueKey": null | string;
  /** ModifyAttributeDataRangeOverrideAction 的 `minValueKey` 配置字段；准确战斗语义待确认。 */
  "_minValueKey": null | string;
  /** ModifyAttributeDataRangeOverrideAction 的 `refresh` 配置字段；准确战斗语义待确认。 */
  "_refresh": boolean;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+ModifyAttributeRawDataByEntity, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface ModifyAttributeRawDataByEntityAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+ModifyAttributeRawDataByEntity, Assembly-CSharp";
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_SOURCE" | "TARGET";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
  /** ModifyAttributeRawDataByEntityAction 的 `typesNeedtoModify` 配置字段；准确战斗语义待确认。 */
  "_typesNeedtoModify": Array<string>;
  /** ModifyAttributeRawDataByEntityAction 的 `typesNeedtoUseRatio` 配置字段；准确战斗语义待确认。 */
  "_typesNeedtoUseRatio": Array<string>;
  /** ModifyAttributeRawDataByEntityAction 的 `useCardSnapshot` 配置字段；准确战斗语义待确认。 */
  "_useCardSnapshot": boolean;
  /** ModifyAttributeRawDataByEntityAction 的 `useRatio` 配置字段；准确战斗语义待确认。 */
  "_useRatio": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+ModifyBlackboard, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface ModifyBlackboardAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+ModifyBlackboard, Assembly-CSharp";
  /** ModifyBlackboardAction 的 `addBasedOriginValue` 配置字段；准确战斗语义待确认。 */
  "_addBasedOriginValue": boolean;
  /** ModifyBlackboardAction 的 `blackboardKeys` 配置字段；准确战斗语义待确认。 */
  "_blackboardKeys": string;
  /** ModifyBlackboardAction 的 `checkFromBlackboardValue` 配置字段；准确战斗语义待确认。 */
  "_checkFromBlackboardValue": boolean;
  /** ModifyBlackboardAction 的 `fromBlackboardKeys` 配置字段；准确战斗语义待确认。 */
  "_fromBlackboardKeys": null | string;
  /** ModifyBlackboardAction 的 `value` 配置字段；准确战斗语义待确认。 */
  "_value": number;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+ModifyBlackboardFromTrait, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface ModifyBlackboardFromTraitAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+ModifyBlackboardFromTrait, Assembly-CSharp";
  /** ModifyBlackboardFromTraitAction 的 `addBasedOriginValue` 配置字段；准确战斗语义待确认。 */
  "_addBasedOriginValue": boolean;
  /** ModifyBlackboardFromTraitAction 的 `blackboardKeys` 配置字段；准确战斗语义待确认。 */
  "_blackboardKeys": string;
  /** ModifyBlackboardFromTraitAction 的 `checkFromBlackboardValue` 配置字段；准确战斗语义待确认。 */
  "_checkFromBlackboardValue": boolean;
  /** ModifyBlackboardFromTraitAction 的 `fromBlackboardKeys` 配置字段；准确战斗语义待确认。 */
  "_fromBlackboardKeys": string;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
  /** ModifyBlackboardFromTraitAction 的 `value` 配置字段；准确战斗语义待确认。 */
  "_value": number;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+ModifyBlackboardMainline12, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface ModifyBlackboardMainline12Action {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+ModifyBlackboardMainline12, Assembly-CSharp";
  /** ModifyBlackboardMainline12Action 的 `abilityName` 配置字段；准确战斗语义待确认。 */
  "_abilityName": string;
  /** 读取或写入战斗黑板的参数键。 */
  "_blackboardKey": string;
  /** ModifyBlackboardMainline12Action 的 `hostBuffID` 配置字段；准确战斗语义待确认。 */
  "_hostBuffID": null | string;
  /** ModifyBlackboardMainline12Action 的 `rewriteBlackboardKey` 配置字段；准确战斗语义待确认。 */
  "_rewriteBlackboardKey": null | string;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER";
  /** ModifyBlackboardMainline12Action 的 `viaHostBuffStackCount` 配置字段；准确战斗语义待确认。 */
  "_viaHostBuffStackCount": boolean;
  /** ModifyBlackboardMainline12Action 的 `viaStandsCount` 配置字段；准确战斗语义待确认。 */
  "_viaStandsCount": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+ModifyBlackboardStr, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface ModifyBlackboardStrAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+ModifyBlackboardStr, Assembly-CSharp";
  /** ModifyBlackboardStrAction 的 `blackboardKeys` 配置字段；准确战斗语义待确认。 */
  "_blackboardKeys": string;
  /** ModifyBlackboardStrAction 的 `checkFromBlackboardValue` 配置字段；准确战斗语义待确认。 */
  "_checkFromBlackboardValue": boolean;
  /** ModifyBlackboardStrAction 的 `fromBlackboardKeys` 配置字段；准确战斗语义待确认。 */
  "_fromBlackboardKeys": null | string;
  /** ModifyBlackboardStrAction 的 `value` 配置字段；准确战斗语义待确认。 */
  "_value": null | string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+ModifyBoomberangMaxCnt, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface ModifyBoomberangMaxCntAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+ModifyBoomberangMaxCnt, Assembly-CSharp";
  /** ModifyBoomberangMaxCntAction 的 `reset` 配置字段；准确战斗语义待确认。 */
  "_reset": boolean;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+ModifyBossRushBattleAreaData, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface ModifyBossRushBattleAreaDataAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+ModifyBossRushBattleAreaData, Assembly-CSharp";
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionM04 = ModifyAttackMaxTargetAction | ModifyAttackMaxTileNumAction | ModifyAttributeDataRangeOverrideAction | ModifyAttributeRawDataByEntityAction | ModifyBlackboardAction | ModifyBlackboardFromTraitAction | ModifyBlackboardMainline12Action | ModifyBlackboardStrAction | ModifyBoomberangMaxCntAction | ModifyBossRushBattleAreaDataAction;
