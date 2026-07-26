/** T 首字母 Action 分支的分层聚合 Schema。 */

import { z } from "zod";

import type { BattleActionT } from "../../../../types/buff-template-data/actions/t/battle-action-t.types.js";
import { BattleActionT01Schema } from "./actions-t-01.schemas.js";
import { BattleActionT02Schema } from "./actions-t-02.schemas.js";
import { BattleActionT03Schema } from "./actions-t-03.schemas.js";

/** T 首字母 Action 的完整联合。 */
export const BattleActionTSchema = z
  .union([BattleActionT01Schema, BattleActionT02Schema, BattleActionT03Schema])
  .describe("buff_template_data 中以 T 开头的 CLR Action 联合。") satisfies z.ZodType<BattleActionT>;
