# capsule

本页记录 JSON 逻辑模块 `details/archive-comp` 中的 2 个强关联类型及其 Schema。

## ArchiveCompCapsule

`ArchiveCompCapsule` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `ArchiveCompCapsuleSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/archive-comp/capsule.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/archive-comp/capsule.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `capsule` | `{ [key: string]: CapsuleValue }` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## CapsuleValue

`CapsuleValue` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `CapsuleValueSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/archive-comp/capsule.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/archive-comp/capsule.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `capsuleId` | `string` | 是 |
| `capsuleSortId` | `number` | 是 |
| `englishName` | `string` | 是 |
| `enrollId` | `EnrollId \| null` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->
