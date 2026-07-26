/**
 * buff_template_data 的 Y 组 Action Zod Schema。
 */

import { z } from "zod";

import type { YmgpckKnockBackWithDirectionAction, YmgpckTouchTargetGainScoreOrGradeAction, BattleActionY01 } from "../../../../types/buff-template-data/actions/y/actions-y-01.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+YmgpckKnockBackWithDirection, Assembly-CSharp 的严格 Action 数据。
 */
export const YmgpckKnockBackWithDirectionActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+YmgpckKnockBackWithDirection, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** YmgpckKnockBackWithDirectionAction 的 `defaultForceLevel` 配置字段；准确战斗语义待确认。 */
    "_defaultForceLevel": z.number().describe("YmgpckKnockBackWithDirectionAction 的 `defaultForceLevel` 配置字段；准确战斗语义待确认。"),
    /** YmgpckKnockBackWithDirectionAction 的 `direction` 配置字段；准确战斗语义待确认。 */
    "_direction": z.string().describe("YmgpckKnockBackWithDirectionAction 的 `direction` 配置字段；准确战斗语义待确认。"),
    /** YmgpckKnockBackWithDirectionAction 的 `useSourceDirection` 配置字段；准确战斗语义待确认。 */
    "_useSourceDirection": z.boolean().describe("YmgpckKnockBackWithDirectionAction 的 `useSourceDirection` 配置字段；准确战斗语义待确认。"),
    /** YmgpckKnockBackWithDirectionAction 的 `needUpdateVelocity` 配置字段；准确战斗语义待确认。 */
    "needUpdateVelocity": z.boolean().describe("YmgpckKnockBackWithDirectionAction 的 `needUpdateVelocity` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+YmgpckKnockBackWithDirection, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<YmgpckKnockBackWithDirectionAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+YmgpckTouchTargetGainScoreOrGrade, Assembly-CSharp 的严格 Action 数据。
 */
export const YmgpckTouchTargetGainScoreOrGradeActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+YmgpckTouchTargetGainScoreOrGrade, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** YmgpckTouchTargetGainScoreOrGradeAction 的 `effectTime` 配置字段；准确战斗语义待确认。 */
    "_effectTime": z.number().describe("YmgpckTouchTargetGainScoreOrGradeAction 的 `effectTime` 配置字段；准确战斗语义待确认。"),
    /** YmgpckTouchTargetGainScoreOrGradeAction 的 `envSysKey` 配置字段；准确战斗语义待确认。 */
    "_envSysKey": z.string().describe("YmgpckTouchTargetGainScoreOrGradeAction 的 `envSysKey` 配置字段；准确战斗语义待确认。"),
    /** YmgpckTouchTargetGainScoreOrGradeAction 的 `gainType` 配置字段；准确战斗语义待确认。 */
    "_gainType": z.literal("SCORE").describe("YmgpckTouchTargetGainScoreOrGradeAction 的 `gainType` 配置字段；准确战斗语义待确认。"),
    /** YmgpckTouchTargetGainScoreOrGradeAction 的 `hitCountKey` 配置字段；准确战斗语义待确认。 */
    "_hitCountKey": z.string().describe("YmgpckTouchTargetGainScoreOrGradeAction 的 `hitCountKey` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+YmgpckTouchTargetGainScoreOrGrade, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<YmgpckTouchTargetGainScoreOrGradeAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionY01Schema = z
  .discriminatedUnion("$type", [YmgpckKnockBackWithDirectionActionSchema, YmgpckTouchTargetGainScoreOrGradeActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionY01>;
