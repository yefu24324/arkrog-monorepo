import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

import type { KuzuValue } from "kuzu";

import { assertUsableGraph } from "./graph-workspace.js";
import { resolveRepositoryPaths, toRepositoryPath } from "./paths.js";
import { runCypher } from "./query.js";

/** 通用图关系导出支持的格式。 */
export type GraphExportFormat = "json" | "csv" | "markdown";

/** 通用关系导出参数；查询由 AI 根据用户问题生成。 */
export interface GraphExportOptions {
  statement: string;
  format: GraphExportFormat;
  outputPath: string;
  databaseOverride?: string;
}

/** Kuzu 值转成可序列化文本。 */
function text(value: KuzuValue | undefined): string {
  if (value === null || value === undefined) return "";
  return typeof value === "bigint" ? value.toString() : String(value);
}

/** CSV 字段转义。 */
function csvCell(value: KuzuValue | undefined): string {
  const valueText = text(value);
  return /[",\r\n]/.test(valueText) ? `"${valueText.replaceAll('"', '""')}"` : valueText;
}

/** Markdown 单元格转义。 */
function markdownCell(value: KuzuValue | undefined): string {
  return text(value).replaceAll("|", "\\|").replaceAll("\r", " ").replaceAll("\n", "<br>");
}

/** 按用户指定格式序列化查询行，不混入 Mechanics 结果。 */
function serializeRows(
  rows: Record<string, KuzuValue>[],
  format: GraphExportFormat,
  metadata: Record<string, string>,
): string {
  const columns = [...new Set(rows.flatMap((row) => Object.keys(row)))];
  if (format === "json") {
    return `${JSON.stringify({ metadata, rows }, (_key, value) => typeof value === "bigint" ? value.toString() : value, 2)}\n`;
  }
  if (format === "csv") {
    return `${[
      columns.join(","),
      ...rows.map((row) => columns.map((column) => csvCell(row[column])).join(",")),
    ].join("\n")}\n`;
  }
  const metadataLines = Object.entries(metadata).map(([key, value]) => `- ${key}: ${value}`);
  if (columns.length === 0) return `${metadataLines.join("\n")}\n\n无匹配关系。\n`;
  return `${metadataLines.join("\n")}\n\n| ${columns.join(" | ")} |\n| ${columns.map(() => "---").join(" | ")} |\n${rows.map((row) => `| ${columns.map((column) => markdownCell(row[column])).join(" | ")} |`).join("\n")}\n`;
}

/** 从可用正式图谱执行只读查询并导出任意对象关系；stale 状态由命令边界提示。 */
export async function exportGraphRelations(options: GraphExportOptions): Promise<{
  outputPath: string;
  rowCount: number;
  buildId: string;
}> {
  const paths = resolveRepositoryPaths(options.databaseOverride);
  const manifest = await assertUsableGraph(options.databaseOverride);
  const outputPath = path.resolve(paths.root, options.outputPath);
  const relative = path.relative(paths.root, outputPath);
  if (!relative || relative.startsWith("..") || path.isAbsolute(relative)) {
    throw new Error(`导出路径必须位于仓库内且不能是仓库根目录：${outputPath}`);
  }
  const rows = await runCypher(options.statement, options.databaseOverride);
  const metadata = {
    source: "graph",
    buildId: manifest.buildId,
    exportedAt: new Date().toISOString(),
    statement: options.statement,
  };
  await mkdir(path.dirname(outputPath), { recursive: true });
  await writeFile(outputPath, serializeRows(rows, options.format, metadata), "utf8");
  return {
    outputPath: toRepositoryPath(paths.root, outputPath),
    rowCount: rows.length,
    buildId: manifest.buildId,
  };
}
