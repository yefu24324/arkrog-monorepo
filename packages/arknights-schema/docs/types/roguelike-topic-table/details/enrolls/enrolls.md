# enrolls

本页记录 JSON 逻辑模块 `details/enrolls` 中的 2 个强关联类型及其 Schema。

## DetailEnroll

`DetailEnroll` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `DetailEnrollSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/enrolls/enrolls.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/enrolls/enrolls.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `enrollId` | `string` | 是 |
| `enrollTime` | `number` | 是 |
| `enrollType` | `EnrollType` | 是 |
| `enrollNoticeEndTime` | `number` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## EnrollType

`EnrollType` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `EnrollTypeSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/enrolls/enrolls.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/enrolls/enrolls.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字面量范围

`"DLC" \| "REVIEW"`

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->
