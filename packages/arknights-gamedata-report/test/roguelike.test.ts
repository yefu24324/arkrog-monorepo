/** 藏品包装与主题扩展分区契约测试。 */

import { readFile } from "node:fs/promises";
import path from "node:path";

import { describe, expect, it } from "vitest";

import { buildWrappedRelicItems } from "../src/roguelike/wrapped-relics.ts";
import { buildTopicExtReport } from "../src/roguelike/export-topic-ext.ts";
import type {
  ExportedRogue6TopicExtReport,
  RoguelikeTopicTableForReport,
} from "../src/roguelike/types.ts";

/** 当前测试从 monorepo 的中文 GameData 验证黑流树海真实数量和引用。 */
const TOPIC_TABLE_PATH = path.resolve(
  import.meta.dirname,
  "../../../ArknightsGameData/zh_CN/gamedata/excel/roguelike_topic_table.json",
);

describe("藏品报告", () => {
  it("生成裸数组并保留 UI 初始化字段与关联 charBuffData", () => {
    const relic = { id: "relic", buffs: [] };
    const characterBuff = {
      id: "char-buff",
      relatedItemId: "relic",
      iconId: "other",
      buffs: [],
    };
    const [item] = buildWrappedRelicItems({
      items: {
        relic: {
          id: "relic",
          name: "测试藏品",
          description: null,
          usage: null,
          type: "RELIC",
          rarity: "NORMAL",
          sortId: 1,
        },
      },
      relics: { relic },
      charBuffData: { characterBuff },
    });
    expect(item).toMatchObject({
      id: "relic",
      pinyin: "ce_shi_cang_pin",
      layer: 0,
      enable: true,
      relic: { usage: "" },
      charBuffs: [characterBuff],
    });
    expect(item?.relic.buffs).toBe(relic.buffs);
  });
});

describe("黑流树海主题扩展报告", () => {
  it("只导出实托邦、乌托邦 Buff 和概念体的完整关联", async () => {
    const table = JSON.parse(await readFile(TOPIC_TABLE_PATH, "utf8")) as RoguelikeTopicTableForReport;
    const report = buildTopicExtReport(table, "rogue_6") as ExportedRogue6TopicExtReport;
    expect(Object.keys(report).sort()).toEqual(["conceptualEntities", "realUtopia", "utopia"]);

    const effects = Object.values(report.realUtopia.effects);
    expect(effects).toHaveLength(30);
    expect(new Set(effects.map((effect) => effect.type))).toHaveLength(10);
    expect(new Set(effects.map((effect) => effect.levelName))).toEqual(new Set(["早期", "中期", "晚期"]));
    expect(effects.some((effect) => effect.name === "“黑流地脉”")).toBe(true);
    expect(effects.some((effect) => effect.name === "“希望的沃土”")).toBe(true);
    expect(Object.keys(report.realUtopia.effects).some((id) => id.includes("subweather"))).toBe(false);

    const utopiaEffects = Object.values(report.utopia.effects);
    expect(utopiaEffects).toHaveLength(9);
    expect(new Set(utopiaEffects.map((effect) => effect.type))).toEqual(new Set(["BAT", "MAP", "RES"]));
    expect(utopiaEffects.some((effect) => effect.outerName === "“巨人摇篮”")).toBe(true);
    expect(Object.keys(report.utopia.archive)).toHaveLength(9);

    const conceptualEntities = Object.values(report.conceptualEntities.entries);
    expect(conceptualEntities).toHaveLength(6);
    expect(conceptualEntities.every((entry) => entry.item.type === "SCRAP")).toBe(true);
    expect(conceptualEntities.every((entry) => entry.effect.scrapId === entry.item.id)).toBe(true);
    expect(report.conceptualEntities.type.type).toBe("PASSIVE");
  });
});
