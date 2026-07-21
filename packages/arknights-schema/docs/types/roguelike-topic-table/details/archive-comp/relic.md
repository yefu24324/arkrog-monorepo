# relic

本页记录 JSON 逻辑模块 `details/archive-comp` 中的 3 个强关联类型及其 Schema。

## ArchiveCompRelic

`ArchiveCompRelic` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `ArchiveCompRelicSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/archive-comp/relic.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/archive-comp/relic.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `relic` | `{ [key: string]: RelicRelic }` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## RelicRelic

`RelicRelic` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `RelicRelicSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/archive-comp/relic.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/archive-comp/relic.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `relicId` | `string` | 是 |
| `relicSortId` | `number` | 是 |
| `relicGroupId` | `number` | 是 |
| `orderId` | `string` | 是 |
| `isSpRelic` | `boolean` | 是 |
| `enrollId` | `EnrollId \| null` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## Rogue1__ActiveTool

`Rogue1__ActiveTool` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `Rogue1__ActiveToolSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/archive-comp/relic.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/archive-comp/relic.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `trapId` | `string` | 是 |
| `trapSortId` | `number` | 是 |
| `orderId` | `string` | 是 |
| `enrollId` | `null` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->
