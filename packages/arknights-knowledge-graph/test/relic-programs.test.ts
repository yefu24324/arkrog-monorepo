import type { WrappedRelicItem } from "@arkrog/arknights-schema/game-data";
import { describe, expect, it } from "vitest";

import { item } from "../src/lib/formula/ast.js";
import { FormulaBook, FormulaZoneId } from "../src/lib/formula/formula-book.js";
import {
  applyRelicItemsToFormulaBook,
  evaluateBuffActivation,
  routeRelicBuffToZones,
} from "../src/lib/mechanics/index.js";

/** 构造只包含测试所需字段的原始包装藏品。 */
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
      usage: "攻击力测试",
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

/** 创建带基础攻击力的独立公式书。 */
function attackBook(baseAttack = 100): FormulaBook {
  return new FormulaBook().add_item(
    FormulaZoneId.operator_base_atk,
    item("测试基础攻击力", baseAttack),
  );
}

describe("攻击力藏品写入 FormulaBook", () => {
  it("将静态攻击力倍率写入 operator_out_atk_mul", () => {
    const book = attackBook();
    const placements = applyRelicItemsToFormulaBook(book, [relicFixture({
      id: "static-atk",
      name: "静态攻击藏品",
      buffs: [{
        key: "char_attribute_mul",
        blackboard: [{ key: "atk", value: 0.25, valueStr: null }],
      }],
    })], { topicId: "rogue_test" });

    expect(placements.map((placement) => placement.zoneId)).toEqual([
      FormulaZoneId.operator_out_atk_mul,
    ]);
    expect(placements[0]?.item.tooltip).toBe("静态攻击藏品");
    expect(book.calculate(FormulaZoneId.operator_final_atk)).toBe(125);
  });

  it("将攻击力点数写入 operator_out_atk_add", () => {
    const book = attackBook();
    applyRelicItemsToFormulaBook(book, [relicFixture({
      id: "flat-atk",
      name: "攻击点数藏品",
      buffs: [{
        key: "char_attribute_add",
        blackboard: [{ key: "atk", value: 30, valueStr: null }],
      }],
    })]);

    expect(book.get_zone(FormulaZoneId.operator_out_atk_add).items.at(-1)?.value).toBe(30);
    expect(book.calculate(FormulaZoneId.operator_final_atk)).toBe(130);
  });

  it("将战斗事件攻击力倍率写入 operator_in_atk_mul", () => {
    const book = attackBook();
    const placements = applyRelicItemsToFormulaBook(book, [relicFixture({
      id: "runtime-atk",
      name: "战斗内攻击藏品",
      buffs: [{
        key: "global_buff_normal",
        blackboard: [
          { key: "key", value: 0, valueStr: "operator_attack_on_event" },
          { key: "atk", value: 0.4, valueStr: null },
        ],
      }],
    })]);

    expect(placements.map((placement) => placement.zoneId)).toEqual([
      FormulaZoneId.operator_in_atk_mul,
    ]);
    expect(book.calculate(FormulaZoneId.operator_final_atk)).toBe(140);
  });

  it("多件藏品按 FormulaBook 的区内加算语义聚合", () => {
    const book = attackBook();
    applyRelicItemsToFormulaBook(book, [
      relicFixture({
        id: "flat",
        name: "点数",
        buffs: [{
          key: "char_attribute_add",
          blackboard: [{ key: "atk", value: 20, valueStr: null }],
        }],
      }),
      relicFixture({
        id: "mul-a",
        name: "倍率 A",
        buffs: [{
          key: "char_attribute_mul",
          blackboard: [{ key: "atk", value: 0.1, valueStr: null }],
        }],
      }),
      relicFixture({
        id: "mul-b",
        name: "倍率 B",
        buffs: [{
          key: "char_squad_attribute_mul",
          blackboard: [{ key: "atk", value: 0.2, valueStr: null }],
        }],
      }),
    ]);

    // (100 + 20) * (1 + 0.1 + 0.2) = 156。
    expect(book.calculate(FormulaZoneId.operator_final_atk)).toBeCloseTo(156);
    expect(book.get_zone(FormulaZoneId.operator_out_atk_mul).items).toHaveLength(3);
  });

  it("先锋新典训按当前层数和 max_stack_cnt 写入局内倍率", () => {
    const book = attackBook();
    const relic = relicFixture({
      id: "rogue_6_relic_assign_1",
      name: "钝爪-新典训",
      layer: 9,
      buffs: [{
        key: "immediate_reward",
        blackboard: [{
          key: "id",
          value: 0,
          valueStr: "rogue_6_upgrade_ticket_pioneer_from_relic",
        }],
      }],
      charBuffs: [{
        id: "rogue_6_from_relic_1",
        relatedItemId: null,
        iconId: "rogue_6_relic_assign_1",
        buffs: [{
          key: "char_ability_new",
          blackboard: [
            { key: "key", value: 0, valueStr: "rogue_6_pioneer_skill" },
            { key: "max_stack_cnt", value: 6, valueStr: null },
            { key: "atk", value: 0.1, valueStr: null },
          ],
        }],
      }],
    });
    const placements = applyRelicItemsToFormulaBook(book, [relic], {
      topicId: "rogue_6",
      activation: { character: { profession: "PIONEER" } },
    });

    expect(placements).toHaveLength(1);
    expect(placements[0]?.route.ruleId).toBe("template:rogue_6_pioneer_skill");
    expect(placements[0]?.item.value).toBeCloseTo(0.6);
    expect(book.calculate(FormulaZoneId.operator_final_atk)).toBeCloseTo(160);
  });

  it("先锋新典训零层时不添加无效公式项", () => {
    const book = attackBook();
    const placements = applyRelicItemsToFormulaBook(book, [relicFixture({
      id: "rogue_6_relic_assign_1",
      name: "钝爪-新典训",
      layer: 0,
      charBuffs: [{
        id: "rogue_6_from_relic_1",
        relatedItemId: null,
        iconId: "rogue_6_relic_assign_1",
        buffs: [{
          key: "char_ability_new",
          blackboard: [
            { key: "key", value: 0, valueStr: "rogue_6_pioneer_skill" },
            { key: "max_stack_cnt", value: 6, valueStr: null },
            { key: "atk", value: 0.1, valueStr: null },
          ],
        }],
      }],
    })]);

    expect(placements).toEqual([]);
    expect(book.get_zone(FormulaZoneId.operator_in_atk_mul).items).toHaveLength(1);
    expect(book.calculate(FormulaZoneId.operator_final_atk)).toBe(100);
  });

  it("enable=false 与未满足职业条件的藏品都不写入", () => {
    const book = attackBook();
    const disabled = relicFixture({
      id: "disabled",
      name: "关闭藏品",
      enable: false,
      buffs: [{
        key: "char_attribute_mul",
        blackboard: [{ key: "atk", value: 1, valueStr: null }],
      }],
    });
    const inactive = relicFixture({
      id: "inactive",
      name: "职业不符藏品",
      buffs: [{
        key: "char_attribute_mul",
        blackboard: [
          { key: "selector.profession", value: 0, valueStr: "caster" },
          { key: "atk", value: 0.5, valueStr: null },
        ],
      }],
    });
    const placements = applyRelicItemsToFormulaBook(book, [disabled, inactive], {
      activation: { character: { profession: "GUARD" } },
    });

    expect(placements).toEqual([]);
    expect(book.calculate(FormulaZoneId.operator_final_atk)).toBe(100);
  });

  it("同批启用藏品可以满足 reliance_relics", () => {
    const book = attackBook();
    const placements = applyRelicItemsToFormulaBook(book, [
      relicFixture({
        id: "dependent",
        name: "依赖藏品",
        buffs: [{
          key: "char_attribute_mul",
          blackboard: [
            { key: "reliance_relics", value: 0, valueStr: "required" },
            { key: "atk", value: 0.2, valueStr: null },
          ],
        }],
      }),
      relicFixture({ id: "required", name: "前置藏品" }),
    ]);

    expect(placements).toHaveLength(1);
    expect(book.calculate(FormulaZoneId.operator_final_atk)).toBe(120);
  });
});

describe("攻击力路由与生效边界", () => {
  it("路由不读取职业上下文，生效判断保持独立", () => {
    const routed = routeRelicBuffToZones({
      effectId: "route-only",
      source: "relics",
      buffIndex: 0,
      key: "char_attribute_mul",
      blackboard: [
        { key: "selector.profession", value: 0, valueStr: "caster" },
        { key: "atk", value: 0.2, valueStr: null },
      ],
      jsonPath: "$.route-only",
    });
    const activation = evaluateBuffActivation(
      routed.effect.key,
      routed.effect.blackboard,
      { character: { profession: "GUARD" } },
    );

    expect(routed.zoneIds).toEqual([FormulaZoneId.operator_out_atk_mul]);
    expect(activation.active).toBe(false);
  });

  it("非攻击战斗属性保持 unknown，奖励载体保持 not_applicable", () => {
    const defense = routeRelicBuffToZones({
      effectId: "defense",
      source: "relics",
      buffIndex: 0,
      key: "char_attribute_mul",
      blackboard: [{ key: "def", value: 0.2, valueStr: null }],
      jsonPath: "$.defense",
    });
    const reward = routeRelicBuffToZones({
      effectId: "reward",
      source: "relics",
      buffIndex: 0,
      key: "immediate_reward",
      blackboard: [{ key: "id", value: 0, valueStr: "ticket" }],
      jsonPath: "$.reward",
    });

    expect(defense.zoneIds).toEqual([]);
    expect(defense.classification).toBe("unknown");
    expect(reward.zoneIds).toEqual([]);
    expect(reward.classification).toBe("not_applicable");
  });

  it("疗养卡的攻击速度效果不产生攻击力乘区或公式项", () => {
    const input = {
      effectId: "effect:rogue_2:rogue_2_relic_fight_138:0",
      source: "relics",
      buffIndex: 0,
      key: "global_buff_normal",
      blackboard: [
        { key: "key", value: 0, valueStr: "rogue_2_attr_up[limited]" },
        { key: "attack_speed", value: 40, valueStr: null },
        { key: "atk", value: 0, valueStr: null },
        { key: "def", value: 0, valueStr: null },
        { key: "block_cnt", value: 0, valueStr: null },
      ],
      jsonPath: '$.details.rogue_2.relics["rogue_2_relic_fight_138"].buffs[0]',
    } as const;
    const routed = routeRelicBuffToZones(input);
    const book = attackBook();
    const placements = applyRelicItemsToFormulaBook(book, [relicFixture({
      id: "rogue_2_relic_fight_138",
      name: "疗养体验卡",
      buffs: [{ key: input.key, blackboard: [...input.blackboard] }],
    })], { topicId: "rogue_2" });

    expect(routed.zoneIds).toEqual([]);
    expect(routed.classification).toBe("unknown");
    expect(placements).toEqual([]);
    expect(book.get_zone(FormulaZoneId.operator_in_atk_mul).items).toHaveLength(1);
    expect(book.calculate(FormulaZoneId.operator_final_atk)).toBe(100);
  });
});
