/** buff_template_data 中全部递归 CLR Action 的 Zod Schema。 */

import { z } from "zod";

import type { BattleAction } from "../../types/buff-template-data/battle-action.types.js";
import { registerBattleActionSchema } from "./battle-action-reference.schemas.js";
import { BattleActionASchema } from "./actions/a/battle-action-a.schemas.js";
import { BattleActionBSchema } from "./actions/b/battle-action-b.schemas.js";
import { BattleActionCSchema } from "./actions/c/battle-action-c.schemas.js";
import { BattleActionDSchema } from "./actions/d/battle-action-d.schemas.js";
import { BattleActionESchema } from "./actions/e/battle-action-e.schemas.js";
import { BattleActionFSchema } from "./actions/f/battle-action-f.schemas.js";
import { BattleActionGSchema } from "./actions/g/battle-action-g.schemas.js";
import { BattleActionHSchema } from "./actions/h/battle-action-h.schemas.js";
import { BattleActionISchema } from "./actions/i/battle-action-i.schemas.js";
import { BattleActionKSchema } from "./actions/k/battle-action-k.schemas.js";
import { BattleActionLSchema } from "./actions/l/battle-action-l.schemas.js";
import { BattleActionMSchema } from "./actions/m/battle-action-m.schemas.js";
import { BattleActionNSchema } from "./actions/n/battle-action-n.schemas.js";
import { BattleActionOSchema } from "./actions/o/battle-action-o.schemas.js";
import { BattleActionPSchema } from "./actions/p/battle-action-p.schemas.js";
import { BattleActionRSchema } from "./actions/r/battle-action-r.schemas.js";
import { BattleActionSSchema } from "./actions/s/battle-action-s.schemas.js";
import { BattleActionTSchema } from "./actions/t/battle-action-t.schemas.js";
import { BattleActionUSchema } from "./actions/u/battle-action-u.schemas.js";
import { BattleActionVSchema } from "./actions/v/battle-action-v.schemas.js";
import { BattleActionWSchema } from "./actions/w/battle-action-w.schemas.js";
import { BattleActionYSchema } from "./actions/y/battle-action-y.schemas.js";

/** 全部已观测 CLR `$type` 分支的递归运行时联合。 */
export const BattleActionSchema = z
  .union([BattleActionASchema, BattleActionBSchema, BattleActionCSchema, BattleActionDSchema, BattleActionESchema, BattleActionFSchema, BattleActionGSchema, BattleActionHSchema, BattleActionISchema, BattleActionKSchema, BattleActionLSchema, BattleActionMSchema, BattleActionNSchema, BattleActionOSchema, BattleActionPSchema, BattleActionRSchema, BattleActionSSchema, BattleActionTSchema, BattleActionUSchema, BattleActionVSchema, BattleActionWSchema, BattleActionYSchema])
  .describe("buff_template_data 中全部已观测 CLR $type 分支的递归 Action 联合。") satisfies z.ZodType<BattleAction>;

// 所有具体 Action 模块通过独立惰性引用访问根联合，避免 ESM 循环初始化。
registerBattleActionSchema(BattleActionSchema);
