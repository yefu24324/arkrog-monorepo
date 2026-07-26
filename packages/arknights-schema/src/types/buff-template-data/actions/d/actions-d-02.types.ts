/**
 * buff_template_data 的 D 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+DamageViaMaxHpRatio, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface DamageViaMaxHpRatioAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+DamageViaMaxHpRatio, Assembly-CSharp";
  /** DamageViaMaxHpRatioAction 的 `applyWay` 配置字段；准确战斗语义待确认。 */
  "_applyWay": "ALL" | "MELEE" | "NONE";
  /** DamageViaMaxHpRatioAction 的 `attackType` 配置字段；准确战斗语义待确认。 */
  "_attackType": "BUFF" | "NONE" | "NORMAL";
  /** 本次伤害使用的伤害类型。 */
  "_damageType": "MAGICAL" | "PURE";
  /** DamageViaMaxHpRatioAction 的 `getMaxHpFromTarget` 配置字段；准确战斗语义待确认。 */
  "_getMaxHpFromTarget": boolean;
  /** DamageViaMaxHpRatioAction 的 `ignoreForSp` 配置字段；准确战斗语义待确认。 */
  "_ignoreForSp": boolean;
  /** DamageViaMaxHpRatioAction 的 `isUndeadable` 配置字段；准确战斗语义待确认。 */
  "_isUndeadable": boolean;
  /** DamageViaMaxHpRatioAction 的 `multiplierKey` 配置字段；准确战斗语义待确认。 */
  "_multiplierKey": string;
  /** DamageViaMaxHpRatioAction 的 `multiplyByKey` 配置字段；准确战斗语义待确认。 */
  "_multiplyByKey": boolean;
  /** DamageViaMaxHpRatioAction 的 `noSourceDamage` 配置字段；准确战斗语义待确认。 */
  "_noSourceDamage": boolean;
  /** DamageViaMaxHpRatioAction 的 `skipModifierEvent` 配置字段；准确战斗语义待确认。 */
  "_skipModifierEvent": boolean;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "BUFF_SOURCE" | "MODIFIER_TARGET" | "SOURCE" | "TARGET";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+Dice, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface DiceAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+Dice, Assembly-CSharp";
  /** DiceAction 的 `probKey` 配置字段；准确战斗语义待确认。 */
  "_probKey": string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+DiceByBuffKeys, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface DiceByBuffKeysAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+DiceByBuffKeys, Assembly-CSharp";
  /** DiceByBuffKeysAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
  "_buffKey": string;
  /** DiceByBuffKeysAction 的 `isReverseProb` 配置字段；准确战斗语义待确认。 */
  "_isReverseProb": boolean;
  /** DiceByBuffKeysAction 的 `probKey` 配置字段；准确战斗语义待确认。 */
  "_probKey": string;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+DiceSlapShot, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface DiceSlapShotAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+DiceSlapShot, Assembly-CSharp";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+DisableEnemyHud, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface DisableEnemyHudAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+DisableEnemyHud, Assembly-CSharp";
  /** DisableEnemyHudAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+DisableEnemySwitchFaceByMove, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface DisableEnemySwitchFaceByMoveAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+DisableEnemySwitchFaceByMove, Assembly-CSharp";
  /** DisableEnemySwitchFaceByMoveAction 的 `disabled` 配置字段；准确战斗语义待确认。 */
  "_disabled": boolean;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+DisableTrait, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface DisableTraitAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+DisableTrait, Assembly-CSharp";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+DoCatchFootball, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface DoCatchFootballAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+DoCatchFootball, Assembly-CSharp";
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_SOURCE";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+DoClearance, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface DoClearanceAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+DoClearance, Assembly-CSharp";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+DoDribble, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface DoDribbleAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+DoDribble, Assembly-CSharp";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionD02 = DamageViaMaxHpRatioAction | DiceAction | DiceByBuffKeysAction | DiceSlapShotAction | DisableEnemyHudAction | DisableEnemySwitchFaceByMoveAction | DisableTraitAction | DoCatchFootballAction | DoClearanceAction | DoDribbleAction;
