/**
 * buff_template_data 的 Y 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+YmgpckKnockBackWithDirection, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface YmgpckKnockBackWithDirectionAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+YmgpckKnockBackWithDirection, Assembly-CSharp";
  /** YmgpckKnockBackWithDirectionAction 的 `defaultForceLevel` 配置字段；准确战斗语义待确认。 */
  "_defaultForceLevel": number;
  /** YmgpckKnockBackWithDirectionAction 的 `direction` 配置字段；准确战斗语义待确认。 */
  "_direction": string;
  /** YmgpckKnockBackWithDirectionAction 的 `useSourceDirection` 配置字段；准确战斗语义待确认。 */
  "_useSourceDirection": boolean;
  /** YmgpckKnockBackWithDirectionAction 的 `needUpdateVelocity` 配置字段；准确战斗语义待确认。 */
  "needUpdateVelocity": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+YmgpckTouchTargetGainScoreOrGrade, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface YmgpckTouchTargetGainScoreOrGradeAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+YmgpckTouchTargetGainScoreOrGrade, Assembly-CSharp";
  /** YmgpckTouchTargetGainScoreOrGradeAction 的 `effectTime` 配置字段；准确战斗语义待确认。 */
  "_effectTime": number;
  /** YmgpckTouchTargetGainScoreOrGradeAction 的 `envSysKey` 配置字段；准确战斗语义待确认。 */
  "_envSysKey": string;
  /** YmgpckTouchTargetGainScoreOrGradeAction 的 `gainType` 配置字段；准确战斗语义待确认。 */
  "_gainType": "SCORE";
  /** YmgpckTouchTargetGainScoreOrGradeAction 的 `hitCountKey` 配置字段；准确战斗语义待确认。 */
  "_hitCountKey": string;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionY01 = YmgpckKnockBackWithDirectionAction | YmgpckTouchTargetGainScoreOrGradeAction;
