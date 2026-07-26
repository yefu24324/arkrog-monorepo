/** B 首字母 Action 分支的分层聚合类型。 */

import type { BattleActionB01 } from "./actions-b-01.types.js";
import type { BattleActionB02 } from "./actions-b-02.types.js";

/** B 首字母 Action 的完整联合。 */
export type BattleActionB = BattleActionB01 | BattleActionB02;
