import { readFile } from "node:fs/promises";
import path from "node:path";

import { describe, expect, it } from "vitest";

import {
  normalizeTopicSystems,
  stripGameDataMarkup,
  TOPIC_MODULE_KEYS,
} from "../src/tools/topic-systems.js";

/** 定位 monorepo 内当前中文 GameData，验证真实主题模块覆盖。 */
const TOPIC_TABLE_PATH = path.resolve(
  import.meta.dirname,
  "../../../ArknightsGameData/zh_CN/gamedata/excel/roguelike_topic_table.json",
);

describe("主题特殊系统通用提取器", () => {
  it("递归保存对象、标量、buff 与引用，并保持摘要一致", () => {
    const data = {
      topics: { rogue_fixture: { id: "rogue_fixture", name: "测试主题" } },
      modules: {
        rogue_fixture: {
          moduleTypes: ["FUTURE_SYSTEM"],
          futureSystem: {
            entries: {
              sample: {
                id: "sample",
                name: "测试对象",
                functionDesc: "所有敌人攻击力+10%",
                buff: {
                  key: "global_buff_normal",
                  blackboard: [
                    { key: "key", value: 0, valueStr: "fixture_template" },
                    { key: "atk", value: 0.1, valueStr: null },
                  ],
                },
                itemId: "fixture_item",
              },
            },
          },
        },
      },
    };

    const result = normalizeTopicSystems(data);
    expect(result.systems).toEqual([
      expect.objectContaining({
        moduleType: "FUTURE_SYSTEM",
        moduleKey: "futureSystem",
        status: "unknown",
      }),
    ]);
    expect(result.systems[0]?.sourceDigest).toBe(result.systems[0]?.reconstructedDigest);
    expect(result.objects.some((object) => object.displayName === "测试对象")).toBe(true);
    expect(result.fields.some((field) => field.name === "itemId" && field.stringValue === "fixture_item")).toBe(true);
    expect(result.buffs).toEqual([
      expect.objectContaining({ key: "global_buff_normal" }),
    ]);
    expect(result.references).toEqual(expect.arrayContaining([
      expect.objectContaining({ fieldName: "itemId", targetRawId: "fixture_item" }),
    ]));
    expect(result.displayEffects).toEqual([
      expect.objectContaining({ classification: "inferred" }),
    ]);
  });

  it("当前 GameData 的六个主题与十五个 moduleTypes 全部被发现", async () => {
    const data = JSON.parse(await readFile(TOPIC_TABLE_PATH, "utf8")) as {
      topics: Record<string, unknown>;
      modules: Record<string, { moduleTypes: string[] }>;
    };
    const result = normalizeTopicSystems(data);

    expect(result.topics).toHaveLength(6);
    expect(result.systems).toHaveLength(15);
    expect(result.systems.every((system) => system.sourceDigest === system.reconstructedDigest)).toBe(true);
    expect(result.systems.map((system) => system.moduleType).sort()).toEqual(
      Object.keys(TOPIC_MODULE_KEYS).sort(),
    );
    expect(result.systems.filter((system) => system.topicId === "rogue_1")).toHaveLength(0);
    // 同一 details/customizeData 文本可能同时命中多个系统，所有 Kuzu 主键仍必须全局唯一。
    for (const entities of [result.objects, result.fields, result.buffs, result.displayEffects]) {
      expect(new Set(entities.map((entity) => entity.id)).size).toBe(entities.length);
    }
  }, 30_000);

  it("富文本去标签值只用于搜索，不改变原字段", () => {
    expect(stripGameDataMarkup("获得<@ro6.get>1件</>零件\n立即生效")).toBe(
      "获得1件零件 立即生效",
    );
  });
});
