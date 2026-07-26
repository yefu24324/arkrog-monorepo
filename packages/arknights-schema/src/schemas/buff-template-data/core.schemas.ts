/** buff_template_data 顶层模板与事件字典的 Zod Schema。 */

import { z } from "zod";

import type { BattleEvent, BuffTemplate, EffectKey, EventToActions, OnEventPriority } from "../../types/buff-template-data/core.types.js";
import { BattleActionSchema } from "./battle-action.schemas.js";

/** 当前数据中出现的战斗事件键。 */
export const BattleEventSchema = z.enum(["COOPERATE_PLAYER_DYING","COOPERATE_PLAYER_REVIVE","HALF_IDLE_GAIN_EQUIP","HALF_IDLE_GAIN_TRAP","ON_ABILITY_CAST_ON_TARGET","ON_ABILITY_FINISH","ON_ABILITY_INTERRUPTED","ON_ABILITY_SPELL_ON","ON_ABILITY_START","ON_ABNORMAL_FLAG_DIRTY","ON_AFTER_ATTACK","ON_AFTER_CALCULATE_DAMAGE","ON_AFTER_OUTPUT_DAMAGE","ON_AFTER_OUTPUT_ELEMENT_DAMAGE","ON_AFTER_OUTPUT_HEAL","ON_APPLIED_MODIFIER","ON_APPLYING_MODIFIER","ON_APPLYING_SKIPPED_MODIFIER","ON_AUTO_CHESS_MODE_CHANGED","ON_BEFORE_ABILITY_SPELL_ON","ON_BEFORE_APPEAR","ON_BEFORE_APPLYING_MODIFIER","ON_BEFORE_ATTACK","ON_BEFORE_DIRECTION_CHANGE","ON_BEFORE_DISAPPEAR","ON_BEFORE_EP_BREAK_FINISH","ON_BEFORE_EP_BREAK_START","ON_BEFORE_EXIT_LEVITATE_STATE","ON_BEFORE_EXIT_UNBALANCED_STATE","ON_BEFORE_FALLDOWN","ON_BEFORE_TARGET_APPLY_MODIFIER","ON_BEFORE_TRY_SET_EP_ZERO","ON_BEFORE_TRY_SET_HP_ZERO","ON_BEING_CALCULATE_DAMAGE","ON_BLOCK_CNT_CHANGE","ON_BLOCK_DAMAGE","ON_BOSS_WAVE_WILL_START","ON_BUFF_DISABLE","ON_BUFF_ENABLE","ON_BUFF_FINISH","ON_BUFF_LATE_ENABLE","ON_BUFF_START","ON_BUFF_TRIGGER","ON_CALCULATE_CACHED_PROJECTILE_DAMAGE","ON_CALCULATE_DAMAGE","ON_COLLIDE_WITH_HIGHLAND","ON_DIRECTION_CHANGED","ON_END_PULLING","ON_ENTER_LEVITATE_STATE","ON_ENTER_MAGICCIRCUIT","ON_ENTER_UNBALANCED_STATE","ON_ENTITY_WILL_OVERLAP","ON_EP_BREAK_FINISH","ON_EP_BREAK_START","ON_ES_OVER_ZERO","ON_EVADE_DAMAGE","ON_GAME_OVER","ON_HALF_IDLE_KAWA_CLEANED","ON_HALF_IDLE_KAWA_POLLUTED","ON_HALF_IDLE_TRAP_CHECK_UPGRADE","ON_LEAVE_MAGICCIRCUIT","ON_LEGION_MODE_DANGER_LEVEL_REFRESH","ON_LEGION_MODE_DRAW_CARD","ON_MAKE_ENEMY_UNBALANCED","ON_MOTION_MODE_CHANGED","ON_OTHER_BUFF_START","ON_OTHER_RESISTABLE_BUFF_START","ON_OUTPUT_ATK_OR_HEAL","ON_OUTPUT_ATK_OR_HEAL_EACH_SPELL","ON_OUTPUT_DAMAGE","ON_OUTPUT_MODIFIER","ON_OWNER_BEFORE_DEAD","ON_OWNER_BLOCKEE_CHANGED","ON_OWNER_BLOCK_MODE_CHANGED","ON_OWNER_BORN","ON_OWNER_DYING","ON_OWNER_FINISH","ON_OWNER_HP_FULL","ON_OWNER_KILLED","ON_OWNER_KILLED_BY_MAIN_TARGET","ON_OWNER_LOCATE","ON_OWNER_OVERLAPPED","ON_OWNER_POST_BORN","ON_OWNER_REACH_EXIT","ON_OWNER_REBORN","ON_OWNER_ROOT_TILE_CHANGED","ON_PALSY_OVERFLOW","ON_POST_TRY_SET_HP_ZERO","ON_SANDBOX_OWNER_RES_CHANGED","ON_SANDBOX_V3_RECIPE_CHANGE","ON_SANDBOX_V3_RESOURCE_CNT_CHANGE","ON_SKILL_CAST_SUCCEED","ON_SKILL_FINISH","ON_SKILL_RETRIGGERED","ON_SKILL_START","ON_STAGE_END","ON_TAKE_DAMAGE","ON_TAKE_EP_DAMAGE","ON_TARGET_KILLED","ON_TOGGLE_SKILL_START","ON_TRIGGER_PALSY","ON_UNIT_SWITCH_MODE"]).describe("buff_template_data 当前已观测的战斗事件键。") satisfies z.ZodType<BattleEvent>;

/** 模板关联的效果标识有限集合。 */
export const EffectKeySchema = z.enum(["","blitz_skill_01_buff_01","blitz_skill_01_buff_02","blitz_skill_01_buff_03","buff_violent","common_072_alarm_01","common_combustion_buff_02","common_shield_01","enemy_dsfull_buff_01","enemy_dsfull_buff_04","ghost2_beidong_buff_01","indigo_skill_02_buff_03","lava2_skill02_buff","liesel_skill_02_buff_03","typhon_equipment_01"]).describe("buff_template_data 模板关联的效果标识；空字符串表示未配置。") satisfies z.ZodType<EffectKey>;

/** 战斗事件处理优先级。 */
export const OnEventPrioritySchema = z.enum(["DEFAULT","HIGHER_PRIORITY","HIGH_PRIORITY","LOWER_PRIORITY","LOWEST_PRIORITY","LOW_PRIORITY","TITI_DOZE_PRIORITY"]).describe("buff_template_data 的战斗事件处理优先级。") satisfies z.ZodType<OnEventPriority>;

/** 按战斗事件保存递归 Action 列表的严格稀疏对象。 */
export const EventToActionsSchema: z.ZodType<EventToActions> = z.strictObject({
  /** 战斗事件 COOPERATE_PLAYER_DYING 触发时依次执行的 Action。 */
  "COOPERATE_PLAYER_DYING": z.array(BattleActionSchema).optional().describe("战斗事件 COOPERATE_PLAYER_DYING 触发时依次执行的 Action。"),
  /** 战斗事件 COOPERATE_PLAYER_REVIVE 触发时依次执行的 Action。 */
  "COOPERATE_PLAYER_REVIVE": z.array(BattleActionSchema).optional().describe("战斗事件 COOPERATE_PLAYER_REVIVE 触发时依次执行的 Action。"),
  /** 战斗事件 HALF_IDLE_GAIN_EQUIP 触发时依次执行的 Action。 */
  "HALF_IDLE_GAIN_EQUIP": z.array(BattleActionSchema).optional().describe("战斗事件 HALF_IDLE_GAIN_EQUIP 触发时依次执行的 Action。"),
  /** 战斗事件 HALF_IDLE_GAIN_TRAP 触发时依次执行的 Action。 */
  "HALF_IDLE_GAIN_TRAP": z.array(BattleActionSchema).optional().describe("战斗事件 HALF_IDLE_GAIN_TRAP 触发时依次执行的 Action。"),
  /** 战斗事件 ON_ABILITY_CAST_ON_TARGET 触发时依次执行的 Action。 */
  "ON_ABILITY_CAST_ON_TARGET": z.array(BattleActionSchema).optional().describe("战斗事件 ON_ABILITY_CAST_ON_TARGET 触发时依次执行的 Action。"),
  /** 战斗事件 ON_ABILITY_FINISH 触发时依次执行的 Action。 */
  "ON_ABILITY_FINISH": z.array(BattleActionSchema).optional().describe("战斗事件 ON_ABILITY_FINISH 触发时依次执行的 Action。"),
  /** 战斗事件 ON_ABILITY_INTERRUPTED 触发时依次执行的 Action。 */
  "ON_ABILITY_INTERRUPTED": z.array(BattleActionSchema).optional().describe("战斗事件 ON_ABILITY_INTERRUPTED 触发时依次执行的 Action。"),
  /** 战斗事件 ON_ABILITY_SPELL_ON 触发时依次执行的 Action。 */
  "ON_ABILITY_SPELL_ON": z.array(BattleActionSchema).optional().describe("战斗事件 ON_ABILITY_SPELL_ON 触发时依次执行的 Action。"),
  /** 战斗事件 ON_ABILITY_START 触发时依次执行的 Action。 */
  "ON_ABILITY_START": z.array(BattleActionSchema).optional().describe("战斗事件 ON_ABILITY_START 触发时依次执行的 Action。"),
  /** 战斗事件 ON_ABNORMAL_FLAG_DIRTY 触发时依次执行的 Action。 */
  "ON_ABNORMAL_FLAG_DIRTY": z.array(BattleActionSchema).optional().describe("战斗事件 ON_ABNORMAL_FLAG_DIRTY 触发时依次执行的 Action。"),
  /** 战斗事件 ON_AFTER_ATTACK 触发时依次执行的 Action。 */
  "ON_AFTER_ATTACK": z.array(BattleActionSchema).optional().describe("战斗事件 ON_AFTER_ATTACK 触发时依次执行的 Action。"),
  /** 战斗事件 ON_AFTER_CALCULATE_DAMAGE 触发时依次执行的 Action。 */
  "ON_AFTER_CALCULATE_DAMAGE": z.array(BattleActionSchema).optional().describe("战斗事件 ON_AFTER_CALCULATE_DAMAGE 触发时依次执行的 Action。"),
  /** 战斗事件 ON_AFTER_OUTPUT_DAMAGE 触发时依次执行的 Action。 */
  "ON_AFTER_OUTPUT_DAMAGE": z.array(BattleActionSchema).optional().describe("战斗事件 ON_AFTER_OUTPUT_DAMAGE 触发时依次执行的 Action。"),
  /** 战斗事件 ON_AFTER_OUTPUT_ELEMENT_DAMAGE 触发时依次执行的 Action。 */
  "ON_AFTER_OUTPUT_ELEMENT_DAMAGE": z.array(BattleActionSchema).optional().describe("战斗事件 ON_AFTER_OUTPUT_ELEMENT_DAMAGE 触发时依次执行的 Action。"),
  /** 战斗事件 ON_AFTER_OUTPUT_HEAL 触发时依次执行的 Action。 */
  "ON_AFTER_OUTPUT_HEAL": z.array(BattleActionSchema).optional().describe("战斗事件 ON_AFTER_OUTPUT_HEAL 触发时依次执行的 Action。"),
  /** 战斗事件 ON_APPLIED_MODIFIER 触发时依次执行的 Action。 */
  "ON_APPLIED_MODIFIER": z.array(BattleActionSchema).optional().describe("战斗事件 ON_APPLIED_MODIFIER 触发时依次执行的 Action。"),
  /** 战斗事件 ON_APPLYING_MODIFIER 触发时依次执行的 Action。 */
  "ON_APPLYING_MODIFIER": z.array(BattleActionSchema).optional().describe("战斗事件 ON_APPLYING_MODIFIER 触发时依次执行的 Action。"),
  /** 战斗事件 ON_APPLYING_SKIPPED_MODIFIER 触发时依次执行的 Action。 */
  "ON_APPLYING_SKIPPED_MODIFIER": z.array(BattleActionSchema).optional().describe("战斗事件 ON_APPLYING_SKIPPED_MODIFIER 触发时依次执行的 Action。"),
  /** 战斗事件 ON_AUTO_CHESS_MODE_CHANGED 触发时依次执行的 Action。 */
  "ON_AUTO_CHESS_MODE_CHANGED": z.array(BattleActionSchema).optional().describe("战斗事件 ON_AUTO_CHESS_MODE_CHANGED 触发时依次执行的 Action。"),
  /** 战斗事件 ON_BEFORE_ABILITY_SPELL_ON 触发时依次执行的 Action。 */
  "ON_BEFORE_ABILITY_SPELL_ON": z.array(BattleActionSchema).optional().describe("战斗事件 ON_BEFORE_ABILITY_SPELL_ON 触发时依次执行的 Action。"),
  /** 战斗事件 ON_BEFORE_APPEAR 触发时依次执行的 Action。 */
  "ON_BEFORE_APPEAR": z.array(BattleActionSchema).optional().describe("战斗事件 ON_BEFORE_APPEAR 触发时依次执行的 Action。"),
  /** 战斗事件 ON_BEFORE_APPLYING_MODIFIER 触发时依次执行的 Action。 */
  "ON_BEFORE_APPLYING_MODIFIER": z.array(BattleActionSchema).optional().describe("战斗事件 ON_BEFORE_APPLYING_MODIFIER 触发时依次执行的 Action。"),
  /** 战斗事件 ON_BEFORE_ATTACK 触发时依次执行的 Action。 */
  "ON_BEFORE_ATTACK": z.array(BattleActionSchema).optional().describe("战斗事件 ON_BEFORE_ATTACK 触发时依次执行的 Action。"),
  /** 战斗事件 ON_BEFORE_DIRECTION_CHANGE 触发时依次执行的 Action。 */
  "ON_BEFORE_DIRECTION_CHANGE": z.array(BattleActionSchema).optional().describe("战斗事件 ON_BEFORE_DIRECTION_CHANGE 触发时依次执行的 Action。"),
  /** 战斗事件 ON_BEFORE_DISAPPEAR 触发时依次执行的 Action。 */
  "ON_BEFORE_DISAPPEAR": z.array(BattleActionSchema).optional().describe("战斗事件 ON_BEFORE_DISAPPEAR 触发时依次执行的 Action。"),
  /** 战斗事件 ON_BEFORE_EP_BREAK_FINISH 触发时依次执行的 Action。 */
  "ON_BEFORE_EP_BREAK_FINISH": z.array(BattleActionSchema).optional().describe("战斗事件 ON_BEFORE_EP_BREAK_FINISH 触发时依次执行的 Action。"),
  /** 战斗事件 ON_BEFORE_EP_BREAK_START 触发时依次执行的 Action。 */
  "ON_BEFORE_EP_BREAK_START": z.array(BattleActionSchema).optional().describe("战斗事件 ON_BEFORE_EP_BREAK_START 触发时依次执行的 Action。"),
  /** 战斗事件 ON_BEFORE_EXIT_LEVITATE_STATE 触发时依次执行的 Action。 */
  "ON_BEFORE_EXIT_LEVITATE_STATE": z.array(BattleActionSchema).optional().describe("战斗事件 ON_BEFORE_EXIT_LEVITATE_STATE 触发时依次执行的 Action。"),
  /** 战斗事件 ON_BEFORE_EXIT_UNBALANCED_STATE 触发时依次执行的 Action。 */
  "ON_BEFORE_EXIT_UNBALANCED_STATE": z.array(BattleActionSchema).optional().describe("战斗事件 ON_BEFORE_EXIT_UNBALANCED_STATE 触发时依次执行的 Action。"),
  /** 战斗事件 ON_BEFORE_FALLDOWN 触发时依次执行的 Action。 */
  "ON_BEFORE_FALLDOWN": z.array(BattleActionSchema).optional().describe("战斗事件 ON_BEFORE_FALLDOWN 触发时依次执行的 Action。"),
  /** 战斗事件 ON_BEFORE_TARGET_APPLY_MODIFIER 触发时依次执行的 Action。 */
  "ON_BEFORE_TARGET_APPLY_MODIFIER": z.array(BattleActionSchema).optional().describe("战斗事件 ON_BEFORE_TARGET_APPLY_MODIFIER 触发时依次执行的 Action。"),
  /** 战斗事件 ON_BEFORE_TRY_SET_EP_ZERO 触发时依次执行的 Action。 */
  "ON_BEFORE_TRY_SET_EP_ZERO": z.array(BattleActionSchema).optional().describe("战斗事件 ON_BEFORE_TRY_SET_EP_ZERO 触发时依次执行的 Action。"),
  /** 战斗事件 ON_BEFORE_TRY_SET_HP_ZERO 触发时依次执行的 Action。 */
  "ON_BEFORE_TRY_SET_HP_ZERO": z.array(BattleActionSchema).optional().describe("战斗事件 ON_BEFORE_TRY_SET_HP_ZERO 触发时依次执行的 Action。"),
  /** 战斗事件 ON_BEING_CALCULATE_DAMAGE 触发时依次执行的 Action。 */
  "ON_BEING_CALCULATE_DAMAGE": z.array(BattleActionSchema).optional().describe("战斗事件 ON_BEING_CALCULATE_DAMAGE 触发时依次执行的 Action。"),
  /** 战斗事件 ON_BLOCK_CNT_CHANGE 触发时依次执行的 Action。 */
  "ON_BLOCK_CNT_CHANGE": z.array(BattleActionSchema).optional().describe("战斗事件 ON_BLOCK_CNT_CHANGE 触发时依次执行的 Action。"),
  /** 战斗事件 ON_BLOCK_DAMAGE 触发时依次执行的 Action。 */
  "ON_BLOCK_DAMAGE": z.array(BattleActionSchema).optional().describe("战斗事件 ON_BLOCK_DAMAGE 触发时依次执行的 Action。"),
  /** 战斗事件 ON_BOSS_WAVE_WILL_START 触发时依次执行的 Action。 */
  "ON_BOSS_WAVE_WILL_START": z.array(BattleActionSchema).optional().describe("战斗事件 ON_BOSS_WAVE_WILL_START 触发时依次执行的 Action。"),
  /** 战斗事件 ON_BUFF_DISABLE 触发时依次执行的 Action。 */
  "ON_BUFF_DISABLE": z.array(BattleActionSchema).optional().describe("战斗事件 ON_BUFF_DISABLE 触发时依次执行的 Action。"),
  /** 战斗事件 ON_BUFF_ENABLE 触发时依次执行的 Action。 */
  "ON_BUFF_ENABLE": z.array(BattleActionSchema).optional().describe("战斗事件 ON_BUFF_ENABLE 触发时依次执行的 Action。"),
  /** 战斗事件 ON_BUFF_FINISH 触发时依次执行的 Action。 */
  "ON_BUFF_FINISH": z.array(BattleActionSchema).optional().describe("战斗事件 ON_BUFF_FINISH 触发时依次执行的 Action。"),
  /** 战斗事件 ON_BUFF_LATE_ENABLE 触发时依次执行的 Action。 */
  "ON_BUFF_LATE_ENABLE": z.array(BattleActionSchema).optional().describe("战斗事件 ON_BUFF_LATE_ENABLE 触发时依次执行的 Action。"),
  /** 战斗事件 ON_BUFF_START 触发时依次执行的 Action。 */
  "ON_BUFF_START": z.array(z.union([BattleActionSchema, z.null()])).optional().describe("战斗事件 ON_BUFF_START 触发时依次执行的 Action。"),
  /** 战斗事件 ON_BUFF_TRIGGER 触发时依次执行的 Action。 */
  "ON_BUFF_TRIGGER": z.array(BattleActionSchema).optional().describe("战斗事件 ON_BUFF_TRIGGER 触发时依次执行的 Action。"),
  /** 战斗事件 ON_CALCULATE_CACHED_PROJECTILE_DAMAGE 触发时依次执行的 Action。 */
  "ON_CALCULATE_CACHED_PROJECTILE_DAMAGE": z.array(BattleActionSchema).optional().describe("战斗事件 ON_CALCULATE_CACHED_PROJECTILE_DAMAGE 触发时依次执行的 Action。"),
  /** 战斗事件 ON_CALCULATE_DAMAGE 触发时依次执行的 Action。 */
  "ON_CALCULATE_DAMAGE": z.array(BattleActionSchema).optional().describe("战斗事件 ON_CALCULATE_DAMAGE 触发时依次执行的 Action。"),
  /** 战斗事件 ON_COLLIDE_WITH_HIGHLAND 触发时依次执行的 Action。 */
  "ON_COLLIDE_WITH_HIGHLAND": z.array(BattleActionSchema).optional().describe("战斗事件 ON_COLLIDE_WITH_HIGHLAND 触发时依次执行的 Action。"),
  /** 战斗事件 ON_DIRECTION_CHANGED 触发时依次执行的 Action。 */
  "ON_DIRECTION_CHANGED": z.array(BattleActionSchema).optional().describe("战斗事件 ON_DIRECTION_CHANGED 触发时依次执行的 Action。"),
  /** 战斗事件 ON_END_PULLING 触发时依次执行的 Action。 */
  "ON_END_PULLING": z.array(BattleActionSchema).optional().describe("战斗事件 ON_END_PULLING 触发时依次执行的 Action。"),
  /** 战斗事件 ON_ENTER_LEVITATE_STATE 触发时依次执行的 Action。 */
  "ON_ENTER_LEVITATE_STATE": z.array(BattleActionSchema).optional().describe("战斗事件 ON_ENTER_LEVITATE_STATE 触发时依次执行的 Action。"),
  /** 战斗事件 ON_ENTER_MAGICCIRCUIT 触发时依次执行的 Action。 */
  "ON_ENTER_MAGICCIRCUIT": z.array(BattleActionSchema).optional().describe("战斗事件 ON_ENTER_MAGICCIRCUIT 触发时依次执行的 Action。"),
  /** 战斗事件 ON_ENTER_UNBALANCED_STATE 触发时依次执行的 Action。 */
  "ON_ENTER_UNBALANCED_STATE": z.array(BattleActionSchema).optional().describe("战斗事件 ON_ENTER_UNBALANCED_STATE 触发时依次执行的 Action。"),
  /** 战斗事件 ON_ENTITY_WILL_OVERLAP 触发时依次执行的 Action。 */
  "ON_ENTITY_WILL_OVERLAP": z.array(BattleActionSchema).optional().describe("战斗事件 ON_ENTITY_WILL_OVERLAP 触发时依次执行的 Action。"),
  /** 战斗事件 ON_EP_BREAK_FINISH 触发时依次执行的 Action。 */
  "ON_EP_BREAK_FINISH": z.array(BattleActionSchema).optional().describe("战斗事件 ON_EP_BREAK_FINISH 触发时依次执行的 Action。"),
  /** 战斗事件 ON_EP_BREAK_START 触发时依次执行的 Action。 */
  "ON_EP_BREAK_START": z.array(BattleActionSchema).optional().describe("战斗事件 ON_EP_BREAK_START 触发时依次执行的 Action。"),
  /** 战斗事件 ON_ES_OVER_ZERO 触发时依次执行的 Action。 */
  "ON_ES_OVER_ZERO": z.array(BattleActionSchema).optional().describe("战斗事件 ON_ES_OVER_ZERO 触发时依次执行的 Action。"),
  /** 战斗事件 ON_EVADE_DAMAGE 触发时依次执行的 Action。 */
  "ON_EVADE_DAMAGE": z.array(BattleActionSchema).optional().describe("战斗事件 ON_EVADE_DAMAGE 触发时依次执行的 Action。"),
  /** 战斗事件 ON_GAME_OVER 触发时依次执行的 Action。 */
  "ON_GAME_OVER": z.array(BattleActionSchema).optional().describe("战斗事件 ON_GAME_OVER 触发时依次执行的 Action。"),
  /** 战斗事件 ON_HALF_IDLE_KAWA_CLEANED 触发时依次执行的 Action。 */
  "ON_HALF_IDLE_KAWA_CLEANED": z.array(BattleActionSchema).optional().describe("战斗事件 ON_HALF_IDLE_KAWA_CLEANED 触发时依次执行的 Action。"),
  /** 战斗事件 ON_HALF_IDLE_KAWA_POLLUTED 触发时依次执行的 Action。 */
  "ON_HALF_IDLE_KAWA_POLLUTED": z.array(BattleActionSchema).optional().describe("战斗事件 ON_HALF_IDLE_KAWA_POLLUTED 触发时依次执行的 Action。"),
  /** 战斗事件 ON_HALF_IDLE_TRAP_CHECK_UPGRADE 触发时依次执行的 Action。 */
  "ON_HALF_IDLE_TRAP_CHECK_UPGRADE": z.array(BattleActionSchema).optional().describe("战斗事件 ON_HALF_IDLE_TRAP_CHECK_UPGRADE 触发时依次执行的 Action。"),
  /** 战斗事件 ON_LEAVE_MAGICCIRCUIT 触发时依次执行的 Action。 */
  "ON_LEAVE_MAGICCIRCUIT": z.array(BattleActionSchema).optional().describe("战斗事件 ON_LEAVE_MAGICCIRCUIT 触发时依次执行的 Action。"),
  /** 战斗事件 ON_LEGION_MODE_DANGER_LEVEL_REFRESH 触发时依次执行的 Action。 */
  "ON_LEGION_MODE_DANGER_LEVEL_REFRESH": z.array(BattleActionSchema).optional().describe("战斗事件 ON_LEGION_MODE_DANGER_LEVEL_REFRESH 触发时依次执行的 Action。"),
  /** 战斗事件 ON_LEGION_MODE_DRAW_CARD 触发时依次执行的 Action。 */
  "ON_LEGION_MODE_DRAW_CARD": z.array(BattleActionSchema).optional().describe("战斗事件 ON_LEGION_MODE_DRAW_CARD 触发时依次执行的 Action。"),
  /** 战斗事件 ON_MAKE_ENEMY_UNBALANCED 触发时依次执行的 Action。 */
  "ON_MAKE_ENEMY_UNBALANCED": z.array(BattleActionSchema).optional().describe("战斗事件 ON_MAKE_ENEMY_UNBALANCED 触发时依次执行的 Action。"),
  /** 战斗事件 ON_MOTION_MODE_CHANGED 触发时依次执行的 Action。 */
  "ON_MOTION_MODE_CHANGED": z.array(BattleActionSchema).optional().describe("战斗事件 ON_MOTION_MODE_CHANGED 触发时依次执行的 Action。"),
  /** 战斗事件 ON_OTHER_BUFF_START 触发时依次执行的 Action。 */
  "ON_OTHER_BUFF_START": z.array(BattleActionSchema).optional().describe("战斗事件 ON_OTHER_BUFF_START 触发时依次执行的 Action。"),
  /** 战斗事件 ON_OTHER_RESISTABLE_BUFF_START 触发时依次执行的 Action。 */
  "ON_OTHER_RESISTABLE_BUFF_START": z.array(BattleActionSchema).optional().describe("战斗事件 ON_OTHER_RESISTABLE_BUFF_START 触发时依次执行的 Action。"),
  /** 战斗事件 ON_OUTPUT_ATK_OR_HEAL 触发时依次执行的 Action。 */
  "ON_OUTPUT_ATK_OR_HEAL": z.array(BattleActionSchema).optional().describe("战斗事件 ON_OUTPUT_ATK_OR_HEAL 触发时依次执行的 Action。"),
  /** 战斗事件 ON_OUTPUT_ATK_OR_HEAL_EACH_SPELL 触发时依次执行的 Action。 */
  "ON_OUTPUT_ATK_OR_HEAL_EACH_SPELL": z.array(BattleActionSchema).optional().describe("战斗事件 ON_OUTPUT_ATK_OR_HEAL_EACH_SPELL 触发时依次执行的 Action。"),
  /** 战斗事件 ON_OUTPUT_DAMAGE 触发时依次执行的 Action。 */
  "ON_OUTPUT_DAMAGE": z.array(BattleActionSchema).optional().describe("战斗事件 ON_OUTPUT_DAMAGE 触发时依次执行的 Action。"),
  /** 战斗事件 ON_OUTPUT_MODIFIER 触发时依次执行的 Action。 */
  "ON_OUTPUT_MODIFIER": z.array(BattleActionSchema).optional().describe("战斗事件 ON_OUTPUT_MODIFIER 触发时依次执行的 Action。"),
  /** 战斗事件 ON_OWNER_BEFORE_DEAD 触发时依次执行的 Action。 */
  "ON_OWNER_BEFORE_DEAD": z.array(BattleActionSchema).optional().describe("战斗事件 ON_OWNER_BEFORE_DEAD 触发时依次执行的 Action。"),
  /** 战斗事件 ON_OWNER_BLOCKEE_CHANGED 触发时依次执行的 Action。 */
  "ON_OWNER_BLOCKEE_CHANGED": z.array(BattleActionSchema).optional().describe("战斗事件 ON_OWNER_BLOCKEE_CHANGED 触发时依次执行的 Action。"),
  /** 战斗事件 ON_OWNER_BLOCK_MODE_CHANGED 触发时依次执行的 Action。 */
  "ON_OWNER_BLOCK_MODE_CHANGED": z.array(BattleActionSchema).optional().describe("战斗事件 ON_OWNER_BLOCK_MODE_CHANGED 触发时依次执行的 Action。"),
  /** 战斗事件 ON_OWNER_BORN 触发时依次执行的 Action。 */
  "ON_OWNER_BORN": z.array(BattleActionSchema).optional().describe("战斗事件 ON_OWNER_BORN 触发时依次执行的 Action。"),
  /** 战斗事件 ON_OWNER_DYING 触发时依次执行的 Action。 */
  "ON_OWNER_DYING": z.array(BattleActionSchema).optional().describe("战斗事件 ON_OWNER_DYING 触发时依次执行的 Action。"),
  /** 战斗事件 ON_OWNER_FINISH 触发时依次执行的 Action。 */
  "ON_OWNER_FINISH": z.array(BattleActionSchema).optional().describe("战斗事件 ON_OWNER_FINISH 触发时依次执行的 Action。"),
  /** 战斗事件 ON_OWNER_HP_FULL 触发时依次执行的 Action。 */
  "ON_OWNER_HP_FULL": z.array(BattleActionSchema).optional().describe("战斗事件 ON_OWNER_HP_FULL 触发时依次执行的 Action。"),
  /** 战斗事件 ON_OWNER_KILLED 触发时依次执行的 Action。 */
  "ON_OWNER_KILLED": z.array(BattleActionSchema).optional().describe("战斗事件 ON_OWNER_KILLED 触发时依次执行的 Action。"),
  /** 战斗事件 ON_OWNER_KILLED_BY_MAIN_TARGET 触发时依次执行的 Action。 */
  "ON_OWNER_KILLED_BY_MAIN_TARGET": z.array(BattleActionSchema).optional().describe("战斗事件 ON_OWNER_KILLED_BY_MAIN_TARGET 触发时依次执行的 Action。"),
  /** 战斗事件 ON_OWNER_LOCATE 触发时依次执行的 Action。 */
  "ON_OWNER_LOCATE": z.array(BattleActionSchema).optional().describe("战斗事件 ON_OWNER_LOCATE 触发时依次执行的 Action。"),
  /** 战斗事件 ON_OWNER_OVERLAPPED 触发时依次执行的 Action。 */
  "ON_OWNER_OVERLAPPED": z.array(BattleActionSchema).optional().describe("战斗事件 ON_OWNER_OVERLAPPED 触发时依次执行的 Action。"),
  /** 战斗事件 ON_OWNER_POST_BORN 触发时依次执行的 Action。 */
  "ON_OWNER_POST_BORN": z.array(BattleActionSchema).optional().describe("战斗事件 ON_OWNER_POST_BORN 触发时依次执行的 Action。"),
  /** 战斗事件 ON_OWNER_REACH_EXIT 触发时依次执行的 Action。 */
  "ON_OWNER_REACH_EXIT": z.array(BattleActionSchema).optional().describe("战斗事件 ON_OWNER_REACH_EXIT 触发时依次执行的 Action。"),
  /** 战斗事件 ON_OWNER_REBORN 触发时依次执行的 Action。 */
  "ON_OWNER_REBORN": z.array(BattleActionSchema).optional().describe("战斗事件 ON_OWNER_REBORN 触发时依次执行的 Action。"),
  /** 战斗事件 ON_OWNER_ROOT_TILE_CHANGED 触发时依次执行的 Action。 */
  "ON_OWNER_ROOT_TILE_CHANGED": z.array(BattleActionSchema).optional().describe("战斗事件 ON_OWNER_ROOT_TILE_CHANGED 触发时依次执行的 Action。"),
  /** 战斗事件 ON_PALSY_OVERFLOW 触发时依次执行的 Action。 */
  "ON_PALSY_OVERFLOW": z.array(BattleActionSchema).optional().describe("战斗事件 ON_PALSY_OVERFLOW 触发时依次执行的 Action。"),
  /** 战斗事件 ON_POST_TRY_SET_HP_ZERO 触发时依次执行的 Action。 */
  "ON_POST_TRY_SET_HP_ZERO": z.array(BattleActionSchema).optional().describe("战斗事件 ON_POST_TRY_SET_HP_ZERO 触发时依次执行的 Action。"),
  /** 战斗事件 ON_SANDBOX_OWNER_RES_CHANGED 触发时依次执行的 Action。 */
  "ON_SANDBOX_OWNER_RES_CHANGED": z.array(BattleActionSchema).optional().describe("战斗事件 ON_SANDBOX_OWNER_RES_CHANGED 触发时依次执行的 Action。"),
  /** 战斗事件 ON_SANDBOX_V3_RECIPE_CHANGE 触发时依次执行的 Action。 */
  "ON_SANDBOX_V3_RECIPE_CHANGE": z.array(BattleActionSchema).optional().describe("战斗事件 ON_SANDBOX_V3_RECIPE_CHANGE 触发时依次执行的 Action。"),
  /** 战斗事件 ON_SANDBOX_V3_RESOURCE_CNT_CHANGE 触发时依次执行的 Action。 */
  "ON_SANDBOX_V3_RESOURCE_CNT_CHANGE": z.array(BattleActionSchema).optional().describe("战斗事件 ON_SANDBOX_V3_RESOURCE_CNT_CHANGE 触发时依次执行的 Action。"),
  /** 战斗事件 ON_SKILL_CAST_SUCCEED 触发时依次执行的 Action。 */
  "ON_SKILL_CAST_SUCCEED": z.array(BattleActionSchema).optional().describe("战斗事件 ON_SKILL_CAST_SUCCEED 触发时依次执行的 Action。"),
  /** 战斗事件 ON_SKILL_FINISH 触发时依次执行的 Action。 */
  "ON_SKILL_FINISH": z.array(BattleActionSchema).optional().describe("战斗事件 ON_SKILL_FINISH 触发时依次执行的 Action。"),
  /** 战斗事件 ON_SKILL_RETRIGGERED 触发时依次执行的 Action。 */
  "ON_SKILL_RETRIGGERED": z.array(BattleActionSchema).optional().describe("战斗事件 ON_SKILL_RETRIGGERED 触发时依次执行的 Action。"),
  /** 战斗事件 ON_SKILL_START 触发时依次执行的 Action。 */
  "ON_SKILL_START": z.array(BattleActionSchema).optional().describe("战斗事件 ON_SKILL_START 触发时依次执行的 Action。"),
  /** 战斗事件 ON_STAGE_END 触发时依次执行的 Action。 */
  "ON_STAGE_END": z.array(BattleActionSchema).optional().describe("战斗事件 ON_STAGE_END 触发时依次执行的 Action。"),
  /** 战斗事件 ON_TAKE_DAMAGE 触发时依次执行的 Action。 */
  "ON_TAKE_DAMAGE": z.array(BattleActionSchema).optional().describe("战斗事件 ON_TAKE_DAMAGE 触发时依次执行的 Action。"),
  /** 战斗事件 ON_TAKE_EP_DAMAGE 触发时依次执行的 Action。 */
  "ON_TAKE_EP_DAMAGE": z.array(BattleActionSchema).optional().describe("战斗事件 ON_TAKE_EP_DAMAGE 触发时依次执行的 Action。"),
  /** 战斗事件 ON_TARGET_KILLED 触发时依次执行的 Action。 */
  "ON_TARGET_KILLED": z.array(BattleActionSchema).optional().describe("战斗事件 ON_TARGET_KILLED 触发时依次执行的 Action。"),
  /** 战斗事件 ON_TOGGLE_SKILL_START 触发时依次执行的 Action。 */
  "ON_TOGGLE_SKILL_START": z.array(BattleActionSchema).optional().describe("战斗事件 ON_TOGGLE_SKILL_START 触发时依次执行的 Action。"),
  /** 战斗事件 ON_TRIGGER_PALSY 触发时依次执行的 Action。 */
  "ON_TRIGGER_PALSY": z.array(BattleActionSchema).optional().describe("战斗事件 ON_TRIGGER_PALSY 触发时依次执行的 Action。"),
  /** 战斗事件 ON_UNIT_SWITCH_MODE 触发时依次执行的 Action。 */
  "ON_UNIT_SWITCH_MODE": z.array(BattleActionSchema).optional().describe("战斗事件 ON_UNIT_SWITCH_MODE 触发时依次执行的 Action。"),
}).describe("按已知战斗事件保存递归 Action 列表；未监听事件会缺失。");

/** 一个具名战斗模板及其事件 Action 配置。 */
export const BuffTemplateSchema: z.ZodType<BuffTemplate> = z.strictObject({
  /** 战斗模板唯一标识，应与外层动态字典键一致。 */
  templateKey: z.string().describe("战斗模板唯一标识，应与外层动态字典键一致。"),
  /** 模板关联的视觉或逻辑效果标识；空字符串表示未配置。 */
  effectKey: EffectKeySchema.describe("模板关联的视觉或逻辑效果标识；空字符串表示未配置。"),
  /** 模板处理战斗事件时使用的优先级。 */
  onEventPriority: OnEventPrioritySchema.describe("模板处理战斗事件时使用的优先级。"),
  /** 按战斗事件保存的 Action 列表；没有监听的事件字段会缺失。 */
  eventToActions: EventToActionsSchema.describe("按战斗事件保存的 Action 列表；没有监听的事件字段会缺失。"),
}).describe("一个具名战斗模板及其事件 Action 配置。");
