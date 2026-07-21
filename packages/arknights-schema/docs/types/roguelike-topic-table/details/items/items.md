# items

本页记录 JSON 逻辑模块 `details/items` 中的 4 个强关联类型及其 Schema。

## Item

`Item` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `ItemSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/items/items.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/items/items.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `id` | `string` | 是 |
| `name` | `string` | 是 |
| `description` | `null \| string` | 是 |
| `usage` | `null \| string` | 是 |
| `obtainApproach` | `ObtainApproach \| null` | 是 |
| `iconId` | `string` | 是 |
| `itemIconGroupId` | `null \| string` | 是 |
| `type` | `RewardItemTypeEnum` | 是 |
| `subType` | `SubType` | 是 |
| `rarity` | `Rarity` | 是 |
| `sortId` | `number` | 是 |
| `canSacrifice` | `boolean` | 是 |
| `tinyIconColor` | `TinyIconColor \| null` | 是 |
| `unlockCondDesc` | `null \| string` | 是 |
| `shortUsage` | `null \| string` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## ObtainApproach

`ObtainApproach` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `ObtainApproachSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/items/items.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/items/items.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字面量范围

`"在集成战略模式中获得" \| "步数发放" \| "完成遭遇战"`

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## SubType

`SubType` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `SubTypeSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/items/items.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/items/items.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字面量范围

`"NONE" \| "CURSE" \| "RED_CAPSULE" \| "TEMP_TICKET" \| "TOTEM_UPPER" \| "TOTEM_LOWER" \| "SINGLE_RAND_FREE" \| "SECRET"`

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## TinyIconColor

`TinyIconColor` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `TinyIconColorSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/items/items.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/items/items.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字面量范围

`"33a8e2" \| "02d3ae" \| "008aff" \| "ffffff"`

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->
