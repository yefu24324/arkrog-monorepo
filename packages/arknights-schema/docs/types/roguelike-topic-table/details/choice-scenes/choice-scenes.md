# choice-scenes

本页记录 JSON 逻辑模块 `details/choice-scenes` 中的 2 个强关联类型及其 Schema。

## ChoiceScene

`ChoiceScene` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `ChoiceSceneSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/choice-scenes/choice-scenes.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/choice-scenes/choice-scenes.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `id` | `string` | 是 |
| `title` | `string` | 是 |
| `description` | `string` | 是 |
| `background` | `null \| string` | 是 |
| `titleIcon` | `TitleIcon \| null` | 是 |
| `subTypeId` | `number` | 是 |
| `useHiddenMusic` | `boolean` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## TitleIcon

`TitleIcon` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `TitleIconSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/choice-scenes/choice-scenes.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/choice-scenes/choice-scenes.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字面量范围

`"title_icon_task" \| "title_icon_task_reward" \| ""`

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->
