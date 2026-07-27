/**
 * 文档站公式簿 JSON 的加载入口。
 * 公式 AST、乘区和求值语义全部直接复用 graph 包，本文件只描述生成产物附加的展示字段。
 */

import type {
  FormulaDefinition,
  FormulaDamageType,
  FormulaZoneDefinition,
} from '@arkrog/arknights-knowledge-graph/formula';

/** 一条公式对乘区的文档展示摘要。 */
export interface FormulaZoneUsage {
  damageType: FormulaDamageType | null;
  name: string;
  tooltip: string;
  zoneId: FormulaZoneDefinition['id'];
}

/** graph 公式定义在静态 JSON 中附带的预渲染文本。 */
export interface FormulaBookDefinition extends FormulaDefinition {
  compactFormula: string;
  fullFormula: string;
  zones: FormulaZoneUsage[];
}

/** formula-book.json 顶层契约。 */
export interface FormulaBookData {
  schemaVersion: number;
  source: string;
  formulas: FormulaBookDefinition[];
  zones: FormulaZoneDefinition[];
}

/** 复用同一个请求，避免公式浏览器和战斗预览重复拉取静态 JSON。 */
let formulaBookPromise: Promise<FormulaBookData> | null = null;

/** 加载文档生成阶段产出的公式簿。 */
export function loadFormulaBook(): Promise<FormulaBookData> {
  if (!formulaBookPromise) {
    formulaBookPromise = fetch('/data/formula-book.json').then(async (response) => {
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return (await response.json()) as FormulaBookData;
    });
  }
  return formulaBookPromise;
}
