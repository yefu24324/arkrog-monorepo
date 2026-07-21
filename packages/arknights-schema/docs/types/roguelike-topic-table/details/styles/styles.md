# styles

本页记录 JSON 逻辑模块 `details/styles` 中的 2 个强关联类型及其 Schema。

## Rogue3_StyleChallengeClass

`Rogue3_StyleChallengeClass` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `Rogue3_StyleChallengeClassSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/styles/styles.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/styles/styles.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `styleId` | `StyleId` | 是 |
| `styleConfig` | `number` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## Styles

`Styles` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `StylesSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/styles/styles.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/styles/styles.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `rogue_3_style_default` | `Rogue3_StyleChallengeClass` | 否 |
| `rogue_3_style_challenge` | `Rogue3_StyleChallengeClass` | 否 |
| `rogue_4_style_default` | `Rogue3_StyleChallengeClass` | 否 |
| `rogue_4_style_challenge` | `Rogue3_StyleChallengeClass` | 否 |
| `rogue_5_style_default` | `Rogue3_StyleChallengeClass` | 否 |
| `rogue_5_style_challenge` | `Rogue3_StyleChallengeClass` | 否 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->
