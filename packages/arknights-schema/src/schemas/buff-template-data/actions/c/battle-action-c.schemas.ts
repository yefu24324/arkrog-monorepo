/** C 首字母 Action 分支的分层聚合 Schema。 */

import { z } from "zod";

import type { BattleActionC } from "../../../../types/buff-template-data/actions/c/battle-action-c.types.js";
import { BattleActionC01Schema } from "./actions-c-01.schemas.js";
import { BattleActionC02Schema } from "./actions-c-02.schemas.js";
import { BattleActionC03Schema } from "./actions-c-03.schemas.js";
import { BattleActionC04Schema } from "./actions-c-04.schemas.js";
import { BattleActionC05Schema } from "./actions-c-05.schemas.js";
import { BattleActionC06Schema } from "./actions-c-06.schemas.js";
import { BattleActionC07Schema } from "./actions-c-07.schemas.js";
import { BattleActionC08Schema } from "./actions-c-08.schemas.js";
import { BattleActionC09Schema } from "./actions-c-09.schemas.js";
import { BattleActionC10Schema } from "./actions-c-10.schemas.js";
import { BattleActionC11Schema } from "./actions-c-11.schemas.js";
import { BattleActionC12Schema } from "./actions-c-12.schemas.js";
import { BattleActionC13Schema } from "./actions-c-13.schemas.js";
import { BattleActionC14Schema } from "./actions-c-14.schemas.js";
import { BattleActionC15Schema } from "./actions-c-15.schemas.js";
import { BattleActionC16Schema } from "./actions-c-16.schemas.js";
import { BattleActionC17Schema } from "./actions-c-17.schemas.js";
import { BattleActionC18Schema } from "./actions-c-18.schemas.js";
import { BattleActionC19Schema } from "./actions-c-19.schemas.js";
import { BattleActionC20Schema } from "./actions-c-20.schemas.js";
import { BattleActionC21Schema } from "./actions-c-21.schemas.js";
import { BattleActionC22Schema } from "./actions-c-22.schemas.js";
import { BattleActionC23Schema } from "./actions-c-23.schemas.js";
import { BattleActionC24Schema } from "./actions-c-24.schemas.js";
import { BattleActionC25Schema } from "./actions-c-25.schemas.js";
import { BattleActionC26Schema } from "./actions-c-26.schemas.js";
import { BattleActionC27Schema } from "./actions-c-27.schemas.js";
import { BattleActionC28Schema } from "./actions-c-28.schemas.js";
import { BattleActionC29Schema } from "./actions-c-29.schemas.js";

/** C 首字母 Action 的完整联合。 */
export const BattleActionCSchema = z
  .union([BattleActionC01Schema, BattleActionC02Schema, BattleActionC03Schema, BattleActionC04Schema, BattleActionC05Schema, BattleActionC06Schema, BattleActionC07Schema, BattleActionC08Schema, BattleActionC09Schema, BattleActionC10Schema, BattleActionC11Schema, BattleActionC12Schema, BattleActionC13Schema, BattleActionC14Schema, BattleActionC15Schema, BattleActionC16Schema, BattleActionC17Schema, BattleActionC18Schema, BattleActionC19Schema, BattleActionC20Schema, BattleActionC21Schema, BattleActionC22Schema, BattleActionC23Schema, BattleActionC24Schema, BattleActionC25Schema, BattleActionC26Schema, BattleActionC27Schema, BattleActionC28Schema, BattleActionC29Schema])
  .describe("buff_template_data 中以 C 开头的 CLR Action 联合。") satisfies z.ZodType<BattleActionC>;
