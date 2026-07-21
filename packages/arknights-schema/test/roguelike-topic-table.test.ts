/**
 * 对真实数据执行全量运行时校验，并确认根对象拒绝未知字段。
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

import { RoguelikeTopicTableSchema } from "../src/schemas/roguelike-topic-table/roguelike-topic-table.schemas.js";

/** 测试所使用的真实游戏数据表路径。 */
const CURRENT_FILE = fileURLToPath(import.meta.url);
const TABLE_PATH = path.resolve(
  path.dirname(CURRENT_FILE),
  "../../..",
  "ArknightsGameData",
  "zh_CN",
  "gamedata",
  "excel",
  "roguelike_topic_table.json",
);

describe("RoguelikeTopicTableSchema", () => {
  it("校验当前完整 roguelike_topic_table 数据", () => {
    const data = JSON.parse(fs.readFileSync(TABLE_PATH, "utf8")) as unknown;
    const result = RoguelikeTopicTableSchema.safeParse(data);

    expect(result.success, result.success ? undefined : result.error.message).toBe(true);
  });

  it("拒绝游戏更新中尚未建模的根字段", () => {
    const data = JSON.parse(fs.readFileSync(TABLE_PATH, "utf8")) as Record<
      string,
      unknown
    >;
    const result = RoguelikeTopicTableSchema.safeParse({
      ...data,
      unexpectedUpdateField: true,
    });

    expect(result.success).toBe(false);
  });
});
