import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

import {
  buildMechanicIndex,
  buildRelicZoneTable,
  deriveCondition,
  fallbackClassification,
  type BuffTemplateEntry,
  type ExportedRelicEffect,
  type ExportedZonePrediction,
  type RelicZoneExport,
  type TopicDetailForClassify,
} from "../lib/classify/index.js";
import { FormulaZoneExpression } from "../lib/formula/ast.js";
import {
  FormulaBook,
  type FormulaWritableZoneId,
} from "../lib/formula/formula-book.js";
import { resolveRepositoryPaths, toRepositoryPath } from "./paths.js";
import { runCypher } from "./query.js";

/** Kuzu 查询返回的一条 Effect → DamageZone 记录。 */
interface GraphEffectRow {
  effectId: string;
  effectKey: string;
  parameters: string;
  jsonPath: string;
  sourceKind: string;
  mechanic: string;
  events: string;
  components: string;
  zoneId: string;
  status: string;
  confidence: number;
  reason: string;
  evidencePath: string;
  ruleId: string;
}

/** GameData 主题表的校验导出所需最小结构。 */
interface RoguelikeTopicTableForExport {
  topics: Record<string, { name: string }>;
  details: Record<string, TopicDetailForClassify>;
}

/** 单主题 Graph 导出的摘要。 */
export interface RelicZoneValidationExportResult {
  graphOutputPath: string;
  itemCount: number;
  effectCount: number;
}

/** Graph 校验 JSON 的来源身份，供文档站拒绝混入 Mechanics 数据。 */
interface GraphRelicZoneArtifact extends RelicZoneExport {
  producer: {
    kind: "graph";
    activationPolicy: "not_applicable";
    numericEvaluation: false;
    description: string;
  };
}

/** 把 Kuzu 的松散值转换为稳定字符串。 */
function text(value: unknown): string {
  return value === null || value === undefined ? "" : String(value);
}

/** 把图中用分隔符保存的数组恢复为字符串数组。 */
function splitValues(value: string): string[] {
  return value.split(" | ").filter(Boolean);
}

/** 按 Effect ID 聚合一个效果可能命中的多个图谱乘区。 */
function groupGraphRows(rows: Record<string, unknown>[]): Map<string, GraphEffectRow[]> {
  const grouped = new Map<string, GraphEffectRow[]>();
  for (const row of rows) {
    const effectId = text(row.effectId);
    const normalized: GraphEffectRow = {
      effectId,
      effectKey: text(row.effectKey),
      parameters: text(row.parameters),
      jsonPath: text(row.jsonPath),
      sourceKind: text(row.sourceKind),
      mechanic: text(row.mechanic),
      events: text(row.events),
      components: text(row.components),
      zoneId: text(row.zoneId),
      status: text(row.status),
      confidence: Number(row.confidence ?? 0),
      reason: text(row.reason),
      evidencePath: text(row.evidencePath),
      ruleId: text(row.ruleId),
    };
    grouped.set(effectId, [...(grouped.get(effectId) ?? []), normalized]);
  }
  return grouped;
}

/** Graph 列只接受 FormulaBook 当前真实存在的可写乘区。 */
const WRITABLE_ZONE_IDS = new Set<FormulaWritableZoneId>(
  Object.values(new FormulaBook().zones)
    .filter((expression): expression is FormulaZoneExpression =>
      expression instanceof FormulaZoneExpression
    )
    .map((expression) => expression.zoneId as FormulaWritableZoneId),
);

/** 将 Kuzu 的字符串乘区安全收窄到 FormulaBook 可写乘区。 */
function isWritableZoneId(value: string): value is FormulaWritableZoneId {
  return WRITABLE_ZONE_IDS.has(value as FormulaWritableZoneId);
}

/** 将单条 Kuzu 映射边转换为页面使用的预测契约。 */
function exportPrediction(row: GraphEffectRow): ExportedZonePrediction | null {
  if (!isWritableZoneId(row.zoneId)) return null;
  return {
    zoneId: row.zoneId,
    status: row.status === "verified" ? "verified" : "inferred",
    confidence: Number.isFinite(row.confidence) ? row.confidence : 0,
    reason: row.reason,
    ruleId: row.ruleId,
    evidencePaths: splitValues(row.evidencePath),
  };
}

/** 只用 Kuzu 查询行构建 Graph 列，不融合或回填 Mechanics 结果。 */
function buildGraphArtifact(
  classified: RelicZoneExport,
  rows: Record<string, unknown>[],
): GraphRelicZoneArtifact {
  const graphByEffect = groupGraphRows(rows);
  const allEffects: ExportedRelicEffect[] = [];
  const items = classified.items.map((item) => {
    const zones = new Set<FormulaWritableZoneId>();
    const conditions = new Set<string>();
    const effects = item.effects.map((effect): ExportedRelicEffect => {
      const graphEffects = graphByEffect.get(effect.effectId) ?? [];
      const firstGraph = graphEffects[0];
      const predictions = graphEffects
        .map(exportPrediction)
        .filter((prediction): prediction is ExportedZonePrediction => prediction !== null);
      const events = splitValues(firstGraph?.events ?? "");
      const componentTypes = splitValues(firstGraph?.components ?? "");
      const condition = deriveCondition(events, effect.blackboard);
      const fallback = fallbackClassification(
        firstGraph?.effectKey ?? effect.key,
        firstGraph?.parameters ?? effect.parameters,
        firstGraph?.components ?? "",
      );
      const classification = predictions.length > 0 ? "predicted" : fallback.classification;
      for (const prediction of predictions) zones.add(prediction.zoneId);
      conditions.add(condition);
      const normalized: ExportedRelicEffect = {
        ...effect,
        source: firstGraph?.sourceKind || effect.source,
        key: firstGraph?.effectKey || effect.key,
        parameters: firstGraph?.parameters || effect.parameters,
        mechanic: {
          name: firstGraph?.mechanic ?? "",
          events,
          componentTypes,
        },
        condition,
        classification,
        evidenceStatuses: [...new Set(predictions.map((prediction) => prediction.status))],
        predictions,
        unclassifiedReason: classification === "predicted" ? null : fallback.reason,
        jsonPath: firstGraph?.jsonPath || effect.jsonPath,
      };
      allEffects.push(normalized);
      return normalized;
    });
    return { ...item, conditions: [...conditions], zones: [...zones], effects };
  });

  return {
    ...classified,
    generatedAt: new Date().toISOString(),
    producer: {
      kind: "graph",
      activationPolicy: "not_applicable",
      numericEvaluation: false,
      description: "Kuzu EFFECT_ENTERS_ZONE 图谱导出；没有融合或回填 Mechanics 数据。",
    },
    sources: [
      "ArknightsGameData/zh_CN/gamedata/excel/roguelike_topic_table.json",
      "ArknightsGameData/zh_CN/gamedata/battle/buff_template_data.json",
      ".data/arknights-knowledge.kuzu:EFFECT_ENTERS_ZONE",
    ],
    coverage: {
      verifiedEffectCount: allEffects.filter((effect) =>
        effect.evidenceStatuses.includes("verified")
      ).length,
      inferredEffectCount: allEffects.filter((effect) =>
        effect.evidenceStatuses.includes("inferred")
      ).length,
      unknownEffectCount: allEffects.filter((effect) =>
        effect.classification === "unknown"
      ).length,
      notApplicableEffectCount: allEffects.filter((effect) =>
        effect.classification === "not_applicable"
      ).length,
    },
    items,
  };
}

/** 从最新 GameData 构建 Graph 导出所需的藏品/effect 基线。 */
async function loadClassifiedTopic(topicId: string): Promise<RelicZoneExport> {
  const paths = resolveRepositoryPaths();
  const tablePath = path.join(paths.gameData, "excel", "roguelike_topic_table.json");
  const templatePath = path.join(paths.gameData, "battle", "buff_template_data.json");
  const data = JSON.parse(await readFile(tablePath, "utf8")) as RoguelikeTopicTableForExport;
  const detail = data.details[topicId];
  if (!detail) throw new Error(`GameData 中不存在主题：${topicId}`);
  const templates = JSON.parse(await readFile(templatePath, "utf8")) as Record<
    string,
    BuffTemplateEntry
  >;
  return buildRelicZoneTable({
    topicId,
    topicName: data.topics[topicId]?.name ?? topicId,
    detail,
    mechanicIndex: buildMechanicIndex(templates),
  });
}

/** 从可用正式图谱读取指定主题的 Effect → DamageZone 边；stale 状态不会阻断导出。 */
async function readGraphPredictionRows(
  topicId: string,
  databaseOverride?: string,
): Promise<Record<string, unknown>[]> {
  return await runCypher(
    `MATCH (i:Item)-[:ITEM_HAS_EFFECT]->(e:Effect)
     WHERE i.topic = '${topicId}' AND i.itemType = 'RELIC'
     OPTIONAL MATCH (e)-[mapping:EFFECT_ENTERS_ZONE]->(z:DamageZone)
     OPTIONAL MATCH (e)-[:EFFECT_USES_MECHANIC]->(mechanic:Mechanic)
     RETURN e.id AS effectId, e.key AS effectKey,
            e.parameters AS parameters, e.jsonPath AS jsonPath, e.sourceKind AS sourceKind,
            mechanic.name AS mechanic, mechanic.events AS events,
            mechanic.componentTypes AS components, z.id AS zoneId,
            mapping.status AS status, mapping.confidence AS confidence,
            mapping.reason AS reason, mapping.evidencePath AS evidencePath,
            mapping.ruleId AS ruleId
     ORDER BY e.jsonPath, z.stage`,
    databaseOverride,
  ) as Record<string, unknown>[];
}

/** 刷新一个主题的 Graph 对照 JSON；Mechanics 由文档页面运行时直接分析。 */
export async function exportRelicZoneValidation(
  topicId: string,
  outputDirectory: string,
  databaseOverride?: string,
): Promise<RelicZoneValidationExportResult> {
  if (!/^rogue_\d+$/.test(topicId)) throw new Error(`主题 ID 格式无效：${topicId}`);
  const paths = resolveRepositoryPaths(databaseOverride);
  // 先验证发布目录，再打开正式图谱，避免无效输出参数触发昂贵查询。
  const outputRoot = path.resolve(paths.root, outputDirectory);
  const relativeOutputRoot = path.relative(paths.root, outputRoot);
  if (relativeOutputRoot.startsWith("..") || path.isAbsolute(relativeOutputRoot) || relativeOutputRoot === "") {
    throw new Error(`Graph 乘区校验导出目录必须位于仓库内且不能是仓库根目录：${outputRoot}`);
  }
  const classified = await loadClassifiedTopic(topicId);
  const graphArtifact = buildGraphArtifact(
    classified,
    await readGraphPredictionRows(topicId, databaseOverride),
  );
  const graphOutputPath = path.join(outputRoot, `${topicId}.json`);
  await mkdir(path.dirname(graphOutputPath), { recursive: true });
  await writeFile(graphOutputPath, `${JSON.stringify(graphArtifact, null, 2)}\n`, "utf8");
  return {
    graphOutputPath: toRepositoryPath(paths.root, graphOutputPath),
    itemCount: classified.scope.itemCount,
    effectCount: classified.scope.effectCount,
  };
}

/** 列出当前 GameData 中所有可导出的集成战略主题。 */
export async function listRelicZoneTopicIds(): Promise<string[]> {
  const paths = resolveRepositoryPaths();
  const tablePath = path.join(paths.gameData, "excel", "roguelike_topic_table.json");
  const data = JSON.parse(await readFile(tablePath, "utf8")) as RoguelikeTopicTableForExport;
  return Object.keys(data.details)
    .filter((topicId) => /^rogue_\d+$/.test(topicId))
    .sort((left, right) =>
      Number(left.replace("rogue_", "")) - Number(right.replace("rogue_", ""))
    );
}
