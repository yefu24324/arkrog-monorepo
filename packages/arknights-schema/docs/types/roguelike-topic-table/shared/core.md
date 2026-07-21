# core

本页记录 JSON 逻辑模块 `shared` 中的 5 个强关联类型及其 Schema。

## BgmSignal

`BgmSignal` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `BgmSignalSchema`。

- TypeScript：`src/types/roguelike-topic-table/shared/core.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/shared/core.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字面量范围

`"ON_ROGUELIKE_MAP" \| "ON_ROGUELIKE_MAPHIGH" \| "ON_ROGUELIKE_MAPLOW" \| "ON_ROGUELIKE_DEEPMAPHIGH" \| "ON_ROGUELIKE_SECRET_MAP" \| "ON_ROGUELIKE_MAPBOSS" \| "ON_ROGUELIKE_MAPSECRET" \| "ON_ROGUELIKE_MAPBOSS4" \| "ON_ROGUELIKE_MAPAMIYA" \| "ON_ROGUELIKE_MAPSKY"`

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## Id

`Id` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `IdSchema`。

- TypeScript：`src/types/roguelike-topic-table/shared/core.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/shared/core.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字面量范围

`"rogue_5_gild_1" \| "rogue_5_gild_2" \| "rogue_5_gild_3" \| "rogue_5_gild_4" \| "rogue_5_gild_5" \| "rogue_5_gild_6" \| "rogue_5_gild_7" \| "rogue_5_gild_8" \| "rogue_5_gild_9" \| "rogue_5_gild_10"`

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## None

`None` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `NoneSchema`。

- TypeScript：`src/types/roguelike-topic-table/shared/core.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/shared/core.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `content` | `string[]` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## Pos

`Pos` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `PosSchema`。

- TypeScript：`src/types/roguelike-topic-table/shared/core.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/shared/core.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字面量范围

`"LOCATION" \| "EFFECT" \| "AFFIX"`

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## VariationClass

`VariationClass` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `VariationClassSchema`。

- TypeScript：`src/types/roguelike-topic-table/shared/core.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/shared/core.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->
