# choices

本页记录 JSON 逻辑模块 `details/choices` 中的 6 个强关联类型及其 Schema。

## Choice

`Choice` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `ChoiceSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/choices/choices.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/choices/choices.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `id` | `string` | 是 |
| `title` | `string` | 是 |
| `description` | `null \| string` | 是 |
| `lockedCoverDesc` | `null \| string` | 是 |
| `type` | `Rogue6_ScrapM01_Enum` | 是 |
| `leftDecoType` | `LeftDecoType` | 是 |
| `nextSceneId` | `null \| string` | 是 |
| `icon` | `IconEnum \| null` | 是 |
| `displayData` | `DisplayData` | 是 |
| `forceShowWhenOnlyLeave` | `boolean` | 是 |
| `isHiddenChoice` | `boolean` | 是 |
| `sortId` | `number` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## DisplayData

`DisplayData` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `DisplayDataSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/choices/choices.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/choices/choices.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `type` | `DisplayDataType` | 是 |
| `costHintType` | `THintType` | 是 |
| `effectHintType` | `THintType` | 是 |
| `funcIconId` | `IconEnum \| null` | 是 |
| `itemId` | `null \| string` | 是 |
| `difficultyUpgradeRelicGroupId` | `null` | 是 |
| `taskId` | `null` | 是 |
| `instId` | `null` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## DisplayDataType

`DisplayDataType` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `DisplayDataTypeSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/choices/choices.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/choices/choices.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字面量范围

`"NORMAL" \| "ITEM"`

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## IconEnum

`IconEnum` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `IconEnumSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/choices/choices.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/choices/choices.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字面量范围

`"leave" \| "initial_reward_hp" \| "initial_reward_population" \| "initial_reward_gold" \| "initial_reward_unknown" \| "relic" \| "hp" \| "population" \| "member" \| "unknown" \| "gold" \| "recruit" \| "battle" \| "initial_reward_shield" \| "key" \| "initial_reward_dice" \| "hpmax" \| "dice" \| "san" \| "shield" \| "sacrifice" \| "teleport" \| "adventure" \| "totem" \| "sacrifice_totem" \| "vision" \| "chaos_purify" \| "fragment" \| "disaster" \| "duel" \| "weight" \| "stashed_recruit" \| "candle_duel" \| "copper_drop" \| "copper" \| "sp_zone_ap" \| "sacrifice_copper" \| "sacrifice_scrap" \| "scrap_drop" \| "zone_end" \| "ap_drop" \| "weather_change" \| "initial_reward_relic" \| "initial_reward_max_weight" \| "initial_reward_unknown_pay_hp" \| "initial_reward_scrap_move" \| "initial_reward_unknown_pay_weight" \| ""`

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## LeftDecoType

`LeftDecoType` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `LeftDecoTypeSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/choices/choices.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/choices/choices.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字面量范围

`"NONE" \| "DICE" \| "TASK" \| "TASK_REWARD" \| "VISION"`

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## THintType

`THintType` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `THintTypeSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/choices/choices.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/choices/choices.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字面量范围

`"NONE" \| "CHAOS" \| "VISION" \| "SEED_COST" \| "ITEM" \| "SACRIFICE" \| "EXPEDITION" \| "SACRIFICE_TOTEM" \| "FRAGMENT" \| "STASHED_RECRUIT" \| "CANDLE" \| "GUIDED" \| "COPPER_LUCK" \| "GUIDED_CHAR" \| "SACRIFICE_SCRAP" \| "AP_LEFT"`

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->
