# archive-unlock-cond

本页记录 JSON 逻辑模块 `details/archive-unlock-cond` 中的 5 个强关联类型及其 Schema。

## ArchiveUnlockCond

`ArchiveUnlockCond` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `ArchiveUnlockCondSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/archive-unlock-cond/archive-unlock-cond.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/archive-unlock-cond/archive-unlock-cond.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `unlockCondDesc` | `{ [key: string]: UnlockCondDesc }` | 是 |
| `enroll` | `{ [key: string]: ArchiveUnlockCondEnroll }` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## ArchiveUnlockCondEnroll

`ArchiveUnlockCondEnroll` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `ArchiveUnlockCondEnrollSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/archive-unlock-cond/archive-unlock-cond.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/archive-unlock-cond/archive-unlock-cond.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `archiveType` | `EnrollArchiveType` | 是 |
| `enrollId` | `EnrollId \| null` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## EnrollArchiveType

`EnrollArchiveType` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `EnrollArchiveTypeSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/archive-unlock-cond/archive-unlock-cond.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/archive-unlock-cond/archive-unlock-cond.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字面量范围

`"AVG" \| "ENDBOOK" \| "MUSIC" \| "PIC"`

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## UnlockCondDesc

`UnlockCondDesc` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `UnlockCondDescSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/archive-unlock-cond/archive-unlock-cond.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/archive-unlock-cond/archive-unlock-cond.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `archiveType` | `EnrollArchiveType` | 是 |
| `description` | `UnlockCondDescDescription \| null` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## UnlockCondDescDescription

`UnlockCondDescDescription` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `UnlockCondDescDescriptionSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/archive-unlock-cond/archive-unlock-cond.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/archive-unlock-cond/archive-unlock-cond.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字面量范围

`"需要触发某个故事" \| "继续探索以解锁"`

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->
