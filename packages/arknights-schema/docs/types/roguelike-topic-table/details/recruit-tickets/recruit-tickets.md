# recruit-tickets

本页记录 JSON 逻辑模块 `details/recruit-tickets` 中的 5 个强关联类型及其 Schema。

## ExtraCharId

`ExtraCharId` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `ExtraCharIdSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/recruit-tickets/recruit-tickets.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/recruit-tickets/recruit-tickets.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字面量范围

`"char_504_rguard" \| "char_507_rsnipe" \| "char_505_rcast" \| "char_506_rmedic" \| "char_514_rdfend"`

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## RecruitTickets

`RecruitTickets` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `RecruitTicketsSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/recruit-tickets/recruit-tickets.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/recruit-tickets/recruit-tickets.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `rogue_1_recruit_ticket_pioneer` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_1_recruit_ticket_warrior` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_1_recruit_ticket_tank` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_1_recruit_ticket_sniper` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_1_recruit_ticket_caster` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_1_recruit_ticket_support` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_1_recruit_ticket_medic` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_1_recruit_ticket_special` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_1_recruit_ticket_pioneer_sp` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_1_recruit_ticket_warrior_sp` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_1_recruit_ticket_tank_sp` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_1_recruit_ticket_sniper_sp` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_1_recruit_ticket_caster_sp` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_1_recruit_ticket_support_sp` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_1_recruit_ticket_medic_sp` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_1_recruit_ticket_special_sp` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_1_recruit_ticket_double_1` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_1_recruit_ticket_double_2` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_1_recruit_ticket_double_3` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_1_recruit_ticket_double_4` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_1_recruit_ticket_quad_melee` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_1_recruit_ticket_quad_ranged` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_1_recruit_ticket_all` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_1_recruit_ticket_5star` | `Rogue1_RecruitTicket5StarClass` | 否 |
| `rogue_1_recruit_ticket_all_premium` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_1_recruit_ticket_quad_melee_discount` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_1_recruit_ticket_quad_ranged_discount` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_1_recruit_ticket_all_discount` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_1_recruit_ticket_pioneer_red` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_1_recruit_ticket_warrior_red` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_1_recruit_ticket_tank_red` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_1_recruit_ticket_sniper_red` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_1_recruit_ticket_caster_red` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_1_recruit_ticket_support_red` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_1_recruit_ticket_medic_red` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_1_recruit_ticket_redecial_red` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_2_recruit_ticket_pioneer` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_2_recruit_ticket_warrior` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_2_recruit_ticket_tank` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_2_recruit_ticket_sniper` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_2_recruit_ticket_caster` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_2_recruit_ticket_support` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_2_recruit_ticket_medic` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_2_recruit_ticket_special` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_2_recruit_ticket_pioneer_sp` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_2_recruit_ticket_warrior_sp` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_2_recruit_ticket_tank_sp` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_2_recruit_ticket_sniper_sp` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_2_recruit_ticket_caster_sp` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_2_recruit_ticket_support_sp` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_2_recruit_ticket_medic_sp` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_2_recruit_ticket_special_sp` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_2_recruit_ticket_pioneer_vip` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_2_recruit_ticket_warrior_vip` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_2_recruit_ticket_tank_vip` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_2_recruit_ticket_sniper_vip` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_2_recruit_ticket_caster_vip` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_2_recruit_ticket_support_vip` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_2_recruit_ticket_medic_vip` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_2_recruit_ticket_special_vip` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_2_recruit_ticket_double_1` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_2_recruit_ticket_double_2` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_2_recruit_ticket_double_3` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_2_recruit_ticket_double_4` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_2_recruit_ticket_quad_melee` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_2_recruit_ticket_quad_ranged` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_2_recruit_ticket_all` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_2_recruit_ticket_5star` | `Rogue1_RecruitTicket5StarClass` | 否 |
| `rogue_2_recruit_ticket_all_premium` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_2_recruit_ticket_quad_melee_discount` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_2_recruit_ticket_quad_ranged_discount` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_2_recruit_ticket_all_discount` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_2_recruit_ticket_temp_5_up` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_2_recruit_ticket_temp_6_up` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_3_recruit_ticket_pioneer` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_3_recruit_ticket_warrior` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_3_recruit_ticket_tank` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_3_recruit_ticket_sniper` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_3_recruit_ticket_caster` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_3_recruit_ticket_support` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_3_recruit_ticket_medic` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_3_recruit_ticket_special` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_3_recruit_ticket_pioneer_sp` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_3_recruit_ticket_warrior_sp` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_3_recruit_ticket_tank_sp` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_3_recruit_ticket_sniper_sp` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_3_recruit_ticket_caster_sp` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_3_recruit_ticket_support_sp` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_3_recruit_ticket_medic_sp` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_3_recruit_ticket_special_sp` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_3_recruit_ticket_pioneer_vip` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_3_recruit_ticket_warrior_vip` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_3_recruit_ticket_tank_vip` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_3_recruit_ticket_sniper_vip` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_3_recruit_ticket_caster_vip` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_3_recruit_ticket_support_vip` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_3_recruit_ticket_medic_vip` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_3_recruit_ticket_special_vip` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_3_recruit_ticket_double_1` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_3_recruit_ticket_double_2` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_3_recruit_ticket_double_3` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_3_recruit_ticket_double_4` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_3_recruit_ticket_quad_melee` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_3_recruit_ticket_quad_ranged` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_3_recruit_ticket_all` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_3_recruit_ticket_5star` | `Rogue1_RecruitTicket5StarClass` | 否 |
| `rogue_3_recruit_ticket_all_premium` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_3_recruit_ticket_quad_melee_discount` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_3_recruit_ticket_quad_ranged_discount` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_3_recruit_ticket_all_discount` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_3_recruit_ticket_temp_5_up` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_3_recruit_ticket_temp_6_up` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_4_recruit_ticket_pioneer` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_4_recruit_ticket_warrior` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_4_recruit_ticket_tank` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_4_recruit_ticket_sniper` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_4_recruit_ticket_caster` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_4_recruit_ticket_support` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_4_recruit_ticket_medic` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_4_recruit_ticket_special` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_4_recruit_ticket_pioneer_sp` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_4_recruit_ticket_warrior_sp` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_4_recruit_ticket_tank_sp` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_4_recruit_ticket_sniper_sp` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_4_recruit_ticket_caster_sp` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_4_recruit_ticket_support_sp` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_4_recruit_ticket_medic_sp` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_4_recruit_ticket_special_sp` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_4_recruit_ticket_pioneer_vip` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_4_recruit_ticket_warrior_vip` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_4_recruit_ticket_tank_vip` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_4_recruit_ticket_sniper_vip` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_4_recruit_ticket_caster_vip` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_4_recruit_ticket_support_vip` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_4_recruit_ticket_medic_vip` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_4_recruit_ticket_special_vip` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_4_recruit_ticket_double_1` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_4_recruit_ticket_double_2` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_4_recruit_ticket_double_3` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_4_recruit_ticket_double_4` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_4_recruit_ticket_double_1_vip` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_4_recruit_ticket_double_2_vip` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_4_recruit_ticket_double_3_vip` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_4_recruit_ticket_double_4_vip` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_4_recruit_ticket_quad_melee` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_4_recruit_ticket_quad_ranged` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_4_recruit_ticket_all` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_4_recruit_ticket_5star` | `Rogue1_RecruitTicket5StarClass` | 否 |
| `rogue_4_recruit_ticket_all_premium` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_4_recruit_ticket_quad_melee_discount` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_4_recruit_ticket_quad_ranged_discount` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_4_recruit_ticket_all_discount` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_4_recruit_ticket_temp_5_up` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_4_recruit_ticket_temp_6_up` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_4_recruit_ticket_temp_6` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_5_recruit_ticket_pioneer` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_5_recruit_ticket_warrior` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_5_recruit_ticket_tank` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_5_recruit_ticket_sniper` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_5_recruit_ticket_caster` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_5_recruit_ticket_support` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_5_recruit_ticket_medic` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_5_recruit_ticket_special` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_5_recruit_ticket_pioneer_sp` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_5_recruit_ticket_warrior_sp` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_5_recruit_ticket_tank_sp` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_5_recruit_ticket_sniper_sp` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_5_recruit_ticket_caster_sp` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_5_recruit_ticket_support_sp` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_5_recruit_ticket_medic_sp` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_5_recruit_ticket_special_sp` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_5_recruit_ticket_pioneer_vip` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_5_recruit_ticket_warrior_vip` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_5_recruit_ticket_tank_vip` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_5_recruit_ticket_sniper_vip` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_5_recruit_ticket_caster_vip` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_5_recruit_ticket_support_vip` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_5_recruit_ticket_medic_vip` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_5_recruit_ticket_special_vip` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_5_recruit_ticket_double_1` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_5_recruit_ticket_double_2` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_5_recruit_ticket_double_3` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_5_recruit_ticket_double_4` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_5_recruit_ticket_double_1_vip` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_5_recruit_ticket_double_2_vip` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_5_recruit_ticket_double_3_vip` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_5_recruit_ticket_double_4_vip` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_5_recruit_ticket_quad_melee` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_5_recruit_ticket_quad_ranged` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_5_recruit_ticket_all` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_5_recruit_ticket_5star` | `Rogue1_RecruitTicket5StarClass` | 否 |
| `rogue_5_recruit_ticket_all_premium` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_5_recruit_ticket_quad_melee_discount` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_5_recruit_ticket_quad_ranged_discount` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_5_recruit_ticket_all_discount` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_5_recruit_ticket_temp_5_up` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_5_recruit_ticket_temp_6_up` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_5_recruit_ticket_temp_6` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_5_recruit_ticket_pioneer_candle` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_5_recruit_ticket_warrior_candle` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_5_recruit_ticket_tank_candle` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_5_recruit_ticket_sniper_candle` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_5_recruit_ticket_caster_candle` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_5_recruit_ticket_support_candle` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_5_recruit_ticket_medic_candle` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_5_recruit_ticket_special_candle` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_5_recruit_ticket_pioneer_sp_candle` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_5_recruit_ticket_warrior_sp_candle` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_5_recruit_ticket_tank_sp_candle` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_5_recruit_ticket_sniper_sp_candle` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_5_recruit_ticket_caster_sp_candle` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_5_recruit_ticket_support_sp_candle` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_5_recruit_ticket_medic_sp_candle` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_5_recruit_ticket_special_sp_candle` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_5_recruit_ticket_pioneer_vip_candle` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_5_recruit_ticket_warrior_vip_candle` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_5_recruit_ticket_tank_vip_candle` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_5_recruit_ticket_sniper_vip_candle` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_5_recruit_ticket_caster_vip_candle` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_5_recruit_ticket_support_vip_candle` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_5_recruit_ticket_medic_vip_candle` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_5_recruit_ticket_special_vip_candle` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_5_recruit_ticket_double_1_candle` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_5_recruit_ticket_double_2_candle` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_5_recruit_ticket_double_3_candle` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_5_recruit_ticket_double_4_candle` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_5_recruit_ticket_double_1_vip_candle` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_5_recruit_ticket_double_2_vip_candle` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_5_recruit_ticket_double_3_vip_candle` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_5_recruit_ticket_double_4_vip_candle` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_5_recruit_ticket_quad_melee_candle` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_5_recruit_ticket_quad_ranged_candle` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_5_recruit_ticket_all_candle` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_5_recruit_ticket_5star_candle` | `Rogue1_RecruitTicket5StarClass` | 否 |
| `rogue_5_recruit_ticket_all_premium_candle` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_5_recruit_ticket_quad_melee_discount_candle` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_5_recruit_ticket_quad_ranged_discount_candle` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_5_recruit_ticket_all_discount_candle` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_5_recruit_ticket_temp_5_up_candle` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_5_recruit_ticket_temp_6_up_candle` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_5_recruit_ticket_temp_6_candle` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_5_recruit_ticket_pioneer_init` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_5_recruit_ticket_warrior_init` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_5_recruit_ticket_tank_init` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_5_recruit_ticket_sniper_init` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_5_recruit_ticket_caster_init` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_5_recruit_ticket_support_init` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_5_recruit_ticket_medic_init` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_5_recruit_ticket_special_init` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_5_recruit_ticket_pioneer_vip_init` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_5_recruit_ticket_warrior_vip_init` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_5_recruit_ticket_tank_vip_init` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_5_recruit_ticket_sniper_vip_init` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_5_recruit_ticket_caster_vip_init` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_5_recruit_ticket_support_vip_init` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_5_recruit_ticket_medic_vip_init` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_5_recruit_ticket_special_vip_init` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_5_recruit_ticket_only_candle` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_6_recruit_ticket_pioneer` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_6_recruit_ticket_warrior` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_6_recruit_ticket_tank` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_6_recruit_ticket_sniper` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_6_recruit_ticket_caster` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_6_recruit_ticket_support` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_6_recruit_ticket_medic` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_6_recruit_ticket_special` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_6_recruit_ticket_pioneer_sp` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_6_recruit_ticket_warrior_sp` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_6_recruit_ticket_tank_sp` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_6_recruit_ticket_sniper_sp` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_6_recruit_ticket_caster_sp` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_6_recruit_ticket_support_sp` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_6_recruit_ticket_medic_sp` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_6_recruit_ticket_special_sp` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_6_recruit_ticket_pioneer_vip` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_6_recruit_ticket_warrior_vip` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_6_recruit_ticket_tank_vip` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_6_recruit_ticket_sniper_vip` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_6_recruit_ticket_caster_vip` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_6_recruit_ticket_support_vip` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_6_recruit_ticket_medic_vip` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_6_recruit_ticket_special_vip` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_6_recruit_ticket_double_1` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_6_recruit_ticket_double_2` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_6_recruit_ticket_double_3` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_6_recruit_ticket_double_4` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_6_recruit_ticket_double_1_vip` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_6_recruit_ticket_double_2_vip` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_6_recruit_ticket_double_3_vip` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_6_recruit_ticket_double_4_vip` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_6_recruit_ticket_quad_melee` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_6_recruit_ticket_quad_ranged` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_6_recruit_ticket_all` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_6_recruit_ticket_5star` | `Rogue1_RecruitTicket5StarClass` | 否 |
| `rogue_6_recruit_ticket_all_premium` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_6_recruit_ticket_quad_melee_discount` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_6_recruit_ticket_quad_ranged_discount` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_6_recruit_ticket_all_discount` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_6_recruit_ticket_temp_5_up` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_6_recruit_ticket_temp_6_up` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_6_recruit_ticket_temp_6` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_6_recruit_ticket_5star_double_1_vip` | `Rogue1_RecruitTicket5StarClass` | 否 |
| `rogue_6_recruit_ticket_5star_double_2_vip` | `Rogue1_RecruitTicket5StarClass` | 否 |
| `rogue_6_recruit_ticket_5star_double_3_vip` | `Rogue1_RecruitTicket5StarClass` | 否 |
| `rogue_6_recruit_ticket_5star_double_4_vip` | `Rogue1_RecruitTicket5StarClass` | 否 |
| `rogue_6_recruit_ticket_pioneer_candle` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_6_recruit_ticket_warrior_candle` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_6_recruit_ticket_tank_candle` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_6_recruit_ticket_sniper_candle` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_6_recruit_ticket_caster_candle` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_6_recruit_ticket_support_candle` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_6_recruit_ticket_medic_candle` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_6_recruit_ticket_special_candle` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_6_recruit_ticket_pioneer_sp_candle` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_6_recruit_ticket_warrior_sp_candle` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_6_recruit_ticket_tank_sp_candle` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_6_recruit_ticket_sniper_sp_candle` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_6_recruit_ticket_caster_sp_candle` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_6_recruit_ticket_support_sp_candle` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_6_recruit_ticket_medic_sp_candle` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_6_recruit_ticket_special_sp_candle` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_6_recruit_ticket_pioneer_vip_candle` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_6_recruit_ticket_warrior_vip_candle` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_6_recruit_ticket_tank_vip_candle` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_6_recruit_ticket_sniper_vip_candle` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_6_recruit_ticket_caster_vip_candle` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_6_recruit_ticket_support_vip_candle` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_6_recruit_ticket_medic_vip_candle` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_6_recruit_ticket_special_vip_candle` | `Rogue1_RecruitTicketCasterClass` | 否 |
| `rogue_6_recruit_ticket_double_1_candle` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_6_recruit_ticket_double_2_candle` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_6_recruit_ticket_double_3_candle` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_6_recruit_ticket_double_4_candle` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_6_recruit_ticket_double_1_vip_candle` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_6_recruit_ticket_double_2_vip_candle` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_6_recruit_ticket_double_3_vip_candle` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_6_recruit_ticket_double_4_vip_candle` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_6_recruit_ticket_quad_melee_candle` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_6_recruit_ticket_quad_ranged_candle` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_6_recruit_ticket_all_candle` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_6_recruit_ticket_5star_candle` | `Rogue1_RecruitTicket5StarClass` | 否 |
| `rogue_6_recruit_ticket_all_premium_candle` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_6_recruit_ticket_quad_melee_discount_candle` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_6_recruit_ticket_quad_ranged_discount_candle` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_6_recruit_ticket_all_discount_candle` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_6_recruit_ticket_temp_5_up_candle` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_6_recruit_ticket_temp_6_up_candle` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_6_recruit_ticket_temp_6_candle` | `Rogue1_RecruitTicketAllClass` | 否 |
| `rogue_6_recruit_ticket_5star_double_1_vip_candle` | `Rogue1_RecruitTicket5StarClass` | 否 |
| `rogue_6_recruit_ticket_5star_double_2_vip_candle` | `Rogue1_RecruitTicket5StarClass` | 否 |
| `rogue_6_recruit_ticket_5star_double_3_vip_candle` | `Rogue1_RecruitTicket5StarClass` | 否 |
| `rogue_6_recruit_ticket_5star_double_4_vip_candle` | `Rogue1_RecruitTicket5StarClass` | 否 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## Rogue1_RecruitTicket5StarClass

`Rogue1_RecruitTicket5StarClass` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `Rogue1_RecruitTicket5StarClassSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/recruit-tickets/recruit-tickets.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/recruit-tickets/recruit-tickets.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `id` | `string` | 是 |
| `profession` | `number` | 是 |
| `rarity` | `number` | 是 |
| `professionList` | `Profession[]` | 是 |
| `rarityList` | `RarityList[]` | 是 |
| `extraEliteNum` | `number` | 是 |
| `extraFreeRarity` | `never[]` | 是 |
| `extraCharIds` | `ExtraCharId[]` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## Rogue1_RecruitTicketAllClass

`Rogue1_RecruitTicketAllClass` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `Rogue1_RecruitTicketAllClassSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/recruit-tickets/recruit-tickets.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/recruit-tickets/recruit-tickets.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `id` | `string` | 是 |
| `profession` | `number` | 是 |
| `rarity` | `Category` | 是 |
| `professionList` | `Profession[]` | 是 |
| `rarityList` | `RarityList[]` | 是 |
| `extraEliteNum` | `number` | 是 |
| `extraFreeRarity` | `never[]` | 是 |
| `extraCharIds` | `ExtraCharId[]` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## Rogue1_RecruitTicketCasterClass

`Rogue1_RecruitTicketCasterClass` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `Rogue1_RecruitTicketCasterClassSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/recruit-tickets/recruit-tickets.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/recruit-tickets/recruit-tickets.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `id` | `string` | 是 |
| `profession` | `Profession` | 是 |
| `rarity` | `Category` | 是 |
| `professionList` | `Profession[]` | 是 |
| `rarityList` | `RarityList[]` | 是 |
| `extraEliteNum` | `number` | 是 |
| `extraFreeRarity` | `RarityList[]` | 是 |
| `extraCharIds` | `ExtraCharId[]` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->
