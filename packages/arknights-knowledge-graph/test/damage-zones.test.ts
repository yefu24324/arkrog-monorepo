import { describe, expect, it } from "vitest";

import {
  extractMechanicActionFacts,
  predictEngineZones,
  predictEngineZonesWithRules,
  type EngineEffectFacts,
  type EngineSemanticRule,
} from "../src/lib/domain/engine-rules.js";
import { FormulaZoneId } from "../src/lib/formula/formula-book.js";

/** 构造通用规则执行器使用的效果事实。 */
function facts(overrides: Partial<EngineEffectFacts> = {}): EngineEffectFacts {
  return {
    objectId: "rogue_6_relic_fixture",
    objectType: "relic",
    effectKey: "global_buff_normal",
    parameters: new Map<string, number | string | null>([["atk", 0.2]]),
    mechanicName: "fixture_buff",
    actions: [],
    sourceKind: "relics",
    jsonPath: "$.fixture",
    ...overrides,
  };
}

/** 构造不包含具体游戏知识的测试规则。 */
function rule(overrides: Partial<EngineSemanticRule> = {}): EngineSemanticRule {
  return {
    id: "fixture-rule",
    version: 1,
    name: "测试规则",
    description: "只验证声明式规则执行器。",
    zoneId: FormulaZoneId.char_out_atk_mul,
    status: "inferred",
    confidence: 0.8,
    all: [{ kind: "parameterNonZero", keys: ["atk"] }],
    evidencePaths: ["packages/fixture.md#rule"],
    ...overrides,
  };
}

describe("通用图谱声明式规则执行器", () => {
  it("未显式提供本地规则时不输出具体乘区知识", () => {
    expect(predictEngineZones(facts())).toEqual([]);
  });

  it("支持按对象 ID、类型、参数和 FormulaBook 乘区匹配", () => {
    const predictions = predictEngineZonesWithRules([
      rule({
        all: [
          { kind: "objectIdIn", values: ["rogue_6_relic_fixture"] },
          { kind: "objectTypeIn", values: ["relic"] },
          { kind: "parameterNonZero", keys: ["atk"] },
        ],
      }),
    ], facts());

    expect(predictions).toEqual([
      expect.objectContaining({
        ruleId: "fixture-rule",
        zoneId: FormulaZoneId.char_out_atk_mul,
        status: "inferred",
      }),
    ]);
    expect(predictions[0]?.evidencePath).toContain("packages/fixture.md#rule");
  });

  it("提取 Action 事实并由 actionMatches 条件使用", () => {
    const actions = extractMechanicActionFacts({
      eventToActions: {
        ON_SKILL_START: [{
          $type: "Torappu.Battle.Action.Nodes+CreateBuff, Assembly-CSharp",
          _buff: {
            attributes: {
              attributeModifiers: [{ attributeType: "ATK", formulaItem: "MULTIPLIER" }],
            },
          },
          _buffOwner: "BUFF_OWNER",
        }],
      },
    }, '$["fixture_buff"]');
    const predictions = predictEngineZonesWithRules([
      rule({
        status: "verified",
        confidence: 1,
        all: [{
          kind: "actionMatches",
          componentType: "CreateBuff",
          attributeType: "ATK",
          formulaItem: "MULTIPLIER",
          target: "BUFF_OWNER",
        }],
      }),
    ], facts({ actions }));

    expect(predictions[0]).toEqual(expect.objectContaining({ status: "verified" }));
    expect(predictions[0]?.evidencePath).toContain("eventToActions.ON_SKILL_START[0]");
  });

  it("同一乘区命中多条规则时优先保留人类确认结论", () => {
    const predictions = predictEngineZonesWithRules([
      rule({ id: "gamedata-rule", authority: "gamedata", status: "inferred", confidence: 1 }),
      rule({ id: "human-rule", authority: "human", status: "human_verified", confidence: 0.5 }),
    ], facts());

    expect(predictions).toEqual([
      expect.objectContaining({ ruleId: "human-rule", status: "human_verified" }),
    ]);
  });

  it("同证据状态下 FormulaBook 规则优先于 GameData 推断", () => {
    const predictions = predictEngineZonesWithRules([
      rule({ id: "gamedata-rule", authority: "gamedata", status: "inferred", confidence: 1 }),
      rule({ id: "formula-rule", authority: "formula", status: "inferred", confidence: 0.1 }),
    ], facts());

    expect(predictions[0]?.ruleId).toBe("formula-rule");
  });
});
