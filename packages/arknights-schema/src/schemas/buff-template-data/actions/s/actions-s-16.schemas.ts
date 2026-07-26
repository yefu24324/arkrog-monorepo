/**
 * buff_template_data 的 S 组 Action Zod Schema。
 */

import { z } from "zod";

import type { SwitchDynamicBuffTileModeAction, SwitchDynamicBuffTileModeInRangeAction, SwitchDynamicBuffTileModeOneLineAction, SwitchDynamicBuffTileModeUseAbilitySelectorAction, SwitchModeAction, SwitchRacingModeAction, SwitchRallyPointCategoryAction, SwitchSideAction, SwitchSkillCharWordToPassiveTypeAction, SwitchSkillRangeIdModeIndexAction, BattleActionS16 } from "../../../../types/buff-template-data/actions/s/actions-s-16.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SwitchDynamicBuffTileMode, Assembly-CSharp 的严格 Action 数据。
 */
export const SwitchDynamicBuffTileModeActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SwitchDynamicBuffTileMode, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** SwitchDynamicBuffTileModeAction 的 `decBbKey` 配置字段；准确战斗语义待确认。 */
    "_decBbKey": z.string().describe("SwitchDynamicBuffTileModeAction 的 `decBbKey` 配置字段；准确战斗语义待确认。"),
    /** SwitchDynamicBuffTileModeAction 的 `modeIndex` 配置字段；准确战斗语义待确认。 */
    "_modeIndex": z.number().describe("SwitchDynamicBuffTileModeAction 的 `modeIndex` 配置字段；准确战斗语义待确认。"),
    /** SwitchDynamicBuffTileModeAction 的 `operation` 配置字段；准确战斗语义待确认。 */
    "_operation": z.string().describe("SwitchDynamicBuffTileModeAction 的 `operation` 配置字段；准确战斗语义待确认。"),
    /** SwitchDynamicBuffTileModeAction 的 `specifyTileType` 配置字段；准确战斗语义待确认。 */
    "_specifyTileType": z.boolean().describe("SwitchDynamicBuffTileModeAction 的 `specifyTileType` 配置字段；准确战斗语义待确认。"),
    /** SwitchDynamicBuffTileModeAction 的 `tileType` 配置字段；准确战斗语义待确认。 */
    "_tileType": z.literal("REED_TILE").describe("SwitchDynamicBuffTileModeAction 的 `tileType` 配置字段；准确战斗语义待确认。"),
    /** SwitchDynamicBuffTileModeAction 的 `useOwnerRootTile` 配置字段；准确战斗语义待确认。 */
    "_useOwnerRootTile": z.boolean().describe("SwitchDynamicBuffTileModeAction 的 `useOwnerRootTile` 配置字段；准确战斗语义待确认。"),
    /** SwitchDynamicBuffTileModeAction 的 `useSwitchResult` 配置字段；准确战斗语义待确认。 */
    "_useSwitchResult": z.boolean().describe("SwitchDynamicBuffTileModeAction 的 `useSwitchResult` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SwitchDynamicBuffTileMode, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SwitchDynamicBuffTileModeAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SwitchDynamicBuffTileModeInRange, Assembly-CSharp 的严格 Action 数据。
 */
export const SwitchDynamicBuffTileModeInRangeActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SwitchDynamicBuffTileModeInRange, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** SwitchDynamicBuffTileModeInRangeAction 的 `assignChangedCountToBb` 配置字段；准确战斗语义待确认。 */
    "_assignChangedCountToBb": z.boolean().describe("SwitchDynamicBuffTileModeInRangeAction 的 `assignChangedCountToBb` 配置字段；准确战斗语义待确认。"),
    /** SwitchDynamicBuffTileModeInRangeAction 的 `checkTileKeys` 配置字段；准确战斗语义待确认。 */
    "_checkTileKeys": z.union([
                            z.null(),
                            z.array(z.string()),
                          ]).describe("SwitchDynamicBuffTileModeInRangeAction 的 `checkTileKeys` 配置字段；准确战斗语义待确认。"),
    /** SwitchDynamicBuffTileModeInRangeAction 的 `countBbKey` 配置字段；准确战斗语义待确认。 */
    "_countBbKey": z.string().describe("SwitchDynamicBuffTileModeInRangeAction 的 `countBbKey` 配置字段；准确战斗语义待确认。"),
    /** SwitchDynamicBuffTileModeInRangeAction 的 `decBbKey` 配置字段；准确战斗语义待确认。 */
    "_decBbKey": z.string().describe("SwitchDynamicBuffTileModeInRangeAction 的 `decBbKey` 配置字段；准确战斗语义待确认。"),
    /** SwitchDynamicBuffTileModeInRangeAction 的 `effectKeyOnTile` 配置字段；准确战斗语义待确认。 */
    "_effectKeyOnTile": z.string().describe("SwitchDynamicBuffTileModeInRangeAction 的 `effectKeyOnTile` 配置字段；准确战斗语义待确认。"),
    /** SwitchDynamicBuffTileModeInRangeAction 的 `modeIndex` 配置字段；准确战斗语义待确认。 */
    "_modeIndex": z.number().describe("SwitchDynamicBuffTileModeInRangeAction 的 `modeIndex` 配置字段；准确战斗语义待确认。"),
    /** SwitchDynamicBuffTileModeInRangeAction 的 `operation` 配置字段；准确战斗语义待确认。 */
    "_operation": z.string().describe("SwitchDynamicBuffTileModeInRangeAction 的 `operation` 配置字段；准确战斗语义待确认。"),
    /** SwitchDynamicBuffTileModeInRangeAction 的 `rangeId` 配置字段；准确战斗语义待确认。 */
    "_rangeId": z.string().describe("SwitchDynamicBuffTileModeInRangeAction 的 `rangeId` 配置字段；准确战斗语义待确认。"),
    /** SwitchDynamicBuffTileModeInRangeAction 的 `rangeRadius` 配置字段；准确战斗语义待确认。 */
    "_rangeRadius": z.number().describe("SwitchDynamicBuffTileModeInRangeAction 的 `rangeRadius` 配置字段；准确战斗语义待确认。"),
    /** SwitchDynamicBuffTileModeInRangeAction 的 `rangeRadiusKey` 配置字段；准确战斗语义待确认。 */
    "_rangeRadiusKey": z.string().describe("SwitchDynamicBuffTileModeInRangeAction 的 `rangeRadiusKey` 配置字段；准确战斗语义待确认。"),
    /** SwitchDynamicBuffTileModeInRangeAction 的 `requireCharacterNotOn` 配置字段；准确战斗语义待确认。 */
    "_requireCharacterNotOn": z.boolean().describe("SwitchDynamicBuffTileModeInRangeAction 的 `requireCharacterNotOn` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.enum(["BUFF_OWNER","SOURCE"]).describe("Action 读取的来源实体类型。"),
    /** SwitchDynamicBuffTileModeInRangeAction 的 `useRangeRadius` 配置字段；准确战斗语义待确认。 */
    "_useRangeRadius": z.boolean().describe("SwitchDynamicBuffTileModeInRangeAction 的 `useRangeRadius` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SwitchDynamicBuffTileModeInRange, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SwitchDynamicBuffTileModeInRangeAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SwitchDynamicBuffTileModeOneLine, Assembly-CSharp 的严格 Action 数据。
 */
export const SwitchDynamicBuffTileModeOneLineActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SwitchDynamicBuffTileModeOneLine, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** SwitchDynamicBuffTileModeOneLineAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
    "_abilityName": z.string().describe("SwitchDynamicBuffTileModeOneLineAction 的 `abilityName` 配置字段；准确战斗语义待确认。"),
    /** 读取或写入战斗黑板的参数键。 */
    "_blackboardKey": z.union([
                            z.null(),
                            z.string(),
                          ]).describe("读取或写入战斗黑板的参数键。"),
    /** SwitchDynamicBuffTileModeOneLineAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
    "_buffKey": z.string().describe("SwitchDynamicBuffTileModeOneLineAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
    /** SwitchDynamicBuffTileModeOneLineAction 的 `direction` 配置字段；准确战斗语义待确认。 */
    "_direction": z.string().describe("SwitchDynamicBuffTileModeOneLineAction 的 `direction` 配置字段；准确战斗语义待确认。"),
    /** SwitchDynamicBuffTileModeOneLineAction 的 `dontSwitchModeOnlyAssignTileCntToAbilityBb` 配置字段；准确战斗语义待确认。 */
    "_dontSwitchModeOnlyAssignTileCntToAbilityBb": z.boolean().describe("SwitchDynamicBuffTileModeOneLineAction 的 `dontSwitchModeOnlyAssignTileCntToAbilityBb` 配置字段；准确战斗语义待确认。"),
    /** SwitchDynamicBuffTileModeOneLineAction 的 `exceptCurrentTile` 配置字段；准确战斗语义待确认。 */
    "_exceptCurrentTile": z.boolean().describe("SwitchDynamicBuffTileModeOneLineAction 的 `exceptCurrentTile` 配置字段；准确战斗语义待确认。"),
    /** SwitchDynamicBuffTileModeOneLineAction 的 `modeIndex` 配置字段；准确战斗语义待确认。 */
    "_modeIndex": z.number().describe("SwitchDynamicBuffTileModeOneLineAction 的 `modeIndex` 配置字段；准确战斗语义待确认。"),
    /** SwitchDynamicBuffTileModeOneLineAction 的 `modeIndexDeltaWhenFinalTile` 配置字段；准确战斗语义待确认。 */
    "_modeIndexDeltaWhenFinalTile": z.number().describe("SwitchDynamicBuffTileModeOneLineAction 的 `modeIndexDeltaWhenFinalTile` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_OWNER").describe("Action 读取的来源实体类型。"),
    /** SwitchDynamicBuffTileModeOneLineAction 的 `switchOneTileEachTime` 配置字段；准确战斗语义待确认。 */
    "_switchOneTileEachTime": z.boolean().describe("SwitchDynamicBuffTileModeOneLineAction 的 `switchOneTileEachTime` 配置字段；准确战斗语义待确认。"),
    /** SwitchDynamicBuffTileModeOneLineAction 的 `tileIndexKey` 配置字段；准确战斗语义待确认。 */
    "_tileIndexKey": z.union([
                           z.null(),
                           z.string(),
                         ]).describe("SwitchDynamicBuffTileModeOneLineAction 的 `tileIndexKey` 配置字段；准确战斗语义待确认。"),
    /** SwitchDynamicBuffTileModeOneLineAction 的 `updateDirectionBeforeApply` 配置字段；准确战斗语义待确认。 */
    "_updateDirectionBeforeApply": z.boolean().describe("SwitchDynamicBuffTileModeOneLineAction 的 `updateDirectionBeforeApply` 配置字段；准确战斗语义待确认。"),
    /** SwitchDynamicBuffTileModeOneLineAction 的 `useCurrentTileDirection` 配置字段；准确战斗语义待确认。 */
    "_useCurrentTileDirection": z.boolean().describe("SwitchDynamicBuffTileModeOneLineAction 的 `useCurrentTileDirection` 配置字段；准确战斗语义待确认。"),
    /** SwitchDynamicBuffTileModeOneLineAction 的 `useLocationFromBBAsCurrentTile` 配置字段；准确战斗语义待确认。 */
    "_useLocationFromBBAsCurrentTile": z.boolean().describe("SwitchDynamicBuffTileModeOneLineAction 的 `useLocationFromBBAsCurrentTile` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SwitchDynamicBuffTileModeOneLine, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SwitchDynamicBuffTileModeOneLineAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SwitchDynamicBuffTileModeUseAbilitySelector, Assembly-CSharp 的严格 Action 数据。
 */
export const SwitchDynamicBuffTileModeUseAbilitySelectorActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SwitchDynamicBuffTileModeUseAbilitySelector, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** SwitchDynamicBuffTileModeUseAbilitySelectorAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
    "_abilityName": z.string().describe("SwitchDynamicBuffTileModeUseAbilitySelectorAction 的 `abilityName` 配置字段；准确战斗语义待确认。"),
    /** SwitchDynamicBuffTileModeUseAbilitySelectorAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
    "_audioSignal": z.string().describe("SwitchDynamicBuffTileModeUseAbilitySelectorAction 的 `audioSignal` 配置字段；准确战斗语义待确认。"),
    /** SwitchDynamicBuffTileModeUseAbilitySelectorAction 的 `modeIndex` 配置字段；准确战斗语义待确认。 */
    "_modeIndex": z.number().describe("SwitchDynamicBuffTileModeUseAbilitySelectorAction 的 `modeIndex` 配置字段；准确战斗语义待确认。"),
    /** SwitchDynamicBuffTileModeUseAbilitySelectorAction 的 `operation` 配置字段；准确战斗语义待确认。 */
    "_operation": z.string().describe("SwitchDynamicBuffTileModeUseAbilitySelectorAction 的 `operation` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_OWNER").describe("Action 读取的来源实体类型。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SwitchDynamicBuffTileModeUseAbilitySelector, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SwitchDynamicBuffTileModeUseAbilitySelectorAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SwitchMode, Assembly-CSharp 的严格 Action 数据。
 */
export const SwitchModeActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SwitchMode, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** SwitchModeAction 的 `loadModeFromBlackboard` 配置字段；准确战斗语义待确认。 */
    "_loadModeFromBlackboard": z.boolean().describe("SwitchModeAction 的 `loadModeFromBlackboard` 配置字段；准确战斗语义待确认。"),
    /** SwitchModeAction 的 `modeIndex` 配置字段；准确战斗语义待确认。 */
    "_modeIndex": z.number().describe("SwitchModeAction 的 `modeIndex` 配置字段；准确战斗语义待确认。"),
    /** SwitchModeAction 的 `restartFSM` 配置字段；准确战斗语义待确认。 */
    "_restartFSM": z.boolean().describe("SwitchModeAction 的 `restartFSM` 配置字段；准确战斗语义待确认。"),
    /** SwitchModeAction 的 `restoreDefault` 配置字段；准确战斗语义待确认。 */
    "_restoreDefault": z.boolean().describe("SwitchModeAction 的 `restoreDefault` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","BUFF_SOURCE","SOURCE","TARGET"]).describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SwitchMode, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SwitchModeAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SwitchRacingMode, Assembly-CSharp 的严格 Action 数据。
 */
export const SwitchRacingModeActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SwitchRacingMode, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** SwitchRacingModeAction 的 `racingMode` 配置字段；准确战斗语义待确认。 */
    "_racingMode": z.enum(["Racing","Recover"]).describe("SwitchRacingModeAction 的 `racingMode` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SwitchRacingMode, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SwitchRacingModeAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SwitchRallyPointCategory, Assembly-CSharp 的严格 Action 数据。
 */
export const SwitchRallyPointCategoryActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SwitchRallyPointCategory, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** SwitchRallyPointCategoryAction 的 `category` 配置字段；准确战斗语义待确认。 */
    "_category": z.enum(["DEFAULT","TRAP_OR_ITEM"]).describe("SwitchRallyPointCategoryAction 的 `category` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SwitchRallyPointCategory, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SwitchRallyPointCategoryAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SwitchSide, Assembly-CSharp 的严格 Action 数据。
 */
export const SwitchSideActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SwitchSide, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** SwitchSideAction 的 `alwaysShowEnemyHp` 配置字段；准确战斗语义待确认。 */
    "_alwaysShowEnemyHp": z.boolean().describe("SwitchSideAction 的 `alwaysShowEnemyHp` 配置字段；准确战斗语义待确认。"),
    /** SwitchSideAction 的 `markEnemyKilled` 配置字段；准确战斗语义待确认。 */
    "_markEnemyKilled": z.boolean().describe("SwitchSideAction 的 `markEnemyKilled` 配置字段；准确战斗语义待确认。"),
    /** SwitchSideAction 的 `sideType` 配置字段；准确战斗语义待确认。 */
    "_sideType": z.enum(["ALLY","ENEMY"]).describe("SwitchSideAction 的 `sideType` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SwitchSide, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SwitchSideAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SwitchSkillCharWordToPassiveType, Assembly-CSharp 的严格 Action 数据。
 */
export const SwitchSkillCharWordToPassiveTypeActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SwitchSkillCharWordToPassiveType, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SwitchSkillCharWordToPassiveType, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SwitchSkillCharWordToPassiveTypeAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SwitchSkillRangeIdModeIndex, Assembly-CSharp 的严格 Action 数据。
 */
export const SwitchSkillRangeIdModeIndexActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SwitchSkillRangeIdModeIndex, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** SwitchSkillRangeIdModeIndexAction 的 `mode` 配置字段；准确战斗语义待确认。 */
    "_mode": z.number().describe("SwitchSkillRangeIdModeIndexAction 的 `mode` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SwitchSkillRangeIdModeIndex, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SwitchSkillRangeIdModeIndexAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionS16Schema = z
  .discriminatedUnion("$type", [SwitchDynamicBuffTileModeActionSchema, SwitchDynamicBuffTileModeInRangeActionSchema, SwitchDynamicBuffTileModeOneLineActionSchema, SwitchDynamicBuffTileModeUseAbilitySelectorActionSchema, SwitchModeActionSchema, SwitchRacingModeActionSchema, SwitchRallyPointCategoryActionSchema, SwitchSideActionSchema, SwitchSkillCharWordToPassiveTypeActionSchema, SwitchSkillRangeIdModeIndexActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionS16>;
