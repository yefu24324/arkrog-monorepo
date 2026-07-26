/** M 首字母 Action 分支的分层聚合类型。 */

import type { BattleActionM01 } from "./actions-m-01.types.js";
import type { BattleActionM02 } from "./actions-m-02.types.js";
import type { BattleActionM03 } from "./actions-m-03.types.js";
import type { BattleActionM04 } from "./actions-m-04.types.js";
import type { BattleActionM05 } from "./actions-m-05.types.js";
import type { BattleActionM06 } from "./actions-m-06.types.js";
import type { BattleActionM07 } from "./actions-m-07.types.js";

/** M 首字母 Action 的完整联合。 */
export type BattleActionM = BattleActionM01 | BattleActionM02 | BattleActionM03 | BattleActionM04 | BattleActionM05 | BattleActionM06 | BattleActionM07;
