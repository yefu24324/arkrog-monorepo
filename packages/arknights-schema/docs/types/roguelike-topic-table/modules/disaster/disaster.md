# disaster

本页记录 JSON 逻辑模块 `modules/disaster` 中的 1 个强关联类型及其 Schema。

## ModuleDisaster

`ModuleDisaster` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `ModuleDisasterSchema`。

- TypeScript：`src/types/roguelike-topic-table/modules/disaster/disaster.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/modules/disaster/disaster.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `disasterData` | `{ [key: string]: ErDatum }` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->
