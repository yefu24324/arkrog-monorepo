/**
 * buff_template_data 的 K 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+KnockBackWithDirection, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface KnockBackWithDirectionAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+KnockBackWithDirection, Assembly-CSharp";
  /** KnockBackWithDirectionAction 的 `defaultForceLevel` 配置字段；准确战斗语义待确认。 */
  "_defaultForceLevel": number;
  /** KnockBackWithDirectionAction 的 `direction` 配置字段；准确战斗语义待确认。 */
  "_direction": string;
  /** KnockBackWithDirectionAction 的 `useSourceDirection` 配置字段；准确战斗语义待确认。 */
  "_useSourceDirection": boolean;
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionK02 = KnockBackWithDirectionAction;
