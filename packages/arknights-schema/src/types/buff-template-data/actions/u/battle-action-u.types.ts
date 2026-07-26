/** U 首字母 Action 分支的分层聚合类型。 */

import type { BattleActionU01 } from "./actions-u-01.types.js";
import type { BattleActionU02 } from "./actions-u-02.types.js";

/** U 首字母 Action 的完整联合。 */
export type BattleActionU = BattleActionU01 | BattleActionU02;
