# node-upgrade

本页记录 JSON 逻辑模块 `modules/node-upgrade` 中的 7 个强关联类型及其 Schema。

## Alchemy

`Alchemy` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `AlchemySchema`。

- TypeScript：`src/types/roguelike-topic-table/modules/node-upgrade/node-upgrade.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/modules/node-upgrade/node-upgrade.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `nodeType` | `AlchemyNodeType` | 是 |
| `sortId` | `number` | 是 |
| `permItemList` | `PermItemList[]` | 是 |
| `tempItemList` | `TempItemList[]` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## AlchemyNodeType

`AlchemyNodeType` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `AlchemyNodeTypeSchema`。

- TypeScript：`src/types/roguelike-topic-table/modules/node-upgrade/node-upgrade.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/modules/node-upgrade/node-upgrade.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字面量范围

`"ALCHEMY" \| "BATTLE_SHOP" \| "REST"`

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## CostItemId

`CostItemId` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `CostItemIdSchema`。

- TypeScript：`src/types/roguelike-topic-table/modules/node-upgrade/node-upgrade.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/modules/node-upgrade/node-upgrade.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字面量范围

`"rogue_4_fragment_I_1"`

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## NodeUpgrade

`NodeUpgrade` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `NodeUpgradeSchema`。

- TypeScript：`src/types/roguelike-topic-table/modules/node-upgrade/node-upgrade.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/modules/node-upgrade/node-upgrade.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `nodeUpgradeDataMap` | `NodeUpgradeDataMap` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## NodeUpgradeDataMap

`NodeUpgradeDataMap` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `NodeUpgradeDataMapSchema`。

- TypeScript：`src/types/roguelike-topic-table/modules/node-upgrade/node-upgrade.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/modules/node-upgrade/node-upgrade.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `REST` | `Alchemy` | 是 |
| `BATTLE_SHOP` | `Alchemy` | 是 |
| `ALCHEMY` | `Alchemy` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## PermItemList

`PermItemList` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `PermItemListSchema`。

- TypeScript：`src/types/roguelike-topic-table/modules/node-upgrade/node-upgrade.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/modules/node-upgrade/node-upgrade.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `upgradeId` | `string` | 是 |
| `nodeType` | `AlchemyNodeType` | 是 |
| `nodeLevel` | `number` | 是 |
| `costItemId` | `CostItemId` | 是 |
| `costItemCount` | `number` | 是 |
| `desc` | `string` | 是 |
| `nodeName` | `string` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## TempItemList

`TempItemList` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `TempItemListSchema`。

- TypeScript：`src/types/roguelike-topic-table/modules/node-upgrade/node-upgrade.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/modules/node-upgrade/node-upgrade.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `upgradeId` | `string` | 是 |
| `nodeType` | `AlchemyNodeType` | 是 |
| `sortId` | `number` | 是 |
| `costItemId` | `CostItemId` | 是 |
| `costItemCount` | `number` | 是 |
| `desc` | `string` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->
