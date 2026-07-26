/** M 首字母 Action 分支的分层聚合 Schema。 */

import { z } from "zod";

import type { BattleActionM } from "../../../../types/buff-template-data/actions/m/battle-action-m.types.js";
import { BattleActionM01Schema } from "./actions-m-01.schemas.js";
import { BattleActionM02Schema } from "./actions-m-02.schemas.js";
import { BattleActionM03Schema } from "./actions-m-03.schemas.js";
import { BattleActionM04Schema } from "./actions-m-04.schemas.js";
import { BattleActionM05Schema } from "./actions-m-05.schemas.js";
import { BattleActionM06Schema } from "./actions-m-06.schemas.js";
import { BattleActionM07Schema } from "./actions-m-07.schemas.js";

/** M 首字母 Action 的完整联合。 */
export const BattleActionMSchema = z
  .union([BattleActionM01Schema, BattleActionM02Schema, BattleActionM03Schema, BattleActionM04Schema, BattleActionM05Schema, BattleActionM06Schema, BattleActionM07Schema])
  .describe("buff_template_data 中以 M 开头的 CLR Action 联合。") satisfies z.ZodType<BattleActionM>;
