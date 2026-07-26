/**
 * buff_template_data 的 C 组 Action Zod Schema。
 */

import { z } from "zod";

import type { CheckTargetEnemyIdAction, CheckTargetEpIsFullAction, CheckTargetGridPositionRowOrColWithBBAction, CheckTargetInRangeAction, CheckTargetProfessionAction, CheckTargetRootTileAction, CheckTargetRootTileBuildableByUidAction, CheckTargetRootTileInfoMaskAction, CheckTargetRootTileMatchAnyBBValueAction, CheckTargetSkillDurationTypeAction, BattleActionC16 } from "../../../../types/buff-template-data/actions/c/actions-c-16.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckTargetEnemyId, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckTargetEnemyIdActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckTargetEnemyId, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckTargetEnemyIdAction 的 `isUnset` 配置字段；准确战斗语义待确认。 */
    "_isUnset": z.boolean().describe("CheckTargetEnemyIdAction 的 `isUnset` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckTargetEnemyId, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckTargetEnemyIdAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckTargetEpIsFull, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckTargetEpIsFullActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckTargetEpIsFull, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckTargetEpIsFullAction 的 `elementType` 配置字段；准确战斗语义待确认。 */
    "_elementType": z.enum(["NONE","WATER"]).describe("CheckTargetEpIsFullAction 的 `elementType` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckTargetEpIsFull, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckTargetEpIsFullAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckTargetGridPositionRowOrColWithBB, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckTargetGridPositionRowOrColWithBBActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckTargetGridPositionRowOrColWithBB, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 读取或写入战斗黑板的参数键。 */
    "_blackboardKey": z.string().describe("读取或写入战斗黑板的参数键。"),
    /** CheckTargetGridPositionRowOrColWithBBAction 的 `checkRow` 配置字段；准确战斗语义待确认。 */
    "_checkRow": z.boolean().describe("CheckTargetGridPositionRowOrColWithBBAction 的 `checkRow` 配置字段；准确战斗语义待确认。"),
    /** CheckTargetGridPositionRowOrColWithBBAction 的 `compareType` 配置字段；准确战斗语义待确认。 */
    "_compareType": z.enum(["GE","GT","LE","LT"]).describe("CheckTargetGridPositionRowOrColWithBBAction 的 `compareType` 配置字段；准确战斗语义待确认。"),
    /** CheckTargetGridPositionRowOrColWithBBAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.enum(["MODIFIER_SOURCE","MODIFIER_TARGET"]).describe("CheckTargetGridPositionRowOrColWithBBAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckTargetGridPositionRowOrColWithBB, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckTargetGridPositionRowOrColWithBBAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckTargetInRange, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckTargetInRangeActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckTargetInRange, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckTargetInRangeAction 的 `autoRange` 配置字段；准确战斗语义待确认。 */
    "_autoRange": z.boolean().describe("CheckTargetInRangeAction 的 `autoRange` 配置字段；准确战斗语义待确认。"),
    /** CheckTargetInRangeAction 的 `checkRadius` 配置字段；准确战斗语义待确认。 */
    "_checkRadius": z.boolean().describe("CheckTargetInRangeAction 的 `checkRadius` 配置字段；准确战斗语义待确认。"),
    /** CheckTargetInRangeAction 的 `customDirection` 配置字段；准确战斗语义待确认。 */
    "_customDirection": z.boolean().describe("CheckTargetInRangeAction 的 `customDirection` 配置字段；准确战斗语义待确认。"),
    /** CheckTargetInRangeAction 的 `direction` 配置字段；准确战斗语义待确认。 */
    "_direction": z.number().describe("CheckTargetInRangeAction 的 `direction` 配置字段；准确战斗语义待确认。"),
    /** CheckTargetInRangeAction 的 `directionKey` 配置字段；准确战斗语义待确认。 */
    "_directionKey": z.string().describe("CheckTargetInRangeAction 的 `directionKey` 配置字段；准确战斗语义待确认。"),
    /** CheckTargetInRangeAction 的 `rangeId` 配置字段；准确战斗语义待确认。 */
    "_rangeId": z.string().describe("CheckTargetInRangeAction 的 `rangeId` 配置字段；准确战斗语义待确认。"),
    /** CheckTargetInRangeAction 的 `rangeRadius` 配置字段；准确战斗语义待确认。 */
    "_rangeRadius": z.number().describe("CheckTargetInRangeAction 的 `rangeRadius` 配置字段；准确战斗语义待确认。"),
    /** CheckTargetInRangeAction 的 `soureceType` 配置字段；准确战斗语义待确认。 */
    "_soureceType": z.enum(["BUFF_OWNER","BUFF_SOURCE","MODIFIER_SOURCE","MODIFIER_TARGET","SOURCE"]).describe("CheckTargetInRangeAction 的 `soureceType` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","MODIFIER_SOURCE","MODIFIER_TARGET","SOURCE","TARGET"]).describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckTargetInRange, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckTargetInRangeAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckTargetProfession, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckTargetProfessionActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckTargetProfession, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckTargetProfessionAction 的 `checkSubProfession` 配置字段；准确战斗语义待确认。 */
    "_checkSubProfession": z.boolean().describe("CheckTargetProfessionAction 的 `checkSubProfession` 配置字段；准确战斗语义待确认。"),
    /** CheckTargetProfessionAction 的 `profession` 配置字段；准确战斗语义待确认。 */
    "_profession": z.array(z.enum(["CASTER","MEDIC","PIONEER","SNIPER","SPECIAL","SUPPORT","TANK","TOKEN","TOKEN, TRAP","TRAP","WARRIOR","WARRIOR, SNIPER, TANK, MEDIC, SUPPORT, CASTER, SPECIAL, PIONEER","WARRIOR, SNIPER, TANK, MEDIC, SUPPORT, CASTER, SPECIAL, TOKEN, PIONEER"])).describe("CheckTargetProfessionAction 的 `profession` 配置字段；准确战斗语义待确认。"),
    /** CheckTargetProfessionAction 的 `readProfessionFromBlackboard` 配置字段；准确战斗语义待确认。 */
    "_readProfessionFromBlackboard": z.boolean().describe("CheckTargetProfessionAction 的 `readProfessionFromBlackboard` 配置字段；准确战斗语义待确认。"),
    /** CheckTargetProfessionAction 的 `subProfessions` 配置字段；准确战斗语义待确认。 */
    "_subProfessions": z.union([
                             z.null(),
                             z.string(),
                           ]).describe("CheckTargetProfessionAction 的 `subProfessions` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","MAIN_TARGET","MODIFIER_SOURCE","MODIFIER_TARGET","TARGET"]).describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckTargetProfession, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckTargetProfessionAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckTargetRootTile, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckTargetRootTileActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckTargetRootTile, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckTargetRootTileAction 的 `characterKeys` 配置字段；准确战斗语义待确认。 */
    "_characterKeys": z.union([
                            z.null(),
                            z.array(z.string()),
                          ]).describe("CheckTargetRootTileAction 的 `characterKeys` 配置字段；准确战斗语义待确认。"),
    /** CheckTargetRootTileAction 的 `checkTargetTopBuiltInTile` 配置字段；准确战斗语义待确认。 */
    "_checkTargetTopBuiltInTile": z.boolean().describe("CheckTargetRootTileAction 的 `checkTargetTopBuiltInTile` 配置字段；准确战斗语义待确认。"),
    /** CheckTargetRootTileAction 的 `checkTileKey` 配置字段；准确战斗语义待确认。 */
    "_checkTileKey": z.boolean().describe("CheckTargetRootTileAction 的 `checkTileKey` 配置字段；准确战斗语义待确认。"),
    /** CheckTargetRootTileAction 的 `enemyKeys` 配置字段；准确战斗语义待确认。 */
    "_enemyKeys": z.union([
                        z.null(),
                        z.array(z.string()),
                      ]).describe("CheckTargetRootTileAction 的 `enemyKeys` 配置字段；准确战斗语义待确认。"),
    /** CheckTargetRootTileAction 的 `hasCertainEnemy` 配置字段；准确战斗语义待确认。 */
    "_hasCertainEnemy": z.boolean().describe("CheckTargetRootTileAction 的 `hasCertainEnemy` 配置字段；准确战斗语义待确认。"),
    /** CheckTargetRootTileAction 的 `hasCharacter` 配置字段；准确战斗语义待确认。 */
    "_hasCharacter": z.boolean().describe("CheckTargetRootTileAction 的 `hasCharacter` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","TARGET"]).describe("Action 作用的目标实体类型。"),
    /** CheckTargetRootTileAction 的 `tileKeys` 配置字段；准确战斗语义待确认。 */
    "_tileKeys": z.union([
                       z.null(),
                       z.array(z.string()),
                     ]).describe("CheckTargetRootTileAction 的 `tileKeys` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckTargetRootTile, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckTargetRootTileAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckTargetRootTileBuildableByUid, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckTargetRootTileBuildableByUidActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckTargetRootTileBuildableByUid, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckTargetRootTileBuildableByUid, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckTargetRootTileBuildableByUidAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckTargetRootTileInfoMask, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckTargetRootTileInfoMaskActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckTargetRootTileInfoMask, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckTargetRootTileInfoMaskAction 的 `infoMask` 配置字段；准确战斗语义待确认。 */
    "_infoMask": z.literal("KEEP_REVEALED").describe("CheckTargetRootTileInfoMaskAction 的 `infoMask` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckTargetRootTileInfoMask, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckTargetRootTileInfoMaskAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckTargetRootTileMatchAnyBBValue, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckTargetRootTileMatchAnyBBValueActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckTargetRootTileMatchAnyBBValue, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckTargetRootTileMatchAnyBBValue, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckTargetRootTileMatchAnyBBValueAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckTargetSkillDurationType, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckTargetSkillDurationTypeActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckTargetSkillDurationType, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckTargetSkillDurationTypeAction 的 `checkTypes` 配置字段；准确战斗语义待确认。 */
    "_checkTypes": z.union([
                         z.null(),
                         z.array(z.string()),
                       ]).describe("CheckTargetSkillDurationTypeAction 的 `checkTypes` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckTargetSkillDurationType, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckTargetSkillDurationTypeAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionC16Schema = z
  .discriminatedUnion("$type", [CheckTargetEnemyIdActionSchema, CheckTargetEpIsFullActionSchema, CheckTargetGridPositionRowOrColWithBBActionSchema, CheckTargetInRangeActionSchema, CheckTargetProfessionActionSchema, CheckTargetRootTileActionSchema, CheckTargetRootTileBuildableByUidActionSchema, CheckTargetRootTileInfoMaskActionSchema, CheckTargetRootTileMatchAnyBBValueActionSchema, CheckTargetSkillDurationTypeActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionC16>;
