/** 独立 GameData 导出器 CLI 参数契约测试。 */

import { describe, expect, it } from "vitest";

import { parseGameDataExportArguments } from "../tools/export-game-data.js";
import {
  collectDifficultyConditionalRelics,
  type RelicItemForWrap,
  type WrappedRelicTopicDetail,
} from "../src/game-data/index.js";

/** 构造难度条件关联测试所需的最小原始 item。 */
function item(id: string, name: string, type: string): RelicItemForWrap {
  return {
    id,
    name,
    description: null,
    usage: null,
    rarity: "NONE",
    sortId: 0,
    type,
  };
}

describe("relics:export CLI", () => {
  it("缺省时导出全部范围到默认目录", () => {
    expect(parseGameDataExportArguments([])).toEqual({
      outputOverride: undefined,
      help: false,
    });
  });

  it("仅解析自定义输出目录", () => {
    expect(parseGameDataExportArguments(["--out", "D:\\arkrog-data"])).toEqual({
      outputOverride: "D:\\arkrog-data",
      help: false,
    });
  });

  it("拒绝未知参数、内容范围和主题过滤", () => {
    expect(() => parseGameDataExportArguments(["--unknown"])).toThrow("未知参数");
    expect(() => parseGameDataExportArguments(["relics"])).toThrow("始终导出全部数据");
    expect(() => parseGameDataExportArguments(["--topic", "rogue_6"])).toThrow("未知参数");
  });
});

describe("难度条件藏品导出", () => {
  it("保留 cond_mode/grade 载体与目标 relic 原始对象", () => {
    const sourceItem = item("legacy", "开局助力", "LEGACY");
    const targetItem = item("relic", "特勤任务影像", "RELIC");
    const detail: WrappedRelicTopicDetail = {
      items: { legacy: sourceItem, relic: targetItem },
      relics: {
        legacy: {
          id: "legacy",
          buffs: [
            {
              key: "init_mode_relic",
              blackboard: [
                { key: "id", value: 0, valueStr: "relic" },
                { key: "cond_mode", value: 0, valueStr: "NORMAL" },
                { key: "cond_mode_grade", value: 0, valueStr: "0,1,2,3" },
              ],
            },
          ],
        },
        relic: { id: "relic", buffs: [] },
      },
      charBuffData: {},
    };

    const [link] = collectDifficultyConditionalRelics("rogue_6", detail);
    expect(link).toMatchObject({
      id: "legacy:0:relic",
      kind: "MODE_GRADE_GRANT",
      sourceId: "legacy",
      targetId: "relic",
      modeDifficulty: "NORMAL",
      grades: [0, 1, 2, 3],
      buffIndex: 0,
    });
    expect(link?.sourceItem).toBe(sourceItem);
    expect(link?.targetItem).toBe(targetItem);
    expect(link?.jsonPath).toContain('relics["legacy"].buffs[0]');
  });

  it("追踪 LEGACY force_add_choice 到原始支援藏品", () => {
    const sourceItem = item("legacy", "襁褓羽蛇", "LEGACY");
    const targetItem = item("start", "襁褓巨龙", "RELIC");
    const detail: WrappedRelicTopicDetail = {
      items: { legacy: sourceItem, start: targetItem },
      relics: {
        legacy: {
          id: "legacy",
          buffs: [
            {
              key: "force_add_choice",
              blackboard: [
                { key: "choice_id", value: 0, valueStr: "choice_start" },
              ],
            },
          ],
        },
        start: { id: "start", buffs: [] },
      },
      charBuffData: {},
      choices: {
        choice_start: {
          id: "choice_start",
          title: "襁褓巨龙",
          description: "前2个区域中所有敌人的最大生命值-50%",
          lockedCoverDesc: null,
          type: "TRADE",
          leftDecoType: "NONE",
          nextSceneId: null,
          icon: null,
          displayData: {
            type: "ITEM",
            costHintType: "NONE",
            effectHintType: "ITEM",
            funcIconId: null,
            itemId: "start",
            difficultyUpgradeRelicGroupId: null,
            taskId: null,
            instId: null,
          },
          forceShowWhenOnlyLeave: false,
          isHiddenChoice: true,
          sortId: 1,
        },
      },
    };

    const [link] = collectDifficultyConditionalRelics("rogue_6", detail);
    expect(link).toMatchObject({
      id: "legacy:0:start",
      kind: "LEGACY_CHOICE",
      sourceId: "legacy",
      choiceId: "choice_start",
      targetId: "start",
      modeDifficulty: null,
      grades: null,
    });
    expect(link?.choice).toBe(detail.choices?.choice_start);
    expect(link?.evidencePaths).toHaveLength(2);
  });
});
