/**
 * 使用已登记的根 Zod Schema 校验全部已覆盖 GameData。
 */

import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";
import type { z } from "zod";

import { BuffTemplateDataSchema } from "../src/schemas/buff-template-data/buff-template-data.schemas.js";
import { RoguelikeTopicTableSchema } from "../src/schemas/roguelike-topic-table/roguelike-topic-table.schemas.js";

/** 全量校验时使用的已覆盖数据表登记。 */
interface ValidationRegistration {
  label: string;
  relativePath: string;
  schema: z.ZodType;
}

/** 当前包与 monorepo 的稳定路径。 */
const CURRENT_FILE = fileURLToPath(import.meta.url);
const PACKAGE_ROOT = path.resolve(path.dirname(CURRENT_FILE), "..");
const DEFAULT_DATA_ROOT = path.resolve(PACKAGE_ROOT, "../..", "ArknightsGameData");
const TABLES: ValidationRegistration[] = [
  {
    label: "buff_template_data",
    relativePath: path.join(
      "zh_CN",
      "gamedata",
      "battle",
      "buff_template_data.json",
    ),
    schema: BuffTemplateDataSchema,
  },
  {
    label: "roguelike_topic_table",
    relativePath: path.join(
      "zh_CN",
      "gamedata",
      "excel",
      "roguelike_topic_table.json",
    ),
    schema: RoguelikeTopicTableSchema,
  },
];

/** 从命令行参数或环境变量解析 ArknightsGameData 根目录。 */
function resolveDataRoot(argv: string[]): string {
  let dataRoot = process.env.ARKNIGHTS_GAME_DATA_PATH ?? DEFAULT_DATA_ROOT;
  for (let index = 0; index < argv.length; index += 1) {
    if (argv[index] !== "--data") {
      throw new Error(`无法识别的参数：${argv[index]}`);
    }
    const candidate = argv[index + 1];
    if (!candidate) throw new Error("--data 后必须提供数据目录路径。");
    dataRoot = candidate;
    index += 1;
  }
  return path.resolve(dataRoot);
}

/** 将 Zod issue 路径格式化为易复制的 JSON Pointer。 */
function formatIssuePath(issue: z.core.$ZodIssue): string {
  if (issue.path.length === 0) return "/";
  return `/${issue.path
    .map((segment) =>
      String(segment).replaceAll("~", "~0").replaceAll("/", "~1"),
    )
    .join("/")}`;
}

/** 执行单张数据表的文件读取、JSON 解析和全量 Schema 校验。 */
function validateTable(
  registration: ValidationRegistration,
  dataRoot: string,
): boolean {
  const tablePath = path.resolve(dataRoot, registration.relativePath);
  if (!fs.existsSync(tablePath)) throw new Error(`找不到数据表：${tablePath}`);
  const startedAt = performance.now();
  const rawData = JSON.parse(fs.readFileSync(tablePath, "utf8")) as unknown;
  const result = registration.schema.safeParse(rawData);
  const elapsed = Math.round(performance.now() - startedAt);

  if (result.success) {
    const recordCount =
      typeof result.data === "object" && result.data !== null
        ? Object.keys(result.data).length
        : 1;
    console.log(
      `校验通过：${registration.label} 共 ${recordCount} 个根记录，耗时 ${elapsed} ms。`,
    );
    return true;
  }

  console.error(
    `校验失败：${registration.label} 发现 ${result.error.issues.length} 个问题。`,
  );
  for (const issue of result.error.issues.slice(0, 100)) {
    console.error(`- ${formatIssuePath(issue)} [${issue.code}] ${issue.message}`);
  }
  if (result.error.issues.length > 100) {
    console.error(`- 其余 ${result.error.issues.length - 100} 个问题已省略`);
  }
  return false;
}

/** 执行全部已登记数据表的全量 Schema 校验。 */
function main(): void {
  const dataRoot = resolveDataRoot(process.argv.slice(2));
  const succeeded = TABLES.map((registration) =>
    validateTable(registration, dataRoot),
  ).every(Boolean);
  if (!succeeded) process.exitCode = 1;
}

try {
  main();
} catch (error: unknown) {
  const message = error instanceof Error ? error.stack ?? error.message : String(error);
  console.error(message);
  process.exitCode = 1;
}
