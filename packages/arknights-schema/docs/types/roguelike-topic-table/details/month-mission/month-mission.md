# month-mission

本页记录 JSON 逻辑模块 `details/month-mission` 中的 2 个强关联类型及其 Schema。

## MonthMission

`MonthMission` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `MonthMissionSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/month-mission/month-mission.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/month-mission/month-mission.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `id` | `string` | 是 |
| `taskName` | `string` | 是 |
| `taskClass` | `TaskClass` | 是 |
| `innerClassWeight` | `number` | 是 |
| `template` | `string` | 是 |
| `paramList` | `string[]` | 是 |
| `desc` | `string` | 是 |
| `tokenRewardNum` | `number` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## TaskClass

`TaskClass` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `TaskClassSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/month-mission/month-mission.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/month-mission/month-mission.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字面量范围

`"C" \| "B" \| "A"`

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->
