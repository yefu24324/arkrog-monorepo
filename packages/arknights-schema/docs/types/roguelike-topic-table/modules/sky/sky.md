# sky

本页记录 JSON 逻辑模块 `modules/sky` 中的 5 个强关联类型及其 Schema。

## EffId

`EffId` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `EffIdSchema`。

- TypeScript：`src/types/roguelike-topic-table/modules/sky/sky.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/modules/sky/sky.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字面量范围

`"sp_green" \| "sp_cyan"`

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## NodeDatum

`NodeDatum` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `NodeDatumSchema`。

- TypeScript：`src/types/roguelike-topic-table/modules/sky/sky.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/modules/sky/sky.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `evtType` | `string` | 是 |
| `name` | `string` | 是 |
| `iconId` | `string` | 是 |
| `effId` | `EffId` | 是 |
| `desc` | `string` | 是 |
| `nameBkgClr` | `string` | 是 |
| `selectClr` | `string` | 是 |
| `isRepeatedly` | `boolean` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## Sky

`Sky` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `SkySchema`。

- TypeScript：`src/types/roguelike-topic-table/modules/sky/sky.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/modules/sky/sky.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `nodeData` | `{ [key: string]: NodeDatum }` | 是 |
| `subTypeData` | `SkySubTypeDatum[]` | 是 |
| `moduleConsts` | `SkyModuleConsts` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## SkyModuleConsts

`SkyModuleConsts` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `SkyModuleConstsSchema`。

- TypeScript：`src/types/roguelike-topic-table/modules/sky/sky.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/modules/sky/sky.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `skyApItemId` | `string` | 是 |
| `skyMaxColumns` | `number` | 是 |
| `skySacrificeChoiceDynamicKey` | `string` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## SkySubTypeDatum

`SkySubTypeDatum` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `SkySubTypeDatumSchema`。

- TypeScript：`src/types/roguelike-topic-table/modules/sky/sky.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/modules/sky/sky.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `evtType` | `string` | 是 |
| `subTypeId` | `number` | 是 |
| `desc` | `string` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->
