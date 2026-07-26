/** O 首字母 Action 分支的分层聚合 Schema。 */

import { z } from "zod";

import type { BattleActionO } from "../../../../types/buff-template-data/actions/o/battle-action-o.types.js";
import { BattleActionO01Schema } from "./actions-o-01.schemas.js";

/** O 首字母 Action 的完整联合。 */
export const BattleActionOSchema = z
  .union([BattleActionO01Schema])
  .describe("buff_template_data 中以 O 开头的 CLR Action 联合。") satisfies z.ZodType<BattleActionO>;
