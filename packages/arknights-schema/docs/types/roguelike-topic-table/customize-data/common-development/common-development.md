# common-development

本页记录 JSON 逻辑模块 `customize-data/common-development` 中的 6 个强关联类型及其 Schema。

## CommonDevelopment

`CommonDevelopment` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `CommonDevelopmentSchema`。

- TypeScript：`src/types/roguelike-topic-table/customize-data/common-development/common-development.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/customize-data/common-development/common-development.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `developments` | `{ [key: string]: Rogue3__Difficulty1 }` | 是 |
| `developmentsTokens` | `{ [key: string]: DevelopmentToken }` | 是 |
| `developmentRawTextGroup` | `CommonDevelopmentDevelopmentRawTextGroup[]` | 是 |
| `developmentsDifficultyNodeInfos` | `CommonDevelopmentDevelopmentsDifficultyNodeInfos` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## CommonDevelopmentDevelopmentRawTextGroup

`CommonDevelopmentDevelopmentRawTextGroup` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `CommonDevelopmentDevelopmentRawTextGroupSchema`。

- TypeScript：`src/types/roguelike-topic-table/customize-data/common-development/common-development.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/customize-data/common-development/common-development.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `nodeIdList` | `string[]` | 是 |
| `groupIconId` | `GroupIconId` | 是 |
| `sortId` | `number` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## CommonDevelopmentDevelopmentsDifficultyNodeInfos

`CommonDevelopmentDevelopmentsDifficultyNodeInfos` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `CommonDevelopmentDevelopmentsDifficultyNodeInfosSchema`。

- TypeScript：`src/types/roguelike-topic-table/customize-data/common-development/common-development.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/customize-data/common-development/common-development.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `rogue_4_difficulty_1` | `Rogue4_Difficulty1_Class` | 否 |
| `rogue_4_difficulty_2` | `Rogue4_Difficulty1_Class` | 否 |
| `rogue_4_difficulty_3` | `Rogue4_Difficulty1_Class` | 否 |
| `rogue_5_difficulty_1` | `Rogue4_Difficulty1_Class` | 否 |
| `rogue_5_difficulty_2` | `Rogue4_Difficulty1_Class` | 否 |
| `rogue_5_difficulty_3` | `Rogue4_Difficulty1_Class` | 否 |
| `rogue_6_difficulty_1` | `Rogue4_Difficulty1_Class` | 否 |
| `rogue_6_difficulty_2` | `Rogue4_Difficulty1_Class` | 否 |
| `rogue_6_difficulty_3` | `Rogue4_Difficulty1_Class` | 否 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## GroupIconId

`GroupIconId` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `GroupIconIdSchema`。

- TypeScript：`src/types/roguelike-topic-table/customize-data/common-development/common-development.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/customize-data/common-development/common-development.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字面量范围

`"img_summary_node_lock" \| "img_summary_node_teamenhance" \| "img_summary_node_fragment" \| "img_summary_node_teamupgrade"`

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## Rogue4_Difficulty1_Class

`Rogue4_Difficulty1_Class` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `Rogue4_Difficulty1_ClassSchema`。

- TypeScript：`src/types/roguelike-topic-table/customize-data/common-development/common-development.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/customize-data/common-development/common-development.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `buffId` | `string` | 是 |
| `nodeMap` | `Rogue4_Difficulty1_NodeMap[]` | 是 |
| `enableGrade` | `number` | 是 |
| `enableDesc` | `string` | 是 |
| `lightId` | `string` | 是 |
| `decoId` | `null` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## Rogue4_Difficulty1_NodeMap

`Rogue4_Difficulty1_NodeMap` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `Rogue4_Difficulty1_NodeMapSchema`。

- TypeScript：`src/types/roguelike-topic-table/customize-data/common-development/common-development.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/customize-data/common-development/common-development.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `frontNodes` | `string[]` | 是 |
| `nextNode` | `string` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->
