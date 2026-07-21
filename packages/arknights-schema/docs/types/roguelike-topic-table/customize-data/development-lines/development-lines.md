# development-lines

本页记录 JSON 逻辑模块 `customize-data/development-lines` 中的 1 个强关联类型及其 Schema。

## DevelopmentLine

`DevelopmentLine` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `DevelopmentLineSchema`。

- TypeScript：`src/types/roguelike-topic-table/customize-data/development-lines/development-lines.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/customize-data/development-lines/development-lines.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `fromNode` | `string` | 是 |
| `toNode` | `string` | 是 |
| `fromNodeP` | `number` | 是 |
| `fromNodeR` | `number` | 是 |
| `toNodeP` | `number` | 是 |
| `toNodeR` | `number` | 是 |
| `enrollId` | `EnrollId \| null` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->
