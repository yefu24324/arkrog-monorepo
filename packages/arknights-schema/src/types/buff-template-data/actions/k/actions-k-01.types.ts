/**
 * buff_template_data 的 K 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+Kalts2CheckShouldTriggerDither, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface Kalts2CheckShouldTriggerDitherAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+Kalts2CheckShouldTriggerDither, Assembly-CSharp";
  /** Kalts2CheckShouldTriggerDitherAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+Kalts2S3ApplyExtraBuildableChecker, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface Kalts2S3ApplyExtraBuildableCheckerAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+Kalts2S3ApplyExtraBuildableChecker, Assembly-CSharp";
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_SOURCE";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+Kalts2S3ApplyPunishBuff, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface Kalts2S3ApplyPunishBuffAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+Kalts2S3ApplyPunishBuff, Assembly-CSharp";
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+Kalts2S3CancelExtraBuildableChecker, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface Kalts2S3CancelExtraBuildableCheckerAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+Kalts2S3CancelExtraBuildableChecker, Assembly-CSharp";
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+Kalts2S3RecordSkillAffectedCardInfo, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface Kalts2S3RecordSkillAffectedCardInfoAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+Kalts2S3RecordSkillAffectedCardInfo, Assembly-CSharp";
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_SOURCE";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+Kalts2S3ResetCardRecord, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface Kalts2S3ResetCardRecordAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+Kalts2S3ResetCardRecord, Assembly-CSharp";
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+KillCharacterOnTileIfExists, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface KillCharacterOnTileIfExistsAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+KillCharacterOnTileIfExists, Assembly-CSharp";
  /** KillCharacterOnTileIfExistsAction 的 `noSource` 配置字段；准确战斗语义待确认。 */
  "_noSource": boolean;
  /** KillCharacterOnTileIfExistsAction 的 `skipClearCharacterIfExists` 配置字段；准确战斗语义待确认。 */
  "_skipClearCharacterIfExists": boolean;
  /** KillCharacterOnTileIfExistsAction 的 `skipReborn` 配置字段；准确战斗语义待确认。 */
  "_skipReborn": boolean;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "TARGET";
  /** KillCharacterOnTileIfExistsAction 的 `useProjectileTraceMapPos` 配置字段；准确战斗语义待确认。 */
  "_useProjectileTraceMapPos": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+KillTokens, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface KillTokensAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+KillTokens, Assembly-CSharp";
  /** KillTokensAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
  "_buffKey": string;
  /** KillTokensAction 的 `checkContainsBuff` 配置字段；准确战斗语义待确认。 */
  "_checkContainsBuff": boolean;
  /** KillTokensAction 的 `checkModes` 配置字段；准确战斗语义待确认。 */
  "_checkModes": boolean;
  /** KillTokensAction 的 `modes` 配置字段；准确战斗语义待确认。 */
  "_modes": Array<number>;
  /** KillTokensAction 的 `snapshotSourceAsTarget` 配置字段；准确战斗语义待确认。 */
  "_snapshotSourceAsTarget": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+Knockback, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface KnockbackAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+Knockback, Assembly-CSharp";
  /** KnockbackAction 的 `decreaseForceLevelWhenNotInDirection` 配置字段；准确战斗语义待确认。 */
  "_decreaseForceLevelWhenNotInDirection": number;
  /** KnockbackAction 的 `source` 配置字段；准确战斗语义待确认。 */
  "_source": "SOURCE";
  /** KnockbackAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "TARGET";
  /** KnockbackAction 的 `useSourceDirection` 配置字段；准确战斗语义待确认。 */
  "_useSourceDirection": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+KnockBackWithCharacterDirection, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface KnockBackWithCharacterDirectionAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+KnockBackWithCharacterDirection, Assembly-CSharp";
  /** KnockBackWithCharacterDirectionAction 的 `dontChangeFaceByDirection` 配置字段；准确战斗语义待确认。 */
  "_dontChangeFaceByDirection": boolean;
  /** KnockBackWithCharacterDirectionAction 的 `source` 配置字段；准确战斗语义待确认。 */
  "_source": "BUFF_SOURCE" | "SOURCE";
  /** KnockBackWithCharacterDirectionAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER" | "TARGET";
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionK01 = Kalts2CheckShouldTriggerDitherAction | Kalts2S3ApplyExtraBuildableCheckerAction | Kalts2S3ApplyPunishBuffAction | Kalts2S3CancelExtraBuildableCheckerAction | Kalts2S3RecordSkillAffectedCardInfoAction | Kalts2S3ResetCardRecordAction | KillCharacterOnTileIfExistsAction | KillTokensAction | KnockbackAction | KnockBackWithCharacterDirectionAction;
