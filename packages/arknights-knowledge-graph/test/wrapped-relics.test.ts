import { describe, expect, it } from "vitest";

import { buildWrappedRelicItems } from "@arkrog/arknights-gamedata-report";

describe("buildWrappedRelicItems", () => {
  it("保留 relic 与一对多 charBuffData 原始对象，并初始化用户态字段", () => {
    const relic = { id: "relic", buffs: [] };
    const byRelatedItem = {
      id: "char-buff-a",
      relatedItemId: "relic",
      iconId: "other",
      buffs: [],
      desc: "原始说明 A",
    };
    const byIcon = {
      id: "char-buff-b",
      relatedItemId: null,
      iconId: "relic",
      buffs: [],
      desc: "原始说明 B",
    };
    const item = {
      id: "relic",
      name: "测试藏品",
      usage: "测试效果",
      description: null,
      rarity: "NORMAL",
      sortId: 1,
      type: "RELIC",
    };
    const items = buildWrappedRelicItems({
        items: {
          relic: item,
        },
        relics: { relic },
        charBuffData: { a: byRelatedItem, b: byIcon },
    });

    expect(items[0]).toMatchObject({
      id: "relic",
      name: "测试藏品",
      pinyin: "ce_shi_cang_pin",
      layer: 0,
      enable: true,
    });
    expect(items[0]?.relic).toMatchObject({
      name: "测试藏品",
      usage: "测试效果",
      description: null,
      buffs: [],
    });
    // 嵌套数组保持原引用，证明构建器没有归一化或修改原始值。
    expect(items[0]?.relic.buffs).toBe(relic.buffs);
    expect(items[0]?.charBuffs).toEqual([byRelatedItem, byIcon]);
    expect(items[0]?.charBuffs[0]).toBe(byRelatedItem);
    expect(items[0]?.charBuffs[1]).toBe(byIcon);
  });

  it("把 null usage 归一为空字符串", () => {
    const items = buildWrappedRelicItems({
        items: {
          relic: {
            id: "relic",
            name: "无说明藏品",
            usage: null,
            description: null,
            rarity: "NORMAL",
            sortId: 1,
            type: "RELIC",
          },
        },
        relics: { relic: { id: "relic", buffs: [] } },
        charBuffData: {},
    });

    expect(items[0]?.relic.usage).toBe("");
  });

  it("拒绝合并 ID 不一致的 item 与 relic", () => {
    // 同名索引下若原始对象 ID 不一致，必须显式报错而不是覆盖 item.id。
    expect(() =>
      buildWrappedRelicItems({
          items: {
            relic: {
              id: "relic",
              name: "测试藏品",
              usage: "测试效果",
              description: null,
              rarity: "NORMAL",
              sortId: 1,
              type: "RELIC",
            },
          },
          relics: { relic: { id: "other-relic", buffs: [] } },
          charBuffData: {},
      }),
    ).toThrow("ID 不一致");
  });
});
