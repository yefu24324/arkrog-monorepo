# san-check

本页记录 JSON 逻辑模块 `modules/san-check` 中的 3 个强关联类型及其 Schema。

## SanCheck

`SanCheck` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `SanCheckSchema`。

- TypeScript：`src/types/roguelike-topic-table/modules/san-check/san-check.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/modules/san-check/san-check.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `sanRanges` | `SanRange[]` | 是 |
| `moduleConsts` | `SanCheckModuleConsts` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## SanCheckModuleConsts

`SanCheckModuleConsts` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `SanCheckModuleConstsSchema`。

- TypeScript：`src/types/roguelike-topic-table/modules/san-check/san-check.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/modules/san-check/san-check.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `sanDecreaseToast` | `string` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## SanRange

`SanRange` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `SanRangeSchema`。

- TypeScript：`src/types/roguelike-topic-table/modules/san-check/san-check.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/modules/san-check/san-check.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `sanMax` | `number` | 是 |
| `diceGroupId` | `string` | 是 |
| `description` | `string` | 是 |
| `sanDungeonEffect` | `string` | 是 |
| `sanEffectRank` | `string` | 是 |
| `sanEndingDesc` | `null` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->
