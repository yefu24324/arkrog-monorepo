import {
  extractMechanicActionFacts,
  type MechanicActionFact,
} from "../domain/engine-rules.js";

/** 按战斗模板名索引的 Action 事实，供 classify 注入。 */
export type MechanicIndex = ReadonlyMap<string, readonly MechanicActionFact[]>;

/** buff_template_data 单条模板的最小形状。 */
export interface BuffTemplateEntry {
  /** 事件到 Action 列表。 */
  eventToActions?: Record<string, unknown[]>;
}

/**
 * 从完整 buff_template_data 构建模板名 → Action 事实索引。
 * 纯函数，不读盘。
 */
export function buildMechanicIndex(
  buffTemplateData: Record<string, BuffTemplateEntry>,
): MechanicIndex {
  const index = new Map<string, MechanicActionFact[]>();
  for (const [name, template] of Object.entries(buffTemplateData)) {
    const mechanicJsonPath = `$[${JSON.stringify(name)}]`;
    index.set(name, extractMechanicActionFacts(template, mechanicJsonPath));
  }
  return index;
}

/** 从黑板解析战斗模板名（blackboard.key 的字符串值）。 */
export function resolveMechanicName(
  blackboard: ReadonlyArray<{ key: string; value: number; valueStr: string | null }>,
): string {
  const entry = blackboard.find((parameter) => parameter.key === "key");
  return entry?.valueStr ?? "";
}
