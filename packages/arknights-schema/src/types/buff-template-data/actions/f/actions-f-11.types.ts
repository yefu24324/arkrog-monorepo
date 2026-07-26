/**
 * buff_template_data 的 F 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+ForceUpdateRange, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface ForceUpdateRangeAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+ForceUpdateRange, Assembly-CSharp";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+ForSurrounded4Tile, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface ForSurrounded4TileAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+ForSurrounded4Tile, Assembly-CSharp";
  /** ForSurrounded4TileAction 的 `anchorType` 配置字段；准确战斗语义待确认。 */
  "_anchorType": "BUFF_OWNER";
  /** ForSurrounded4TileAction 的 `filterSide` 配置字段；准确战斗语义待确认。 */
  "_filterSide": "ALLY";
  /** ForSurrounded4TileAction 的 `perCharacterNodes` 配置字段；准确战斗语义待确认。 */
  "_perCharacterNodes": Array<BattleAction>;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+FortressAddTileBlackboard, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface FortressAddTileBlackboardAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+FortressAddTileBlackboard, Assembly-CSharp";
  /** 读取或写入战斗黑板的参数键。 */
  "_blackboardKey": string;
  /** FortressAddTileBlackboardAction 的 `clearBlackboard` 配置字段；准确战斗语义待确认。 */
  "_clearBlackboard": boolean;
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionF11 = ForceUpdateRangeAction | ForSurrounded4TileAction | FortressAddTileBlackboardAction;
