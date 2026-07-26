/**
 * buff_template_data 的 A 组 Action Zod Schema。
 */

import { z } from "zod";

import type { AssignDirectionToBBAction, AssignDistanceToBBAction, AssignElectricWorkCountToManagerAction, AssignEnemyIdInBlackboardAction, AssignEnemyLastMoveDirectionToBBAction, AssignEnemyLifePointReduceToBBAction, AssignEnemyMoveDistIntoBlackboardAction, AssignEnemyRouteDistToBBAction, AssignEnemySkillCoolDownToBBAction, AssignEntityCreateTimeToBBAction, BattleActionA20 } from "../../../../types/buff-template-data/actions/a/actions-a-20.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AssignDirectionToBB, Assembly-CSharp 的严格 Action 数据。
 */
export const AssignDirectionToBBActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AssignDirectionToBB, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 读取或写入战斗黑板的参数键。 */
    "_blackboardKey": z.string().describe("读取或写入战斗黑板的参数键。"),
    /** AssignDirectionToBBAction 的 `fromTokenOrHost` 配置字段；准确战斗语义待确认。 */
    "_fromTokenOrHost": z.boolean().describe("AssignDirectionToBBAction 的 `fromTokenOrHost` 配置字段；准确战斗语义待确认。"),
    /** AssignDirectionToBBAction 的 `isReverse` 配置字段；准确战斗语义待确认。 */
    "_isReverse": z.boolean().describe("AssignDirectionToBBAction 的 `isReverse` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","BUFF_SOURCE","SOURCE","TARGET"]).describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AssignDirectionToBB, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AssignDirectionToBBAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AssignDistanceToBB, Assembly-CSharp 的严格 Action 数据。
 */
export const AssignDistanceToBBActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AssignDistanceToBB, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 读取或写入战斗黑板的参数键。 */
    "_blackboardKey": z.string().describe("读取或写入战斗黑板的参数键。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_OWNER").describe("Action 读取的来源实体类型。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("TARGET").describe("Action 作用的目标实体类型。"),
    /** AssignDistanceToBBAction 的 `useManhattanDistance` 配置字段；准确战斗语义待确认。 */
    "_useManhattanDistance": z.boolean().describe("AssignDistanceToBBAction 的 `useManhattanDistance` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AssignDistanceToBB, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AssignDistanceToBBAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AssignElectricWorkCountToManager, Assembly-CSharp 的严格 Action 数据。
 */
export const AssignElectricWorkCountToManagerActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AssignElectricWorkCountToManager, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** AssignElectricWorkCountToManagerAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_SOURCE").describe("AssignElectricWorkCountToManagerAction 的 `target` 配置字段；准确战斗语义待确认。"),
    /** AssignElectricWorkCountToManagerAction 的 `workType` 配置字段；准确战斗语义待确认。 */
    "_workType": z.enum(["IRON","STONE","WOOD"]).describe("AssignElectricWorkCountToManagerAction 的 `workType` 配置字段；准确战斗语义待确认。"),
    /** AssignElectricWorkCountToManagerAction 的 `count` 配置字段；准确战斗语义待确认。 */
    "count": z.number().describe("AssignElectricWorkCountToManagerAction 的 `count` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AssignElectricWorkCountToManager, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AssignElectricWorkCountToManagerAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AssignEnemyIdInBlackboard, Assembly-CSharp 的严格 Action 数据。
 */
export const AssignEnemyIdInBlackboardActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AssignEnemyIdInBlackboard, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** AssignEnemyIdInBlackboardAction 的 `source` 配置字段；准确战斗语义待确认。 */
    "_source": z.literal("BUFF_SOURCE").describe("AssignEnemyIdInBlackboardAction 的 `source` 配置字段；准确战斗语义待确认。"),
    /** AssignEnemyIdInBlackboardAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("TARGET").describe("AssignEnemyIdInBlackboardAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AssignEnemyIdInBlackboard, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AssignEnemyIdInBlackboardAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AssignEnemyLastMoveDirectionToBB, Assembly-CSharp 的严格 Action 数据。
 */
export const AssignEnemyLastMoveDirectionToBBActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AssignEnemyLastMoveDirectionToBB, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 读取或写入战斗黑板的参数键。 */
    "_blackboardKey": z.string().describe("读取或写入战斗黑板的参数键。"),
    /** AssignEnemyLastMoveDirectionToBBAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("AssignEnemyLastMoveDirectionToBBAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AssignEnemyLastMoveDirectionToBB, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AssignEnemyLastMoveDirectionToBBAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AssignEnemyLifePointReduceToBB, Assembly-CSharp 的严格 Action 数据。
 */
export const AssignEnemyLifePointReduceToBBActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AssignEnemyLifePointReduceToBB, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** AssignEnemyLifePointReduceToBBAction 的 `targetBlackboardKey` 配置字段；准确战斗语义待确认。 */
    "_targetBlackboardKey": z.string().describe("AssignEnemyLifePointReduceToBBAction 的 `targetBlackboardKey` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AssignEnemyLifePointReduceToBB, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AssignEnemyLifePointReduceToBBAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AssignEnemyMoveDistIntoBlackboard, Assembly-CSharp 的严格 Action 数据。
 */
export const AssignEnemyMoveDistIntoBlackboardActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AssignEnemyMoveDistIntoBlackboard, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 读取或写入战斗黑板的参数键。 */
    "_blackboardKey": z.string().describe("读取或写入战斗黑板的参数键。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AssignEnemyMoveDistIntoBlackboard, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AssignEnemyMoveDistIntoBlackboardAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AssignEnemyRouteDistToBB, Assembly-CSharp 的严格 Action 数据。
 */
export const AssignEnemyRouteDistToBBActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AssignEnemyRouteDistToBB, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** AssignEnemyRouteDistToBBAction 的 `blackBoardkey` 配置字段；准确战斗语义待确认。 */
    "_blackBoardkey": z.string().describe("AssignEnemyRouteDistToBBAction 的 `blackBoardkey` 配置字段；准确战斗语义待确认。"),
    /** AssignEnemyRouteDistToBBAction 的 `buffkey` 配置字段；准确战斗语义待确认。 */
    "_buffkey": z.string().describe("AssignEnemyRouteDistToBBAction 的 `buffkey` 配置字段；准确战斗语义待确认。"),
    /** AssignEnemyRouteDistToBBAction 的 `buffTarget` 配置字段；准确战斗语义待确认。 */
    "_buffTarget": z.literal("BUFF_SOURCE").describe("AssignEnemyRouteDistToBBAction 的 `buffTarget` 配置字段；准确战斗语义待确认。"),
    /** AssignEnemyRouteDistToBBAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("AssignEnemyRouteDistToBBAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AssignEnemyRouteDistToBB, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AssignEnemyRouteDistToBBAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AssignEnemySkillCoolDownToBB, Assembly-CSharp 的严格 Action 数据。
 */
export const AssignEnemySkillCoolDownToBBActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AssignEnemySkillCoolDownToBB, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** AssignEnemySkillCoolDownToBBAction 的 `checkSkillActive` 配置字段；准确战斗语义待确认。 */
    "_checkSkillActive": z.boolean().describe("AssignEnemySkillCoolDownToBBAction 的 `checkSkillActive` 配置字段；准确战斗语义待确认。"),
    /** AssignEnemySkillCoolDownToBBAction 的 `outputKey` 配置字段；准确战斗语义待确认。 */
    "_outputKey": z.string().describe("AssignEnemySkillCoolDownToBBAction 的 `outputKey` 配置字段；准确战斗语义待确认。"),
    /** AssignEnemySkillCoolDownToBBAction 的 `ownerType` 配置字段；准确战斗语义待确认。 */
    "_ownerType": z.literal("TARGET").describe("AssignEnemySkillCoolDownToBBAction 的 `ownerType` 配置字段；准确战斗语义待确认。"),
    /** AssignEnemySkillCoolDownToBBAction 的 `skillName` 配置字段；准确战斗语义待确认。 */
    "_skillName": z.string().describe("AssignEnemySkillCoolDownToBBAction 的 `skillName` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AssignEnemySkillCoolDownToBB, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AssignEnemySkillCoolDownToBBAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AssignEntityCreateTimeToBB, Assembly-CSharp 的严格 Action 数据。
 */
export const AssignEntityCreateTimeToBBActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AssignEntityCreateTimeToBB, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 读取或写入战斗黑板的参数键。 */
    "_blackboardKey": z.string().describe("读取或写入战斗黑板的参数键。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","BUFF_SOURCE"]).describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AssignEntityCreateTimeToBB, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AssignEntityCreateTimeToBBAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionA20Schema = z
  .discriminatedUnion("$type", [AssignDirectionToBBActionSchema, AssignDistanceToBBActionSchema, AssignElectricWorkCountToManagerActionSchema, AssignEnemyIdInBlackboardActionSchema, AssignEnemyLastMoveDirectionToBBActionSchema, AssignEnemyLifePointReduceToBBActionSchema, AssignEnemyMoveDistIntoBlackboardActionSchema, AssignEnemyRouteDistToBBActionSchema, AssignEnemySkillCoolDownToBBActionSchema, AssignEntityCreateTimeToBBActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionA20>;
