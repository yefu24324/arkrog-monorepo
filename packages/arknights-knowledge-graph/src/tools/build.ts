import { createHash } from "node:crypto";
import { readFile, readdir } from "node:fs/promises";
import path from "node:path";

import { RoguelikeTopicTableSchema } from "@arkrog/arknights-schema";
import type { Connection, KuzuValue } from "kuzu";

import { DAMAGE_ZONES } from "./domain/damage-zones.js";
import {
  ENGINE_SEMANTIC_RULES,
  extractMechanicActionFacts,
  predictEngineZones,
  type MechanicActionFact,
} from "./domain/engine-rules.js";
import { closeGraph, executeBatch, openGraph } from "./graph/database.js";
import { createGraphSchema } from "./graph/schema.js";
import { resolveRepositoryPaths, toRepositoryPath } from "./paths.js";
import type { RepositoryPaths } from "./types.js";

/** Kuzu 批量写入接受的通用行。 */
type Row = Record<string, KuzuValue>;

/** 构建结果统计，用于 CI 和人工确认导入覆盖范围。 */
export interface BuildStatistics {
  /** 导入的数据源数量。 */
  sources: number;
  /** 导入的 schema 声明数量。 */
  schemas: number;
  /** 导入的游戏物品数量。 */
  items: number;
  /** 导入的原始效果数量。 */
  effects: number;
  /** 导入的黑板参数数量。 */
  parameters: number;
  /** 导入的战斗模板数量。 */
  mechanics: number;
  /** 导入的战斗 Action 事实数量。 */
  actions: number;
  /** 导入的可版本化语义规则数量。 */
  semanticRules: number;
  /** 自动得到乘区预测的效果数量。 */
  classifiedEffects: number;
}

/** 内存中的规范化图数据；先收集再批量写入可显著降低原生调用次数。 */
interface GraphDataset {
  sources: Row[];
  schemas: Row[];
  items: Row[];
  effects: Row[];
  parameters: Row[];
  fields: Row[];
  mechanics: Row[];
  actions: Row[];
  semanticRules: Row[];
  zones: Row[];
  sourceDeclaresSchema: Row[];
  sourceContainsItem: Row[];
  sourceDefinesMechanic: Row[];
  schemaDescribesField: Row[];
  itemHasEffect: Row[];
  effectHasParameter: Row[];
  effectUsesMechanic: Row[];
  mechanicHasAction: Row[];
  parameterMatchesField: Row[];
  ruleTargetsZone: Row[];
  effectPredictedBy: Row[];
  fieldEntersZone: Row[];
  effectEntersZone: Row[];
}

/** 一个战斗模板在构建期使用的完整语义输入。 */
interface BattleMechanicFacts {
  /** 模板名。 */
  name: string;
  /** 模板 Action 事实。 */
  actions: MechanicActionFact[];
}

/** 创建空数据集，所有数组名与 Kuzu 表保持一一对应。 */
function createDataset(): GraphDataset {
  return {
    sources: [], schemas: [], items: [], effects: [], parameters: [], fields: [],
    mechanics: [], actions: [], semanticRules: [], zones: [],
    sourceDeclaresSchema: [], sourceContainsItem: [], sourceDefinesMechanic: [],
    schemaDescribesField: [], itemHasEffect: [], effectHasParameter: [],
    effectUsesMechanic: [], mechanicHasAction: [], parameterMatchesField: [],
    ruleTargetsZone: [], effectPredictedBy: [], fieldEntersZone: [], effectEntersZone: [],
  };
}

/** 对原始文件内容计算稳定摘要，使图谱结论可关联到数据版本。 */
function digest(content: string): string {
  return createHash("sha256").update(content).digest("hex");
}

/** 递归收集指定扩展名文件，结果按路径排序以保证构建确定性。 */
async function listFiles(directory: string, extension: string): Promise<string[]> {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(entries.map(async (entry) => {
    const absolutePath = path.join(directory, entry.name);
    if (entry.isDirectory()) return listFiles(absolutePath, extension);
    return entry.isFile() && entry.name.endsWith(extension) ? [absolutePath] : [];
  }));
  return nested.flat().sort();
}

/** 把文件注册为 Source 节点，并返回关系端点 ID。 */
function addSource(
  dataset: GraphDataset,
  root: string,
  absolutePath: string,
  kind: string,
  content: string,
): string {
  const repositoryPath = toRepositoryPath(root, absolutePath);
  const id = `source:${repositoryPath}`;
  if (!dataset.sources.some((source) => source.id === id)) {
    dataset.sources.push({ id, kind, path: repositoryPath, digest: digest(content) });
  }
  return id;
}

/** 从 schema 源码提取显式类型与 Zod Schema 声明。 */
async function collectSchemaKnowledge(dataset: GraphDataset, paths: RepositoryPaths): Promise<void> {
  const files = await listFiles(paths.schemaSource, ".ts");
  const fieldIds = dataset.fields
    .map((field) => String(field.id))
    .filter((id) => id.startsWith("field:blackboard."));
  for (const absolutePath of files) {
    const content = await readFile(absolutePath, "utf8");
    const sourceId = addSource(dataset, paths.root, absolutePath, "schema", content);
    const sourcePath = toRepositoryPath(paths.root, absolutePath);
    const declarations = [
      ...content.matchAll(/export\s+(?:interface|type|enum)\s+([A-Za-z0-9_]+)/g),
      ...content.matchAll(/export\s+const\s+([A-Za-z0-9_]+Schema)\b/g),
    ];
    for (const declaration of declarations) {
      const name = declaration[1];
      if (!name) continue;
      const kind = name.endsWith("Schema") ? "zod" : "typescript";
      const id = `schema:${kind}:${name}:${sourcePath}`;
      dataset.schemas.push({ id, name, kind, sourcePath });
      dataset.sourceDeclaresSchema.push({ from: sourceId, to: id });
      if (["Blackboard", "BuffElement", "BlackboardSchema", "BuffElementSchema"].includes(name)) {
        fieldIds.forEach((fieldId) => dataset.schemaDescribesField.push({ from: id, to: fieldId }));
      }
    }
  }
}

/** 递归提取模板内全部 Action 类型，供人类浏览与搜索。 */
function componentTypes(value: unknown, target = new Set<string>()): Set<string> {
  if (Array.isArray(value)) {
    value.forEach((entry) => componentTypes(entry, target));
    return target;
  }
  if (!value || typeof value !== "object") return target;
  for (const [key, child] of Object.entries(value)) {
    if (key === "$type" && typeof child === "string") {
      target.add(child.split(",")[0]?.replace("Torappu.Battle.Action.Nodes+", "") ?? child);
    } else {
      componentTypes(child, target);
    }
  }
  return target;
}

/** 导入 buff_template_data 的模板、事件、Action 和属性计算细节。 */
async function collectBattleMechanics(
  dataset: GraphDataset,
  paths: RepositoryPaths,
): Promise<Map<string, BattleMechanicFacts>> {
  const absolutePath = path.join(paths.gameData, "battle", "buff_template_data.json");
  const content = await readFile(absolutePath, "utf8");
  const sourceId = addSource(dataset, paths.root, absolutePath, "game-data", content);
  const sourcePath = toRepositoryPath(paths.root, absolutePath);
  const templates = JSON.parse(content) as Record<string, { eventToActions?: Record<string, unknown[]> }>;
  const result = new Map<string, BattleMechanicFacts>();
  for (const [name, template] of Object.entries(templates)) {
    const mechanicId = `mechanic:${name}`;
    const mechanicJsonPath = `$[${JSON.stringify(name)}]`;
    const actions = extractMechanicActionFacts(template, mechanicJsonPath);
    dataset.mechanics.push({
      id: mechanicId,
      name,
      componentTypes: [...componentTypes(template)].sort().join(" | "),
      events: Object.keys(template.eventToActions ?? {}).sort().join(" | "),
      sourcePath,
      jsonPath: mechanicJsonPath,
    });
    dataset.sourceDefinesMechanic.push({ from: sourceId, to: mechanicId });
    actions.forEach((action, actionIndex) => {
      const actionId = `${mechanicId}:action:${actionIndex}`;
      dataset.actions.push({ id: actionId, ...action });
      dataset.mechanicHasAction.push({ from: mechanicId, to: actionId });
    });
    result.set(name, { name, actions });
  }
  return result;
}

/** 将黑板数组转成语义规则需要的 Map。 */
function parameterMap(
  blackboard: Array<{ key: string; value: number; valueStr: string | null }>,
): ReadonlyMap<string, number | string | null> {
  return new Map(blackboard.map((parameter) => [parameter.key, parameter.valueStr ?? parameter.value]));
}

/** 生成便于终端阅读的黑板摘要。 */
function parameterSummary(
  blackboard: Array<{ key: string; value: number; valueStr: string | null }>,
): string {
  return blackboard.map((parameter) => `${parameter.key}=${parameter.valueStr ?? parameter.value}`).join(", ");
}

/** 写入一个原始效果、参数、战斗模板引用和自动预测。 */
function addEffect(
  dataset: GraphDataset,
  fieldIds: Set<string>,
  battleMechanics: ReadonlyMap<string, BattleMechanicFacts>,
  input: {
    id: string;
    itemId: string;
    key: string;
    blackboard: Array<{ key: string; value: number; valueStr: string | null }>;
    sourceKind: string;
    jsonPath: string;
  },
): void {
  const parameters = parameterMap(input.blackboard);
  const mechanicValue = parameters.get("key");
  const mechanicName = typeof mechanicValue === "string" ? mechanicValue : "";
  const mechanic = battleMechanics.get(mechanicName);
  dataset.effects.push({
    id: input.id,
    key: input.key,
    parameters: parameterSummary(input.blackboard),
    sourceKind: input.sourceKind,
    jsonPath: input.jsonPath,
  });
  dataset.itemHasEffect.push({ from: input.itemId, to: input.id });
  if (mechanic) dataset.effectUsesMechanic.push({ from: input.id, to: `mechanic:${mechanicName}` });

  input.blackboard.forEach((parameter, parameterIndex) => {
    const parameterId = `${input.id}:parameter:${parameterIndex}`;
    const fieldId = `field:blackboard.${parameter.key}`;
    if (!fieldIds.has(fieldId)) {
      fieldIds.add(fieldId);
      dataset.fields.push({ id: fieldId, path: `blackboard.${parameter.key}`, description: `原始黑板参数 ${parameter.key}` });
    }
    dataset.parameters.push({
      id: parameterId,
      key: parameter.key,
      numericValue: parameter.value,
      stringValue: parameter.valueStr ?? "",
      jsonPath: `${input.jsonPath}.blackboard[${parameterIndex}]`,
    });
    dataset.effectHasParameter.push({ from: input.id, to: parameterId });
    dataset.parameterMatchesField.push({ from: parameterId, to: fieldId });
  });

  predictEngineZones({
    effectKey: input.key,
    parameters,
    mechanicName,
    actions: mechanic?.actions ?? [],
    sourceKind: input.sourceKind,
    jsonPath: input.jsonPath,
  }).forEach((prediction) => {
    dataset.effectEntersZone.push({
      from: input.id,
      to: prediction.zoneId,
      ruleId: prediction.ruleId,
      status: prediction.status,
      confidence: prediction.confidence,
      reason: prediction.reason,
      evidencePath: prediction.evidencePath,
    });
    dataset.effectPredictedBy.push({ from: input.id, to: prediction.ruleId });
  });
}

/** 导入集成战略物品、relics 和间接关联的 charBuffData。 */
async function collectRoguelikeKnowledge(
  dataset: GraphDataset,
  paths: RepositoryPaths,
  battleMechanics: ReadonlyMap<string, BattleMechanicFacts>,
): Promise<void> {
  const absolutePath = path.join(paths.gameData, "excel", "roguelike_topic_table.json");
  const content = await readFile(absolutePath, "utf8");
  const sourceId = addSource(dataset, paths.root, absolutePath, "game-data", content);
  const data = RoguelikeTopicTableSchema.parse(JSON.parse(content));
  const fieldIds = new Set(dataset.fields.map((field) => String(field.id)));

  for (const [topicId, detail] of Object.entries(data.details)) {
    const itemIds = new Set<string>();
    for (const [rawId, item] of Object.entries(detail.items)) {
      const id = `item:${topicId}:${rawId}`;
      itemIds.add(rawId);
      dataset.items.push({
        id,
        rawId,
        topic: topicId,
        name: item.name,
        description: item.description ?? item.usage ?? "",
        rarity: item.rarity,
        itemType: item.type,
        jsonPath: `$.details.${topicId}.items[${JSON.stringify(rawId)}]`,
      });
      dataset.sourceContainsItem.push({ from: sourceId, to: id });
    }

    for (const [rawId, relic] of Object.entries(detail.relics)) {
      const itemId = `item:${topicId}:${rawId}`;
      if (!itemIds.has(rawId)) {
        itemIds.add(rawId);
        dataset.items.push({
          id: itemId,
          rawId,
          topic: topicId,
          name: rawId,
          description: "",
          rarity: "UNKNOWN",
          itemType: "UNRESOLVED_RELIC_EFFECT",
          jsonPath: `$.details.${topicId}.relics[${JSON.stringify(rawId)}]`,
        });
        dataset.sourceContainsItem.push({ from: sourceId, to: itemId });
      }
      relic.buffs.forEach((buff, buffIndex) => addEffect(dataset, fieldIds, battleMechanics, {
        id: `effect:${topicId}:${rawId}:${buffIndex}`,
        itemId,
        key: buff.key,
        blackboard: buff.blackboard,
        sourceKind: "relics",
        jsonPath: `$.details.${topicId}.relics[${JSON.stringify(rawId)}].buffs[${buffIndex}]`,
      }));
    }

    for (const [characterBuffId, characterBuff] of Object.entries(detail.charBuffData)) {
      const linkedRawId = characterBuff.relatedItemId ?? characterBuff.iconId;
      if (!linkedRawId || !itemIds.has(linkedRawId)) continue;
      // 部分历史主题没有 buffs 数组；空数组表示该关联本身不提供可计算效果。
      (characterBuff.buffs ?? []).forEach((buff, buffIndex) => addEffect(dataset, fieldIds, battleMechanics, {
        id: `effect:${topicId}:charBuffData:${characterBuffId}:${buffIndex}`,
        itemId: `item:${topicId}:${linkedRawId}`,
        key: buff.key,
        blackboard: buff.blackboard,
        sourceKind: `charBuffData:${characterBuffId}`,
        jsonPath: `$.details.${topicId}.charBuffData[${JSON.stringify(characterBuffId)}].buffs[${buffIndex}]`,
      }));
    }
  }
}

/** 添加公式乘区、语义规则以及兼容字段映射。 */
function collectDomainKnowledge(dataset: GraphDataset): void {
  DAMAGE_ZONES.forEach((zone) => dataset.zones.push({ ...zone, stage: BigInt(zone.stage) }));
  const fieldIds = new Set<string>();
  for (const rule of ENGINE_SEMANTIC_RULES) {
    dataset.semanticRules.push({
      id: rule.id,
      version: BigInt(rule.version),
      name: rule.name,
      description: rule.description,
      zoneId: rule.zoneId,
      status: rule.status,
      confidence: rule.confidence,
    });
    dataset.ruleTargetsZone.push({ from: rule.id, to: rule.zoneId });
    for (const fieldPath of rule.fieldPaths ?? []) {
      const fieldId = `field:${fieldPath}`;
      if (!fieldIds.has(fieldId)) {
        fieldIds.add(fieldId);
        dataset.fields.push({ id: fieldId, path: fieldPath, description: `规则兼容字段 ${fieldPath}` });
      }
      dataset.fieldEntersZone.push({
        from: fieldId,
        to: rule.zoneId,
        ruleId: rule.id,
        status: rule.status,
        confidence: rule.confidence,
        reason: `${rule.name}：${rule.description}`,
        evidencePath: `packages/arknights-knowledge-graph/src/domain/engine-rules.ts#${rule.id}`,
      });
    }
  }
}

/** 把规范化数据集按依赖顺序写入 Kuzu。 */
async function writeDataset(connection: Connection, dataset: GraphDataset): Promise<void> {
  const nodes: Array<[Row[], string]> = [
    [dataset.sources, "CREATE (n:Source {id: row.id, kind: row.kind, path: row.path, digest: row.digest})"],
    [dataset.schemas, "CREATE (n:SchemaDefinition {id: row.id, name: row.name, kind: row.kind, sourcePath: row.sourcePath})"],
    [dataset.items, "CREATE (n:Item {id: row.id, rawId: row.rawId, topic: row.topic, name: row.name, description: row.description, rarity: row.rarity, itemType: row.itemType, jsonPath: row.jsonPath})"],
    [dataset.effects, "CREATE (n:Effect {id: row.id, key: row.key, parameters: row.parameters, sourceKind: row.sourceKind, jsonPath: row.jsonPath})"],
    [dataset.parameters, "CREATE (n:Parameter {id: row.id, key: row.key, numericValue: row.numericValue, stringValue: row.stringValue, jsonPath: row.jsonPath})"],
    [dataset.fields, "CREATE (n:Field {id: row.id, path: row.path, description: row.description})"],
    [dataset.mechanics, "CREATE (n:Mechanic {id: row.id, name: row.name, componentTypes: row.componentTypes, events: row.events, sourcePath: row.sourcePath, jsonPath: row.jsonPath})"],
    [dataset.actions, "CREATE (n:MechanicAction {id: row.id, event: row.event, componentType: row.componentType, targetType: row.targetType, buffOwner: row.buffOwner, attributeType: row.attributeType, formulaItem: row.formulaItem, damageMask: row.damageMask, applyWay: row.applyWay, rawJson: row.rawJson, jsonPath: row.jsonPath})"],
    [dataset.semanticRules, "CREATE (n:SemanticRule {id: row.id, version: row.version, name: row.name, description: row.description, zoneId: row.zoneId, status: row.status, confidence: row.confidence})"],
    [dataset.zones, "CREATE (n:DamageZone {id: row.id, symbol: row.symbol, name: row.name, stage: row.stage, stacking: row.stacking, formula: row.formula})"],
  ];
  for (const [rows, create] of nodes) await executeBatch(connection, `UNWIND $rows AS row ${create}`, rows);

  const relations: Array<[Row[], string]> = [
    [dataset.sourceDeclaresSchema, "MATCH (a:Source {id: row.from}), (b:SchemaDefinition {id: row.to}) CREATE (a)-[:SOURCE_DECLARES_SCHEMA]->(b)"],
    [dataset.sourceContainsItem, "MATCH (a:Source {id: row.from}), (b:Item {id: row.to}) CREATE (a)-[:SOURCE_CONTAINS_ITEM]->(b)"],
    [dataset.sourceDefinesMechanic, "MATCH (a:Source {id: row.from}), (b:Mechanic {id: row.to}) CREATE (a)-[:SOURCE_DEFINES_MECHANIC]->(b)"],
    [dataset.schemaDescribesField, "MATCH (a:SchemaDefinition {id: row.from}), (b:Field {id: row.to}) CREATE (a)-[:SCHEMA_DESCRIBES_FIELD]->(b)"],
    [dataset.itemHasEffect, "MATCH (a:Item {id: row.from}), (b:Effect {id: row.to}) CREATE (a)-[:ITEM_HAS_EFFECT]->(b)"],
    [dataset.effectHasParameter, "MATCH (a:Effect {id: row.from}), (b:Parameter {id: row.to}) CREATE (a)-[:EFFECT_HAS_PARAMETER]->(b)"],
    [dataset.effectUsesMechanic, "MATCH (a:Effect {id: row.from}), (b:Mechanic {id: row.to}) CREATE (a)-[:EFFECT_USES_MECHANIC]->(b)"],
    [dataset.mechanicHasAction, "MATCH (a:Mechanic {id: row.from}), (b:MechanicAction {id: row.to}) CREATE (a)-[:MECHANIC_HAS_ACTION]->(b)"],
    [dataset.parameterMatchesField, "MATCH (a:Parameter {id: row.from}), (b:Field {id: row.to}) CREATE (a)-[:PARAMETER_MATCHES_FIELD]->(b)"],
    [dataset.ruleTargetsZone, "MATCH (a:SemanticRule {id: row.from}), (b:DamageZone {id: row.to}) CREATE (a)-[:RULE_TARGETS_ZONE]->(b)"],
    [dataset.effectPredictedBy, "MATCH (a:Effect {id: row.from}), (b:SemanticRule {id: row.to}) CREATE (a)-[:EFFECT_PREDICTED_BY]->(b)"],
    [dataset.fieldEntersZone, "MATCH (a:Field {id: row.from}), (b:DamageZone {id: row.to}) CREATE (a)-[:FIELD_ENTERS_ZONE {ruleId: row.ruleId, status: row.status, confidence: row.confidence, reason: row.reason, evidencePath: row.evidencePath}]->(b)"],
    [dataset.effectEntersZone, "MATCH (a:Effect {id: row.from}), (b:DamageZone {id: row.to}) CREATE (a)-[:EFFECT_ENTERS_ZONE {ruleId: row.ruleId, status: row.status, confidence: row.confidence, reason: row.reason, evidencePath: row.evidencePath}]->(b)"],
  ];
  for (const [rows, statement] of relations) await executeBatch(connection, `UNWIND $rows AS row ${statement}`, rows);
}

/** 重建不依赖 docs/game 的生产 Kuzu 图谱。 */
export async function buildKnowledgeGraph(databaseOverride?: string): Promise<BuildStatistics> {
  const paths = resolveRepositoryPaths(databaseOverride);
  const dataset = createDataset();
  collectDomainKnowledge(dataset);
  const battleMechanics = await collectBattleMechanics(dataset, paths);
  await collectRoguelikeKnowledge(dataset, paths, battleMechanics);
  await collectSchemaKnowledge(dataset, paths);
  const graph = await openGraph(paths, true);
  try {
    await createGraphSchema(graph.connection);
    await writeDataset(graph.connection, dataset);
  } finally {
    await closeGraph(graph);
  }
  return {
    sources: dataset.sources.length,
    schemas: dataset.schemas.length,
    items: dataset.items.length,
    effects: dataset.effects.length,
    parameters: dataset.parameters.length,
    mechanics: dataset.mechanics.length,
    actions: dataset.actions.length,
    semanticRules: dataset.semanticRules.length,
    classifiedEffects: new Set(dataset.effectEntersZone.map((edge) => edge.from)).size,
  };
}
