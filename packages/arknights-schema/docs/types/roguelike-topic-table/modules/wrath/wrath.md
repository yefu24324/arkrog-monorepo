# wrath

本页记录 JSON 逻辑模块 `modules/wrath` 中的 3 个强关联类型及其 Schema。

## ModuleWrath

`ModuleWrath` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `ModuleWrathSchema`。

- TypeScript：`src/types/roguelike-topic-table/modules/wrath/wrath.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/modules/wrath/wrath.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `wrathData` | `{ [key: string]: WrathDatum }` | 是 |
| `moduleConsts` | `WrathModuleConsts` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## WrathDatum

`WrathDatum` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `WrathDatumSchema`。

- TypeScript：`src/types/roguelike-topic-table/modules/wrath/wrath.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/modules/wrath/wrath.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `id` | `string` | 是 |
| `group` | `string` | 是 |
| `level` | `number` | 是 |
| `name` | `string` | 是 |
| `levelName` | `LeftWrathDesc` | 是 |
| `functionDesc` | `string` | 是 |
| `desc` | `string` | 是 |
| `isPacified` | `boolean` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## WrathModuleConsts

`WrathModuleConsts` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `WrathModuleConstsSchema`。

- TypeScript：`src/types/roguelike-topic-table/modules/wrath/wrath.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/modules/wrath/wrath.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `getWrathTransition` | `string` | 是 |
| `getWrathToast` | `string` | 是 |
| `hiddenWrathType` | `string` | 是 |
| `pacifiedWrathLevel` | `number` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->
