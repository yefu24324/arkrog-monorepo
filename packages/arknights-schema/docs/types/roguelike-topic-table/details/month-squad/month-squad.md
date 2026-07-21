# month-squad

本页记录 JSON 逻辑模块 `details/month-squad` 中的 3 个强关联类型及其 Schema。

## MonthSquad

`MonthSquad` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `MonthSquadSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/month-squad/month-squad.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/month-squad/month-squad.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `month_team_1` | `MonthTeam` | 是 |
| `month_team_2` | `MonthTeam` | 是 |
| `month_team_3` | `MonthTeam` | 否 |
| `month_team_4` | `MonthTeam` | 否 |
| `month_team_5` | `MonthTeam` | 否 |
| `month_team_6` | `MonthTeam` | 否 |
| `month_team_7` | `MonthTeam` | 否 |
| `month_team_8` | `MonthTeam` | 否 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## MonthTeam

`MonthTeam` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `MonthTeamSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/month-squad/month-squad.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/month-squad/month-squad.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `id` | `string` | 是 |
| `teamName` | `string` | 是 |
| `teamSubName` | `null \| string` | 是 |
| `teamFlavorDesc` | `null \| string` | 是 |
| `teamDes` | `string` | 是 |
| `teamColor` | `string` | 是 |
| `teamMonth` | `string` | 是 |
| `teamYear` | `string` | 是 |
| `teamIndex` | `null \| string` | 是 |
| `teamChars` | `TeamChar[]` | 是 |
| `zoneId` | `ZoneId \| null` | 是 |
| `chatId` | `string` | 是 |
| `tokenRewardNum` | `number` | 是 |
| `items` | `Reward[]` | 是 |
| `startTime` | `number` | 是 |
| `endTime` | `number` | 是 |
| `taskDes` | `null \| string` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## TeamChar

`TeamChar` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `TeamCharSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/month-squad/month-squad.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/month-squad/month-squad.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `teamCharId` | `string` | 是 |
| `teamTmplId` | `null \| string` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->
