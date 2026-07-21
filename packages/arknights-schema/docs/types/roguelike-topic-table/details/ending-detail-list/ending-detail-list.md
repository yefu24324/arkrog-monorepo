# ending-detail-list

本页记录 JSON 逻辑模块 `details/ending-detail-list` 中的 4 个强关联类型及其 Schema。

## EndingDetailList

`EndingDetailList` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `EndingDetailListSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/ending-detail-list/ending-detail-list.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/ending-detail-list/ending-detail-list.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `textId` | `string` | 是 |
| `text` | `string` | 是 |
| `eventType` | `EventType` | 是 |
| `spZoneEvtType` | `SpZoneEvtType \| null` | 是 |
| `showType` | `EndingDetailListShowType` | 是 |
| `choiceSceneId` | `null \| string` | 是 |
| `paramList` | `string[]` | 是 |
| `otherPara1` | `null` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## EndingDetailListShowType

`EndingDetailListShowType` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `EndingDetailListShowTypeSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/ending-detail-list/ending-detail-list.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/ending-detail-list/ending-detail-list.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字面量范围

`"SUM" \| "SHOW_CONST" \| "SHOW_CHOICE" \| "SHOW_BOSS_END" \| "SHOW_BATTLE"`

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## EventType

`EventType` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `EventTypeSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/ending-detail-list/ending-detail-list.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/ending-detail-list/ending-detail-list.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字面量范围

`"INCIDENT" \| "ENTERTAINMENT" \| "BATTLE_BOSS" \| "STASHED_RECRUIT" \| "NONE" \| "SPECIAL_ZONE"`

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## SpZoneEvtType

`SpZoneEvtType` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `SpZoneEvtTypeSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/ending-detail-list/ending-detail-list.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/ending-detail-list/ending-detail-list.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字面量范围

`"TRIAL_GATE"`

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->
