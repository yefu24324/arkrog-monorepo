/** H 首字母 Action 分支的分层聚合 Schema。 */

import { z } from "zod";

import type { BattleActionH } from "../../../../types/buff-template-data/actions/h/battle-action-h.types.js";
import { BattleActionH01Schema } from "./actions-h-01.schemas.js";
import { BattleActionH02Schema } from "./actions-h-02.schemas.js";
import { BattleActionH03Schema } from "./actions-h-03.schemas.js";
import { BattleActionH04Schema } from "./actions-h-04.schemas.js";
import { BattleActionH05Schema } from "./actions-h-05.schemas.js";
import { BattleActionH06Schema } from "./actions-h-06.schemas.js";

/** H 首字母 Action 的完整联合。 */
export const BattleActionHSchema = z
  .union([BattleActionH01Schema, BattleActionH02Schema, BattleActionH03Schema, BattleActionH04Schema, BattleActionH05Schema, BattleActionH06Schema])
  .describe("buff_template_data 中以 H 开头的 CLR Action 联合。") satisfies z.ZodType<BattleActionH>;
