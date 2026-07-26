/** T 首字母 Action 分支的分层聚合类型。 */

import type { BattleActionT01 } from "./actions-t-01.types.js";
import type { BattleActionT02 } from "./actions-t-02.types.js";
import type { BattleActionT03 } from "./actions-t-03.types.js";

/** T 首字母 Action 的完整联合。 */
export type BattleActionT = BattleActionT01 | BattleActionT02 | BattleActionT03;
