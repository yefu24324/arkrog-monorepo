/** W 首字母 Action 分支的分层聚合 Schema。 */

import { z } from "zod";

import type { BattleActionW } from "../../../../types/buff-template-data/actions/w/battle-action-w.types.js";
import { BattleActionW01Schema } from "./actions-w-01.schemas.js";

/** W 首字母 Action 的完整联合。 */
export const BattleActionWSchema = z
  .union([BattleActionW01Schema])
  .describe("buff_template_data 中以 W 开头的 CLR Action 联合。") satisfies z.ZodType<BattleActionW>;
