# vision

本页记录 JSON 逻辑模块 `modules/vision` 中的 5 个强关联类型及其 Schema。

## Vision

`Vision` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `VisionSchema`。

- TypeScript：`src/types/roguelike-topic-table/modules/vision/vision.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/modules/vision/vision.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `visionDatas` | `{ [key: string]: VisionData }` | 是 |
| `visionChoices` | `{ [key: string]: VisionChoice }` | 是 |
| `moduleConsts` | `VisionModuleConsts` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## VisionChoice

`VisionChoice` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `VisionChoiceSchema`。

- TypeScript：`src/types/roguelike-topic-table/modules/vision/vision.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/modules/vision/vision.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `value` | `number` | 是 |
| `type` | `VisionChoiceType` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## VisionChoiceType

`VisionChoiceType` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `VisionChoiceTypeSchema`。

- TypeScript：`src/types/roguelike-topic-table/modules/vision/vision.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/modules/vision/vision.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字面量范围

`"LOWER"`

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## VisionData

`VisionData` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `VisionDataSchema`。

- TypeScript：`src/types/roguelike-topic-table/modules/vision/vision.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/modules/vision/vision.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `sightNum` | `number` | 是 |
| `level` | `number` | 是 |
| `canForesee` | `boolean` | 是 |
| `dividedDis` | `number` | 是 |
| `status` | `string` | 是 |
| `clr` | `string` | 是 |
| `desc1` | `string` | 是 |
| `desc2` | `string` | 是 |
| `icon` | `string` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## VisionModuleConsts

`VisionModuleConsts` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `VisionModuleConstsSchema`。

- TypeScript：`src/types/roguelike-topic-table/modules/vision/vision.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/modules/vision/vision.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `maxVision` | `number` | 是 |
| `totemBottomDescription` | `string` | 是 |
| `chestBottomDescription` | `string` | 是 |
| `goodsBottomDescription` | `string` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->
