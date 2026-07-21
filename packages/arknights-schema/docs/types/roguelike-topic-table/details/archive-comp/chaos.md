# chaos

本页记录 JSON 逻辑模块 `details/archive-comp` 中的 2 个强关联类型及其 Schema。

## ArchiveCompChaos

`ArchiveCompChaos` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `ArchiveCompChaosSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/archive-comp/chaos.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/archive-comp/chaos.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `chaos` | `{ [key: string]: Chao }` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## Chao

`Chao` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `ChaoSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/archive-comp/chaos.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/archive-comp/chaos.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `id` | `string` | 是 |
| `isHidden` | `boolean` | 是 |
| `enrollId` | `null` | 是 |
| `sortId` | `number` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->
