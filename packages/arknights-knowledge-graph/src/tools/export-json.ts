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
import {
  buildFormulaRelicZoneValidationArtifact,
  type RelicZoneValidationArtifact,
} from "../lib/formula/index.js";
import { resolveRepositoryPaths, toRepositoryPath } from "./paths.js";
import { runCypher } from "./query.js";

/** 图查询返回的一条 Effect → DamageZone 记录。 */
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
  symbol: string;
  zoneName: string;
  formula: string;
  status: string;
  reason: string;
  evidencePath: string;
  ruleId: string;
}

/** 单主题导出结果。 */
export interface RelicZoneValidationExportResult {
  /** Kuzu 图谱预测产物。 */
  graphOutputPath: string;
  /** 公式贡献函数产物。 */
  formulaOutputPath: string;
  /** RELIC 藏品数量。 */
  itemCount: number;
  /** 直接与间接 buff 数量。 */
  effectCount: number;
}

/** GameData 主题表的最小读取结构。 */
interface RoguelikeTopicTableForExport {
  topics: Record<string, { name: string }>;
  details: Record<string, TopicDetailForClassify>;
}

/** 把 Kuzu 的松散值转换为稳定字符串。 */
function text(value: unknown): string {
  return value === null || value === undefined ? "" : String(value);
}

/** 把图中用 ` | ` 拼接的集合恢复为数组。 */
function splitValues(value: string): string[] {
  return value.split(" | ").filter(Boolean);
}

/** 按 Effect ID 聚合一个效果可能命中的多个乘区。 */
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
      symbol: text(row.symbol),
      zoneName: text(row.zoneName),
      formula: text(row.formula),
      status: text(row.status),
      reason: text(row.reason),
      evidencePath: text(row.evidencePath),
      ruleId: text(row.ruleId),
    };
    grouped.set(effectId, [...(grouped.get(effectId) ?? []), normalized]);
  }
  return grouped;
}

/** 将图中的一条映射边转换为统一 JSON 预测结构。 */
function exportPrediction(row: GraphEffectRow): ExportedZonePrediction {
  return {
    id: row.zoneId,
    symbol: row.symbol || row.zoneId,
    name: row.zoneName || row.zoneId,
    formula: row.formula,
    status: row.status,
    reason: row.reason,
    ruleId: row.ruleId,
    evidencePaths: splitValues(row.evidencePath),
  };
}

/** 用 Kuzu 的事实与边覆盖现场 classify 结果，确保 graph JSON 只展示图中预测。 */
function buildGraphArtifact(
  classified: RelicZoneExport,
  rows: Record<string, unknown>[],
): RelicZoneValidationArtifact {
  const graphByEffect = groupGraphRows(rows);
  let verifiedEffectCount = 0;
  let inferredEffectCount = 0;
  let unknownEffectCount = 0;
  let notApplicableEffectCount = 0;

  const items = classified.items.map((item) => {
    const itemZones = new Map<string, { id: string; symbol: string; name: string }>();
    const itemConditions = new Set<string>();
    const effects: ExportedRelicEffect[] = item.effects.map((effect) => {
      const graphEffects = graphByEffect.get(effect.effectId) ?? [];
      const firstGraph = graphEffects[0];
      const zoneRows = graphEffects.filter((row) => row.zoneId);
      const predictions = zoneRows.map(exportPrediction);
      const mechanicEvents = splitValues(firstGraph?.events ?? "");
      const mechanicComponents = splitValues(firstGraph?.components ?? "");
      const condition = deriveCondition(mechanicEvents, effect.blackboard);
      const fallback = fallbackClassification(
        firstGraph?.effectKey ?? effect.key,
        firstGraph?.parameters ?? effect.parameters,
        firstGraph?.components ?? "",
      );
      const classification = predictions.length > 0 ? "predicted" : fallback.classification;
      const evidenceStatuses = [...new Set(predictions.map((prediction) => prediction.status))];

      itemConditions.add(condition);
      for (const prediction of predictions) {
        itemZones.set(prediction.id, {
          id: prediction.id,
          symbol: prediction.symbol,
          name: prediction.name,
        });
      }
      if (evidenceStatuses.includes("verified")) verifiedEffectCount += 1;
      if (evidenceStatuses.includes("inferred")) inferredEffectCount += 1;
      if (classification === "unknown") unknownEffectCount += 1;
      if (classification === "not_applicable") notApplicableEffectCount += 1;

      return {
        ...effect,
        source: firstGraph?.sourceKind || effect.source,
        key: firstGraph?.effectKey || effect.key,
        parameters: firstGraph?.parameters || effect.parameters,
        mechanic: {
          name: firstGraph?.mechanic ?? "",
          events: mechanicEvents,
          componentTypes: mechanicComponents,
        },
        condition,
        classification,
        evidenceStatuses,
        predictions,
        unclassifiedReason: classification === "predicted" ? null : fallback.reason,
        jsonPath: firstGraph?.jsonPath || effect.jsonPath,
      };
    });

    return {
      ...item,
      conditions: [...itemConditions],
      zones: [...itemZones.values()],
      effects,
    };
  });

  return {
    ...classified,
    generatedAt: new Date().toISOString(),
    producer: {
      kind: "graph",
      activationPolicy: "not_applicable",
      numericEvaluation: false,
      description: "Kuzu EFFECT_ENTERS_ZONE 图谱预测；不执行运行时生效判定或公式数值求值。",
    },
    sources: [
      "ArknightsGameData/zh_CN/gamedata/excel/roguelike_topic_table.json",
      "ArknightsGameData/zh_CN/gamedata/battle/buff_template_data.json",
      "packages/arknights-schema/src",
      "packages/arknights-knowledge-graph/src/lib/domain/engine-rules.ts",
      ".data/arknights-knowledge.kuzu:EFFECT_ENTERS_ZONE",
    ],
    coverage: {
      verifiedEffectCount,
      inferredEffectCount,
      unknownEffectCount,
      notApplicableEffectCount,
    },
    items,
  };
}

/** 读取主题表与战斗模板，并构建纯 TS 现场分类基线。 */
async function loadClassifiedTopic(topicId: string): Promise<RelicZoneExport> {
  const paths = resolveRepositoryPaths();
  const tablePath = path.join(paths.gameData, "excel", "roguelike_topic_table.json");
  const templatePath = path.join(paths.gameData, "battle", "buff_template_data.json");
  const data = JSON.parse(await readFile(tablePath, "utf8")) as RoguelikeTopicTableForExport;
  const detail = data.details[topicId];
  if (!detail) throw new Error(`GameData 中不存在主题：${topicId}`);
  const buffTemplateData = JSON.parse(await readFile(templatePath, "utf8")) as Record<
    string,
    BuffTemplateEntry
  >;
  return buildRelicZoneTable({
    topicId,
    topicName: data.topics[topicId]?.name ?? topicId,
    detail,
    mechanicIndex: buildMechanicIndex(buffTemplateData),
  });
}

/** 查询指定主题的全部 Effect → DamageZone 图谱边与关联事实。 */
async function readGraphPredictionRows(
  topicId: string,
  databaseOverride?: string,
): Promise<Record<string, unknown>[]> {
  const rows = await runCypher(
    `MATCH (i:Item)-[:ITEM_HAS_EFFECT]->(e:Effect)
     WHERE i.topic = '${topicId}' AND i.itemType = 'RELIC'
     OPTIONAL MATCH (e)-[mapping:EFFECT_ENTERS_ZONE]->(z:DamageZone)
     OPTIONAL MATCH (e)-[:EFFECT_USES_MECHANIC]->(mechanic:Mechanic)
     RETURN e.id AS effectId, e.key AS effectKey,
            e.parameters AS parameters, e.jsonPath AS jsonPath, e.sourceKind AS sourceKind,
            mechanic.name AS mechanic, mechanic.events AS events,
            mechanic.componentTypes AS components, z.id AS zoneId,
            z.symbol AS symbol, z.name AS zoneName, z.formula AS formula,
            mapping.status AS status, mapping.reason AS reason,
            mapping.evidencePath AS evidencePath, mapping.ruleId AS ruleId
     ORDER BY e.jsonPath, z.stage`,
    databaseOverride,
  );
  return rows as Record<string, unknown>[];
}

/** 导出指定主题的 graph 与 formula 两份独立乘区 JSON。 */
export async function exportRelicZoneJson(
  topicId: string,
  databaseOverride?: string,
): Promise<RelicZoneValidationExportResult> {
  if (!/^rogue_\d+$/.test(topicId)) throw new Error(`主题 ID 格式无效：${topicId}`);
  const paths = resolveRepositoryPaths(databaseOverride);
  const classified = await loadClassifiedTopic(topicId);
  const graphArtifact = buildGraphArtifact(
    classified,
    await readGraphPredictionRows(topicId, databaseOverride),
  );
  const formulaArtifact = buildFormulaRelicZoneValidationArtifact(classified);
  const validationRoot = path.join(paths.root, "docs", "game", "relic-zone-validation");
  const graphOutputPath = path.join(validationRoot, "graph", `${topicId}.json`);
  const formulaOutputPath = path.join(validationRoot, "formula", `${topicId}.json`);

  await Promise.all([
    mkdir(path.dirname(graphOutputPath), { recursive: true }),
    mkdir(path.dirname(formulaOutputPath), { recursive: true }),
  ]);
  await Promise.all([
    writeFile(graphOutputPath, `${JSON.stringify(graphArtifact, null, 2)}\n`, "utf8"),
    writeFile(formulaOutputPath, `${JSON.stringify(formulaArtifact, null, 2)}\n`, "utf8"),
  ]);
  return {
    graphOutputPath: toRepositoryPath(paths.root, graphOutputPath),
    formulaOutputPath: toRepositoryPath(paths.root, formulaOutputPath),
    itemCount: classified.scope.itemCount,
    effectCount: classified.scope.effectCount,
  };
}

/** 列出 GameData 当前包含的全部 rogue_N 主题。 */
export async function listRelicZoneTopicIds(): Promise<string[]> {
  const paths = resolveRepositoryPaths();
  const tablePath = path.join(paths.gameData, "excel", "roguelike_topic_table.json");
  const data = JSON.parse(await readFile(tablePath, "utf8")) as RoguelikeTopicTableForExport;
  return Object.keys(data.details)
    .filter((topicId) => /^rogue_\d+$/.test(topicId))
    .sort(
      (left, right) =>
        Number(left.replace("rogue_", "")) - Number(right.replace("rogue_", "")),
    );
}
