# customize-data

本页记录 JSON 逻辑模块 `customize-data` 中的 1 个强关联类型及其 Schema。

## CustomizeDatum

`CustomizeDatum` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `CustomizeDatumSchema`。

- TypeScript：`src/types/roguelike-topic-table/customize-data/customize-data.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/customize-data/customize-data.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `developments` | `Developments` | 否 |
| `developmentTokens` | `{ [key: string]: DevelopmentToken }` | 否 |
| `endingText` | `EndingText` | 是 |
| `difficulties` | `CustomizeDatumDifficulty[]` | 是 |
| `developmentRawTextGroup` | `CustomizeDatumDevelopmentRawTextGroup[]` | 否 |
| `developmentLines` | `DevelopmentLine[]` | 否 |
| `developmentsTokens` | `{ [key: string]: DevelopmentToken }` | 否 |
| `developmentsDifficultyNodeInfos` | `CustomizeDatumDevelopmentsDifficultyNodeInfos` | 否 |
| `commonDevelopment` | `CommonDevelopment` | 否 |
| `specialShopDialog` | `SpecialShopDialog` | 否 |
| `scrapShopDialogData` | `ScrapShopDialogData` | 否 |
| `employShopDialogData` | `EmployShopDialogData` | 否 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->
