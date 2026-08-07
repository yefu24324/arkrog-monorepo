import type { WrappedRelicItem } from "@arkrog/arknights-gamedata-report";
import { describe, expect, it } from "vitest";

import { item } from "../src/lib/formula/ast.js";
import { FormulaBook, FormulaZoneId } from "../src/lib/formula/formula-book.js";
import {
  analyzeRelic,
  analyzeRelics,
  applyRelic,
  applyRelics,
} from "../src/lib/mechanics/index.js";

/** 构造只包含 mechanics 测试所需字段的包装藏品。 */
function relicFixture(input: {
  id: string;
  name: string;
  buffs?: WrappedRelicItem["relic"]["buffs"];
  charBuffs?: WrappedRelicItem["charBuffs"];
  layer?: number;
  enable?: boolean;
}): WrappedRelicItem {
  return {
    id: input.id,
    name: input.name,
    pinyin: input.id,
    relic: {
      id: input.id,
      name: input.name,
      usage: "测试效果",
      description: null,
      rarity: "NORMAL",
      sortId: 0,
      type: "RELIC",
      buffs: input.buffs ?? [],
    },
    charBuffs: input.charBuffs ?? [],
    layer: input.layer ?? 0,
    enable: input.enable ?? true,
  };
}

describe("analyzeRelic", () => {
  it("按人类确认规则解释阿猛与冰中火的元素倍率", () => {
    const aman = relicFixture({
      id: "rogue_6_relic_legacy_104",
      name: "阿猛",
      buffs: [{
        key: "global_buff_normal",
        blackboard: [
          { key: "key", value: 0, valueStr: "enemy_take_element_damage_up" },
          { key: "damage_scale", value: 2, valueStr: null },
        ],
      }],
    });
    const iceInFire = relicFixture({
      id: "rogue_6_relic_fight_21",
      name: "冰中火",
      buffs: [
        {
          key: "global_buff_normal",
          blackboard: [
            { key: "key", value: 0, valueStr: "enemy_damage_scale[ep]" },
            { key: "ep_damage_scale", value: 1.75, valueStr: null },
          ],
        },
        {
          key: "global_buff_normal",
          blackboard: [
            { key: "key", value: 0, valueStr: "enemy_take_element_damage_up" },
            { key: "damage_scale", value: 1.75, valueStr: null },
          ],
        },
      ],
    });

    expect(analyzeRelics([aman, iceInFire], { topicId: "rogue_6" })).toEqual([
      expect.objectContaining({
        effectId: "effect:rogue_6:rogue_6_relic_legacy_104:0",
        status: "supported",
        zoneId: FormulaZoneId.enemy_elment_damage_mul,
        item: expect.objectContaining({ value: 2 }),
      }),
      expect.objectContaining({
        effectId: "effect:rogue_6:rogue_6_relic_fight_21:0",
        status: "supported",
        zoneId: FormulaZoneId.enemy_ep_damage_mul,
        item: expect.objectContaining({ value: 1.75 }),
      }),
      expect.objectContaining({
        effectId: "effect:rogue_6:rogue_6_relic_fight_21:1",
        status: "supported",
        zoneId: FormulaZoneId.enemy_elment_damage_mul,
        item: expect.objectContaining({ value: 1.75 }),
      }),
    ]);
  });

  it("元素倍率特例的数据护栏变化时保持 unknown", () => {
    const analysis = analyzeRelic(relicFixture({
      id: "rogue_6_relic_fight_21",
      name: "冰中火",
      buffs: [{
        key: "global_buff_normal",
        blackboard: [
          { key: "key", value: 0, valueStr: "enemy_damage_scale[ep]" },
          { key: "damage_scale", value: 1.75, valueStr: null },
        ],
      }],
    }), { topicId: "rogue_6" });

    expect(analysis).toEqual([{
      effectId: "effect:rogue_6:rogue_6_relic_fight_21:0",
      status: "unknown",
    }]);
  });

  it("同一藏品的其他效果仍交给通用程序解释", () => {
    const analysis = analyzeRelic(relicFixture({
      id: "rogue_6_relic_fight_21",
      name: "冰中火",
      buffs: [{
        key: "char_attribute_mul",
        blackboard: [{ key: "atk", value: 0.2, valueStr: null }],
      }],
    }), { topicId: "rogue_6" });

    expect(analysis).toEqual([
      expect.objectContaining({
        status: "supported",
        zoneId: FormulaZoneId.char_out_atk_mul,
      }),
    ]);
  });

  it("按机制签名复用静态属性程序并保留条件说明", () => {
    const analysis = analyzeRelic(relicFixture({
      id: "relic",
      name: "职业属性藏品",
      buffs: [{
        key: "char_attribute_mul",
        blackboard: [
          { key: "selector.profession", value: 0, valueStr: "warrior" },
          { key: "atk", value: 0.2, valueStr: null },
          { key: "max_hp", value: 0.3, valueStr: null },
        ],
      }],
    }), { topicId: "rogue_test" });

    expect(analysis).toHaveLength(2);
    expect(analysis).toEqual(expect.arrayContaining([
      expect.objectContaining({ status: "supported", zoneId: FormulaZoneId.char_out_atk_mul }),
      expect.objectContaining({ status: "supported", zoneId: FormulaZoneId.char_out_max_hp_mul }),
    ]));
    expect(analysis.every((entry) => entry.effectId === "effect:rogue_test:relic:0")).toBe(true);
    expect(analysis.flatMap((entry) => entry.status === "supported" ? entry.conditions : []))
      .toContain("仅指定职业：warrior");
  });

  it("未注册机制保持 unknown，奖励载体明确为 not_applicable", () => {
    const results = analyzeRelics([
      relicFixture({
        id: "unknown",
        name: "未知",
        buffs: [{
          key: "unregistered_combat_effect",
          blackboard: [{ key: "atk", value: 1, valueStr: null }],
        }],
      }),
      relicFixture({
        id: "reward",
        name: "奖励",
        buffs: [{
          key: "immediate_reward",
          blackboard: [{ key: "id", value: 0, valueStr: "rogue_gold" }],
        }],
      }),
    ], { topicId: "rogue_test" });

    expect(results.map((entry) => entry.status)).toEqual(["unknown", "not_applicable"]);
  });

  it("把常见条件能力归纳为干员战斗内属性程序", () => {
    const analysis = analyzeRelic(relicFixture({
      id: "ability",
      name: "条件能力藏品",
      buffs: [{
        key: "char_ability_new",
        blackboard: [
          { key: "atk", value: 0.2, valueStr: null },
          { key: "attack_speed", value: 15, valueStr: null },
        ],
      }],
    }), { topicId: "rogue_test" });

    expect(analysis).toEqual(expect.arrayContaining([
      expect.objectContaining({ status: "supported", zoneId: FormulaZoneId.char_in_atk_mul }),
      expect.objectContaining({ status: "supported", zoneId: FormulaZoneId.char_direct_attack_speed_add }),
    ]));
  });

  it("初始 layer 为零时仍展示职业新典训的单次静态贡献", () => {
    const analysis = analyzeRelic(relicFixture({
      id: "rogue_6_relic_assign_1",
      name: "钝爪-新典训",
      buffs: [{
        key: "immediate_reward",
        blackboard: [{ key: "id", value: 0, valueStr: "rogue_6_upgrade_ticket_pioneer_from_relic" }],
      }],
      charBuffs: [{
        id: "rogue_6_from_relic_1",
        buffType: "FROM_RELIC",
        iconId: "rogue_6_relic_assign_1",
        relatedItemId: null,
        outerName: "钝爪-新典训",
        innerName: "钝爪-新典训",
        functionDesc: "每次开启技能后攻击力+10%（最多+60%）",
        desc: "每次开启技能后攻击力+10%（最多+60%）",
        buffs: [{
          key: "char_ability_new",
          blackboard: [
            { key: "key", value: 0, valueStr: "rogue_6_pioneer_skill" },
            { key: "max_stack_cnt", value: 6, valueStr: null },
            { key: "atk", value: 0.1, valueStr: null },
          ],
        }],
      }],
    }), { topicId: "rogue_6" });

    expect(analysis).toEqual(expect.arrayContaining([
      expect.objectContaining({
        status: "supported",
        zoneId: FormulaZoneId.char_in_atk_mul,
        item: expect.objectContaining({ value: 0.1 }),
      }),
    ]));
  });
});

describe("applyRelic", () => {
  it("把阿猛与冰中火的倍率写入两个元素乘区并按乘法聚合", () => {
    const aman = relicFixture({
      id: "rogue_6_relic_legacy_104",
      name: "阿猛",
      buffs: [{
        key: "global_buff_normal",
        blackboard: [
          { key: "key", value: 0, valueStr: "enemy_take_element_damage_up" },
          { key: "damage_scale", value: 2, valueStr: null },
        ],
      }],
    });
    const iceInFire = relicFixture({
      id: "rogue_6_relic_fight_21",
      name: "冰中火",
      buffs: [
        {
          key: "global_buff_normal",
          blackboard: [
            { key: "key", value: 0, valueStr: "enemy_damage_scale[ep]" },
            { key: "ep_damage_scale", value: 1.75, valueStr: null },
          ],
        },
        {
          key: "global_buff_normal",
          blackboard: [
            { key: "key", value: 0, valueStr: "enemy_take_element_damage_up" },
            { key: "damage_scale", value: 1.75, valueStr: null },
          ],
        },
      ],
    });
    const book = new FormulaBook();

    const applied = applyRelics([aman, iceInFire], book, { topicId: "rogue_6" });

    expect(applied.map((entry) => entry.zoneId)).toEqual([
      FormulaZoneId.enemy_elment_damage_mul,
      FormulaZoneId.enemy_ep_damage_mul,
      FormulaZoneId.enemy_elment_damage_mul,
    ]);
    expect(book.calculate(FormulaZoneId.enemy_elment_damage_mul)).toBeCloseTo(3.5);
    expect(book.calculate(FormulaZoneId.enemy_ep_damage_mul)).toBeCloseTo(1.75);
  });

  it("只返回并写入当前实际生效的公式项", () => {
    const relic = relicFixture({
      id: "guard-relic",
      name: "近卫藏品",
      buffs: [{
        key: "char_attribute_mul",
        blackboard: [
          { key: "selector.profession", value: 0, valueStr: "warrior" },
          { key: "atk", value: 0.25, valueStr: null },
        ],
      }],
    });
    const inactiveBook = new FormulaBook()
      .add_item(FormulaZoneId.char_base_atk, item("基础攻击力", 100));
    expect(applyRelic(relic, inactiveBook, {
      topicId: "rogue_test",
      activation: { character: { profession: "MEDIC" } },
    })).toEqual([]);
    expect(inactiveBook.calculate(FormulaZoneId.char_final_atk)).toBe(100);

    const activeBook = new FormulaBook()
      .add_item(FormulaZoneId.char_base_atk, item("基础攻击力", 100));
    const applied = applyRelic(relic, activeBook, {
      topicId: "rogue_test",
      activation: { character: { profession: "GUARD" } },
    });
    expect(applied.map((entry) => entry.zoneId)).toEqual([FormulaZoneId.char_out_atk_mul]);
    expect(activeBook.calculate(FormulaZoneId.char_final_atk)).toBe(125);
  });

  it("批量入口用启用藏品集合判断前置依赖，并忽略 enable=false", () => {
    const prerequisite = relicFixture({ id: "required", name: "前置" });
    const dependent = relicFixture({
      id: "dependent",
      name: "依赖藏品",
      buffs: [{
        key: "char_attribute_mul",
        blackboard: [
          { key: "reliance_relics", value: 0, valueStr: "required" },
          { key: "atk", value: 0.2, valueStr: null },
        ],
      }],
    });
    const disabled = relicFixture({
      id: "disabled",
      name: "停用藏品",
      enable: false,
      buffs: [{
        key: "char_attribute_mul",
        blackboard: [{ key: "atk", value: 1, valueStr: null }],
      }],
    });
    const book = new FormulaBook().add_item(
      FormulaZoneId.char_base_atk,
      item("基础攻击力", 100),
    );

    const applied = applyRelics([prerequisite, dependent, disabled], book, {
      topicId: "rogue_test",
    });
    expect(applied).toHaveLength(1);
    expect(book.calculate(FormulaZoneId.char_final_atk)).toBe(120);
  });

  it("精确模板按层数解释数值，不由通用字段路由猜测", () => {
    const relic = relicFixture({
      id: "pioneer",
      name: "先锋新典训",
      layer: 5,
      buffs: [{
        key: "global_buff_stack",
        blackboard: [
          { key: "key", value: 0, valueStr: "rogue_6_pioneer_skill" },
          { key: "atk", value: 0.2, valueStr: null },
          { key: "max_stack_cnt", value: 3, valueStr: null },
        ],
      }],
    });
    const book = new FormulaBook().add_item(
      FormulaZoneId.char_base_atk,
      item("基础攻击力", 100),
    );
    const applied = applyRelic(relic, book, { topicId: "rogue_6" });
    expect(applied[0]?.item.value).toBeCloseTo(0.6);
    expect(book.calculate(FormulaZoneId.char_final_atk)).toBeCloseTo(160);
  });
});
