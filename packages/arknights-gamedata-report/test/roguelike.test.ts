/** 藏品包装与主题扩展分区契约测试。 */

import { describe, expect, it } from "vitest";

import { buildWrappedRelicItems } from "../src/roguelike/wrapped-relics.ts";

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
