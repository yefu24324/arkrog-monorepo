# chat

本页记录 JSON 逻辑模块 `details/archive-comp` 中的 3 个强关联类型及其 Schema。

## ArchiveCompChat

`ArchiveCompChat` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `ArchiveCompChatSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/archive-comp/chat.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/archive-comp/chat.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `chat` | `{ [key: string]: ChatValue }` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## ChatItemList

`ChatItemList` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `ChatItemListSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/archive-comp/chat.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/archive-comp/chat.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `floor` | `number` | 是 |
| `chatZoneId` | `ZoneId` | 是 |
| `chatDesc` | `null \| string` | 是 |
| `chatStoryId` | `string` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## ChatValue

`ChatValue` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `ChatValueSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/archive-comp/chat.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/archive-comp/chat.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `sortId` | `number` | 是 |
| `chatItemList` | `ChatItemList[]` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->
