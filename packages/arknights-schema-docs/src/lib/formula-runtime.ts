/**
 * 文档站客户端公式运行时：消费 formula-book.json，不依赖 kuzu。
 * 语义对齐 packages/arknights-knowledge-graph/src/lib/formula 的上下文与求值器。
 */

/** 公式支持的伤害类型。 */
export type FormulaDamageType = 'physical' | 'magical' | 'pure' | 'elemental';

/** 公式 AST 常量节点。 */
export interface ConstantExpression {
  kind: 'constant';
  value: number;
}

/** 公式 AST 外部输入节点。 */
export interface InputExpression {
  kind: 'input';
  inputId: string;
  symbol: string;
  tooltip: string;
}

/** 公式 AST 乘区引用节点。 */
export interface ZoneExpression {
  kind: 'zone';
  zoneId: string;
  damageType?: FormulaDamageType;
}

/** 公式 AST 子公式引用节点。 */
export interface FormulaReferenceExpression {
  kind: 'formula';
  formulaId: string;
}

/** 公式 AST 运算节点。 */
export interface OperationExpression {
  kind: 'operation';
  operator: 'add' | 'subtract' | 'multiply' | 'divide' | 'max' | 'min';
  operands: FormulaExpression[];
  tooltip: string;
}

/** 文档站读取的公式 AST 联合。 */
export type FormulaExpression =
  | ConstantExpression
  | InputExpression
  | ZoneExpression
  | FormulaReferenceExpression
  | OperationExpression;

/** 求和乘区聚合定义。 */
export interface SumAggregation {
  kind: 'sum';
  base: number;
  termScale: number;
}

/** 独立来源乘算定义。 */
export interface ProductOnePlusAggregation {
  kind: 'product-one-plus';
}

/** formula-book.json 中的乘区定义。 */
export interface FormulaZoneDefinition {
  id: string;
  symbol: string;
  name: string;
  tooltip: string;
  unit: 'point' | 'ratio' | 'percent' | 'damage';
  aggregation: SumAggregation | ProductOnePlusAggregation;
}

/** formula-book.json 中的公式定义。 */
export interface FormulaDefinition {
  id: string;
  name: string;
  symbol: string;
  tooltip: string;
  expression: FormulaExpression;
}

/** formula-book.json 顶层契约。 */
export interface FormulaBookData {
  schemaVersion: number;
  formulas: FormulaDefinition[];
  zones: FormulaZoneDefinition[];
}

/** 一条乘区贡献。 */
export interface FormulaContribution {
  id: string;
  zoneId: string;
  value: number;
  tooltip: string;
  reason?: string;
  active: boolean;
  damageTypes?: readonly FormulaDamageType[];
  source?: {
    kind: string;
    itemId?: string;
    effectPath?: string;
    buffKey?: string;
    parameterKey?: string;
    ruleId?: string;
  };
}

/** 求值所需的外部输入。 */
export type FormulaInputs = Record<string, number | undefined>;

/** 查询乘区贡献时的筛选。 */
export interface FormulaContributionFilter {
  damageType?: FormulaDamageType;
  includeInactive?: boolean;
}

/** 可追踪的乘区上下文。 */
export class FormulaContext {
  private readonly contributions = new Map<string, FormulaContribution[]>();
  private nextLocalId = 1;

  constructor(private readonly zones: ReadonlyMap<string, FormulaZoneDefinition>) {}

  /** 添加一条带 tooltip 的加成。 */
  add(
    zoneId: string,
    value: number,
    tooltip: string,
    options: Partial<Omit<FormulaContribution, 'id' | 'zoneId' | 'value' | 'tooltip'>> & {
      id?: string;
    } = {},
  ): this {
    return this.addContribution({
      id: options.id ?? `local-${this.nextLocalId++}`,
      zoneId,
      value,
      tooltip,
      reason: options.reason,
      source: options.source,
      damageTypes: options.damageTypes,
      active: options.active ?? true,
    });
  }

  /** 添加已构造完成的贡献项。 */
  addContribution(contribution: FormulaContribution): this {
    const entries = this.contributions.get(contribution.zoneId) ?? [];
    if (entries.some((entry) => entry.id === contribution.id)) {
      throw new Error(`乘区 ${contribution.zoneId} 已存在贡献项 ID：${contribution.id}`);
    }
    entries.push({ ...contribution });
    this.contributions.set(contribution.zoneId, entries);
    return this;
  }

  /** 返回指定乘区中符合筛选的贡献项。 */
  getContributions(
    zoneId: string,
    filter: FormulaContributionFilter = {},
  ): readonly FormulaContribution[] {
    return (this.contributions.get(zoneId) ?? [])
      .filter((entry) => filter.includeInactive || entry.active)
      .filter(
        (entry) =>
          !filter.damageType ||
          !entry.damageTypes ||
          entry.damageTypes.includes(filter.damageType),
      );
  }

  /** 按乘区聚合定义求值。 */
  evaluateZone(
    zoneId: string,
    filter: FormulaContributionFilter = {},
  ): { zoneId: string; value: number; contributions: readonly FormulaContribution[] } {
    const zone = this.zones.get(zoneId);
    if (!zone) throw new Error(`未知乘区：${zoneId}`);
    const contributions = this.getContributions(zoneId, filter);
    const values = contributions.map((entry) => entry.value);
    const value =
      zone.aggregation.kind === 'sum'
        ? zone.aggregation.base +
          zone.aggregation.termScale * values.reduce((sum, entry) => sum + entry, 0)
        : values.reduce((product, entry) => product * (1 + entry), 1);
    return { zoneId, value, contributions };
  }
}

/** 对多参数运算执行统一数值语义。 */
function evaluateOperation(node: OperationExpression, operands: number[]): number {
  if (operands.length === 0) throw new Error(`运算「${node.tooltip}」没有操作数`);
  switch (node.operator) {
    case 'add':
      return operands.reduce((result, value) => result + value, 0);
    case 'subtract':
      return operands.slice(1).reduce((result, value) => result - value, operands[0] ?? 0);
    case 'multiply':
      return operands.reduce((result, value) => result * value, 1);
    case 'divide':
      return operands.slice(1).reduce((result, value) => result / value, operands[0] ?? 0);
    case 'max':
      return Math.max(...operands);
    case 'min':
      return Math.min(...operands);
  }
}

/** 递归求值公式 AST。 */
function evaluateExpression(
  expression: FormulaExpression,
  book: FormulaBookData,
  context: FormulaContext,
  inputs: FormulaInputs,
  formulaStack: readonly string[],
): number {
  switch (expression.kind) {
    case 'constant':
      return expression.value;
    case 'input': {
      const value = inputs[expression.inputId];
      if (value === undefined) {
        throw new Error(`公式缺少输入 ${expression.inputId}（${expression.tooltip}）`);
      }
      return value;
    }
    case 'zone':
      return context.evaluateZone(expression.zoneId, {
        damageType: expression.damageType,
      }).value;
    case 'formula':
      return evaluateFormulaInternal(
        expression.formulaId,
        book,
        context,
        inputs,
        formulaStack,
      );
    case 'operation':
      return evaluateOperation(
        expression,
        expression.operands.map((operand) =>
          evaluateExpression(operand, book, context, inputs, formulaStack),
        ),
      );
  }
}

/** 求值一条命名公式并检测循环引用。 */
function evaluateFormulaInternal(
  formulaId: string,
  book: FormulaBookData,
  context: FormulaContext,
  inputs: FormulaInputs,
  formulaStack: readonly string[],
): number {
  if (formulaStack.includes(formulaId)) {
    throw new Error(`公式存在循环引用：${[...formulaStack, formulaId].join(' -> ')}`);
  }
  const definition = book.formulas.find((entry) => entry.id === formulaId);
  if (!definition) throw new Error(`未知公式：${formulaId}`);
  return evaluateExpression(definition.expression, book, context, inputs, [
    ...formulaStack,
    formulaId,
  ]);
}

/** 使用 formula-book 数据求值完整公式。 */
export function evaluateFormula(
  formulaId: string,
  book: FormulaBookData,
  context: FormulaContext,
  inputs: FormulaInputs,
): number {
  return evaluateFormulaInternal(formulaId, book, context, inputs, []);
}

/** 从 formula-book 构建乘区查找表与空上下文。 */
export function createFormulaContext(book: FormulaBookData): FormulaContext {
  const zones = new Map(book.zones.map((zone) => [zone.id, zone]));
  return new FormulaContext(zones);
}

/** 公式渲染模式。 */
export type FormulaRenderMode = 'symbolic' | 'expanded';

/** 公式渲染选项。 */
export interface FormulaRenderOptions {
  mode?: FormulaRenderMode;
  context?: FormulaContext;
  inputs?: FormulaInputs;
  expandFormulaReferences?: boolean;
}

/** 一条公式引用的乘区及其当前贡献说明。 */
export interface FormulaZoneExplanation {
  zoneId: string;
  value: number;
  damageType?: FormulaDamageType;
  name: string;
  tooltip: string;
  symbol: string;
  contributions: readonly FormulaContribution[];
}

/** 把浮点数转换为稳定且紧凑的公式文本。 */
function formatFormulaNumber(value: number): string {
  return Number.isInteger(value) ? value.toString() : Number(value.toPrecision(12)).toString();
}

/** 为按伤害类型筛选的乘区添加可读下标。 */
function scopedSymbol(symbol: string, damageType?: FormulaDamageType): string {
  const suffix = damageType
    ? { physical: 'phy', magical: 'mag', pure: 'pure', elemental: 'ep' }[damageType]
    : '';
  return suffix ? `${symbol}[${suffix}]` : symbol;
}

/** 输出某个乘区的通用符号聚合式。 */
function renderSymbolicZone(
  book: FormulaBookData,
  zoneId: string,
  damageType?: FormulaDamageType,
): string {
  const zone = book.zones.find((entry) => entry.id === zoneId);
  if (!zone) return zoneId;
  const symbol = scopedSymbol(zone.symbol, damageType);
  if (zone.aggregation.kind === 'product-one-plus') return `Πᵢ(1 + ${symbol}ᵢ)`;
  const { base, termScale } = zone.aggregation;
  if (base === 0 && termScale === 1) return `Σᵢ${symbol}ᵢ`;
  if (base === 1 && termScale === 1) return `(1 + Σᵢ${symbol}ᵢ)`;
  if (base === 1 && termScale === -1) return `(1 - Σᵢ${symbol}ᵢ)`;
  if (base === 1 && termScale === 0.01) return `(1 + Σᵢ${symbol}ᵢ / 100)`;
  return `(${formatFormulaNumber(base)} + ${formatFormulaNumber(termScale)} × Σᵢ${symbol}ᵢ)`;
}

/** 输出带 tooltip 的单个数值贡献项。 */
function renderContribution(value: number, tooltip: string): string {
  return `${formatFormulaNumber(Math.abs(value))}「${tooltip}」`;
}

/** 输出当前上下文中某个乘区的实际展开式。 */
function renderExpandedZone(
  book: FormulaBookData,
  zoneId: string,
  damageType: FormulaDamageType | undefined,
  context: FormulaContext,
): string {
  const zone = book.zones.find((entry) => entry.id === zoneId);
  if (!zone) return zoneId;
  const entries = context.getContributions(zoneId, { damageType });
  if (zone.aggregation.kind === 'product-one-plus') {
    if (entries.length === 0) return '1';
    return `(${entries.map((entry) => `(1 + ${renderContribution(entry.value, entry.tooltip)})`).join(' × ')})`;
  }

  const terms: string[] = [];
  if (zone.aggregation.base !== 0 || entries.length === 0) {
    terms.push(formatFormulaNumber(zone.aggregation.base));
  }
  for (const entry of entries) {
    const value = zone.aggregation.termScale * entry.value;
    const rendered = renderContribution(value, entry.tooltip);
    if (terms.length === 0) terms.push(value < 0 ? `-${rendered}` : rendered);
    else terms.push(`${value < 0 ? '-' : '+'} ${rendered}`);
  }
  return terms.length > 1 ? `(${terms.join(' ')})` : (terms[0] ?? '0');
}

/** 按运算符输出已经递归渲染完成的子表达式。 */
function renderOperation(node: OperationExpression, operands: string[]): string {
  if (node.operator === 'max' || node.operator === 'min') {
    return `${node.operator}(${operands.join(', ')})`;
  }
  const operator = {
    add: '+',
    subtract: '-',
    multiply: '×',
    divide: '÷',
  }[node.operator];
  return `(${operands.join(` ${operator} `)})`;
}

/** 递归输出一棵公式 AST。 */
function renderExpression(
  expression: FormulaExpression,
  book: FormulaBookData,
  options: Required<Pick<FormulaRenderOptions, 'mode' | 'expandFormulaReferences'>> &
    FormulaRenderOptions,
  formulaStack: readonly string[],
): string {
  switch (expression.kind) {
    case 'constant':
      return formatFormulaNumber(expression.value);
    case 'input': {
      const value = options.inputs?.[expression.inputId];
      return options.mode === 'expanded' && value !== undefined
        ? `${formatFormulaNumber(value)}「${expression.tooltip}」`
        : expression.symbol;
    }
    case 'zone':
      return options.mode === 'expanded' && options.context
        ? renderExpandedZone(book, expression.zoneId, expression.damageType, options.context)
        : renderSymbolicZone(book, expression.zoneId, expression.damageType);
    case 'formula': {
      const referenced = book.formulas.find((entry) => entry.id === expression.formulaId);
      if (!referenced) return expression.formulaId;
      if (!options.expandFormulaReferences) return referenced.symbol;
      if (formulaStack.includes(expression.formulaId)) {
        throw new Error(
          `公式存在循环引用：${[...formulaStack, expression.formulaId].join(' -> ')}`,
        );
      }
      return renderExpression(referenced.expression, book, options, [
        ...formulaStack,
        expression.formulaId,
      ]);
    }
    case 'operation':
      return renderOperation(
        expression,
        expression.operands.map((operand) =>
          renderExpression(operand, book, options, formulaStack),
        ),
      );
  }
}

/** 输出带左值名称的完整公式预览。 */
export function renderFormula(
  formulaId: string,
  book: FormulaBookData,
  options: FormulaRenderOptions = {},
): string {
  const definition = book.formulas.find((entry) => entry.id === formulaId);
  if (!definition) throw new Error(`未知公式：${formulaId}`);
  const normalizedOptions = {
    ...options,
    mode: options.mode ?? 'symbolic',
    expandFormulaReferences: options.expandFormulaReferences ?? true,
  };
  return `${definition.symbol} = ${renderExpression(definition.expression, book, normalizedOptions, [formulaId])}`;
}

/** 递归收集公式实际引用到的乘区。 */
function collectZoneReferences(
  expression: FormulaExpression,
  book: FormulaBookData,
  target: Map<string, { zoneId: string; damageType?: FormulaDamageType }>,
  formulaStack: readonly string[],
): void {
  if (expression.kind === 'zone') {
    target.set(`${expression.zoneId}:${expression.damageType ?? 'all'}`, {
      zoneId: expression.zoneId,
      damageType: expression.damageType,
    });
    return;
  }
  if (expression.kind === 'formula') {
    if (formulaStack.includes(expression.formulaId)) return;
    const referenced = book.formulas.find((entry) => entry.id === expression.formulaId);
    if (!referenced) return;
    collectZoneReferences(referenced.expression, book, target, [
      ...formulaStack,
      expression.formulaId,
    ]);
    return;
  }
  if (expression.kind === 'operation') {
    expression.operands.forEach((operand) =>
      collectZoneReferences(operand, book, target, formulaStack),
    );
  }
}

/** 返回一条公式使用的所有乘区、当前数值与来源贡献。 */
export function explainFormula(
  formulaId: string,
  book: FormulaBookData,
  context: FormulaContext,
): readonly FormulaZoneExplanation[] {
  const definition = book.formulas.find((entry) => entry.id === formulaId);
  if (!definition) throw new Error(`未知公式：${formulaId}`);
  const references = new Map<string, { zoneId: string; damageType?: FormulaDamageType }>();
  collectZoneReferences(definition.expression, book, references, [formulaId]);
  return [...references.values()].map(({ zoneId, damageType }) => {
    const zone = book.zones.find((entry) => entry.id === zoneId);
    const evaluated = context.evaluateZone(zoneId, { damageType });
    return {
      ...evaluated,
      damageType,
      name: zone?.name ?? zoneId,
      tooltip: zone?.tooltip ?? '',
      symbol: zone?.symbol ?? zoneId,
    };
  });
}

/** 单独解释一个乘区（用于攻速倍率等非完整公式属性）。 */
export function explainZone(
  zoneId: string,
  book: FormulaBookData,
  context: FormulaContext,
): FormulaZoneExplanation {
  const zone = book.zones.find((entry) => entry.id === zoneId);
  if (!zone) throw new Error(`未知乘区：${zoneId}`);
  const evaluated = context.evaluateZone(zoneId);
  return {
    ...evaluated,
    name: zone.name,
    tooltip: zone.tooltip,
    symbol: zone.symbol,
  };
}

/** 拉取并缓存 formula-book.json。 */
let formulaBookPromise: Promise<FormulaBookData> | null = null;

/** 加载文档站生成的公式簿。 */
export function loadFormulaBook(): Promise<FormulaBookData> {
  if (!formulaBookPromise) {
    formulaBookPromise = fetch('/data/formula-book.json').then(async (response) => {
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return (await response.json()) as FormulaBookData;
    });
  }
  return formulaBookPromise;
}
