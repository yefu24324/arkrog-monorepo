/** E 首字母 Action 分支的分层聚合类型。 */

import type { BattleActionE01 } from "./actions-e-01.types.js";
import type { BattleActionE02 } from "./actions-e-02.types.js";
import type { BattleActionE03 } from "./actions-e-03.types.js";
import type { BattleActionE04 } from "./actions-e-04.types.js";

/** E 首字母 Action 的完整联合。 */
export type BattleActionE = BattleActionE01 | BattleActionE02 | BattleActionE03 | BattleActionE04;
