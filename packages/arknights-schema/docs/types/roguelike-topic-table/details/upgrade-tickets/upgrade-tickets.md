# upgrade-tickets

本页记录 JSON 逻辑模块 `details/upgrade-tickets` 中的 4 个强关联类型及其 Schema。

## Rogue1_UpgradeTicket5StarClass

`Rogue1_UpgradeTicket5StarClass` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `Rogue1_UpgradeTicket5StarClassSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/upgrade-tickets/upgrade-tickets.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/upgrade-tickets/upgrade-tickets.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `id` | `string` | 是 |
| `profession` | `number` | 是 |
| `rarity` | `number` | 是 |
| `professionList` | `Profession[]` | 是 |
| `rarityList` | `RarityList[]` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## Rogue1_UpgradeTicketAllClass

`Rogue1_UpgradeTicketAllClass` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `Rogue1_UpgradeTicketAllClassSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/upgrade-tickets/upgrade-tickets.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/upgrade-tickets/upgrade-tickets.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `id` | `string` | 是 |
| `profession` | `number` | 是 |
| `rarity` | `Category` | 是 |
| `professionList` | `Profession[]` | 是 |
| `rarityList` | `RarityList[]` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## Rogue1_UpgradeTicketCasterClass

`Rogue1_UpgradeTicketCasterClass` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `Rogue1_UpgradeTicketCasterClassSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/upgrade-tickets/upgrade-tickets.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/upgrade-tickets/upgrade-tickets.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `id` | `string` | 是 |
| `profession` | `Profession` | 是 |
| `rarity` | `Category` | 是 |
| `professionList` | `Profession[]` | 是 |
| `rarityList` | `RarityList[]` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## UpgradeTickets

`UpgradeTickets` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `UpgradeTicketsSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/upgrade-tickets/upgrade-tickets.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/upgrade-tickets/upgrade-tickets.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `rogue_1_upgrade_ticket_all` | `Rogue1_UpgradeTicketAllClass` | 否 |
| `rogue_1_upgrade_ticket_5star` | `Rogue1_UpgradeTicket5StarClass` | 否 |
| `rogue_1_upgrade_ticket_pioneer` | `Rogue1_UpgradeTicketCasterClass` | 否 |
| `rogue_1_upgrade_ticket_warrior` | `Rogue1_UpgradeTicketCasterClass` | 否 |
| `rogue_1_upgrade_ticket_tank` | `Rogue1_UpgradeTicketCasterClass` | 否 |
| `rogue_1_upgrade_ticket_sniper` | `Rogue1_UpgradeTicketCasterClass` | 否 |
| `rogue_1_upgrade_ticket_caster` | `Rogue1_UpgradeTicketCasterClass` | 否 |
| `rogue_1_upgrade_ticket_support` | `Rogue1_UpgradeTicketCasterClass` | 否 |
| `rogue_1_upgrade_ticket_medic` | `Rogue1_UpgradeTicketCasterClass` | 否 |
| `rogue_1_upgrade_ticket_special` | `Rogue1_UpgradeTicketCasterClass` | 否 |
| `rogue_2_upgrade_ticket_all` | `Rogue1_UpgradeTicketAllClass` | 否 |
| `rogue_2_upgrade_ticket_5star` | `Rogue1_UpgradeTicket5StarClass` | 否 |
| `rogue_2_upgrade_ticket_pioneer` | `Rogue1_UpgradeTicketCasterClass` | 否 |
| `rogue_2_upgrade_ticket_warrior` | `Rogue1_UpgradeTicketCasterClass` | 否 |
| `rogue_2_upgrade_ticket_tank` | `Rogue1_UpgradeTicketCasterClass` | 否 |
| `rogue_2_upgrade_ticket_sniper` | `Rogue1_UpgradeTicketCasterClass` | 否 |
| `rogue_2_upgrade_ticket_caster` | `Rogue1_UpgradeTicketCasterClass` | 否 |
| `rogue_2_upgrade_ticket_support` | `Rogue1_UpgradeTicketCasterClass` | 否 |
| `rogue_2_upgrade_ticket_medic` | `Rogue1_UpgradeTicketCasterClass` | 否 |
| `rogue_2_upgrade_ticket_special` | `Rogue1_UpgradeTicketCasterClass` | 否 |
| `rogue_3_upgrade_ticket_all` | `Rogue1_UpgradeTicketAllClass` | 否 |
| `rogue_3_upgrade_ticket_5star` | `Rogue1_UpgradeTicket5StarClass` | 否 |
| `rogue_3_upgrade_ticket_pioneer` | `Rogue1_UpgradeTicketCasterClass` | 否 |
| `rogue_3_upgrade_ticket_warrior` | `Rogue1_UpgradeTicketCasterClass` | 否 |
| `rogue_3_upgrade_ticket_tank` | `Rogue1_UpgradeTicketCasterClass` | 否 |
| `rogue_3_upgrade_ticket_sniper` | `Rogue1_UpgradeTicketCasterClass` | 否 |
| `rogue_3_upgrade_ticket_caster` | `Rogue1_UpgradeTicketCasterClass` | 否 |
| `rogue_3_upgrade_ticket_support` | `Rogue1_UpgradeTicketCasterClass` | 否 |
| `rogue_3_upgrade_ticket_medic` | `Rogue1_UpgradeTicketCasterClass` | 否 |
| `rogue_3_upgrade_ticket_special` | `Rogue1_UpgradeTicketCasterClass` | 否 |
| `rogue_4_upgrade_ticket_all` | `Rogue1_UpgradeTicketAllClass` | 否 |
| `rogue_4_upgrade_ticket_5star` | `Rogue1_UpgradeTicket5StarClass` | 否 |
| `rogue_4_upgrade_ticket_pioneer` | `Rogue1_UpgradeTicketCasterClass` | 否 |
| `rogue_4_upgrade_ticket_warrior` | `Rogue1_UpgradeTicketCasterClass` | 否 |
| `rogue_4_upgrade_ticket_tank` | `Rogue1_UpgradeTicketCasterClass` | 否 |
| `rogue_4_upgrade_ticket_sniper` | `Rogue1_UpgradeTicketCasterClass` | 否 |
| `rogue_4_upgrade_ticket_caster` | `Rogue1_UpgradeTicketCasterClass` | 否 |
| `rogue_4_upgrade_ticket_support` | `Rogue1_UpgradeTicketCasterClass` | 否 |
| `rogue_4_upgrade_ticket_medic` | `Rogue1_UpgradeTicketCasterClass` | 否 |
| `rogue_4_upgrade_ticket_special` | `Rogue1_UpgradeTicketCasterClass` | 否 |
| `rogue_5_upgrade_ticket_all` | `Rogue1_UpgradeTicketAllClass` | 否 |
| `rogue_5_upgrade_ticket_5star` | `Rogue1_UpgradeTicket5StarClass` | 否 |
| `rogue_5_upgrade_ticket_pioneer` | `Rogue1_UpgradeTicketCasterClass` | 否 |
| `rogue_5_upgrade_ticket_warrior` | `Rogue1_UpgradeTicketCasterClass` | 否 |
| `rogue_5_upgrade_ticket_tank` | `Rogue1_UpgradeTicketCasterClass` | 否 |
| `rogue_5_upgrade_ticket_sniper` | `Rogue1_UpgradeTicketCasterClass` | 否 |
| `rogue_5_upgrade_ticket_caster` | `Rogue1_UpgradeTicketCasterClass` | 否 |
| `rogue_5_upgrade_ticket_support` | `Rogue1_UpgradeTicketCasterClass` | 否 |
| `rogue_5_upgrade_ticket_medic` | `Rogue1_UpgradeTicketCasterClass` | 否 |
| `rogue_5_upgrade_ticket_special` | `Rogue1_UpgradeTicketCasterClass` | 否 |
| `rogue_5_upgrade_ticket_all_candle` | `Rogue1_UpgradeTicketAllClass` | 否 |
| `rogue_5_upgrade_ticket_5star_candle` | `Rogue1_UpgradeTicket5StarClass` | 否 |
| `rogue_5_upgrade_ticket_pioneer_candle` | `Rogue1_UpgradeTicketCasterClass` | 否 |
| `rogue_5_upgrade_ticket_warrior_candle` | `Rogue1_UpgradeTicketCasterClass` | 否 |
| `rogue_5_upgrade_ticket_tank_candle` | `Rogue1_UpgradeTicketCasterClass` | 否 |
| `rogue_5_upgrade_ticket_sniper_candle` | `Rogue1_UpgradeTicketCasterClass` | 否 |
| `rogue_5_upgrade_ticket_caster_candle` | `Rogue1_UpgradeTicketCasterClass` | 否 |
| `rogue_5_upgrade_ticket_support_candle` | `Rogue1_UpgradeTicketCasterClass` | 否 |
| `rogue_5_upgrade_ticket_medic_candle` | `Rogue1_UpgradeTicketCasterClass` | 否 |
| `rogue_5_upgrade_ticket_special_candle` | `Rogue1_UpgradeTicketCasterClass` | 否 |
| `rogue_6_upgrade_ticket_all` | `Rogue1_UpgradeTicketAllClass` | 否 |
| `rogue_6_upgrade_ticket_5star` | `Rogue1_UpgradeTicket5StarClass` | 否 |
| `rogue_6_upgrade_ticket_pioneer` | `Rogue1_UpgradeTicketCasterClass` | 否 |
| `rogue_6_upgrade_ticket_warrior` | `Rogue1_UpgradeTicketCasterClass` | 否 |
| `rogue_6_upgrade_ticket_tank` | `Rogue1_UpgradeTicketCasterClass` | 否 |
| `rogue_6_upgrade_ticket_sniper` | `Rogue1_UpgradeTicketCasterClass` | 否 |
| `rogue_6_upgrade_ticket_caster` | `Rogue1_UpgradeTicketCasterClass` | 否 |
| `rogue_6_upgrade_ticket_support` | `Rogue1_UpgradeTicketCasterClass` | 否 |
| `rogue_6_upgrade_ticket_medic` | `Rogue1_UpgradeTicketCasterClass` | 否 |
| `rogue_6_upgrade_ticket_special` | `Rogue1_UpgradeTicketCasterClass` | 否 |
| `rogue_6_upgrade_ticket_pioneer_from_relic` | `Rogue1_UpgradeTicketCasterClass` | 否 |
| `rogue_6_upgrade_ticket_warrior_from_relic` | `Rogue1_UpgradeTicketCasterClass` | 否 |
| `rogue_6_upgrade_ticket_tank_from_relic` | `Rogue1_UpgradeTicketCasterClass` | 否 |
| `rogue_6_upgrade_ticket_sniper_from_relic` | `Rogue1_UpgradeTicketCasterClass` | 否 |
| `rogue_6_upgrade_ticket_caster_from_relic` | `Rogue1_UpgradeTicketCasterClass` | 否 |
| `rogue_6_upgrade_ticket_support_from_relic` | `Rogue1_UpgradeTicketCasterClass` | 否 |
| `rogue_6_upgrade_ticket_medic_from_relic` | `Rogue1_UpgradeTicketCasterClass` | 否 |
| `rogue_6_upgrade_ticket_special_from_relic` | `Rogue1_UpgradeTicketCasterClass` | 否 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->
