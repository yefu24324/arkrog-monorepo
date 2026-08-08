/**
 * AI_GENERATED：六主题 NORMAL 难度的唯一逻辑程序。
 * 普通词条乘区来自图谱；解包缺失的逐层倍率与低难度减益按服务器现状写死在本文件。
 */

import type { ExportedRoguelikeTopicReport } from "@arkrog/arknights-gamedata-report";

import { FormulaZoneId, type FormulaWritableZoneId } from "../../formula/formula-book.js";
import type { FormulaActivationContext } from "../shared/activation.js";

/** 只引用 report 对外公开的难度元素类型。 */
export type ReportDifficulty = ExportedRoguelikeTopicReport["difficulties"][number];

/** 单条可执行难度贡献；完整 ruleDesc 是版本护栏。 */
export interface DifficultyProgramContribution {
  effectId: string;
  label: string;
  zoneId: FormulaWritableZoneId;
  value: number;
  conditions: string[];
  active: (context: FormulaActivationContext) => boolean;
}

/** 普通难度词条或服务器侧特例的静态定义。 */
interface DifficultyProgramRule {
  id: string;
  topicId: string;
  grade: number;
  expectedRuleDesc: string;
  matchedText: string;
  zoneId: FormulaWritableZoneId;
  value: number;
  target: "all-enemies" | "elite" | "elite-and-boss" | "boss" | "specific-enemy";
  enemyIds?: readonly string[];
  excludedEnemyIds?: readonly string[];
  stageKinds?: readonly ("emergency" | "danger")[];
  durationSeconds?: number;
}

/** 界园中不接受通用敌人倍率、而使用自身专属倍率的对象。 */
const ROGUE_5_GENERIC_EXCLUDED_ENEMIES = ["trap_222_rgdysm", "enemy_2101_dyspll"] as const;

/** 图谱裁决为 enemy_direct_* 的六主题普通属性词条。 */
const GRAPH_RULES: readonly DifficultyProgramRule[] = [
  { id: "difficulty-rogue-1-grade-5-elite-boss-hp", topicId: "rogue_1", grade: 5, expectedRuleDesc: "所有精英和领袖敌人的生命值+20%", matchedText: "所有精英和领袖敌人的生命值+20%", zoneId: FormulaZoneId.enemy_direct_max_hp_mul, value: 0.2, target: "elite-and-boss" },
  { id: "difficulty-rogue-1-grade-10-stage-atk", topicId: "rogue_1", grade: 10, expectedRuleDesc: "紧急作战和险路恶敌中，敌人的攻击力和生命+15%；使探索走向不同结局的事件出现概率大幅提升", matchedText: "紧急作战和险路恶敌中，敌人的攻击力和生命+15%", zoneId: FormulaZoneId.enemy_direct_atk_mul, value: 0.15, target: "all-enemies", stageKinds: ["emergency", "danger"] },
  { id: "difficulty-rogue-1-grade-10-stage-hp", topicId: "rogue_1", grade: 10, expectedRuleDesc: "紧急作战和险路恶敌中，敌人的攻击力和生命+15%；使探索走向不同结局的事件出现概率大幅提升", matchedText: "紧急作战和险路恶敌中，敌人的攻击力和生命+15%", zoneId: FormulaZoneId.enemy_direct_max_hp_mul, value: 0.15, target: "all-enemies", stageKinds: ["emergency", "danger"] },
  { id: "difficulty-rogue-1-grade-14-elite-boss-atk", topicId: "rogue_1", grade: 14, expectedRuleDesc: "所有精英和领袖单位登场后20秒内受到物理和法术伤害-50%，攻击力+30%", matchedText: "攻击力+30%", zoneId: FormulaZoneId.enemy_direct_atk_mul, value: 0.3, target: "elite-and-boss", durationSeconds: 20 },

  { id: "difficulty-rogue-2-grade-5-boss-atk", topicId: "rogue_2", grade: 5, expectedRuleDesc: "所有领袖单位攻击力和防御力额外+15%", matchedText: "所有领袖单位攻击力和防御力额外+15%", zoneId: FormulaZoneId.enemy_direct_atk_mul, value: 0.15, target: "boss" },
  { id: "difficulty-rogue-2-grade-5-boss-def", topicId: "rogue_2", grade: 5, expectedRuleDesc: "所有领袖单位攻击力和防御力额外+15%", matchedText: "所有领袖单位攻击力和防御力额外+15%", zoneId: FormulaZoneId.enemy_direct_def_mul, value: 0.15, target: "boss" },
  { id: "difficulty-rogue-2-grade-11-elite-boss-hp", topicId: "rogue_2", grade: 11, expectedRuleDesc: "所有精英和领袖单位生命值+20%", matchedText: "所有精英和领袖单位生命值+20%", zoneId: FormulaZoneId.enemy_direct_max_hp_mul, value: 0.2, target: "elite-and-boss" },
  { id: "difficulty-rogue-2-grade-15-elite-boss-atk", topicId: "rogue_2", grade: 15, expectedRuleDesc: "所有精英和领袖单位攻击力、防御力和生命值额外+20%", matchedText: "所有精英和领袖单位攻击力、防御力和生命值额外+20%", zoneId: FormulaZoneId.enemy_direct_atk_mul, value: 0.2, target: "elite-and-boss" },
  { id: "difficulty-rogue-2-grade-15-elite-boss-def", topicId: "rogue_2", grade: 15, expectedRuleDesc: "所有精英和领袖单位攻击力、防御力和生命值额外+20%", matchedText: "所有精英和领袖单位攻击力、防御力和生命值额外+20%", zoneId: FormulaZoneId.enemy_direct_def_mul, value: 0.2, target: "elite-and-boss" },
  { id: "difficulty-rogue-2-grade-15-elite-boss-hp", topicId: "rogue_2", grade: 15, expectedRuleDesc: "所有精英和领袖单位攻击力、防御力和生命值额外+20%", matchedText: "所有精英和领袖单位攻击力、防御力和生命值额外+20%", zoneId: FormulaZoneId.enemy_direct_max_hp_mul, value: 0.2, target: "elite-and-boss" },
  { id: "difficulty-rogue-2-grade-18-elite-boss-atk", topicId: "rogue_2", grade: 18, expectedRuleDesc: "所有精英和领袖单位登场后20秒内受到物理和法术伤害-50%，攻击力+30%", matchedText: "攻击力+30%", zoneId: FormulaZoneId.enemy_direct_atk_mul, value: 0.3, target: "elite-and-boss", durationSeconds: 20 },

  { id: "difficulty-rogue-3-grade-4-elite-atk", topicId: "rogue_3", grade: 4, expectedRuleDesc: "精英敌人的攻击力+10%", matchedText: "精英敌人的攻击力+10%", zoneId: FormulaZoneId.enemy_direct_atk_mul, value: 0.1, target: "elite" },
  { id: "difficulty-rogue-3-grade-5-all-atk", topicId: "rogue_3", grade: 5, expectedRuleDesc: "所有敌人的攻击力+5%，生命值+5%", matchedText: "所有敌人的攻击力+5%", zoneId: FormulaZoneId.enemy_direct_atk_mul, value: 0.05, target: "all-enemies" },
  { id: "difficulty-rogue-3-grade-5-all-hp", topicId: "rogue_3", grade: 5, expectedRuleDesc: "所有敌人的攻击力+5%，生命值+5%", matchedText: "生命值+5%", zoneId: FormulaZoneId.enemy_direct_max_hp_mul, value: 0.05, target: "all-enemies" },
  { id: "difficulty-rogue-3-grade-7-all-def", topicId: "rogue_3", grade: 7, expectedRuleDesc: "所有敌人的防御力+10%", matchedText: "所有敌人的防御力+10%", zoneId: FormulaZoneId.enemy_direct_def_mul, value: 0.1, target: "all-enemies" },
  { id: "difficulty-rogue-3-grade-10-all-atk", topicId: "rogue_3", grade: 10, expectedRuleDesc: "所有敌人的攻击力+10%", matchedText: "所有敌人的攻击力+10%", zoneId: FormulaZoneId.enemy_direct_atk_mul, value: 0.1, target: "all-enemies" },
  { id: "difficulty-rogue-3-grade-14-all-def", topicId: "rogue_3", grade: 14, expectedRuleDesc: "所有敌人的防御力+5%，生命值+5%", matchedText: "所有敌人的防御力+5%", zoneId: FormulaZoneId.enemy_direct_def_mul, value: 0.05, target: "all-enemies" },
  { id: "difficulty-rogue-3-grade-14-all-hp", topicId: "rogue_3", grade: 14, expectedRuleDesc: "所有敌人的防御力+5%，生命值+5%", matchedText: "生命值+5%", zoneId: FormulaZoneId.enemy_direct_max_hp_mul, value: 0.05, target: "all-enemies" },
  { id: "difficulty-rogue-3-grade-15-all-atk", topicId: "rogue_3", grade: 15, expectedRuleDesc: "所有敌人的攻击力、防御力、生命值+10%，进入新层增长的坍缩值递增1点", matchedText: "所有敌人的攻击力、防御力、生命值+10%", zoneId: FormulaZoneId.enemy_direct_atk_mul, value: 0.1, target: "all-enemies" },
  { id: "difficulty-rogue-3-grade-15-all-def", topicId: "rogue_3", grade: 15, expectedRuleDesc: "所有敌人的攻击力、防御力、生命值+10%，进入新层增长的坍缩值递增1点", matchedText: "所有敌人的攻击力、防御力、生命值+10%", zoneId: FormulaZoneId.enemy_direct_def_mul, value: 0.1, target: "all-enemies" },
  { id: "difficulty-rogue-3-grade-15-all-hp", topicId: "rogue_3", grade: 15, expectedRuleDesc: "所有敌人的攻击力、防御力、生命值+10%，进入新层增长的坍缩值递增1点", matchedText: "所有敌人的攻击力、防御力、生命值+10%", zoneId: FormulaZoneId.enemy_direct_max_hp_mul, value: 0.1, target: "all-enemies" },

  { id: "difficulty-rogue-4-grade-3-thorn-hp", topicId: "rogue_4", grade: 3, expectedRuleDesc: "<年代之刺>与<饮泣之刺>的最大生命值+20%", matchedText: "<年代之刺>与<饮泣之刺>的最大生命值+20%", zoneId: FormulaZoneId.enemy_direct_max_hp_mul, value: 0.2, target: "specific-enemy", enemyIds: ["trap_760_skztzs", "enemy_2073_skzrck"] },
  { id: "difficulty-rogue-4-grade-4-elite-boss-hp", topicId: "rogue_4", grade: 4, expectedRuleDesc: "精英及领袖敌人的生命值+20%", matchedText: "精英及领袖敌人的生命值+20%", zoneId: FormulaZoneId.enemy_direct_max_hp_mul, value: 0.2, target: "elite-and-boss" },
  { id: "difficulty-rogue-4-grade-7-elite-boss-atk", topicId: "rogue_4", grade: 7, expectedRuleDesc: "精英及领袖敌人的攻击力+10%", matchedText: "精英及领袖敌人的攻击力+10%", zoneId: FormulaZoneId.enemy_direct_atk_mul, value: 0.1, target: "elite-and-boss" },

  { id: "difficulty-rogue-5-grade-4-all-hp", topicId: "rogue_5", grade: 4, expectedRuleDesc: "所有敌人的生命值+40%，便符的生命值+50%", matchedText: "所有敌人的生命值+40%", zoneId: FormulaZoneId.enemy_direct_max_hp_mul, value: 0.4, target: "all-enemies", excludedEnemyIds: ROGUE_5_GENERIC_EXCLUDED_ENEMIES },
  { id: "difficulty-rogue-5-grade-4-bianfu-hp", topicId: "rogue_5", grade: 4, expectedRuleDesc: "所有敌人的生命值+40%，便符的生命值+50%", matchedText: "便符的生命值+50%", zoneId: FormulaZoneId.enemy_direct_max_hp_mul, value: 0.5, target: "specific-enemy", enemyIds: ["enemy_2101_dyspll"] },
  { id: "difficulty-rogue-5-grade-8-elite-boss-def", topicId: "rogue_5", grade: 8, expectedRuleDesc: "招募五星干员希望消耗+1，精英和领袖敌人防御力、生命值+20％", matchedText: "精英和领袖敌人防御力、生命值+20％", zoneId: FormulaZoneId.enemy_direct_def_mul, value: 0.2, target: "elite-and-boss" },
  { id: "difficulty-rogue-5-grade-8-elite-boss-hp", topicId: "rogue_5", grade: 8, expectedRuleDesc: "招募五星干员希望消耗+1，精英和领袖敌人防御力、生命值+20％", matchedText: "精英和领袖敌人防御力、生命值+20％", zoneId: FormulaZoneId.enemy_direct_max_hp_mul, value: 0.2, target: "elite-and-boss" },
  { id: "difficulty-rogue-5-grade-11-all-atk", topicId: "rogue_5", grade: 11, expectedRuleDesc: "可留存的招募券数量减少，所有敌人的攻击力+20%", matchedText: "所有敌人的攻击力+20%", zoneId: FormulaZoneId.enemy_direct_atk_mul, value: 0.2, target: "all-enemies", excludedEnemyIds: ROGUE_5_GENERIC_EXCLUDED_ENEMIES },
  { id: "difficulty-rogue-5-grade-13-diaochang-hp", topicId: "rogue_5", grade: 13, expectedRuleDesc: "<雕伥>的最大生命值+50%；“易”切换晦明状态后获得更多的屏障", matchedText: "<雕伥>的最大生命值+50%", zoneId: FormulaZoneId.enemy_direct_max_hp_mul, value: 0.5, target: "specific-enemy", enemyIds: ["trap_222_rgdysm"] },
  { id: "difficulty-rogue-5-grade-15-xia-atk", topicId: "rogue_5", grade: 15, expectedRuleDesc: "招募六星干员希望消耗+1，受符的干员对自身及周围单位造成伤害与灼燃损伤，“瑕”的攻击力和生命值+50%", matchedText: "“瑕”的攻击力和生命值+50%", zoneId: FormulaZoneId.enemy_direct_atk_mul, value: 0.5, target: "specific-enemy", enemyIds: ["trap_226_dychss"] },
  { id: "difficulty-rogue-5-grade-15-xia-hp", topicId: "rogue_5", grade: 15, expectedRuleDesc: "招募六星干员希望消耗+1，受符的干员对自身及周围单位造成伤害与灼燃损伤，“瑕”的攻击力和生命值+50%", matchedText: "“瑕”的攻击力和生命值+50%", zoneId: FormulaZoneId.enemy_direct_max_hp_mul, value: 0.5, target: "specific-enemy", enemyIds: ["trap_226_dychss"] },
  { id: "difficulty-rogue-5-grade-17-boss-atk", topicId: "rogue_5", grade: 17, expectedRuleDesc: "领袖敌人攻击力+20％； 燃烛时招募及进阶干员减少希望变为1；“醉生”“谋炎”效果增强，“敛傲”“愠怒”攻击力提升", matchedText: "领袖敌人攻击力+20％", zoneId: FormulaZoneId.enemy_direct_atk_mul, value: 0.2, target: "boss" },

  { id: "difficulty-rogue-6-grade-5-all-hp", topicId: "rogue_6", grade: 5, expectedRuleDesc: "所有敌人最大生命+30%", matchedText: "所有敌人最大生命+30%", zoneId: FormulaZoneId.enemy_direct_max_hp_mul, value: 0.3, target: "all-enemies" },
  { id: "difficulty-rogue-6-grade-8-elite-boss-atk", topicId: "rogue_6", grade: 8, expectedRuleDesc: "精英及领袖敌人攻击力+15%", matchedText: "精英及领袖敌人攻击力+15%", zoneId: FormulaZoneId.enemy_direct_atk_mul, value: 0.15, target: "elite-and-boss" },
] as const;

/** 服务器给出明确最终倍率、但解包原文没有数值的指定敌人特例。 */
const SERVER_SPECIAL_RULES: readonly DifficultyProgramRule[] = [
  { id: "difficulty-rogue-4-grade-14-twinscar-hp", topicId: "rogue_4", grade: 14, expectedRuleDesc: "处于年代印痕中的敌人受到的物理与法术伤害降低50%，特雷西斯，黑冠尊主的最大生命值提升", matchedText: "特雷西斯，黑冠尊主的最大生命值提升至150%", zoneId: FormulaZoneId.enemy_final_max_hp_mul, value: 1.5, target: "specific-enemy", enemyIds: ["enemy_2081_skztxs"] },
  { id: "difficulty-rogue-4-grade-15-coffin-hp", topicId: "rogue_4", grade: 15, expectedRuleDesc: "招募6星干员的希望消耗+1，“放逐的黑棺”的最大生命值提升", matchedText: "“放逐的黑棺”的最大生命值提升至200%", zoneId: FormulaZoneId.enemy_final_max_hp_mul, value: 2, target: "specific-enemy", enemyIds: ["enemy_2083_skzhg"] },
  { id: "difficulty-rogue-6-grade-13-bolivar-def", topicId: "rogue_6", grade: 13, expectedRuleDesc: "非初始招募五星干员的希望+1，“玻利瓦尔，症结之核”的防御力提升，“未熄之地”额外造成灼燃损伤", matchedText: "“玻利瓦尔，症结之核”的防御力提升至150%", zoneId: FormulaZoneId.enemy_final_def_mul, value: 1.5, target: "specific-enemy", enemyIds: ["enemy_2150_shchmr"] },
  { id: "difficulty-rogue-6-grade-14-source-cube-hp", topicId: "rogue_6", grade: 14, expectedRuleDesc: "“猎犬proto”进入目标点后行动力-1，“源阶方”的最大生命值提升，激活后全场我方每秒流失生命", matchedText: "“源阶方”的最大生命值提升至200%", zoneId: FormulaZoneId.enemy_final_max_hp_mul, value: 2, target: "specific-enemy", enemyIds: ["enemy_2148_shorbb"] },
  { id: "difficulty-rogue-6-grade-15-proto-hound-hp", topicId: "rogue_6", grade: 15, expectedRuleDesc: "非初始招募六星干员的希望+1，“猎犬proto”的最大生命值提升且攻击时会为“卡德霍，黑流之源”回复生命", matchedText: "“猎犬proto”的最大生命值提升至150%", zoneId: FormulaZoneId.enemy_final_max_hp_mul, value: 1.5, target: "specific-enemy", enemyIds: ["enemy_2137_shsdgo"] },
] as const;

/** 三个服务器难度面板的“每层敌人攻击与生命绝对倍率”数组。 */
const FLOOR_MULTIPLIERS: Readonly<Record<string, { percentages: readonly number[]; maxFloor: number }>> = {
  rogue_4: { percentages: [0, 0, 0, 0, 0, 1, 2, 3, 5, 6, 7, 8, 10, 13, 16, 20, 21, 22, 22], maxFloor: 6 },
  rogue_5: { percentages: [0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 10, 11, 12, 13, 15], maxFloor: 7 },
  rogue_6: { percentages: [0, 0, 0, 0, 0, 1, 2, 3, 5, 6, 7, 8, 10, 12, 16, 20], maxFloor: 6 },
};

/** 服务器低难度减益只在当前精确等级生效，不随 NORMAL 累计。 */
const LOW_DIFFICULTY_FACTORS: Readonly<Record<string, Readonly<Record<number, { hp?: number; atk?: number }>>>> = {
  rogue_4: { 0: { hp: 0.8 }, 1: { hp: 0.85 }, 2: { hp: 0.9 } },
  rogue_5: { 0: { hp: 0.8, atk: 0.8 }, 1: { hp: 0.9, atk: 0.9 } },
  rogue_6: {
    0: { hp: 0.6, atk: 0.7 },
    1: { hp: 0.8, atk: 0.8 },
    2: { hp: 0.85, atk: 0.85 },
    3: { hp: 0.9, atk: 0.9 },
  },
};

/** 归一化敌人等级类型。 */
function enemyLevelType(context: FormulaActivationContext): string {
  return context.enemy?.levelType?.split(".").at(-1)?.toUpperCase() ?? "";
}

/** 将规则条件转换成 UI 可显示文本。 */
function describeConditions(rule: DifficultyProgramRule): string[] {
  const conditions: string[] = [];
  if (rule.target === "elite") conditions.push("目标：精英敌人");
  if (rule.target === "elite-and-boss") conditions.push("目标：精英或领袖敌人");
  if (rule.target === "boss") conditions.push("目标：领袖敌人");
  if (rule.enemyIds?.length) conditions.push(`目标 ID：${rule.enemyIds.join("、")}`);
  if (rule.excludedEnemyIds?.length) conditions.push(`排除目标 ID：${rule.excludedEnemyIds.join("、")}`);
  if (rule.stageKinds?.length) conditions.push(`关卡：${rule.stageKinds.join("、")}`);
  if (rule.durationSeconds !== undefined) conditions.push(`敌人登场前 ${rule.durationSeconds} 秒`);
  return conditions;
}

/** 保守判断一条难度规则的运行时条件。 */
function ruleActive(rule: DifficultyProgramRule, context: FormulaActivationContext): boolean {
  const levelType = enemyLevelType(context);
  if (rule.target === "elite" && levelType !== "ELITE") return false;
  if (rule.target === "elite-and-boss" && !["ELITE", "BOSS"].includes(levelType)) return false;
  if (rule.target === "boss" && levelType !== "BOSS") return false;
  if (rule.target === "specific-enemy" && !rule.enemyIds?.includes(context.enemy?.id ?? "")) return false;
  if (rule.excludedEnemyIds?.includes(context.enemy?.id ?? "")) return false;
  if (rule.stageKinds?.length) {
    const matches = (rule.stageKinds.includes("emergency") && context.stage?.isEmergency)
      || (rule.stageKinds.includes("danger") && context.stage?.isDanger);
    if (!matches) return false;
  }
  if (rule.durationSeconds !== undefined && (
    context.elapsedSeconds === undefined
    || context.elapsedSeconds > rule.durationSeconds
  )) return false;
  return true;
}

/** 把通过完整原文护栏的规则转换成执行贡献。 */
function contributionFromRule(rule: DifficultyProgramRule): DifficultyProgramContribution {
  return {
    effectId: rule.id,
    label: rule.matchedText,
    zoneId: rule.zoneId,
    value: rule.value,
    conditions: describeConditions(rule),
    active: (context) => ruleActive(rule, context),
  };
}

/** 取得某个等级自身新增、并通过完整 ruleDesc 护栏的累计规则。 */
export function resolveDifficultyPrograms(
  topicId: string,
  difficulty: ReportDifficulty,
): DifficultyProgramContribution[] {
  if (difficulty.modeDifficulty !== "NORMAL") return [];
  return [...GRAPH_RULES, ...SERVER_SPECIAL_RULES]
    .filter((rule) =>
      rule.topicId === topicId
      && rule.grade === difficulty.grade
      && rule.expectedRuleDesc === difficulty.ruleDesc)
    .map(contributionFromRule);
}

/** 取得只依赖当前所选等级的逐层倍率与低难度减益。 */
export function resolveSelectedDifficultyPrograms(
  topicId: string,
  difficulty: ReportDifficulty | null,
  currentFloor: number | undefined,
): DifficultyProgramContribution[] {
  if (!difficulty || difficulty.modeDifficulty !== "NORMAL") return [];
  const contributions: DifficultyProgramContribution[] = [];
  const floorRule = FLOOR_MULTIPLIERS[topicId];
  const percentage = floorRule?.percentages[difficulty.grade] ?? 0;
  if (
    percentage > 0
    && currentFloor !== undefined
    && Number.isInteger(currentFloor)
    && currentFloor >= 1
    && currentFloor <= (floorRule?.maxFloor ?? 0)
  ) {
    const factor = (1 + percentage / 100) ** currentFloor;
    for (const [zoneId, attribute] of [
      [FormulaZoneId.enemy_final_atk_mul, "攻击力"],
      [FormulaZoneId.enemy_final_max_hp_mul, "最大生命"],
    ] as const) {
      contributions.push({
        effectId: `difficulty-${topicId}-grade-${difficulty.grade}-floor-${attribute}`,
        label: `每层敌人${attribute}+${percentage}%（当前第 ${currentFloor} 层）`,
        zoneId,
        value: factor,
        conditions: [`当前层数：${currentFloor}`],
        active: (context) => topicId !== "rogue_5"
          || !ROGUE_5_GENERIC_EXCLUDED_ENEMIES.some((id) => id === context.enemy?.id),
      });
    }
  }

  const lowFactors = LOW_DIFFICULTY_FACTORS[topicId]?.[difficulty.grade];
  for (const [attribute, factor] of Object.entries(lowFactors ?? {})) {
    const zoneId = attribute === "hp"
      ? FormulaZoneId.enemy_final_max_hp_mul
      : FormulaZoneId.enemy_final_atk_mul;
    const displayName = attribute === "hp" ? "最大生命" : "攻击力";
    contributions.push({
      effectId: `difficulty-${topicId}-grade-${difficulty.grade}-low-${attribute}`,
      label: `仅该难度：敌人${displayName}-${Math.round((1 - factor) * 100)}%`,
      zoneId,
      value: factor,
      conditions: ["仅当前精确难度生效"],
      active: () => true,
    });
  }
  return contributions;
}

/** NORMAL 只累计当前等级以前的普通词条；其他模式完全不进入难度程序。 */
export function selectAppliedDifficulties(
  difficulties: readonly ReportDifficulty[],
  selected: ReportDifficulty | null,
): ReportDifficulty[] {
  if (!selected || selected.modeDifficulty !== "NORMAL") return [];
  return difficulties.filter((difficulty) =>
    difficulty.modeDifficulty === "NORMAL" && difficulty.grade <= selected.grade);
}
