/** K 首字母 Action 分支的分层聚合 Schema。 */

import { z } from "zod";

import type { BattleActionK } from "../../../../types/buff-template-data/actions/k/battle-action-k.types.js";
import { BattleActionK01Schema } from "./actions-k-01.schemas.js";
import { BattleActionK02Schema } from "./actions-k-02.schemas.js";

/** K 首字母 Action 的完整联合。 */
export const BattleActionKSchema = z
  .union([BattleActionK01Schema, BattleActionK02Schema])
  .describe("buff_template_data 中以 K 开头的 CLR Action 联合。") satisfies z.ZodType<BattleActionK>;
