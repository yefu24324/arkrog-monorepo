# challenges

本页记录 JSON 逻辑模块 `details/challenges` 中的 2 个强关联类型及其 Schema。

## ChallengeElement

`ChallengeElement` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `ChallengeElementSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/challenges/challenges.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/challenges/challenges.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `challengeId` | `string` | 是 |
| `sortId` | `number` | 是 |
| `challengeName` | `string` | 是 |
| `challengeGroup` | `number` | 是 |
| `challengeGroupSortId` | `number` | 是 |
| `challengeGroupName` | `null \| string` | 是 |
| `challengeUnlockDesc` | `null \| string` | 是 |
| `challengeUnlockToastDesc` | `null \| string` | 是 |
| `challengeDes` | `string` | 是 |
| `challengeConditionDes` | `string[]` | 是 |
| `challengeTasks` | `{ [key: string]: ChallengeTask }` | 是 |
| `defaultTaskId` | `string` | 是 |
| `rewards` | `Reward[]` | 是 |
| `challengeStoryId` | `null \| string` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## ChallengeTask

`ChallengeTask` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `ChallengeTaskSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/challenges/challenges.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/challenges/challenges.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `taskId` | `string` | 是 |
| `taskDes` | `string` | 是 |
| `completionClass` | `string` | 是 |
| `completionParams` | `string[]` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->
