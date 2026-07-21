# task-data

本页记录 JSON 逻辑模块 `details/task-data` 中的 2 个强关联类型及其 Schema。

## RewardSceneId

`RewardSceneId` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `RewardSceneIdSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/task-data/task-data.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/task-data/task-data.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字面量范围

`"scene_ro2_taskreward3_enter" \| "scene_ro2_taskreward2_enter" \| "scene_ro2_taskreward1_enter"`

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## TaskDatum

`TaskDatum` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `TaskDatumSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/task-data/task-data.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/task-data/task-data.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `taskId` | `string` | 是 |
| `taskName` | `string` | 是 |
| `taskDesc` | `string` | 是 |
| `rewardSceneId` | `RewardSceneId` | 是 |
| `taskRarity` | `Rarity` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->
