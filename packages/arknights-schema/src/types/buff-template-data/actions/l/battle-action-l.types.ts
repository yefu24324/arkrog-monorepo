/** L 首字母 Action 分支的分层聚合类型。 */

import type { BattleActionL01 } from "./actions-l-01.types.js";
import type { BattleActionL02 } from "./actions-l-02.types.js";
import type { BattleActionL03 } from "./actions-l-03.types.js";
import type { BattleActionL04 } from "./actions-l-04.types.js";
import type { BattleActionL05 } from "./actions-l-05.types.js";
import type { BattleActionL06 } from "./actions-l-06.types.js";

/** L 首字母 Action 的完整联合。 */
export type BattleActionL = BattleActionL01 | BattleActionL02 | BattleActionL03 | BattleActionL04 | BattleActionL05 | BattleActionL06;
