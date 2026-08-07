import type { MechanicsBlackboardEntry } from "../contracts/program.js";

/** 按 trim 后的精确键名读取黑板条目。 */
export function blackboardEntry(
  blackboard: readonly MechanicsBlackboardEntry[],
  key: string,
): MechanicsBlackboardEntry | undefined {
  // GameData 中少量参数名带尾随空格，统一在边界处处理。
  return blackboard.find((entry) => entry.key.trim() === key);
}

/** 读取有限数值；缺失或非有限数统一返回 undefined。 */
export function blackboardNumber(
  blackboard: readonly MechanicsBlackboardEntry[],
  key: string,
): number | undefined {
  const value = blackboardEntry(blackboard, key)?.value;
  return value !== undefined && Number.isFinite(value) ? value : undefined;
}

/** 读取非空字符串值。 */
export function blackboardString(
  blackboard: readonly MechanicsBlackboardEntry[],
  key: string,
): string | undefined {
  const value = blackboardEntry(blackboard, key)?.valueStr;
  return value && value.length > 0 ? value : undefined;
}

/** 从黑板 key 参数解析战斗模板名，没有引用时回退到外层 key。 */
export function resolveMechanicName(
  effectKey: string,
  blackboard: readonly MechanicsBlackboardEntry[],
): string {
  return blackboardString(blackboard, "key") ?? effectKey;
}
