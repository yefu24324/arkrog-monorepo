# stages

本页记录 JSON 逻辑模块 `details/stages` 中的 6 个强关联类型及其 Schema。

## CapsulePool

`CapsulePool` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `CapsulePoolSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/stages/stages.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/stages/stages.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字面量范围

`"pool_capsule_default"`

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## Code

`Code` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `CodeSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/stages/stages.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/stages/stages.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字面量范围

`"ISW-NO" \| "ISW-DF" \| "ISW-DU" \| "ISW-SP" \| " "`

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## DifficultyEnum

`DifficultyEnum` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `DifficultyEnumSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/stages/stages.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/stages/stages.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字面量范围

`"NORMAL" \| "FOUR_STAR"`

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## LoadingPicId

`LoadingPicId` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `LoadingPicIdSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/stages/stages.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/stages/stages.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字面量范围

`"loading_PCS" \| "loading_SY" \| "loading_SM_RL" \| "loading_SKZ_RL" \| "loading_SUI_RL" \| "loading_HLSH_RL"`

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## RedCapsulePool

`RedCapsulePool` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `RedCapsulePoolSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/stages/stages.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/stages/stages.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字面量范围

`"pool_capsule_red"`

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## Stage

`Stage` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `StageSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/stages/stages.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/stages/stages.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `id` | `string` | 是 |
| `linkedStageId` | `string` | 是 |
| `levelId` | `string` | 是 |
| `levelReplaceIds` | `string[]` | 是 |
| `code` | `Code` | 是 |
| `name` | `string` | 是 |
| `loadingPicId` | `LoadingPicId` | 是 |
| `description` | `string` | 是 |
| `eliteDesc` | `null \| string` | 是 |
| `isBoss` | `number` | 是 |
| `isElite` | `number` | 是 |
| `difficulty` | `DifficultyEnum` | 是 |
| `capsulePool` | `CapsulePool \| null` | 是 |
| `capsuleProb` | `number` | 是 |
| `vutresProb` | `number[]` | 是 |
| `boxProb` | `number[]` | 是 |
| `specialNodeId` | `null \| string` | 是 |
| `redCapsulePool` | `RedCapsulePool \| null` | 是 |
| `redCapsuleProb` | `number` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->
