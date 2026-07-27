/** 沉沦者的黑流树海低难度人工维护规则。 */

import type { FormulaContext, FormulaContribution } from "../context.js";
import type {
  ManualTopicDifficultyEffect,
  ManualTopicDifficultyInput,
} from "../topic-rule-programs.js";

/** 黑流树海低难度仅在精确等级生效的敌方属性倍率。 */
const ROGUE_6_LOW_DIFFICULTY_VALUES: Readonly<
  Record<number, { enemyMaxHp: number; enemyAtk: number }>
> = {
  // 难度 0：所有敌人最大生命值 -40%，攻击力 -30%。
  0: { enemyMaxHp: -0.4, enemyAtk: -0.3 },
  // 难度 1：所有敌人最大生命值 -20%，攻击力 -20%。
  1: { enemyMaxHp: -0.2, enemyAtk: -0.2 },
  // 难度 2：所有敌人最大生命值 -15%，攻击力 -15%。
  2: { enemyMaxHp: -0.15, enemyAtk: -0.15 },
  // 难度 3：所有敌人最大生命值 -10%，攻击力 -10%。
  3: { enemyMaxHp: -0.1, enemyAtk: -0.1 },
};

/** 人工维护规则的稳定源码证据位置。 */
const MANUAL_EVIDENCE_PATH =
  "packages/arknights-knowledge-graph/src/lib/formula/topic-rules/rogue-6.ts";

/** 取得黑流树海当前精确难度的人工效果。 */
export function getRogue6ManualTopicDifficultyEffects(
  input: ManualTopicDifficultyInput,
): ManualTopicDifficultyEffect[] {
  if (
    input.topicId !== "rogue_6" ||
    input.selectedDifficulty?.modeDifficulty !== "NORMAL"
  ) {
    return [];
  }
  const grade = input.selectedDifficulty.grade;
  const values = ROGUE_6_LOW_DIFFICULTY_VALUES[grade];
  if (!values) return [];

  // 两条属性规则共享精确等级护栏，但分别进入局外敌方生命与攻击区。
  return [
    {
      ruleId: `manual-topic-rogue-6-grade-${grade}-enemy-max-hp`,
      grade,
      zoneId: "OUTER_ENEMY_MAX_HP",
      value: values.enemyMaxHp,
      description: `所有敌人最大生命值${values.enemyMaxHp * 100}%（仅限该难度）`,
      maintenance: "manual",
      evidencePath: MANUAL_EVIDENCE_PATH,
    },
    {
      ruleId: `manual-topic-rogue-6-grade-${grade}-enemy-atk`,
      grade,
      zoneId: "OUTER_ENEMY_ATK",
      value: values.enemyAtk,
      description: `所有敌人攻击力${values.enemyAtk * 100}%（仅限该难度）`,
      maintenance: "manual",
      evidencePath: MANUAL_EVIDENCE_PATH,
    },
  ];
}

/** 将黑流树海低难度人工规则写入公式上下文。 */
export function applyRogue6ManualTopicRulesToFormulaContext(
  context: FormulaContext,
  input: ManualTopicDifficultyInput,
): FormulaContribution[] {
  const effects = getRogue6ManualTopicDifficultyEffects(input);
  return effects.map((effect) => {
    const contribution: FormulaContribution = {
      id: `manual-topic:${input.topicId}:NORMAL:${effect.grade}:${effect.ruleId}`,
      zoneId: effect.zoneId,
      value: effect.value,
      tooltip: `黑流树海人工规则 · 难度 ${effect.grade}`,
      reason: `${effect.description}。该规则由人工维护，不属于 GameData 或 Kuzu 图谱事实。`,
      active: true,
      source: {
        kind: "manual",
        itemId: `${input.topicId}:NORMAL:${effect.grade}`,
        ruleId: effect.ruleId,
        evidencePath: effect.evidencePath,
        evidencePaths: [effect.evidencePath],
      },
    };
    context.addContribution(contribution);
    return contribution;
  });
}
