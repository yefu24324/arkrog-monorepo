import type { FormulaItemExpression } from "../../formula/ast.js";
import type { FormulaWritableZoneId } from "../../formula/formula-book.js";

/** mechanics 静态分析能够给出的三种逐效果结论。 */
export type MechanicsAnalysis =
  | SupportedMechanicsAnalysis
  | UnknownMechanicsAnalysis
  | NotApplicableMechanicsAnalysis;

/** 已有确定性程序解释、能够进入 FormulaBook 的效果。 */
export interface SupportedMechanicsAnalysis {
  /** report 中可稳定定位原始 buff 的效果 ID。 */
  effectId: string;
  /** 已支持效果的固定判别值。 */
  status: "supported";
  /** FormulaBook 中真实可写的乘区。 */
  zoneId: FormulaWritableZoneId;
  /** 已按乘区语义规范化的最小公式项。 */
  item: FormulaItemExpression;
  /** 静态分析不执行条件，但保留面向用户的条件说明。 */
  conditions: string[];
}

/** 当前证据或生成程序不足、禁止写入 FormulaBook 的效果。 */
export interface UnknownMechanicsAnalysis {
  /** report 中可稳定定位原始 buff 的效果 ID。 */
  effectId: string;
  /** 未知效果的固定判别值。 */
  status: "unknown";
}

/** 已确认不属于 FormulaBook 战斗公式的效果。 */
export interface NotApplicableMechanicsAnalysis {
  /** report 中可稳定定位原始 buff 的效果 ID。 */
  effectId: string;
  /** 非公式效果的固定判别值。 */
  status: "not_applicable";
}

/** 场景应用入口只返回真正写入 FormulaBook 的结果。 */
export interface AppliedFormulaItem {
  /** 实际写入的 FormulaBook 乘区。 */
  zoneId: FormulaWritableZoneId;
  /** 实际追加到乘区的最小公式项。 */
  item: FormulaItemExpression;
}
