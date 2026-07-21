# fragment

本页记录 JSON 逻辑模块 `modules/fragment` 中的 11 个强关联类型及其 Schema。

## AlchemyDatum

`AlchemyDatum` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `AlchemyDatumSchema`。

- TypeScript：`src/types/roguelike-topic-table/modules/fragment/fragment.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/modules/fragment/fragment.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `fragmentTypeList` | `TypeElement[]` | 是 |
| `fragmentSquareSum` | `number` | 是 |
| `poolRarity` | `Rarity` | 是 |
| `relicProp` | `number` | 是 |
| `shieldProp` | `number` | 是 |
| `populationProp` | `number` | 是 |
| `overrideConditionBandIds` | `OverrideConditionBandId[] \| null` | 是 |
| `overrideRecipeId` | `null \| string` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## AlchemyFormulaDatum

`AlchemyFormulaDatum` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `AlchemyFormulaDatumSchema`。

- TypeScript：`src/types/roguelike-topic-table/modules/fragment/fragment.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/modules/fragment/fragment.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `fragmentIds` | `string[]` | 是 |
| `rewardId` | `string` | 是 |
| `rewardCount` | `number` | 是 |
| `rewardItemType` | `RewardItemTypeEnum` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## FragmentBuffDatum

`FragmentBuffDatum` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `FragmentBuffDatumSchema`。

- TypeScript：`src/types/roguelike-topic-table/modules/fragment/fragment.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/modules/fragment/fragment.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `itemId` | `string` | 是 |
| `maskType` | `MaskType` | 是 |
| `desc` | `null \| string` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## FragmentDatum

`FragmentDatum` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `FragmentDatumSchema`。

- TypeScript：`src/types/roguelike-topic-table/modules/fragment/fragment.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/modules/fragment/fragment.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `id` | `string` | 是 |
| `type` | `TypeElement` | 是 |
| `value` | `number` | 是 |
| `weight` | `number` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## FragmentLevelDatum

`FragmentLevelDatum` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `FragmentLevelDatumSchema`。

- TypeScript：`src/types/roguelike-topic-table/modules/fragment/fragment.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/modules/fragment/fragment.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `weightUp` | `number` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## FragmentModuleConsts

`FragmentModuleConsts` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `FragmentModuleConstsSchema`。

- TypeScript：`src/types/roguelike-topic-table/modules/fragment/fragment.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/modules/fragment/fragment.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `weightStatusSafeDesc` | `string` | 是 |
| `weightStatusLimitDesc` | `string` | 是 |
| `weightStatusOverweightDesc` | `string` | 是 |
| `charWeightSlot` | `number` | 是 |
| `limitWeightThresholdValue` | `number` | 是 |
| `overWeightThresholdValue` | `number` | 是 |
| `maxAlchemyField` | `number` | 是 |
| `maxAlchemyCount` | `number` | 是 |
| `fragmentBagWeightLimitTips` | `string` | 是 |
| `fragmentBagWeightOverWeightTips` | `string` | 是 |
| `weightUpgradeToastFormat` | `string` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## FragmentTypeData

`FragmentTypeData` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `FragmentTypeDataSchema`。

- TypeScript：`src/types/roguelike-topic-table/modules/fragment/fragment.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/modules/fragment/fragment.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `WISH` | `Idea` | 是 |
| `INSPIRATION` | `Idea` | 是 |
| `IDEA` | `Idea` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## MaskType

`MaskType` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `MaskTypeSchema`。

- TypeScript：`src/types/roguelike-topic-table/modules/fragment/fragment.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/modules/fragment/fragment.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字面量范围

`"ALL" \| "BATTLES"`

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## ModuleFragment

`ModuleFragment` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `ModuleFragmentSchema`。

- TypeScript：`src/types/roguelike-topic-table/modules/fragment/fragment.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/modules/fragment/fragment.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `fragmentData` | `{ [key: string]: FragmentDatum }` | 是 |
| `fragmentTypeData` | `FragmentTypeData` | 是 |
| `moduleConsts` | `FragmentModuleConsts` | 是 |
| `fragmentBuffData` | `{ [key: string]: FragmentBuffDatum }` | 是 |
| `alchemyData` | `{ [key: string]: AlchemyDatum }` | 是 |
| `alchemyFormulaData` | `{ [key: string]: AlchemyFormulaDatum }` | 是 |
| `fragmentLevelData` | `{ [key: string]: FragmentLevelDatum }` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## OverrideConditionBandId

`OverrideConditionBandId` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `OverrideConditionBandIdSchema`。

- TypeScript：`src/types/roguelike-topic-table/modules/fragment/fragment.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/modules/fragment/fragment.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字面量范围

`"rogue_4_band_28" \| "rogue_4_band_29" \| "rogue_4_band_21" \| "rogue_4_band_22_22"`

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## TypeElement

`TypeElement` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `TypeElementSchema`。

- TypeScript：`src/types/roguelike-topic-table/modules/fragment/fragment.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/modules/fragment/fragment.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字面量范围

`"WISH" \| "INSPIRATION" \| "IDEA"`

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->
