# totem-buff

本页记录 JSON 逻辑模块 `modules/totem-buff` 中的 11 个强关联类型及其 Schema。

## BgIconId

`BgIconId` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `BgIconIdSchema`。

- TypeScript：`src/types/roguelike-topic-table/modules/totem-buff/totem-buff.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/modules/totem-buff/totem-buff.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字面量范围

`"bg_all" \| "bg_blue" \| "bg_green" \| "bg_red" \| "bg_boss"`

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## BlurNodeType

`BlurNodeType` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `BlurNodeTypeSchema`。

- TypeScript：`src/types/roguelike-topic-table/modules/totem-buff/totem-buff.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/modules/totem-buff/totem-buff.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字面量范围

`"BATTLE" \| "NO_BATTLE" \| "NONE"`

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## ColorCombineDesc

`ColorCombineDesc` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `ColorCombineDescSchema`。

- TypeScript：`src/types/roguelike-topic-table/modules/totem-buff/totem-buff.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/modules/totem-buff/totem-buff.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `RED` | `string` | 是 |
| `GREEN` | `string` | 是 |
| `BLUE` | `string` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## CombineGroupName

`CombineGroupName` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `CombineGroupNameSchema`。

- TypeScript：`src/types/roguelike-topic-table/modules/totem-buff/totem-buff.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/modules/totem-buff/totem-buff.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字面量范围

`"normal" \| "boss"`

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## LinkedNodeTypeData

`LinkedNodeTypeData` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `LinkedNodeTypeDataSchema`。

- TypeScript：`src/types/roguelike-topic-table/modules/totem-buff/totem-buff.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/modules/totem-buff/totem-buff.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `effectiveNodeTypes` | `NodeTypeElement[]` | 是 |
| `blurNodeTypes` | `BlurNodeType[]` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## Rogue3__TotemEnchant

`Rogue3__TotemEnchant` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `Rogue3__TotemEnchantSchema`。

- TypeScript：`src/types/roguelike-topic-table/modules/totem-buff/totem-buff.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/modules/totem-buff/totem-buff.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `subBuffId` | `string` | 是 |
| `name` | `string` | 是 |
| `desc` | `string` | 是 |
| `combinedDesc` | `string` | 是 |
| `info` | `string` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## SubBuffs

`SubBuffs` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `SubBuffsSchema`。

- TypeScript：`src/types/roguelike-topic-table/modules/totem-buff/totem-buff.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/modules/totem-buff/totem-buff.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `rogue_3_totem_enchant_1` | `Rogue3__TotemEnchant` | 是 |
| `rogue_3_totem_enchant_2` | `Rogue3__TotemEnchant` | 是 |
| `rogue_3_totem_enchant_3` | `Rogue3__TotemEnchant` | 是 |
| `rogue_3_totem_enchant_4` | `Rogue3__TotemEnchant` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## TotemBuff

`TotemBuff` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `TotemBuffSchema`。

- TypeScript：`src/types/roguelike-topic-table/modules/totem-buff/totem-buff.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/modules/totem-buff/totem-buff.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `totemBuffDatas` | `{ [key: string]: TotemBuffData }` | 是 |
| `subBuffs` | `SubBuffs` | 是 |
| `moduleConsts` | `TotemBuffModuleConsts` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## TotemBuffData

`TotemBuffData` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `TotemBuffDataSchema`。

- TypeScript：`src/types/roguelike-topic-table/modules/totem-buff/totem-buff.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/modules/totem-buff/totem-buff.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `totemId` | `string` | 是 |
| `color` | `TotemBuffDataColor` | 是 |
| `pos` | `Pos` | 是 |
| `rhythm` | `string` | 是 |
| `normalDesc` | `string` | 是 |
| `synergyDesc` | `string` | 是 |
| `archiveDesc` | `string` | 是 |
| `combineGroupName` | `CombineGroupName` | 是 |
| `bgIconId` | `BgIconId` | 是 |
| `isManual` | `boolean` | 是 |
| `linkedNodeTypeData` | `LinkedNodeTypeData` | 是 |
| `distanceMin` | `number` | 是 |
| `distanceMax` | `number` | 是 |
| `vertPassable` | `boolean` | 是 |
| `expandLength` | `number` | 是 |
| `onlyForVert` | `boolean` | 是 |
| `portalLinkedNodeTypeData` | `LinkedNodeTypeData` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## TotemBuffDataColor

`TotemBuffDataColor` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `TotemBuffDataColorSchema`。

- TypeScript：`src/types/roguelike-topic-table/modules/totem-buff/totem-buff.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/modules/totem-buff/totem-buff.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字面量范围

`"ALL" \| "BLUE" \| "GREEN" \| "RED" \| "NONE"`

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## TotemBuffModuleConsts

`TotemBuffModuleConsts` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `TotemBuffModuleConstsSchema`。

- TypeScript：`src/types/roguelike-topic-table/modules/totem-buff/totem-buff.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/modules/totem-buff/totem-buff.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `totemPredictDescription` | `string` | 是 |
| `colorCombineDesc` | `ColorCombineDesc` | 是 |
| `bossCombineDesc` | `string` | 是 |
| `battleNoPredictDescription` | `string` | 是 |
| `shopNoGoodsDescription` | `string` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->
