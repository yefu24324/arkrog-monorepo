import { describe, expect, it } from "vitest";

import {
  buildMechanicIndex,
  classifyRelicEffect,
} from "../src/lib/classify/index.js";
import { FormulaZoneId } from "../src/lib/formula/formula-book.js";

describe("属性藏品分类", () => {
  it("将 char_attribute_mul.atk 分类到 FormulaBook 局外攻击倍率", () => {
    const effect = classifyRelicEffect({
      effectId: "effect:test:item:0",
      source: "relics",
      buffIndex: 0,
      key: "char_attribute_mul",
      blackboard: [{ key: "atk", value: 0.2, valueStr: null }],
      jsonPath: "$.test",
      mechanicIndex: buildMechanicIndex({}),
    });

    expect(effect.classification).toBe("predicted");
    expect(effect.predictions.map((prediction) => prediction.zoneId)).toEqual([
      FormulaZoneId.char_out_atk_mul,
    ]);
    expect(effect.predictions[0]?.ruleId).toBe("atk-static-multiplier");
  });

  it("将 char_attribute_mul.max_hp 分类到 FormulaBook 局外最大生命倍率", () => {
    const effect = classifyRelicEffect({
      effectId: "effect:test:max-hp:0",
      source: "relics",
      buffIndex: 0,
      key: "char_attribute_mul",
      blackboard: [{ key: "max_hp", value: 0.5, valueStr: null }],
      jsonPath: "$.test.max_hp",
      mechanicIndex: buildMechanicIndex({}),
    });

    expect(effect.classification).toBe("predicted");
    expect(effect.predictions.map((prediction) => prediction.zoneId)).toEqual([
      FormulaZoneId.char_out_max_hp_mul,
    ]);
    expect(effect.predictions[0]?.ruleId).toBe("max-hp-static-multiplier");
  });

  it("将 char_attribute_mul.def 分类到 FormulaBook 局外防御倍率", () => {
    const effect = classifyRelicEffect({
      effectId: "effect:test:def:0",
      source: "relics",
      buffIndex: 0,
      key: "char_attribute_mul",
      blackboard: [{ key: "def", value: 0.2, valueStr: null }],
      jsonPath: "$.test.def",
      mechanicIndex: buildMechanicIndex({}),
    });

    expect(effect.classification).toBe("predicted");
    expect(effect.predictions.map((prediction) => prediction.zoneId)).toEqual([
      FormulaZoneId.char_out_def_mul,
    ]);
    expect(effect.predictions[0]?.ruleId).toBe("def-static-multiplier");
  });
});
