/**
 * buff_template_data 的 S 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SetDisableClickCharacterInfo, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SetDisableClickCharacterInfoAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SetDisableClickCharacterInfo, Assembly-CSharp";
  /** SetDisableClickCharacterInfoAction 的 `enabled` 配置字段；准确战斗语义待确认。 */
  "_enabled": boolean;
  /** SetDisableClickCharacterInfoAction 的 `reasonMask` 配置字段；准确战斗语义待确认。 */
  "_reasonMask": "OWNER_SETTING";
  /** SetDisableClickCharacterInfoAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SetDisappear, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SetDisappearAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SetDisappear, Assembly-CSharp";
  /** SetDisappearAction 的 `isDisappear` 配置字段；准确战斗语义待确认。 */
  "_isDisappear": boolean;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "BUFF_SOURCE" | "TARGET";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SetDitherIntensityOnAnimatorBehaviour, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SetDitherIntensityOnAnimatorBehaviourAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SetDitherIntensityOnAnimatorBehaviour, Assembly-CSharp";
  /** SetDitherIntensityOnAnimatorBehaviourAction 的 `ditherIntensity` 配置字段；准确战斗语义待确认。 */
  "_ditherIntensity": number;
  /** SetDitherIntensityOnAnimatorBehaviourAction 的 `ditherIntensityKey` 配置字段；准确战斗语义待确认。 */
  "_ditherIntensityKey": string;
  /** SetDitherIntensityOnAnimatorBehaviourAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SetDynamicOffsetToTargetOffsetTileSelector, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SetDynamicOffsetToTargetOffsetTileSelectorAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SetDynamicOffsetToTargetOffsetTileSelector, Assembly-CSharp";
  /** SetDynamicOffsetToTargetOffsetTileSelectorAction 的 `defaultDirection` 配置字段；准确战斗语义待确认。 */
  "_defaultDirection": string;
  /** SetDynamicOffsetToTargetOffsetTileSelectorAction 的 `defaultDistance` 配置字段；准确战斗语义待确认。 */
  "_defaultDistance": number;
  /** SetDynamicOffsetToTargetOffsetTileSelectorAction 的 `directionKey` 配置字段；准确战斗语义待确认。 */
  "_directionKey": string;
  /** SetDynamicOffsetToTargetOffsetTileSelectorAction 的 `distanceKey` 配置字段；准确战斗语义待确认。 */
  "_distanceKey": string;
  /** SetDynamicOffsetToTargetOffsetTileSelectorAction 的 `ownerType` 配置字段；准确战斗语义待确认。 */
  "_ownerType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SetEnemyBossCountDown, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SetEnemyBossCountDownAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SetEnemyBossCountDown, Assembly-CSharp";
  /** SetEnemyBossCountDownAction 的 `countDownKey` 配置字段；准确战斗语义待确认。 */
  "_countDownKey": string;
  /** SetEnemyBossCountDownAction 的 `countDownTime` 配置字段；准确战斗语义待确认。 */
  "_countDownTime": number;
  /** SetEnemyBossCountDownAction 的 `disableCountDown` 配置字段；准确战斗语义待确认。 */
  "_disableCountDown": boolean;
  /** SetEnemyBossCountDownAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。 */
  "_loadFromBlackboard": boolean;
  /** SetEnemyBossCountDownAction 的 `resetIfAlreadyActive` 配置字段；准确战斗语义待确认。 */
  "_resetIfAlreadyActive": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SetEnemyCanNotExit, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SetEnemyCanNotExitAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SetEnemyCanNotExit, Assembly-CSharp";
  /** SetEnemyCanNotExitAction 的 `canNotExit` 配置字段；准确战斗语义待确认。 */
  "_canNotExit": boolean;
  /** SetEnemyCanNotExitAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SetEnemySpecialBlockCondition, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SetEnemySpecialBlockConditionAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SetEnemySpecialBlockCondition, Assembly-CSharp";
  /** SetEnemySpecialBlockConditionAction 的 `buffKeyPairs` 配置字段；准确战斗语义待确认。 */
  "_buffKeyPairs": Array<{
                        /** SetEnemySpecialBlockConditionAction 的 `blockeeBuffKey` 配置字段；准确战斗语义待确认。 */
                        "blockeeBuffKey": string;
                        /** SetEnemySpecialBlockConditionAction 的 `blockerBuffKey` 配置字段；准确战斗语义待确认。 */
                        "blockerBuffKey": string;
                      }>;
  /** SetEnemySpecialBlockConditionAction 的 `enemy` 配置字段；准确战斗语义待确认。 */
  "_enemy": string;
  /** SetEnemySpecialBlockConditionAction 的 `filterTags` 配置字段；准确战斗语义待确认。 */
  "_filterTags": Array<string>;
  /** SetEnemySpecialBlockConditionAction 的 `type` 配置字段；准确战斗语义待确认。 */
  "_type": "BUFF_KEY_MATCH_AND" | "FILTER_TAGS" | "NONE";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SetEnemyStruggle, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SetEnemyStruggleAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SetEnemyStruggle, Assembly-CSharp";
  /** SetEnemyStruggleAction 的 `isStruggle` 配置字段；准确战斗语义待确认。 */
  "_isStruggle": boolean;
  /** SetEnemyStruggleAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SetExternWithdrawGainCostFlag, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SetExternWithdrawGainCostFlagAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SetExternWithdrawGainCostFlag, Assembly-CSharp";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
  /** SetExternWithdrawGainCostFlagAction 的 `value` 配置字段；准确战斗语义待确认。 */
  "_value": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SetHpSameToSource, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SetHpSameToSourceAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SetHpSameToSource, Assembly-CSharp";
  /** SetHpSameToSourceAction 的 `isSkipEvent` 配置字段；准确战斗语义待确认。 */
  "_isSkipEvent": boolean;
  /** SetHpSameToSourceAction 的 `isUndeadable` 配置字段；准确战斗语义待确认。 */
  "_isUndeadable": boolean;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_SOURCE";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionS09 = SetDisableClickCharacterInfoAction | SetDisappearAction | SetDitherIntensityOnAnimatorBehaviourAction | SetDynamicOffsetToTargetOffsetTileSelectorAction | SetEnemyBossCountDownAction | SetEnemyCanNotExitAction | SetEnemySpecialBlockConditionAction | SetEnemyStruggleAction | SetExternWithdrawGainCostFlagAction | SetHpSameToSourceAction;
