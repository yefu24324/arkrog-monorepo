# weather

本页记录 JSON 逻辑模块 `modules/weather` 中的 2 个强关联类型及其 Schema。

## ModuleWeather

`ModuleWeather` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `ModuleWeatherSchema`。

- TypeScript：`src/types/roguelike-topic-table/modules/weather/weather.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/modules/weather/weather.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `mainWeatherData` | `{ [key: string]: ErDatum }` | 是 |
| `subWeatherData` | `SubWeatherData` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## SubWeatherData

`SubWeatherData` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `SubWeatherDataSchema`。

- TypeScript：`src/types/roguelike-topic-table/modules/weather/weather.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/modules/weather/weather.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `rogue_6_subweather_1` | `Rogue2__Mutation4` | 是 |
| `rogue_6_subweather_2` | `Rogue2__Mutation4` | 是 |
| `rogue_6_subweather_3` | `Rogue2__Mutation4` | 是 |
| `rogue_6_subweather_4` | `Rogue2__Mutation4` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->
