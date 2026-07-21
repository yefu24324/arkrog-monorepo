# scrap-shop-dialog-data

本页记录 JSON 逻辑模块 `customize-data/scrap-shop-dialog-data` 中的 2 个强关联类型及其 Schema。

## ScrapShopDialogData

`ScrapShopDialogData` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `ScrapShopDialogDataSchema`。

- TypeScript：`src/types/roguelike-topic-table/customize-data/scrap-shop-dialog-data/scrap-shop-dialog-data.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/customize-data/scrap-shop-dialog-data/scrap-shop-dialog-data.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `types` | `ScrapShopDialogDataTypes` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## ScrapShopDialogDataTypes

`ScrapShopDialogDataTypes` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `ScrapShopDialogDataTypesSchema`。

- TypeScript：`src/types/roguelike-topic-table/customize-data/scrap-shop-dialog-data/scrap-shop-dialog-data.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/customize-data/scrap-shop-dialog-data/scrap-shop-dialog-data.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `BUY_SELECT` | `BuyConfirm` | 是 |
| `BUY_SELECT_SCRAP_MOVE` | `BuyConfirm` | 是 |
| `BUY_SELECT_SCRAP_GOODS` | `BuyConfirm` | 是 |
| `BUY_SELECT_SCRAP_PASSIVE` | `BuyConfirm` | 是 |
| `BUY_CONFIRM` | `BuyConfirm` | 是 |
| `RECYCLE_CHANGE` | `BuyConfirm` | 是 |
| `RECYCLE_SELECT` | `BuyConfirm` | 是 |
| `RECYCLE_CONFIRM` | `BuyConfirm` | 是 |
| `SEED_ENTRY` | `BuyConfirm` | 是 |
| `SEED_CONFIRM` | `BuyConfirm` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->
