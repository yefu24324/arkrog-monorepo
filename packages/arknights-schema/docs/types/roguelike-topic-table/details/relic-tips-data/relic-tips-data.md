# relic-tips-data

本页记录 JSON 逻辑模块 `details/relic-tips-data` 中的 2 个强关联类型及其 Schema。

## RelicTipsData

`RelicTipsData` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `RelicTipsDataSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/relic-tips-data/relic-tips-data.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/relic-tips-data/relic-tips-data.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `rogue_5_relic_explore_5` | `Rogue5__` | 否 |
| `rogue_5_relic_explore_10` | `Rogue5__` | 否 |
| `rogue_5_feature_band_28_1` | `Rogue5__` | 否 |
| `rogue_5_feature_band_28_2` | `Rogue5__` | 否 |
| `rogue_5_feature_band_28_3` | `Rogue5__` | 否 |
| `rogue_5_feature_band_28_4` | `Rogue5__` | 否 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## Rogue5__

`Rogue5__` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `Rogue5__Schema`。

- TypeScript：`src/types/roguelike-topic-table/details/relic-tips-data/relic-tips-data.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/relic-tips-data/relic-tips-data.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `itemId` | `string` | 是 |
| `toastText` | `string` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->
