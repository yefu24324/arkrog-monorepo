import type { WrappedRelicItem } from "@arkrog/arknights-schema/game-data";
import { describe, expect, it } from "vitest";

import { item } from "../src/lib/formula/ast.js";
import { FormulaBook, FormulaZoneId } from "../src/lib/formula/formula-book.js";
import { buildMechanicIndex } from "../src/lib/classify/index.js";
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
    FormulaZoneId.char_base_atk,
    item("测试基础攻击力", baseAttack),
  );
}

/** 创建同时带我方与敌方基础最大生命的独立公式书。 */
function maxHpBook(characterMaxHp = 1_000, enemyMaxHp = 10_000): FormulaBook {
  return new FormulaBook()
    .add_item(FormulaZoneId.char_base_max_hp, item("测试干员基础最大生命", characterMaxHp))
    .add_item(FormulaZoneId.enemy_base_max_hp, item("测试敌方基础最大生命", enemyMaxHp));
}

/** 创建带基础防御力的独立公式书。 */
function defenseBook(baseDefense = 500): FormulaBook {
  return new FormulaBook().add_item(
    FormulaZoneId.char_base_def,
    item("测试基础防御力", baseDefense),
  );
}

/** 创建带基础攻击速度的独立公式书。 */
function attackSpeedBook(baseAttackSpeed = 100): FormulaBook {
  return new FormulaBook().add_item(
    FormulaZoneId.char_base_attack_speed,
    item("测试基础攻击速度", baseAttackSpeed),
  );
}

describe("攻击力藏品写入 FormulaBook", () => {
  it("将静态攻击力倍率写入 char_out_atk_mul", () => {
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
      FormulaZoneId.char_out_atk_mul,
    ]);
    expect(placements[0]?.item.tooltip).toBe("静态攻击藏品");
    expect(book.calculate(FormulaZoneId.char_final_atk)).toBe(125);
  });

  it("将攻击力点数写入 char_out_atk_add", () => {
    const book = attackBook();
    applyRelicItemsToFormulaBook(book, [relicFixture({
      id: "flat-atk",
      name: "攻击点数藏品",
      buffs: [{
        key: "char_attribute_add",
        blackboard: [{ key: "atk", value: 30, valueStr: null }],
      }],
    })]);

    expect(book.get_zone(FormulaZoneId.char_out_atk_add).items.at(-1)?.value).toBe(30);
    expect(book.calculate(FormulaZoneId.char_final_atk)).toBe(130);
  });

  it("将战斗事件攻击力倍率写入 char_in_atk_mul", () => {
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
      FormulaZoneId.char_in_atk_mul,
    ]);
    expect(book.calculate(FormulaZoneId.char_final_atk)).toBe(140);
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
    expect(book.calculate(FormulaZoneId.char_final_atk)).toBeCloseTo(156);
    expect(book.get_zone(FormulaZoneId.char_out_atk_mul).items).toHaveLength(3);
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
    expect(book.calculate(FormulaZoneId.char_final_atk)).toBeCloseTo(160);
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
    expect(book.get_zone(FormulaZoneId.char_in_atk_mul).items).toHaveLength(1);
    expect(book.calculate(FormulaZoneId.char_final_atk)).toBe(100);
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
    expect(book.calculate(FormulaZoneId.char_final_atk)).toBe(100);
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
    expect(book.calculate(FormulaZoneId.char_final_atk)).toBe(120);
  });
});

describe("最大生命藏品写入 FormulaBook", () => {
  it("同一静态属性效果分别读取 atk 与 max_hp 参数", () => {
    const book = maxHpBook().add_item(
      FormulaZoneId.char_base_atk,
      item("测试基础攻击力", 100),
    );
    const placements = applyRelicItemsToFormulaBook(book, [relicFixture({
      id: "static-attributes",
      name: "静态属性藏品",
      buffs: [{
        key: "char_attribute_mul",
        blackboard: [
          { key: "atk", value: 0.2, valueStr: null },
          { key: "max_hp", value: 0.5, valueStr: null },
        ],
      }],
    })]);

    expect(placements.map((placement) => [placement.zoneId, placement.item.value])).toEqual([
      [FormulaZoneId.char_out_atk_mul, 0.2],
      [FormulaZoneId.char_out_max_hp_mul, 0.5],
    ]);
    expect(book.calculate(FormulaZoneId.char_final_atk)).toBeCloseTo(120);
    expect(book.calculate(FormulaZoneId.char_final_max_hp)).toBeCloseTo(1_500);
  });

  it("把局内 MAX_HP ADDITION Action 写入干员局内点数区", () => {
    const book = maxHpBook();
    const mechanicIndex = buildMechanicIndex({
      runtime_max_hp_add: {
        eventToActions: {
          ON_BUFF_START: [{
            $type: "Torappu.Battle.Action.Nodes+CreateBuff, Assembly-CSharp",
            _buff: {
              attributes: {
                attributeModifiers: [{
                  attributeType: "MAX_HP",
                  formulaItem: "ADDITION",
                }],
              },
            },
            _buffOwner: "BUFF_OWNER",
          }],
        },
      },
    });
    const placements = applyRelicItemsToFormulaBook(book, [relicFixture({
      id: "runtime-max-hp-add",
      name: "战斗内生命点数藏品",
      buffs: [{
        key: "global_buff_normal",
        blackboard: [
          { key: "key", value: 0, valueStr: "runtime_max_hp_add" },
          { key: "max_hp", value: 200, valueStr: null },
        ],
      }],
    })], { mechanicIndex });

    expect(placements.map((placement) => placement.zoneId)).toEqual([
      FormulaZoneId.char_in_max_hp_add,
    ]);
    expect(book.calculate(FormulaZoneId.char_final_max_hp)).toBe(1_200);
  });

  it("规范化敌方直接倍率的绝对值与增量编码", () => {
    const book = maxHpBook();
    const placements = applyRelicItemsToFormulaBook(book, [
      relicFixture({
        id: "enemy-hp-absolute",
        name: "敌方生命绝对倍率",
        buffs: [{
          key: "global_buff_normal",
          blackboard: [
            { key: "key", value: 0, valueStr: "enemy_max_hp_down" },
            { key: "max_hp", value: 1.35, valueStr: null },
          ],
        }],
      }),
      relicFixture({
        id: "enemy-hp-delta",
        name: "敌方生命倍率增量",
        buffs: [{
          key: "enemy_attribute_mul",
          blackboard: [{ key: "max_hp", value: -0.15, valueStr: null }],
        }],
      }),
    ]);

    expect(placements[0]?.item.value).toBeCloseTo(0.35);
    expect(placements[1]?.item.value).toBe(-0.15);
    // 10000 * (1 + 0.35 - 0.15) = 12000。
    expect(book.calculate(FormulaZoneId.enemy_final_max_hp)).toBeCloseTo(12_000);
  });

  it("把襁褓巨龙 FINAL_SCALER 增量转换为敌方最终绝对倍率", () => {
    const book = maxHpBook();
    const placements = applyRelicItemsToFormulaBook(book, [relicFixture({
      id: "rogue_6_start_3",
      name: "襁褓巨龙",
      buffs: [{
        key: "global_buff_layer",
        blackboard: [
          { key: "key", value: 0, valueStr: "rogue_6_start_3" },
          { key: "max_hp", value: 0.5, valueStr: null },
        ],
      }],
    })], { topicId: "rogue_6" });

    expect(placements).toHaveLength(1);
    expect(placements[0]?.zoneId).toBe(FormulaZoneId.enemy_final_max_hp_mul);
    expect(placements[0]?.item.value).toBe(1.5);
    expect(placements[0]?.route.ruleId).toBe("template:rogue_6_start_3");
    expect(book.calculate(FormulaZoneId.enemy_final_max_hp)).toBe(15_000);
  });

  it("按层数写入录武官的敌方直接法抗减益", () => {
    const book = new FormulaBook().add_item(
      FormulaZoneId.enemy_base_magic_resist,
      item("测试敌方基础法抗", 20),
    );
    const placements = applyRelicItemsToFormulaBook(book, [relicFixture({
      id: "rogue_5_copper_buff_E_16_a",
      name: "录武官",
      layer: 60,
      buffs: [{
        key: "global_buff_normal",
        blackboard: [
          { key: "trig_type", value: 0, valueStr: "TAKE_OUT" },
          { key: "magic_resistance", value: -2, valueStr: null },
          { key: "max_stack_cnt", value: 50, valueStr: null },
          { key: "key", value: 0, valueStr: "rogue_5_enemy_minus_magic_resistance[take_damage]" },
        ],
      }],
    })], { topicId: "rogue_5" });

    expect(placements).toHaveLength(1);
    expect(placements[0]?.zoneId).toBe(FormulaZoneId.enemy_direct_magic_resist_mul);
    expect(placements[0]?.item.value).toBe(-100);
    expect(placements[0]?.route.ruleId)
      .toBe("template:rogue_5_enemy_minus_magic_resistance[take_damage]");
  });
});

describe("防御力藏品写入 FormulaBook", () => {
  it("同一静态属性效果分别读取 atk 与 def 参数", () => {
    const book = defenseBook().add_item(
      FormulaZoneId.char_base_atk,
      item("测试基础攻击力", 100),
    );
    const placements = applyRelicItemsToFormulaBook(book, [relicFixture({
      id: "static-atk-def",
      name: "静态攻防藏品",
      buffs: [{
        key: "char_attribute_mul",
        blackboard: [
          { key: "atk", value: 0.2, valueStr: null },
          { key: "def", value: 0.4, valueStr: null },
        ],
      }],
    })]);

    expect(placements.map((placement) => [placement.zoneId, placement.item.value])).toEqual([
      [FormulaZoneId.char_out_atk_mul, 0.2],
      [FormulaZoneId.char_out_def_mul, 0.4],
    ]);
    expect(book.calculate(FormulaZoneId.char_final_atk)).toBeCloseTo(120);
    expect(book.calculate(FormulaZoneId.char_final_def)).toBeCloseTo(700);
  });

  it("把 DEF ADDITION Action 写入干员局内点数区", () => {
    const book = defenseBook();
    const mechanicIndex = buildMechanicIndex({
      "attr_up_on_trigger[def&mag_resist]": {
        eventToActions: {
          ON_BUFF_TRIGGER: [{
            $type: "Torappu.Battle.Action.Nodes+CreateBuff, Assembly-CSharp",
            _buff: { attributes: { attributeModifiers: [{ attributeType: "DEF", formulaItem: "ADDITION" }] } },
            _buffOwner: "BUFF_OWNER",
          }],
        },
      },
    });
    const placements = applyRelicItemsToFormulaBook(book, [relicFixture({
      id: "runtime-def-add",
      name: "战斗内防御点数藏品",
      buffs: [{
        key: "global_buff_normal",
        blackboard: [
          { key: "key", value: 0, valueStr: "attr_up_on_trigger[def&mag_resist]" },
          { key: "def", value: 400, valueStr: null },
        ],
      }],
    })], { mechanicIndex });

    expect(placements.map((placement) => placement.zoneId)).toEqual([
      FormulaZoneId.char_in_def_add,
    ]);
    expect(placements[0]?.route.parameterKey).toBe("def");
    expect(book.calculate(FormulaZoneId.char_final_def)).toBe(900);
  });

  it("未加载 Action 索引时仍按稳定模板名写入局内防御点数区", () => {
    const book = defenseBook();
    const placements = applyRelicItemsToFormulaBook(book, [relicFixture({
      id: "runtime-def-add-fallback",
      name: "战斗内防御点数藏品",
      buffs: [{
        key: "global_buff_normal",
        blackboard: [
          { key: "key", value: 0, valueStr: "attr_up_on_trigger[def&mag_resist]" },
          { key: "def", value: 400, valueStr: null },
        ],
      }],
    })]);

    expect(placements.map((placement) => placement.zoneId)).toEqual([
      FormulaZoneId.char_in_def_add,
    ]);
    expect(placements[0]?.route.ruleId).toBe("def-runtime-flat-addition-fallback");
    expect(book.calculate(FormulaZoneId.char_final_def)).toBe(900);
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

    expect(routed.zoneIds).toEqual([FormulaZoneId.char_out_atk_mul]);
    expect(activation.active).toBe(false);
  });

  it("防御属性进入真实乘区，奖励载体保持 not_applicable", () => {
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

    expect(defense.zoneIds).toEqual([FormulaZoneId.char_out_def_mul]);
    expect(defense.classification).toBe("predicted");
    expect(reward.zoneIds).toEqual([]);
    expect(reward.classification).toBe("not_applicable");
  });

  it("疗养卡的攻击速度效果只产生攻速公式项", () => {
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
    const book = attackSpeedBook().add_item(
      FormulaZoneId.char_base_atk,
      item("测试基础攻击力", 100),
    );
    const placements = applyRelicItemsToFormulaBook(book, [relicFixture({
      id: "rogue_2_relic_fight_138",
      name: "疗养体验卡",
      buffs: [{ key: input.key, blackboard: [...input.blackboard] }],
    })], { topicId: "rogue_2" });

    expect(routed.zoneIds).toEqual([FormulaZoneId.char_direct_attack_speed_add]);
    expect(routed.classification).toBe("predicted");
    expect(placements.map((placement) => [placement.zoneId, placement.route.parameterKey])).toEqual([
      [FormulaZoneId.char_direct_attack_speed_add, "attack_speed"],
    ]);
    expect(book.get_zone(FormulaZoneId.char_in_atk_mul).items).toHaveLength(1);
    expect(book.calculate(FormulaZoneId.char_final_atk)).toBe(100);
    expect(
      book.calculate(FormulaZoneId.char_base_attack_speed)
      + book.calculate(FormulaZoneId.char_direct_attack_speed_add),
    ).toBe(140);
  });
});
