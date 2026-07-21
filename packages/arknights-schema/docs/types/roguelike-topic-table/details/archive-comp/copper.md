# copper

本页记录 JSON 逻辑模块 `details/archive-comp` 中的 8 个强关联类型及其 Schema。

## ArchiveCompCopper

`ArchiveCompCopper` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `ArchiveCompCopperSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/archive-comp/copper.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/archive-comp/copper.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `coppers` | `{ [key: string]: CopperValue }` | 是 |
| `copperTypes` | `CopperTypes` | 是 |
| `gilds` | `{ [key: string]: CopperGildTypeDatum }` | 是 |
| `luckyLevels` | `LuckyLevels` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## Blank

`Blank` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `BlankSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/archive-comp/copper.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/archive-comp/copper.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `copperType` | `CopperType` | 是 |
| `typeName` | `string` | 是 |
| `typeIconId` | `string` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## CopperArchiveType

`CopperArchiveType` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `CopperArchiveTypeSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/archive-comp/copper.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/archive-comp/copper.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字面量范围

`"LUCK" \| "COPPER" \| "GILD"`

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## CopperType

`CopperType` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `CopperTypeSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/archive-comp/copper.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/archive-comp/copper.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字面量范围

`"NONE" \| "BLANK" \| "RESOURCE" \| "FIGHT" \| "TREASURE" \| "UNSOUND"`

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## CopperTypes

`CopperTypes` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `CopperTypesSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/archive-comp/copper.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/archive-comp/copper.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `BLANK` | `Blank` | 是 |
| `FIGHT` | `Blank` | 是 |
| `RESOURCE` | `Blank` | 是 |
| `UNSOUND` | `Blank` | 是 |
| `TREASURE` | `Blank` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## CopperValue

`CopperValue` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `CopperValueSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/archive-comp/copper.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/archive-comp/copper.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `id` | `string` | 是 |
| `displayCopperId` | `null \| string` | 是 |
| `archiveType` | `CopperArchiveType` | 是 |
| `copperType` | `CopperType` | 是 |
| `sortId` | `number` | 是 |
| `enrollId` | `EnrollId \| null` | 是 |
| `coppersInGroup` | `string[]` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## High

`High` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `HighSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/archive-comp/copper.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/archive-comp/copper.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `luckyLevel` | `LuckyLevel` | 是 |
| `luckyName` | `string` | 是 |
| `luckyDesc` | `string` | 是 |
| `luckyUsage` | `string` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## LuckyLevels

`LuckyLevels` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `LuckyLevelsSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/archive-comp/copper.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/archive-comp/copper.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `MID` | `High` | 是 |
| `HIGH` | `High` | 是 |
| `LOW` | `High` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->
