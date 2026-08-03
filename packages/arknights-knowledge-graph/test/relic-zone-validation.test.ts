import { describe, expect, it } from "vitest";

import { buildMechanicIndex, buildRelicZoneTable } from "../src/lib/classify/index.js";
import { FormulaZoneId } from "../src/lib/formula/index.js";
import { buildFormulaRelicZoneValidationArtifact } from "../src/lib/mechanics/index.js";

describe("buildFormulaRelicZoneValidationArtifact", () => {
  it("默认假设条件型藏品生效，并只输出函数可写入的乘区", () => {
    // selector.profession 没有运行时干员上下文，但人工校验产物仍应显示真实局外攻击力乘区。
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
    expect(result.items[0]?.zones).toEqual([FormulaZoneId.char_out_atk_mul]);
    expect(result.items[0]?.effects[0]?.evidenceStatuses).toEqual(["inferred"]);
  });

  it("攻击速度效果携带 atk=0 时 graph 与 formula 都只输出攻速乘区", () => {
    const classified = buildRelicZoneTable({
      topicId: "rogue_2",
      topicName: "傀影与猩红孤钻",
      generatedAt: "2026-01-01T00:00:00.000Z",
      mechanicIndex: buildMechanicIndex({}),
      detail: {
        items: {
          rogue_2_relic_fight_138: {
            id: "rogue_2_relic_fight_138",
            name: "疗养体验卡",
            usage: "所有干员部署后10秒内攻击速度+40",
            description: null,
            rarity: "NORMAL",
            sortId: 138,
            type: "RELIC",
          },
        },
        relics: {
          rogue_2_relic_fight_138: {
            buffs: [{
              key: "global_buff_normal",
              blackboard: [
                { key: "key", value: 0, valueStr: "rogue_2_attr_up[limited]" },
                { key: "attack_speed", value: 40, valueStr: null },
                { key: "atk", value: 0, valueStr: null },
              ],
            }],
          },
        },
        charBuffData: {},
      },
    });

    const result = buildFormulaRelicZoneValidationArtifact(classified);
    expect(classified.items[0]?.zones).toEqual([FormulaZoneId.char_direct_attack_speed_add]);
    expect(result.items[0]?.zones).toEqual([FormulaZoneId.char_direct_attack_speed_add]);
    expect(result.items[0]?.effects[0]?.classification).toBe("predicted");
    expect(result.items[0]?.effects[0]?.predictions).toEqual([
      expect.objectContaining({
        zoneId: FormulaZoneId.char_direct_attack_speed_add,
        ruleId: "attack-speed-conditional-addition",
      }),
    ]);
  });

  it("防御力效果输出 FormulaBook 的真实乘区", () => {
    const classified = buildRelicZoneTable({
      topicId: "rogue_test",
      topicName: "测试主题",
      generatedAt: "2026-01-01T00:00:00.000Z",
      mechanicIndex: buildMechanicIndex({}),
      detail: {
        items: {
          defense_relic: {
            id: "defense_relic",
            name: "防御藏品",
            usage: "所有干员防御力提升",
            description: null,
            rarity: "NORMAL",
            sortId: 1,
            type: "RELIC",
          },
        },
        relics: {
          defense_relic: {
            buffs: [{
              key: "char_attribute_mul",
              blackboard: [{ key: "def", value: 0.2, valueStr: null }],
            }],
          },
        },
        charBuffData: {},
      },
    });

    const result = buildFormulaRelicZoneValidationArtifact(classified);
    expect(classified.items[0]?.zones).toEqual([FormulaZoneId.char_out_def_mul]);
    expect(result.items[0]?.zones).toEqual([FormulaZoneId.char_out_def_mul]);
    expect(result.items[0]?.effects[0]?.predictions[0]?.zoneId).toBe(
      FormulaZoneId.char_out_def_mul,
    );
  });
});
