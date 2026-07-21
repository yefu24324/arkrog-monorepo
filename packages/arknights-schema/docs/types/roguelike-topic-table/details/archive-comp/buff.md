# buff

本页记录 JSON 逻辑模块 `details/archive-comp` 中的 3 个强关联类型及其 Schema。

## ArchiveCompBuff

`ArchiveCompBuff` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `ArchiveCompBuffSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/archive-comp/buff.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/archive-comp/buff.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `buff` | `{ [key: string]: BuffValue }` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## BuffColor

`BuffColor` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `BuffColorSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/archive-comp/buff.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/archive-comp/buff.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字面量范围

`"#9266b2" \| "#b43b3b" \| "#0098dc"`

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## BuffValue

`BuffValue` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `BuffValueSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/archive-comp/buff.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/archive-comp/buff.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `buffId` | `string` | 是 |
| `buffGroupIndex` | `number` | 是 |
| `innerSortId` | `number` | 是 |
| `name` | `string` | 是 |
| `iconId` | `string` | 是 |
| `usage` | `string` | 是 |
| `desc` | `string` | 是 |
| `color` | `BuffColor` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->
