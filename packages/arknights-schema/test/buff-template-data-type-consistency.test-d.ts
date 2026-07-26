/** 编译期断言 buff_template_data 显式类型与 Zod 推导类型完全一致。 */

import type { z } from "zod";

import type { BattleAction, BuffTemplate, BuffTemplateData, EventToActions } from "../src/types/index.js";
import { BattleActionSchema, BuffTemplateDataSchema, BuffTemplateSchema, EventToActionsSchema } from "../src/schemas/index.js";

/** 比较两个类型是否双向完全相等。 */
type Equal<Left, Right> =
  (<Value>() => Value extends Left ? 1 : 2) extends
  (<Value>() => Value extends Right ? 1 : 2)
    ? true
    : false;

/** 要求类型级布尔值为 true。 */
type Expect<Value extends true> = Value;

/** 目标表关键递归边界的双向一致性断言。 */
export type BuffTemplateDataTypeAssertions = [
  Expect<Equal<BattleAction, z.infer<typeof BattleActionSchema>>>,
  Expect<Equal<EventToActions, z.infer<typeof EventToActionsSchema>>>,
  Expect<Equal<BuffTemplate, z.infer<typeof BuffTemplateSchema>>>,
  Expect<Equal<BuffTemplateData, z.infer<typeof BuffTemplateDataSchema>>>,
];
