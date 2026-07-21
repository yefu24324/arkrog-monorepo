# relic-params

本页记录 JSON 逻辑模块 `details/relic-params` 中的 3 个强关联类型及其 Schema。

## CheckCharBoxParam

`CheckCharBoxParam` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `CheckCharBoxParamSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/relic-params/relic-params.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/relic-params/relic-params.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `valueProfessionMask` | `Profession` | 是 |
| `valueStrs` | `string[] \| null` | 是 |
| `valueInt` | `number` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## CheckCharBoxType

`CheckCharBoxType` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `CheckCharBoxTypeSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/relic-params/relic-params.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/relic-params/relic-params.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字面量范围

`"PROFESSION" \| "SUB_PROFESSION" \| "UPGRADE"`

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## RelicParam

`RelicParam` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `RelicParamSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/relic-params/relic-params.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/relic-params/relic-params.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `id` | `string` | 是 |
| `checkCharBoxTypes` | `CheckCharBoxType[]` | 是 |
| `checkCharBoxParams` | `CheckCharBoxParam[]` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->
