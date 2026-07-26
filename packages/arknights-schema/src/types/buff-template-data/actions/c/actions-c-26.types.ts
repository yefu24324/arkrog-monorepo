/**
 * buff_template_data 的 C 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CreateCardBuffFilterByCardState, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CreateCardBuffFilterByCardStateAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CreateCardBuffFilterByCardState, Assembly-CSharp";
  /** CreateCardBuffFilterByCardStateAction 的 `cardBuffKey` 配置字段；准确战斗语义待确认。 */
  "_cardBuffKey": null;
  /** CreateCardBuffFilterByCardStateAction 的 `cardState` 配置字段；准确战斗语义待确认。 */
  "_cardState": string;
  /** CreateCardBuffFilterByCardStateAction 的 `enableMaxStackCount` 配置字段；准确战斗语义待确认。 */
  "_enableMaxStackCount": boolean;
  /** CreateCardBuffFilterByCardStateAction 的 `filterIsInHand` 配置字段；准确战斗语义待确认。 */
  "_filterIsInHand": boolean;
  /** CreateCardBuffFilterByCardStateAction 的 `ignoreNullOwner` 配置字段；准确战斗语义待确认。 */
  "_ignoreNullOwner": boolean;
  /** CreateCardBuffFilterByCardStateAction 的 `isRatio` 配置字段；准确战斗语义待确认。 */
  "_isRatio": boolean;
  /** CreateCardBuffFilterByCardStateAction 的 `lifeType` 配置字段；准确战斗语义待确认。 */
  "_lifeType": "UNTIL_NEXT_SPAWN";
  /** CreateCardBuffFilterByCardStateAction 的 `randomCard` 配置字段；准确战斗语义待确认。 */
  "_randomCard": boolean;
  /** CreateCardBuffFilterByCardStateAction 的 `useCardBuffKey` 配置字段；准确战斗语义待确认。 */
  "_useCardBuffKey": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CreateCardBuffFilterByDeckBuff, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CreateCardBuffFilterByDeckBuffAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CreateCardBuffFilterByDeckBuff, Assembly-CSharp";
  /** CreateCardBuffFilterByDeckBuffAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
  "_buffKey": string;
  /** CreateCardBuffFilterByDeckBuffAction 的 `cardBuffKey` 配置字段；准确战斗语义待确认。 */
  "_cardBuffKey": null;
  /** CreateCardBuffFilterByDeckBuffAction 的 `enableMaxStackCount` 配置字段；准确战斗语义待确认。 */
  "_enableMaxStackCount": boolean;
  /** CreateCardBuffFilterByDeckBuffAction 的 `filterIsInHand` 配置字段；准确战斗语义待确认。 */
  "_filterIsInHand": boolean;
  /** CreateCardBuffFilterByDeckBuffAction 的 `isRatio` 配置字段；准确战斗语义待确认。 */
  "_isRatio": boolean;
  /** CreateCardBuffFilterByDeckBuffAction 的 `lifeType` 配置字段；准确战斗语义待确认。 */
  "_lifeType": "HOLD_BY_BUFF";
  /** CreateCardBuffFilterByDeckBuffAction 的 `useCardBuffKey` 配置字段；准确战斗语义待确认。 */
  "_useCardBuffKey": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CreateCardBuffFilterByRarityAndProfession, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CreateCardBuffFilterByRarityAndProfessionAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CreateCardBuffFilterByRarityAndProfession, Assembly-CSharp";
  /** CreateCardBuffFilterByRarityAndProfessionAction 的 `cardBuffKey` 配置字段；准确战斗语义待确认。 */
  "_cardBuffKey": null;
  /** CreateCardBuffFilterByRarityAndProfessionAction 的 `enableMaxStackCount` 配置字段；准确战斗语义待确认。 */
  "_enableMaxStackCount": boolean;
  /** CreateCardBuffFilterByRarityAndProfessionAction 的 `filterIsInHand` 配置字段；准确战斗语义待确认。 */
  "_filterIsInHand": boolean;
  /** CreateCardBuffFilterByRarityAndProfessionAction 的 `isRatio` 配置字段；准确战斗语义待确认。 */
  "_isRatio": boolean;
  /** CreateCardBuffFilterByRarityAndProfessionAction 的 `lifeType` 配置字段；准确战斗语义待确认。 */
  "_lifeType": "ALL_THE_TIME" | "UNTIL_NEXT_SPAWN";
  /** CreateCardBuffFilterByRarityAndProfessionAction 的 `profession` 配置字段；准确战斗语义待确认。 */
  "_profession": Array<"CASTER" | "MEDIC" | "PIONEER" | "SNIPER" | "SPECIAL" | "SUPPORT" | "TANK" | "TOKEN, TRAP" | "TRAP" | "WARRIOR">;
  /** CreateCardBuffFilterByRarityAndProfessionAction 的 `rarity` 配置字段；准确战斗语义待确认。 */
  "_rarity": string;
  /** CreateCardBuffFilterByRarityAndProfessionAction 的 `useCardBuffKey` 配置字段；准确战斗语义待确认。 */
  "_useCardBuffKey": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CreateCardBuffFilterByTag, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CreateCardBuffFilterByTagAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CreateCardBuffFilterByTag, Assembly-CSharp";
  /** CreateCardBuffFilterByTagAction 的 `cardBuffKey` 配置字段；准确战斗语义待确认。 */
  "_cardBuffKey": null;
  /** CreateCardBuffFilterByTagAction 的 `enableMaxStackCount` 配置字段；准确战斗语义待确认。 */
  "_enableMaxStackCount": boolean;
  /** CreateCardBuffFilterByTagAction 的 `filterIsInHand` 配置字段；准确战斗语义待确认。 */
  "_filterIsInHand": boolean;
  /** CreateCardBuffFilterByTagAction 的 `isRatio` 配置字段；准确战斗语义待确认。 */
  "_isRatio": boolean;
  /** CreateCardBuffFilterByTagAction 的 `lifeType` 配置字段；准确战斗语义待确认。 */
  "_lifeType": "HOLD_BY_BUFF" | "UNTIL_NEXT_SPAWN";
  /** CreateCardBuffFilterByTagAction 的 `tag` 配置字段；准确战斗语义待确认。 */
  "_tag": string;
  /** CreateCardBuffFilterByTagAction 的 `useCardBuffKey` 配置字段；准确战斗语义待确认。 */
  "_useCardBuffKey": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CreateCardBuffMarkInAbilityBlackboard, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CreateCardBuffMarkInAbilityBlackboardAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CreateCardBuffMarkInAbilityBlackboard, Assembly-CSharp";
  /** CreateCardBuffMarkInAbilityBlackboardAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
  "_abilityName": string;
  /** CreateCardBuffMarkInAbilityBlackboardAction 的 `cardBuffKey` 配置字段；准确战斗语义待确认。 */
  "_cardBuffKey": string;
  /** CreateCardBuffMarkInAbilityBlackboardAction 的 `enableMaxStackCount` 配置字段；准确战斗语义待确认。 */
  "_enableMaxStackCount": boolean;
  /** CreateCardBuffMarkInAbilityBlackboardAction 的 `filterIsInHand` 配置字段；准确战斗语义待确认。 */
  "_filterIsInHand": boolean;
  /** CreateCardBuffMarkInAbilityBlackboardAction 的 `infoType` 配置字段；准确战斗语义待确认。 */
  "_infoType": "UNIQUE_ID";
  /** CreateCardBuffMarkInAbilityBlackboardAction 的 `isRatio` 配置字段；准确战斗语义待确认。 */
  "_isRatio": boolean;
  /** CreateCardBuffMarkInAbilityBlackboardAction 的 `lifeType` 配置字段；准确战斗语义待确认。 */
  "_lifeType": "IMMEDIATELY";
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER";
  /** CreateCardBuffMarkInAbilityBlackboardAction 的 `useCardBuffKey` 配置字段；准确战斗语义待确认。 */
  "_useCardBuffKey": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CreateCardBuffToAllCard, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CreateCardBuffToAllCardAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CreateCardBuffToAllCard, Assembly-CSharp";
  /** CreateCardBuffToAllCardAction 的 `buffAsSource` 配置字段；准确战斗语义待确认。 */
  "_buffAsSource": boolean;
  /** CreateCardBuffToAllCardAction 的 `cardBuffKey` 配置字段；准确战斗语义待确认。 */
  "_cardBuffKey": null | string;
  /** CreateCardBuffToAllCardAction 的 `enableMaxStackCount` 配置字段；准确战斗语义待确认。 */
  "_enableMaxStackCount": boolean;
  /** CreateCardBuffToAllCardAction 的 `exceptOwner` 配置字段；准确战斗语义待确认。 */
  "_exceptOwner": boolean;
  /** CreateCardBuffToAllCardAction 的 `exceptTokenAndTrap` 配置字段；准确战斗语义待确认。 */
  "_exceptTokenAndTrap": boolean;
  /** CreateCardBuffToAllCardAction 的 `filterIsInHand` 配置字段；准确战斗语义待确认。 */
  "_filterIsInHand": boolean;
  /** CreateCardBuffToAllCardAction 的 `isRatio` 配置字段；准确战斗语义待确认。 */
  "_isRatio": boolean;
  /** CreateCardBuffToAllCardAction 的 `lifeType` 配置字段；准确战斗语义待确认。 */
  "_lifeType": "ALL_THE_TIME" | "HOLD_BY_BUFF" | "IMMEDIATELY" | "UNTIL_NEXT_SPAWN_DECK_TRIGGER_ONCE";
  /** CreateCardBuffToAllCardAction 的 `useCardBuffKey` 配置字段；准确战斗语义待确认。 */
  "_useCardBuffKey": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CreateCardBuffToAllCardWithEffect, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CreateCardBuffToAllCardWithEffectAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CreateCardBuffToAllCardWithEffect, Assembly-CSharp";
  /** CreateCardBuffToAllCardWithEffectAction 的 `cardBuffEffectPlugin` 配置字段；准确战斗语义待确认。 */
  "_cardBuffEffectPlugin": string;
  /** CreateCardBuffToAllCardWithEffectAction 的 `cardBuffKey` 配置字段；准确战斗语义待确认。 */
  "_cardBuffKey": null | string;
  /** CreateCardBuffToAllCardWithEffectAction 的 `enableMaxStackCount` 配置字段；准确战斗语义待确认。 */
  "_enableMaxStackCount": boolean;
  /** CreateCardBuffToAllCardWithEffectAction 的 `filterIsInHand` 配置字段；准确战斗语义待确认。 */
  "_filterIsInHand": boolean;
  /** CreateCardBuffToAllCardWithEffectAction 的 `isRatio` 配置字段；准确战斗语义待确认。 */
  "_isRatio": boolean;
  /** CreateCardBuffToAllCardWithEffectAction 的 `lifeType` 配置字段；准确战斗语义待确认。 */
  "_lifeType": "ALL_THE_TIME" | "LIMITED";
  /** CreateCardBuffToAllCardWithEffectAction 的 `manuallyChangeCardState` 配置字段；准确战斗语义待确认。 */
  "_manuallyChangeCardState": string;
  /** CreateCardBuffToAllCardWithEffectAction 的 `onlyToTarget` 配置字段；准确战斗语义待确认。 */
  "_onlyToTarget": boolean;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "TARGET";
  /** CreateCardBuffToAllCardWithEffectAction 的 `useCardBuffKey` 配置字段；准确战斗语义待确认。 */
  "_useCardBuffKey": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CreateCardBuffToBlackboardExclude, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CreateCardBuffToBlackboardExcludeAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CreateCardBuffToBlackboardExclude, Assembly-CSharp";
  /** CreateCardBuffToBlackboardExcludeAction 的 `cardBuffKey` 配置字段；准确战斗语义待确认。 */
  "_cardBuffKey": string;
  /** CreateCardBuffToBlackboardExcludeAction 的 `enableMaxStackCount` 配置字段；准确战斗语义待确认。 */
  "_enableMaxStackCount": boolean;
  /** CreateCardBuffToBlackboardExcludeAction 的 `filterIsInHand` 配置字段；准确战斗语义待确认。 */
  "_filterIsInHand": boolean;
  /** CreateCardBuffToBlackboardExcludeAction 的 `isRatio` 配置字段；准确战斗语义待确认。 */
  "_isRatio": boolean;
  /** CreateCardBuffToBlackboardExcludeAction 的 `lifeType` 配置字段；准确战斗语义待确认。 */
  "_lifeType": "HOLD_BY_BUFF";
  /** CreateCardBuffToBlackboardExcludeAction 的 `useCardBuffKey` 配置字段；准确战斗语义待确认。 */
  "_useCardBuffKey": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CreateCardBuffToMaxCost, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CreateCardBuffToMaxCostAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CreateCardBuffToMaxCost, Assembly-CSharp";
  /** CreateCardBuffToMaxCostAction 的 `cardBuffEffectPlugin` 配置字段；准确战斗语义待确认。 */
  "_cardBuffEffectPlugin": null;
  /** CreateCardBuffToMaxCostAction 的 `cardBuffKey` 配置字段；准确战斗语义待确认。 */
  "_cardBuffKey": null;
  /** CreateCardBuffToMaxCostAction 的 `enableMaxStackCount` 配置字段；准确战斗语义待确认。 */
  "_enableMaxStackCount": boolean;
  /** CreateCardBuffToMaxCostAction 的 `excludeCardBuffKey` 配置字段；准确战斗语义待确认。 */
  "_excludeCardBuffKey": null;
  /** CreateCardBuffToMaxCostAction 的 `filterIsInHand` 配置字段；准确战斗语义待确认。 */
  "_filterIsInHand": boolean;
  /** CreateCardBuffToMaxCostAction 的 `isRatio` 配置字段；准确战斗语义待确认。 */
  "_isRatio": boolean;
  /** CreateCardBuffToMaxCostAction 的 `lifeType` 配置字段；准确战斗语义待确认。 */
  "_lifeType": "ALL_THE_TIME";
  /** CreateCardBuffToMaxCostAction 的 `manuallyChangeCardState` 配置字段；准确战斗语义待确认。 */
  "_manuallyChangeCardState": string;
  /** CreateCardBuffToMaxCostAction 的 `playAudio` 配置字段；准确战斗语义待确认。 */
  "_playAudio": null;
  /** CreateCardBuffToMaxCostAction 的 `useCardBuffKey` 配置字段；准确战斗语义待确认。 */
  "_useCardBuffKey": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CreateCardBuffToMyHost, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CreateCardBuffToMyHostAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CreateCardBuffToMyHost, Assembly-CSharp";
  /** CreateCardBuffToMyHostAction 的 `cardBuffKey` 配置字段；准确战斗语义待确认。 */
  "_cardBuffKey": null | string;
  /** CreateCardBuffToMyHostAction 的 `enableMaxStackCount` 配置字段；准确战斗语义待确认。 */
  "_enableMaxStackCount": boolean;
  /** CreateCardBuffToMyHostAction 的 `filterIsInHand` 配置字段；准确战斗语义待确认。 */
  "_filterIsInHand": boolean;
  /** CreateCardBuffToMyHostAction 的 `isRatio` 配置字段；准确战斗语义待确认。 */
  "_isRatio": boolean;
  /** CreateCardBuffToMyHostAction 的 `lifeType` 配置字段；准确战斗语义待确认。 */
  "_lifeType": "ALL_THE_TIME" | "UNTIL_NEXT_SPAWN";
  /** CreateCardBuffToMyHostAction 的 `useCardBuffKey` 配置字段；准确战斗语义待确认。 */
  "_useCardBuffKey": boolean;
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionC26 = CreateCardBuffFilterByCardStateAction | CreateCardBuffFilterByDeckBuffAction | CreateCardBuffFilterByRarityAndProfessionAction | CreateCardBuffFilterByTagAction | CreateCardBuffMarkInAbilityBlackboardAction | CreateCardBuffToAllCardAction | CreateCardBuffToAllCardWithEffectAction | CreateCardBuffToBlackboardExcludeAction | CreateCardBuffToMaxCostAction | CreateCardBuffToMyHostAction;
