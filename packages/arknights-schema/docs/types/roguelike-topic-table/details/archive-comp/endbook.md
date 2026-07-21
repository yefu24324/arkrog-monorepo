# endbook

本页记录 JSON 逻辑模块 `details/archive-comp` 中的 3 个强关联类型及其 Schema。

## ArchiveCompEndbook

`ArchiveCompEndbook` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `ArchiveCompEndbookSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/archive-comp/endbook.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/archive-comp/endbook.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `endbook` | `{ [key: string]: EndbookValue }` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## ClientEndbookItemData

`ClientEndbookItemData` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `ClientEndbookItemDataSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/archive-comp/endbook.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/archive-comp/endbook.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `endBookId` | `string` | 是 |
| `sortId` | `number` | 是 |
| `enrollId` | `EnrollId \| null` | 是 |
| `isLast` | `boolean` | 是 |
| `endbookName` | `string` | 是 |
| `unlockDesc` | `string` | 是 |
| `textId` | `string` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## EndbookValue

`EndbookValue` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `EndbookValueSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/archive-comp/endbook.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/archive-comp/endbook.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `endId` | `string` | 是 |
| `endingId` | `string` | 是 |
| `sortId` | `number` | 是 |
| `title` | `string` | 是 |
| `cgId` | `string` | 是 |
| `backBlurId` | `string` | 是 |
| `cardId` | `string` | 是 |
| `hasAvg` | `boolean` | 是 |
| `avgId` | `string` | 是 |
| `clientEndbookItemDatas` | `ClientEndbookItemData[]` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->
