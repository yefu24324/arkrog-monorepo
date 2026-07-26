import { describe, expect, it } from "vitest";

import {
  buildMechanicIndex,
  classifyRelicEffect,
} from "../src/lib/classify/index.js";

describe("classifyRelicEffect", () => {
  it("将 char_attribute_mul.atk 预测为 OUTER_ATK", () => {
    const mechanicIndex = buildMechanicIndex({});
    const effect = classifyRelicEffect({
      effectId: "effect:test:item:0",
      source: "relics",
      buffIndex: 0,
      key: "char_attribute_mul",
      blackboard: [{ key: "atk", value: 0.2, valueStr: null }],
      jsonPath: "$.test",
      mechanicIndex,
    });
    expect(effect.classification).toBe("predicted");
    expect(effect.predictions.map((prediction) => prediction.id)).toContain("OUTER_ATK");
    expect(effect.predictions[0]?.ruleId).toBe("atk-static-multiplier");
  });
});
