/** K 首字母 Action 分支的分层聚合类型。 */

import type { BattleActionK01 } from "./actions-k-01.types.js";
import type { BattleActionK02 } from "./actions-k-02.types.js";

/** K 首字母 Action 的完整联合。 */
export type BattleActionK = BattleActionK01 | BattleActionK02;
