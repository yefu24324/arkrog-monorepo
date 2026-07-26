import type { Connection, KuzuValue } from "kuzu";

import { ENGINE_FIELD_PATHS } from "./domain/engine-rules.js";
import { closeGraph, openGraph, rowsFromResult } from "./graph/database.js";
import { resolveRepositoryPaths } from "./paths.js";
import type { EvidenceStatus, TraceRow } from "./types.js";

/** 把 Kuzu 的可空值稳定转换为字符串。 */
function stringValue(value: KuzuValue | undefined, fallback = ""): string {
  if (value === null || value === undefined) return fallback;
  return String(value);
}

/** 在连接上执行参数化查询并返回普通行。 */
async function parameterizedRows(
  connection: Connection,
  statement: string,
  parameters: Record<string, KuzuValue>,
): Promise<Record<string, KuzuValue>[]> {
  const prepared = await connection.prepare(statement);
  if (!prepared.isSuccess()) {
    throw new Error(`无法准备查询：${prepared.getErrorMessage()}`);
  }
  return rowsFromResult(await connection.execute(prepared, parameters));
}

/** 按字段路径查询它最终进入的公式乘区。 */
async function answerField(
  connection: Connection,
  fieldPath: string,
): Promise<string | null> {
  const rows = await parameterizedRows(
    connection,
    `MATCH (f:Field {path: $fieldPath})-[m:FIELD_ENTERS_ZONE]->(z:DamageZone)
     RETURN f.path AS fieldPath, z.id AS zoneId, z.name AS zoneName,
            z.symbol AS symbol, z.stacking AS stacking, z.formula AS formula,
            m.status AS status, m.confidence AS confidence,
            m.reason AS reason, m.evidencePath AS evidencePath`,
    { fieldPath },
  );
  const row = rows[0];
  if (!row) return null;

  return [
    `${stringValue(row.fieldPath)} → ${stringValue(row.zoneName)}（${stringValue(row.symbol)}）`,
    `结论：${stringValue(row.status)}，置信度 ${stringValue(row.confidence)}`,
    `区内规则：${stringValue(row.stacking)}`,
    `公式位置：${stringValue(row.formula)}`,
    `依据：${stringValue(row.reason)}`,
    `证据：${stringValue(row.evidencePath)}`,
  ].join("\n");
}

/** 查询能出现在自然语言问题中的所有藏品名称和 ID。 */
async function findMentionedItem(
  connection: Connection,
  question: string,
): Promise<string | null> {
  const rows = await rowsFromResult(
    await connection.query(
      "MATCH (i:Item)-[:ITEM_HAS_EFFECT]->(:Effect) WHERE i.name <> i.rawId RETURN DISTINCT i.rawId AS rawId, i.name AS name",
    ),
  );
  const genericTerms = new Set([
    "buff",
    "不同",
    "伤害",
    "攻击",
    "角色",
    "藏品",
    "黑板",
    "乘区",
  ]);
  const candidates = rows
    .map((row) => ({
      rawId: stringValue(row.rawId),
      name: stringValue(row.name),
    }))
    .filter(
      ({ rawId, name }) =>
        question.includes(rawId) ||
        (name.length >= 2 && !genericTerms.has(name) && question.includes(name)),
    )
    .sort((left, right) => right.name.length - left.name.length);
  return candidates[0]?.rawId ?? null;
}

/** 追踪一个藏品的每个 buff、黑板参数、战斗组件与乘区。 */
export async function traceItemWithConnection(
  connection: Connection,
  term: string,
): Promise<TraceRow[]> {
  const rows = await parameterizedRows(
    connection,
    `MATCH (i:Item)-[:ITEM_HAS_EFFECT]->(e:Effect)
     WHERE i.rawId = $term OR i.name = $term
     OPTIONAL MATCH (e)-[mapping:EFFECT_ENTERS_ZONE]->(z:DamageZone)
     OPTIONAL MATCH (e)-[:EFFECT_USES_MECHANIC]->(mechanic:Mechanic)
     OPTIONAL MATCH (mechanic)-[:MECHANIC_HAS_ACTION]->(action:MechanicAction)
     RETURN e.id AS effectId, i.rawId AS itemId, i.name AS itemName,
            e.key AS effectKey, e.sourceKind AS sourceKind,
            e.parameters AS parameters, e.jsonPath AS jsonPath,
            z.id AS zoneId, z.name AS zoneName, mapping.status AS status,
            mapping.reason AS reason, mapping.ruleId AS ruleId,
            mapping.evidencePath AS evidencePath,
            mechanic.name AS mechanicName, mechanic.componentTypes AS componentTypes,
            action.componentType AS actionComponent, action.attributeType AS attributeType,
            action.formulaItem AS formulaItem, action.targetType AS targetType,
            action.buffOwner AS buffOwner
     ORDER BY i.topic, e.jsonPath, z.stage`,
    { term },
  );

  // 多个 Action 会令查询产生多行，这里按效果和预测聚合为一条可读追踪结果。
  const grouped = new Map<string, TraceRow & { actionFactSet: Set<string> }>();
  for (const row of rows) {
    const key = `${stringValue(row.effectId)}\u0000${stringValue(row.zoneId, "UNKNOWN")}\u0000${stringValue(row.ruleId)}`;
    let trace = grouped.get(key);
    if (!trace) {
      trace = {
        itemId: stringValue(row.itemId),
        itemName: stringValue(row.itemName),
        effectKey: stringValue(row.effectKey),
        sourceKind: stringValue(row.sourceKind),
        parameters: stringValue(row.parameters),
        zoneId: stringValue(row.zoneId, "UNKNOWN"),
        zoneName: stringValue(row.zoneName, "尚未分类"),
        status: stringValue(row.status, "unknown") as EvidenceStatus,
        reason: stringValue(
          row.reason,
          "当前规则和原始事实不足；黑板与 Action 已保留，可通过新增战斗引擎语义规则继续分类。",
        ),
        ruleId: stringValue(row.ruleId),
        evidencePath: stringValue(row.evidencePath),
        mechanicName: stringValue(row.mechanicName),
        componentTypes: stringValue(row.componentTypes),
        actionFacts: "",
        jsonPath: stringValue(row.jsonPath),
        actionFactSet: new Set<string>(),
      };
      grouped.set(key, trace);
    }
    // 只展示有语义内容的 Action，避免空占位污染追踪结果。
    const actionParts = [
      stringValue(row.actionComponent),
      stringValue(row.attributeType),
      stringValue(row.formulaItem),
      stringValue(row.targetType) || stringValue(row.buffOwner),
    ].filter(Boolean);
    if (actionParts.length > 0) trace.actionFactSet.add(actionParts.join(" / "));
  }
  return [...grouped.values()].map(({ actionFactSet, ...trace }) => ({
    ...trace,
    actionFacts: [...actionFactSet].join(" | "),
  }));
}

/** 将藏品追踪结果格式化为可复核的中文答案。 */
function formatTrace(rows: TraceRow[]): string {
  if (rows.length === 0) return "没有找到该藏品，或它没有 buff 黑板。";
  const title = `${rows[0]?.itemName}（${rows[0]?.itemId}）`;
  const details = rows.map((row, index) => {
    const mechanic = row.mechanicName
      ? `；战斗模板 ${row.mechanicName}${row.componentTypes ? ` → ${row.componentTypes}` : ""}`
      : "";
    const rule = row.ruleId ? `；规则 ${row.ruleId}` : "";
    const actions = row.actionFacts ? `\n   Action：${row.actionFacts}` : "";
    const evidence = row.evidencePath ? `\n   证据：${row.evidencePath}` : "";
    return `${index + 1}. ${row.effectKey} [${row.parameters || "无参数"}] → ${row.zoneName}（${row.zoneId}，${row.status}）${mechanic}${rule}\n   来源：${row.sourceKind}\n   ${row.reason}${actions}${evidence}\n   原始效果：${row.jsonPath}`;
  });
  return [title, ...details].join("\n");
}

/** 汇总当前已分类的 buff 形态，回答“不同黑板进入哪个乘区”的一般问题。 */
async function answerClassificationSummary(connection: Connection): Promise<string> {
  const rows = await rowsFromResult(
    await connection.query(
      `MATCH (e:Effect)-[mapping:EFFECT_ENTERS_ZONE]->(z:DamageZone)
       RETURN e.key AS effectKey, z.id AS zoneId, z.name AS zoneName,
              mapping.status AS status, count(*) AS count
       ORDER BY count DESC, effectKey, zoneId
       LIMIT 30`,
    ),
  );
  const lines = rows.map(
    (row) =>
      `- ${stringValue(row.effectKey)} → ${stringValue(row.zoneName)}（${stringValue(row.zoneId)}，${stringValue(row.status)}，${stringValue(row.count)} 条）`,
  );
  return [
    "当前藏品 buff → 乘区映射（按命中数排序）：",
    ...lines,
    "\n未出现在表中的 buff 会保持 unknown，不会被猜测成某个乘区；可用 trace 查看原始黑板后补充证据规则。",
  ].join("\n");
}

/** 使用图路径回答字段、具体藏品或乘区总览问题。 */
export async function answerQuestion(
  question: string,
  databaseOverride?: string,
): Promise<string> {
  const paths = resolveRepositoryPaths(databaseOverride);
  // 已知字段表来自同一领域规则源，无需先扫描数据库，可减少原生驱动往返。
  const mentionedField = [...new Set(ENGINE_FIELD_PATHS)]
    .filter((fieldPath) => question.includes(fieldPath))
    .sort((left, right) => right.length - left.length)[0];
  if (mentionedField) {
    const graph = await openGraph(paths);
    try {
      const answer = await answerField(graph.connection, mentionedField);
      if (answer) return answer;
    } finally {
      await closeGraph(graph);
    }
  }

  // 一般性黑板问题直接汇总，避免把“藏品”等通用词误识别为物品名。
  if (question.includes("黑板") && /不同|哪些/.test(question)) {
    const graph = await openGraph(paths);
    try {
      return await answerClassificationSummary(graph.connection);
    } finally {
      await closeGraph(graph);
    }
  }

  // Kuzu 0.11 的原生驱动在 Node 24 上连续大结果查询不稳定，路由查询后重新开连接。
  const lookupGraph = await openGraph(paths);
  let mentionedItem: string | null;
  try {
    mentionedItem = await findMentionedItem(lookupGraph.connection, question);
  } finally {
    await closeGraph(lookupGraph);
  }
  if (mentionedItem) {
    return traceItem(mentionedItem, databaseOverride);
  }

  const summaryGraph = await openGraph(paths);
  try {
    return await answerClassificationSummary(summaryGraph.connection);
  } finally {
    await closeGraph(summaryGraph);
  }
}

/** 打开图谱并追踪一个藏品。 */
export async function traceItem(
  term: string,
  databaseOverride?: string,
): Promise<string> {
  const graph = await openGraph(resolveRepositoryPaths(databaseOverride));
  try {
    return formatTrace(await traceItemWithConnection(graph.connection, term));
  } finally {
    await closeGraph(graph);
  }
}

/** 执行原始 Cypher，供领域研究时探索新路径。 */
export async function runCypher(
  statement: string,
  databaseOverride?: string,
): Promise<Record<string, KuzuValue>[]> {
  // Kuzu 0.11.3 的 Windows Node 驱动在 Node 24 下执行多语句会原生崩溃，因此只开放单条查询。
  const normalizedStatement = statement.trim().replace(/;$/, "");
  if (normalizedStatement.includes(";")) {
    throw new Error("graph:cypher 每次只允许一条 Cypher；请分别执行多条查询。");
  }
  const graph = await openGraph(resolveRepositoryPaths(databaseOverride));
  try {
    // 必须等待结果完全物化后再进入 finally 关闭原生数据库。
    return await rowsFromResult(await graph.connection.query(normalizedStatement));
  } finally {
    await closeGraph(graph);
  }
}
