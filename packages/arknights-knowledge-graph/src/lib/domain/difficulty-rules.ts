/**
 * 集成战略难度原始描述到公式乘区的可版本化语义规则。
 *
 * 客户端 GameData 没有对应的统一 battle buff；因此每条规则都用完整 ruleDesc
 * 作为版本护栏。人工维护的主题规则必须放在 formula 的独立主题程序中。
 */

import type { FormulaDamageType } from "../formula/ast.js";
import type { FormulaZoneId } from "./damage-zones.js";

/** 难度规则当前支持的敌人范围。 */
export type RogueDifficultyTarget =
  | "all-enemies"
  | "elite"
  | "elite-and-boss"
  | "boss"
  | "character"
  | "battle";

/** 规则对整条难度描述的结构化覆盖程度。 */
export type RogueDifficultyRuleCoverage = "full" | "partial";

/** 一条可被 Kuzu 与 formula 共同消费的难度语义规则。 */
export interface RogueDifficultySemanticRule {
  /** 稳定规则 ID。 */
  id: string;
  /** 规则语义版本。 */
  version: number;
  /** 集成战略主题 ID。 */
  topicId: string;
  /** 原始 modeDifficulty。 */
  modeDifficulty: string;
  /** 此增量首次出现的原始难度等级。 */
  grade: number;
  /** 完整原始描述；同时承担游戏数据版本护栏。 */
  expectedRuleDesc: string;
  /** 本条规则实际结构化的原文片段。 */
  matchedText: string;
  /** 整条描述是否还包含无法进入当前公式的机制。 */
  coverage: RogueDifficultyRuleCoverage;
  /** 目标公式乘区。 */
  zoneId: FormulaZoneId;
  /** 已规范化为目标乘区约定的数值。 */
  value: number;
  /** 难度效果作用目标。 */
  target: RogueDifficultyTarget;
  /** 只对指定伤害类型生效。 */
  damageTypes?: readonly FormulaDamageType[];
  /** 仅在这些关卡类别中生效。 */
  stageKinds?: readonly ("emergency" | "danger")[];
  /** 从敌人登场开始计算的生效秒数。 */
  durationSeconds?: number;
  /** 目标必须具有的战斗 buff；缺少运行时事实时保守停用。 */
  requiredEnemyBuffs?: readonly string[];
  /** 证据状态；难度实现未出现在客户端战斗模板中，因此当前均为 inferred。 */
  status: "inferred";
  /** 规则置信度。 */
  confidence: number;
  /** 面向图谱和公式 UI 的乘区解释。 */
  description: string;
}

/** 物理与法术减伤的稳定伤害类型集合。 */
const PHYSICAL_AND_MAGICAL = ["physical", "magical"] as const;

/** 未限定伤害类型的“受到伤害降低”覆盖公式簿全部伤害类型。 */
const ALL_DAMAGE_TYPES = ["physical", "magical", "pure", "elemental"] as const;

/**
 * 难度语义规则表。
 * 数值只来自同条 expectedRuleDesc；主题机制、招募消耗和无数值描述不会伪造贡献。
 */
export const ROGUE_DIFFICULTY_SEMANTIC_RULES: readonly RogueDifficultySemanticRule[] = [
  // 傀影与猩红孤钻。
  { id: "difficulty-rogue-1-grade-5-elite-boss-hp", version: 1, topicId: "rogue_1", modeDifficulty: "NORMAL", grade: 5, expectedRuleDesc: "所有精英和领袖敌人的生命值+20%", matchedText: "所有精英和领袖敌人的生命值+20%", coverage: "full", zoneId: "OUTER_ENEMY_MAX_HP", value: 0.2, target: "elite-and-boss", status: "inferred", confidence: 0.95, description: "难度在进战斗前提高精英与领袖敌人最大生命，进入局外敌人生命区。" },
  { id: "difficulty-rogue-1-grade-10-stage-atk", version: 1, topicId: "rogue_1", modeDifficulty: "NORMAL", grade: 10, expectedRuleDesc: "紧急作战和险路恶敌中，敌人的攻击力和生命+15%；使探索走向不同结局的事件出现概率大幅提升", matchedText: "紧急作战和险路恶敌中，敌人的攻击力和生命+15%", coverage: "partial", zoneId: "OUTER_ENEMY_ATK", value: 0.15, target: "all-enemies", stageKinds: ["emergency", "danger"], status: "inferred", confidence: 0.9, description: "限定关卡的敌人攻击力增量进入局外敌人攻击区。" },
  { id: "difficulty-rogue-1-grade-10-stage-hp", version: 1, topicId: "rogue_1", modeDifficulty: "NORMAL", grade: 10, expectedRuleDesc: "紧急作战和险路恶敌中，敌人的攻击力和生命+15%；使探索走向不同结局的事件出现概率大幅提升", matchedText: "紧急作战和险路恶敌中，敌人的攻击力和生命+15%", coverage: "partial", zoneId: "OUTER_ENEMY_MAX_HP", value: 0.15, target: "all-enemies", stageKinds: ["emergency", "danger"], status: "inferred", confidence: 0.9, description: "限定关卡的敌人生命增量进入局外敌人生命区。" },
  { id: "difficulty-rogue-1-grade-14-resistance", version: 1, topicId: "rogue_1", modeDifficulty: "NORMAL", grade: 14, expectedRuleDesc: "所有精英和领袖单位登场后20秒内受到物理和法术伤害-50%，攻击力+30%", matchedText: "所有精英和领袖单位登场后20秒内受到物理和法术伤害-50%", coverage: "full", zoneId: "OUTER_ENEMY_DAMAGE_RESISTANCE", value: 0.5, target: "elite-and-boss", damageTypes: PHYSICAL_AND_MAGICAL, durationSeconds: 20, status: "inferred", confidence: 0.9, description: "难度提供的限时物法减伤进入局外敌人承伤减免区。" },
  { id: "difficulty-rogue-1-grade-14-atk", version: 1, topicId: "rogue_1", modeDifficulty: "NORMAL", grade: 14, expectedRuleDesc: "所有精英和领袖单位登场后20秒内受到物理和法术伤害-50%，攻击力+30%", matchedText: "攻击力+30%", coverage: "full", zoneId: "OUTER_ENEMY_ATK", value: 0.3, target: "elite-and-boss", durationSeconds: 20, status: "inferred", confidence: 0.9, description: "难度提供的限时攻击力增量进入局外敌人攻击区。" },

  // 水月与深蓝之树。
  ...[1, 8, 13].map((grade): RogueDifficultySemanticRule => ({ id: `difficulty-rogue-2-grade-${grade}-elemental-impairment`, version: 1, topicId: "rogue_2", modeDifficulty: "NORMAL", grade, expectedRuleDesc: "受到的元素损伤提高15%", matchedText: "受到的元素损伤提高15%", coverage: "full", zoneId: "CHAR_ELEMENTAL_IMPAIRMENT_AMPLIFICATION", value: 0.15, target: "character", status: "inferred", confidence: 0.95, description: "难度提高我方承受的元素损伤，进入我方元素损伤提高区。" })),
  ...[3, 12].map((grade): RogueDifficultySemanticRule => ({ id: `difficulty-rogue-2-grade-${grade}-enemy-res`, version: 1, topicId: "rogue_2", modeDifficulty: "NORMAL", grade, expectedRuleDesc: "所有敌人法术抗性+10", matchedText: "所有敌人法术抗性+10", coverage: "full", zoneId: "ENEMY_RES_ADD", value: 10, target: "all-enemies", status: "inferred", confidence: 0.95, description: "难度直接增加敌人法术抗性点数。" })),
  { id: "difficulty-rogue-2-grade-5-boss-atk", version: 1, topicId: "rogue_2", modeDifficulty: "NORMAL", grade: 5, expectedRuleDesc: "所有领袖单位攻击力和防御力额外+15%", matchedText: "所有领袖单位攻击力和防御力额外+15%", coverage: "full", zoneId: "OUTER_ENEMY_ATK", value: 0.15, target: "boss", status: "inferred", confidence: 0.95, description: "领袖攻击力难度增量进入局外敌人攻击区。" },
  { id: "difficulty-rogue-2-grade-5-boss-def", version: 1, topicId: "rogue_2", modeDifficulty: "NORMAL", grade: 5, expectedRuleDesc: "所有领袖单位攻击力和防御力额外+15%", matchedText: "所有领袖单位攻击力和防御力额外+15%", coverage: "full", zoneId: "OUTER_ENEMY_DEF", value: 0.15, target: "boss", status: "inferred", confidence: 0.95, description: "领袖防御力难度增量进入局外敌人防御区。" },
  { id: "difficulty-rogue-2-grade-7-move-speed", version: 1, topicId: "rogue_2", modeDifficulty: "NORMAL", grade: 7, expectedRuleDesc: "所有敌人的移动速度+15%", matchedText: "所有敌人的移动速度+15%", coverage: "full", zoneId: "OUTER_ENEMY_MOVE_SPEED", value: 0.15, target: "all-enemies", status: "inferred", confidence: 0.95, description: "敌人移动速度百分比进入局外敌人移动速度区。" },
  { id: "difficulty-rogue-2-grade-9-attack-speed", version: 1, topicId: "rogue_2", modeDifficulty: "NORMAL", grade: 9, expectedRuleDesc: "所有敌人的攻击速度+15", matchedText: "所有敌人的攻击速度+15", coverage: "full", zoneId: "ENEMY_ATTACK_SPEED_ADD", value: 15, target: "all-enemies", status: "inferred", confidence: 0.95, description: "敌人攻击速度点数进入敌人攻击速度加算区。" },
  { id: "difficulty-rogue-2-grade-11-elite-boss-hp", version: 1, topicId: "rogue_2", modeDifficulty: "NORMAL", grade: 11, expectedRuleDesc: "所有精英和领袖单位生命值+20%", matchedText: "所有精英和领袖单位生命值+20%", coverage: "full", zoneId: "OUTER_ENEMY_MAX_HP", value: 0.2, target: "elite-and-boss", status: "inferred", confidence: 0.95, description: "精英与领袖最大生命难度增量进入局外敌人生命区。" },
  { id: "difficulty-rogue-2-grade-14-deploy-limit", version: 1, topicId: "rogue_2", modeDifficulty: "NORMAL", grade: 14, expectedRuleDesc: "可同时部署人数-1", matchedText: "可同时部署人数-1", coverage: "full", zoneId: "DEPLOY_LIMIT_ADD", value: -1, target: "battle", status: "inferred", confidence: 0.95, description: "难度对可部署人数的点数修改进入部署上限加算区。" },
  ...(["OUTER_ENEMY_ATK", "OUTER_ENEMY_DEF", "OUTER_ENEMY_MAX_HP"] as const).map((zoneId, index): RogueDifficultySemanticRule => ({ id: `difficulty-rogue-2-grade-15-elite-boss-${["atk", "def", "hp"][index]}`, version: 1, topicId: "rogue_2", modeDifficulty: "NORMAL", grade: 15, expectedRuleDesc: "所有精英和领袖单位攻击力、防御力和生命值额外+20%", matchedText: "所有精英和领袖单位攻击力、防御力和生命值额外+20%", coverage: "full", zoneId, value: 0.2, target: "elite-and-boss", status: "inferred", confidence: 0.95, description: "精英与领袖的难度属性增量进入对应局外敌人属性区。" })),
  { id: "difficulty-rogue-2-grade-18-resistance", version: 1, topicId: "rogue_2", modeDifficulty: "NORMAL", grade: 18, expectedRuleDesc: "所有精英和领袖单位登场后20秒内受到物理和法术伤害-50%，攻击力+30%", matchedText: "所有精英和领袖单位登场后20秒内受到物理和法术伤害-50%", coverage: "full", zoneId: "OUTER_ENEMY_DAMAGE_RESISTANCE", value: 0.5, target: "elite-and-boss", damageTypes: PHYSICAL_AND_MAGICAL, durationSeconds: 20, status: "inferred", confidence: 0.9, description: "难度提供的限时物法减伤进入局外敌人承伤减免区。" },
  { id: "difficulty-rogue-2-grade-18-atk", version: 1, topicId: "rogue_2", modeDifficulty: "NORMAL", grade: 18, expectedRuleDesc: "所有精英和领袖单位登场后20秒内受到物理和法术伤害-50%，攻击力+30%", matchedText: "攻击力+30%", coverage: "full", zoneId: "OUTER_ENEMY_ATK", value: 0.3, target: "elite-and-boss", durationSeconds: 20, status: "inferred", confidence: 0.9, description: "难度提供的限时攻击力增量进入局外敌人攻击区。" },

  // 探索者的银凇止境。
  { id: "difficulty-rogue-3-grade-4-elite-atk", version: 1, topicId: "rogue_3", modeDifficulty: "NORMAL", grade: 4, expectedRuleDesc: "精英敌人的攻击力+10%", matchedText: "精英敌人的攻击力+10%", coverage: "full", zoneId: "OUTER_ENEMY_ATK", value: 0.1, target: "elite", status: "inferred", confidence: 0.95, description: "精英攻击力难度增量进入局外敌人攻击区。" },
  { id: "difficulty-rogue-3-grade-5-atk", version: 1, topicId: "rogue_3", modeDifficulty: "NORMAL", grade: 5, expectedRuleDesc: "所有敌人的攻击力+5%，生命值+5%", matchedText: "所有敌人的攻击力+5%", coverage: "full", zoneId: "OUTER_ENEMY_ATK", value: 0.05, target: "all-enemies", status: "inferred", confidence: 0.95, description: "全敌攻击力难度增量进入局外敌人攻击区。" },
  { id: "difficulty-rogue-3-grade-5-hp", version: 1, topicId: "rogue_3", modeDifficulty: "NORMAL", grade: 5, expectedRuleDesc: "所有敌人的攻击力+5%，生命值+5%", matchedText: "生命值+5%", coverage: "full", zoneId: "OUTER_ENEMY_MAX_HP", value: 0.05, target: "all-enemies", status: "inferred", confidence: 0.95, description: "全敌最大生命难度增量进入局外敌人生命区。" },
  { id: "difficulty-rogue-3-grade-7-def", version: 1, topicId: "rogue_3", modeDifficulty: "NORMAL", grade: 7, expectedRuleDesc: "所有敌人的防御力+10%", matchedText: "所有敌人的防御力+10%", coverage: "full", zoneId: "OUTER_ENEMY_DEF", value: 0.1, target: "all-enemies", status: "inferred", confidence: 0.95, description: "全敌防御力难度增量进入局外敌人防御区。" },
  { id: "difficulty-rogue-3-grade-8-resistance", version: 1, topicId: "rogue_3", modeDifficulty: "NORMAL", grade: 8, expectedRuleDesc: "所有敌人受到的物理和法术伤害-5%", matchedText: "所有敌人受到的物理和法术伤害-5%", coverage: "full", zoneId: "OUTER_ENEMY_DAMAGE_RESISTANCE", value: 0.05, target: "all-enemies", damageTypes: PHYSICAL_AND_MAGICAL, status: "inferred", confidence: 0.95, description: "难度物法减伤进入局外敌人承伤减免区。" },
  { id: "difficulty-rogue-3-grade-9-deploy-limit", version: 1, topicId: "rogue_3", modeDifficulty: "NORMAL", grade: 9, expectedRuleDesc: "可同时部署人数-1", matchedText: "可同时部署人数-1", coverage: "full", zoneId: "DEPLOY_LIMIT_ADD", value: -1, target: "battle", status: "inferred", confidence: 0.95, description: "难度对可部署人数的点数修改进入部署上限加算区。" },
  { id: "difficulty-rogue-3-grade-10-atk", version: 1, topicId: "rogue_3", modeDifficulty: "NORMAL", grade: 10, expectedRuleDesc: "所有敌人的攻击力+10%", matchedText: "所有敌人的攻击力+10%", coverage: "full", zoneId: "OUTER_ENEMY_ATK", value: 0.1, target: "all-enemies", status: "inferred", confidence: 0.95, description: "全敌攻击力难度增量进入局外敌人攻击区。" },
  { id: "difficulty-rogue-3-grade-11-boss-resistance", version: 1, topicId: "rogue_3", modeDifficulty: "NORMAL", grade: 11, expectedRuleDesc: "领袖敌人受到的物理和法术伤害-5%", matchedText: "领袖敌人受到的物理和法术伤害-5%", coverage: "full", zoneId: "OUTER_ENEMY_DAMAGE_RESISTANCE", value: 0.05, target: "boss", damageTypes: PHYSICAL_AND_MAGICAL, status: "inferred", confidence: 0.95, description: "领袖物法减伤进入局外敌人承伤减免区。" },
  { id: "difficulty-rogue-3-grade-13-elite-boss-resistance", version: 1, topicId: "rogue_3", modeDifficulty: "NORMAL", grade: 13, expectedRuleDesc: "精英和领袖敌人受到的物理和法术伤害-5%", matchedText: "精英和领袖敌人受到的物理和法术伤害-5%", coverage: "full", zoneId: "OUTER_ENEMY_DAMAGE_RESISTANCE", value: 0.05, target: "elite-and-boss", damageTypes: PHYSICAL_AND_MAGICAL, status: "inferred", confidence: 0.95, description: "精英与领袖物法减伤进入局外敌人承伤减免区。" },
  { id: "difficulty-rogue-3-grade-14-def", version: 1, topicId: "rogue_3", modeDifficulty: "NORMAL", grade: 14, expectedRuleDesc: "所有敌人的防御力+5%，生命值+5%", matchedText: "所有敌人的防御力+5%", coverage: "full", zoneId: "OUTER_ENEMY_DEF", value: 0.05, target: "all-enemies", status: "inferred", confidence: 0.95, description: "全敌防御力难度增量进入局外敌人防御区。" },
  { id: "difficulty-rogue-3-grade-14-hp", version: 1, topicId: "rogue_3", modeDifficulty: "NORMAL", grade: 14, expectedRuleDesc: "所有敌人的防御力+5%，生命值+5%", matchedText: "生命值+5%", coverage: "full", zoneId: "OUTER_ENEMY_MAX_HP", value: 0.05, target: "all-enemies", status: "inferred", confidence: 0.95, description: "全敌最大生命难度增量进入局外敌人生命区。" },
  ...(["OUTER_ENEMY_ATK", "OUTER_ENEMY_DEF", "OUTER_ENEMY_MAX_HP"] as const).map((zoneId, index): RogueDifficultySemanticRule => ({ id: `difficulty-rogue-3-grade-15-${["atk", "def", "hp"][index]}`, version: 1, topicId: "rogue_3", modeDifficulty: "NORMAL", grade: 15, expectedRuleDesc: "所有敌人的攻击力、防御力、生命值+10%，进入新层增长的坍缩值递增1点", matchedText: "所有敌人的攻击力、防御力、生命值+10%", coverage: "partial", zoneId, value: 0.1, target: "all-enemies", status: "inferred", confidence: 0.95, description: "全敌难度属性增量进入对应局外敌人属性区。" })),

  // 萨卡兹的无终奇语。
  { id: "difficulty-rogue-4-grade-4-elite-boss-hp", version: 1, topicId: "rogue_4", modeDifficulty: "NORMAL", grade: 4, expectedRuleDesc: "精英及领袖敌人的生命值+20%", matchedText: "精英及领袖敌人的生命值+20%", coverage: "full", zoneId: "OUTER_ENEMY_MAX_HP", value: 0.2, target: "elite-and-boss", status: "inferred", confidence: 0.95, description: "精英与领袖最大生命难度增量进入局外敌人生命区。" },
  { id: "difficulty-rogue-4-grade-7-elite-boss-atk", version: 1, topicId: "rogue_4", modeDifficulty: "NORMAL", grade: 7, expectedRuleDesc: "精英及领袖敌人的攻击力+10%", matchedText: "精英及领袖敌人的攻击力+10%", coverage: "full", zoneId: "OUTER_ENEMY_ATK", value: 0.1, target: "elite-and-boss", status: "inferred", confidence: 0.95, description: "精英与领袖攻击力难度增量进入局外敌人攻击区。" },
  { id: "difficulty-rogue-4-grade-9-apoptosis", version: 1, topicId: "rogue_4", modeDifficulty: "NORMAL", grade: 9, expectedRuleDesc: "我方单位受到的凋亡损伤提升30%", matchedText: "我方单位受到的凋亡损伤提升30%", coverage: "full", zoneId: "CHAR_ELEMENTAL_IMPAIRMENT_AMPLIFICATION", value: 0.3, target: "character", status: "inferred", confidence: 0.9, description: "凋亡损伤属于我方承受的元素损伤，进入我方元素损伤提高区。" },
  { id: "difficulty-rogue-4-grade-10-deploy-limit", version: 1, topicId: "rogue_4", modeDifficulty: "NORMAL", grade: 10, expectedRuleDesc: "可同时部署人数-1，精英及领袖敌人受到的物理与法术伤害降低10%", matchedText: "可同时部署人数-1", coverage: "full", zoneId: "DEPLOY_LIMIT_ADD", value: -1, target: "battle", status: "inferred", confidence: 0.95, description: "难度对可部署人数的点数修改进入部署上限加算区。" },
  { id: "difficulty-rogue-4-grade-10-resistance", version: 1, topicId: "rogue_4", modeDifficulty: "NORMAL", grade: 10, expectedRuleDesc: "可同时部署人数-1，精英及领袖敌人受到的物理与法术伤害降低10%", matchedText: "精英及领袖敌人受到的物理与法术伤害降低10%", coverage: "full", zoneId: "OUTER_ENEMY_DAMAGE_RESISTANCE", value: 0.1, target: "elite-and-boss", damageTypes: PHYSICAL_AND_MAGICAL, status: "inferred", confidence: 0.95, description: "精英与领袖物法减伤进入局外敌人承伤减免区。" },
  { id: "difficulty-rogue-4-grade-14-imprint-resistance", version: 1, topicId: "rogue_4", modeDifficulty: "NORMAL", grade: 14, expectedRuleDesc: "处于年代印痕中的敌人受到的物理与法术伤害降低50%，特雷西斯，黑冠尊主的最大生命值提升", matchedText: "处于年代印痕中的敌人受到的物理与法术伤害降低50%", coverage: "partial", zoneId: "OUTER_ENEMY_DAMAGE_RESISTANCE", value: 0.5, target: "all-enemies", damageTypes: PHYSICAL_AND_MAGICAL, requiredEnemyBuffs: ["年代印痕"], status: "inferred", confidence: 0.8, description: "年代印痕条件下的物法减伤进入局外敌人承伤减免区；缺少目标 buff 事实时停用。" },

  // 界园志异。
  { id: "difficulty-rogue-5-grade-4-all-hp", version: 1, topicId: "rogue_5", modeDifficulty: "NORMAL", grade: 4, expectedRuleDesc: "所有敌人的生命值+40%，便符的生命值+50%", matchedText: "所有敌人的生命值+40%", coverage: "partial", zoneId: "OUTER_ENEMY_MAX_HP", value: 0.4, target: "all-enemies", status: "inferred", confidence: 0.95, description: "全敌最大生命难度增量进入局外敌人生命区。" },
  { id: "difficulty-rogue-5-grade-5-resistance", version: 1, topicId: "rogue_5", modeDifficulty: "NORMAL", grade: 5, expectedRuleDesc: "所有敌人受到物理和法术伤害降低10％", matchedText: "所有敌人受到物理和法术伤害降低10％", coverage: "full", zoneId: "OUTER_ENEMY_DAMAGE_RESISTANCE", value: 0.1, target: "all-enemies", damageTypes: PHYSICAL_AND_MAGICAL, status: "inferred", confidence: 0.95, description: "难度物法减伤进入局外敌人承伤减免区。" },
  { id: "difficulty-rogue-5-grade-8-elite-boss-def", version: 1, topicId: "rogue_5", modeDifficulty: "NORMAL", grade: 8, expectedRuleDesc: "招募五星干员希望消耗+1，精英和领袖敌人防御力、生命值+20％", matchedText: "精英和领袖敌人防御力、生命值+20％", coverage: "partial", zoneId: "OUTER_ENEMY_DEF", value: 0.2, target: "elite-and-boss", status: "inferred", confidence: 0.95, description: "精英与领袖防御力难度增量进入局外敌人防御区。" },
  { id: "difficulty-rogue-5-grade-8-elite-boss-hp", version: 1, topicId: "rogue_5", modeDifficulty: "NORMAL", grade: 8, expectedRuleDesc: "招募五星干员希望消耗+1，精英和领袖敌人防御力、生命值+20％", matchedText: "精英和领袖敌人防御力、生命值+20％", coverage: "partial", zoneId: "OUTER_ENEMY_MAX_HP", value: 0.2, target: "elite-and-boss", status: "inferred", confidence: 0.95, description: "精英与领袖最大生命难度增量进入局外敌人生命区。" },
  { id: "difficulty-rogue-5-grade-9-deploy-limit", version: 1, topicId: "rogue_5", modeDifficulty: "NORMAL", grade: 9, expectedRuleDesc: "岁兽残识中的作战数量增加，可同时部署人数-1", matchedText: "可同时部署人数-1", coverage: "partial", zoneId: "DEPLOY_LIMIT_ADD", value: -1, target: "battle", status: "inferred", confidence: 0.95, description: "难度对可部署人数的点数修改进入部署上限加算区。" },
  { id: "difficulty-rogue-5-grade-11-all-atk", version: 1, topicId: "rogue_5", modeDifficulty: "NORMAL", grade: 11, expectedRuleDesc: "可留存的招募券数量减少，所有敌人的攻击力+20%", matchedText: "所有敌人的攻击力+20%", coverage: "partial", zoneId: "OUTER_ENEMY_ATK", value: 0.2, target: "all-enemies", status: "inferred", confidence: 0.95, description: "全敌攻击力难度增量进入局外敌人攻击区。" },
  { id: "difficulty-rogue-5-grade-14-boss-resistance", version: 1, topicId: "rogue_5", modeDifficulty: "NORMAL", grade: 14, expectedRuleDesc: "领袖敌人受到伤害降低20％；“岁”的攻击力提升，遭到“岁”拍击并退场的干员，再部署时间大幅提升", matchedText: "领袖敌人受到伤害降低20％", coverage: "partial", zoneId: "OUTER_ENEMY_DAMAGE_RESISTANCE", value: 0.2, target: "boss", damageTypes: ALL_DAMAGE_TYPES, status: "inferred", confidence: 0.9, description: "未限定类型的领袖减伤进入局外敌人承伤减免区。" },
  { id: "difficulty-rogue-5-grade-16-attack-speed", version: 1, topicId: "rogue_5", modeDifficulty: "NORMAL", grade: 16, expectedRuleDesc: "所有敌人攻击速度+20；“后兽”生命值提升，“矩兽”攻击力提升，“后兽”召唤的敌人有所不同", matchedText: "所有敌人攻击速度+20", coverage: "partial", zoneId: "ENEMY_ATTACK_SPEED_ADD", value: 20, target: "all-enemies", status: "inferred", confidence: 0.95, description: "敌人攻击速度点数进入敌人攻击速度加算区。" },
  { id: "difficulty-rogue-5-grade-17-boss-atk", version: 1, topicId: "rogue_5", modeDifficulty: "NORMAL", grade: 17, expectedRuleDesc: "领袖敌人攻击力+20％； 燃烛时招募及进阶干员减少希望变为1；“醉生”“谋炎”效果增强，“敛傲”“愠怒”攻击力提升", matchedText: "领袖敌人攻击力+20％", coverage: "partial", zoneId: "OUTER_ENEMY_ATK", value: 0.2, target: "boss", status: "inferred", confidence: 0.95, description: "领袖攻击力难度增量进入局外敌人攻击区。" },

  // 岁月界园。
  { id: "difficulty-rogue-6-grade-5-all-hp", version: 1, topicId: "rogue_6", modeDifficulty: "NORMAL", grade: 5, expectedRuleDesc: "所有敌人最大生命+30%", matchedText: "所有敌人最大生命+30%", coverage: "full", zoneId: "OUTER_ENEMY_MAX_HP", value: 0.3, target: "all-enemies", status: "inferred", confidence: 0.95, description: "全敌最大生命难度增量进入局外敌人生命区。" },
  { id: "difficulty-rogue-6-grade-8-elite-boss-atk", version: 1, topicId: "rogue_6", modeDifficulty: "NORMAL", grade: 8, expectedRuleDesc: "精英及领袖敌人攻击力+15%", matchedText: "精英及领袖敌人攻击力+15%", coverage: "full", zoneId: "OUTER_ENEMY_ATK", value: 0.15, target: "elite-and-boss", status: "inferred", confidence: 0.95, description: "精英与领袖攻击力难度增量进入局外敌人攻击区。" },
  { id: "difficulty-rogue-6-grade-10-deploy-limit", version: 1, topicId: "rogue_6", modeDifficulty: "NORMAL", grade: 10, expectedRuleDesc: "可同时部署人数-1，初始目标生命上限-2", matchedText: "可同时部署人数-1", coverage: "partial", zoneId: "DEPLOY_LIMIT_ADD", value: -1, target: "battle", status: "inferred", confidence: 0.95, description: "难度对可部署人数的点数修改进入部署上限加算区。" },
  { id: "difficulty-rogue-6-grade-11-boss-resistance", version: 1, topicId: "rogue_6", modeDifficulty: "NORMAL", grade: 11, expectedRuleDesc: "领袖敌人受到的伤害降低20％", matchedText: "领袖敌人受到的伤害降低20％", coverage: "full", zoneId: "OUTER_ENEMY_DAMAGE_RESISTANCE", value: 0.2, target: "boss", damageTypes: ALL_DAMAGE_TYPES, status: "inferred", confidence: 0.9, description: "未限定类型的领袖减伤进入局外敌人承伤减免区。" },
] as const;
