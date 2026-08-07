import type { FormulaWritableZoneId } from "../../formula/formula-book.js";
import type { FormulaActivationContext } from "../shared/activation.js";

/** report buff 黑板中 mechanics 会读取的公共字段。 */
export interface MechanicsBlackboardEntry {
  /** 原始参数名；读取时会 trim 尾随空格。 */
  key: string;
  /** 原始数值。 */
  value: number;
  /** 原始字符串值。 */
  valueStr: string | null;
}

/** 一个 report buff 归一化后的生成程序输入。 */
export interface MechanicsEffectInput {
  /** report 中构造的稳定效果 ID。 */
  effectId: string;
  /** 藏品、charBuffData、难度、关卡或主题来源。 */
  source: string;
  /** 外层 buff.key。 */
  key: string;
  /** 黑板 key 参数引用的战斗模板；没有引用时等于外层 key。 */
  mechanicName: string;
  /** 未改写的 report 黑板。 */
  blackboard: readonly MechanicsBlackboardEntry[];
  /** 用户为层数型效果提供的当前层数。 */
  layer: number;
  /** 写入 FormulaItem tooltip 的对象名称。 */
  displayName: string;
}

/** 生成程序产出的确定性公式贡献。 */
export interface GeneratedFormulaContribution {
  /** FormulaBook 中真实可写的乘区。 */
  zoneId: FormulaWritableZoneId;
  /** 已按乘区语义规范化的数值。 */
  value: number;
  /** 附加到通用黑板条件之外的自然语言条件。 */
  conditions?: readonly string[];
  /** 附加条件的运行时判定；缺少数据时必须返回 false。 */
  active?: (context: FormulaActivationContext) => boolean;
}

/** AI 生成程序的统一函数契约。 */
export type MechanicsProgram = (
  effect: MechanicsEffectInput,
) => readonly GeneratedFormulaContribution[];

/** 静态注册表对一个机制签名的处理结论。 */
export type MechanicsProgramResolution =
  | { status: "supported"; program: MechanicsProgram }
  | { status: "unknown" }
  | { status: "not_applicable" };
