/** V 首字母 Action 分支的分层聚合 Schema。 */

import { z } from "zod";

import type { BattleActionV } from "../../../../types/buff-template-data/actions/v/battle-action-v.types.js";
import { BattleActionV01Schema } from "./actions-v-01.schemas.js";

/** V 首字母 Action 的完整联合。 */
export const BattleActionVSchema = z
  .union([BattleActionV01Schema])
  .describe("buff_template_data 中以 V 开头的 CLR Action 联合。") satisfies z.ZodType<BattleActionV>;
