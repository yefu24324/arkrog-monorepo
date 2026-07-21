# topics

本页记录 JSON 逻辑模块 `topics` 中的 1 个强关联类型及其 Schema。

## Topic

`Topic` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `TopicSchema`。

- TypeScript：`src/types/roguelike-topic-table/topics/topics.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/topics/topics.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `id` | `string` | 是 |
| `name` | `string` | 是 |
| `startTime` | `number` | 是 |
| `disappearTimeOnMainScreen` | `number` | 是 |
| `sort` | `number` | 是 |
| `showMedalId` | `string` | 是 |
| `medalGroupId` | `string` | 是 |
| `fullStoredTime` | `number` | 是 |
| `lineText` | `string` | 是 |
| `homeEntryDisplayData` | `HomeEntryDisplayDatum[]` | 是 |
| `moduleTypes` | `string[]` | 是 |
| `config` | `Config` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->
