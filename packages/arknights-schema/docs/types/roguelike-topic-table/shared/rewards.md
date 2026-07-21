# rewards

本页记录 JSON 逻辑模块 `shared` 中的 5 个强关联类型及其 Schema。

## BuyConfirm

`BuyConfirm` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `BuyConfirmSchema`。

- TypeScript：`src/types/roguelike-topic-table/shared/rewards.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/shared/rewards.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `groups` | `BuyConfirmGroups` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## BuyConfirmGroups

`BuyConfirmGroups` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `BuyConfirmGroupsSchema`。

- TypeScript：`src/types/roguelike-topic-table/shared/rewards.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/shared/rewards.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `NONE` | `None` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## FluffyBuySelect

`FluffyBuySelect` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `FluffyBuySelectSchema`。

- TypeScript：`src/types/roguelike-topic-table/shared/rewards.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/shared/rewards.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `groups` | `FluffyGroups` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## FluffyGroups

`FluffyGroups` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `FluffyGroupsSchema`。

- TypeScript：`src/types/roguelike-topic-table/shared/rewards.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/shared/rewards.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `NONE` | `None` | 是 |
| `RECRUIT_TICKET` | `None` | 是 |
| `RELIC` | `None` | 是 |
| `ACTIVE_TOOL` | `None` | 是 |
| `COPPER` | `None` | 否 |
| `DIVINATION_KIT` | `None` | 否 |
| `VISION` | `None` | 否 |
| `SCRAP` | `None` | 否 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## Reward

`Reward` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `RewardSchema`。

- TypeScript：`src/types/roguelike-topic-table/shared/rewards.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/shared/rewards.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `id` | `string` | 是 |
| `count` | `number` | 是 |
| `type` | `ItemTypeEnum` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->
