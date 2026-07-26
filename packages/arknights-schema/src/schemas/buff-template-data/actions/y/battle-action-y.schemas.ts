/** Y 首字母 Action 分支的分层聚合 Schema。 */

import { z } from "zod";

import type { BattleActionY } from "../../../../types/buff-template-data/actions/y/battle-action-y.types.js";
import { BattleActionY01Schema } from "./actions-y-01.schemas.js";

/** Y 首字母 Action 的完整联合。 */
export const BattleActionYSchema = z
  .union([BattleActionY01Schema])
  .describe("buff_template_data 中以 Y 开头的 CLR Action 联合。") satisfies z.ZodType<BattleActionY>;
