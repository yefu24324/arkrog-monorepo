/**
 * buff_template_data 的 W 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+WeakDamage, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface WeakDamageAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+WeakDamage, Assembly-CSharp";
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+Whitw2Skill3EmitFunnelProjectile, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface Whitw2Skill3EmitFunnelProjectileAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+Whitw2Skill3EmitFunnelProjectile, Assembly-CSharp";
  /** Whitw2Skill3EmitFunnelProjectileAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
  "_abilityName": string;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "SOURCE";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+WinGame, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface WinGameAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+WinGame, Assembly-CSharp";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+Withdraw, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface WithdrawAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+Withdraw, Assembly-CSharp";
  /** WithdrawAction 的 `force` 配置字段；准确战斗语义待确认。 */
  "_force": boolean;
  /** WithdrawAction 的 `needLog` 配置字段；准确战斗语义待确认。 */
  "_needLog": boolean;
  /** WithdrawAction 的 `switchToDeadState` 配置字段；准确战斗语义待确认。 */
  "_switchToDeadState": boolean;
  /** WithdrawAction 的 `withdrawSource` 配置字段；准确战斗语义待确认。 */
  "_withdrawSource": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+WithdrawAlltheSameExcludeSource, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface WithdrawAlltheSameExcludeSourceAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+WithdrawAlltheSameExcludeSource, Assembly-CSharp";
  /** WithdrawAlltheSameExcludeSourceAction 的 `skipReborn` 配置字段；准确战斗语义待确认。 */
  "_skipReborn": boolean;
  /** WithdrawAlltheSameExcludeSourceAction 的 `source` 配置字段；准确战斗语义待确认。 */
  "_source": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+WithdrawTokens, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface WithdrawTokensAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+WithdrawTokens, Assembly-CSharp";
  /** WithdrawTokensAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
  "_buffKey": string;
  /** WithdrawTokensAction 的 `checkContainsBuff` 配置字段；准确战斗语义待确认。 */
  "_checkContainsBuff": boolean;
  /** WithdrawTokensAction 的 `force` 配置字段；准确战斗语义待确认。 */
  "_force": boolean;
  /** WithdrawTokensAction 的 `needLog` 配置字段；准确战斗语义待确认。 */
  "_needLog": boolean;
  /** WithdrawTokensAction 的 `switchToDeadState` 配置字段；准确战斗语义待确认。 */
  "_switchToDeadState": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+WriteBossrushWaveCntToBlackboard, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface WriteBossrushWaveCntToBlackboardAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+WriteBossrushWaveCntToBlackboard, Assembly-CSharp";
  /** 读取或写入战斗黑板的参数键。 */
  "_blackboardKey": string;
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionW01 = WeakDamageAction | Whitw2Skill3EmitFunnelProjectileAction | WinGameAction | WithdrawAction | WithdrawAlltheSameExcludeSourceAction | WithdrawTokensAction | WriteBossrushWaveCntToBlackboardAction;
