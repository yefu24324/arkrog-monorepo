# difficulties

本页记录 JSON 逻辑模块 `customize-data/difficulties` 中的 6 个强关联类型及其 Schema。

## CustomizeDatumDifficulty

`CustomizeDatumDifficulty` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `CustomizeDatumDifficultySchema`。

- TypeScript：`src/types/roguelike-topic-table/customize-data/difficulties/difficulties.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/customize-data/difficulties/difficulties.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `modeDifficulty` | `Mode` | 是 |
| `grade` | `number` | 是 |
| `buffDesc` | `string[]` | 是 |
| `totemProb` | `number` | 否 |
| `relicDevLevel` | `null \| string` | 否 |
| `buffs` | `string[] \| null` | 否 |
| `leftDisasterDesc` | `LeftDisasterDesc` | 否 |
| `leftOverweightDesc` | `LeftOverweightDesc` | 否 |
| `weightStatusLimitDesc` | `WeightStatusLimitDesc` | 否 |
| `leftWrathDesc` | `LeftWrathDesc` | 否 |
| `gildProbDisplay` | `GildProbDisplay` | 否 |
| `skyStepDescription` | `SkyStepDescription` | 否 |
| `leftWeatherDesc` | `LeftWeatherDesc` | 否 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## GildProbDisplay

`GildProbDisplay` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `GildProbDisplaySchema`。

- TypeScript：`src/types/roguelike-topic-table/customize-data/difficulties/difficulties.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/customize-data/difficulties/difficulties.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字面量范围

`"低" \| "标准" \| "中" \| "高"`

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## LeftOverweightDesc

`LeftOverweightDesc` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `LeftOverweightDescSchema`。

- TypeScript：`src/types/roguelike-topic-table/customize-data/difficulties/difficulties.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/customize-data/difficulties/difficulties.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字面量范围

`"轻松" \| "标准" \| "沉重" \| "崩溃"`

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## LeftWeatherDesc

`LeftWeatherDesc` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `LeftWeatherDescSchema`。

- TypeScript：`src/types/roguelike-topic-table/customize-data/difficulties/difficulties.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/customize-data/difficulties/difficulties.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字面量范围

`"无" \| "早期" \| "中期" \| "晚期"`

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## SkyStepDescription

`SkyStepDescription` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `SkyStepDescriptionSchema`。

- TypeScript：`src/types/roguelike-topic-table/customize-data/difficulties/difficulties.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/customize-data/difficulties/difficulties.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字面量范围

`"每进入一次节点，将有1点烛火熄灭，烛火全部熄灭时，意识将被逐回界园"`

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## WeightStatusLimitDesc

`WeightStatusLimitDesc` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `WeightStatusLimitDescSchema`。

- TypeScript：`src/types/roguelike-topic-table/customize-data/difficulties/difficulties.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/customize-data/difficulties/difficulties.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字面量范围

`"每前进一步，失去1点目标生命（不会使目标生命低于1）" \| "每前进一步，失去1点目标生命（不会使目标生命低于1），进入战斗时，所有单位部署费用+2" \| "每前进一步，失去1点目标生命（不会使目标生命低于1），进入战斗时，所有单位部署费用+3" \| "每前进一步，失去1点目标生命（不会使目标生命低于1），进入战斗时，所有单位部署费用+3，攻击力-20%，技力自然回复速度-20%"`

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->
