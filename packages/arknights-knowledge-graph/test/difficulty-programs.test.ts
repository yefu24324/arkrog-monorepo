import { describe, expect, it } from "vitest";
import type { ExportedRogueDifficultyConditionalRelic } from "@arkrog/arknights-schema/game-data";

import {
  FormulaContext,
  applyRogueDifficultyToFormulaContext,
  getManualTopicDifficultyEffects,
  routeRogueDifficultyToZones,
  routeSelectedRogueDifficultyToZones,
  type RogueDifficultyForFormula,
} from "../src/lib/formula/index.js";

/** 构造只包含测试所需字段的原始难度。 */
function difficulty(grade: number, ruleDesc: string): RogueDifficultyForFormula {
  return { modeDifficulty: "NORMAL", grade, name: "测试难度", ruleDesc };
}

/** 构造沉沦者主题 0-3 级自动给予的特勤任务影像关联。 */
function conditionalRelic(): ExportedRogueDifficultyConditionalRelic {
  const common = {
    description: null,
    usage: null,
    rarity: "NONE",
    sortId: 0,
  };
  return {
    id: "rogue_6_legacy_10:0:rogue_6_relic_fight_29",
    kind: "MODE_GRADE_GRANT",
    sourceId: "rogue_6_legacy_10",
    sourceItem: {
      ...common,
      id: "rogue_6_legacy_10",
      name: "开局助力",
      type: "LEGACY",
    },
    sourceRelic: { id: "rogue_6_legacy_10", buffs: [] },
    buffIndex: 0,
    modeDifficulty: "NORMAL",
    grades: [0, 1, 2, 3],
    choiceId: null,
    choice: null,
    targetId: "rogue_6_relic_fight_29",
    targetItem: {
      ...common,
      id: "rogue_6_relic_fight_29",
      name: "特勤任务影像",
      type: "RELIC",
    },
    targetRelic: {
      id: "rogue_6_relic_fight_29",
      buffs: [
        {
          key: "char_attribute_mul",
          blackboard: [{ key: "max_hp", value: 0.4, valueStr: null }],
        },
        {
          key: "char_attribute_mul",
          blackboard: [{ key: "atk", value: 0.4, valueStr: null }],
        },
        {
          key: "char_attribute_mul",
          blackboard: [{ key: "def", value: 0.4, valueStr: null }],
        },
      ],
    },
    jsonPath: '$.details.rogue_6.relics["rogue_6_legacy_10"].buffs[0]',
    evidencePaths: ['$.details.rogue_6.relics["rogue_6_legacy_10"].buffs[0]'],
  };
}

/** 构造襁褓羽蛇经开局选项给予襁褓巨龙的完整证据链。 */
function legacySupportRelic(): ExportedRogueDifficultyConditionalRelic {
  const sourceItem = {
    id: "rogue_6_legacy_06",
    name: "襁褓羽蛇",
    description: "愿新生的他们不再被过往束缚。",
    usage: "若本次探索通过至少两个区域，下次探索时，初始可额外获得1个支援选项",
    rarity: "NORMAL",
    sortId: 999,
    type: "LEGACY",
  };
  const targetItem = {
    id: "rogue_6_start_3",
    name: "襁褓巨龙",
    description: "愿新生的它不再饥饿。",
    usage: "前两个探索区域的战斗中，所有敌人的最大生命-50%",
    rarity: "RARE",
    sortId: 999,
    type: "RELIC",
  };
  const sourcePath = '$.details.rogue_6.relics["rogue_6_legacy_06"].buffs[0]';
  const choicePath = '$.details.rogue_6.choices["choice_ro6_startbuff_9"]';
  return {
    id: "rogue_6_legacy_06:0:rogue_6_start_3",
    kind: "LEGACY_CHOICE",
    sourceId: sourceItem.id,
    sourceItem,
    sourceRelic: { id: sourceItem.id, buffs: [] },
    buffIndex: 0,
    modeDifficulty: null,
    grades: null,
    choiceId: "choice_ro6_startbuff_9",
    choice: {
      id: "choice_ro6_startbuff_9",
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
        itemId: targetItem.id,
        difficultyUpgradeRelicGroupId: null,
        taskId: null,
        instId: null,
      },
      forceShowWhenOnlyLeave: false,
      isHiddenChoice: true,
      sortId: 1,
    },
    targetId: targetItem.id,
    targetItem,
    targetRelic: {
      id: targetItem.id,
      buffs: [
        {
          key: "global_buff_layer",
          blackboard: [
            { key: "key", value: 0, valueStr: "rogue_6_start_3" },
            { key: "max_cnt", value: 3, valueStr: null },
            { key: "max_hp", value: 0.5, valueStr: null },
          ],
        },
      ],
    },
    jsonPath: sourcePath,
    evidencePaths: [sourcePath, choicePath],
  };
}

describe("routeRogueDifficultyToZones", () => {
  it("用完整 ruleDesc 作为版本护栏得出难度乘区", () => {
    const route = routeRogueDifficultyToZones({
      topicId: "rogue_6",
      difficulty: difficulty(5, "所有敌人最大生命+30%"),
      difficultyIndex: 5,
    });

    expect(route.classification).toBe("predicted");
    expect(route.zoneIds).toEqual(["OUTER_ENEMY_MAX_HP"]);
    expect(route.effects[0]).toMatchObject({
      value: 0.3,
      evidencePath: "$.details.rogue_6.difficulties[5].ruleDesc",
    });
  });

  it("游戏原文变化后不静默沿用旧难度规则", () => {
    const route = routeRogueDifficultyToZones({
      topicId: "rogue_6",
      difficulty: difficulty(5, "所有敌人最大生命+31%"),
    });

    expect(route.classification).toBe("unknown");
    expect(route.effects).toEqual([]);
    expect(route.unclassifiedReason).toContain("版本化 ruleDesc");
  });

  it("不把黑流树海人工低难度规则混入 Kuzu 同源路由", () => {
    const route = routeRogueDifficultyToZones({
      topicId: "rogue_6",
      difficulty: difficulty(
        0,
        "初始生命值上限更高，失败时下次探索获得“特勤任务影像”",
      ),
      difficultyIndex: 0,
    });

    expect(route.classification).toBe("unknown");
    expect(route.effects).toEqual([]);

    // 人工维护数据只能从独立主题规则程序取得。
    expect(
      getManualTopicDifficultyEffects({
        topicId: "rogue_6",
        selectedDifficulty: difficulty(0, "不参与人工规则匹配的原始描述"),
      }),
    ).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          zoneId: "OUTER_ENEMY_MAX_HP",
          value: -0.4,
          maintenance: "manual",
        }),
        expect.objectContaining({
          zoneId: "OUTER_ENEMY_ATK",
          value: -0.3,
          maintenance: "manual",
        }),
      ]),
    );
  });
});

describe("applyRogueDifficultyToFormulaContext", () => {
  it("直接返回用户所选难度的累计加成乘区", () => {
    const difficulties = [
      difficulty(5, "所有敌人最大生命+30%"),
      difficulty(8, "精英及领袖敌人攻击力+15%"),
    ];
    const route = routeSelectedRogueDifficultyToZones({
      topicId: "rogue_6",
      difficulties,
      selectedDifficulty: difficulties[1]!,
    });

    expect(route.zoneIds).toEqual(["OUTER_ENEMY_MAX_HP", "OUTER_ENEMY_ATK"]);
    expect(route.routes).toHaveLength(2);
  });

  it("条件未确认时保留 mode/grade 藏品贡献但不参与计算", () => {
    const selected = difficulty(0, "初始生命值上限更高，失败时下次探索获得“特勤任务影像”");
    const link = conditionalRelic();
    const route = routeSelectedRogueDifficultyToZones({
      topicId: "rogue_6",
      difficulties: [selected],
      selectedDifficulty: selected,
      conditionalRelics: [link],
    });
    const context = new FormulaContext();
    const contributions = applyRogueDifficultyToFormulaContext(context, {
      topicId: "rogue_6",
      difficulties: [selected],
      selectedDifficulty: selected,
      conditionalRelics: [link],
    });

    expect(route.zoneIds).toEqual(
      expect.arrayContaining(["OUTER_MAX_HP", "OUTER_ATK", "OUTER_CHAR_DEF"]),
    );
    expect(context.evaluateZone("OUTER_MAX_HP").value).toBe(1);
    const conditionalContributions = contributions.filter((entry) =>
      entry.id.startsWith("difficulty-grant:"),
    );
    expect(conditionalContributions.every((entry) => !entry.active)).toBe(true);
    expect(conditionalContributions[0]?.reason).toContain("需满足条件载体");
  });

  it("用户确认失败条件后才应用特勤任务影像", () => {
    const selected = difficulty(0, "初始生命值上限更高，失败时下次探索获得“特勤任务影像”");
    const link = conditionalRelic();
    const context = new FormulaContext();
    applyRogueDifficultyToFormulaContext(context, {
      topicId: "rogue_6",
      difficulties: [selected],
      selectedDifficulty: selected,
      conditionalRelics: [link],
      enabledConditionalRelicIds: [link.id],
    });

    expect(context.evaluateZone("OUTER_MAX_HP").value).toBeCloseTo(1.4);
    expect(context.evaluateZone("OUTER_ATK").value).toBeCloseTo(1.4);
    expect(context.evaluateZone("OUTER_CHAR_DEF").value).toBeCloseTo(1.4);
  });

  it("上一局遗留支援被选择后将襁褓巨龙写入敌方生命乘区", () => {
    const selected = {
      ...difficulty(3, "部分【险路尽头】节点不再提前揭示 "),
      haveLegacy: true,
    };
    const link = legacySupportRelic();
    const context = new FormulaContext();
    const route = routeSelectedRogueDifficultyToZones({
      topicId: "rogue_6",
      difficulties: [selected],
      selectedDifficulty: selected,
      conditionalRelics: [link],
    });
    applyRogueDifficultyToFormulaContext(context, {
      topicId: "rogue_6",
      difficulties: [selected],
      selectedDifficulty: selected,
      conditionalRelics: [link],
      enabledConditionalRelicIds: [link.id],
    });

    expect(route.zoneIds).toContain("ENEMY_HP_RELIC");
    expect(context.evaluateZone("ENEMY_HP_RELIC").value).toBeCloseTo(0.5);
  });

  it("按精确难度应用黑流树海 0-3 级人工规则且不向上累计", () => {
    const expected = [
      { grade: 0, hp: 0.6, atk: 0.7 },
      { grade: 1, hp: 0.8, atk: 0.8 },
      { grade: 2, hp: 0.85, atk: 0.85 },
      { grade: 3, hp: 0.9, atk: 0.9 },
      { grade: 4, hp: 1, atk: 1 },
    ];
    const difficulties = expected.map(({ grade }) => difficulty(grade, `难度 ${grade}`));

    for (const entry of expected) {
      const context = new FormulaContext();
      applyRogueDifficultyToFormulaContext(context, {
        topicId: "rogue_6",
        difficulties,
        selectedDifficulty: difficulties[entry.grade]!,
      });

      expect(context.evaluateZone("OUTER_ENEMY_MAX_HP").value).toBeCloseTo(entry.hp);
      expect(context.evaluateZone("OUTER_ENEMY_ATK").value).toBeCloseTo(entry.atk);
      // 难度 0-3 的贡献必须明确标记为人工来源。
      const manualContributions = context
        .getContributions("OUTER_ENEMY_MAX_HP")
        .filter((contribution) => contribution.source?.kind === "manual");
      expect(manualContributions).toHaveLength(entry.grade <= 3 ? 1 : 0);
    }
  });

  it("累计应用已选保密等级以前的全敌与领袖效果", () => {
    const difficulties = [
      difficulty(5, "所有敌人最大生命+30%"),
      difficulty(8, "精英及领袖敌人攻击力+15%"),
      difficulty(11, "领袖敌人受到的伤害降低20％"),
    ];
    const context = new FormulaContext();
    const contributions = applyRogueDifficultyToFormulaContext(context, {
      topicId: "rogue_6",
      difficulties,
      selectedDifficulty: difficulties[2]!,
      activation: { enemy: { id: "enemy_test", levelType: "BOSS" } },
    });

    expect(context.evaluateZone("OUTER_ENEMY_MAX_HP").value).toBeCloseTo(1.3);
    expect(context.evaluateZone("OUTER_ENEMY_ATK").value).toBeCloseTo(1.15);
    expect(
      context.evaluateZone("OUTER_ENEMY_DAMAGE_RESISTANCE", {
        damageType: "physical",
      }).value,
    ).toBeCloseTo(0.2);
    expect(contributions.every((entry) => entry.source?.kind === "difficulty")).toBe(true);
  });

  it("按目标类型停用不适用于普通敌人的精英和领袖贡献", () => {
    const difficulties = [
      difficulty(5, "所有敌人最大生命+30%"),
      difficulty(8, "精英及领袖敌人攻击力+15%"),
      difficulty(11, "领袖敌人受到的伤害降低20％"),
    ];
    const context = new FormulaContext();
    applyRogueDifficultyToFormulaContext(context, {
      topicId: "rogue_6",
      difficulties,
      selectedDifficulty: difficulties[2]!,
      activation: { enemy: { id: "enemy_test", levelType: "NORMAL" } },
    });

    expect(context.evaluateZone("OUTER_ENEMY_MAX_HP").value).toBeCloseTo(1.3);
    expect(context.evaluateZone("OUTER_ENEMY_ATK").value).toBe(1);
    expect(context.evaluateZone("OUTER_ENEMY_DAMAGE_RESISTANCE").value).toBe(0);
    expect(
      context.getContributions("OUTER_ENEMY_ATK", { includeInactive: true })[0]?.reason,
    ).toContain("当前敌人不是精英或领袖");
  });

  it("将同一难度体系的多级局外减伤累计后写入 max 乘区", () => {
    const difficulties = [
      difficulty(8, "所有敌人受到的物理和法术伤害-5%"),
      difficulty(11, "领袖敌人受到的物理和法术伤害-5%"),
      difficulty(13, "精英和领袖敌人受到的物理和法术伤害-5%"),
    ];
    const context = new FormulaContext();
    applyRogueDifficultyToFormulaContext(context, {
      topicId: "rogue_3",
      difficulties,
      selectedDifficulty: difficulties[2]!,
      activation: { enemy: { id: "enemy_test", levelType: "BOSS" } },
    });

    expect(
      context.evaluateZone("OUTER_ENEMY_DAMAGE_RESISTANCE", {
        damageType: "magical",
      }).value,
    ).toBeCloseTo(0.15);
  });

  it("缺少登场时间时保守停用限时难度效果", () => {
    const selected = difficulty(
      14,
      "所有精英和领袖单位登场后20秒内受到物理和法术伤害-50%，攻击力+30%",
    );
    const context = new FormulaContext();
    applyRogueDifficultyToFormulaContext(context, {
      topicId: "rogue_1",
      difficulties: [selected],
      selectedDifficulty: selected,
      activation: { enemy: { id: "enemy_test", levelType: "ELITE" } },
    });

    expect(context.evaluateZone("OUTER_ENEMY_ATK").value).toBe(1);
    expect(context.evaluateZone("OUTER_ENEMY_DAMAGE_RESISTANCE").value).toBe(0);
  });
});
