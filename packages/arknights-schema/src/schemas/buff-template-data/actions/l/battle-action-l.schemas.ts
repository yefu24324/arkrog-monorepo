/** L 首字母 Action 分支的分层聚合 Schema。 */

import { z } from "zod";

import type { BattleActionL } from "../../../../types/buff-template-data/actions/l/battle-action-l.types.js";
import { BattleActionL01Schema } from "./actions-l-01.schemas.js";
import { BattleActionL02Schema } from "./actions-l-02.schemas.js";
import { BattleActionL03Schema } from "./actions-l-03.schemas.js";
import { BattleActionL04Schema } from "./actions-l-04.schemas.js";
import { BattleActionL05Schema } from "./actions-l-05.schemas.js";
import { BattleActionL06Schema } from "./actions-l-06.schemas.js";

/** L 首字母 Action 的完整联合。 */
export const BattleActionLSchema = z
  .union([BattleActionL01Schema, BattleActionL02Schema, BattleActionL03Schema, BattleActionL04Schema, BattleActionL05Schema, BattleActionL06Schema])
  .describe("buff_template_data 中以 L 开头的 CLR Action 联合。") satisfies z.ZodType<BattleActionL>;
