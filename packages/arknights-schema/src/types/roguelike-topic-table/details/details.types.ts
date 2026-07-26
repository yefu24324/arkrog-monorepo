/**

 * JSON 逻辑模块 `details/details` 的显式类型。

 */

import type { Activity } from "./activity/activity.types.js";

import type { ArchiveComp } from "./archive-comp/archive-comp.types.js";

import type { ArchiveUnlockCond } from "./archive-unlock-cond/archive-unlock-cond.types.js";

import type { BandRef } from "./band-ref/band-ref.types.js";

import type { BankReward } from "./bank-rewards/bank-rewards.types.js";

import type { BattleLoadingTip } from "./battle-loading-tips/battle-loading-tips.types.js";

import type { BattleSummeryDescriptions } from "./battle-summery-descriptions/battle-summery-descriptions.types.js";

import type { CapsuleDict } from "./capsule-dict/capsule-dict.types.js";

import type { ChallengeElement } from "./challenges/challenges.types.js";

import type { CharBuffData } from "./char-buff-data/char-buff-data.types.js";

import type { ChoiceScene } from "./choice-scenes/choice-scenes.types.js";

import type { Choice } from "./choices/choices.types.js";

import type { CustomTickets } from "./custom-tickets/custom-tickets.types.js";

import type { DetailConst } from "./detail-const/detail-const.types.js";

import type { DetailDifficulty } from "./difficulties/difficulties.types.js";

import type { DifficultyUpgradeRelicGroup } from "./difficulty-upgrade-relic-groups/difficulty-upgrade-relic-groups.types.js";

import type { EndingDetailList } from "./ending-detail-list/ending-detail-list.types.js";

import type { EndingRelicDetailList } from "./ending-relic-detail-list/ending-relic-detail-list.types.js";

import type { Ending } from "./endings/endings.types.js";

import type { DetailEnroll } from "./enrolls/enrolls.types.js";

import type { ExploreTools } from "./explore-tools/explore-tools.types.js";

import type { FailEndings } from "./fail-endings/fail-endings.types.js";

import type { FusionData } from "./fusion-data/fusion-data.types.js";

import type { GameConst } from "./game-const/game-const.types.js";

import type { GrandPrize } from "./grand-prizes/grand-prizes.types.js";

import type { Init } from "./init/init.types.js";

import type { Item } from "./items/items.types.js";

import type { LegacyItem } from "./legacy-items/legacy-items.types.js";

import type { MilestoneUpdate } from "./milestone-updates/milestone-updates.types.js";

import type { Milestone } from "./milestones/milestones.types.js";

import type { MonthMission } from "./month-mission/month-mission.types.js";

import type { MonthSquad } from "./month-squad/month-squad.types.js";

import type { NodeTypeDatum } from "./node-type-data/node-type-data.types.js";

import type { RecruitTickets } from "./recruit-tickets/recruit-tickets.types.js";

import type { RelicParam } from "./relic-params/relic-params.types.js";

import type { RelicTipsData } from "./relic-tips-data/relic-tips-data.types.js";

import type { DetailRelic } from "./relics/relics.types.js";

import type { RollNodeData } from "./roll-node-data/roll-node-data.types.js";

import type { ShopDialogData } from "./shop-dialog-data/shop-dialog-data.types.js";

import type { SquadBuffData } from "./squad-buff-data/squad-buff-data.types.js";

import type { Stage } from "./stages/stages.types.js";

import type { StashableTicket } from "./stashable-tickets/stashable-tickets.types.js";

import type { StyleConfig } from "./style-config/style-config.types.js";

import type { Styles } from "./styles/styles.types.js";

import type { DetailSubTypeDatum } from "./sub-type-data/sub-type-data.types.js";

import type { TaskDatum } from "./task-data/task-data.types.js";

import type { Treasures } from "./treasures/treasures.types.js";

import type { Update } from "./updates/updates.types.js";

import type { UpgradeTickets } from "./upgrade-tickets/upgrade-tickets.types.js";

import type { ZoneValue } from "./zones/zones.types.js";

import type { VariationClass } from "../shared/core.types.js";

import type {
  Ro4FailEnding1,
  Rogue2__Mutation4,
  Rogue3__ExploreTool1,
} from "../shared/rogue-variants.types.js";

/**
 * roguelike_topic_table.json 中 Detail 的显式 TypeScript 定义。
 *
 * 字段语义应直接维护在类型与字段的源码注释中。
 */
export interface Detail {
  /** 原始数据字段 `updates`。 */
  updates: Update[];
  /** 原始数据字段 `enrolls`。 */
  enrolls: { [key: string]: DetailEnroll };
  /** 原始数据字段 `milestones`。 */
  milestones: Milestone[];
  /** 原始数据字段 `milestoneUpdates`。 */
  milestoneUpdates: MilestoneUpdate[];
  /** 原始数据字段 `grandPrizes`。 */
  grandPrizes: GrandPrize[];
  /** 原始数据字段 `monthMission`。 */
  monthMission: MonthMission[];
  /** 原始数据字段 `monthSquad`。 */
  monthSquad: MonthSquad;
  /** 原始数据字段 `challenges`。 */
  challenges: Record<string, ChallengeElement>;
  /** 原始数据字段 `difficulties`。 */
  difficulties: DetailDifficulty[];
  /** 原始数据字段 `bankRewards`。 */
  bankRewards: BankReward[];
  /** 原始数据字段 `archiveComp`。 */
  archiveComp: ArchiveComp;
  /** 原始数据字段 `archiveUnlockCond`。 */
  archiveUnlockCond: ArchiveUnlockCond;
  /** 原始数据字段 `detailConst`。 */
  detailConst: DetailConst;
  /** 原始数据字段 `init`。 */
  init: Init[];
  /** 原始数据字段 `stages`。 */
  stages: { [key: string]: Stage };
  /** 原始数据字段 `zones`。 */
  zones: { [key: string]: ZoneValue };
  /** 原始数据字段 `variation`。 */
  variation: VariationClass;
  /** 原始数据字段 `traps`。 */
  traps: { [key: string]: Rogue3__ExploreTool1 };
  /** 原始数据字段 `recruitTickets`。 */
  recruitTickets: RecruitTickets;
  /** 原始数据字段 `upgradeTickets`。 */
  upgradeTickets: UpgradeTickets;
  /** 原始数据字段 `customTickets`。 */
  customTickets: CustomTickets;
  /** 原始数据字段 `stashableTickets`。 */
  stashableTickets: { [key: string]: StashableTicket };
  /** 原始数据字段 `relics`。 */
  relics: { [key: string]: DetailRelic };
  /** 原始数据字段 `relicParams`。 */
  relicParams: { [key: string]: RelicParam };
  /** 原始数据字段 `recruitGrps`。 */
  recruitGrps: { [key: string]: Ro4FailEnding1 };
  /** 原始数据字段 `choices`。 */
  choices: { [key: string]: Choice };
  /** 原始数据字段 `choiceScenes`。 */
  choiceScenes: { [key: string]: ChoiceScene };
  /** 原始数据字段 `nodeTypeData`。 */
  nodeTypeData: { [key: string]: NodeTypeDatum };
  /** 原始数据字段 `subTypeData`。 */
  subTypeData: DetailSubTypeDatum[];
  /** 原始数据字段 `variationData`。 */
  variationData: { [key: string]: Rogue2__Mutation4 };
  /** 原始数据字段 `fusionData`。 */
  fusionData: FusionData;
  /** 原始数据字段 `charBuffData`。 */
  charBuffData: CharBuffData;
  /** 原始数据字段 `squadBuffData`。 */
  squadBuffData: SquadBuffData;
  /** 原始数据字段 `taskData`。 */
  taskData: { [key: string]: TaskDatum };
  /** 原始数据字段 `gameConst`。 */
  gameConst: GameConst;
  /** 原始数据字段 `shopDialogData`。 */
  shopDialogData: ShopDialogData;
  /** 原始数据字段 `capsuleDict`。 */
  capsuleDict: { [key: string]: CapsuleDict } | null;
  /** 原始数据字段 `endings`。 */
  endings: { [key: string]: Ending };
  /** 原始数据字段 `failEndings`。 */
  failEndings: FailEndings;
  /** 原始数据字段 `battleSummeryDescriptions`。 */
  battleSummeryDescriptions: BattleSummeryDescriptions;
  /** 原始数据字段 `battleLoadingTips`。 */
  battleLoadingTips: BattleLoadingTip[];
  /** 原始数据字段 `items`。 */
  items: { [key: string]: Item };
  /** 原始数据字段 `bandRef`。 */
  bandRef: { [key: string]: BandRef };
  /** 原始数据字段 `endingDetailList`。 */
  endingDetailList: EndingDetailList[];
  /** 原始数据字段 `endingRelicDetailList`。 */
  endingRelicDetailList: EndingRelicDetailList[];
  /** 原始数据字段 `treasures`。 */
  treasures: Treasures;
  /** 原始数据字段 `difficultyUpgradeRelicGroups`。 */
  difficultyUpgradeRelicGroups: { [key: string]: DifficultyUpgradeRelicGroup };
  /** 原始数据字段 `styles`。 */
  styles: Styles;
  /** 原始数据字段 `styleConfig`。 */
  styleConfig: StyleConfig;
  /** 原始数据字段 `exploreTools`。 */
  exploreTools: ExploreTools;
  /** 原始数据字段 `rollNodeData`。 */
  rollNodeData: RollNodeData;
  /** 原始数据字段 `relicTipsData`。 */
  relicTipsData: RelicTipsData;
  /** 原始数据字段 `legacyItems`。 */
  legacyItems: { [key: string]: LegacyItem };
  /** 原始数据字段 `activity`。 */
  activity: Activity;
}
