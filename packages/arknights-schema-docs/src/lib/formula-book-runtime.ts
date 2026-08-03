/** 公式簿页面专用的 char_final_atk 序列化 AST。 */

/** 当前 FormulaBook AST 支持的运算符字符串。 */
export type FormulaAstOperator =
  | 'add'
  | 'subtract'
  | 'multiply'
  | 'divide'
  | 'max'
  | 'min'
  | 'sum'
  | 'union'
  | 'product'
  | 'product-one-plus'
  | 'percent-plus';

/** 生成 JSON 中的固定数值节点。 */
export interface FormulaAstItemNode {
  kind: 'item';
  tooltip: string;
  value: number;
}

/** 生成 JSON 中的普通运算节点。 */
export interface FormulaAstOperationNode {
  kind: 'operation';
  operands: FormulaAstNode[];
  operator: FormulaAstOperator;
}

/** 带 FormulaZoneId 源码注释的可写 zone 节点。 */
export interface FormulaAstZoneNode {
  comment: string;
  kind: 'zone';
  operands: FormulaAstNode[];
  operator: FormulaAstOperator;
  zoneId: string;
}

/** 带 FormulaZoneId 源码注释的命名公式节点。 */
export interface FormulaAstFormulaNode {
  comment: string;
  expression: FormulaAstNode;
  id: string;
  kind: 'formula';
}

/** 页面递归渲染的全部 AST 节点。 */
export type FormulaAstNode =
  | FormulaAstItemNode
  | FormulaAstOperationNode
  | FormulaAstZoneNode
  | FormulaAstFormulaNode;

/** formula-book.json 的单公式契约。 */
export interface FormulaBookPageData {
  /** 唯一展示的 char_final_atk 根节点。 */
  formula: FormulaAstFormulaNode;
  /** 全部可写乘区的 FormulaZoneId 中文源码注释。 */
  writableZoneComments: Record<string, string>;
  /** 生成数据对应的源码路径。 */
  source: string;
  /** 当前单公式 AST 格式版本。 */
  schemaVersion: 4;
}

/** 加载生成阶段从 FormulaBook 源码导出的唯一公式。 */
export async function loadFormulaBookPage(): Promise<FormulaBookPageData> {
  const response = await fetch('/data/formula-book.json');
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return (await response.json()) as FormulaBookPageData;
}

/** 从唯一公式递归收集 FormulaZoneId 注释，供藏品乘区表复用。 */
export function collectFormulaZoneComments(
  data: FormulaBookPageData,
): Readonly<Record<string, string>> {
  // 索引覆盖不在 char_final_atk AST 中的防御力、生命等可写乘区。
  const comments: Record<string, string> = { ...data.writableZoneComments };
  function visit(node: FormulaAstNode): void {
    if (node.kind === 'item') return;
    if (node.kind === 'formula') {
      comments[node.id] = node.comment;
      visit(node.expression);
      return;
    }
    if (node.kind === 'zone') {
      comments[node.zoneId] = node.comment;
    }
    node.operands.forEach(visit);
  }
  visit(data.formula);
  return comments;
}
