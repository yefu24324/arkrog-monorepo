# endings

本页记录 JSON 逻辑模块 `details/endings` 中的 2 个强关联类型及其 Schema。

## Ending

`Ending` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `EndingSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/endings/endings.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/endings/endings.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `id` | `string` | 是 |
| `familyId` | `number` | 是 |
| `name` | `string` | 是 |
| `desc` | `string` | 是 |
| `bgId` | `string` | 是 |
| `icons` | `IconElement[]` | 是 |
| `priority` | `number` | 是 |
| `changeEndingDesc` | `null \| string` | 是 |
| `bossIconId` | `null \| string` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## IconElement

`IconElement` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `IconElementSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/endings/endings.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/endings/endings.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `level` | `number` | 是 |
| `iconId` | `string` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->
