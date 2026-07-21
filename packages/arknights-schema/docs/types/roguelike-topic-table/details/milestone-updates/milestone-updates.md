# milestone-updates

本页记录 JSON 逻辑模块 `details/milestone-updates` 中的 1 个强关联类型及其 Schema。

## MilestoneUpdate

`MilestoneUpdate` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `MilestoneUpdateSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/milestone-updates/milestone-updates.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/milestone-updates/milestone-updates.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `updateTime` | `number` | 是 |
| `endTime` | `number` | 是 |
| `maxBpLevel` | `number` | 是 |
| `maxBpCount` | `number` | 是 |
| `maxDisplayBpCount` | `number` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->
