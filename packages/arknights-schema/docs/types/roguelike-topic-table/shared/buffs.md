# buffs

本页记录 JSON 逻辑模块 `shared` 中的 7 个强关联类型及其 Schema。

## Blackboard

`Blackboard` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `BlackboardSchema`。

- TypeScript：`src/types/roguelike-topic-table/shared/buffs.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/shared/buffs.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `key` | `string` | 是 |
| `value` | `number` | 是 |
| `valueStr` | `null \| string` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## BuffDisplayInfo

`BuffDisplayInfo` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `BuffDisplayInfoSchema`。

- TypeScript：`src/types/roguelike-topic-table/shared/buffs.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/shared/buffs.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `displayType` | `string` | 是 |
| `displayNum` | `number` | 是 |
| `displayForm` | `DisplayForm` | 是 |
| `tokenDesc` | `string` | 是 |
| `sortId` | `number` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## BuffElement

`BuffElement` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `BuffElementSchema`。

- TypeScript：`src/types/roguelike-topic-table/shared/buffs.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/shared/buffs.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `key` | `string` | 是 |
| `blackboard` | `Blackboard[]` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## CopperGildTypeDatum

`CopperGildTypeDatum` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `CopperGildTypeDatumSchema`。

- TypeScript：`src/types/roguelike-topic-table/shared/buffs.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/shared/buffs.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `gildTypeId` | `Id` | 是 |
| `gildName` | `string` | 是 |
| `gildDesc` | `string` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## DevelopmentToken

`DevelopmentToken` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `DevelopmentTokenSchema`。

- TypeScript：`src/types/roguelike-topic-table/shared/buffs.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/shared/buffs.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `sortId` | `number` | 是 |
| `displayForm` | `DisplayForm` | 是 |
| `tokenDesc` | `string` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## ErDatum

`ErDatum` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `ErDatumSchema`。

- TypeScript：`src/types/roguelike-topic-table/shared/buffs.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/shared/buffs.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `id` | `string` | 是 |
| `iconId` | `string` | 是 |
| `toastIconId` | `string` | 否 |
| `level` | `number` | 是 |
| `name` | `string` | 是 |
| `levelName` | `LeftDisasterDesc` | 是 |
| `type` | `string` | 是 |
| `functionDesc` | `string` | 是 |
| `desc` | `string` | 是 |
| `sound` | `null` | 是 |
| `iconBigId` | `string` | 否 |
| `isPositive` | `boolean` | 否 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## Idea

`Idea` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `IdeaSchema`。

- TypeScript：`src/types/roguelike-topic-table/shared/buffs.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/shared/buffs.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `type` | `string` | 是 |
| `typeName` | `string` | 是 |
| `typeDesc` | `string` | 是 |
| `typeIconId` | `string` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->
