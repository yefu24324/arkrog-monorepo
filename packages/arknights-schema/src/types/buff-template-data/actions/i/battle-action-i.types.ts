/** I 首字母 Action 分支的分层聚合类型。 */

import type { BattleActionI01 } from "./actions-i-01.types.js";
import type { BattleActionI02 } from "./actions-i-02.types.js";
import type { BattleActionI03 } from "./actions-i-03.types.js";
import type { BattleActionI04 } from "./actions-i-04.types.js";
import type { BattleActionI05 } from "./actions-i-05.types.js";
import type { BattleActionI06 } from "./actions-i-06.types.js";
import type { BattleActionI07 } from "./actions-i-07.types.js";

/** I 首字母 Action 的完整联合。 */
export type BattleActionI = BattleActionI01 | BattleActionI02 | BattleActionI03 | BattleActionI04 | BattleActionI05 | BattleActionI06 | BattleActionI07;
