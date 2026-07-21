# detail-const

本页记录 JSON 逻辑模块 `details/detail-const` 中的 5 个强关联类型及其 Schema。

## CharUpgradeTable

`CharUpgradeTable` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `CharUpgradeTableSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/detail-const/detail-const.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/detail-const/detail-const.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `evolvePhase` | `EvolvePhase` | 是 |
| `skillLevel` | `number` | 是 |
| `skillSpecializeLevel` | `number` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## DetailConst

`DetailConst` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `DetailConstSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/detail-const/detail-const.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/detail-const/detail-const.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `playerLevelTable` | `{ [key: string]: PlayerLevelTable }` | 是 |
| `charUpgradeTable` | `{ [key: string]: CharUpgradeTable }` | 是 |
| `difficultyUpgradeRelicDescTable` | `{ [key: string]: string }` | 是 |
| `predefinedLevelTable` | `{ [key: string]: PredefinedLevelTable }` | 是 |
| `tokenBpId` | `string` | 是 |
| `tokenOuterBuffId` | `string` | 是 |
| `spOperatorLockedMessage` | `null \| string` | 是 |
| `previewedRewardsAccordingUpdateId` | `string` | 是 |
| `tipButtonName` | `string` | 是 |
| `collectButtonName` | `string` | 是 |
| `bpSystemName` | `string` | 是 |
| `autoSetKV` | `string` | 是 |
| `bpPurchaseActiveEnroll` | `null \| string` | 是 |
| `defaultExpeditionSelectDesc` | `null \| string` | 是 |
| `gotCharMutationBuffToast` | `null \| string` | 是 |
| `gotCharEvolutionBuffToast` | `null \| string` | 是 |
| `gotSquadBuffToast` | `null \| string` | 是 |
| `loseCharBuffToast` | `null \| string` | 是 |
| `monthTeamSystemName` | `string` | 是 |
| `battlePassUpdateName` | `string` | 是 |
| `monthCharCardTagName` | `string` | 是 |
| `monthTeamDescTagName` | `string` | 是 |
| `outerBuffCompleteText` | `string` | 是 |
| `outerProgressTextColor` | `string` | 是 |
| `challengeTaskTargetName` | `string` | 是 |
| `challengeTaskConditionName` | `string` | 是 |
| `challengeTaskRewardName` | `string` | 是 |
| `challengeTaskModeName` | `string` | 是 |
| `challengeTaskName` | `string` | 是 |
| `outerBuffTokenSum` | `number` | 是 |
| `needAllFrontNode` | `boolean` | 是 |
| `showBlurBack` | `boolean` | 是 |
| `endingIconBorderDifficulty` | `number` | 是 |
| `endingIconBorderCount` | `number` | 是 |
| `copySeedModeInfo` | `null \| string` | 是 |
| `copySucceededTextHint` | `null \| string` | 是 |
| `historicalRecordsCount` | `number` | 是 |
| `historicalRecordsStartTime` | `number` | 是 |
| `historicalRecordsMode` | `HistoricalRecordsMode` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## EvolvePhase

`EvolvePhase` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `EvolvePhaseSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/detail-const/detail-const.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/detail-const/detail-const.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字面量范围

`"PHASE_1" \| "PHASE_2"`

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## PlayerLevelTable

`PlayerLevelTable` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `PlayerLevelTableSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/detail-const/detail-const.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/detail-const/detail-const.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `exp` | `number` | 是 |
| `populationUp` | `number` | 是 |
| `squadCapacityUp` | `number` | 是 |
| `battleCharLimitUp` | `number` | 是 |
| `maxHpUp` | `number` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## PredefinedLevelTable

`PredefinedLevelTable` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `PredefinedLevelTableSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/detail-const/detail-const.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/detail-const/detail-const.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `levels` | `{ [key: string]: PlayerLevelTable }` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->
