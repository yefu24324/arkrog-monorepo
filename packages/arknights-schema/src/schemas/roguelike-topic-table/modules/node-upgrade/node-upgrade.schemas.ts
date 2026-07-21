/**

 * JSON 逻辑模块 `modules/node-upgrade/node-upgrade` 的 Zod Schema。

 */

import { z } from "zod";

import type {
  Alchemy,
  AlchemyNodeType,
  CostItemId,
  NodeUpgrade,
  NodeUpgradeDataMap,
  PermItemList,
  TempItemList,
} from "../../../../types/roguelike-topic-table/modules/node-upgrade/node-upgrade.types.js";

/**
 * roguelike_topic_table.json 中 AlchemyNodeType 的运行时校验结构。
 */
export const AlchemyNodeTypeSchema = z
  .enum(["ALCHEMY", "BATTLE_SHOP", "REST"])
  .describe(
    "roguelike_topic_table.json 中 AlchemyNodeType 的运行时校验结构。",
  ) satisfies z.ZodType<AlchemyNodeType>;

/**
 * roguelike_topic_table.json 中 CostItemId 的运行时校验结构。
 */
export const CostItemIdSchema = z
  .literal("rogue_4_fragment_I_1")
  .describe(
    "roguelike_topic_table.json 中 CostItemId 的运行时校验结构。",
  ) satisfies z.ZodType<CostItemId>;

/**
 * roguelike_topic_table.json 中 PermItemList 的运行时校验结构。
 */
export const PermItemListSchema = z
  .strictObject({
    upgradeId: z.string(),
    nodeType: AlchemyNodeTypeSchema,
    nodeLevel: z.number(),
    costItemId: CostItemIdSchema,
    costItemCount: z.number(),
    desc: z.string(),
    nodeName: z.string(),
  })
  .describe(
    "roguelike_topic_table.json 中 PermItemList 的运行时校验结构。",
  ) satisfies z.ZodType<PermItemList>;

/**
 * roguelike_topic_table.json 中 TempItemList 的运行时校验结构。
 */
export const TempItemListSchema = z
  .strictObject({
    upgradeId: z.string(),
    nodeType: AlchemyNodeTypeSchema,
    sortId: z.number(),
    costItemId: CostItemIdSchema,
    costItemCount: z.number(),
    desc: z.string(),
  })
  .describe(
    "roguelike_topic_table.json 中 TempItemList 的运行时校验结构。",
  ) satisfies z.ZodType<TempItemList>;

/**
 * roguelike_topic_table.json 中 Alchemy 的运行时校验结构。
 */
export const AlchemySchema = z
  .strictObject({
    nodeType: AlchemyNodeTypeSchema,
    sortId: z.number(),
    permItemList: z.array(PermItemListSchema),
    tempItemList: z.array(TempItemListSchema),
  })
  .describe(
    "roguelike_topic_table.json 中 Alchemy 的运行时校验结构。",
  ) satisfies z.ZodType<Alchemy>;

/**
 * roguelike_topic_table.json 中 NodeUpgradeDataMap 的运行时校验结构。
 */
export const NodeUpgradeDataMapSchema = z
  .strictObject({
    REST: AlchemySchema,
    BATTLE_SHOP: AlchemySchema,
    ALCHEMY: AlchemySchema,
  })
  .describe(
    "roguelike_topic_table.json 中 NodeUpgradeDataMap 的运行时校验结构。",
  ) satisfies z.ZodType<NodeUpgradeDataMap>;

/**
 * roguelike_topic_table.json 中 NodeUpgrade 的运行时校验结构。
 */
export const NodeUpgradeSchema = z
  .strictObject({
    nodeUpgradeDataMap: NodeUpgradeDataMapSchema,
  })
  .describe(
    "roguelike_topic_table.json 中 NodeUpgrade 的运行时校验结构。",
  ) satisfies z.ZodType<NodeUpgrade>;
