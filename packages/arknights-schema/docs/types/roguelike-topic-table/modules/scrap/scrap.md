# scrap

本页记录 JSON 逻辑模块 `modules/scrap` 中的 11 个强关联类型及其 Schema。

## GoodsScrapDatum

`GoodsScrapDatum` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `GoodsScrapDatumSchema`。

- TypeScript：`src/types/roguelike-topic-table/modules/scrap/scrap.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/modules/scrap/scrap.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `scrapId` | `string` | 是 |
| `scrapDesc` | `string` | 是 |
| `sellPrice` | `number` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## Grid

`Grid` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `GridSchema`。

- TypeScript：`src/types/roguelike-topic-table/modules/scrap/scrap.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/modules/scrap/scrap.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `row` | `number` | 是 |
| `col` | `number` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## ModuleScrap

`ModuleScrap` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `ModuleScrapSchema`。

- TypeScript：`src/types/roguelike-topic-table/modules/scrap/scrap.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/modules/scrap/scrap.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `scrapItemToType` | `ScrapItemToType` | 是 |
| `scrapTypeData` | `ScrapTypeData` | 是 |
| `moveScrapData` | `{ [key: string]: MoveScrapDatum }` | 是 |
| `goodsScrapData` | `{ [key: string]: GoodsScrapDatum }` | 是 |
| `passiveScrapData` | `{ [key: string]: PassiveScrapDatum }` | 是 |
| `moveScrapRangeData` | `MoveScrapRangeData` | 是 |
| `moduleConsts` | `ScrapModuleConsts` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## MoveScrapDatum

`MoveScrapDatum` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `MoveScrapDatumSchema`。

- TypeScript：`src/types/roguelike-topic-table/modules/scrap/scrap.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/modules/scrap/scrap.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `count` | `number` | 是 |
| `range` | `null \| string` | 是 |
| `rangeType` | `RangeType` | 是 |
| `node` | `string[]` | 是 |
| `step` | `number` | 是 |
| `isRandomMove` | `boolean` | 是 |
| `scrapId` | `string` | 是 |
| `scrapDesc` | `string` | 是 |
| `sellPrice` | `number` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## MoveScrapRangeData

`MoveScrapRangeData` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `MoveScrapRangeDataSchema`。

- TypeScript：`src/types/roguelike-topic-table/modules/scrap/scrap.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/modules/scrap/scrap.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `r-1` | `R1` | 是 |
| `r-2` | `R1` | 是 |
| `r-3` | `R1` | 是 |
| `r-4` | `R1` | 是 |
| `r-5` | `R1` | 是 |
| `r-6` | `R1` | 是 |
| `r-7` | `R1` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## PassiveScrapDatum

`PassiveScrapDatum` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `PassiveScrapDatumSchema`。

- TypeScript：`src/types/roguelike-topic-table/modules/scrap/scrap.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/modules/scrap/scrap.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `node` | `string` | 是 |
| `buffStack` | `number` | 是 |
| `scrapId` | `string` | 是 |
| `scrapDesc` | `string` | 是 |
| `sellPrice` | `number` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## R1

`R1` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `R1Schema`。

- TypeScript：`src/types/roguelike-topic-table/modules/scrap/scrap.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/modules/scrap/scrap.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `id` | `string` | 是 |
| `direction` | `string` | 是 |
| `grids` | `Grid[]` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## RangeType

`RangeType` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `RangeTypeSchema`。

- TypeScript：`src/types/roguelike-topic-table/modules/scrap/scrap.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/modules/scrap/scrap.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字面量范围

`"RANGE" \| "FULL_MAP"`

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## ScrapItemToType

`ScrapItemToType` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `ScrapItemToTypeSchema`。

- TypeScript：`src/types/roguelike-topic-table/modules/scrap/scrap.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/modules/scrap/scrap.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `rogue_6_scrap_M_01` | `Rogue6_ScrapM01_Enum` | 是 |
| `rogue_6_scrap_M_02` | `Rogue6_ScrapM01_Enum` | 是 |
| `rogue_6_scrap_M_03` | `Rogue6_ScrapM01_Enum` | 是 |
| `rogue_6_scrap_M_04` | `Rogue6_ScrapM01_Enum` | 是 |
| `rogue_6_scrap_M_05` | `Rogue6_ScrapM01_Enum` | 是 |
| `rogue_6_scrap_M_06` | `Rogue6_ScrapM01_Enum` | 是 |
| `rogue_6_scrap_M_07` | `Rogue6_ScrapM01_Enum` | 是 |
| `rogue_6_scrap_M_08` | `Rogue6_ScrapM01_Enum` | 是 |
| `rogue_6_scrap_M_09` | `Rogue6_ScrapM01_Enum` | 是 |
| `rogue_6_scrap_M_10` | `Rogue6_ScrapM01_Enum` | 是 |
| `rogue_6_scrap_M_11` | `Rogue6_ScrapM01_Enum` | 是 |
| `rogue_6_scrap_M_12` | `Rogue6_ScrapM01_Enum` | 是 |
| `rogue_6_scrap_G_01` | `string` | 是 |
| `rogue_6_scrap_G_02` | `string` | 是 |
| `rogue_6_scrap_G_03` | `string` | 是 |
| `rogue_6_scrap_G_04` | `string` | 是 |
| `rogue_6_scrap_G_05` | `string` | 是 |
| `rogue_6_scrap_G_06` | `string` | 是 |
| `rogue_6_scrap_G_07` | `string` | 是 |
| `rogue_6_scrap_G_08` | `string` | 是 |
| `rogue_6_scrap_G_09` | `string` | 是 |
| `rogue_6_scrap_G_10` | `string` | 是 |
| `rogue_6_scrap_G_11` | `string` | 是 |
| `rogue_6_scrap_G_12` | `string` | 是 |
| `rogue_6_scrap_P_01` | `string` | 是 |
| `rogue_6_scrap_P_02` | `string` | 是 |
| `rogue_6_scrap_P_03` | `string` | 是 |
| `rogue_6_scrap_P_04` | `string` | 是 |
| `rogue_6_scrap_P_05` | `string` | 是 |
| `rogue_6_scrap_P_06` | `string` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## ScrapModuleConsts

`ScrapModuleConsts` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `ScrapModuleConstsSchema`。

- TypeScript：`src/types/roguelike-topic-table/modules/scrap/scrap.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/modules/scrap/scrap.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `identifyScrapId` | `string` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## ScrapTypeData

`ScrapTypeData` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `ScrapTypeDataSchema`。

- TypeScript：`src/types/roguelike-topic-table/modules/scrap/scrap.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/modules/scrap/scrap.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `GOODS` | `Idea` | 是 |
| `MOVE` | `Idea` | 是 |
| `PASSIVE` | `Idea` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->
