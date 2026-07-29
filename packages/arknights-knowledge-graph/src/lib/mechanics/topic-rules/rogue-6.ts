/** 沉沦者的黑流树海低难度人工维护规则。 */

import { FormulaZoneId } from "../../formula/formula-book.js";
import { FormulaItem, type FormulaContext } from "../../formula/context.js";
import type { FormulaItemPlacement } from "../relic-items.js";
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
  "packages/arknights-knowledge-graph/src/lib/mechanics/topic-rules/rogue-6.ts";

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
      zoneId: FormulaZoneId.藏品局外敌人最大生命倍率,
      value: values.enemyMaxHp,
      description: `所有敌人最大生命值${values.enemyMaxHp * 100}%（仅限该难度）`,
      maintenance: "manual",
      evidencePath: MANUAL_EVIDENCE_PATH,
    },
    {
      ruleId: `manual-topic-rogue-6-grade-${grade}-enemy-atk`,
      grade,
      zoneId: FormulaZoneId.藏品局外敌人攻击力倍率,
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
): FormulaItemPlacement[] {
  const effects = getRogue6ManualTopicDifficultyEffects(input);
  return effects.flatMap((effect) => {
    const placement: FormulaItemPlacement = {
      zoneId: effect.zoneId,
      item: new FormulaItem(effect.value, `黑流树海人工规则 · 难度 ${effect.grade}`),
      route: {
        parameterKey: "manual",
        ruleId: effect.ruleId,
        reason: `${effect.description}。该规则由人工维护，不属于 GameData 或 Kuzu 图谱事实。`,
        evidencePath: effect.evidencePath,
      },
    };
    // 人工规则的目标不在 BuffContext 时保留效果定义，但不写入公式上下文。
    if (!context.book.hasZone(placement.zoneId)) return [];
    context.addItem(placement.zoneId, placement.item);
    return [placement];
  });
}
