/**
 * buff_template_data 的 A 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AssignDirectionToBB, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AssignDirectionToBBAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AssignDirectionToBB, Assembly-CSharp";
  /** 读取或写入战斗黑板的参数键。 */
  "_blackboardKey": string;
  /** AssignDirectionToBBAction 的 `fromTokenOrHost` 配置字段；准确战斗语义待确认。 */
  "_fromTokenOrHost": boolean;
  /** AssignDirectionToBBAction 的 `isReverse` 配置字段；准确战斗语义待确认。 */
  "_isReverse": boolean;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "BUFF_SOURCE" | "SOURCE" | "TARGET";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AssignDistanceToBB, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AssignDistanceToBBAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AssignDistanceToBB, Assembly-CSharp";
  /** 读取或写入战斗黑板的参数键。 */
  "_blackboardKey": string;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER";
  /** Action 作用的目标实体类型。 */
  "_targetType": "TARGET";
  /** AssignDistanceToBBAction 的 `useManhattanDistance` 配置字段；准确战斗语义待确认。 */
  "_useManhattanDistance": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AssignElectricWorkCountToManager, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AssignElectricWorkCountToManagerAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AssignElectricWorkCountToManager, Assembly-CSharp";
  /** AssignElectricWorkCountToManagerAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_SOURCE";
  /** AssignElectricWorkCountToManagerAction 的 `workType` 配置字段；准确战斗语义待确认。 */
  "_workType": "IRON" | "STONE" | "WOOD";
  /** AssignElectricWorkCountToManagerAction 的 `count` 配置字段；准确战斗语义待确认。 */
  "count": number;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AssignEnemyIdInBlackboard, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AssignEnemyIdInBlackboardAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AssignEnemyIdInBlackboard, Assembly-CSharp";
  /** AssignEnemyIdInBlackboardAction 的 `source` 配置字段；准确战斗语义待确认。 */
  "_source": "BUFF_SOURCE";
  /** AssignEnemyIdInBlackboardAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "TARGET";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AssignEnemyLastMoveDirectionToBB, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AssignEnemyLastMoveDirectionToBBAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AssignEnemyLastMoveDirectionToBB, Assembly-CSharp";
  /** 读取或写入战斗黑板的参数键。 */
  "_blackboardKey": string;
  /** AssignEnemyLastMoveDirectionToBBAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AssignEnemyLifePointReduceToBB, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AssignEnemyLifePointReduceToBBAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AssignEnemyLifePointReduceToBB, Assembly-CSharp";
  /** AssignEnemyLifePointReduceToBBAction 的 `targetBlackboardKey` 配置字段；准确战斗语义待确认。 */
  "_targetBlackboardKey": string;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AssignEnemyMoveDistIntoBlackboard, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AssignEnemyMoveDistIntoBlackboardAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AssignEnemyMoveDistIntoBlackboard, Assembly-CSharp";
  /** 读取或写入战斗黑板的参数键。 */
  "_blackboardKey": string;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AssignEnemyRouteDistToBB, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AssignEnemyRouteDistToBBAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AssignEnemyRouteDistToBB, Assembly-CSharp";
  /** AssignEnemyRouteDistToBBAction 的 `blackBoardkey` 配置字段；准确战斗语义待确认。 */
  "_blackBoardkey": string;
  /** AssignEnemyRouteDistToBBAction 的 `buffkey` 配置字段；准确战斗语义待确认。 */
  "_buffkey": string;
  /** AssignEnemyRouteDistToBBAction 的 `buffTarget` 配置字段；准确战斗语义待确认。 */
  "_buffTarget": "BUFF_SOURCE";
  /** AssignEnemyRouteDistToBBAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AssignEnemySkillCoolDownToBB, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AssignEnemySkillCoolDownToBBAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AssignEnemySkillCoolDownToBB, Assembly-CSharp";
  /** AssignEnemySkillCoolDownToBBAction 的 `checkSkillActive` 配置字段；准确战斗语义待确认。 */
  "_checkSkillActive": boolean;
  /** AssignEnemySkillCoolDownToBBAction 的 `outputKey` 配置字段；准确战斗语义待确认。 */
  "_outputKey": string;
  /** AssignEnemySkillCoolDownToBBAction 的 `ownerType` 配置字段；准确战斗语义待确认。 */
  "_ownerType": "TARGET";
  /** AssignEnemySkillCoolDownToBBAction 的 `skillName` 配置字段；准确战斗语义待确认。 */
  "_skillName": string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AssignEntityCreateTimeToBB, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AssignEntityCreateTimeToBBAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AssignEntityCreateTimeToBB, Assembly-CSharp";
  /** 读取或写入战斗黑板的参数键。 */
  "_blackboardKey": string;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "BUFF_SOURCE";
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionA20 = AssignDirectionToBBAction | AssignDistanceToBBAction | AssignElectricWorkCountToManagerAction | AssignEnemyIdInBlackboardAction | AssignEnemyLastMoveDirectionToBBAction | AssignEnemyLifePointReduceToBBAction | AssignEnemyMoveDistIntoBlackboardAction | AssignEnemyRouteDistToBBAction | AssignEnemySkillCoolDownToBBAction | AssignEntityCreateTimeToBBAction;
