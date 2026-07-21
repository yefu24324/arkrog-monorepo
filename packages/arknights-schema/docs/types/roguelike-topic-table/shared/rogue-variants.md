# rogue-variants

本页记录 JSON 逻辑模块 `shared` 中的 5 个强关联类型及其 Schema。

## Ro4FailEnding1

`Ro4FailEnding1` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `Ro4FailEnding1Schema`。

- TypeScript：`src/types/roguelike-topic-table/shared/rogue-variants.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/shared/rogue-variants.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `id` | `IconId` | 是 |
| `name` | `string` | 是 |
| `desc` | `string` | 是 |
| `iconId` | `IconId` | 是 |
| `priority` | `number` | 否 |
| `unlockDesc` | `null \| string` | 否 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## Rogue2__Mutation4

`Rogue2__Mutation4` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `Rogue2__Mutation4Schema`。

- TypeScript：`src/types/roguelike-topic-table/shared/rogue-variants.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/shared/rogue-variants.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `id` | `string` | 是 |
| `buffType` | `Rogue2_Mutation1_BuffType` | 否 |
| `iconId` | `null \| string` | 是 |
| `relatedItemId` | `null \| string` | 否 |
| `outerName` | `string` | 否 |
| `innerName` | `string` | 否 |
| `functionDesc` | `string` | 是 |
| `desc` | `string` | 是 |
| `buffs` | `BuffElement[]` | 否 |
| `type` | `string` | 否 |
| `sound` | `null \| string` | 否 |
| `isPositive` | `boolean` | 否 |
| `name` | `string` | 否 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## Rogue2_Mutation1_Class

`Rogue2_Mutation1_Class` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `Rogue2_Mutation1_ClassSchema`。

- TypeScript：`src/types/roguelike-topic-table/shared/rogue-variants.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/shared/rogue-variants.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `id` | `string` | 是 |
| `buffType` | `Rogue2_Mutation1_BuffType` | 否 |
| `iconId` | `string` | 是 |
| `relatedItemId` | `null \| string` | 否 |
| `outerName` | `string` | 是 |
| `innerName` | `string` | 是 |
| `functionDesc` | `string` | 是 |
| `desc` | `string` | 是 |
| `buffs` | `BuffElement[]` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## Rogue3__Difficulty1

`Rogue3__Difficulty1` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `Rogue3__Difficulty1Schema`。

- TypeScript：`src/types/roguelike-topic-table/shared/rogue-variants.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/shared/rogue-variants.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `buffId` | `string` | 是 |
| `nodeType` | `ValidModeEnum` | 是 |
| `frontNodeId` | `string[]` | 是 |
| `nextNodeId` | `string[]` | 是 |
| `positionRow` | `number` | 是 |
| `positionOrder` | `number` | 是 |
| `tokenCost` | `number` | 是 |
| `buffName` | `string` | 是 |
| `activeIconId` | `string` | 否 |
| `inactiveIconId` | `string` | 否 |
| `bottomIconId` | `string` | 否 |
| `effectType` | `EffectType` | 是 |
| `rawDesc` | `string[]` | 是 |
| `buffDisplayInfo` | `BuffDisplayInfo[]` | 是 |
| `groupId` | `GroupId` | 是 |
| `enrollId` | `EnrollId \| null` | 是 |
| `buffIconId` | `string` | 否 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## Rogue3__ExploreTool1

`Rogue3__ExploreTool1` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `Rogue3__ExploreTool1Schema`。

- TypeScript：`src/types/roguelike-topic-table/shared/rogue-variants.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/shared/rogue-variants.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `itemId` | `string` | 是 |
| `trapId` | `string` | 是 |
| `trapDesc` | `string` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->
