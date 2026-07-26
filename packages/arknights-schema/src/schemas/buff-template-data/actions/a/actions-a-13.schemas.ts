/**
 * buff_template_data 的 A 组 Action Zod Schema。
 */

import { z } from "zod";

import type { AddEnemyIdToCharacterSharedBlackboardAction, AddExcludeCharacterToDynamicBuffTileAction, AddFearTargetTilesAction, AddFeverBySourceIfNotFullAction, AddFunnelAbilityActiveCntAction, AddGameFinishBlockerByKeyAction, AddGlobalBlackboardAction, AddHeightOffsetToSpineAction, AddOrRemoveRuntimeUIPluginAction, AddTempLifePointAction, BattleActionA13 } from "../../../../types/buff-template-data/actions/a/actions-a-13.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AddEnemyIdToCharacterSharedBlackboard, Assembly-CSharp 的严格 Action 数据。
 */
export const AddEnemyIdToCharacterSharedBlackboardActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AddEnemyIdToCharacterSharedBlackboard, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** AddEnemyIdToCharacterSharedBlackboardAction 的 `source` 配置字段；准确战斗语义待确认。 */
    "_source": z.enum(["BUFF_OWNER","BUFF_SOURCE"]).describe("AddEnemyIdToCharacterSharedBlackboardAction 的 `source` 配置字段；准确战斗语义待确认。"),
    /** AddEnemyIdToCharacterSharedBlackboardAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.enum(["BUFF_OWNER","TARGET"]).describe("AddEnemyIdToCharacterSharedBlackboardAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AddEnemyIdToCharacterSharedBlackboard, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AddEnemyIdToCharacterSharedBlackboardAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AddExcludeCharacterToDynamicBuffTile, Assembly-CSharp 的严格 Action 数据。
 */
export const AddExcludeCharacterToDynamicBuffTileActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AddExcludeCharacterToDynamicBuffTile, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","SOURCE"]).describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AddExcludeCharacterToDynamicBuffTile, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AddExcludeCharacterToDynamicBuffTileAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AddFearTargetTiles, Assembly-CSharp 的严格 Action 数据。
 */
export const AddFearTargetTilesActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AddFearTargetTiles, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** AddFearTargetTilesAction 的 `maxDegree` 配置字段；准确战斗语义待确认。 */
    "_maxDegree": z.number().describe("AddFearTargetTilesAction 的 `maxDegree` 配置字段；准确战斗语义待确认。"),
    /** AddFearTargetTilesAction 的 `rangeRadius` 配置字段；准确战斗语义待确认。 */
    "_rangeRadius": z.number().describe("AddFearTargetTilesAction 的 `rangeRadius` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_SOURCE").describe("Action 读取的来源实体类型。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AddFearTargetTiles, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AddFearTargetTilesAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AddFeverBySourceIfNotFull, Assembly-CSharp 的严格 Action 数据。
 */
export const AddFeverBySourceIfNotFullActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AddFeverBySourceIfNotFull, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** AddFeverBySourceIfNotFullAction 的 `feverKey` 配置字段；准确战斗语义待确认。 */
    "_feverKey": z.string().describe("AddFeverBySourceIfNotFullAction 的 `feverKey` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.enum(["BUFF_OWNER","BUFF_SOURCE"]).describe("Action 读取的来源实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AddFeverBySourceIfNotFull, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AddFeverBySourceIfNotFullAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AddFunnelAbilityActiveCnt, Assembly-CSharp 的严格 Action 数据。
 */
export const AddFunnelAbilityActiveCntActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AddFunnelAbilityActiveCnt, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** AddFunnelAbilityActiveCntAction 的 `abilityNames` 配置字段；准确战斗语义待确认。 */
    "_abilityNames": z.array(z.string()).describe("AddFunnelAbilityActiveCntAction 的 `abilityNames` 配置字段；准确战斗语义待确认。"),
    /** AddFunnelAbilityActiveCntAction 的 `addCnt` 配置字段；准确战斗语义待确认。 */
    "_addCnt": z.number().describe("AddFunnelAbilityActiveCntAction 的 `addCnt` 配置字段；准确战斗语义待确认。"),
    /** AddFunnelAbilityActiveCntAction 的 `source` 配置字段；准确战斗语义待确认。 */
    "_source": z.literal("BUFF_OWNER").describe("AddFunnelAbilityActiveCntAction 的 `source` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AddFunnelAbilityActiveCnt, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AddFunnelAbilityActiveCntAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AddGameFinishBlockerByKey, Assembly-CSharp 的严格 Action 数据。
 */
export const AddGameFinishBlockerByKeyActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AddGameFinishBlockerByKey, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** AddGameFinishBlockerByKeyAction 的 `blockerKey` 配置字段；准确战斗语义待确认。 */
    "_blockerKey": z.string().describe("AddGameFinishBlockerByKeyAction 的 `blockerKey` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AddGameFinishBlockerByKey, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AddGameFinishBlockerByKeyAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AddGlobalBlackboard, Assembly-CSharp 的严格 Action 数据。
 */
export const AddGlobalBlackboardActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AddGlobalBlackboard, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** AddGlobalBlackboardAction 的 `addString` 配置字段；准确战斗语义待确认。 */
    "_addString": z.boolean().describe("AddGlobalBlackboardAction 的 `addString` 配置字段；准确战斗语义待确认。"),
    /** 读取或写入战斗黑板的参数键。 */
    "_blackboardKey": z.string().describe("读取或写入战斗黑板的参数键。"),
    /** AddGlobalBlackboardAction 的 `channel` 配置字段；准确战斗语义待确认。 */
    "_channel": z.enum(["CHARACTER","ENEMY","LEVEL","ROGUELIKE"]).describe("AddGlobalBlackboardAction 的 `channel` 配置字段；准确战斗语义待确认。"),
    /** AddGlobalBlackboardAction 的 `overwrite` 配置字段；准确战斗语义待确认。 */
    "_overwrite": z.boolean().describe("AddGlobalBlackboardAction 的 `overwrite` 配置字段；准确战斗语义待确认。"),
    /** AddGlobalBlackboardAction 的 `value` 配置字段；准确战斗语义待确认。 */
    "_value": z.number().describe("AddGlobalBlackboardAction 的 `value` 配置字段；准确战斗语义待确认。"),
    /** AddGlobalBlackboardAction 的 `valueBlackboardKey` 配置字段；准确战斗语义待确认。 */
    "_valueBlackboardKey": z.string().describe("AddGlobalBlackboardAction 的 `valueBlackboardKey` 配置字段；准确战斗语义待确认。"),
    /** AddGlobalBlackboardAction 的 `valueStr` 配置字段；准确战斗语义待确认。 */
    "_valueStr": z.union([
                       z.null(),
                       z.string(),
                     ]).describe("AddGlobalBlackboardAction 的 `valueStr` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AddGlobalBlackboard, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AddGlobalBlackboardAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AddHeightOffsetToSpine, Assembly-CSharp 的严格 Action 数据。
 */
export const AddHeightOffsetToSpineActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AddHeightOffsetToSpine, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 读取或写入战斗黑板的参数键。 */
    "_blackboardKey": z.string().describe("读取或写入战斗黑板的参数键。"),
    /** AddHeightOffsetToSpineAction 的 `instant` 配置字段；准确战斗语义待确认。 */
    "_instant": z.boolean().describe("AddHeightOffsetToSpineAction 的 `instant` 配置字段；准确战斗语义待确认。"),
    /** AddHeightOffsetToSpineAction 的 `offset` 配置字段；准确战斗语义待确认。 */
    "_offset": z.number().describe("AddHeightOffsetToSpineAction 的 `offset` 配置字段；准确战斗语义待确认。"),
    /** AddHeightOffsetToSpineAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.enum(["BUFF_OWNER","TARGET"]).describe("AddHeightOffsetToSpineAction 的 `target` 配置字段；准确战斗语义待确认。"),
    /** AddHeightOffsetToSpineAction 的 `isSet` 配置字段；准确战斗语义待确认。 */
    "isSet": z.boolean().describe("AddHeightOffsetToSpineAction 的 `isSet` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AddHeightOffsetToSpine, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AddHeightOffsetToSpineAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AddOrRemoveRuntimeUIPlugin, Assembly-CSharp 的严格 Action 数据。
 */
export const AddOrRemoveRuntimeUIPluginActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AddOrRemoveRuntimeUIPlugin, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** AddOrRemoveRuntimeUIPluginAction 的 `isRemove` 配置字段；准确战斗语义待确认。 */
    "_isRemove": z.boolean().describe("AddOrRemoveRuntimeUIPluginAction 的 `isRemove` 配置字段；准确战斗语义待确认。"),
    /** AddOrRemoveRuntimeUIPluginAction 的 `name` 配置字段；准确战斗语义待确认。 */
    "_name": z.string().describe("AddOrRemoveRuntimeUIPluginAction 的 `name` 配置字段；准确战斗语义待确认。"),
    /** AddOrRemoveRuntimeUIPluginAction 的 `playAudio` 配置字段；准确战斗语义待确认。 */
    "_playAudio": z.null().describe("AddOrRemoveRuntimeUIPluginAction 的 `playAudio` 配置字段；准确战斗语义待确认。"),
    /** AddOrRemoveRuntimeUIPluginAction 的 `position` 配置字段；准确战斗语义待确认。 */
    "_position": z.string().describe("AddOrRemoveRuntimeUIPluginAction 的 `position` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AddOrRemoveRuntimeUIPlugin, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AddOrRemoveRuntimeUIPluginAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AddTempLifePoint, Assembly-CSharp 的严格 Action 数据。
 */
export const AddTempLifePointActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AddTempLifePoint, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_OWNER").describe("Action 读取的来源实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AddTempLifePoint, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AddTempLifePointAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionA13Schema = z
  .discriminatedUnion("$type", [AddEnemyIdToCharacterSharedBlackboardActionSchema, AddExcludeCharacterToDynamicBuffTileActionSchema, AddFearTargetTilesActionSchema, AddFeverBySourceIfNotFullActionSchema, AddFunnelAbilityActiveCntActionSchema, AddGameFinishBlockerByKeyActionSchema, AddGlobalBlackboardActionSchema, AddHeightOffsetToSpineActionSchema, AddOrRemoveRuntimeUIPluginActionSchema, AddTempLifePointActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionA13>;
