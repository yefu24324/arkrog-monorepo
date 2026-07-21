# shop-dialog-data

本页记录 JSON 逻辑模块 `details/shop-dialog-data` 中的 2 个强关联类型及其 Schema。

## ShopDialogData

`ShopDialogData` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `ShopDialogDataSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/shop-dialog-data/shop-dialog-data.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/shop-dialog-data/shop-dialog-data.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `types` | `ShopDialogDataTypes` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## ShopDialogDataTypes

`ShopDialogDataTypes` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `ShopDialogDataTypesSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/shop-dialog-data/shop-dialog-data.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/shop-dialog-data/shop-dialog-data.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `BUY_SELECT` | `FluffyBuySelect` | 是 |
| `BANK_ENTRY` | `BuyConfirm` | 是 |
| `BANK_INVEST` | `BuyConfirm` | 是 |
| `BANK_WITHDRAWAL` | `BuyConfirm` | 是 |
| `BANK_FAULTY` | `BuyConfirm` | 是 |
| `BANK_REWARD_UNLOCK` | `BuyConfirm` | 是 |
| `OUTER_NORMAL` | `BuyConfirm` | 是 |
| `OUTER_REWARD` | `BuyConfirm` | 是 |
| `FIGHT_BOSS` | `BuyConfirm` | 否 |
| `RECYCLE_SELECT` | `BuyConfirm` | 否 |
| `RECYCLE_CONFIRM` | `BuyConfirm` | 否 |
| `BUY_CONFIRM` | `BuyConfirm` | 否 |
| `RECYCLE_CHANGE` | `BuyConfirm` | 否 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->
