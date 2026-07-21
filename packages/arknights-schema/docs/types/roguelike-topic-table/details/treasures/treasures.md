# treasures

本页记录 JSON 逻辑模块 `details/treasures` 中的 2 个强关联类型及其 Schema。

## Rogue2_Treasure

`Rogue2_Treasure` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `Rogue2_TreasureSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/treasures/treasures.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/treasures/treasures.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `treasureId` | `string` | 是 |
| `groupId` | `string` | 是 |
| `subIndex` | `number` | 是 |
| `name` | `string` | 是 |
| `usage` | `string` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## Treasures

`Treasures` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `TreasuresSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/treasures/treasures.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/treasures/treasures.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `rogue_2_treasure` | `Rogue2_Treasure[]` | 否 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->
