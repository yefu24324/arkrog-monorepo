# chaos

本页记录 JSON 逻辑模块 `modules/chaos` 中的 7 个强关联类型及其 Schema。

## ChaosData

`ChaosData` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `ChaosDataSchema`。

- TypeScript：`src/types/roguelike-topic-table/modules/chaos/chaos.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/modules/chaos/chaos.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `chaosId` | `string` | 是 |
| `level` | `number` | 是 |
| `nextChaosId` | `null \| string` | 是 |
| `prevChaosId` | `null \| string` | 是 |
| `iconId` | `string` | 是 |
| `name` | `string` | 是 |
| `functionDesc` | `string` | 是 |
| `desc` | `string` | 是 |
| `sound` | `ChaosDataSound` | 是 |
| `sortId` | `number` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## ChaosDataSound

`ChaosDataSound` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `ChaosDataSoundSchema`。

- TypeScript：`src/types/roguelike-topic-table/modules/chaos/chaos.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/modules/chaos/chaos.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字面量范围

`"ON_ROGUELIKE_VARIATION1" \| "ON_ROGUELIKE_VARIATION2"`

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## ChaosModuleConsts

`ChaosModuleConsts` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `ChaosModuleConstsSchema`。

- TypeScript：`src/types/roguelike-topic-table/modules/chaos/chaos.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/modules/chaos/chaos.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `maxChaosLevel` | `number` | 是 |
| `maxChaosSlot` | `number` | 是 |
| `chaosNotMaxDescription` | `string` | 是 |
| `chaosMaxDescription` | `string` | 是 |
| `chaosPredictDescription` | `string` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## ChaosRange

`ChaosRange` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `ChaosRangeSchema`。

- TypeScript：`src/types/roguelike-topic-table/modules/chaos/chaos.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/modules/chaos/chaos.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `chaosMax` | `number` | 是 |
| `chaosDungeonEffect` | `string` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## LevelInfoDict

`LevelInfoDict` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `LevelInfoDictSchema`。

- TypeScript：`src/types/roguelike-topic-table/modules/chaos/chaos.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/modules/chaos/chaos.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `rule_1` | `{ [key: string]: Rule }` | 是 |
| `rule_2` | `{ [key: string]: Rule }` | 是 |
| `rule_3` | `{ [key: string]: Rule }` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## ModuleChaos

`ModuleChaos` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `ModuleChaosSchema`。

- TypeScript：`src/types/roguelike-topic-table/modules/chaos/chaos.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/modules/chaos/chaos.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `chaosDatas` | `{ [key: string]: ChaosData }` | 是 |
| `chaosRanges` | `ChaosRange[]` | 是 |
| `levelInfoDict` | `LevelInfoDict` | 是 |
| `moduleConsts` | `ChaosModuleConsts` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## Rule

`Rule` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `RuleSchema`。

- TypeScript：`src/types/roguelike-topic-table/modules/chaos/chaos.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/modules/chaos/chaos.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `chaosLevelBeginNum` | `number` | 是 |
| `chaosLevelEndNum` | `number` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->
