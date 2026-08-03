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

describe("属性战斗引擎语义规则", () => {
  it("所有规则只引用 FormulaBook 当前支持的属性可写 zone", () => {
    const allowed = new Set([
      FormulaZoneId.char_out_atk_add,
      FormulaZoneId.char_out_atk_mul,
      FormulaZoneId.char_in_atk_mul,
      FormulaZoneId.char_direct_attack_speed_add,
      FormulaZoneId.char_out_def_add,
      FormulaZoneId.char_out_def_mul,
      FormulaZoneId.char_in_def_add,
      FormulaZoneId.char_in_def_mul,
      FormulaZoneId.char_out_max_hp_add,
      FormulaZoneId.char_out_max_hp_mul,
      FormulaZoneId.char_in_max_hp_add,
      FormulaZoneId.char_in_max_hp_mul,
      FormulaZoneId.enemy_direct_max_hp_mul,
      FormulaZoneId.enemy_final_max_hp_mul,
      FormulaZoneId.enemy_direct_def_mul,
      FormulaZoneId.enemy_final_def_mul,
      FormulaZoneId.enemy_direct_magic_resist_mul,
      FormulaZoneId.enemy_final_magic_resist_mul,
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

    expect(flat[0]?.zoneId).toBe(FormulaZoneId.char_out_atk_add);
    expect(staticMultiplier[0]?.zoneId).toBe(FormulaZoneId.char_out_atk_mul);
    expect(runtimeMultiplier[0]?.zoneId).toBe(FormulaZoneId.char_in_atk_mul);
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
        zoneId: FormulaZoneId.char_in_atk_mul,
        status: "verified",
      }),
    ]);
    expect(predictions[0]?.evidencePath).toContain('$["rogue_6_pioneer_skill"]');
    expect(predictions[0]?.evidencePath).not.toContain("docs/game");
  });

  it("区分我方局外、我方局内与敌方最大生命乘区", () => {
    const staticMaxHp = predictEngineZones(facts(
      "char_attribute_mul",
      new Map([["max_hp", 0.2]]),
    ));
    const runtimeMaxHp = predictEngineZones(facts(
      "char_ability_new",
      new Map<string, number | string | null>([["max_hp", 0.4], ["key", "max_hp_up_by_build_cnt"]]),
      "max_hp_up_by_build_cnt",
    ));
    const enemyDirect = predictEngineZones(facts(
      "global_buff_normal",
      new Map<string, number | string | null>([["max_hp", -0.2], ["key", "enemy_max_hp_down"]]),
      "enemy_max_hp_down",
    ));
    const enemyFinal = predictEngineZones(facts(
      "global_buff_layer",
      new Map<string, number | string | null>([["max_hp", 0.5], ["key", "rogue_6_start_3"]]),
      "rogue_6_start_3",
    ));

    expect(staticMaxHp[0]?.zoneId).toBe(FormulaZoneId.char_out_max_hp_mul);
    expect(runtimeMaxHp[0]?.zoneId).toBe(FormulaZoneId.char_in_max_hp_mul);
    expect(enemyDirect[0]?.zoneId).toBe(FormulaZoneId.enemy_direct_max_hp_mul);
    expect(enemyFinal[0]?.zoneId).toBe(FormulaZoneId.enemy_final_max_hp_mul);
  });

  it("使用 FINAL_SCALER Action 验证敌方最终最大生命乘区", () => {
    const actions = extractMechanicActionFacts({
      eventToActions: {
        ON_BUFF_START: [{
          $type: "Torappu.Battle.Action.Nodes+CreateBuff, Assembly-CSharp",
          _buff: {
            attributes: {
              attributeModifiers: [{
                attributeType: "MAX_HP",
                formulaItem: "FINAL_SCALER",
              }],
            },
          },
          _buffOwner: "BUFF_OWNER",
        }],
      },
    }, '$["rogue_6_start_3"]');
    const predictions = predictEngineZones({
      ...facts(
        "global_buff_layer",
        new Map<string, number | string | null>([["max_hp", 0.5], ["key", "rogue_6_start_3"]]),
        "rogue_6_start_3",
      ),
      actions,
    });

    expect(predictions).toEqual([
      expect.objectContaining({
        ruleId: "enemy-final-max-hp-scaler-action",
        zoneId: FormulaZoneId.enemy_final_max_hp_mul,
        status: "verified",
      }),
    ]);
    expect(predictions[0]?.evidencePath).toContain('$["rogue_6_start_3"]');
  });

  it("区分局外防御倍率、局内防御倍率与局内防御点数", () => {
    const staticDefense = predictEngineZones(facts(
      "char_attribute_mul",
      new Map([["def", 0.2]]),
    ));
    const runtimeDefense = predictEngineZones({
      ...facts(
        "global_buff_normal",
        new Map<string, number | string | null>([["def", 0.4], ["key", "rogue_6_land_aura"]]),
        "rogue_6_land_aura",
      ),
      actions: extractMechanicActionFacts({
        eventToActions: {
          ON_BUFF_START: [{
            $type: "Torappu.Battle.Action.Nodes+CreateBuff, Assembly-CSharp",
            _buff: { attributes: { attributeModifiers: [{ attributeType: "DEF", formulaItem: "MULTIPLIER" }] } },
            _buffOwner: "BUFF_OWNER",
          }],
        },
      }, '$["rogue_6_land_aura"]'),
    });
    const runtimeFlatDefense = predictEngineZones({
      ...facts(
        "global_buff_normal",
        new Map<string, number | string | null>([["def", 400], ["key", "attr_up_on_trigger[def&mag_resist]"]]),
        "attr_up_on_trigger[def&mag_resist]",
      ),
      actions: extractMechanicActionFacts({
        eventToActions: {
          ON_BUFF_TRIGGER: [{
            $type: "Torappu.Battle.Action.Nodes+CreateBuff, Assembly-CSharp",
            _buff: { attributes: { attributeModifiers: [{ attributeType: "DEF", formulaItem: "ADDITION" }] } },
            _buffOwner: "BUFF_OWNER",
          }],
        },
      }, '$["attr_up_on_trigger[def&mag_resist]"]'),
    });

    expect(staticDefense[0]?.zoneId).toBe(FormulaZoneId.char_out_def_mul);
    expect(runtimeDefense[0]).toEqual(expect.objectContaining({
      ruleId: "def-runtime-multiplier-action",
      zoneId: FormulaZoneId.char_in_def_mul,
      status: "verified",
    }));
    expect(runtimeFlatDefense[0]).toEqual(expect.objectContaining({
      ruleId: "def-runtime-flat-addition-action",
      zoneId: FormulaZoneId.char_in_def_add,
      status: "verified",
    }));
    const runtimeFlatFallback = predictEngineZones(facts(
      "global_buff_normal",
      new Map<string, number | string | null>([["def", 400], ["key", "attr_up_on_trigger[def&mag_resist]"]]),
      "attr_up_on_trigger[def&mag_resist]",
    ));
    expect(runtimeFlatFallback[0]).toEqual(expect.objectContaining({
      ruleId: "def-runtime-flat-addition-fallback",
      zoneId: FormulaZoneId.char_in_def_add,
      status: "inferred",
    }));
  });

  it("把敌方和辅助减防效果路由到敌方防御力公式", () => {
    expect(predictEngineZones(facts(
      "global_buff_normal",
      new Map<string, number | string | null>([["def", -0.2], ["key", "enemy_def_down"]]),
      "enemy_def_down",
    ))[0]).toEqual(expect.objectContaining({
      ruleId: "enemy-direct-def-multiplier",
      zoneId: FormulaZoneId.enemy_direct_def_mul,
    }));
    expect(predictEngineZones(facts(
      "char_ability_new",
      new Map<string, number | string | null>([["def", -0.4], ["key", "defdown[support]"]]),
      "defdown[support]",
    ))[0]).toEqual(expect.objectContaining({
      ruleId: "enemy-direct-def-multiplier",
      zoneId: FormulaZoneId.enemy_direct_def_mul,
    }));
  });

  it("把法抗降低效果路由到敌方直接法抗乘区", () => {
    expect(predictEngineZones(facts(
      "char_ability_new",
      new Map<string, number | string | null>([["magic_resistance", -5], ["key", "rogue_6_caster_attack"]]),
      "rogue_6_caster_attack",
    ))[0]).toEqual(expect.objectContaining({
      ruleId: "enemy-direct-magic-resist-multiplier",
      zoneId: FormulaZoneId.enemy_direct_magic_resist_mul,
    }));
    expect(predictEngineZones(facts(
      "char_ability_new",
      new Map<string, number | string | null>([["magic_resistance", -0.4], ["key", "defdown[support]"]]),
      "defdown[support]",
    ))[0]).toEqual(expect.objectContaining({
      ruleId: "enemy-direct-magic-resist-multiplier",
      zoneId: FormulaZoneId.enemy_direct_magic_resist_mul,
    }));
  });

  it("不为尚未支持的敌方攻击力效果产生预测", () => {
    expect(predictEngineZones(facts(
      "global_buff_normal",
      new Map<string, number | string | null>([["atk", -0.2], ["key", "enemy_atk_down"]]),
      "enemy_atk_down",
    ))).toEqual([]);
  });

  it("把仅增加攻击速度且 atk 为零的复合 buff 只路由到攻速乘区", () => {
    const predictions = predictEngineZones(facts(
      "global_buff_normal",
      new Map<string, number | string | null>([
        ["attack_speed", 40],
        ["atk", 0],
      ]),
      "rogue_2_attr_up[limited]",
    ));

    expect(predictions).toEqual([
      expect.objectContaining({
        ruleId: "attack-speed-conditional-addition",
        zoneId: FormulaZoneId.char_direct_attack_speed_add,
      }),
    ]);
  });

  it("查询字段元数据只声明语义无歧义的生产字段", () => {
    expect(ENGINE_FIELD_PATHS).toEqual(["item.effect.attack_bonus"]);
  });
});
