# details

本页记录 JSON 逻辑模块 `details` 中的 1 个强关联类型及其 Schema。

## Detail

`Detail` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `DetailSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/details.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/details.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `updates` | `Update[]` | 是 |
| `enrolls` | `{ [key: string]: DetailEnroll }` | 是 |
| `milestones` | `Milestone[]` | 是 |
| `milestoneUpdates` | `MilestoneUpdate[]` | 是 |
| `grandPrizes` | `GrandPrize[]` | 是 |
| `monthMission` | `MonthMission[]` | 是 |
| `monthSquad` | `MonthSquad` | 是 |
| `challenges` | `Record<string, ChallengeElement>` | 是 |
| `difficulties` | `DetailDifficulty[]` | 是 |
| `bankRewards` | `BankReward[]` | 是 |
| `archiveComp` | `ArchiveComp` | 是 |
| `archiveUnlockCond` | `ArchiveUnlockCond` | 是 |
| `detailConst` | `DetailConst` | 是 |
| `init` | `Init[]` | 是 |
| `stages` | `{ [key: string]: Stage }` | 是 |
| `zones` | `{ [key: string]: ZoneValue }` | 是 |
| `variation` | `VariationClass` | 是 |
| `traps` | `{ [key: string]: Rogue3__ExploreTool1 }` | 是 |
| `recruitTickets` | `RecruitTickets` | 是 |
| `upgradeTickets` | `UpgradeTickets` | 是 |
| `customTickets` | `CustomTickets` | 是 |
| `stashableTickets` | `{ [key: string]: StashableTicket }` | 是 |
| `relics` | `{ [key: string]: DetailRelic }` | 是 |
| `relicParams` | `{ [key: string]: RelicParam }` | 是 |
| `recruitGrps` | `{ [key: string]: Ro4FailEnding1 }` | 是 |
| `choices` | `{ [key: string]: Choice }` | 是 |
| `choiceScenes` | `{ [key: string]: ChoiceScene }` | 是 |
| `nodeTypeData` | `{ [key: string]: NodeTypeDatum }` | 是 |
| `subTypeData` | `DetailSubTypeDatum[]` | 是 |
| `variationData` | `{ [key: string]: Rogue2__Mutation4 }` | 是 |
| `fusionData` | `FusionData` | 是 |
| `charBuffData` | `CharBuffData` | 是 |
| `squadBuffData` | `SquadBuffData` | 是 |
| `taskData` | `{ [key: string]: TaskDatum }` | 是 |
| `gameConst` | `GameConst` | 是 |
| `shopDialogData` | `ShopDialogData` | 是 |
| `capsuleDict` | `{ [key: string]: CapsuleDict } \| null` | 是 |
| `endings` | `{ [key: string]: Ending }` | 是 |
| `failEndings` | `FailEndings` | 是 |
| `battleSummeryDescriptions` | `BattleSummeryDescriptions` | 是 |
| `battleLoadingTips` | `BattleLoadingTip[]` | 是 |
| `items` | `{ [key: string]: Item }` | 是 |
| `bandRef` | `{ [key: string]: BandRef }` | 是 |
| `endingDetailList` | `EndingDetailList[]` | 是 |
| `endingRelicDetailList` | `EndingRelicDetailList[]` | 是 |
| `treasures` | `Treasures` | 是 |
| `difficultyUpgradeRelicGroups` | `{ [key: string]: DifficultyUpgradeRelicGroup }` | 是 |
| `styles` | `Styles` | 是 |
| `styleConfig` | `StyleConfig` | 是 |
| `exploreTools` | `ExploreTools` | 是 |
| `rollNodeData` | `RollNodeData` | 是 |
| `relicTipsData` | `RelicTipsData` | 是 |
| `legacyItems` | `{ [key: string]: LegacyItem }` | 是 |
| `activity` | `Activity` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->
