/** F 首字母 Action 分支的分层聚合 Schema。 */

import { z } from "zod";

import type { BattleActionF } from "../../../../types/buff-template-data/actions/f/battle-action-f.types.js";
import { BattleActionF01Schema } from "./actions-f-01.schemas.js";
import { BattleActionF02Schema } from "./actions-f-02.schemas.js";
import { BattleActionF03Schema } from "./actions-f-03.schemas.js";
import { BattleActionF04Schema } from "./actions-f-04.schemas.js";
import { BattleActionF05Schema } from "./actions-f-05.schemas.js";
import { BattleActionF06Schema } from "./actions-f-06.schemas.js";
import { BattleActionF07Schema } from "./actions-f-07.schemas.js";
import { BattleActionF08Schema } from "./actions-f-08.schemas.js";
import { BattleActionF09Schema } from "./actions-f-09.schemas.js";
import { BattleActionF10Schema } from "./actions-f-10.schemas.js";
import { BattleActionF11Schema } from "./actions-f-11.schemas.js";

/** F 首字母 Action 的完整联合。 */
export const BattleActionFSchema = z
  .union([BattleActionF01Schema, BattleActionF02Schema, BattleActionF03Schema, BattleActionF04Schema, BattleActionF05Schema, BattleActionF06Schema, BattleActionF07Schema, BattleActionF08Schema, BattleActionF09Schema, BattleActionF10Schema, BattleActionF11Schema])
  .describe("buff_template_data 中以 F 开头的 CLR Action 联合。") satisfies z.ZodType<BattleActionF>;
