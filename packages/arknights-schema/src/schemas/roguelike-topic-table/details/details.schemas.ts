/**

 * JSON 逻辑模块 `details/details` 的 Zod Schema。

 */

import { z } from "zod";

import type { Detail } from "../../../types/roguelike-topic-table/details/details.types.js";

import { ActivitySchema } from "./activity/activity.schemas.js";

import { ArchiveCompSchema } from "./archive-comp/archive-comp.schemas.js";

import { ArchiveUnlockCondSchema } from "./archive-unlock-cond/archive-unlock-cond.schemas.js";

import { BandRefSchema } from "./band-ref/band-ref.schemas.js";

import { BankRewardSchema } from "./bank-rewards/bank-rewards.schemas.js";

import { BattleLoadingTipSchema } from "./battle-loading-tips/battle-loading-tips.schemas.js";

import { BattleSummeryDescriptionsSchema } from "./battle-summery-descriptions/battle-summery-descriptions.schemas.js";

import { CapsuleDictSchema } from "./capsule-dict/capsule-dict.schemas.js";

import { ChallengeElementSchema } from "./challenges/challenges.schemas.js";

import { CharBuffDataSchema } from "./char-buff-data/char-buff-data.schemas.js";

import { ChoiceSceneSchema } from "./choice-scenes/choice-scenes.schemas.js";

import { ChoiceSchema } from "./choices/choices.schemas.js";

import { CustomTicketsSchema } from "./custom-tickets/custom-tickets.schemas.js";

import { DetailConstSchema } from "./detail-const/detail-const.schemas.js";

import { DetailDifficultySchema } from "./difficulties/difficulties.schemas.js";

import { DifficultyUpgradeRelicGroupSchema } from "./difficulty-upgrade-relic-groups/difficulty-upgrade-relic-groups.schemas.js";

import { EndingDetailListSchema } from "./ending-detail-list/ending-detail-list.schemas.js";

import { EndingRelicDetailListSchema } from "./ending-relic-detail-list/ending-relic-detail-list.schemas.js";

import { EndingSchema } from "./endings/endings.schemas.js";

import { DetailEnrollSchema } from "./enrolls/enrolls.schemas.js";

import { ExploreToolsSchema } from "./explore-tools/explore-tools.schemas.js";

import { FailEndingsSchema } from "./fail-endings/fail-endings.schemas.js";

import { FusionDataSchema } from "./fusion-data/fusion-data.schemas.js";

import { GameConstSchema } from "./game-const/game-const.schemas.js";

import { GrandPrizeSchema } from "./grand-prizes/grand-prizes.schemas.js";

import { InitSchema } from "./init/init.schemas.js";

import { ItemSchema } from "./items/items.schemas.js";

import { LegacyItemSchema } from "./legacy-items/legacy-items.schemas.js";

import { MilestoneUpdateSchema } from "./milestone-updates/milestone-updates.schemas.js";

import { MilestoneSchema } from "./milestones/milestones.schemas.js";

import { MonthMissionSchema } from "./month-mission/month-mission.schemas.js";

import { MonthSquadSchema } from "./month-squad/month-squad.schemas.js";

import { NodeTypeDatumSchema } from "./node-type-data/node-type-data.schemas.js";

import { RecruitTicketsSchema } from "./recruit-tickets/recruit-tickets.schemas.js";

import { RelicParamSchema } from "./relic-params/relic-params.schemas.js";

import { RelicTipsDataSchema } from "./relic-tips-data/relic-tips-data.schemas.js";

import { DetailRelicSchema } from "./relics/relics.schemas.js";

import { RollNodeDataSchema } from "./roll-node-data/roll-node-data.schemas.js";

import { ShopDialogDataSchema } from "./shop-dialog-data/shop-dialog-data.schemas.js";

import { SquadBuffDataSchema } from "./squad-buff-data/squad-buff-data.schemas.js";

import { StageSchema } from "./stages/stages.schemas.js";

import { StashableTicketSchema } from "./stashable-tickets/stashable-tickets.schemas.js";

import { StyleConfigSchema } from "./style-config/style-config.schemas.js";

import { StylesSchema } from "./styles/styles.schemas.js";

import { DetailSubTypeDatumSchema } from "./sub-type-data/sub-type-data.schemas.js";

import { TaskDatumSchema } from "./task-data/task-data.schemas.js";

import { TreasuresSchema } from "./treasures/treasures.schemas.js";

import { UpdateSchema } from "./updates/updates.schemas.js";

import { UpgradeTicketsSchema } from "./upgrade-tickets/upgrade-tickets.schemas.js";

import { ZoneValueSchema } from "./zones/zones.schemas.js";

import { VariationClassSchema } from "../shared/core.schemas.js";

import {
  Ro4FailEnding1Schema,
  Rogue2__Mutation4Schema,
  Rogue3__ExploreTool1Schema,
} from "../shared/rogue-variants.schemas.js";

/**
 * roguelike_topic_table.json 中 Detail 的运行时校验结构。
 */
export const DetailSchema = z
  .strictObject({
    updates: z.array(UpdateSchema),
    enrolls: z.record(z.string(), DetailEnrollSchema),
    milestones: z.array(MilestoneSchema),
    milestoneUpdates: z.array(MilestoneUpdateSchema),
    grandPrizes: z.array(GrandPrizeSchema),
    monthMission: z.array(MonthMissionSchema),
    monthSquad: MonthSquadSchema,
    challenges: z.record(z.string(), ChallengeElementSchema),
    difficulties: z.array(DetailDifficultySchema),
    bankRewards: z.array(BankRewardSchema),
    archiveComp: ArchiveCompSchema,
    archiveUnlockCond: ArchiveUnlockCondSchema,
    detailConst: DetailConstSchema,
    init: z.array(InitSchema),
    stages: z.record(z.string(), StageSchema),
    zones: z.record(z.string(), ZoneValueSchema),
    variation: VariationClassSchema,
    traps: z.record(z.string(), Rogue3__ExploreTool1Schema),
    recruitTickets: RecruitTicketsSchema,
    upgradeTickets: UpgradeTicketsSchema,
    customTickets: CustomTicketsSchema,
    stashableTickets: z.record(z.string(), StashableTicketSchema),
    relics: z.record(z.string(), DetailRelicSchema),
    relicParams: z.record(z.string(), RelicParamSchema),
    recruitGrps: z.record(z.string(), Ro4FailEnding1Schema),
    choices: z.record(z.string(), ChoiceSchema),
    choiceScenes: z.record(z.string(), ChoiceSceneSchema),
    nodeTypeData: z.record(z.string(), NodeTypeDatumSchema),
    subTypeData: z.array(DetailSubTypeDatumSchema),
    variationData: z.record(z.string(), Rogue2__Mutation4Schema),
    fusionData: FusionDataSchema,
    charBuffData: CharBuffDataSchema,
    squadBuffData: SquadBuffDataSchema,
    taskData: z.record(z.string(), TaskDatumSchema),
    gameConst: GameConstSchema,
    shopDialogData: ShopDialogDataSchema,
    capsuleDict: z.union([z.record(z.string(), CapsuleDictSchema), z.null()]),
    endings: z.record(z.string(), EndingSchema),
    failEndings: FailEndingsSchema,
    battleSummeryDescriptions: BattleSummeryDescriptionsSchema,
    battleLoadingTips: z.array(BattleLoadingTipSchema),
    items: z.record(z.string(), ItemSchema),
    bandRef: z.record(z.string(), BandRefSchema),
    endingDetailList: z.array(EndingDetailListSchema),
    endingRelicDetailList: z.array(EndingRelicDetailListSchema),
    treasures: TreasuresSchema,
    difficultyUpgradeRelicGroups: z.record(
      z.string(),
      DifficultyUpgradeRelicGroupSchema,
    ),
    styles: StylesSchema,
    styleConfig: StyleConfigSchema,
    exploreTools: ExploreToolsSchema,
    rollNodeData: RollNodeDataSchema,
    relicTipsData: RelicTipsDataSchema,
    legacyItems: z.record(z.string(), LegacyItemSchema),
    activity: ActivitySchema,
  })
  .describe(
    "roguelike_topic_table.json 中 Detail 的运行时校验结构。",
  ) satisfies z.ZodType<Detail>;
