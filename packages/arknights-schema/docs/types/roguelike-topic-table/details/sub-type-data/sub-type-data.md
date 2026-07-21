# sub-type-data

本页记录 JSON 逻辑模块 `details/sub-type-data` 中的 1 个强关联类型及其 Schema。

## DetailSubTypeDatum

`DetailSubTypeDatum` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `DetailSubTypeDatumSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/sub-type-data/sub-type-data.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/sub-type-data/sub-type-data.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `eventType` | `string` | 是 |
| `subTypeId` | `number` | 是 |
| `iconId` | `null \| string` | 是 |
| `name` | `string` | 是 |
| `description` | `null \| string` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->
