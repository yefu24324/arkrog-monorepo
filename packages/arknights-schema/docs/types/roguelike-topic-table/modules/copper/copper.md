# copper

本页记录 JSON 逻辑模块 `modules/copper` 中的 7 个强关联类型及其 Schema。

## CopperDatum

`CopperDatum` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `CopperDatumSchema`。

- TypeScript：`src/types/roguelike-topic-table/modules/copper/copper.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/modules/copper/copper.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `id` | `string` | 是 |
| `groupId` | `string` | 是 |
| `gildTypeId` | `Id \| null` | 是 |
| `luckyLevel` | `LuckyLevel` | 是 |
| `buffType` | `CopperDatumBuffType` | 是 |
| `layerCntDesc` | `LayerCntDesc` | 是 |
| `poemList` | `string[]` | 是 |
| `alwaysShowCountDown` | `boolean` | 是 |
| `buffItemIdList` | `string[]` | 是 |
| `isAllLuckyLevel` | `boolean` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## CopperDatumBuffType

`CopperDatumBuffType` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `CopperDatumBuffTypeSchema`。

- TypeScript：`src/types/roguelike-topic-table/modules/copper/copper.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/modules/copper/copper.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字面量范围

`"NONE" \| "REFRESH" \| "MOVE"`

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## CopperDivineDatum

`CopperDivineDatum` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `CopperDivineDatumSchema`。

- TypeScript：`src/types/roguelike-topic-table/modules/copper/copper.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/modules/copper/copper.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `eventId` | `string` | 是 |
| `groupId` | `string` | 是 |
| `showDesc` | `string` | 是 |
| `divineType` | `DivineType` | 是 |
| `resultType` | `ResultType` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## CopperModuleConsts

`CopperModuleConsts` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `CopperModuleConstsSchema`。

- TypeScript：`src/types/roguelike-topic-table/modules/copper/copper.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/modules/copper/copper.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `copperDrawMaxNum` | `number` | 是 |
| `copperDrawMinNum` | `number` | 是 |
| `copperAllLuckyLevelGildId` | `Id` | 是 |
| `copperDrawFreezeCostItemId` | `string` | 是 |
| `copperDrawFreezeCostCount` | `number[]` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## DivineType

`DivineType` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `DivineTypeSchema`。

- TypeScript：`src/types/roguelike-topic-table/modules/copper/copper.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/modules/copper/copper.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字面量范围

`"EVENT" \| "DIVINE"`

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## LayerCntDesc

`LayerCntDesc` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `LayerCntDescSchema`。

- TypeScript：`src/types/roguelike-topic-table/modules/copper/copper.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/modules/copper/copper.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字面量范围

`"<color=#2fac78>（已投出{0}次）</color>" \| "<color=#2fac78>（钱盒内持有{0}枚衡钱）</color>" \| "<color=#2fac78>（已经过{0}个节点）</color>" \| "<color=#2fac78>（失去时可获得{0}个收藏品）</color>" \| "<color=#2fac78>（已交换{0}次）</color>"`

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## ModuleCopper

`ModuleCopper` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `ModuleCopperSchema`。

- TypeScript：`src/types/roguelike-topic-table/modules/copper/copper.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/modules/copper/copper.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `copperData` | `{ [key: string]: CopperDatum }` | 是 |
| `copperDivineData` | `{ [key: string]: CopperDivineDatum }` | 是 |
| `copperGildTypeData` | `{ [key: string]: CopperGildTypeDatum }` | 是 |
| `changeCopperMap` | `{ [key: string]: string }` | 是 |
| `moduleConsts` | `CopperModuleConsts` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->
