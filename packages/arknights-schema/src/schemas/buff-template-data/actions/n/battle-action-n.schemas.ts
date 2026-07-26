/** N 首字母 Action 分支的分层聚合 Schema。 */

import { z } from "zod";

import type { BattleActionN } from "../../../../types/buff-template-data/actions/n/battle-action-n.types.js";
import { BattleActionN01Schema } from "./actions-n-01.schemas.js";

/** N 首字母 Action 的完整联合。 */
export const BattleActionNSchema = z
  .union([BattleActionN01Schema])
  .describe("buff_template_data 中以 N 开头的 CLR Action 联合。") satisfies z.ZodType<BattleActionN>;
