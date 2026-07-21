# bank-rewards

本页记录 JSON 逻辑模块 `details/bank-rewards` 中的 3 个强关联类型及其 Schema。

## BankReward

`BankReward` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `BankRewardSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/bank-rewards/bank-rewards.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/bank-rewards/bank-rewards.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `rewardId` | `RewardId` | 是 |
| `unlockGoldCnt` | `number` | 是 |
| `rewardType` | `RewardType` | 是 |
| `desc` | `string` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## RewardId

`RewardId` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `RewardIdSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/bank-rewards/bank-rewards.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/bank-rewards/bank-rewards.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字面量范围

`"bank_reward_5" \| "bank_reward_4" \| "bank_reward_3" \| "bank_reward_2" \| "bank_reward_1"`

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## RewardType

`RewardType` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `RewardTypeSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/bank-rewards/bank-rewards.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/bank-rewards/bank-rewards.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字面量范围

`"ADD_SHOP_POS" \| "UNLOCK_ITEM" \| "UNLOCK_WITHDRAW" \| "UNLOCK_SHOP_BATTLE"`

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->
