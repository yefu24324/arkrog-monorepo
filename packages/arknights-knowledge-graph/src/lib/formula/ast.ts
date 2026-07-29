import type { FormulaZoneId } from "./formula-book.js";

/** 公式 AST 支持的全部运算。 */
export type FormulaOperator =
  | "add"
  | "subtract"
  | "multiply"
  | "divide"
  | "max"
  | "min"
  | "sum"
  | "union"
  | "product"
  | "product-one-plus"
  | "percent-plus";

/** 所有可独立计算的公式节点抽象基类。 */
export abstract class FormulaExpressionNode {
  /** 节点判别字段，供递归遍历和 UI 使用。 */
  abstract readonly kind: "item" | "operation" | "zone" | "formula";

  /** 直接使用当前 FormulaBook 对象图中的 item 计算节点数值。 */
  abstract calculate(): number;

  /** 创建不共享可变 item 数组的节点副本。 */
  abstract clone(): FormulaExpressionNode;
}

/** 公式树中的固定数值或运行时贡献项。 */
export class FormulaItemExpression extends FormulaExpressionNode {
  readonly kind = "item" as const;

  constructor(
    /** 用于说明数值来源的简短提示。 */
    public readonly tooltip: string,
    /** 已按目标乘区语义规范化的数值。 */
    public readonly value: number,
  ) {
    super();
  }

  /** item 直接返回自身数值。 */
  calculate(): number {
    return this.value;
  }

  /** 创建独立 item 副本。 */
  clone(): FormulaItemExpression {
    return new FormulaItemExpression(this.tooltip, this.value);
  }
}

/** 对若干子节点执行纯数学运算的节点。 */
export class FormulaOperationExpression extends FormulaExpressionNode {
  readonly kind = "operation" as const;

  constructor(
    /** 当前节点执行的稳定运算类型。 */
    public readonly operator: FormulaOperator,
    /** 按源码和运行时写入顺序参与运算的子节点。 */
    public readonly operands: FormulaExpression[],
  ) {
    super();
  }

  /** 计算节点中的全部操作数。 */
  calculate(): number {
    const values = this.operands.map((operand) => operand.calculate());
    switch (this.operator) {
      case "add":
      case "sum":
        return values.reduce((result, value) => result + value, 0);
      case "subtract":
        return values.slice(1).reduce((result, value) => result - value, values[0] ?? 0);
      case "multiply":
      case "product":
        return values.reduce((result, value) => result * value, 1);
      case "divide":
        return values.slice(1).reduce((result, value) => result / value, values[0] ?? 0);
      case "max":
        return values.length === 0 ? Number.NEGATIVE_INFINITY : Math.max(...values);
      case "min":
        return values.length === 0 ? Number.POSITIVE_INFINITY : Math.min(...values);
      case "union":
        return 1 - values.reduce((remaining, value) => remaining * (1 - value), 1);
      case "product-one-plus":
        return values.reduce((result, value) => result * (1 + value), 1);
      case "percent-plus": {
        // 第一个 item 是显式基数，后续 item 统一按百分数换算。
        const [base = 0, ...percentages] = values;
        return base + percentages.reduce((result, value) => result + value, 0) / 100;
      }
    }
  }

  /** 深度复制全部操作数。 */
  clone(): FormulaOperationExpression {
    return new FormulaOperationExpression(
      this.operator,
      this.operands.map((operand) => operand.clone()),
    );
  }
}

/** 可由藏品等业务直接追加 item 的命名乘区。 */
export class FormulaZoneExpression extends FormulaExpressionNode {
  readonly kind = "zone" as const;

  /** 可枚举运算符随 ZoneNode 一起序列化到 docs JSON。 */
  public readonly operator: FormulaOperator;

  /** 可枚举 item 随 ZoneNode 一起序列化到 docs JSON。 */
  public readonly operands: readonly FormulaExpression[];

  constructor(
    /** 用于 FormulaBook 查找的稳定枚举 ID。 */
    public readonly zoneId: FormulaZoneId,
    /** 静态基数和运行时 item 共同使用的区内运算。 */
    public readonly expression: FormulaOperationExpression,
  ) {
    super();
    this.operator = expression.operator;
    this.operands = expression.operands;
  }

  /** 当前 zone 中包含静态基数在内的全部 item。 */
  get items(): readonly FormulaItemExpression[] {
    return this.expression.operands as FormulaItemExpression[];
  }

  /** 向当前 FormulaBook 实例中的 zone 直接追加一个 item。 */
  add_item(entry: FormulaItemExpression): this {
    this.expression.operands.push(entry);
    return this;
  }

  /** 按当前全部 item 直接计算乘区结果。 */
  calculate(): number {
    return this.expression.calculate();
  }

  /** 深度复制当前 zone 及其中的全部 item。 */
  clone(): FormulaZoneExpression {
    return new FormulaZoneExpression(this.zoneId, this.expression.clone());
  }
}

/** 对一段派生计算命名和复用的公式节点。 */
export class FormulaNodeExpression extends FormulaExpressionNode {
  readonly kind = "formula" as const;

  constructor(
    /** 公式与乘区共用命名空间中的稳定枚举 ID。 */
    public readonly id: FormulaZoneId,
    /** 当前命名公式包装的实际计算树。 */
    public readonly expression: FormulaExpression,
  ) {
    super();
  }

  /** 直接递归计算当前公式对象图。 */
  calculate(): number {
    return this.expression.calculate();
  }

  /** 深度复制当前命名公式。 */
  clone(): FormulaNodeExpression {
    return new FormulaNodeExpression(this.id, this.expression.clone());
  }
}

/** 可按 kind 安全收窄的全部类 AST 节点联合。 */
export type FormulaExpression =
  | FormulaItemExpression
  | FormulaOperationExpression
  | FormulaZoneExpression
  | FormulaNodeExpression;

/** 运算构造器只负责创建类节点，不承载业务逻辑。 */
export type FormulaOperationBuilder = (...operands: FormulaExpression[]) => FormulaOperationExpression;

/** 创建公式中的固定数值或运行时贡献项。 */
export function item(tooltip: string, value: number): FormulaItemExpression {
  return new FormulaItemExpression(tooltip, value);
}

/** 创建通用纯运算节点。 */
export function operation(operator: FormulaOperator, ...operands: FormulaExpression[]): FormulaOperationExpression {
  return new FormulaOperationExpression(operator, operands);
}

/** 创建结构加法节点。 */
export function plus(...operands: FormulaExpression[]): FormulaOperationExpression {
  return operation("add", ...operands);
}

/** 创建结构减法节点。 */
export function subtract(...operands: FormulaExpression[]): FormulaOperationExpression {
  return operation("subtract", ...operands);
}

/** 创建结构乘法节点。 */
export function multiply(...operands: FormulaExpression[]): FormulaOperationExpression {
  return operation("multiply", ...operands);
}

/** 创建结构除法节点。 */
export function divide(...operands: FormulaExpression[]): FormulaOperationExpression {
  return operation("divide", ...operands);
}

/** 创建最大值节点。 */
export function max(...operands: FormulaExpression[]): FormulaOperationExpression {
  return operation("max", ...operands);
}

/** 创建最小值节点。 */
export function min(...operands: FormulaExpression[]): FormulaOperationExpression {
  return operation("min", ...operands);
}

/** 创建概率并集节点。 */
export function union(...operands: FormulaExpression[]): FormulaOperationExpression {
  return operation("union", ...operands);
}

/** 创建绝对倍率逐项乘算节点。 */
export function product(...operands: FormulaExpression[]): FormulaOperationExpression {
  return operation("product", ...operands);
}

/** 创建每项先加一再逐项乘算节点。 */
export function productOnePlus(...operands: FormulaExpression[]): FormulaOperationExpression {
  return operation("product-one-plus", ...operands);
}

/** 创建以第一个 item 为基数、其余 item 除以一百后加算的节点。 */
export function percentPlus(...operands: FormulaExpression[]): FormulaOperationExpression {
  return operation("percent-plus", ...operands);
}

/** 创建可以直接追加 item 的命名乘区节点。 */
export function zone(
  zoneId: FormulaZoneId,
  createOperation: FormulaOperationBuilder,
  ...items: FormulaItemExpression[]
): FormulaZoneExpression {
  return new FormulaZoneExpression(zoneId, createOperation(...items));
}

/** 创建保留稳定枚举 ID 的命名公式节点。 */
export function formula(zoneId: FormulaZoneId, expression: FormulaExpression): FormulaNodeExpression {
  return new FormulaNodeExpression(zoneId, expression);
}
