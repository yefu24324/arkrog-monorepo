import type { ExportedRoguelikeTopicReport } from "@arkrog/arknights-gamedata-report";
import type { DetailDifficulty } from "@arkrog/arknights-schema/types";
import { describe, expect, it } from "vitest";

import { item } from "../src/lib/formula/ast.js";
import { FormulaBook, FormulaZoneId } from "../src/lib/formula/formula-book.js";
import { analyzeDifficulty, applyDifficulty } from "../src/lib/mechanics/index.js";

/** 构造只包含测试所需字段的 report 难度对象。 */
function difficulty(grade: number, ruleDesc: string): DetailDifficulty {
  return {
    modeDifficulty: "NORMAL",
    grade,
    name: "测试难度",
    ruleDesc,
  } as DetailDifficulty;
}

/** 构造只包含难度链路所需字段的主题报告。 */
function report(difficulties: DetailDifficulty[]): ExportedRoguelikeTopicReport {
  return {
    topic: {} as ExportedRoguelikeTopicReport["topic"],
    difficulties,
    customizedDifficulties: [],
    difficultyConditionalRelics: [],
  };
}

describe("analyzeDifficulty", () => {
  it("用完整 ruleDesc 作为版本护栏并返回当前真实乘区", () => {
    const selected = difficulty(5, "所有敌人最大生命+30%");
    const result = analyzeDifficulty({
      topicId: "rogue_6",
      report: report([selected]),
      selectedDifficulty: selected,
    });
    expect(result).toEqual([
      expect.objectContaining({
        status: "supported",
        zoneId: FormulaZoneId.enemy_direct_max_hp_mul,
      }),
    ]);
  });

  it("原文变化或当前 FormulaBook 无对应乘区时保持 unknown", () => {
    const changed = difficulty(5, "所有敌人最大生命+31%");
    const reduction = difficulty(11, "领袖敌人受到的伤害降低20％");
    expect(analyzeDifficulty({
      topicId: "rogue_6",
      report: report([changed]),
      selectedDifficulty: changed,
    })[0]?.status).toBe("unknown");
    expect(analyzeDifficulty({
      topicId: "rogue_6",
      report: report([reduction]),
      selectedDifficulty: reduction,
    })[0]?.status).toBe("unknown");
  });
});

describe("applyDifficulty", () => {
  it("NORMAL 难度累计已选等级以前的可执行属性规则", () => {
    const grade5 = difficulty(5, "所有敌人最大生命+30%");
    const grade8 = difficulty(8, "精英及领袖敌人攻击力+15%");
    const book = new FormulaBook()
      .add_item(FormulaZoneId.enemy_base_max_hp, item("基础生命", 1000))
      .add_item(FormulaZoneId.enemy_base_atk, item("基础攻击", 100));
    const applied = applyDifficulty({
      topicId: "rogue_6",
      report: report([grade5, grade8]),
      selectedDifficulty: grade8,
      activation: { enemy: { id: "boss", levelType: "BOSS" } },
    }, book);
    expect(applied.map((entry) => entry.zoneId)).toEqual([
      FormulaZoneId.enemy_direct_max_hp_mul,
      FormulaZoneId.enemy_direct_atk_mul,
    ]);
    expect(book.calculate(FormulaZoneId.enemy_final_max_hp)).toBeCloseTo(1300);
    expect(book.calculate(FormulaZoneId.enemy_final_atk)).toBeCloseTo(115);
  });

  it("缺少目标敌人事实时不应用精英和领袖条件", () => {
    const selected = difficulty(8, "精英及领袖敌人攻击力+15%");
    const book = new FormulaBook().add_item(
      FormulaZoneId.enemy_base_atk,
      item("基础攻击", 100),
    );
    expect(applyDifficulty({
      topicId: "rogue_6",
      report: report([selected]),
      selectedDifficulty: selected,
    }, book)).toEqual([]);
    expect(book.calculate(FormulaZoneId.enemy_final_atk)).toBe(100);
  });
});
