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

describe("applyRelicItemsToFormulaContext + charBuffData 当前受赠者", () => {
  /** 构造“先锋新典训”的最小 graph 导出结构。 */
  function pioneerTrainingRelic() {
    return {
      id: "rogue_6_relic_assign_1",
      name: "钝爪-新典训",
      effects: [
        {
          effectId: "reward",
          source: "relics",
          key: "immediate_reward",
          blackboard: [
            {
              key: "id",
              value: 0,
              valueStr: "rogue_6_upgrade_ticket_pioneer_from_relic",
            },
          ],
          jsonPath: "$.reward",
          predictions: [],
        },
        {
          effectId: "character-buff",
          source: "charBuffData:rogue_6_from_relic_1",
          key: "char_ability_new",
          mechanicName: "rogue_6_pioneer_skill",
          blackboard: [
            { key: "key", value: 0, valueStr: "rogue_6_pioneer_skill" },
            { key: "max_stack_cnt", value: 6, valueStr: null },
            { key: "atk", value: 0.1, valueStr: null },
          ],
          jsonPath: "$.charBuffData",
          predictions: [
            {
              id: "INNER_ATK",
              ruleId: "atk-runtime-multiplier",
              reason: "测试局内攻击力贡献",
            },
          ],
        },
      ],
    };
  }

  it("默认当前干员受赠，但职业不匹配的新典训不生效", () => {
    const context = new FormulaContext();
    const relic = pioneerTrainingRelic();
    const contributions = applyRelicItemsToFormulaContext(context, [relic], {
      activation: { character: { profession: "CASTER" } },
    });
    expect(contributions[0]?.active).toBe(false);
    expect(contributions[0]?.reason).toContain("selector.profession=pioneer");
    expect(evaluateDamageFormula("FINAL_ATK", context, { ATK0: 100 })).toBe(100);
  });

  it("默认当前干员受赠，职业匹配时应用新典训 charBuffData", () => {
    const context = new FormulaContext();
    const relic = pioneerTrainingRelic();
    const contributions = applyRelicItemsToFormulaContext(context, [relic], {
      activation: { character: { profession: "PIONEER" } },
    });
    expect(contributions[0]?.active).toBe(true);
    expect(evaluateDamageFormula("FINAL_ATK", context, { ATK0: 100 })).toBeCloseTo(110);
  });

  it("没有职业限制的定向效果默认应用于当前干员", () => {
    const context = new FormulaContext();
    // “下一个招募或进阶”类 charBuffData 没有职业限制，预览直接视为赋给当前干员。
    const relic = {
      id: "rogue_6_relic_assign_12",
      name: "发泡胶",
      effects: [{
        effectId: "character-buff",
        source: "charBuffData:rogue_6_from_relic_12",
        key: "char_attribute_mul",
        blackboard: [{ key: "atk", value: 1.2, valueStr: null }],
        jsonPath: "$.charBuffData",
        predictions: [{
          id: "OUTER_ATK",
          ruleId: "atk-static-multiplier",
          reason: "测试定向攻击力贡献",
        }],
      }],
    };
    const contributions = applyRelicItemsToFormulaContext(context, [relic], {
      activation: { character: { profession: "CASTER" } },
    });
    expect(contributions[0]?.active).toBe(true);
    expect(evaluateDamageFormula("FINAL_ATK", context, { ATK0: 100 })).toBeCloseTo(220);
  });

  it("目标法抗降低只修改敌人，不通过属性回退降低受赠干员法抗", () => {
    const context = new FormulaContext();
    // 断杖-新典训的 magic_resistance 由 MODIFIER_TARGET Action 明确消费为敌方法抗直减。
    const relic = {
      id: "rogue_6_relic_assign_2",
      name: "断杖-新典训",
      effects: [
        {
          effectId: "reward",
          source: "relics",
          key: "immediate_reward",
          blackboard: [{
            key: "id",
            value: 0,
            valueStr: "rogue_6_upgrade_ticket_caster_from_relic",
          }],
          jsonPath: "$.reward",
          predictions: [],
        },
        {
          effectId: "character-buff",
          source: "charBuffData:rogue_6_from_relic_2",
          key: "char_ability_new",
          mechanicName: "rogue_6_caster_attack",
          blackboard: [
            { key: "key", value: 0, valueStr: "rogue_6_caster_attack" },
            { key: "magic_resistance", value: -5, valueStr: null },
          ],
          jsonPath: "$.charBuffData",
          // 故意提供错误的通用预测，证明精确模板程序会独占该效果并覆盖通用规则。
          predictions: [{
            id: "INNER_CHAR_RES",
            ruleId: "char-res-runtime-multiplier",
            reason: "不应执行的自身法抗预测",
          }],
        },
      ],
    };
    const contributions = applyRelicItemsToFormulaContext(context, [relic], {
      activation: { character: { profession: "CASTER" } },
    });
    expect(contributions.map((entry) => entry.zoneId)).toEqual(["RES_FLAT"]);
    expect(evaluateDamageFormula("FINAL_CHAR_RES", context, { CHAR_RES0: 10 })).toBe(10);
    expect(evaluateDamageFormula("EFFECTIVE_RES", context, { RES0: 30 })).toBe(25);
  });
});

describe("藏品战斗模板公式程序分派", () => {
  it("古堡的子嗣按点数直加计算防御与法抗", () => {
    const context = new FormulaContext();
    const contributions = applyRelicItemsToFormulaContext(context, [{
      id: "rogue_6_relic_legacy_63",
      name: "古堡的子嗣",
      effects: [{
        effectId: "legacy-63-effect",
        source: "relics",
        key: "global_buff_normal",
        mechanicName: "attr_up_on_trigger[def&mag_resist]",
        blackboard: [
          { key: "key", value: 0, valueStr: "attr_up_on_trigger[def&mag_resist]" },
          { key: "interval", value: 80, valueStr: null },
          { key: "def", value: 400, valueStr: null },
          { key: "magic_resistance", value: 30, valueStr: null },
        ],
        jsonPath: "$.legacy63",
        // 即使旧图谱预测仍存在，精确模板函数也必须以 Action 的 ADDITION 语义为准。
        predictions: [
          { id: "INNER_CHAR_DEF", ruleId: "char-def-runtime-multiplier", reason: "旧防御倍率预测" },
          { id: "INNER_CHAR_RES", ruleId: "char-res-runtime-multiplier", reason: "旧法抗倍率预测" },
        ],
      }],
    }]);
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
    );
    expect(contributions.map((entry) => entry.zoneId)).toEqual(["RES_FLAT"]);
    expect(context.evaluateZone("RES_FLAT").value).toBe(5);
  });

  it("未注册模板仍可使用明确的通用语义规则", () => {
    const context = new FormulaContext();
    const contributions = applyRelicItemsToFormulaContext(context, [{
      id: "generic-relic",
      name: "通用攻击藏品",
      effects: [{
        effectId: "generic-effect",
        source: "relics",
        key: "char_attribute_mul",
        mechanicName: "unregistered_template",
        blackboard: [{ key: "atk", value: 0.25, valueStr: null }],
        jsonPath: "$.generic",
        predictions: [{
          id: "OUTER_ATK",
          ruleId: "atk-static-multiplier",
          reason: "通用静态攻击规则",
        }],
      }],
    }]);
    expect(contributions.map((entry) => entry.zoneId)).toEqual(["OUTER_ATK"]);
    expect(evaluateDamageFormula("FINAL_ATK", context, { ATK0: 100 })).toBe(125);
  });

  it("未支持的规则不再按乘区名猜测黑板参数", () => {
    const context = new FormulaContext();
    const contributions = applyRelicItemsToFormulaContext(context, [{
      id: "unknown-relic",
      name: "未知藏品",
      effects: [{
        effectId: "unknown-effect",
        source: "relics",
        key: "unknown_buff",
        mechanicName: "unregistered_template",
        // 旧逻辑会把 outer_atk 猜成 OUTER_ATK 的输入；现在没有程序就不写入。
        blackboard: [{ key: "outer_atk", value: 0.5, valueStr: null }],
        jsonPath: "$.unknown",
        predictions: [{
          id: "OUTER_ATK",
          ruleId: "unsupported-rule",
          reason: "未知规则",
        }],
      }],
    }]);
    expect(contributions).toEqual([]);
    expect(evaluateDamageFormula("FINAL_ATK", context, { ATK0: 100 })).toBe(100);
  });

  it("攻击力缩放比例不会直接伪装成追加伤害点数", () => {
    const context = new FormulaContext();
    const contributions = applyRelicItemsToFormulaContext(context, [{
      id: "packet-relic",
      name: "追加伤害藏品",
      effects: [{
        effectId: "packet-effect",
        source: "relics",
        key: "additional_damage",
        blackboard: [{ key: "atk_scale", value: 0.5, valueStr: null }],
        jsonPath: "$.packet",
        predictions: [{
          id: "ADDITIONAL_DAMAGE_PACKET",
          ruleId: "additional-atk-packet",
          reason: "攻击力缩放追加伤害",
        }],
      }],
    }]);
    expect(contributions).toEqual([]);
    expect(context.evaluateZone("ADDITIONAL_DAMAGE_PACKET").value).toBe(0);
  });
});
