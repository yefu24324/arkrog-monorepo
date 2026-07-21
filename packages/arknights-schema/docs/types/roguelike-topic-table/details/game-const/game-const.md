# game-const

本页记录 JSON 逻辑模块 `details/game-const` 中的 2 个强关联类型及其 Schema。

## GameConst

`GameConst` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `GameConstSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/game-const/game-const.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/game-const/game-const.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `initSceneName` | `string` | 是 |
| `failSceneName` | `string` | 是 |
| `hpItemId` | `string` | 是 |
| `goldItemId` | `string` | 是 |
| `populationItemId` | `string` | 是 |
| `squadCapacityItemId` | `string` | 是 |
| `expItemId` | `string` | 是 |
| `initialBandShowGradeFlag` | `boolean` | 是 |
| `bankMaxGold` | `number` | 是 |
| `bankCostId` | `null \| string` | 是 |
| `bankDrawCount` | `number` | 是 |
| `bankDrawLimit` | `number` | 是 |
| `bankRewardCountType` | `string` | 是 |
| `spZoneShopBgmSignal` | `BgmSignal \| null` | 是 |
| `mimicEnemyIds` | `string[]` | 是 |
| `bossIds` | `string[]` | 是 |
| `goldChestTrapId` | `string` | 是 |
| `normBoxTrapId` | `null \| string` | 是 |
| `rareBoxTrapId` | `null \| string` | 是 |
| `badBoxTrapId` | `null \| string` | 是 |
| `toolBoxTrapId` | `null \| string` | 是 |
| `maxHpItemId` | `null \| string` | 是 |
| `shieldItemId` | `null \| string` | 是 |
| `keyItemId` | `null \| string` | 是 |
| `divinationKitItemId` | `null \| string` | 是 |
| `chestKeyCnt` | `number` | 是 |
| `chestKeyItemId` | `null \| string` | 是 |
| `keyColorId` | `null \| string` | 是 |
| `onceNodeTypeList` | `string[]` | 是 |
| `vertNodeCostDialogUseItemIconType` | `boolean` | 是 |
| `gpScoreRatio` | `number` | 是 |
| `overflowUsageSquadBuff` | `null \| string` | 是 |
| `specialTrapId` | `null \| string` | 是 |
| `trapRewardRelicId` | `null \| string` | 是 |
| `unlockRouteItemId` | `null \| string` | 是 |
| `unlockRouteItemCount` | `number` | 是 |
| `hideBattleNodeName` | `null \| string` | 是 |
| `hideBattleNodeDescription` | `null \| string` | 是 |
| `hideNonBattleNodeName` | `null \| string` | 是 |
| `hideNonBattleNodeDescription` | `null \| string` | 是 |
| `charSelectExpeditionConflictToast` | `null \| string` | 是 |
| `charSelectNoUpgradeConflictToast` | `null \| string` | 是 |
| `itemDropTagDict` | `ItemDropTagDict` | 是 |
| `shopRefreshCostId` | `null \| string` | 是 |
| `expeditionLeaveToastFormat` | `null \| string` | 是 |
| `expeditionReturnDescCureUpgrade` | `null \| string` | 是 |
| `expeditionReturnDescUpgrade` | `null \| string` | 是 |
| `expeditionReturnDescCure` | `null \| string` | 是 |
| `expeditionReturnDesc` | `null \| string` | 是 |
| `expeditionSelectDescFormat` | `null \| string` | 是 |
| `expeditionReturnDescItem` | `null \| string` | 是 |
| `expedEndingRelic` | `null \| string` | 是 |
| `expedEndingRelicDesc` | `null \| string` | 是 |
| `expeditionReturnRewardBlackList` | `string[]` | 是 |
| `travelLeaveToastFormat` | `null \| string` | 是 |
| `charSelectTravelConflictToast` | `null \| string` | 是 |
| `travelReturnDescUpgrade` | `null \| string` | 是 |
| `travelReturnDesc` | `null \| string` | 是 |
| `travelReturnDescItem` | `null \| string` | 是 |
| `traderReturnTitle` | `null \| string` | 是 |
| `traderReturnDesc` | `null \| string` | 是 |
| `candleReturnDescCandleUpgrade` | `null \| string` | 是 |
| `candleReturnDescCandle` | `null \| string` | 是 |
| `charSelectCandleConflictToast` | `null \| string` | 是 |
| `charSelectGuidedConflictToast` | `null \| string` | 是 |
| `charSelectNonGuidedConflictToast` | `null \| string` | 是 |
| `gainBuffDiffGrade` | `number` | 是 |
| `dsPredictTips` | `null \| string` | 是 |
| `dsBuffActiveTips` | `null \| string` | 是 |
| `totemDesc` | `null \| string` | 是 |
| `copperGildDesc` | `null \| string` | 是 |
| `relicDesc` | `null \| string` | 是 |
| `buffDesc` | `null \| string` | 是 |
| `refreshNodeItemId` | `null \| string` | 是 |
| `storingRecruitDesc` | `null \| string` | 是 |
| `storingRecruitSucceedToast` | `null \| string` | 是 |
| `specialRecruitReductionDesc` | `null \| string` | 是 |
| `specialRecruitFuncDesc` | `null \| string` | 是 |
| `specialRecruitDetailDesc` | `null \| string` | 是 |
| `portalZones` | `string[]` | 是 |
| `treasureBuffs` | `string[] \| null` | 是 |
| `diffDisplayZoneId` | `null \| string` | 是 |
| `exploreExpOnKill` | `null \| string` | 是 |
| `fusionName` | `null \| string` | 是 |
| `fusionNotifyToast` | `null \| string` | 是 |
| `haveCustomZone` | `boolean` | 是 |
| `gotCharCandleBuffToast` | `null \| string` | 是 |
| `gotCharsCandleBuffToast` | `null \| string` | 是 |
| `stashedRecruitNodeDescription` | `null \| string` | 是 |
| `stashedRecruitEmptyNodeDescription` | `null \| string` | 是 |
| `recruitStashMaxNum` | `number` | 是 |
| `recruitStashMinNum` | `number` | 是 |
| `hasTopicCharSelectMenuButton` | `boolean` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->

## ItemDropTagDict

`ItemDropTagDict` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `ItemDropTagDictSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/game-const/game-const.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/game-const/game-const.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `TREASURE` | `string` | 是 |
| `TOTEM` | `string` | 否 |
| `EXPLORE_TOOL` | `string` | 否 |
| `COPPER` | `string` | 否 |
| `EVIL_TEMPLE` | `string` | 否 |
| `TREASURE_MAP` | `string` | 否 |
| `LOOP_CHIP` | `string` | 否 |
| `STEP` | `string` | 否 |
| `GREED` | `string` | 否 |
| `GOLDEN_AGE` | `string` | 否 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->
