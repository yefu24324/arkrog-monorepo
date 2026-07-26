/** B 首字母 Action 分支的分层聚合 Schema。 */

import { z } from "zod";

import type { BattleActionB } from "../../../../types/buff-template-data/actions/b/battle-action-b.types.js";
import { BattleActionB01Schema } from "./actions-b-01.schemas.js";
import { BattleActionB02Schema } from "./actions-b-02.schemas.js";

/** B 首字母 Action 的完整联合。 */
export const BattleActionBSchema = z
  .union([BattleActionB01Schema, BattleActionB02Schema])
  .describe("buff_template_data 中以 B 开头的 CLR Action 联合。") satisfies z.ZodType<BattleActionB>;
