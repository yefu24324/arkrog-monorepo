# legacy-items

本页记录 JSON 逻辑模块 `details/legacy-items` 中的 1 个强关联类型及其 Schema。

## LegacyItem

`LegacyItem` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `LegacyItemSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/legacy-items/legacy-items.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/legacy-items/legacy-items.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `legacyId` | `string` | 是 |
| `hideLegacyItem` | `boolean` | 是 |
| `legacyGroupId` | `null \| string` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->
