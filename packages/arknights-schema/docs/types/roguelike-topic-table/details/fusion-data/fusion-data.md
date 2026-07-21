# fusion-data

本页记录 JSON 逻辑模块 `details/fusion-data` 中的 2 个强关联类型及其 Schema。

## FusionData

`FusionData` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `FusionDataSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/fusion-data/fusion-data.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/fusion-data/fusion-data.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `variation_14` | `Variation` | 否 |
| `variation_15` | `Variation` | 否 |
| `variation_16` | `Variation` | 否 |
| `variation_17` | `Variation` | 否 |
| `variation_18` | `Variation` | 否 |
| `variation_19` | `Variation` | 否 |
| `variation_20` | `Variation` | 否 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## Variation

`Variation` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `VariationSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/fusion-data/fusion-data.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/fusion-data/fusion-data.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `id` | `string` | 是 |
| `type` | `string` | 是 |
| `name` | `string` | 是 |
| `functionDesc` | `string` | 是 |
| `desc` | `string` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->
