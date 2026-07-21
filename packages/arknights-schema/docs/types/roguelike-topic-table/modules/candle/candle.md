# candle

本页记录 JSON 逻辑模块 `modules/candle` 中的 2 个强关联类型及其 Schema。

## Candle

`Candle` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `CandleSchema`。

- TypeScript：`src/types/roguelike-topic-table/modules/candle/candle.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/modules/candle/candle.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `candleTicketIdList` | `string[]` | 是 |
| `moduleConsts` | `CandleModuleConsts` | 是 |
| `candleBattleStageIdList` | `string[]` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## CandleModuleConsts

`CandleModuleConsts` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `CandleModuleConstsSchema`。

- TypeScript：`src/types/roguelike-topic-table/modules/candle/candle.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/modules/candle/candle.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `candleHolderBuffId` | `string` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->
