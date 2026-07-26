/** H 首字母 Action 分支的分层聚合类型。 */

import type { BattleActionH01 } from "./actions-h-01.types.js";
import type { BattleActionH02 } from "./actions-h-02.types.js";
import type { BattleActionH03 } from "./actions-h-03.types.js";
import type { BattleActionH04 } from "./actions-h-04.types.js";
import type { BattleActionH05 } from "./actions-h-05.types.js";
import type { BattleActionH06 } from "./actions-h-06.types.js";

/** H 首字母 Action 的完整联合。 */
export type BattleActionH = BattleActionH01 | BattleActionH02 | BattleActionH03 | BattleActionH04 | BattleActionH05 | BattleActionH06;
