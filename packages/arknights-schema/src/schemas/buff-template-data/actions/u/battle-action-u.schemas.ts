/** U 首字母 Action 分支的分层聚合 Schema。 */

import { z } from "zod";

import type { BattleActionU } from "../../../../types/buff-template-data/actions/u/battle-action-u.types.js";
import { BattleActionU01Schema } from "./actions-u-01.schemas.js";
import { BattleActionU02Schema } from "./actions-u-02.schemas.js";

/** U 首字母 Action 的完整联合。 */
export const BattleActionUSchema = z
  .union([BattleActionU01Schema, BattleActionU02Schema])
  .describe("buff_template_data 中以 U 开头的 CLR Action 联合。") satisfies z.ZodType<BattleActionU>;
