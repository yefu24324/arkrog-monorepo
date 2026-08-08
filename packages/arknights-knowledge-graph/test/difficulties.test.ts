import { describe, expect, it } from "vitest";

import { FormulaZoneId } from "../src/lib/formula/formula-book.js";
import {
  normalizeDifficultyKnowledge,
  type LocalDifficultyGraphRule,
  type RoguelikeDifficultySource,
} from "../src/tools/difficulties.js";

/** 构造一条通过完整原文护栏的本地难度规则。 */
function rule(): LocalDifficultyGraphRule {
  return {
    id: "difficulty-test-hp",
    version: 1,
    name: "测试生命提升",
    description: "测试规则",
    topicId: "rogue_3",
    modeDifficulty: "NORMAL",
    grade: 1,
    expectedRuleDesc: "所有敌人生命值+10%",
    matchedText: "所有敌人生命值+10%",
    coverage: "full",
    zoneId: FormulaZoneId.enemy_direct_max_hp_mul,
    value: 0.1,
    target: "all-enemies",
    authority: "formula",
    status: "inferred",
    confidence: 0.95,
    evidencePaths: ["game-data.json", "formula-book.ts"],
  };
}

describe("normalizeDifficultyKnowledge", () => {
  it("只导入六主题 NORMAL，并建立效果与科技启用关系", () => {
    const data: RoguelikeDifficultySource = {
      details: {
        rogue_3: {
          difficulties: [
            { modeDifficulty: "NORMAL", grade: 1, name: "测试", ruleDesc: "所有敌人生命值+10%" },
            { modeDifficulty: "CHALLENGE", grade: 0, name: "挑战", ruleDesc: "不应导入" },
          ],
        },
        rogue_7: {
          difficulties: [
            { modeDifficulty: "NORMAL", grade: 1, name: "未来", ruleDesc: "不应导入" },
          ],
        },
      },
      customizeData: {
        rogue_3: {
          developments: {
            nodes: {
              rogue_3_difficulty_1: {
                buffId: "rogue_3_difficulty_1",
                nodeType: "DIFFICULTY",
                buffName: "测试科技",
                rawDesc: ["我方单位生命值+3%"],
              },
            },
          },
          difficulties: [{
            modeDifficulty: "NORMAL",
            grade: 1,
            buffs: ["rogue_3_difficulty_1"],
          }],
        },
      },
    };
    const result = normalizeDifficultyKnowledge(data, [rule()]);
    expect(result.difficulties).toHaveLength(1);
    expect(result.effects).toEqual([
      expect.objectContaining({ numericValue: 0.1, target: "all-enemies" }),
    ]);
    expect(result.difficultyEffectEntersZone[0]?.to).toBe(
      FormulaZoneId.enemy_direct_max_hp_mul,
    );
    expect(result.technologies).toEqual([
      expect.objectContaining({ name: "测试科技", description: "我方单位生命值+3%" }),
    ]);
    expect(result.difficultyEnablesTechnology).toHaveLength(1);
  });

  it("完整 ruleDesc 变化时保留难度事实但不生成乘区边", () => {
    const data: RoguelikeDifficultySource = {
      details: {
        rogue_3: {
          difficulties: [
            { modeDifficulty: "NORMAL", grade: 1, name: "测试", ruleDesc: "所有敌人生命值+11%" },
          ],
        },
      },
      customizeData: { rogue_3: {} },
    };
    const result = normalizeDifficultyKnowledge(data, [rule()]);
    expect(result.difficulties[0]?.classification).toBe("unclassified");
    expect(result.effects).toEqual([]);
    expect(result.difficultyEffectEntersZone).toEqual([]);
  });
});
