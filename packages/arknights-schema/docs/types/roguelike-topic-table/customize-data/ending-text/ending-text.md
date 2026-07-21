# ending-text

本页记录 JSON 逻辑模块 `customize-data/ending-text` 中的 1 个强关联类型及其 Schema。

## EndingText

`EndingText` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `EndingTextSchema`。

- TypeScript：`src/types/roguelike-topic-table/customize-data/ending-text/ending-text.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/customize-data/ending-text/ending-text.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `summaryVariation` | `string` | 否 |
| `summaryFusion` | `string` | 否 |
| `summaryCapsule` | `string` | 否 |
| `summaryActor` | `string` | 否 |
| `summaryTop` | `string` | 否 |
| `summaryZone` | `string` | 否 |
| `summaryEnding` | `string` | 否 |
| `summaryDifficultyZone` | `null \| string` | 否 |
| `summaryDifficultyEnding` | `null \| string` | 否 |
| `summaryMode` | `string` | 否 |
| `summaryGroup` | `string` | 否 |
| `summarySupport` | `string` | 否 |
| `summaryNormalRecruit` | `string` | 否 |
| `summaryDirectRecruit` | `string` | 否 |
| `summaryFriendRecruit` | `string` | 否 |
| `summaryFreeRecruit` | `string` | 否 |
| `summaryMonthRecruit` | `string` | 否 |
| `summaryUpgrade` | `string` | 否 |
| `summaryCompleteEnding` | `string` | 否 |
| `summaryEachZone` | `string` | 否 |
| `summaryMeetSpZone` | `null \| string` | 否 |
| `summaryPerfectBattle` | `string` | 否 |
| `summaryMeetBattle` | `string` | 否 |
| `summaryMeetEvent` | `string` | 否 |
| `summaryMeetShop` | `string` | 否 |
| `summaryMeetTreasure` | `string` | 否 |
| `summaryMeetSecretpath` | `null \| string` | 否 |
| `summaryExchangeRelic` | `null \| string` | 否 |
| `summaryMeetTrade` | `null \| string` | 否 |
| `summaryBuy` | `string` | 否 |
| `summaryBuyWithPriceId` | `null \| string` | 否 |
| `summaryInvest` | `string` | 否 |
| `summaryGet` | `string` | 否 |
| `summaryRelic` | `string` | 否 |
| `summarySafeHouse` | `string` | 否 |
| `summaryFailEnd` | `string` | 否 |
| `summaryStockRecruitTicket` | `null \| string` | 否 |
| `summaryDuelWin` | `null \| string` | 否 |
| `summaryDuelTie` | `null \| string` | 否 |
| `summaryDuelLose` | `null \| string` | 否 |
| `summaryExpeditionGo` | `null \| string` | 否 |
| `summaryExpeditionBack` | `null \| string` | 否 |
| `summaryMutation` | `string` | 否 |
| `summaryDice` | `string` | 否 |
| `summaryDiceResultGood` | `string` | 否 |
| `summaryDiceResultNormal` | `string` | 否 |
| `summaryDiceResultBad` | `string` | 否 |
| `summaryDiceResultDesc` | `string` | 否 |
| `summaryCommuDesc` | `string` | 否 |
| `summaryHiddenDesc` | `string` | 否 |
| `summaryKnightDesc` | `string` | 否 |
| `summaryGoldDesc` | `string` | 否 |
| `summaryPracticeDesc` | `string` | 否 |
| `summaryCommuEmptyDesc` | `string` | 否 |
| `summaryCommuNotEmptyDesc` | `string` | 否 |
| `summaryHiddenPassedDesc` | `string` | 否 |
| `summaryHiddenNotPassedDesc` | `string` | 否 |
| `summaryKnightPassedDesc` | `string` | 否 |
| `summaryKnightNotPassedDesc` | `string` | 否 |
| `summaryGoldThreshold` | `number` | 否 |
| `summaryGoldHighDesc` | `string` | 否 |
| `summaryGoldLowDesc` | `string` | 否 |
| `summaryPracticeThreshold` | `number` | 否 |
| `summaryPracticeHighDesc` | `string` | 否 |
| `summaryPracticeLowDesc` | `string` | 否 |
| `summaryGetTotem` | `string` | 否 |
| `summaryDemoPointUp` | `string` | 否 |
| `summaryDemoPointDown` | `string` | 否 |
| `summaryDemoGradeUp` | `string` | 否 |
| `summaryDemoGradeDown` | `string` | 否 |
| `summaryVisionPointUp` | `string` | 否 |
| `summaryVisionPointDown` | `string` | 否 |
| `summaryVisionGradeUp` | `string` | 否 |
| `summaryVisionGradeDown` | `string` | 否 |
| `summaryFightWin` | `string` | 否 |
| `summaryFightFail` | `string` | 否 |
| `summaryExchangeTotem` | `string` | 否 |
| `summaryUseTotem` | `string` | 否 |
| `summaryVisionGrade` | `string` | 否 |
| `summaryGetFragment` | `string` | 否 |
| `summaryUseIdea` | `string` | 否 |
| `summaryUseFood` | `string` | 否 |
| `summaryDropFragment` | `string` | 否 |
| `summaryMeetDisaster` | `string` | 否 |
| `summaryLeaveDisaster` | `string` | 否 |
| `summaryEnterAlchemy` | `string` | 否 |
| `summaryAlchemyOthers` | `string` | 否 |
| `summaryAlchemyFragment` | `string` | 否 |
| `summaryWeightOverweight` | `string` | 否 |
| `summaryWeightLimit` | `string` | 否 |
| `summaryWeightSafe` | `string` | 否 |
| `summaryPermUpgrade` | `string` | 否 |
| `summaryTempUpgrade` | `string` | 否 |
| `summarySellFragment` | `string` | 否 |
| `summaryGetCopper` | `string` | 否 |
| `summaryLostCopper` | `string` | 否 |
| `summaryDrawCopper` | `string` | 否 |
| `summaryCopperResultGood` | `string` | 否 |
| `summaryCopperResultBad` | `string` | 否 |
| `summaryCopperResultNormal` | `string` | 否 |
| `summaryCopperCheckSuccess` | `string` | 否 |
| `summaryCopperCheckFail` | `string` | 否 |
| `summaryCopperCheckNormal` | `string` | 否 |
| `summaryMeetWrath` | `string` | 否 |
| `summaryExpeditionGoEndingFour` | `string` | 否 |
| `summaryExpeditionBackEndingFour` | `string` | 否 |
| `summaryExpeditionBackCandle` | `string` | 否 |
| `summaryExpeditionGoEnding` | `string` | 否 |
| `summaryExpeditionBackEnding` | `string` | 否 |
| `summaryHoldCandle` | `string` | 否 |
| `summaryHoldCandleRecruit` | `string` | 否 |
| `summaryHoldCandleUpgrade` | `string` | 否 |
| `summaryExpeditionEndingFourToFive` | `string` | 否 |
| `summaryExchangeSpZoneGet` | `string` | 否 |
| `summaryMeetShopSpZone` | `string` | 否 |
| `summaryBattleFailSpZone` | `string` | 否 |
| `summaryMeetEventLock` | `string` | 否 |
| `summaryTreasureSpZone` | `string` | 否 |
| `summaryMeetExchangeSpZone` | `string` | 否 |
| `summaryMeetTradeSpZone` | `string` | 否 |
| `summaryScrapGot` | `string` | 否 |
| `summaryScrapSold` | `string` | 否 |
| `summaryScrapLost` | `string` | 否 |
| `summaryScrapMove` | `string` | 否 |
| `summaryScrapBuff` | `string` | 否 |
| `summaryScrapLegacy` | `string` | 否 |
| `summaryMeetWeather` | `string` | 否 |
| `summaryWeatherClear` | `string` | 否 |
| `summaryBubbleBandit` | `string` | 否 |
| `summaryBubbleTreasure` | `string` | 否 |
| `summaryBubbleEvent` | `string` | 否 |
| `summarySavageCamp` | `string` | 否 |
| `summaryScrapShop` | `string` | 否 |
| `summaryScrapShopBuy` | `string` | 否 |
| `summaryScrapShopIdentify` | `string` | 否 |
| `summaryDoor` | `string` | 否 |
| `summaryTreeHole` | `string` | 否 |
| `summaryEvacuate` | `string` | 否 |
| `summaryEmployCamp` | `string` | 否 |
| `summaryEmployRecruit` | `string` | 否 |
| `summaryMercenaryLeave` | `string` | 否 |
| `summaryEncounterBattleWin` | `string` | 否 |
| `summaryEncounterBattleLose` | `string` | 否 |
| `summaryExchangeScrap` | `string` | 否 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->
