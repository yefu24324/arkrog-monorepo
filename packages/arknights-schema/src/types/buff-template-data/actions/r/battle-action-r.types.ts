/** R 首字母 Action 分支的分层聚合类型。 */

import type { BattleActionR01 } from "./actions-r-01.types.js";
import type { BattleActionR02 } from "./actions-r-02.types.js";
import type { BattleActionR03 } from "./actions-r-03.types.js";
import type { BattleActionR04 } from "./actions-r-04.types.js";
import type { BattleActionR05 } from "./actions-r-05.types.js";
import type { BattleActionR06 } from "./actions-r-06.types.js";
import type { BattleActionR07 } from "./actions-r-07.types.js";
import type { BattleActionR08 } from "./actions-r-08.types.js";
import type { BattleActionR09 } from "./actions-r-09.types.js";

/** R 首字母 Action 的完整联合。 */
export type BattleActionR = BattleActionR01 | BattleActionR02 | BattleActionR03 | BattleActionR04 | BattleActionR05 | BattleActionR06 | BattleActionR07 | BattleActionR08 | BattleActionR09;
