# dice

本页记录 JSON 逻辑模块 `modules/dice` 中的 10 个强关联类型及其 Schema。

## BattleDiceId

`BattleDiceId` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `BattleDiceIdSchema`。

- TypeScript：`src/types/roguelike-topic-table/modules/dice/dice.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/modules/dice/dice.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字面量范围

`"rogue_2_dice_battle1" \| "rogue_2_dice_battle2" \| "rogue_2_dice_battle3"`

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## Dice

`Dice` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `DiceSchema`。

- TypeScript：`src/types/roguelike-topic-table/modules/dice/dice.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/modules/dice/dice.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `dice` | `{ [key: string]: Die }` | 是 |
| `diceEvents` | `{ [key: string]: DiceEvent }` | 是 |
| `diceChoices` | `DiceChoices` | 是 |
| `diceRuleGroups` | `{ [key: string]: DiceRuleGroup }` | 是 |
| `dicePredefines` | `DicePredefine[]` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## DiceChoices

`DiceChoices` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `DiceChoicesSchema`。

- TypeScript：`src/types/roguelike-topic-table/modules/dice/dice.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/modules/dice/dice.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `choice_ro2_wish_1` | `string` | 是 |
| `choice_ro2_wish_2` | `string` | 是 |
| `choice_ro2_wish_3` | `string` | 是 |
| `choice_ro2_wish_4` | `string` | 是 |
| `choice_ro2_wish_5` | `string` | 是 |
| `choice_ro2_wish_6` | `string` | 是 |
| `choice_ro2_wish_7` | `string` | 是 |
| `choice_ro2_recruit1_3` | `string` | 是 |
| `choice_ro2_9_1` | `string` | 是 |
| `choice_ro2_9_3` | `string` | 是 |
| `choice_ro2_9_4` | `string` | 是 |
| `choice_ro2_9_5` | `string` | 是 |
| `choice_ro2_9_6` | `string` | 是 |
| `choice_ro2_9_7` | `string` | 是 |
| `choice_ro2_9_8` | `string` | 是 |
| `choice_ro2_9_9` | `string` | 是 |
| `choice_ro2_9_10` | `string` | 是 |
| `choice_ro2_9_11` | `string` | 是 |
| `choice_ro2_9_12` | `string` | 是 |
| `choice_ro2_king_1` | `string` | 是 |
| `choice_ro2_king_3` | `string` | 是 |
| `choice_ro2_liar1_1` | `string` | 是 |
| `choice_ro2_bossa1_2` | `string` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## DiceEvent

`DiceEvent` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `DiceEventSchema`。

- TypeScript：`src/types/roguelike-topic-table/modules/dice/dice.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/modules/dice/dice.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `dicePointMax` | `number` | 是 |
| `diceResultClass` | `ResultType` | 是 |
| `diceGroupId` | `string` | 是 |
| `diceEventId` | `string` | 是 |
| `resultDesc` | `string` | 是 |
| `showType` | `DiceEventShowType` | 是 |
| `canReroll` | `boolean` | 是 |
| `diceEndingScene` | `string` | 是 |
| `diceEndingDesc` | `string` | 是 |
| `sound` | `DiceEventSound` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## DiceEventShowType

`DiceEventShowType` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `DiceEventShowTypeSchema`。

- TypeScript：`src/types/roguelike-topic-table/modules/dice/dice.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/modules/dice/dice.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字面量范围

`"VIRTUE" \| "RAW_TEXT" \| "MUTATION"`

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## DiceEventSound

`DiceEventSound` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `DiceEventSoundSchema`。

- TypeScript：`src/types/roguelike-topic-table/modules/dice/dice.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/modules/dice/dice.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字面量范围

`"ON_ROGUELIKE_DICEGREAT" \| "ON_ROGUELIKE_DICENORMAL" \| "ON_ROGUELIKE_DICEBAD"`

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## DicePredefine

`DicePredefine` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `DicePredefineSchema`。

- TypeScript：`src/types/roguelike-topic-table/modules/dice/dice.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/modules/dice/dice.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `modeId` | `Mode` | 是 |
| `modeGrade` | `number` | 是 |
| `predefinedId` | `null \| string` | 是 |
| `initialDiceCount` | `number` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## DiceRuleGroup

`DiceRuleGroup` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `DiceRuleGroupSchema`。

- TypeScript：`src/types/roguelike-topic-table/modules/dice/dice.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/modules/dice/dice.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `ruleGroupId` | `string` | 是 |
| `minGoodNum` | `number` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## Die

`Die` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `DieSchema`。

- TypeScript：`src/types/roguelike-topic-table/modules/dice/dice.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/modules/dice/dice.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `diceId` | `string` | 是 |
| `description` | `DieDescription` | 是 |
| `isUpgradeDice` | `number` | 是 |
| `upgradeDiceId` | `null \| string` | 是 |
| `diceFaceCount` | `number` | 是 |
| `battleDiceId` | `BattleDiceId` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## DieDescription

`DieDescription` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `DieDescriptionSchema`。

- TypeScript：`src/types/roguelike-topic-table/modules/dice/dice.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/modules/dice/dice.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字面量范围

`"随处可见的六面骰子。投下后似乎能决定什么。" \| "并不常有的八面骰子。投下后似乎能决定什么。" \| "极为少见的十二面骰子。投下后似乎能决定什么。"`

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->
