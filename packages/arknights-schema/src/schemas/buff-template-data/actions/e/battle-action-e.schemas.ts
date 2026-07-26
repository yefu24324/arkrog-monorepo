/** E 首字母 Action 分支的分层聚合 Schema。 */

import { z } from "zod";

import type { BattleActionE } from "../../../../types/buff-template-data/actions/e/battle-action-e.types.js";
import { BattleActionE01Schema } from "./actions-e-01.schemas.js";
import { BattleActionE02Schema } from "./actions-e-02.schemas.js";
import { BattleActionE03Schema } from "./actions-e-03.schemas.js";
import { BattleActionE04Schema } from "./actions-e-04.schemas.js";

/** E 首字母 Action 的完整联合。 */
export const BattleActionESchema = z
  .union([BattleActionE01Schema, BattleActionE02Schema, BattleActionE03Schema, BattleActionE04Schema])
  .describe("buff_template_data 中以 E 开头的 CLR Action 联合。") satisfies z.ZodType<BattleActionE>;
