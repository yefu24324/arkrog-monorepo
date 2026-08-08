/** rogue_6 三类主题效果的逐项分析和 FormulaBook 累计应用测试。 */

import type { ExportedRogue6TopicExtReport } from "@arkrog/arknights-gamedata-report";
import { describe, expect, it } from "vitest";

import { FormulaBook, FormulaZoneId } from "../src/lib/formula/formula-book.js";
import {
  analyzeRogue6TopicSpecEffect,
  applyRogue6TopicSpec,
  ROGUE6_ISOLATED_STONE_DOWN_ID,
  ROGUE6_ISOLATED_STONE_UP_ID,
} from "../src/lib/mechanics/index.js";

/** 构造只包含程序读取字段的公开 report 测试切片。 */
function report(): ExportedRogue6TopicExtReport {
  return {
    realUtopia: {
      effects: {
        rogue_6_weather_1_a: {
          id: "rogue_6_weather_1_a",
          name: "“黑流地脉”",
          levelName: "早期",
          functionDesc: "关卡中出现额外敌人，敌方攻击+10%，生命+10%",
        },
        rogue_6_weather_8_c: {
          id: "rogue_6_weather_8_c",
          name: "“希望的沃土”",
          levelName: "晚期",
          functionDesc: "我方单位攻击+20%，生命+30%，战斗胜利后获得随机零件",
        },
      },
      archive: {},
    },
    utopia: {
      effects: {
        variation_1: {
          id: "variation_1",
          outerName: "“巨人摇篮”",
          functionDesc: "我方攻击力提升，但对较远的敌人造成的伤害降低",
        },
        variation_4: {
          id: "variation_4",
          outerName: "“孤立石林”",
          functionDesc: "我方攻击范围内存在我方干员时攻速+30，否则攻速-50",
        },
      },
      archive: {},
    },
    conceptualEntities: {
      type: { type: "PASSIVE" },
      entries: {
        rogue_6_scrap_P_01: {
          item: { id: "rogue_6_scrap_P_01", name: "白模鸟" },
          effect: {
            scrapId: "rogue_6_scrap_P_01",
            scrapDesc: "移动至作战节点时，本次战斗我方单位攻击速度+50",
          },
          archive: {},
        },
        rogue_6_scrap_P_04: {
          item: { id: "rogue_6_scrap_P_04", name: "涂装黎博利" },
          effect: {
            scrapId: "rogue_6_scrap_P_04",
            scrapDesc: "移动至作战节点时，本次战斗我方单位攻击速度+35",
          },
          archive: {},
        },
      },
    },
  } as unknown as ExportedRogue6TopicExtReport;
}

describe("analyzeRogue6TopicSpecEffect", () => {
  it("逐行返回实托邦的全部明确属性乘区", () => {
    const result = analyzeRogue6TopicSpecEffect(report(), {
      kind: "realUtopia",
      id: "rogue_6_weather_1_a",
    });
    expect(result.map((entry) => entry.status === "supported" ? entry.zoneId : null)).toEqual([
      FormulaZoneId.enemy_direct_atk_mul,
      FormulaZoneId.enemy_direct_max_hp_mul,
    ]);
  });

  it("巨人摇篮缺少数值时明确返回 unknown", () => {
    expect(analyzeRogue6TopicSpecEffect(report(), {
      kind: "utopia",
      id: "variation_1",
    })).toEqual([expect.objectContaining({ status: "unknown" })]);
  });

  it("孤立石林两个派生状态分别返回正负攻速", () => {
    const values = [ROGUE6_ISOLATED_STONE_UP_ID, ROGUE6_ISOLATED_STONE_DOWN_ID].map((id) => {
      const analysis = analyzeRogue6TopicSpecEffect(report(), { kind: "utopia", id })[0];
      return analysis?.status === "supported" ? analysis.item.value : null;
    });
    expect(values).toEqual([30, -50]);
  });
});

describe("applyRogue6TopicSpec", () => {
  it("把实托邦、乌托邦和多个概念体累计写入同一本 FormulaBook", () => {
    const book = new FormulaBook();
    const applied = applyRogue6TopicSpec({
      report: report(),
      selectedEffects: [
        { kind: "realUtopia", id: "rogue_6_weather_8_c" },
        { kind: "utopia", id: ROGUE6_ISOLATED_STONE_UP_ID },
        { kind: "conceptualEntity", id: "rogue_6_scrap_P_01" },
        { kind: "conceptualEntity", id: "rogue_6_scrap_P_04" },
      ],
    }, book);
    expect(applied).toHaveLength(5);
    expect(book.calculate(FormulaZoneId.char_in_atk_mul)).toBeCloseTo(1.2);
    expect(book.calculate(FormulaZoneId.char_in_max_hp_mul)).toBeCloseTo(1.3);
    expect(book.calculate(FormulaZoneId.char_direct_attack_speed_add)).toBe(115);
  });
});
