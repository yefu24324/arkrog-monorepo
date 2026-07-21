# module-archives

本页记录 JSON 逻辑模块 `details/archive-comp` 中的 12 个强关联类型及其 Schema。

## ArchiveCompDisaster

`ArchiveCompDisaster` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `ArchiveCompDisasterSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/archive-comp/module-archives.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/archive-comp/module-archives.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `disasters` | `{ [key: string]: DisasterValue }` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## ArchiveCompFragment

`ArchiveCompFragment` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `ArchiveCompFragmentSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/archive-comp/module-archives.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/archive-comp/module-archives.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `fragment` | `{ [key: string]: FragmentValue }` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## ArchiveCompScrap

`ArchiveCompScrap` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `ArchiveCompScrapSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/archive-comp/module-archives.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/archive-comp/module-archives.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `scraps` | `{ [key: string]: ScrapValue }` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## ArchiveCompTotem

`ArchiveCompTotem` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `ArchiveCompTotemSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/archive-comp/module-archives.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/archive-comp/module-archives.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `totem` | `{ [key: string]: TotemValue }` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## ArchiveCompWeather

`ArchiveCompWeather` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `ArchiveCompWeatherSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/archive-comp/module-archives.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/archive-comp/module-archives.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `weathers` | `{ [key: string]: WeatherValue }` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## ArchiveCompWrath

`ArchiveCompWrath` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `ArchiveCompWrathSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/archive-comp/module-archives.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/archive-comp/module-archives.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `wraths` | `{ [key: string]: WrathValue }` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## DisasterValue

`DisasterValue` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `DisasterValueSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/archive-comp/module-archives.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/archive-comp/module-archives.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `disasterId` | `string` | 是 |
| `sortId` | `number` | 是 |
| `enrollConditionId` | `null` | 是 |
| `picSmallId` | `string` | 是 |
| `picBigActiveId` | `string` | 是 |
| `picBigInactiveId` | `string` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## FragmentValue

`FragmentValue` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `FragmentValueSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/archive-comp/module-archives.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/archive-comp/module-archives.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `fragmentId` | `string` | 是 |
| `sortId` | `number` | 是 |
| `enrollConditionId` | `EnrollId \| null` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## ScrapValue

`ScrapValue` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `ScrapValueSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/archive-comp/module-archives.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/archive-comp/module-archives.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `scrapId` | `string` | 是 |
| `sortId` | `number` | 是 |
| `enrollConditionId` | `null` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## TotemValue

`TotemValue` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `TotemValueSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/archive-comp/module-archives.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/archive-comp/module-archives.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `id` | `string` | 是 |
| `type` | `Pos` | 是 |
| `enrollConditionId` | `EnrollId \| null` | 是 |
| `sortId` | `number` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## WeatherValue

`WeatherValue` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `WeatherValueSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/archive-comp/module-archives.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/archive-comp/module-archives.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `weatherId` | `string` | 是 |
| `sortId` | `number` | 是 |
| `enrollConditionId` | `null` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## WrathValue

`WrathValue` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `WrathValueSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/archive-comp/module-archives.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/archive-comp/module-archives.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `wrathId` | `string` | 是 |
| `sortId` | `number` | 是 |
| `picTitleId` | `string` | 是 |
| `picSmallInactiveId` | `null \| string` | 是 |
| `picSmallActiveId` | `string` | 是 |
| `picBigActiveId` | `string` | 是 |
| `picBigInactiveId` | `null \| string` | 是 |
| `enrollId` | `null` | 是 |
| `isSp` | `boolean` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->
