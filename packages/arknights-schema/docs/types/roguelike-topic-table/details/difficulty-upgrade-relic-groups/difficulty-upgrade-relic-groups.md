# difficulty-upgrade-relic-groups

本页记录 JSON 逻辑模块 `details/difficulty-upgrade-relic-groups` 中的 2 个强关联类型及其 Schema。

## DifficultyUpgradeRelicGroup

`DifficultyUpgradeRelicGroup` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `DifficultyUpgradeRelicGroupSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/difficulty-upgrade-relic-groups/difficulty-upgrade-relic-groups.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/difficulty-upgrade-relic-groups/difficulty-upgrade-relic-groups.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `relicData` | `RelicDatum[]` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## RelicDatum

`RelicDatum` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `RelicDatumSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/difficulty-upgrade-relic-groups/difficulty-upgrade-relic-groups.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/difficulty-upgrade-relic-groups/difficulty-upgrade-relic-groups.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `relicId` | `string` | 是 |
| `equivalentGrade` | `number` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->
