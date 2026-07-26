/** 隔离具体 Action Schema 与根联合之间 ESM 循环依赖的惰性引用。 */

import { z } from "zod";

import type { BattleAction } from "../../types/buff-template-data/battle-action.types.js";

/** 根 Action Schema 初始化后注册的稳定引用。 */
let registeredSchema: z.ZodType<BattleAction> | null = null;

/** 由根联合模块在初始化完成后注册自身。 */
export function registerBattleActionSchema(schema: z.ZodType<BattleAction>): void {
  registeredSchema = schema;
}

/** 具体 Action 分支中递归字段使用的惰性 Schema。 */
export const BattleActionReferenceSchema: z.ZodType<BattleAction> = z.lazy(() => {
  if (!registeredSchema) {
    throw new Error("BattleActionSchema 尚未完成初始化。");
  }
  return registeredSchema;
});
