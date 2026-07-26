import { describe, expect, it } from "vitest";

import {
  FormulaContext,
  applyRelicBuffsToFormulaContext,
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
