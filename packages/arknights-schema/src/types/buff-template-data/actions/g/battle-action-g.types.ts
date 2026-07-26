/** G 首字母 Action 分支的分层聚合类型。 */

import type { BattleActionG01 } from "./actions-g-01.types.js";
import type { BattleActionG02 } from "./actions-g-02.types.js";

/** G 首字母 Action 的完整联合。 */
export type BattleActionG = BattleActionG01 | BattleActionG02;
