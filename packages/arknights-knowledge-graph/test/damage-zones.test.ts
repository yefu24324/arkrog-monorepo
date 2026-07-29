import { describe, expect, it } from "vitest";

import {
  ENGINE_FIELD_PATHS,
  ENGINE_SEMANTIC_RULES,
  extractMechanicActionFacts,
  predictEngineZones,
} from "../src/lib/domain/engine-rules.js";
import { FormulaZoneId } from "../src/lib/formula/formula-book.js";

/** 构造不依赖战斗模板的规则事实。 */
function facts(
  effectKey: string,
  parameters: ReadonlyMap<string, number | string | null>,
  mechanicName = "",
) {
  return {
    effectKey,
    parameters,
    mechanicName,
    actions: [],
    sourceKind: "relics",
    jsonPath: "$.fixture",
  };
}

describe("攻击力战斗引擎语义规则", () => {
  it("所有规则只引用 FormulaBook 的攻击力可写 zone", () => {
    const allowed = new Set([
      FormulaZoneId.operator_out_atk_add,
      FormulaZoneId.operator_out_atk_mul,
      FormulaZoneId.operator_in_atk_mul,
    ]);

    expect(ENGINE_SEMANTIC_RULES.length).toBeGreaterThan(0);
    expect(ENGINE_SEMANTIC_RULES.every((rule) => allowed.has(rule.zoneId))).toBe(true);
  });

  it("区分局外点数、局外倍率和局内倍率", () => {
    const flat = predictEngineZones(facts(
      "char_attribute_add",
      new Map([["atk", 30]]),
    ));
    const staticMultiplier = predictEngineZones(facts(
      "char_attribute_mul",
      new Map([["atk", 0.2]]),
    ));
    const runtimeMultiplier = predictEngineZones(facts(
      "char_ability_new",
      new Map<string, number | string | null>([["atk", 0.1], ["key", "rogue_6_pioneer_skill"]]),
      "rogue_6_pioneer_skill",
    ));

    expect(flat[0]?.zoneId).toBe(FormulaZoneId.operator_out_atk_add);
    expect(staticMultiplier[0]?.zoneId).toBe(FormulaZoneId.operator_out_atk_mul);
    expect(runtimeMultiplier[0]?.zoneId).toBe(FormulaZoneId.operator_in_atk_mul);
  });

  it("使用战斗模板 Action 将局内攻击力证据提升为 verified", () => {
    const actions = extractMechanicActionFacts({
      eventToActions: {
        ON_SKILL_START: [{
          $type: "Torappu.Battle.Action.Nodes+CreateBuff, Assembly-CSharp",
          _buff: {
            attributes: {
              attributeModifiers: [{
                attributeType: "ATK",
                formulaItem: "MULTIPLIER",
              }],
            },
          },
          _buffOwner: "BUFF_OWNER",
        }],
      },
    }, '$["rogue_6_pioneer_skill"]');
    const predictions = predictEngineZones({
      ...facts(
        "char_ability_new",
        new Map([["atk", 0.1]]),
        "rogue_6_pioneer_skill",
      ),
      actions,
    });

    expect(predictions).toEqual([
      expect.objectContaining({
        ruleId: "atk-runtime-multiplier-action",
        zoneId: FormulaZoneId.operator_in_atk_mul,
        status: "verified",
      }),
    ]);
    expect(predictions[0]?.evidencePath).toContain('$["rogue_6_pioneer_skill"]');
    expect(predictions[0]?.evidencePath).not.toContain("docs/game");
  });

  it("不再为生命、防御或敌方攻击力效果产生预测", () => {
    expect(predictEngineZones(facts(
      "char_attribute_mul",
      new Map([["max_hp", 0.2], ["def", 0.2]]),
    ))).toEqual([]);
    expect(predictEngineZones(facts(
      "global_buff_normal",
      new Map<string, number | string | null>([["atk", -0.2], ["key", "enemy_atk_down"]]),
      "enemy_atk_down",
    ))).toEqual([]);
  });

  it("不把仅增加攻击速度且 atk 为零的复合 buff 路由到攻击力乘区", () => {
    const predictions = predictEngineZones(facts(
      "global_buff_normal",
      new Map<string, number | string | null>([
        ["attack_speed", 40],
        ["atk", 0],
      ]),
      "rogue_2_attr_up[limited]",
    ));

    expect(predictions).toEqual([]);
  });

  it("查询字段元数据仍来自生产攻击力规则", () => {
    expect(ENGINE_FIELD_PATHS).toEqual(["item.effect.attack_bonus"]);
  });
});
