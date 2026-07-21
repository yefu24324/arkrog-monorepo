# difficulties

本页记录 JSON 逻辑模块 `details/difficulties` 中的 6 个强关联类型及其 Schema。

## DetailDifficulty

`DetailDifficulty` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `DetailDifficultySchema`。

- TypeScript：`src/types/roguelike-topic-table/details/difficulties/difficulties.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/difficulties/difficulties.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `modeDifficulty` | `Mode` | 是 |
| `grade` | `number` | 是 |
| `name` | `string` | 是 |
| `nameImage` | `NameImage \| null` | 是 |
| `subName` | `null \| string` | 是 |
| `enrollId` | `null \| string` | 是 |
| `haveInitialRelicIcon` | `boolean` | 是 |
| `scoreFactor` | `number` | 是 |
| `canUnlockItem` | `boolean` | 是 |
| `doMonthTask` | `boolean` | 是 |
| `ruleDesc` | `string` | 是 |
| `ruleDescReplacements` | `RuleDescReplacement[] \| null` | 是 |
| `failTitle` | `FailTitle` | 是 |
| `failImageId` | `string` | 是 |
| `failForceDesc` | `FailForceDesc` | 是 |
| `sortId` | `number` | 是 |
| `equivalentGrade` | `number` | 是 |
| `color` | `null \| string` | 是 |
| `bpValue` | `number` | 是 |
| `bossValue` | `number` | 是 |
| `addDesc` | `null \| string` | 是 |
| `warningType` | `HistoricalRecordsMode` | 是 |
| `unlockText` | `null \| string` | 是 |
| `displayIconId` | `DisplayIconId \| null` | 是 |
| `hideEndingStory` | `boolean` | 是 |
| `haveLegacy` | `boolean` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## DisplayIconId

`DisplayIconId` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `DisplayIconIdSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/difficulties/difficulties.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/difficulties/difficulties.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字面量范围

`"icon_difficulty_0" \| "icon_difficulty_1" \| "icon_difficulty_2" \| "icon_difficulty_3"`

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## FailForceDesc

`FailForceDesc` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `FailForceDescSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/difficulties/difficulties.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/difficulties/difficulties.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字面量范围

`"通过提升干员等级、技能等级或将干员精英化，可以在战斗中取得更大优势" \| "理解月度小队成员的特点并灵活运用，可以在战斗中取得更大优势" \| "充分利用【调查条目】提供的特殊条件，可以在战斗中取得更大优势" \| "理解追忆映射成员的特点并灵活运用，可以在战斗中取得更大优势" \| "充分利用【探索条目】提供的特殊条件，可以在战斗中取得更大优势" \| "掌握探索者档案所记录的成员特点并灵活运用，可以在战斗中取得更大优势" \| "在本次深入调查中，非险路恶敌作战失败不会结束探索" \| "掌握讲述者列表所记录的成员特点并灵活运用，可以在战斗中取得更大优势"`

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## FailTitle

`FailTitle` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `FailTitleSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/difficulties/difficulties.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/difficulties/difficulties.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字面量范围

`"联系中断" \| "小队解散" \| "调查终止" \| "暂时撤退"`

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## NameImage

`NameImage` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `NameImageSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/difficulties/difficulties.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/difficulties/difficulties.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字面量范围

`"name_2" \| "name_1"`

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## RuleDescReplacement

`RuleDescReplacement` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `RuleDescReplacementSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/difficulties/difficulties.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/difficulties/difficulties.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `enrollId` | `EnrollId` | 是 |
| `ruleDesc` | `string` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->
