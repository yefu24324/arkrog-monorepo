/**

 * JSON 逻辑模块 `details/capsule-dict/capsule-dict` 的 Zod Schema。

 */

import { z } from "zod";

import type { CapsuleDict } from "../../../../types/roguelike-topic-table/details/capsule-dict/capsule-dict.types.js";

/**
 * roguelike_topic_table.json 中 CapsuleDict 的运行时校验结构。
 */
export const CapsuleDictSchema = z
  .strictObject({
    itemId: z.string(),
    maskType: z.string(),
    innerColor: z.string(),
  })
  .describe(
    "roguelike_topic_table.json 中 CapsuleDict 的运行时校验结构。",
  ) satisfies z.ZodType<CapsuleDict>;
