/**
 * buff_template_data 的 S 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SwitchSourceDirection, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SwitchSourceDirectionAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SwitchSourceDirection, Assembly-CSharp";
  /** SwitchSourceDirectionAction 的 `downNodes` 配置字段；准确战斗语义待确认。 */
  "_downNodes": Array<BattleAction>;
  /** SwitchSourceDirectionAction 的 `leftNodes` 配置字段；准确战斗语义待确认。 */
  "_leftNodes": Array<BattleAction>;
  /** SwitchSourceDirectionAction 的 `rightNodes` 配置字段；准确战斗语义待确认。 */
  "_rightNodes": Array<BattleAction>;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
  /** SwitchSourceDirectionAction 的 `upNodes` 配置字段；准确战斗语义待确认。 */
  "_upNodes": Array<BattleAction>;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SwitchSubSpineConfig, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SwitchSubSpineConfigAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SwitchSubSpineConfig, Assembly-CSharp";
  /** SwitchSubSpineConfigAction 的 `defaultToRandom` 配置字段；准确战斗语义待确认。 */
  "_defaultToRandom": boolean;
  /** SwitchSubSpineConfigAction 的 `index` 配置字段；准确战斗语义待确认。 */
  "_index": number;
  /** SwitchSubSpineConfigAction 的 `indexKey` 配置字段；准确战斗语义待确认。 */
  "_indexKey": string;
  /** SwitchSubSpineConfigAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SwitchTokenCategory, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SwitchTokenCategoryAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SwitchTokenCategory, Assembly-CSharp";
  /** SwitchTokenCategoryAction 的 `category` 配置字段；准确战斗语义待确认。 */
  "_category": "DEFAULT" | "TRAP_OR_ITEM";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SwitchToRebornState, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SwitchToRebornStateAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SwitchToRebornState, Assembly-CSharp";
  /** SwitchToRebornStateAction 的 `isForce` 配置字段；准确战斗语义待确认。 */
  "_isForce": boolean;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionS17 = SwitchSourceDirectionAction | SwitchSubSpineConfigAction | SwitchTokenCategoryAction | SwitchToRebornStateAction;
