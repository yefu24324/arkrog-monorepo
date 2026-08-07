/**
 * AI_GENERATED：此文件可根据人类知识、最新 report 数据与图谱证据重新生成。
 * 禁止将本文件作为第一证据；纠正应写入 mechanics-knowledge。
 */

import type {
  MechanicsEffectInput,
  MechanicsProgram,
  MechanicsProgramResolution,
} from "../contracts/program.js";
import {
  characterAttributeAdditionProgram,
  characterAttributeMultiplierProgram,
  layeredCharacterAttributeAdditionProgram,
  layeredCharacterAttributeMultiplierProgram,
} from "./attribute/character-attributes.js";
import { conditionalCharacterAttributeProgram } from "./attribute/conditional-character-attributes.js";
import {
  enemyAttackMultiplierProgram,
  enemyAttributeProgram,
  enemyDefenseMultiplierProgram,
  enemyMaxHpMultiplierProgram,
} from "./attribute/enemy-attributes.js";
import {
  rogue5EnemyMagicResistanceProgram,
  rogue6CasterAttackProgram,
  rogue6PioneerSkillProgram,
  rogue6Start3Program,
  supportDefenseDownProgram,
} from "./template-action/special-templates.js";
import { elementalDamageProgramForEffect } from "./damage/elemental-damage.js";

/** 从 relics 来源中提取稳定藏品 ID；charBuffData 不参与藏品特例匹配。 */
function relicIdFromSource(source: string): string | undefined {
  return source.startsWith("relics:") ? source.slice("relics:".length) : undefined;
}

/** 精确战斗模板优先于外层通用载体。 */
const TEMPLATE_PROGRAMS: Readonly<Partial<Record<string, MechanicsProgram>>> = {
  "rogue_6_pioneer_skill": rogue6PioneerSkillProgram,
  "rogue_6_caster_attack": rogue6CasterAttackProgram,
  "defdown[support]": supportDefenseDownProgram,
  "rogue_5_enemy_minus_magic_resistance[take_damage]": rogue5EnemyMagicResistanceProgram,
  "rogue_6_start_3": rogue6Start3Program,
};

/** 外层 GameData buff 载体对应的通用程序。 */
const EFFECT_PROGRAMS: Readonly<Partial<Record<string, MechanicsProgram>>> = {
  char_attribute_mul: characterAttributeMultiplierProgram,
  char_squad_attribute_mul: characterAttributeMultiplierProgram,
  char_attribute_add: characterAttributeAdditionProgram,
  char_squad_attribute_add: characterAttributeAdditionProgram,
  layer_char_attribute_mul: layeredCharacterAttributeMultiplierProgram,
  layer_char_attribute_add: layeredCharacterAttributeAdditionProgram,
  char_ability_new: conditionalCharacterAttributeProgram,
  char_ability_new_at_root: conditionalCharacterAttributeProgram,
  global_buff_normal: conditionalCharacterAttributeProgram,
  enemy_attribute_mul: enemyAttributeProgram,
  enemy_attribute_add: enemyAttributeProgram,
};

/** 稳定敌方模板对应的通用程序。 */
const MECHANIC_PROGRAMS: Readonly<Partial<Record<string, MechanicsProgram>>> = {
  enemy_atk_down: enemyAttackMultiplierProgram,
  enemy_def_down: enemyDefenseMultiplierProgram,
  enemy_max_hp_down: enemyMaxHpMultiplierProgram,
};

/** 明确不进入当前 FormulaBook 的局外资源或规则载体。 */
const NOT_APPLICABLE_EFFECT_KEYS = new Set([
  "immediate_reward",
  "zone_into_reward",
  "node_into_reward",
  "secret_into_reward",
  "secret_into_reward_once",
  "battle_extra_drop",
  "battle_extra_reward",
  "change_reward",
  "change_stage",
  "change_shop_slot_pool",
  "direct_upgrade",
  "limited_direct_upgrade",
  "recruit_cost",
  "upgrade_cost",
  "shop_discount_rarity",
  "misc_insert_token_card",
]);

/** 按“精确模板 → 外层载体 → 稳定机制名”选择生成程序。 */
export function resolveRelicProgram(
  effect: MechanicsEffectInput,
): MechanicsProgramResolution {
  const relicId = relicIdFromSource(effect.source);
  const exactRelicProgram = relicId
    ? elementalDamageProgramForEffect(relicId, effect)
    : undefined;
  const program = exactRelicProgram
    ?? TEMPLATE_PROGRAMS[effect.mechanicName]
    ?? EFFECT_PROGRAMS[effect.key]
    ?? MECHANIC_PROGRAMS[effect.mechanicName];
  if (program) return { status: "supported", program };
  if (NOT_APPLICABLE_EFFECT_KEYS.has(effect.key)) return { status: "not_applicable" };
  return { status: "unknown" };
}
