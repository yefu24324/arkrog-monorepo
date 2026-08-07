import type { Connection, KuzuValue } from "kuzu";

import { closeGraph, openGraph, rowsFromResult } from "./graph/database.js";
import { assertUsableGraph } from "./graph-workspace.js";
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

/** 格式化主题或主题特殊系统概览。 */
async function traceTopicOrSystem(connection: Connection, term: string): Promise<string | null> {
  const topicRows = await parameterizedRows(
    connection,
    `MATCH (topic:Topic)
     WHERE topic.id = $term OR topic.name = $term OR $term CONTAINS topic.name
     OPTIONAL MATCH (topic)-[:TOPIC_HAS_SYSTEM]->(system:TopicSystem)
     RETURN topic.id AS topicId, topic.name AS topicName, topic.description AS topicDescription,
            system.id AS systemId, system.moduleType AS moduleType, system.name AS systemName,
            system.aliases AS aliases, system.description AS systemDescription,
            system.status AS status, system.objectCount AS objectCount, system.jsonPath AS jsonPath
     ORDER BY system.moduleType`,
    { term },
  );
  if (topicRows.length > 0) {
    const first = topicRows[0]!;
    const systems = topicRows.filter((row) => row.systemId).map((row) =>
      `- ${stringValue(row.systemName)} [${stringValue(row.moduleType)}]：${stringValue(row.systemDescription)}（${stringValue(row.objectCount)} 个递归对象，${stringValue(row.status)}）`);
    return [
      `${stringValue(first.topicName)}（${stringValue(first.topicId)}）`,
      stringValue(first.topicDescription),
      systems.length > 0 ? "特殊系统：" : "当前 GameData 的 moduleTypes 为空，明确记录为无特殊系统。",
      ...systems,
    ].filter(Boolean).join("\n");
  }

  const systemRows = await parameterizedRows(
    connection,
    `MATCH (topic:Topic)-[:TOPIC_HAS_SYSTEM]->(system:TopicSystem)
     WHERE system.id = $term OR system.moduleType = $term OR system.name = $term
        OR system.aliases CONTAINS $term OR $term CONTAINS system.name
     OPTIONAL MATCH (system)-[:TOPIC_SYSTEM_HAS_OBJECT]->(root:TopicSystemObject)
     RETURN topic.id AS topicId, topic.name AS topicName, system.id AS systemId,
            system.moduleType AS moduleType, system.name AS systemName, system.aliases AS aliases,
            system.description AS systemDescription, system.status AS status,
            system.objectCount AS objectCount, system.sourceDigest AS sourceDigest,
            system.reconstructedDigest AS reconstructedDigest, system.jsonPath AS jsonPath,
            root.objectType AS rootType, root.rawKey AS rootKey
     ORDER BY topic.id, system.moduleType, root.rawKey`,
    { term },
  );
  if (systemRows.length === 0) return null;
  const grouped = new Map<string, typeof systemRows>();
  for (const row of systemRows) {
    const rows = grouped.get(stringValue(row.systemId)) ?? [];
    rows.push(row);
    grouped.set(stringValue(row.systemId), rows);
  }
  return [...grouped.values()].map((rows) => {
    const first = rows[0]!;
    const roots = rows.filter((row) => row.rootKey).map((row) =>
      `- ${stringValue(row.rootKey)}（${stringValue(row.rootType)}）`);
    return [
      `${stringValue(first.systemName)} [${stringValue(first.moduleType)}]（${stringValue(first.systemId)}）`,
      `主题：${stringValue(first.topicName)}（${stringValue(first.topicId)}）`,
      `说明：${stringValue(first.systemDescription)}`,
      `别名：${stringValue(first.aliases, "无")}`,
      `状态：${stringValue(first.status)}；递归对象：${stringValue(first.objectCount)}`,
      `完整性：${stringValue(first.sourceDigest) === stringValue(first.reconstructedDigest) ? "摘要一致" : "摘要不一致"}`,
      `根对象：`,
      ...roots,
      `证据：${stringValue(first.jsonPath)}`,
    ].join("\n");
  }).join("\n\n");
}

/** 格式化 AI 识别并写入正式图谱的系统概念。 */
async function traceTopicConcept(connection: Connection, term: string): Promise<string | null> {
  const rows = await parameterizedRows(
    connection,
    `MATCH (system:TopicSystem)-[:TOPIC_SYSTEM_HAS_CONCEPT]->(concept:TopicSystemConcept)
     MATCH (topic:Topic)-[:TOPIC_HAS_SYSTEM]->(system)
     WHERE concept.id = $term OR concept.name = $term OR concept.aliases CONTAINS $term
        OR $term CONTAINS concept.name
     RETURN topic.id AS topicId, topic.name AS topicName, system.id AS systemId,
            system.name AS systemName, system.moduleType AS moduleType,
            concept.id AS conceptId, concept.name AS conceptName, concept.aliases AS aliases,
            concept.description AS description, concept.status AS status,
            concept.evidencePath AS evidencePath
     ORDER BY topic.id, system.moduleType, concept.name`,
    { term },
  );
  if (rows.length === 0) return null;
  return rows.map((row) => [
    `${stringValue(row.conceptName)}（${stringValue(row.conceptId)}）`,
    `主题：${stringValue(row.topicName)}（${stringValue(row.topicId)}）`,
    `所属系统：${stringValue(row.systemName)} [${stringValue(row.moduleType)}]`,
    `别名：${stringValue(row.aliases, "无")}`,
    `说明：${stringValue(row.description)}`,
    `结论状态：${stringValue(row.status)}`,
    `证据：${stringValue(row.evidencePath)}`,
  ].join("\n")).join("\n\n");
}

/** 追踪特殊系统具体对象的字段、效果与引用。 */
async function traceTopicSystemObject(connection: Connection, term: string): Promise<string | null> {
  const objects = await parameterizedRows(
    connection,
    `MATCH (object:TopicSystemObject)
     MATCH (topic:Topic)-[:TOPIC_HAS_SYSTEM]->(system:TopicSystem)
     WHERE system.id = object.systemId
       AND (object.id = $term OR object.rawKey = $term OR object.displayName = $term)
     RETURN object.id AS objectId, object.rawKey AS rawKey, object.displayName AS displayName,
            object.objectType AS objectType, object.description AS description,
            object.rawJson AS rawJson, object.status AS status, object.jsonPath AS jsonPath,
            topic.id AS topicId, topic.name AS topicName, system.id AS systemId,
            system.name AS systemName, system.moduleType AS moduleType
     ORDER BY topic.id, system.moduleType, object.jsonPath
     LIMIT 100`,
    { term },
  );
  if (objects.length === 0) return null;
  const sections: string[] = [];
  for (const object of objects) {
    const objectId = stringValue(object.objectId);
    const fields = await parameterizedRows(
      connection,
      `MATCH (object:TopicSystemObject {id: $objectId})-[:TOPIC_OBJECT_HAS_FIELD]->(field:TopicSystemField)
       RETURN field.name AS name, field.valueType AS valueType, field.stringValue AS stringValue,
              field.numericValue AS numericValue, field.booleanValue AS booleanValue,
              field.jsonPath AS jsonPath
       ORDER BY field.jsonPath LIMIT 120`,
      { objectId },
    );
    const effects = await parameterizedRows(
      connection,
      `MATCH (object:TopicSystemObject {id: $objectId})-[:TOPIC_OBJECT_HAS_EFFECT]->(effect:Effect)
       OPTIONAL MATCH (effect)-[mapping:EFFECT_ENTERS_ZONE]->(zone:DamageZone)
       OPTIONAL MATCH (effect)-[:EFFECT_USES_MECHANIC]->(mechanic:Mechanic)
       RETURN effect.key AS effectKey, effect.parameters AS parameters,
              effect.classification AS classification, effect.unclassifiedReason AS reason,
              effect.jsonPath AS jsonPath, mechanic.name AS mechanicName,
              zone.id AS zoneId, mapping.status AS zoneStatus
       ORDER BY effect.jsonPath, zone.id LIMIT 120`,
      { objectId },
    );
    const externalReferences = await parameterizedRows(
      connection,
      `MATCH (object:TopicSystemObject {id: $objectId})-[reference:TOPIC_OBJECT_REFERENCES_EXTERNAL]->(target:ExternalReference)
       RETURN reference.fieldName AS fieldName, target.targetRawId AS targetRawId,
              target.inferredKind AS inferredKind, target.status AS status,
              reference.evidencePath AS evidencePath
       ORDER BY reference.evidencePath LIMIT 80`,
      { objectId },
    );
    // 已解析引用与外部歧义引用分开展示，避免查询层只暴露失败解析的关系。
    const objectReferences = await parameterizedRows(
      connection,
      `MATCH (object:TopicSystemObject {id: $objectId})-[reference:TOPIC_OBJECT_REFERENCES_OBJECT]->(target:TopicSystemObject)
       RETURN reference.fieldName AS fieldName, target.id AS targetId,
              target.displayName AS targetName, target.objectType AS targetType,
              reference.evidencePath AS evidencePath
       ORDER BY reference.evidencePath LIMIT 80`,
      { objectId },
    );
    const itemReferences = await parameterizedRows(
      connection,
      `MATCH (object:TopicSystemObject {id: $objectId})-[reference:TOPIC_OBJECT_REFERENCES_ITEM]->(target:Item)
       RETURN reference.fieldName AS fieldName, target.id AS targetId,
              target.name AS targetName, target.itemType AS targetType,
              reference.evidencePath AS evidencePath
       ORDER BY reference.evidencePath LIMIT 80`,
      { objectId },
    );
    const mechanicReferences = await parameterizedRows(
      connection,
      `MATCH (object:TopicSystemObject {id: $objectId})-[reference:TOPIC_OBJECT_USES_MECHANIC]->(target:Mechanic)
       RETURN reference.fieldName AS fieldName, target.id AS targetId,
              target.name AS targetName, target.componentTypes AS targetType,
              reference.evidencePath AS evidencePath
       ORDER BY reference.evidencePath LIMIT 80`,
      { objectId },
    );
    const fieldLines = fields.map((field) => {
      const type = stringValue(field.valueType);
      const value = type === "number" ? stringValue(field.numericValue)
        : type === "boolean" ? stringValue(field.booleanValue)
          : type === "null" ? "null" : stringValue(field.stringValue);
      return `- ${stringValue(field.name)} = ${value}（${type}；${stringValue(field.jsonPath)}）`;
    });
    const effectLines = effects.map((effect) =>
      `- ${stringValue(effect.effectKey)} [${stringValue(effect.parameters, "无参数")}]：${stringValue(effect.classification)}${effect.mechanicName ? `；模板 ${stringValue(effect.mechanicName)}` : ""}${effect.zoneId ? `；乘区 ${stringValue(effect.zoneId)}（${stringValue(effect.zoneStatus)}）` : ""}\n  ${stringValue(effect.reason)}\n  证据：${stringValue(effect.jsonPath)}`);
    const referenceLines = externalReferences.map((reference) =>
      `- ${stringValue(reference.fieldName)} → ${stringValue(reference.targetRawId)}（${stringValue(reference.status)}；${stringValue(reference.inferredKind)}）\n  证据：${stringValue(reference.evidencePath)}`);
    const resolvedReferenceLines = [
      ...objectReferences.map((reference) =>
        `- ${stringValue(reference.fieldName)} → 系统对象 ${stringValue(reference.targetName)}（${stringValue(reference.targetId)}；${stringValue(reference.targetType)}）\n  证据：${stringValue(reference.evidencePath)}`),
      ...itemReferences.map((reference) =>
        `- ${stringValue(reference.fieldName)} → Item ${stringValue(reference.targetName)}（${stringValue(reference.targetId)}；${stringValue(reference.targetType)}）\n  证据：${stringValue(reference.evidencePath)}`),
      ...mechanicReferences.map((reference) =>
        `- ${stringValue(reference.fieldName)} → Mechanic ${stringValue(reference.targetName)}（${stringValue(reference.targetId)}；${stringValue(reference.targetType)}）\n  证据：${stringValue(reference.evidencePath)}`),
    ];
    sections.push([
      `${stringValue(object.displayName)}（${stringValue(object.rawKey)}；${objectId}）`,
      `主题：${stringValue(object.topicName)}（${stringValue(object.topicId)}）`,
      `系统：${stringValue(object.systemName)} [${stringValue(object.moduleType)}]`,
      `对象类型：${stringValue(object.objectType)}；状态：${stringValue(object.status)}`,
      `描述：${stringValue(object.description, "无独立描述")}`,
      `自身原始 JSON：${stringValue(object.rawJson)}`,
      ...(fieldLines.length > 0 ? ["字段：", ...fieldLines] : []),
      ...(effectLines.length > 0 ? ["buff/效果：", ...effectLines] : []),
      ...(resolvedReferenceLines.length > 0 ? ["已解析引用：", ...resolvedReferenceLines] : []),
      ...(referenceLines.length > 0 ? ["未解析或歧义引用：", ...referenceLines] : []),
      `证据：${stringValue(object.jsonPath)}`,
    ].join("\n"));
  }
  return sections.join("\n\n");
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
  await assertUsableGraph(databaseOverride);
  const paths = resolveRepositoryPaths(databaseOverride);
  // 主题、系统、概念和具体对象优先于藏品通用词匹配，避免“零件”等术语答偏。
  const topicGraph = await openGraph(paths);
  try {
    const topicAnswer = await traceTopicOrSystem(topicGraph.connection, question)
      ?? await traceTopicConcept(topicGraph.connection, question)
      ?? await traceTopicSystemObject(topicGraph.connection, question);
    if (topicAnswer) return topicAnswer;
  } finally {
    await closeGraph(topicGraph);
  }
  // 字段元数据来自正式图谱，查询层不读取源码内的具体语义规则。
  const fieldGraph = await openGraph(paths);
  let mentionedField: string | undefined;
  try {
    const fields = await rowsFromResult(
      await fieldGraph.connection.query("MATCH (f:Field) RETURN DISTINCT f.path AS path"),
    );
    mentionedField = fields
      .map((row) => stringValue(row.path))
      .filter((fieldPath) => fieldPath && question.includes(fieldPath))
      .sort((left, right) => right.length - left.length)[0];
  } finally {
    await closeGraph(fieldGraph);
  }
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
  await assertUsableGraph(databaseOverride);
  const graph = await openGraph(resolveRepositoryPaths(databaseOverride));
  try {
    return await traceTopicOrSystem(graph.connection, term)
      ?? await traceTopicConcept(graph.connection, term)
      ?? await traceTopicSystemObject(graph.connection, term)
      ?? formatTrace(await traceItemWithConnection(graph.connection, term));
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
  const forbidden = /\b(CREATE|MERGE|DELETE|DETACH|SET|REMOVE|DROP|ALTER|COPY|LOAD|IMPORT|EXPORT|INSTALL|UPDATE)\b/i;
  if (forbidden.test(normalizedStatement)) {
    throw new Error("graph:cypher 只允许只读查询，禁止创建、修改、删除或导入图谱数据。");
  }
  if (!/^(MATCH|OPTIONAL\s+MATCH|RETURN|UNWIND)\b/i.test(normalizedStatement)) {
    throw new Error("graph:cypher 只允许 MATCH、RETURN 或 UNWIND 开始的只读查询。");
  }
  await assertUsableGraph(databaseOverride);
  const graph = await openGraph(resolveRepositoryPaths(databaseOverride));
  try {
    // 必须等待结果完全物化后再进入 finally 关闭原生数据库。
    return await rowsFromResult(await graph.connection.query(normalizedStatement));
  } finally {
    await closeGraph(graph);
  }
}
