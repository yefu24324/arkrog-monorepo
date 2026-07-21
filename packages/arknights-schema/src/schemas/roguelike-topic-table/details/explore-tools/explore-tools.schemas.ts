/**

 * JSON 逻辑模块 `details/explore-tools/explore-tools` 的 Zod Schema。

 */

import { z } from "zod";

import type { ExploreTools } from "../../../../types/roguelike-topic-table/details/explore-tools/explore-tools.types.js";

import { Rogue3__ExploreTool1Schema } from "../../shared/rogue-variants.schemas.js";

/**
 * roguelike_topic_table.json 中 ExploreTools 的运行时校验结构。
 */
export const ExploreToolsSchema = z
  .strictObject({
    rogue_3_explore_tool_1: Rogue3__ExploreTool1Schema.optional(),
    rogue_3_explore_tool_2: Rogue3__ExploreTool1Schema.optional(),
    rogue_3_explore_tool_3: Rogue3__ExploreTool1Schema.optional(),
    rogue_3_explore_tool_4: Rogue3__ExploreTool1Schema.optional(),
    rogue_3_explore_tool_5: Rogue3__ExploreTool1Schema.optional(),
    rogue_3_explore_tool_6: Rogue3__ExploreTool1Schema.optional(),
  })
  .describe(
    "roguelike_topic_table.json 中 ExploreTools 的运行时校验结构。",
  ) satisfies z.ZodType<ExploreTools>;
