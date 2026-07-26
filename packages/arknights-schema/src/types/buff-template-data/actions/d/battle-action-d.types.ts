/** D 首字母 Action 分支的分层聚合类型。 */

import type { BattleActionD01 } from "./actions-d-01.types.js";
import type { BattleActionD02 } from "./actions-d-02.types.js";
import type { BattleActionD03 } from "./actions-d-03.types.js";
import type { BattleActionD04 } from "./actions-d-04.types.js";

/** D 首字母 Action 的完整联合。 */
export type BattleActionD = BattleActionD01 | BattleActionD02 | BattleActionD03 | BattleActionD04;
