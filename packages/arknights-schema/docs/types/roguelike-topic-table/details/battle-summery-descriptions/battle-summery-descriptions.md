# battle-summery-descriptions

本页记录 JSON 逻辑模块 `details/battle-summery-descriptions` 中的 2 个强关联类型及其 Schema。

## BattleSummeryDescriptions

`BattleSummeryDescriptions` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `BattleSummeryDescriptionsSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/battle-summery-descriptions/battle-summery-descriptions.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/battle-summery-descriptions/battle-summery-descriptions.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `EASY` | `ChallengeClass` | 是 |
| `NORMAL` | `ChallengeClass` | 是 |
| `HARD` | `ChallengeClass` | 是 |
| `MONTH_TEAM` | `ChallengeClass` | 是 |
| `CHALLENGE` | `ChallengeClass` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## ChallengeClass

`ChallengeClass` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `ChallengeClassSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/battle-summery-descriptions/battle-summery-descriptions.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/battle-summery-descriptions/battle-summery-descriptions.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `randomDescriptionList` | `string[]` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->
