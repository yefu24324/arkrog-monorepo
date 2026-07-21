# developments-difficulty-node-infos

本页记录 JSON 逻辑模块 `customize-data/developments-difficulty-node-infos` 中的 3 个强关联类型及其 Schema。

## CustomizeDatumDevelopmentsDifficultyNodeInfos

`CustomizeDatumDevelopmentsDifficultyNodeInfos` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `CustomizeDatumDevelopmentsDifficultyNodeInfosSchema`。

- TypeScript：`src/types/roguelike-topic-table/customize-data/developments-difficulty-node-infos/developments-difficulty-node-infos.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/customize-data/developments-difficulty-node-infos/developments-difficulty-node-infos.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `rogue_3_difficulty_1` | `Rogue3__Difficulty` | 是 |
| `rogue_3_difficulty_2` | `Rogue3__Difficulty` | 是 |
| `rogue_3_difficulty_3` | `Rogue3__Difficulty` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## Rogue3__Difficulty

`Rogue3__Difficulty` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `Rogue3__DifficultySchema`。

- TypeScript：`src/types/roguelike-topic-table/customize-data/developments-difficulty-node-infos/developments-difficulty-node-infos.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/customize-data/developments-difficulty-node-infos/developments-difficulty-node-infos.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `buffId` | `string` | 是 |
| `nodeMap` | `Rogue3_Difficulty1_NodeMap[]` | 是 |
| `enableGrade` | `number` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## Rogue3_Difficulty1_NodeMap

`Rogue3_Difficulty1_NodeMap` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `Rogue3_Difficulty1_NodeMapSchema`。

- TypeScript：`src/types/roguelike-topic-table/customize-data/developments-difficulty-node-infos/developments-difficulty-node-infos.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/customize-data/developments-difficulty-node-infos/developments-difficulty-node-infos.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `frontNode` | `string` | 是 |
| `nextNode` | `string` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->
