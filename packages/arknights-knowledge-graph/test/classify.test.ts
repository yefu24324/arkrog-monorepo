import { describe, expect, it } from "vitest";

import {
  buildMechanicIndex,
  classifyRelicEffect,
} from "../src/lib/classify/index.js";
import type { EngineSemanticRule } from "../src/lib/domain/engine-rules.js";
import { FormulaZoneId } from "../src/lib/formula/formula-book.js";

/** 仅用于验证显式规则注入，不代表仓库内置游戏知识。 */
const TEST_RULE: EngineSemanticRule = {
  id: "fixture-static-atk",
  version: 1,
  name: "测试静态攻击规则",
  description: "测试调用方显式注入规则。",
  zoneId: FormulaZoneId.char_out_atk_mul,
  authority: "gamedata",
  status: "inferred",
  confidence: 0.8,
  all: [
    { kind: "effectKeyIn", values: ["fixture_attribute_mul"] },
    { kind: "parameterNonZero", keys: ["atk"] },
  ],
};

describe("纯 TypeScript 效果分类入口", () => {
  it("没有显式规则时保持 unknown", () => {
    const effect = classifyRelicEffect({
      effectId: "effect:test:item:0",
      objectId: "fixture-item",
      source: "relics",
      buffIndex: 0,
      key: "fixture_attribute_mul",
      blackboard: [{ key: "atk", value: 0.2, valueStr: null }],
      jsonPath: "$.test",
      mechanicIndex: buildMechanicIndex({}),
    });

    expect(effect.classification).toBe("unknown");
    expect(effect.predictions).toEqual([]);
  });

  it("只使用调用方显式注入的规则产生预测", () => {
    const effect = classifyRelicEffect({
      effectId: "effect:test:item:0",
      objectId: "fixture-item",
      source: "relics",
      buffIndex: 0,
      key: "fixture_attribute_mul",
      blackboard: [{ key: "atk", value: 0.2, valueStr: null }],
      jsonPath: "$.test",
      mechanicIndex: buildMechanicIndex({}),
      semanticRules: [TEST_RULE],
    });

    expect(effect.classification).toBe("predicted");
    expect(effect.predictions).toEqual([
      expect.objectContaining({
        ruleId: "fixture-static-atk",
        zoneId: FormulaZoneId.char_out_atk_mul,
      }),
    ]);
  });
});
