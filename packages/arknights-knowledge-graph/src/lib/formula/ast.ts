import type { FormulaZoneId } from "../domain/damage-zones.js";

/** 公式当前计算的伤害类型，用于筛选只对特定伤害生效的贡献项。 */
export type FormulaDamageType = "physical" | "magical" | "pure" | "elemental";

/** 公式 AST 支持的稳定输入 ID。 */
export type FormulaInputId =
  | "ATK0"
  | "CHAR_HP0"
  | "CHAR_DEF0"
  | "CHAR_RES0"
  | "DEPLOY_COST0"
  | "INITIAL_DP0"
  | "BLOCK_COUNT0"
  | "INITIAL_SP0"
  | "SP_COST0"
  | "SP_RECOVERY_PER_SECOND0"
  | "ENEMY_ATK0"
  | "ENEMY_ATTACK_SPEED0"
  | "ENEMY_MOVE_SPEED0"
  | "DEPLOY_LIMIT0"
  | "DEF0"
  | "RES0"
  | "HP0"
  | "PHYSICAL_ATTACK_SCALE"
  | "MAGICAL_ATTACK_SCALE"
  | "PURE_ATTACK_SCALE"
  | "PHYSICAL_MIN_DAMAGE_RATIO"
  | "MAGICAL_MIN_DAMAGE_RATIO"
  | "RAW_ELEMENTAL_DAMAGE"
  | "RAW_ELEMENTAL_IMPAIRMENT"
  | "RAW_INCOMING_DAMAGE"
  | "ENEMY_EP_RESISTANCE0"
  | "ENEMY_EP_DAMAGE_RESISTANCE0"
  | "BASE_ATTACK_INTERVAL";

/** 公式 AST 的常量节点。 */
export interface ConstantExpression {
  /** 节点判别字段。 */
  kind: "constant";
  /** 常量值。 */
  value: number;
}

/** 公式 AST 的外部输入节点。 */
export interface InputExpression {
  /** 节点判别字段。 */
  kind: "input";
  /** 输入的稳定 ID。 */
  inputId: FormulaInputId;
  /** 人类可读符号。 */
  symbol: string;
  /** 输入含义说明。 */
  tooltip: string;
}

/** 公式 AST 的乘区引用节点。 */
export interface ZoneExpression {
  /** 节点判别字段。 */
  kind: "zone";
  /** 被引用的稳定乘区 ID。 */
  zoneId: FormulaZoneId;
  /** 可选伤害类型筛选。 */
  damageType?: FormulaDamageType;
}

/** 公式 AST 的子公式引用节点。 */
export interface FormulaReferenceExpression {
  /** 节点判别字段。 */
  kind: "formula";
  /** 被引用的稳定公式 ID。 */
  formulaId: FormulaId;
}

/** 公式 AST 的多参数运算节点。 */
export interface OperationExpression {
  /** 节点判别字段。 */
  kind: "operation";
  /** 运算类型。 */
  operator: "add" | "subtract" | "multiply" | "divide" | "max" | "min";
  /** 按顺序参与运算的子表达式。 */
  operands: FormulaExpression[];
  /** 运算原因，供公式树和 UI 提示展示。 */
  tooltip: string;
}

/** 可计算、可渲染的公式 AST 节点联合。 */
export type FormulaExpression =
  | ConstantExpression
  | InputExpression
  | ZoneExpression
  | FormulaReferenceExpression
  | OperationExpression;

/** 当前实验公式簿中的稳定公式 ID。 */
export type FormulaId =
  | "FINAL_ATK"
  | "FINAL_CHAR_HP"
  | "FINAL_CHAR_DEF"
  | "FINAL_CHAR_RES"
  | "FINAL_DEPLOY_COST"
  | "FINAL_INITIAL_DP"
  | "FINAL_BLOCK_COUNT"
  | "FINAL_INITIAL_SP"
  | "FINAL_SP_COST"
  | "FINAL_SP_RECOVERY_PER_SECOND"
  | "SP_GAIN_PER_TRIGGER"
  | "PHYSICAL_EVASION_RATE"
  | "MAGICAL_EVASION_RATE"
  | "FINAL_ENEMY_ATK"
  | "FINAL_ENEMY_ATTACK_SPEED"
  | "FINAL_ENEMY_MOVE_SPEED"
  | "FINAL_DEPLOY_LIMIT"
  | "FINAL_ENEMY_DEF"
  | "FINAL_ENEMY_RES"
  | "EFFECTIVE_DEF"
  | "EFFECTIVE_RES"
  | "ENEMY_MAX_HP"
  | "FINAL_ENEMY_DAMAGE_RESISTANCE"
  | "CHAR_TAKEN_DAMAGE"
  | "ENEMY_OUTGOING_DAMAGE"
  | "ELEMENTAL_IMPAIRMENT_TO_ENEMY"
  | "ELEMENTAL_IMPAIRMENT_TO_CHAR"
  | "PHYSICAL_MAIN_DAMAGE"
  | "MAGICAL_MAIN_DAMAGE"
  | "PURE_MAIN_DAMAGE"
  | "ELEMENTAL_MAIN_DAMAGE"
  | "TOTAL_DAMAGE"
  | "DPS";

/** @deprecated 公式簿已不限于伤害，请使用 FormulaId。 */
export type DamageFormulaId = FormulaId;

/** 一条有名称、有根节点的完整公式。 */
export interface FormulaDefinition {
  /** 稳定公式 ID。 */
  id: FormulaId;
  /** 人类可读名称。 */
  name: string;
  /** 公式左侧使用的短符号。 */
  symbol: string;
  /** 公式用途说明。 */
  tooltip: string;
  /** 公式的 AST 根节点。 */
  expression: FormulaExpression;
}

/** @deprecated 公式簿已不限于伤害，请使用 FormulaDefinition。 */
export type DamageFormulaDefinition = FormulaDefinition;

/** 创建数值常量节点。 */
export function constant(value: number): ConstantExpression {
  return { kind: "constant", value };
}

/** 创建带说明的外部输入节点。 */
export function input(inputId: FormulaInputId, symbol: string, tooltip: string): InputExpression {
  return { kind: "input", inputId, symbol, tooltip };
}

/** 创建乘区引用节点。 */
export function zone(zoneId: FormulaZoneId, damageType?: FormulaDamageType): ZoneExpression {
  return { kind: "zone", zoneId, damageType };
}

/** 创建子公式引用节点。 */
export function formula(formulaId: FormulaId): FormulaReferenceExpression {
  return { kind: "formula", formulaId };
}

/** 创建通用多参数运算节点。 */
function operation(
  operator: OperationExpression["operator"],
  tooltip: string,
  operands: FormulaExpression[],
): OperationExpression {
  return { kind: "operation", operator, tooltip, operands };
}

/** 创建加法节点。 */
export function add(tooltip: string, ...operands: FormulaExpression[]): OperationExpression {
  return operation("add", tooltip, operands);
}

/** 创建减法节点。 */
export function subtract(tooltip: string, ...operands: FormulaExpression[]): OperationExpression {
  return operation("subtract", tooltip, operands);
}

/** 创建乘法节点。 */
export function multiply(tooltip: string, ...operands: FormulaExpression[]): OperationExpression {
  return operation("multiply", tooltip, operands);
}

/** 创建除法节点。 */
export function divide(tooltip: string, ...operands: FormulaExpression[]): OperationExpression {
  return operation("divide", tooltip, operands);
}

/** 创建最大值节点。 */
export function max(tooltip: string, ...operands: FormulaExpression[]): OperationExpression {
  return operation("max", tooltip, operands);
}

/** 创建最小值节点。 */
export function min(tooltip: string, ...operands: FormulaExpression[]): OperationExpression {
  return operation("min", tooltip, operands);
}
