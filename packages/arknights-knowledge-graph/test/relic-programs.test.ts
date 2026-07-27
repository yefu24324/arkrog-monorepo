import { describe, expect, it } from "vitest";

import {
  FormulaContext,
  applyClassifiedEffectToFormulaContext,
  applyRelicBuffsToFormulaContext,
  applyRelicItemsToFormulaContext,
  evaluateBuffActivation,
  evaluateDamageFormula,
  routeRelicBuffToZones,
} from "../src/lib/formula/index.js";

describe("evaluateBuffActivation", () => {
  it("缺少 reliance_relics 前置藏品时不生效", () => {
    const result = evaluateBuffActivation(
      "char_attribute_mul",
      [
        { key: "reliance_relics", value: 0, valueStr: "rogue_4_relic_book_3" },
        { key: "atk", value: 0.2, valueStr: null },
      ],
      { selectedRelicIds: ["rogue_4_relic_hand"] },
    );
    expect(result.active).toBe(false);
    expect(result.inactiveReasons[0]).toContain("rogue_4_relic_book_3");
  });

  it("已选前置藏品时生效", () => {
    const result = evaluateBuffActivation(
      "char_attribute_mul",
      [
        { key: "reliance_relics", value: 0, valueStr: "rogue_4_relic_book_3" },
        { key: "atk", value: 0.2, valueStr: null },
      ],
      { selectedRelicIds: ["rogue_4_relic_hand", "rogue_4_relic_book_3"] },
    );
    expect(result.active).toBe(true);
  });

  it("敌人 ID 不匹配 selector.enemy 时不生效", () => {
    const result = evaluateBuffActivation(
      "enemy_attribute_mul",
      [
        { key: "selector.enemy", value: 0, valueStr: "enemy_1002_nsabr|enemy_1003_nmdyh" },
        { key: "max_hp", value: -0.15, valueStr: null },
      ],
      { enemy: { id: "enemy_9999_other" } },
    );
    expect(result.active).toBe(false);
  });

  it("敌人 ID 命中 selector.enemy 时生效", () => {
    const result = evaluateBuffActivation(
      "enemy_attribute_mul",
      [
        { key: "selector.enemy", value: 0, valueStr: "enemy_1002_nsabr|enemy_1003_nmdyh" },
        { key: "max_hp", value: -0.15, valueStr: null },
      ],
      { enemy: { id: "enemy_1002_nsabr" } },
    );
    expect(result.active).toBe(true);
  });

  it("敌人等级类型不匹配时不生效", () => {
    const result = evaluateBuffActivation(
      "enemy_attribute_mul",
      [
        { key: "selector.enemy_level_type", value: 0, valueStr: "BOSS" },
        { key: "def", value: -0.2, valueStr: null },
      ],
      { enemy: { id: "enemy_1", levelType: "ELITE" } },
    );
    expect(result.active).toBe(false);
  });

  it("将前端职业 GUARD 归一为黑板职业 warrior", () => {
    // CalcCenter 直接传 charData.profession 时不应要求调用方手动翻译职业枚举。
    const result = evaluateBuffActivation(
      "char_attribute_mul",
      [
        { key: "selector.profession", value: 0, valueStr: "warrior|sniper" },
        { key: "atk", value: 0.2, valueStr: null },
      ],
      { character: { profession: "GUARD" } },
    );
    expect(result.active).toBe(true);
  });

  it("敌人命中 selector.enemy_exclude 时不生效", () => {
    // 排除列表来自图谱中的镜中境、不赦等藏品，按竖线分隔 ID 精确匹配。
    const result = evaluateBuffActivation(
      "global_buff_normal",
      [
        {
          key: "selector.enemy_exclude",
          value: 0,
          valueStr: "enemy_2131_dyfire|enemy_2130_dyswrd",
        },
        { key: "def", value: -0.2, valueStr: null },
      ],
      { enemy: { id: "enemy_2131_dyfire" } },
    );
    expect(result.active).toBe(false);
  });
});
describe("applyRelicBuffsToFormulaContext + activation", () => {
  it("前置藏品未选中时贡献写入但 active=false，不改变攻击速度区", () => {
    const context = new FormulaContext();
    const contributions = applyRelicBuffsToFormulaContext(context, {
      // 整批只含手部藏品，因此 reliance_relics 会自动判定缺失。
      relics: [{
        id: "rogue_4_relic_hand_3",
        name: "波纹之手",
        buffs: [
          {
            key: "global_buff_normal",
            blackboard: [
              { key: "reliance_relics", value: 0, valueStr: "rogue_4_relic_book_3" },
              { key: "key", value: 0, valueStr: "rogue_4_caster_hand[pair]" },
              { key: "attack_speed", value: 20, valueStr: null },
              { key: "selector.sub_profession", value: 0, valueStr: "splashcaster|chain|funnel" },
            ],
          },
        ],
      }],
      topicId: "rogue_4",
      activation: { character: { profession: "CASTER", subProfessionId: "splashcaster" } },
    });
    expect(contributions[0]?.active).toBe(false);
    expect(context.evaluateZone("ATTACK_SPEED").value).toBe(1);
  });

  it("同批藏品包含前置藏品时自动生效", () => {
    const context = new FormulaContext();
    applyRelicBuffsToFormulaContext(context, {
      // 前置藏品即使没有进入伤害公式的 buff，也会参与依赖集合计算。
      relics: [
        {
          id: "rogue_4_relic_hand_3",
          name: "波纹之手",
          buffs: [
            {
              key: "global_buff_normal",
              blackboard: [
                { key: "reliance_relics", value: 0, valueStr: "rogue_4_relic_book_3" },
                { key: "key", value: 0, valueStr: "rogue_4_caster_hand[pair]" },
                { key: "attack_speed", value: 20, valueStr: null },
                { key: "selector.sub_profession", value: 0, valueStr: "splashcaster|chain|funnel" },
              ],
            },
          ],
        },
        { id: "rogue_4_relic_book_3", name: "叙拉古人的愤怒", buffs: [] },
      ],
      topicId: "rogue_4",
      activation: { character: { profession: "CASTER", subProfessionId: "splashcaster" } },
    });
    expect(context.evaluateZone("ATTACK_SPEED").value).toBe(1.2);
  });

  it("批量应用时对每件藏品使用同一份干员生效上下文", () => {
    const context = new FormulaContext();
    const contributions = applyRelicBuffsToFormulaContext(context, {
      // GUARD 会命中 warrior 藏品，而 caster 藏品保留为 inactive 贡献。
      relics: [
        {
          id: "warrior-relic",
          name: "近卫藏品",
          buffs: [{
            key: "char_attribute_mul",
            blackboard: [
              { key: "selector.profession", value: 0, valueStr: "warrior" },
              { key: "atk", value: 0.2, valueStr: null },
            ],
          }],
        },
        {
          id: "caster-relic",
          name: "术师藏品",
          buffs: [{
            key: "char_attribute_mul",
            blackboard: [
              { key: "selector.profession", value: 0, valueStr: "caster" },
              { key: "atk", value: 0.5, valueStr: null },
            ],
          }],
        },
      ],
      topicId: "rogue_test",
      activation: { character: { profession: "GUARD" } },
    });
    expect(contributions.map((contribution) => contribution.active)).toEqual([true, false]);
    expect(evaluateDamageFormula("FINAL_ATK", context, { ATK0: 100 })).toBe(120);
  });

  it("批量应用时按敌人等级类型筛选藏品", () => {
    const context = new FormulaContext();
    const contributions = applyRelicBuffsToFormulaContext(context, {
      // 同一敌人上下文会传给整批 buff，BOSS 条件在精英敌人场景下停用。
      relics: [{
        id: "boss-relic",
        name: "领袖藏品",
        buffs: [{
          key: "char_attribute_mul",
          blackboard: [
            { key: "selector.enemy_level_type", value: 0, valueStr: "BOSS" },
            { key: "atk", value: 0.5, valueStr: null },
          ],
        }],
      }],
      topicId: "rogue_test",
      activation: { enemy: { id: "enemy_elite", levelType: "ELITE" } },
    });
    expect(contributions[0]?.active).toBe(false);
    expect(evaluateDamageFormula("FINAL_ATK", context, { ATK0: 100 })).toBe(100);
  });

  it("批量接口为不同藏品生成稳定且互不冲突的贡献 ID", () => {
    const context = new FormulaContext();
    const contributions = applyRelicBuffsToFormulaContext(context, {
      // 两件同类型藏品必须都能写入同一乘区，不能因 buffIndex 相同发生 ID 冲突。
      relics: [
        {
          id: "relic-a",
          name: "藏品 A",
          buffs: [{ key: "char_attribute_mul", blackboard: [{ key: "atk", value: 0.1, valueStr: null }] }],
        },
        {
          id: "relic-b",
          name: "藏品 B",
          buffs: [{ key: "char_attribute_mul", blackboard: [{ key: "atk", value: 0.2, valueStr: null }] }],
        },
      ],
      topicId: "rogue_test",
    });
    expect(new Set(contributions.map((contribution) => contribution.id)).size).toBe(2);
    expect(evaluateDamageFormula("FINAL_ATK", context, { ATK0: 100 })).toBe(130);
  });

  it("路由仍只负责乘区分类，与生效正交", () => {
    const routed = routeRelicBuffToZones({
      effectId: "e",
      source: "relics",
      buffIndex: 0,
      key: "char_attribute_mul",
      blackboard: [{ key: "atk", value: 0.2, valueStr: null }],
      jsonPath: "$.t",
    });
    expect(routed.zoneIds).toContain("OUTER_ATK");
  });
});

/** 为手写包装 fixture 补齐合并后的原始 item 字段。 */
function relicItemFields(id: string, name: string, usage: string) {
  return { id, name, usage, description: null, rarity: "NORMAL", sortId: 0, type: "RELIC" };
}

describe("applyRelicItemsToFormulaContext + 原始包装藏品", () => {
  /** 构造可直接传给新接口的先锋新典训原始包装对象。 */
  function pioneerTrainingRelic(layer: number, enable = true) {
    return {
      id: "rogue_6_relic_assign_1",
      name: "钝爪-新典训",
      pinyin: "dun_zhao_xin_dian_xun",
      relic: {
        ...relicItemFields("rogue_6_relic_assign_1", "钝爪-新典训", "测试效果"),
        buffs: [{
          key: "immediate_reward",
          blackboard: [{
            key: "id",
            value: 0,
            valueStr: "rogue_6_upgrade_ticket_pioneer_from_relic",
          }],
        }],
      },
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
      layer,
      enable,
    };
  }

  it("enable=false 时整件藏品不写入公式", () => {
    const context = new FormulaContext();
    const contributions = applyRelicItemsToFormulaContext(
      context,
      [pioneerTrainingRelic(6, false)],
      {
        topicId: "rogue_6",
        activation: { character: { profession: "PIONEER" } },
      },
    );
    expect(contributions).toEqual([]);
    expect(evaluateDamageFormula("FINAL_ATK", context, { ATK0: 100 })).toBe(100);
  });

  it("新典训按用户层数从 0 层计算，并受原始 max_stack_cnt 限制", () => {
    const zeroContext = new FormulaContext();
    applyRelicItemsToFormulaContext(zeroContext, [pioneerTrainingRelic(0)], {
      topicId: "rogue_6",
      activation: { character: { profession: "PIONEER" } },
    });
    expect(evaluateDamageFormula("FINAL_ATK", zeroContext, { ATK0: 100 })).toBe(100);

    const stackedContext = new FormulaContext();
    applyRelicItemsToFormulaContext(stackedContext, [pioneerTrainingRelic(9)], {
      topicId: "rogue_6",
      activation: { character: { profession: "PIONEER" } },
    });
    expect(evaluateDamageFormula("FINAL_ATK", stackedContext, { ATK0: 100 })).toBeCloseTo(160);
  });

  it("默认当前干员受赠，但职业不匹配的新典训不生效", () => {
    const context = new FormulaContext();
    const contributions = applyRelicItemsToFormulaContext(
      context,
      [pioneerTrainingRelic(3)],
      {
        topicId: "rogue_6",
        activation: { character: { profession: "CASTER" } },
      },
    );
    expect(contributions[0]?.active).toBe(false);
    expect(contributions[0]?.reason).toContain("selector.profession=pioneer");
    expect(evaluateDamageFormula("FINAL_ATK", context, { ATK0: 100 })).toBe(100);
  });

  it("固定效果忽略默认 0 层并使用原始直接 buff", () => {
    const context = new FormulaContext();
    const contributions = applyRelicItemsToFormulaContext(context, [{
      id: "fixed-relic",
      name: "固定攻击藏品",
      pinyin: "gu_ding_gong_ji_cang_pin",
      relic: {
        ...relicItemFields("fixed-relic", "固定攻击藏品", "攻击力提升"),
        buffs: [{
          key: "char_attribute_mul",
          blackboard: [{ key: "atk", value: 0.25, valueStr: null }],
        }],
      },
      charBuffs: [],
      layer: 0,
      enable: true,
    }], { topicId: "rogue_test" });
    expect(contributions.map((entry) => entry.zoneId)).toEqual(["OUTER_ATK"]);
    expect(evaluateDamageFormula("FINAL_ATK", context, { ATK0: 100 })).toBe(125);
  });

  it("一件藏品的多条 charBuffData 都会现场路由", () => {
    const context = new FormulaContext();
    const contributions = applyRelicItemsToFormulaContext(context, [{
      id: "multi-char-buff",
      name: "多重受赠效果",
      pinyin: "duo_chong_shou_zeng_xiao_guo",
      relic: { ...relicItemFields("multi-char-buff", "多重受赠效果", "多条角色效果"), buffs: [] },
      charBuffs: [
        {
          id: "char-a",
          relatedItemId: "multi-char-buff",
          iconId: "multi-char-buff",
          buffs: [{
            key: "char_attribute_mul",
            blackboard: [{ key: "atk", value: 0.2, valueStr: null }],
          }],
        },
        {
          id: "char-b",
          relatedItemId: "multi-char-buff",
          iconId: "multi-char-buff",
          buffs: [{
            key: "char_attribute_add",
            blackboard: [{ key: "attack_speed", value: 30, valueStr: null }],
          }],
        },
      ],
      layer: 0,
      enable: true,
    }], { topicId: "rogue_test" });
    expect(contributions.map((entry) => entry.zoneId)).toEqual(["OUTER_ATK", "ATTACK_SPEED"]);
  });

  it("关闭的前置藏品不能满足 reliance_relics", () => {
    const context = new FormulaContext();
    const contributions = applyRelicItemsToFormulaContext(context, [
      {
        id: "dependent",
        name: "依赖藏品",
        pinyin: "yi_lai_cang_pin",
        relic: {
          ...relicItemFields("dependent", "依赖藏品", "依赖前置藏品"),
          buffs: [{
            key: "char_attribute_mul",
            blackboard: [
              { key: "reliance_relics", value: 0, valueStr: "required" },
              { key: "atk", value: 0.2, valueStr: null },
            ],
          }],
        },
        charBuffs: [],
        layer: 0,
        enable: true,
      },
      {
        id: "required",
        name: "关闭的前置藏品",
        pinyin: "guan_bi_de_qian_zhi_cang_pin",
        relic: { ...relicItemFields("required", "关闭的前置藏品", "前置藏品"), buffs: [] },
        charBuffs: [],
        layer: 0,
        enable: false,
      },
    ], { topicId: "rogue_test" });
    expect(contributions[0]?.active).toBe(false);
    expect(evaluateDamageFormula("FINAL_ATK", context, { ATK0: 100 })).toBe(100);
  });
});

describe("藏品战斗模板公式程序分派", () => {
  it("将费用、阻挡、技力、闪避和敌人局外减伤路由到独立乘区", () => {
    const cases = [
      {
        key: "char_attribute_add",
        blackboard: [
          { key: "cost", value: -3, valueStr: null },
          { key: "block_cnt", value: 1, valueStr: null },
        ],
        expected: ["DEPLOY_COST_ADD", "BLOCK_COUNT_ADD"],
      },
      {
        key: "global_buff_stack",
        blackboard: [
          { key: "key", value: 0, valueStr: "modify_sp[born]" },
          { key: "sp", value: 12, valueStr: null },
        ],
        expected: ["INITIAL_SP_ADD"],
      },
      {
        key: "global_buff_normal",
        blackboard: [
          { key: "key", value: 0, valueStr: "modify_sp_recover[normal]" },
          { key: "sp_recovery_per_sec", value: 0.35, valueStr: null },
        ],
        expected: ["SP_RECOVERY_PER_SECOND_ADD"],
      },
      {
        key: "char_skill_cost_mul",
        blackboard: [{ key: "scale", value: 0.65, valueStr: null }],
        expected: ["SP_COST_MULTIPLIER"],
      },
      {
        key: "global_buff_normal",
        blackboard: [
          { key: "key", value: 0, valueStr: "evade[non_pure]" },
          { key: "prob", value: 0.1, valueStr: null },
        ],
        expected: ["PHYSICAL_EVASION", "MAGICAL_EVASION"],
      },
      {
        key: "global_buff_normal",
        blackboard: [
          { key: "key", value: 0, valueStr: "enemy_damage_resistance[inf]" },
          { key: "damage_resistance", value: 0.2, valueStr: null },
        ],
        expected: ["OUTER_ENEMY_DAMAGE_RESISTANCE"],
      },
      {
        key: "global_buff_normal",
        blackboard: [
          { key: "key", value: 0, valueStr: "damage_resistance[filter_tag]" },
          { key: "damage_resistance", value: 0.5, valueStr: null },
        ],
        expected: ["CHAR_DAMAGE_RESISTANCE"],
      },
      {
        key: "global_buff_normal",
        blackboard: [
          { key: "key", value: 0, valueStr: "rogue_6_enemy_blocked_damage_scale" },
          { key: "damage_resistance", value: 0.3, valueStr: null },
        ],
        expected: ["ENEMY_OUTGOING_DAMAGE_REDUCTION"],
      },
      {
        key: "global_buff_normal",
        blackboard: [
          { key: "key", value: 0, valueStr: "element_resistance" },
          { key: "ep_damage_resistance", value: 0.3, valueStr: null },
        ],
        expected: ["CHAR_EP_DAMAGE_RESISTANCE"],
      },
    ] as const;

    cases.forEach((fixture, index) => {
      const context = new FormulaContext();
      const routed = routeRelicBuffToZones({
        effectId: `new-zone-${index}`,
        source: "relics",
        buffIndex: index,
        key: fixture.key,
        blackboard: [...fixture.blackboard],
        jsonPath: `$.new-zone[${index}]`,
      });
      applyClassifiedEffectToFormulaContext(
        context,
        { id: `new-zone-relic-${index}`, name: "新增公式藏品" },
        routed.effect,
      );
      expect(routed.zoneIds).toEqual(expect.arrayContaining([...fixture.expected]));
      expect(fixture.expected.every((zoneId) => context.getContributions(zoneId).length > 0)).toBe(true);
    });
  });

  it("区分敌人绝对属性倍率与战斗内减防", () => {
    const enemyDefense = routeRelicBuffToZones({
      effectId: "enemy-def-absolute",
      source: "relics",
      buffIndex: 0,
      key: "global_buff_normal",
      blackboard: [
        { key: "key", value: 0, valueStr: "enemy_def_down" },
        { key: "def", value: 1.35, valueStr: null },
      ],
      jsonPath: "$.enemy-def-absolute",
    });
    const enemyHp = routeRelicBuffToZones({
      effectId: "enemy-hp-absolute",
      source: "relics",
      buffIndex: 0,
      key: "global_buff_normal",
      blackboard: [
        { key: "key", value: 0, valueStr: "enemy_max_hp_down" },
        { key: "max_hp", value: 1.35, valueStr: null },
      ],
      jsonPath: "$.enemy-hp-absolute",
    });
    const context = new FormulaContext();
    const defWrites = applyClassifiedEffectToFormulaContext(
      context,
      { id: "enemy-def", name: "敌人防御提升" },
      enemyDefense.effect,
    );
    const hpWrites = applyClassifiedEffectToFormulaContext(
      context,
      { id: "enemy-hp", name: "敌人生命提升" },
      enemyHp.effect,
    );

    expect(defWrites.map((entry) => entry.zoneId)).toEqual(["OUTER_ENEMY_DEF"]);
    expect(defWrites[0]?.value).toBeCloseTo(0.35);
    expect(hpWrites.map((entry) => entry.zoneId)).toEqual(["ENEMY_HP_RELIC"]);
    expect(hpWrites[0]?.value).toBeCloseTo(0.35);
  });

  it("古堡的子嗣按点数直加计算防御与法抗", () => {
    const context = new FormulaContext();
    const contributions = applyRelicItemsToFormulaContext(context, [{
      id: "rogue_6_relic_legacy_63",
      name: "古堡的子嗣",
      pinyin: "gu_bao_de_zi_si",
      relic: {
        ...relicItemFields("rogue_6_relic_legacy_63", "古堡的子嗣", "测试防御与法抗效果"),
        buffs: [{
          key: "global_buff_normal",
          blackboard: [
            { key: "key", value: 0, valueStr: "attr_up_on_trigger[def&mag_resist]" },
            { key: "interval", value: 80, valueStr: null },
            { key: "def", value: 400, valueStr: null },
            { key: "magic_resistance", value: 30, valueStr: null },
          ],
        }],
      },
      charBuffs: [],
      layer: 0,
      enable: true,
    }], { topicId: "rogue_6" });
    expect(contributions.map((entry) => entry.zoneId)).toEqual(["FLAT_CHAR_DEF", "FLAT_CHAR_RES"]);
    expect(evaluateDamageFormula("FINAL_CHAR_DEF", context, { CHAR_DEF0: 100 })).toBe(500);
    expect(evaluateDamageFormula("FINAL_CHAR_RES", context, { CHAR_RES0: 10 })).toBe(40);
  });

  it("现场 classify 的 mechanic.name 会透传给精确模板程序", () => {
    const context = new FormulaContext();
    const routed = routeRelicBuffToZones({
      effectId: "caster-template-effect",
      source: "charBuffData:test",
      buffIndex: 0,
      key: "char_ability_new",
      blackboard: [
        { key: "key", value: 0, valueStr: "rogue_6_caster_attack" },
        { key: "magic_resistance", value: -5, valueStr: null },
      ],
      jsonPath: "$.caster",
    });
    // 空 mechanicIndex 无法给出 Action 预测，但模板名仍足以选择已核实的独立程序。
    expect(routed.predictions).toEqual([]);
    const contributions = applyClassifiedEffectToFormulaContext(
      context,
      { id: "caster-relic", name: "术师模板藏品" },
      routed.effect,
      { layer: 2 },
    );
    expect(contributions.map((entry) => entry.zoneId)).toEqual(["RES_FLAT"]);
    expect(context.evaluateZone("RES_FLAT").value).toBe(10);
  });

  it("未支持的规则不再按乘区名猜测黑板参数", () => {
    const context = new FormulaContext();
    const routed = routeRelicBuffToZones({
      effectId: "unknown-effect",
      source: "relics",
      buffIndex: 0,
      key: "unknown_buff",
      blackboard: [{ key: "outer_atk", value: 0.5, valueStr: null }],
      jsonPath: "$.unknown",
    });
    const contributions = applyClassifiedEffectToFormulaContext(
      context,
      { id: "unknown-relic", name: "未知藏品" },
      routed.effect,
    );
    expect(contributions).toEqual([]);
    expect(evaluateDamageFormula("FINAL_ATK", context, { ATK0: 100 })).toBe(100);
  });
});
