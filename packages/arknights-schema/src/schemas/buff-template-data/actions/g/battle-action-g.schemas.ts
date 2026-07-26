/** G 首字母 Action 分支的分层聚合 Schema。 */

import { z } from "zod";

import type { BattleActionG } from "../../../../types/buff-template-data/actions/g/battle-action-g.types.js";
import { BattleActionG01Schema } from "./actions-g-01.schemas.js";
import { BattleActionG02Schema } from "./actions-g-02.schemas.js";

/** G 首字母 Action 的完整联合。 */
export const BattleActionGSchema = z
  .union([BattleActionG01Schema, BattleActionG02Schema])
  .describe("buff_template_data 中以 G 开头的 CLR Action 联合。") satisfies z.ZodType<BattleActionG>;
