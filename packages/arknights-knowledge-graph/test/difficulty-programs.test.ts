import type { ExportedRoguelikeTopicReport } from "@arkrog/arknights-gamedata-report";
import type { DetailDifficulty } from "@arkrog/arknights-schema/types";
import { describe, expect, it } from "vitest";

import { item } from "../src/lib/formula/ast.js";
import { FormulaBook, FormulaZoneId } from "../src/lib/formula/formula-book.js";
import {
  analyzeDifficulty,
  analyzeDifficultyLevel,
  applyDifficulty,
} from "../src/lib/mechanics/index.js";
import { resolveDifficultyPrograms } from "../src/lib/mechanics/difficulty-programs/program.js";

/** 构造只包含测试所需字段的 report 难度对象。 */
function difficulty(
  grade: number,
  ruleDesc: string,
  modeDifficulty = "NORMAL",
): DetailDifficulty {
  return {
    modeDifficulty,
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
  it("六主题当前 GameData 原文共命中40条图谱或服务器属性程序", () => {
    const table = JSON.parse(readFileSync(path.resolve(
      process.cwd(),
      "../../ArknightsGameData/zh_CN/gamedata/excel/roguelike_topic_table.json",
    ), "utf8")) as {
      details: Record<string, { difficulties: DetailDifficulty[] }>;
    };
    const counts = Object.fromEntries(Array.from({ length: 6 }, (_, index) => {
      const topicId = `rogue_${index + 1}`;
      const count = (table.details[topicId]?.difficulties ?? [])
        .filter((entry) => entry.modeDifficulty === "NORMAL")
        .flatMap((entry) => resolveDifficultyPrograms(topicId, entry))
        .length;
      return [topicId, count];
    }));
    expect(counts).toEqual({
      rogue_1: 4,
      rogue_2: 7,
      rogue_3: 10,
      rogue_4: 5,
      rogue_5: 9,
      rogue_6: 5,
    });
  });

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

  it("同一等级只要有一条可执行贡献就不再追加 unknown", () => {
    const selected = difficulty(4, "所有敌人的生命值+40%，便符的生命值+50%");
    const result = analyzeDifficulty({
      topicId: "rogue_5",
      report: report([selected]),
      selectedDifficulty: selected,
    });
    expect(result).toHaveLength(2);
    expect(result.every((entry) => entry.status === "supported")).toBe(true);
  });

  it("非 NORMAL 模式完全不进入难度静态分析", () => {
    const selected = difficulty(5, "所有敌人最大生命+30%", "CHALLENGE");
    expect(analyzeDifficulty({
      topicId: "rogue_6",
      report: report([selected]),
      selectedDifficulty: selected,
    })).toEqual([]);
  });
});

describe("analyzeDifficultyLevel", () => {
  it("逐级展示时不继承更低等级的分析结果", () => {
    const grade5 = difficulty(5, "所有敌人最大生命+30%");
    const grade8 = difficulty(8, "精英及领袖敌人攻击力+15%");
    const result = analyzeDifficultyLevel({
      topicId: "rogue_6",
      report: report([grade5, grade8]),
      selectedDifficulty: grade8,
    });
    expect(result).toEqual([
      expect.objectContaining({
        status: "supported",
        zoneId: FormulaZoneId.enemy_direct_atk_mul,
      }),
    ]);
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

  it("低难度服务器减益只应用当前精确等级", () => {
    const grade0 = difficulty(0, "初始生命值上限更高，失败时下次探索获得“特勤任务影像”");
    const grade1 = difficulty(1, "初始目标生命上限-2");
    const book = new FormulaBook()
      .add_item(FormulaZoneId.enemy_base_max_hp, item("基础生命", 1000))
      .add_item(FormulaZoneId.enemy_base_atk, item("基础攻击", 100));
    const applied = applyDifficulty({
      topicId: "rogue_6",
      report: report([grade0, grade1]),
      selectedDifficulty: grade1,
    }, book);
    expect(applied.map((entry) => entry.item.value)).toEqual([0.8, 0.8]);
    expect(book.calculate(FormulaZoneId.enemy_final_max_hp)).toBe(800);
    expect(book.calculate(FormulaZoneId.enemy_final_atk)).toBe(80);
  });

  it("缺少 currentFloor 时不默认第一层，提供层数后只按所选难度应用一次", () => {
    const grade5 = difficulty(5, "所有敌人最大生命+30%");
    const grade6 = difficulty(6, "实托邦的效果提升至中期，将会更频繁地生成，并将添加实托邦·方针的效果");
    const withoutFloor = new FormulaBook()
      .add_item(FormulaZoneId.enemy_base_max_hp, item("基础生命", 1000))
      .add_item(FormulaZoneId.enemy_base_atk, item("基础攻击", 100));
    applyDifficulty({
      topicId: "rogue_6",
      report: report([grade5, grade6]),
      selectedDifficulty: grade6,
    }, withoutFloor);
    expect(withoutFloor.calculate(FormulaZoneId.enemy_final_max_hp)).toBe(1300);
    expect(withoutFloor.calculate(FormulaZoneId.enemy_final_atk)).toBe(100);

    const floorTwo = new FormulaBook()
      .add_item(FormulaZoneId.enemy_base_max_hp, item("基础生命", 1000))
      .add_item(FormulaZoneId.enemy_base_atk, item("基础攻击", 100));
    const applied = applyDifficulty({
      topicId: "rogue_6",
      report: report([grade5, grade6]),
      selectedDifficulty: grade6,
      currentFloor: 2,
    }, floorTwo);
    expect(applied.filter((entry) => entry.zoneId === FormulaZoneId.enemy_final_atk_mul)).toHaveLength(1);
    expect(floorTwo.calculate(FormulaZoneId.enemy_final_max_hp)).toBeCloseTo(1300 * 1.02 ** 2);
    expect(floorTwo.calculate(FormulaZoneId.enemy_final_atk)).toBeCloseTo(100 * 1.02 ** 2);
  });

  it("界园通用逐层倍率不作用于专属倍率敌人", () => {
    const selected = difficulty(4, "所有敌人的生命值+40%，便符的生命值+50%");
    const book = new FormulaBook().add_item(
      FormulaZoneId.enemy_base_max_hp,
      item("基础生命", 1000),
    );
    applyDifficulty({
      topicId: "rogue_5",
      report: report([selected]),
      selectedDifficulty: selected,
      currentFloor: 3,
      activation: { enemy: { id: "enemy_2101_dyspll" } },
    }, book);
    expect(book.calculate(FormulaZoneId.enemy_final_max_hp)).toBe(1500);
  });
});
import { readFileSync } from "node:fs";
import path from "node:path";
