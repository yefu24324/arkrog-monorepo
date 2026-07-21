/**
 * 验证分析器能穿过 record、对象和 `.describe()` 浅克隆定位具体 Schema。
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { z } from "zod";
import { describe, expect, it } from "vitest";

import * as schemaExports from "../src/schemas/index.js";
import { RoguelikeTopicTableSchema } from "../src/schemas/roguelike-topic-table/roguelike-topic-table.schemas.js";
import {
  createSchemaNameIndex,
  isSchemaNode,
  locateSchemaIssues,
  type SchemaIssue,
} from "../tools/lib/schema-diff.js";

/** 测试用的记录元素 Schema。 */
const EntrySchema = z.strictObject({
  count: z.number(),
});

/** 测试用根 Schema，字段描述会创建与导出 Schema 共享定义的浅克隆。 */
const RootSchema = z.strictObject({
  entries: z
    .record(z.string(), EntrySchema)
    .describe("按动态 ID 保存的测试记录。"),
});

/** 真实数据路径，用于验证报告能定位项目中的具体 ConfigSchema。 */
const CURRENT_FILE = fileURLToPath(import.meta.url);
const REAL_TABLE_PATH = path.resolve(
  path.dirname(CURRENT_FILE),
  "../../..",
  "ArknightsGameData",
  "zh_CN",
  "gamedata",
  "excel",
  "roguelike_topic_table.json",
);

describe("schema diff locator", () => {
  it("把嵌套字段类型错误定位到 EntrySchema", () => {
    const result = RootSchema.safeParse({ entries: { first: { count: "1" } } });
    expect(result.success).toBe(false);
    if (result.success || !isSchemaNode(RootSchema)) return;

    const issues: SchemaIssue[] = result.error.issues.map((issue) => ({
      code: issue.code,
      message: issue.message,
      path: [...issue.path],
    }));
    const nameIndex = createSchemaNameIndex({ EntrySchema, RootSchema });
    const located = locateSchemaIssues(
      RootSchema,
      "RootSchema",
      issues,
      nameIndex,
    );

    expect(located[0]?.schemaNames).toEqual(["EntrySchema"]);
    expect(located[0]?.typeNames).toEqual(["Entry"]);
  });

  it("把未建模字段定位到负责的严格对象 Schema", () => {
    const result = RootSchema.safeParse({
      entries: { first: { count: 1, extra: true } },
    });
    expect(result.success).toBe(false);
    if (result.success || !isSchemaNode(RootSchema)) return;

    const issues: SchemaIssue[] = result.error.issues.map((issue) => ({
      code: issue.code,
      keys: "keys" in issue ? issue.keys : undefined,
      message: issue.message,
      path: [...issue.path],
    }));
    const located = locateSchemaIssues(
      RootSchema,
      "RootSchema",
      issues,
      createSchemaNameIndex({ EntrySchema, RootSchema }),
    );

    expect(located[0]?.schemaNames).toEqual(["EntrySchema"]);
    expect(located[0]?.issue.keys).toEqual(["extra"]);
  });

  it("把真实主题配置的字段错误定位到 ConfigSchema", () => {
    const data = JSON.parse(fs.readFileSync(REAL_TABLE_PATH, "utf8")) as {
      topics: Record<string, { config: { loadCharCardPlugin: unknown } }>;
    };
    data.topics.rogue_1.config.loadCharCardPlugin = "invalid";
    const result = RoguelikeTopicTableSchema.safeParse(data);
    expect(result.success).toBe(false);
    if (result.success || !isSchemaNode(RoguelikeTopicTableSchema)) return;

    const located = locateSchemaIssues(
      RoguelikeTopicTableSchema,
      "RoguelikeTopicTableSchema",
      result.error.issues.map((issue) => ({
        code: issue.code,
        message: issue.message,
        path: [...issue.path],
      })),
      createSchemaNameIndex(schemaExports),
    );

    expect(located[0]?.schemaNames).toEqual(["ConfigSchema"]);
    expect(located[0]?.typeNames).toEqual(["Config"]);
  });
});
