/**
 * 使用现有 Zod Schema 对指定真实 JSON 做只读差异分析。
 *
 * 与 Bootstrap 推断器不同，本工具不会生成文件；它把每条 Zod issue 定位到负责该
 * JSON 路径的具名 Schema、显式类型和源码文件，供大模型执行局部维护。
 */

import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";
import type { z } from "zod";

import * as schemaExports from "../src/schemas/index.js";
import { BuffTemplateDataSchema } from "../src/schemas/buff-template-data/buff-template-data.schemas.js";
import { RoguelikeTopicTableSchema } from "../src/schemas/roguelike-topic-table/roguelike-topic-table.schemas.js";
import {
  createSchemaNameIndex,
  isSchemaNode,
  locateSchemaIssues,
  type LocatedSchemaIssue,
  type SchemaIssue,
} from "./lib/schema-diff.js";

/** 已覆盖数据表的分析注册信息。 */
interface TableRegistration {
  relativePath: string;
  rootSchemaName: string;
  schema: z.ZodType;
}

/** 命令行分析选项。 */
interface CliOptions {
  all: boolean;
  dataRoot: string;
  files: string[];
  json: boolean;
}

/** Schema 与对应显式类型的源码位置。 */
interface SourceLocation {
  schemaSource: string | null;
  typeSource: string | null;
}

/** 单条可序列化的差异记录。 */
interface MismatchReport {
  actual: string;
  code: string;
  keys: string[];
  message: string;
  pointer: string;
  schemaNames: string[];
  schemaSources: string[];
  typeNames: string[];
  typeSources: string[];
}

/** 单个 JSON 文件的分析报告。 */
interface TableReport {
  file: string;
  issueCount: number;
  mismatches: MismatchReport[];
  status: "consistent" | "schema-mismatch";
}

/** 当前包与默认数据仓库路径。 */
const CURRENT_FILE = fileURLToPath(import.meta.url);
const PACKAGE_ROOT = path.resolve(path.dirname(CURRENT_FILE), "..");
const MONOREPO_ROOT = path.resolve(PACKAGE_ROOT, "../..");
const DEFAULT_DATA_ROOT = path.resolve(MONOREPO_ROOT, "ArknightsGameData");
const SCHEMAS_ROOT = path.resolve(PACKAGE_ROOT, "src", "schemas");
const TYPES_ROOT = path.resolve(PACKAGE_ROOT, "src", "types");

/** 所有已经完成初始建模的数据表；未来新增表时在此登记。 */
const TABLES: TableRegistration[] = [
  {
    relativePath: "zh_CN/gamedata/battle/buff_template_data.json",
    rootSchemaName: "BuffTemplateDataSchema",
    schema: BuffTemplateDataSchema,
  },
  {
    relativePath: "zh_CN/gamedata/excel/roguelike_topic_table.json",
    rootSchemaName: "RoguelikeTopicTableSchema",
    schema: RoguelikeTopicTableSchema,
  },
];

/** 将路径统一为注册表使用的正斜杠形式。 */
function toPosixPath(value: string): string {
  return value.replaceAll(path.sep, "/");
}

/** 解析 --file、--all、--json、--data 与环境变量。 */
function parseCliOptions(argv: string[]): CliOptions {
  const options: CliOptions = {
    all: false,
    dataRoot: path.resolve(
      process.env.ARKNIGHTS_GAME_DATA_PATH ?? DEFAULT_DATA_ROOT,
    ),
    files: [],
    json: false,
  };

  for (let index = 0; index < argv.length; index += 1) {
    const argument = argv[index];
    if (argument === "--") continue;
    if (argument === "--all") {
      options.all = true;
      continue;
    }
    if (argument === "--json") {
      options.json = true;
      continue;
    }
    if (argument === "--file") {
      const candidate = argv[index + 1];
      if (!candidate) throw new Error("--file 后必须提供 JSON 文件路径。");
      options.files.push(candidate);
      index += 1;
      continue;
    }
    if (argument === "--data") {
      const candidate = argv[index + 1];
      if (!candidate) throw new Error("--data 后必须提供 ArknightsGameData 路径。");
      options.dataRoot = path.resolve(candidate);
      index += 1;
      continue;
    }
    throw new Error(`无法识别的参数：${argument}`);
  }

  if (!options.all && options.files.length === 0) {
    throw new Error("必须提供至少一个 --file <JSON路径>，或使用 --all。 ");
  }
  return options;
}

/** 递归列出源码目录中的全部文件。 */
function listFilesRecursively(directory: string): string[] {
  const result: string[] = [];
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const absolutePath = path.resolve(directory, entry.name);
    if (entry.isDirectory()) result.push(...listFilesRecursively(absolutePath));
    else if (entry.isFile()) result.push(absolutePath);
  }
  return result;
}

/** 建立 Schema 导出名到 Schema/Type 源码位置的索引。 */
function createSourceLocationIndex(): Map<string, SourceLocation> {
  const result = new Map<string, SourceLocation>();
  for (const schemaFile of listFilesRecursively(SCHEMAS_ROOT).filter((filePath) =>
    filePath.endsWith(".schemas.ts"),
  )) {
    const source = fs.readFileSync(schemaFile, "utf8");
    const matches = source.matchAll(
      /export const\s+([A-Za-z0-9_$]+Schema)(?:\s*:[^=]+)?\s*=/g,
    );
    for (const match of matches) {
      const relativeSchemaPath = path.relative(SCHEMAS_ROOT, schemaFile);
      const relativeTypePath = relativeSchemaPath.replace(/\.schemas\.ts$/, ".types.ts");
      const typeFile = path.resolve(TYPES_ROOT, relativeTypePath);
      result.set(match[1], {
        schemaSource: toPosixPath(path.relative(MONOREPO_ROOT, schemaFile)),
        typeSource: fs.existsSync(typeFile)
          ? toPosixPath(path.relative(MONOREPO_ROOT, typeFile))
          : null,
      });
    }
  }
  return result;
}

/** 将 issue 路径格式化成 RFC 6901 风格 JSON Pointer。 */
function formatPointer(issue: SchemaIssue): string {
  if (issue.path.length === 0) return "/";
  return `/${issue.path
    .map((segment) =>
      String(segment).replaceAll("~", "~0").replaceAll("/", "~1"),
    )
    .join("/")}`;
}

/** 读取 JSON Pointer 对应的真实值。 */
function readValueAtPath(root: unknown, issuePath: PropertyKey[]): unknown {
  let current = root;
  for (const segment of issuePath) {
    if (Array.isArray(current)) {
      const index = typeof segment === "number" ? segment : Number(segment);
      current = current[index];
      continue;
    }
    if (typeof current === "object" && current !== null) {
      current = (current as Record<PropertyKey, unknown>)[segment];
      continue;
    }
    return undefined;
  }
  return current;
}

/** 将真实值压缩成不会淹没报告的证据摘要。 */
function summarizeValue(value: unknown): string {
  if (value === undefined) return "undefined（字段缺失）";
  if (value === null) return "null";
  if (Array.isArray(value)) return `array(length=${value.length})`;
  if (typeof value === "object") {
    const keys = Object.keys(value as Record<string, unknown>);
    const suffix = keys.length > 8 ? ", …" : "";
    return `object(keys=[${keys.slice(0, 8).join(", ")}${suffix}])`;
  }
  const serialized = JSON.stringify(value);
  return serialized.length > 160 ? `${serialized.slice(0, 157)}…` : serialized;
}

/** 将用户输入路径解析成已覆盖表注册项。 */
function resolveRegistration(
  input: string,
  dataRoot: string,
): TableRegistration {
  const directPath = path.resolve(input);
  const absolutePath = fs.existsSync(directPath)
    ? directPath
    : path.resolve(dataRoot, input.replace(/^ArknightsGameData[\\/]/, ""));
  const relativePath = toPosixPath(path.relative(dataRoot, absolutePath));
  const byPath = TABLES.find((table) => table.relativePath === relativePath);
  const byUniqueName = TABLES.filter(
    (table) => path.basename(table.relativePath) === path.basename(input),
  );
  const registration = byPath ?? (byUniqueName.length === 1 ? byUniqueName[0] : null);
  if (!registration) {
    throw new Error(
      `目标 JSON 尚未登记现有 Schema：${input}。请先用分析技能做原始结构报告，或执行首次 Bootstrap。`,
    );
  }
  return registration;
}

/** 把定位结果、源码位置和真实值合并成单条差异报告。 */
function createMismatchReport(
  located: LocatedSchemaIssue,
  data: unknown,
  sourceLocations: ReadonlyMap<string, SourceLocation>,
): MismatchReport {
  const locations = located.schemaNames
    .map((name) => sourceLocations.get(name))
    .filter((value): value is SourceLocation => value !== undefined);
  return {
    actual: summarizeValue(readValueAtPath(data, located.issue.path)),
    code: located.issue.code,
    keys: located.issue.keys ?? [],
    message: located.issue.message,
    pointer: formatPointer(located.issue),
    schemaNames: located.schemaNames,
    schemaSources: [...new Set(locations.flatMap((value) => value.schemaSource ?? []))],
    typeNames: located.typeNames,
    typeSources: [...new Set(locations.flatMap((value) => value.typeSource ?? []))],
  };
}

/** 分析一个已登记 JSON 表与当前根 Schema 的不一致。 */
function analyzeTable(
  registration: TableRegistration,
  dataRoot: string,
  sourceLocations: ReadonlyMap<string, SourceLocation>,
  schemaNameIndex: WeakMap<object, string[]>,
): TableReport {
  const filePath = path.resolve(dataRoot, registration.relativePath);
  if (!fs.existsSync(filePath)) throw new Error(`找不到 JSON 文件：${filePath}`);
  const data = JSON.parse(fs.readFileSync(filePath, "utf8")) as unknown;
  const result = registration.schema.safeParse(data);
  if (result.success) {
    return {
      file: registration.relativePath,
      issueCount: 0,
      mismatches: [],
      status: "consistent",
    };
  }
  if (!isSchemaNode(registration.schema)) {
    throw new Error(`${registration.rootSchemaName} 不是可分析的 Zod 4 Schema。`);
  }

  const issues: SchemaIssue[] = result.error.issues.map((issue) => {
    const issueWithKeys = issue as typeof issue & { keys?: string[] };
    return {
      code: issue.code,
      keys: issueWithKeys.keys,
      message: issue.message,
      path: [...issue.path],
    };
  });
  const locatedIssues = locateSchemaIssues(
    registration.schema,
    registration.rootSchemaName,
    issues,
    schemaNameIndex,
  );
  return {
    file: registration.relativePath,
    issueCount: locatedIssues.length,
    mismatches: locatedIssues.map((located) =>
      createMismatchReport(located, data, sourceLocations),
    ),
    status: "schema-mismatch",
  };
}

/** 输出适合大模型局部维护的文本报告。 */
function printTextReport(reports: TableReport[]): void {
  const changedFiles = reports.filter((report) => report.status === "schema-mismatch");
  console.log("类型发生变化的 JSON 文件：");
  if (changedFiles.length === 0) console.log("- 无");
  for (const report of changedFiles) {
    console.log(`- ${report.file}（${report.issueCount} 个不一致）`);
  }

  for (const report of reports) {
    console.log(`\n## ${report.file}`);
    if (report.status === "consistent") {
      console.log("当前真实数据与现有 Zod Schema 一致。");
      continue;
    }
    for (const [index, mismatch] of report.mismatches.entries()) {
      console.log(`\n### ${index + 1}. ${mismatch.pointer}`);
      console.log(`- 变化：${mismatch.code} — ${mismatch.message}`);
      if (mismatch.keys.length > 0) {
        console.log(`- 未建模字段：${mismatch.keys.join(", ")}`);
      }
      console.log(`- 真实值：${mismatch.actual}`);
      console.log(`- Zod 类型：${mismatch.schemaNames.join(", ")}`);
      console.log(`- TypeScript 类型：${mismatch.typeNames.join(", ")}`);
      console.log(`- Schema 源码：${mismatch.schemaSources.join(", ")}`);
      console.log(`- Type 源码：${mismatch.typeSources.join(", ")}`);
    }
  }
}

/** 运行指定文件或全部已覆盖文件的局部维护分析。 */
function main(): void {
  const options = parseCliOptions(process.argv.slice(2));
  const registrations = options.all
    ? TABLES
    : options.files.map((file) => resolveRegistration(file, options.dataRoot));
  const uniqueRegistrations = [...new Set(registrations)];
  const sourceLocations = createSourceLocationIndex();
  const schemaNameIndex = createSchemaNameIndex(schemaExports);
  const reports = uniqueRegistrations.map((registration) =>
    analyzeTable(
      registration,
      options.dataRoot,
      sourceLocations,
      schemaNameIndex,
    ),
  );

  if (options.json) console.log(JSON.stringify(reports, null, 2));
  else printTextReport(reports);
  if (reports.some((report) => report.status === "schema-mismatch")) {
    process.exitCode = 1;
  }
}

try {
  main();
} catch (error: unknown) {
  const message = error instanceof Error ? error.stack ?? error.message : String(error);
  console.error(message);
  process.exitCode = 1;
}
