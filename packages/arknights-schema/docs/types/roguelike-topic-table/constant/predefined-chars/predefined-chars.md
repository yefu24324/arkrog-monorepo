# predefined-chars

本页记录 JSON 逻辑模块 `constant/predefined-chars` 中的 2 个强关联类型及其 Schema。

## PredefinedChar

`PredefinedChar` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `PredefinedCharSchema`。

- TypeScript：`src/types/roguelike-topic-table/constant/predefined-chars/predefined-chars.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/constant/predefined-chars/predefined-chars.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `charId` | `string` | 是 |
| `canBeFree` | `boolean` | 是 |
| `uniEquipId` | `null \| string` | 是 |
| `recruitType` | `RecruitType` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## RecruitType

`RecruitType` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `RecruitTypeSchema`。

- TypeScript：`src/types/roguelike-topic-table/constant/predefined-chars/predefined-chars.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/constant/predefined-chars/predefined-chars.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字面量范围

`"FREE" \| "THIRD_LOW" \| "THIRD"`

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->
