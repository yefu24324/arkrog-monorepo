/**

 * JSON 逻辑模块 `details/battle-loading-tips/battle-loading-tips` 的 Zod Schema。

 */

import { z } from "zod";

import type { BattleLoadingTip } from "../../../../types/roguelike-topic-table/details/battle-loading-tips/battle-loading-tips.types.js";

import { CategorySchema } from "../../shared/common-enums.schemas.js";

/**
 * roguelike_topic_table.json 中 BattleLoadingTip 的运行时校验结构。
 */
export const BattleLoadingTipSchema = z
  .strictObject({
    tip: z.string(),
    weight: z.number(),
    category: CategorySchema,
  })
  .describe(
    "roguelike_topic_table.json 中 BattleLoadingTip 的运行时校验结构。",
  ) satisfies z.ZodType<BattleLoadingTip>;
