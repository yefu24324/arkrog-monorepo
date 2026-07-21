# roll-node-data

本页记录 JSON 逻辑模块 `details/roll-node-data` 中的 8 个强关联类型及其 Schema。

## BattleElite

`BattleElite` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `BattleEliteSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/roll-node-data/roll-node-data.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/roll-node-data/roll-node-data.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `nodeType` | `NodeTypeElement` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## RollNodeData

`RollNodeData` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `RollNodeDataSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/roll-node-data/roll-node-data.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/roll-node-data/roll-node-data.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `zone_1` | `Zone` | 否 |
| `zone_2` | `Zone` | 否 |
| `zone_3` | `Zone` | 否 |
| `zone_4` | `Zone` | 否 |
| `zone_5` | `Zone` | 否 |
| `zone_6` | `Zone` | 否 |
| `zone_7` | `Zone` | 否 |
| `zone_8` | `Zone` | 否 |
| `zone_portal_normal_1` | `Zone` | 否 |
| `zone_portal_normal_2` | `Zone` | 否 |
| `zone_portal_normal_3` | `Zone` | 否 |
| `zone_portal_normal_4` | `Zone` | 否 |
| `zone_portal_normal_5` | `Zone` | 否 |
| `zone_portal_normal_6` | `Zone` | 否 |
| `zone_portal_revival_3` | `ZonePortalRevival` | 否 |
| `zone_portal_revival_4` | `ZonePortalRevival` | 否 |
| `zone_portal_revival_5` | `ZonePortalRevival` | 否 |
| `zone_portal_travel_1` | `Zone` | 否 |
| `zone_portal_end_1` | `Zone` | 否 |
| `zone_portal_end_2` | `Zone` | 否 |
| `zone_portal_normal_5_1` | `ZonePortalNormal5_` | 否 |
| `zone_portal_normal_5_2` | `ZonePortalNormal5_` | 否 |
| `zone_portal_normal_5_3` | `ZonePortalNormal5_` | 否 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## Zone

`Zone` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `ZoneSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/roll-node-data/roll-node-data.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/roll-node-data/roll-node-data.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `zoneId` | `string` | 是 |
| `groups` | `Zone1_Groups` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## Zone1_Groups

`Zone1_Groups` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `Zone1_GroupsSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/roll-node-data/roll-node-data.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/roll-node-data/roll-node-data.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `BATTLE_NORMAL` | `BattleElite` | 是 |
| `BATTLE_ELITE` | `BattleElite` | 是 |
| `INCIDENT` | `BattleElite` | 否 |
| `BATTLE_SHOP` | `BattleElite` | 否 |
| `WISH` | `BattleElite` | 否 |
| `DUEL` | `BattleElite` | 否 |
| `EXPEDITION` | `BattleElite` | 否 |
| `REST` | `BattleElite` | 否 |
| `SACRIFICE` | `BattleElite` | 否 |
| `ENTERTAINMENT` | `BattleElite` | 否 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## ZonePortalNormal5_

`ZonePortalNormal5_` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `ZonePortalNormal5_Schema`。

- TypeScript：`src/types/roguelike-topic-table/details/roll-node-data/roll-node-data.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/roll-node-data/roll-node-data.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `zoneId` | `string` | 是 |
| `groups` | `ZonePortalNormal5_1_Groups` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## ZonePortalNormal5_1_Groups

`ZonePortalNormal5_1_Groups` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `ZonePortalNormal5_1_GroupsSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/roll-node-data/roll-node-data.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/roll-node-data/roll-node-data.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `INCIDENT` | `BattleElite` | 是 |
| `BATTLE_NORMAL` | `BattleElite` | 是 |
| `BATTLE_ELITE` | `BattleElite` | 是 |
| `BATTLE_SHOP` | `BattleElite` | 是 |
| `WISH` | `BattleElite` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## ZonePortalRevival

`ZonePortalRevival` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `ZonePortalRevivalSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/roll-node-data/roll-node-data.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/roll-node-data/roll-node-data.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `zoneId` | `string` | 是 |
| `groups` | `ZonePortalRevival3_Groups` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## ZonePortalRevival3_Groups

`ZonePortalRevival3_Groups` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `ZonePortalRevival3_GroupsSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/roll-node-data/roll-node-data.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/roll-node-data/roll-node-data.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `BATTLE_NORMAL` | `BattleElite` | 是 |
| `BATTLE_ELITE` | `BattleElite` | 是 |
| `REST` | `BattleElite` | 是 |
| `EXPEDITION` | `BattleElite` | 是 |
| `DUEL` | `BattleElite` | 是 |
| `INCIDENT` | `BattleElite` | 是 |
| `BATTLE_SHOP` | `BattleElite` | 是 |
| `WISH` | `BattleElite` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->
