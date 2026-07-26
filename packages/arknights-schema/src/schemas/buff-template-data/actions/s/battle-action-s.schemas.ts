/** S 首字母 Action 分支的分层聚合 Schema。 */

import { z } from "zod";

import type { BattleActionS } from "../../../../types/buff-template-data/actions/s/battle-action-s.types.js";
import { BattleActionS01Schema } from "./actions-s-01.schemas.js";
import { BattleActionS02Schema } from "./actions-s-02.schemas.js";
import { BattleActionS03Schema } from "./actions-s-03.schemas.js";
import { BattleActionS04Schema } from "./actions-s-04.schemas.js";
import { BattleActionS05Schema } from "./actions-s-05.schemas.js";
import { BattleActionS06Schema } from "./actions-s-06.schemas.js";
import { BattleActionS07Schema } from "./actions-s-07.schemas.js";
import { BattleActionS08Schema } from "./actions-s-08.schemas.js";
import { BattleActionS09Schema } from "./actions-s-09.schemas.js";
import { BattleActionS10Schema } from "./actions-s-10.schemas.js";
import { BattleActionS11Schema } from "./actions-s-11.schemas.js";
import { BattleActionS12Schema } from "./actions-s-12.schemas.js";
import { BattleActionS13Schema } from "./actions-s-13.schemas.js";
import { BattleActionS14Schema } from "./actions-s-14.schemas.js";
import { BattleActionS15Schema } from "./actions-s-15.schemas.js";
import { BattleActionS16Schema } from "./actions-s-16.schemas.js";
import { BattleActionS17Schema } from "./actions-s-17.schemas.js";

/** S 首字母 Action 的完整联合。 */
export const BattleActionSSchema = z
  .union([BattleActionS01Schema, BattleActionS02Schema, BattleActionS03Schema, BattleActionS04Schema, BattleActionS05Schema, BattleActionS06Schema, BattleActionS07Schema, BattleActionS08Schema, BattleActionS09Schema, BattleActionS10Schema, BattleActionS11Schema, BattleActionS12Schema, BattleActionS13Schema, BattleActionS14Schema, BattleActionS15Schema, BattleActionS16Schema, BattleActionS17Schema])
  .describe("buff_template_data 中以 S 开头的 CLR Action 联合。") satisfies z.ZodType<BattleActionS>;
