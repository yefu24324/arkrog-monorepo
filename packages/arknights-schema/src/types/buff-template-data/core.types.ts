/** buff_template_data 顶层模板与事件字典的显式类型。 */

import type { BattleAction } from "./battle-action.types.js";

/** 当前数据中出现的战斗事件键。 */
export type BattleEvent = "COOPERATE_PLAYER_DYING" | "COOPERATE_PLAYER_REVIVE" | "HALF_IDLE_GAIN_EQUIP" | "HALF_IDLE_GAIN_TRAP" | "ON_ABILITY_CAST_ON_TARGET" | "ON_ABILITY_FINISH" | "ON_ABILITY_INTERRUPTED" | "ON_ABILITY_SPELL_ON" | "ON_ABILITY_START" | "ON_ABNORMAL_FLAG_DIRTY" | "ON_AFTER_ATTACK" | "ON_AFTER_CALCULATE_DAMAGE" | "ON_AFTER_OUTPUT_DAMAGE" | "ON_AFTER_OUTPUT_ELEMENT_DAMAGE" | "ON_AFTER_OUTPUT_HEAL" | "ON_APPLIED_MODIFIER" | "ON_APPLYING_MODIFIER" | "ON_APPLYING_SKIPPED_MODIFIER" | "ON_AUTO_CHESS_MODE_CHANGED" | "ON_BEFORE_ABILITY_SPELL_ON" | "ON_BEFORE_APPEAR" | "ON_BEFORE_APPLYING_MODIFIER" | "ON_BEFORE_ATTACK" | "ON_BEFORE_DIRECTION_CHANGE" | "ON_BEFORE_DISAPPEAR" | "ON_BEFORE_EP_BREAK_FINISH" | "ON_BEFORE_EP_BREAK_START" | "ON_BEFORE_EXIT_LEVITATE_STATE" | "ON_BEFORE_EXIT_UNBALANCED_STATE" | "ON_BEFORE_FALLDOWN" | "ON_BEFORE_TARGET_APPLY_MODIFIER" | "ON_BEFORE_TRY_SET_EP_ZERO" | "ON_BEFORE_TRY_SET_HP_ZERO" | "ON_BEING_CALCULATE_DAMAGE" | "ON_BLOCK_CNT_CHANGE" | "ON_BLOCK_DAMAGE" | "ON_BOSS_WAVE_WILL_START" | "ON_BUFF_DISABLE" | "ON_BUFF_ENABLE" | "ON_BUFF_FINISH" | "ON_BUFF_LATE_ENABLE" | "ON_BUFF_START" | "ON_BUFF_TRIGGER" | "ON_CALCULATE_CACHED_PROJECTILE_DAMAGE" | "ON_CALCULATE_DAMAGE" | "ON_COLLIDE_WITH_HIGHLAND" | "ON_DIRECTION_CHANGED" | "ON_END_PULLING" | "ON_ENTER_LEVITATE_STATE" | "ON_ENTER_MAGICCIRCUIT" | "ON_ENTER_UNBALANCED_STATE" | "ON_ENTITY_WILL_OVERLAP" | "ON_EP_BREAK_FINISH" | "ON_EP_BREAK_START" | "ON_ES_OVER_ZERO" | "ON_EVADE_DAMAGE" | "ON_GAME_OVER" | "ON_HALF_IDLE_KAWA_CLEANED" | "ON_HALF_IDLE_KAWA_POLLUTED" | "ON_HALF_IDLE_TRAP_CHECK_UPGRADE" | "ON_LEAVE_MAGICCIRCUIT" | "ON_LEGION_MODE_DANGER_LEVEL_REFRESH" | "ON_LEGION_MODE_DRAW_CARD" | "ON_MAKE_ENEMY_UNBALANCED" | "ON_MOTION_MODE_CHANGED" | "ON_OTHER_BUFF_START" | "ON_OTHER_RESISTABLE_BUFF_START" | "ON_OUTPUT_ATK_OR_HEAL" | "ON_OUTPUT_ATK_OR_HEAL_EACH_SPELL" | "ON_OUTPUT_DAMAGE" | "ON_OUTPUT_MODIFIER" | "ON_OWNER_BEFORE_DEAD" | "ON_OWNER_BLOCKEE_CHANGED" | "ON_OWNER_BLOCK_MODE_CHANGED" | "ON_OWNER_BORN" | "ON_OWNER_DYING" | "ON_OWNER_FINISH" | "ON_OWNER_HP_FULL" | "ON_OWNER_KILLED" | "ON_OWNER_KILLED_BY_MAIN_TARGET" | "ON_OWNER_LOCATE" | "ON_OWNER_OVERLAPPED" | "ON_OWNER_POST_BORN" | "ON_OWNER_REACH_EXIT" | "ON_OWNER_REBORN" | "ON_OWNER_ROOT_TILE_CHANGED" | "ON_PALSY_OVERFLOW" | "ON_POST_TRY_SET_HP_ZERO" | "ON_SANDBOX_OWNER_RES_CHANGED" | "ON_SANDBOX_V3_RECIPE_CHANGE" | "ON_SANDBOX_V3_RESOURCE_CNT_CHANGE" | "ON_SKILL_CAST_SUCCEED" | "ON_SKILL_FINISH" | "ON_SKILL_RETRIGGERED" | "ON_SKILL_START" | "ON_STAGE_END" | "ON_TAKE_DAMAGE" | "ON_TAKE_EP_DAMAGE" | "ON_TARGET_KILLED" | "ON_TOGGLE_SKILL_START" | "ON_TRIGGER_PALSY" | "ON_UNIT_SWITCH_MODE";

/** 模板关联的效果标识有限集合。 */
export type EffectKey = "" | "blitz_skill_01_buff_01" | "blitz_skill_01_buff_02" | "blitz_skill_01_buff_03" | "buff_violent" | "common_072_alarm_01" | "common_combustion_buff_02" | "common_shield_01" | "enemy_dsfull_buff_01" | "enemy_dsfull_buff_04" | "ghost2_beidong_buff_01" | "indigo_skill_02_buff_03" | "lava2_skill02_buff" | "liesel_skill_02_buff_03" | "typhon_equipment_01";

/** 战斗事件处理优先级。 */
export type OnEventPriority = "DEFAULT" | "HIGHER_PRIORITY" | "HIGH_PRIORITY" | "LOWER_PRIORITY" | "LOWEST_PRIORITY" | "LOW_PRIORITY" | "TITI_DOZE_PRIORITY";

/** 按战斗事件保存递归 Action 列表的严格稀疏对象。 */
export interface EventToActions {
  /** 战斗事件 `COOPERATE_PLAYER_DYING` 触发时依次执行的 Action。 */
  "COOPERATE_PLAYER_DYING"?: Array<BattleAction>;
  /** 战斗事件 `COOPERATE_PLAYER_REVIVE` 触发时依次执行的 Action。 */
  "COOPERATE_PLAYER_REVIVE"?: Array<BattleAction>;
  /** 战斗事件 `HALF_IDLE_GAIN_EQUIP` 触发时依次执行的 Action。 */
  "HALF_IDLE_GAIN_EQUIP"?: Array<BattleAction>;
  /** 战斗事件 `HALF_IDLE_GAIN_TRAP` 触发时依次执行的 Action。 */
  "HALF_IDLE_GAIN_TRAP"?: Array<BattleAction>;
  /** 战斗事件 `ON_ABILITY_CAST_ON_TARGET` 触发时依次执行的 Action。 */
  "ON_ABILITY_CAST_ON_TARGET"?: Array<BattleAction>;
  /** 战斗事件 `ON_ABILITY_FINISH` 触发时依次执行的 Action。 */
  "ON_ABILITY_FINISH"?: Array<BattleAction>;
  /** 战斗事件 `ON_ABILITY_INTERRUPTED` 触发时依次执行的 Action。 */
  "ON_ABILITY_INTERRUPTED"?: Array<BattleAction>;
  /** 战斗事件 `ON_ABILITY_SPELL_ON` 触发时依次执行的 Action。 */
  "ON_ABILITY_SPELL_ON"?: Array<BattleAction>;
  /** 战斗事件 `ON_ABILITY_START` 触发时依次执行的 Action。 */
  "ON_ABILITY_START"?: Array<BattleAction>;
  /** 战斗事件 `ON_ABNORMAL_FLAG_DIRTY` 触发时依次执行的 Action。 */
  "ON_ABNORMAL_FLAG_DIRTY"?: Array<BattleAction>;
  /** 战斗事件 `ON_AFTER_ATTACK` 触发时依次执行的 Action。 */
  "ON_AFTER_ATTACK"?: Array<BattleAction>;
  /** 战斗事件 `ON_AFTER_CALCULATE_DAMAGE` 触发时依次执行的 Action。 */
  "ON_AFTER_CALCULATE_DAMAGE"?: Array<BattleAction>;
  /** 战斗事件 `ON_AFTER_OUTPUT_DAMAGE` 触发时依次执行的 Action。 */
  "ON_AFTER_OUTPUT_DAMAGE"?: Array<BattleAction>;
  /** 战斗事件 `ON_AFTER_OUTPUT_ELEMENT_DAMAGE` 触发时依次执行的 Action。 */
  "ON_AFTER_OUTPUT_ELEMENT_DAMAGE"?: Array<BattleAction>;
  /** 战斗事件 `ON_AFTER_OUTPUT_HEAL` 触发时依次执行的 Action。 */
  "ON_AFTER_OUTPUT_HEAL"?: Array<BattleAction>;
  /** 战斗事件 `ON_APPLIED_MODIFIER` 触发时依次执行的 Action。 */
  "ON_APPLIED_MODIFIER"?: Array<BattleAction>;
  /** 战斗事件 `ON_APPLYING_MODIFIER` 触发时依次执行的 Action。 */
  "ON_APPLYING_MODIFIER"?: Array<BattleAction>;
  /** 战斗事件 `ON_APPLYING_SKIPPED_MODIFIER` 触发时依次执行的 Action。 */
  "ON_APPLYING_SKIPPED_MODIFIER"?: Array<BattleAction>;
  /** 战斗事件 `ON_AUTO_CHESS_MODE_CHANGED` 触发时依次执行的 Action。 */
  "ON_AUTO_CHESS_MODE_CHANGED"?: Array<BattleAction>;
  /** 战斗事件 `ON_BEFORE_ABILITY_SPELL_ON` 触发时依次执行的 Action。 */
  "ON_BEFORE_ABILITY_SPELL_ON"?: Array<BattleAction>;
  /** 战斗事件 `ON_BEFORE_APPEAR` 触发时依次执行的 Action。 */
  "ON_BEFORE_APPEAR"?: Array<BattleAction>;
  /** 战斗事件 `ON_BEFORE_APPLYING_MODIFIER` 触发时依次执行的 Action。 */
  "ON_BEFORE_APPLYING_MODIFIER"?: Array<BattleAction>;
  /** 战斗事件 `ON_BEFORE_ATTACK` 触发时依次执行的 Action。 */
  "ON_BEFORE_ATTACK"?: Array<BattleAction>;
  /** 战斗事件 `ON_BEFORE_DIRECTION_CHANGE` 触发时依次执行的 Action。 */
  "ON_BEFORE_DIRECTION_CHANGE"?: Array<BattleAction>;
  /** 战斗事件 `ON_BEFORE_DISAPPEAR` 触发时依次执行的 Action。 */
  "ON_BEFORE_DISAPPEAR"?: Array<BattleAction>;
  /** 战斗事件 `ON_BEFORE_EP_BREAK_FINISH` 触发时依次执行的 Action。 */
  "ON_BEFORE_EP_BREAK_FINISH"?: Array<BattleAction>;
  /** 战斗事件 `ON_BEFORE_EP_BREAK_START` 触发时依次执行的 Action。 */
  "ON_BEFORE_EP_BREAK_START"?: Array<BattleAction>;
  /** 战斗事件 `ON_BEFORE_EXIT_LEVITATE_STATE` 触发时依次执行的 Action。 */
  "ON_BEFORE_EXIT_LEVITATE_STATE"?: Array<BattleAction>;
  /** 战斗事件 `ON_BEFORE_EXIT_UNBALANCED_STATE` 触发时依次执行的 Action。 */
  "ON_BEFORE_EXIT_UNBALANCED_STATE"?: Array<BattleAction>;
  /** 战斗事件 `ON_BEFORE_FALLDOWN` 触发时依次执行的 Action。 */
  "ON_BEFORE_FALLDOWN"?: Array<BattleAction>;
  /** 战斗事件 `ON_BEFORE_TARGET_APPLY_MODIFIER` 触发时依次执行的 Action。 */
  "ON_BEFORE_TARGET_APPLY_MODIFIER"?: Array<BattleAction>;
  /** 战斗事件 `ON_BEFORE_TRY_SET_EP_ZERO` 触发时依次执行的 Action。 */
  "ON_BEFORE_TRY_SET_EP_ZERO"?: Array<BattleAction>;
  /** 战斗事件 `ON_BEFORE_TRY_SET_HP_ZERO` 触发时依次执行的 Action。 */
  "ON_BEFORE_TRY_SET_HP_ZERO"?: Array<BattleAction>;
  /** 战斗事件 `ON_BEING_CALCULATE_DAMAGE` 触发时依次执行的 Action。 */
  "ON_BEING_CALCULATE_DAMAGE"?: Array<BattleAction>;
  /** 战斗事件 `ON_BLOCK_CNT_CHANGE` 触发时依次执行的 Action。 */
  "ON_BLOCK_CNT_CHANGE"?: Array<BattleAction>;
  /** 战斗事件 `ON_BLOCK_DAMAGE` 触发时依次执行的 Action。 */
  "ON_BLOCK_DAMAGE"?: Array<BattleAction>;
  /** 战斗事件 `ON_BOSS_WAVE_WILL_START` 触发时依次执行的 Action。 */
  "ON_BOSS_WAVE_WILL_START"?: Array<BattleAction>;
  /** 战斗事件 `ON_BUFF_DISABLE` 触发时依次执行的 Action。 */
  "ON_BUFF_DISABLE"?: Array<BattleAction>;
  /** 战斗事件 `ON_BUFF_ENABLE` 触发时依次执行的 Action。 */
  "ON_BUFF_ENABLE"?: Array<BattleAction>;
  /** 战斗事件 `ON_BUFF_FINISH` 触发时依次执行的 Action。 */
  "ON_BUFF_FINISH"?: Array<BattleAction>;
  /** 战斗事件 `ON_BUFF_LATE_ENABLE` 触发时依次执行的 Action。 */
  "ON_BUFF_LATE_ENABLE"?: Array<BattleAction>;
  /** 战斗事件 `ON_BUFF_START` 触发时依次执行的 Action。 */
  "ON_BUFF_START"?: Array<BattleAction | null>;
  /** 战斗事件 `ON_BUFF_TRIGGER` 触发时依次执行的 Action。 */
  "ON_BUFF_TRIGGER"?: Array<BattleAction>;
  /** 战斗事件 `ON_CALCULATE_CACHED_PROJECTILE_DAMAGE` 触发时依次执行的 Action。 */
  "ON_CALCULATE_CACHED_PROJECTILE_DAMAGE"?: Array<BattleAction>;
  /** 战斗事件 `ON_CALCULATE_DAMAGE` 触发时依次执行的 Action。 */
  "ON_CALCULATE_DAMAGE"?: Array<BattleAction>;
  /** 战斗事件 `ON_COLLIDE_WITH_HIGHLAND` 触发时依次执行的 Action。 */
  "ON_COLLIDE_WITH_HIGHLAND"?: Array<BattleAction>;
  /** 战斗事件 `ON_DIRECTION_CHANGED` 触发时依次执行的 Action。 */
  "ON_DIRECTION_CHANGED"?: Array<BattleAction>;
  /** 战斗事件 `ON_END_PULLING` 触发时依次执行的 Action。 */
  "ON_END_PULLING"?: Array<BattleAction>;
  /** 战斗事件 `ON_ENTER_LEVITATE_STATE` 触发时依次执行的 Action。 */
  "ON_ENTER_LEVITATE_STATE"?: Array<BattleAction>;
  /** 战斗事件 `ON_ENTER_MAGICCIRCUIT` 触发时依次执行的 Action。 */
  "ON_ENTER_MAGICCIRCUIT"?: Array<BattleAction>;
  /** 战斗事件 `ON_ENTER_UNBALANCED_STATE` 触发时依次执行的 Action。 */
  "ON_ENTER_UNBALANCED_STATE"?: Array<BattleAction>;
  /** 战斗事件 `ON_ENTITY_WILL_OVERLAP` 触发时依次执行的 Action。 */
  "ON_ENTITY_WILL_OVERLAP"?: Array<BattleAction>;
  /** 战斗事件 `ON_EP_BREAK_FINISH` 触发时依次执行的 Action。 */
  "ON_EP_BREAK_FINISH"?: Array<BattleAction>;
  /** 战斗事件 `ON_EP_BREAK_START` 触发时依次执行的 Action。 */
  "ON_EP_BREAK_START"?: Array<BattleAction>;
  /** 战斗事件 `ON_ES_OVER_ZERO` 触发时依次执行的 Action。 */
  "ON_ES_OVER_ZERO"?: Array<BattleAction>;
  /** 战斗事件 `ON_EVADE_DAMAGE` 触发时依次执行的 Action。 */
  "ON_EVADE_DAMAGE"?: Array<BattleAction>;
  /** 战斗事件 `ON_GAME_OVER` 触发时依次执行的 Action。 */
  "ON_GAME_OVER"?: Array<BattleAction>;
  /** 战斗事件 `ON_HALF_IDLE_KAWA_CLEANED` 触发时依次执行的 Action。 */
  "ON_HALF_IDLE_KAWA_CLEANED"?: Array<BattleAction>;
  /** 战斗事件 `ON_HALF_IDLE_KAWA_POLLUTED` 触发时依次执行的 Action。 */
  "ON_HALF_IDLE_KAWA_POLLUTED"?: Array<BattleAction>;
  /** 战斗事件 `ON_HALF_IDLE_TRAP_CHECK_UPGRADE` 触发时依次执行的 Action。 */
  "ON_HALF_IDLE_TRAP_CHECK_UPGRADE"?: Array<BattleAction>;
  /** 战斗事件 `ON_LEAVE_MAGICCIRCUIT` 触发时依次执行的 Action。 */
  "ON_LEAVE_MAGICCIRCUIT"?: Array<BattleAction>;
  /** 战斗事件 `ON_LEGION_MODE_DANGER_LEVEL_REFRESH` 触发时依次执行的 Action。 */
  "ON_LEGION_MODE_DANGER_LEVEL_REFRESH"?: Array<BattleAction>;
  /** 战斗事件 `ON_LEGION_MODE_DRAW_CARD` 触发时依次执行的 Action。 */
  "ON_LEGION_MODE_DRAW_CARD"?: Array<BattleAction>;
  /** 战斗事件 `ON_MAKE_ENEMY_UNBALANCED` 触发时依次执行的 Action。 */
  "ON_MAKE_ENEMY_UNBALANCED"?: Array<BattleAction>;
  /** 战斗事件 `ON_MOTION_MODE_CHANGED` 触发时依次执行的 Action。 */
  "ON_MOTION_MODE_CHANGED"?: Array<BattleAction>;
  /** 战斗事件 `ON_OTHER_BUFF_START` 触发时依次执行的 Action。 */
  "ON_OTHER_BUFF_START"?: Array<BattleAction>;
  /** 战斗事件 `ON_OTHER_RESISTABLE_BUFF_START` 触发时依次执行的 Action。 */
  "ON_OTHER_RESISTABLE_BUFF_START"?: Array<BattleAction>;
  /** 战斗事件 `ON_OUTPUT_ATK_OR_HEAL` 触发时依次执行的 Action。 */
  "ON_OUTPUT_ATK_OR_HEAL"?: Array<BattleAction>;
  /** 战斗事件 `ON_OUTPUT_ATK_OR_HEAL_EACH_SPELL` 触发时依次执行的 Action。 */
  "ON_OUTPUT_ATK_OR_HEAL_EACH_SPELL"?: Array<BattleAction>;
  /** 战斗事件 `ON_OUTPUT_DAMAGE` 触发时依次执行的 Action。 */
  "ON_OUTPUT_DAMAGE"?: Array<BattleAction>;
  /** 战斗事件 `ON_OUTPUT_MODIFIER` 触发时依次执行的 Action。 */
  "ON_OUTPUT_MODIFIER"?: Array<BattleAction>;
  /** 战斗事件 `ON_OWNER_BEFORE_DEAD` 触发时依次执行的 Action。 */
  "ON_OWNER_BEFORE_DEAD"?: Array<BattleAction>;
  /** 战斗事件 `ON_OWNER_BLOCKEE_CHANGED` 触发时依次执行的 Action。 */
  "ON_OWNER_BLOCKEE_CHANGED"?: Array<BattleAction>;
  /** 战斗事件 `ON_OWNER_BLOCK_MODE_CHANGED` 触发时依次执行的 Action。 */
  "ON_OWNER_BLOCK_MODE_CHANGED"?: Array<BattleAction>;
  /** 战斗事件 `ON_OWNER_BORN` 触发时依次执行的 Action。 */
  "ON_OWNER_BORN"?: Array<BattleAction>;
  /** 战斗事件 `ON_OWNER_DYING` 触发时依次执行的 Action。 */
  "ON_OWNER_DYING"?: Array<BattleAction>;
  /** 战斗事件 `ON_OWNER_FINISH` 触发时依次执行的 Action。 */
  "ON_OWNER_FINISH"?: Array<BattleAction>;
  /** 战斗事件 `ON_OWNER_HP_FULL` 触发时依次执行的 Action。 */
  "ON_OWNER_HP_FULL"?: Array<BattleAction>;
  /** 战斗事件 `ON_OWNER_KILLED` 触发时依次执行的 Action。 */
  "ON_OWNER_KILLED"?: Array<BattleAction>;
  /** 战斗事件 `ON_OWNER_KILLED_BY_MAIN_TARGET` 触发时依次执行的 Action。 */
  "ON_OWNER_KILLED_BY_MAIN_TARGET"?: Array<BattleAction>;
  /** 战斗事件 `ON_OWNER_LOCATE` 触发时依次执行的 Action。 */
  "ON_OWNER_LOCATE"?: Array<BattleAction>;
  /** 战斗事件 `ON_OWNER_OVERLAPPED` 触发时依次执行的 Action。 */
  "ON_OWNER_OVERLAPPED"?: Array<BattleAction>;
  /** 战斗事件 `ON_OWNER_POST_BORN` 触发时依次执行的 Action。 */
  "ON_OWNER_POST_BORN"?: Array<BattleAction>;
  /** 战斗事件 `ON_OWNER_REACH_EXIT` 触发时依次执行的 Action。 */
  "ON_OWNER_REACH_EXIT"?: Array<BattleAction>;
  /** 战斗事件 `ON_OWNER_REBORN` 触发时依次执行的 Action。 */
  "ON_OWNER_REBORN"?: Array<BattleAction>;
  /** 战斗事件 `ON_OWNER_ROOT_TILE_CHANGED` 触发时依次执行的 Action。 */
  "ON_OWNER_ROOT_TILE_CHANGED"?: Array<BattleAction>;
  /** 战斗事件 `ON_PALSY_OVERFLOW` 触发时依次执行的 Action。 */
  "ON_PALSY_OVERFLOW"?: Array<BattleAction>;
  /** 战斗事件 `ON_POST_TRY_SET_HP_ZERO` 触发时依次执行的 Action。 */
  "ON_POST_TRY_SET_HP_ZERO"?: Array<BattleAction>;
  /** 战斗事件 `ON_SANDBOX_OWNER_RES_CHANGED` 触发时依次执行的 Action。 */
  "ON_SANDBOX_OWNER_RES_CHANGED"?: Array<BattleAction>;
  /** 战斗事件 `ON_SANDBOX_V3_RECIPE_CHANGE` 触发时依次执行的 Action。 */
  "ON_SANDBOX_V3_RECIPE_CHANGE"?: Array<BattleAction>;
  /** 战斗事件 `ON_SANDBOX_V3_RESOURCE_CNT_CHANGE` 触发时依次执行的 Action。 */
  "ON_SANDBOX_V3_RESOURCE_CNT_CHANGE"?: Array<BattleAction>;
  /** 战斗事件 `ON_SKILL_CAST_SUCCEED` 触发时依次执行的 Action。 */
  "ON_SKILL_CAST_SUCCEED"?: Array<BattleAction>;
  /** 战斗事件 `ON_SKILL_FINISH` 触发时依次执行的 Action。 */
  "ON_SKILL_FINISH"?: Array<BattleAction>;
  /** 战斗事件 `ON_SKILL_RETRIGGERED` 触发时依次执行的 Action。 */
  "ON_SKILL_RETRIGGERED"?: Array<BattleAction>;
  /** 战斗事件 `ON_SKILL_START` 触发时依次执行的 Action。 */
  "ON_SKILL_START"?: Array<BattleAction>;
  /** 战斗事件 `ON_STAGE_END` 触发时依次执行的 Action。 */
  "ON_STAGE_END"?: Array<BattleAction>;
  /** 战斗事件 `ON_TAKE_DAMAGE` 触发时依次执行的 Action。 */
  "ON_TAKE_DAMAGE"?: Array<BattleAction>;
  /** 战斗事件 `ON_TAKE_EP_DAMAGE` 触发时依次执行的 Action。 */
  "ON_TAKE_EP_DAMAGE"?: Array<BattleAction>;
  /** 战斗事件 `ON_TARGET_KILLED` 触发时依次执行的 Action。 */
  "ON_TARGET_KILLED"?: Array<BattleAction>;
  /** 战斗事件 `ON_TOGGLE_SKILL_START` 触发时依次执行的 Action。 */
  "ON_TOGGLE_SKILL_START"?: Array<BattleAction>;
  /** 战斗事件 `ON_TRIGGER_PALSY` 触发时依次执行的 Action。 */
  "ON_TRIGGER_PALSY"?: Array<BattleAction>;
  /** 战斗事件 `ON_UNIT_SWITCH_MODE` 触发时依次执行的 Action。 */
  "ON_UNIT_SWITCH_MODE"?: Array<BattleAction>;
}

/** 一个具名战斗模板及其事件 Action 配置。 */
export interface BuffTemplate {
  /** 战斗模板唯一标识，应与外层动态字典键一致。 */
  templateKey: string;
  /** 模板关联的视觉或逻辑效果标识；空字符串表示未配置。 */
  effectKey: EffectKey;
  /** 模板处理战斗事件时使用的优先级。 */
  onEventPriority: OnEventPriority;
  /** 按战斗事件保存的 Action 列表；没有监听的事件字段会缺失。 */
  eventToActions: EventToActions;
}
