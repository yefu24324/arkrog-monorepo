/** R 首字母 Action 分支的分层聚合 Schema。 */

import { z } from "zod";

import type { BattleActionR } from "../../../../types/buff-template-data/actions/r/battle-action-r.types.js";
import { BattleActionR01Schema } from "./actions-r-01.schemas.js";
import { BattleActionR02Schema } from "./actions-r-02.schemas.js";
import { BattleActionR03Schema } from "./actions-r-03.schemas.js";
import { BattleActionR04Schema } from "./actions-r-04.schemas.js";
import { BattleActionR05Schema } from "./actions-r-05.schemas.js";
import { BattleActionR06Schema } from "./actions-r-06.schemas.js";
import { BattleActionR07Schema } from "./actions-r-07.schemas.js";
import { BattleActionR08Schema } from "./actions-r-08.schemas.js";
import { BattleActionR09Schema } from "./actions-r-09.schemas.js";

/** R 首字母 Action 的完整联合。 */
export const BattleActionRSchema = z
  .union([BattleActionR01Schema, BattleActionR02Schema, BattleActionR03Schema, BattleActionR04Schema, BattleActionR05Schema, BattleActionR06Schema, BattleActionR07Schema, BattleActionR08Schema, BattleActionR09Schema])
  .describe("buff_template_data 中以 R 开头的 CLR Action 联合。") satisfies z.ZodType<BattleActionR>;
