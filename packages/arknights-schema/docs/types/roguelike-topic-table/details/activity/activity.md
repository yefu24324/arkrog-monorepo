# activity

本页记录 JSON 逻辑模块 `details/activity` 中的 8 个强关联类型及其 Schema。

## Activity

`Activity` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `ActivitySchema`。

- TypeScript：`src/types/roguelike-topic-table/details/activity/activity.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/activity/activity.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `basicDatas` | `BasicDatas` | 是 |
| `activityTable` | `ActivityTable` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## ActivityTable

`ActivityTable` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `ActivityTableSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/activity/activity.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/activity/activity.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `SEED_MODE` | `SeedMode` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## BasicDatas

`BasicDatas` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `BasicDatasSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/activity/activity.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/activity/activity.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `rogue_4_seedmode_1` | `BasicDatasRogue4_Seedmode1` | 否 |
| `rogue_5_seedmode_1` | `BasicDatasRogue4_Seedmode1` | 否 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## BasicDatasRogue4_Seedmode1

`BasicDatasRogue4_Seedmode1` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `BasicDatasRogue4_Seedmode1Schema`。

- TypeScript：`src/types/roguelike-topic-table/details/activity/activity.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/activity/activity.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `id` | `string` | 是 |
| `type` | `string` | 是 |
| `startTime` | `number` | 是 |
| `endTime` | `number` | 是 |
| `isPresentSeedMode` | `boolean` | 是 |
| `isUnlockBadge` | `boolean` | 是 |
| `validMode` | `ValidModeEnum` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## ConstData

`ConstData` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `ConstDataSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/activity/activity.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/activity/activity.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `seedModeIntro` | `string` | 是 |
| `emptyTextHint` | `string` | 是 |
| `errorTextHint` | `string` | 是 |
| `legitimateTextHint` | `string` | 是 |
| `seedModeConfirmReplacement` | `string` | 是 |
| `difficultyLevelTextHint` | `string` | 是 |
| `lockedDifficultyLevelTextHint` | `string` | 是 |
| `setDifficultyLevelTextHint` | `string` | 是 |
| `notEnabledTextHint` | `string` | 是 |
| `enabledTextHint` | `string` | 是 |
| `useSucceededTextHint` | `string` | 是 |
| `officialUseSucceededTextHint` | `string` | 是 |
| `seedModeLockedTextHint` | `string` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## OfficialSeedDataList

`OfficialSeedDataList` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `OfficialSeedDataListSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/activity/activity.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/activity/activity.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `seed` | `string` | 是 |
| `sortId` | `number` | 是 |
| `desc` | `string` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## SeedMode

`SeedMode` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `SeedModeSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/activity/activity.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/activity/activity.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `rogue_4_seedmode_1` | `SeedModeRogue4_Seedmode1` | 否 |
| `rogue_5_seedmode_1` | `SeedModeRogue4_Seedmode1` | 否 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## SeedModeRogue4_Seedmode1

`SeedModeRogue4_Seedmode1` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `SeedModeRogue4_Seedmode1Schema`。

- TypeScript：`src/types/roguelike-topic-table/details/activity/activity.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/activity/activity.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `officialSeedDataList` | `OfficialSeedDataList[]` | 是 |
| `constData` | `ConstData` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->
