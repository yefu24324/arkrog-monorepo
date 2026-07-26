/** I 首字母 Action 分支的分层聚合 Schema。 */

import { z } from "zod";

import type { BattleActionI } from "../../../../types/buff-template-data/actions/i/battle-action-i.types.js";
import { BattleActionI01Schema } from "./actions-i-01.schemas.js";
import { BattleActionI02Schema } from "./actions-i-02.schemas.js";
import { BattleActionI03Schema } from "./actions-i-03.schemas.js";
import { BattleActionI04Schema } from "./actions-i-04.schemas.js";
import { BattleActionI05Schema } from "./actions-i-05.schemas.js";
import { BattleActionI06Schema } from "./actions-i-06.schemas.js";
import { BattleActionI07Schema } from "./actions-i-07.schemas.js";

/** I 首字母 Action 的完整联合。 */
export const BattleActionISchema = z
  .union([BattleActionI01Schema, BattleActionI02Schema, BattleActionI03Schema, BattleActionI04Schema, BattleActionI05Schema, BattleActionI06Schema, BattleActionI07Schema])
  .describe("buff_template_data 中以 I 开头的 CLR Action 联合。") satisfies z.ZodType<BattleActionI>;
