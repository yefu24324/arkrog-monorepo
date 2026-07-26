/** A 首字母 Action 分支的分层聚合 Schema。 */

import { z } from "zod";

import type { BattleActionA } from "../../../../types/buff-template-data/actions/a/battle-action-a.types.js";
import { BattleActionA01Schema } from "./actions-a-01.schemas.js";
import { BattleActionA02Schema } from "./actions-a-02.schemas.js";
import { BattleActionA03Schema } from "./actions-a-03.schemas.js";
import { BattleActionA04Schema } from "./actions-a-04.schemas.js";
import { BattleActionA05Schema } from "./actions-a-05.schemas.js";
import { BattleActionA06Schema } from "./actions-a-06.schemas.js";
import { BattleActionA07Schema } from "./actions-a-07.schemas.js";
import { BattleActionA08Schema } from "./actions-a-08.schemas.js";
import { BattleActionA09Schema } from "./actions-a-09.schemas.js";
import { BattleActionA10Schema } from "./actions-a-10.schemas.js";
import { BattleActionA11Schema } from "./actions-a-11.schemas.js";
import { BattleActionA12Schema } from "./actions-a-12.schemas.js";
import { BattleActionA13Schema } from "./actions-a-13.schemas.js";
import { BattleActionA14Schema } from "./actions-a-14.schemas.js";
import { BattleActionA15Schema } from "./actions-a-15.schemas.js";
import { BattleActionA16Schema } from "./actions-a-16.schemas.js";
import { BattleActionA17Schema } from "./actions-a-17.schemas.js";
import { BattleActionA18Schema } from "./actions-a-18.schemas.js";
import { BattleActionA19Schema } from "./actions-a-19.schemas.js";
import { BattleActionA20Schema } from "./actions-a-20.schemas.js";
import { BattleActionA21Schema } from "./actions-a-21.schemas.js";
import { BattleActionA22Schema } from "./actions-a-22.schemas.js";
import { BattleActionA23Schema } from "./actions-a-23.schemas.js";
import { BattleActionA24Schema } from "./actions-a-24.schemas.js";
import { BattleActionA25Schema } from "./actions-a-25.schemas.js";
import { BattleActionA26Schema } from "./actions-a-26.schemas.js";
import { BattleActionA27Schema } from "./actions-a-27.schemas.js";
import { BattleActionA28Schema } from "./actions-a-28.schemas.js";

/** A 首字母 Action 的完整联合。 */
export const BattleActionASchema = z
  .union([BattleActionA01Schema, BattleActionA02Schema, BattleActionA03Schema, BattleActionA04Schema, BattleActionA05Schema, BattleActionA06Schema, BattleActionA07Schema, BattleActionA08Schema, BattleActionA09Schema, BattleActionA10Schema, BattleActionA11Schema, BattleActionA12Schema, BattleActionA13Schema, BattleActionA14Schema, BattleActionA15Schema, BattleActionA16Schema, BattleActionA17Schema, BattleActionA18Schema, BattleActionA19Schema, BattleActionA20Schema, BattleActionA21Schema, BattleActionA22Schema, BattleActionA23Schema, BattleActionA24Schema, BattleActionA25Schema, BattleActionA26Schema, BattleActionA27Schema, BattleActionA28Schema])
  .describe("buff_template_data 中以 A 开头的 CLR Action 联合。") satisfies z.ZodType<BattleActionA>;
