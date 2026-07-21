# grid-zone

本页记录 JSON 逻辑模块 `modules/grid-zone` 中的 7 个强关联类型及其 Schema。

## BannerIcon

`BannerIcon` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `BannerIconSchema`。

- TypeScript：`src/types/roguelike-topic-table/modules/grid-zone/grid-zone.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/modules/grid-zone/grid-zone.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字面量范围

`"zone_banner_goal_final" \| "zone_banner_goal_boss_3" \| "zone_banner_goal_boss_5" \| "zone_banner_goal_back"`

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## BannerText

`BannerText` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `BannerTextSchema`。

- TypeScript：`src/types/roguelike-topic-table/modules/grid-zone/grid-zone.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/modules/grid-zone/grid-zone.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字面量范围

`"目标：找到<color=#0f907f>险路尽头</color>节点进入下一区域" \| "目标：找到<color=#0f907f>险路恶敌</color>节点并取得胜利" \| "自由探索，行动力耗尽后，将返回林间"`

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## BuoyItemData

`BuoyItemData` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `BuoyItemDataSchema`。

- TypeScript：`src/types/roguelike-topic-table/modules/grid-zone/grid-zone.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/modules/grid-zone/grid-zone.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `itemId` | `string` | 是 |
| `isVisible` | `boolean` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## GridZone

`GridZone` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `GridZoneSchema`。

- TypeScript：`src/types/roguelike-topic-table/modules/grid-zone/grid-zone.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/modules/grid-zone/grid-zone.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `zoneMissionBannerData` | `{ [key: string]: ZoneMissionBannerDatum }` | 是 |
| `scrapSideBarStepZeroHintBannerData` | `{ [key: string]: ScrapSideBarStepZeroHintBannerDatum }` | 是 |
| `buoyItemDatas` | `{ [key: string]: BuoyItemData }` | 是 |
| `moduleConsts` | `GridZoneModuleConsts` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## GridZoneModuleConsts

`GridZoneModuleConsts` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `GridZoneModuleConstsSchema`。

- TypeScript：`src/types/roguelike-topic-table/modules/grid-zone/grid-zone.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/modules/grid-zone/grid-zone.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `savageBubble` | `string` | 是 |
| `secretZoneDisableBuff` | `string` | 是 |
| `maxBannerDifficulty` | `number` | 是 |
| `focusViewBossHintStageId` | `VariationClass` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## ScrapSideBarStepZeroHintBannerDatum

`ScrapSideBarStepZeroHintBannerDatum` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `ScrapSideBarStepZeroHintBannerDatumSchema`。

- TypeScript：`src/types/roguelike-topic-table/modules/grid-zone/grid-zone.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/modules/grid-zone/grid-zone.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `zoneId` | `string` | 是 |
| `hintText` | `string` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## ZoneMissionBannerDatum

`ZoneMissionBannerDatum` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `ZoneMissionBannerDatumSchema`。

- TypeScript：`src/types/roguelike-topic-table/modules/grid-zone/grid-zone.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/modules/grid-zone/grid-zone.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `zoneId` | `string` | 是 |
| `bannerText` | `BannerText` | 是 |
| `bannerIcon` | `BannerIcon` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->
