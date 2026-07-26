/** D 首字母 Action 分支的分层聚合 Schema。 */

import { z } from "zod";

import type { BattleActionD } from "../../../../types/buff-template-data/actions/d/battle-action-d.types.js";
import { BattleActionD01Schema } from "./actions-d-01.schemas.js";
import { BattleActionD02Schema } from "./actions-d-02.schemas.js";
import { BattleActionD03Schema } from "./actions-d-03.schemas.js";
import { BattleActionD04Schema } from "./actions-d-04.schemas.js";

/** D 首字母 Action 的完整联合。 */
export const BattleActionDSchema = z
  .union([BattleActionD01Schema, BattleActionD02Schema, BattleActionD03Schema, BattleActionD04Schema])
  .describe("buff_template_data 中以 D 开头的 CLR Action 联合。") satisfies z.ZodType<BattleActionD>;
