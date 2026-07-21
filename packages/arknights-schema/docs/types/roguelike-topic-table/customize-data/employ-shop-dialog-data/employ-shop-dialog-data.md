# employ-shop-dialog-data

本页记录 JSON 逻辑模块 `customize-data/employ-shop-dialog-data` 中的 4 个强关联类型及其 Schema。

## EmployShopDialogData

`EmployShopDialogData` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `EmployShopDialogDataSchema`。

- TypeScript：`src/types/roguelike-topic-table/customize-data/employ-shop-dialog-data/employ-shop-dialog-data.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/customize-data/employ-shop-dialog-data/employ-shop-dialog-data.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `types` | `EmployShopDialogDataTypes` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## EmployShopDialogDataTypes

`EmployShopDialogDataTypes` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `EmployShopDialogDataTypesSchema`。

- TypeScript：`src/types/roguelike-topic-table/customize-data/employ-shop-dialog-data/employ-shop-dialog-data.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/customize-data/employ-shop-dialog-data/employ-shop-dialog-data.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `BUY_SELECT` | `PurpleBuySelect` | 是 |
| `QUIT_SELECT` | `BuyConfirm` | 是 |
| `BUY_CONFIRM` | `BuyConfirm` | 是 |
| `CANNOT_AFFORD` | `BuyConfirm` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## PurpleBuySelect

`PurpleBuySelect` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `PurpleBuySelectSchema`。

- TypeScript：`src/types/roguelike-topic-table/customize-data/employ-shop-dialog-data/employ-shop-dialog-data.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/customize-data/employ-shop-dialog-data/employ-shop-dialog-data.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `groups` | `PurpleGroups` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## PurpleGroups

`PurpleGroups` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `PurpleGroupsSchema`。

- TypeScript：`src/types/roguelike-topic-table/customize-data/employ-shop-dialog-data/employ-shop-dialog-data.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/customize-data/employ-shop-dialog-data/employ-shop-dialog-data.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `NONE` | `None` | 是 |
| `CHARACTER` | `None` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->
