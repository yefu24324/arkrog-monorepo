/**
 * buff_template_data 的 R 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+RecordCurrentHpRatio, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface RecordCurrentHpRatioAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+RecordCurrentHpRatio, Assembly-CSharp";
  /** RecordCurrentHpRatioAction 的 `needOffset` 配置字段；准确战斗语义待确认。 */
  "_needOffset": boolean;
  /** RecordCurrentHpRatioAction 的 `ownerType` 配置字段；准确战斗语义待确认。 */
  "_ownerType": "BUFF_OWNER";
  /** RecordCurrentHpRatioAction 的 `recordKey` 配置字段；准确战斗语义待确认。 */
  "_recordKey": string;
  /** RecordCurrentHpRatioAction 的 `recordType` 配置字段；准确战斗语义待确认。 */
  "_recordType": "hp" | "hpRatio" | "maxHp";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+RecordDamageModifier, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface RecordDamageModifierAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+RecordDamageModifier, Assembly-CSharp";
  /** RecordDamageModifierAction 的 `filterModifierCancelled` 配置字段；准确战斗语义待确认。 */
  "_filterModifierCancelled": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+RefreshAttachListenerToTileAbility, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface RefreshAttachListenerToTileAbilityAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+RefreshAttachListenerToTileAbility, Assembly-CSharp";
  /** RefreshAttachListenerToTileAbilityAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
  "_abilityName": string;
  /** RefreshAttachListenerToTileAbilityAction 的 `checkCanUseAblityFlag` 配置字段；准确战斗语义待确认。 */
  "_checkCanUseAblityFlag": boolean;
  /** RefreshAttachListenerToTileAbilityAction 的 `ownerType` 配置字段；准确战斗语义待确认。 */
  "_ownerType": "BUFF_OWNER";
  /** RefreshAttachListenerToTileAbilityAction 的 `syncAbilityName` 配置字段；准确战斗语义待确认。 */
  "_syncAbilityName": string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+RefreshextraTileGraphic, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface RefreshextraTileGraphicAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+RefreshextraTileGraphic, Assembly-CSharp";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+RefreshMagicCircuitRoute, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface RefreshMagicCircuitRouteAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+RefreshMagicCircuitRoute, Assembly-CSharp";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+RefreshTokenDeployAndStackCnt, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface RefreshTokenDeployAndStackCntAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+RefreshTokenDeployAndStackCnt, Assembly-CSharp";
  /** RefreshTokenDeployAndStackCntAction 的 `maxDeckStackCnt` 配置字段；准确战斗语义待确认。 */
  "_maxDeckStackCnt": number;
  /** RefreshTokenDeployAndStackCntAction 的 `maxDeckStackCntKey` 配置字段；准确战斗语义待确认。 */
  "_maxDeckStackCntKey": string;
  /** RefreshTokenDeployAndStackCntAction 的 `maxDeployCnt` 配置字段；准确战斗语义待确认。 */
  "_maxDeployCnt": number;
  /** RefreshTokenDeployAndStackCntAction 的 `maxDeployCntKey` 配置字段；准确战斗语义待确认。 */
  "_maxDeployCntKey": string;
  /** RefreshTokenDeployAndStackCntAction 的 `refreshTargetTokenOrHost` 配置字段；准确战斗语义待确认。 */
  "_refreshTargetTokenOrHost": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+RegisterAsStand, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface RegisterAsStandAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+RegisterAsStand, Assembly-CSharp";
  /** RegisterAsStandAction 的 `hostAbilityName` 配置字段；准确战斗语义待确认。 */
  "_hostAbilityName": string;
  /** RegisterAsStandAction 的 `source` 配置字段；准确战斗语义待确认。 */
  "_source": "BUFF_OWNER";
  /** RegisterAsStandAction 的 `standAbilityName` 配置字段；准确战斗语义待确认。 */
  "_standAbilityName": string;
  /** RegisterAsStandAction 的 `hostId` 配置字段；准确战斗语义待确认。 */
  "hostId": string;
  /** RegisterAsStandAction 的 `useIdToFindHost` 配置字段；准确战斗语义待确认。 */
  "useIdToFindHost": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+RegisterMagicCircuitRoute, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface RegisterMagicCircuitRouteAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+RegisterMagicCircuitRoute, Assembly-CSharp";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+RegisterMagicCircuitSpAffect, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface RegisterMagicCircuitSpAffectAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+RegisterMagicCircuitSpAffect, Assembly-CSharp";
  /** RegisterMagicCircuitSpAffectAction 的 `isTwoEntriesOnly` 配置字段；准确战斗语义待确认。 */
  "_isTwoEntriesOnly": boolean;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+RegistProgressBuff, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface RegistProgressBuffAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+RegistProgressBuff, Assembly-CSharp";
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionR03 = RecordCurrentHpRatioAction | RecordDamageModifierAction | RefreshAttachListenerToTileAbilityAction | RefreshextraTileGraphicAction | RefreshMagicCircuitRouteAction | RefreshTokenDeployAndStackCntAction | RegisterAsStandAction | RegisterMagicCircuitRouteAction | RegisterMagicCircuitSpAffectAction | RegistProgressBuffAction;
