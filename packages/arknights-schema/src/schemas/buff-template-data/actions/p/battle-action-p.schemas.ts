/** P 首字母 Action 分支的分层聚合 Schema。 */

import { z } from "zod";

import type { BattleActionP } from "../../../../types/buff-template-data/actions/p/battle-action-p.types.js";
import { BattleActionP01Schema } from "./actions-p-01.schemas.js";

/** P 首字母 Action 的完整联合。 */
export const BattleActionPSchema = z
  .union([BattleActionP01Schema])
  .describe("buff_template_data 中以 P 开头的 CLR Action 联合。") satisfies z.ZodType<BattleActionP>;
