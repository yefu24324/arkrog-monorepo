# milestones

本页记录 JSON 逻辑模块 `details/milestones` 中的 1 个强关联类型及其 Schema。

## Milestone

`Milestone` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `MilestoneSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/milestones/milestones.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/milestones/milestones.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `id` | `string` | 是 |
| `level` | `number` | 是 |
| `tokenNum` | `number` | 是 |
| `nextTokenNum` | `number` | 是 |
| `itemID` | `string` | 是 |
| `itemType` | `ItemTypeEnum` | 是 |
| `itemCount` | `number` | 是 |
| `isGoodPrize` | `boolean` | 是 |
| `isGrandPrize` | `boolean` | 是 |
| `isReturnDisplay` | `boolean` | 是 |
| `returnSortId` | `number` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->
