# custom-tickets

本页记录 JSON 逻辑模块 `details/custom-tickets` 中的 2 个强关联类型及其 Schema。

## CustomTickets

`CustomTickets` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `CustomTicketsSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/custom-tickets/custom-tickets.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/custom-tickets/custom-tickets.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `rogue_2_custom_ticket_purify` | `Rogue2_CustomTicketPurifyClass` | 否 |
| `rogue_5_recruit_ticket_only_candle` | `Rogue2_CustomTicketPurifyClass` | 否 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## Rogue2_CustomTicketPurifyClass

`Rogue2_CustomTicketPurifyClass` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `Rogue2_CustomTicketPurifyClassSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/custom-tickets/custom-tickets.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/custom-tickets/custom-tickets.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `id` | `string` | 是 |
| `subType` | `string` | 是 |
| `discardText` | `string` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->
