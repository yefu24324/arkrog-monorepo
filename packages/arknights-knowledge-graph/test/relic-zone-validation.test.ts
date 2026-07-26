import { describe, expect, it } from "vitest";

import { buildMechanicIndex, buildRelicZoneTable } from "../src/lib/classify/index.js";
import { buildFormulaRelicZoneValidationArtifact } from "../src/lib/formula/index.js";

describe("buildFormulaRelicZoneValidationArtifact", () => {
  it("默认假设条件型藏品生效，并只输出函数可写入的乘区", () => {
    // selector.profession 没有运行时干员上下文，但人工校验产物仍应显示 OUTER_ATK。
    const classified = buildRelicZoneTable({
      topicId: "rogue_test",
      topicName: "测试主题",
      generatedAt: "2026-01-01T00:00:00.000Z",
      mechanicIndex: buildMechanicIndex({}),
      detail: {
        items: {
          relic: {
            id: "relic",
            name: "职业藏品",
            usage: "近卫攻击力提升",
            description: null,
            rarity: "RARE",
            sortId: 1,
            type: "RELIC",
          },
        },
        relics: {
          relic: {
            buffs: [{
              key: "char_attribute_mul",
              blackboard: [
                { key: "selector.profession", value: 0, valueStr: "warrior" },
                { key: "atk", value: 0.2, valueStr: null },
              ],
            }],
          },
        },
        charBuffData: {},
      },
    });

    const result = buildFormulaRelicZoneValidationArtifact(classified);
    expect(result.producer.activationPolicy).toBe("assume_active");
    expect(result.producer.numericEvaluation).toBe(false);
    expect(result.items[0]?.zones.map((zone) => zone.id)).toEqual(["OUTER_ATK"]);
    expect(result.items[0]?.effects[0]?.evidenceStatuses).toEqual(["computed"]);
  });
});
