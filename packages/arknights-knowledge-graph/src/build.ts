import { createHash } from "node:crypto";
import { readFile, readdir } from "node:fs/promises";
import path from "node:path";

import { RoguelikeTopicTableSchema } from "@arkrog/arknights-schema";
import type { Connection, KuzuValue } from "kuzu";

import {
  classifyEffect,
  DAMAGE_ZONES,
  FIELD_MAPPINGS,
} from "./domain/damage-zones.js";
import { closeGraph, executeBatch, openGraph } from "./graph/database.js";
import { createGraphSchema } from "./graph/schema.js";
import {
  resolveRepositoryPaths,
  toRepositoryPath,
} from "./paths.js";
import type { EffectContext, RepositoryPaths } from "./types.js";

/** Kuzu 批量写入接受的通用行。 */
type Row = Record<string, KuzuValue>;

/** 构建结果统计，用于 CI 和人工确认导入覆盖范围。 */
export interface BuildStatistics {
  /** 导入的数据源数量。 */
  sources: number;
  /** 导入的 schema 声明数量。 */
  schemas: number;
  /** 导入的人工文档章节数量。 */
  sections: number;
  /** 导入的游戏物品数量。 */
  items: number;
  /** 导入的藏品 buff 数量。 */
  effects: number;
  /** 导入的黑板参数数量。 */
  parameters: number;
  /** 导入的战斗模板机制数量。 */
  mechanics: number;
  /** 得到乘区结论的 buff 数量。 */
  classifiedEffects: number;
}

/** 内存中的规范化图数据；先收集再批量写入可显著降低原生调用次数。 */
interface GraphDataset {
  sources: Row[];
  schemas: Row[];
  sections: Row[];
  items: Row[];
  effects: Row[];
  parameters: Row[];
  fields: Row[];
  mechanics: Row[];
  zones: Row[];
  sourceDeclaresSchema: Row[];
  sourceHasSection: Row[];
  sourceContainsItem: Row[];
  sourceDefinesMechanic: Row[];
  schemaDescribesField: Row[];
  itemHasEffect: Row[];
  effectHasParameter: Row[];
  effectUsesMechanic: Row[];
  parameterMatchesField: Row[];
  sectionSupportsZone: Row[];
  fieldEntersZone: Row[];
  effectEntersZone: Row[];
}

/** 创建空数据集，所有数组名与 Kuzu 表保持一一对应。 */
function createDataset(): GraphDataset {
  return {
    sources: [],
    schemas: [],
    sections: [],
    items: [],
    effects: [],
    parameters: [],
    fields: [],
    mechanics: [],
    zones: [],
    sourceDeclaresSchema: [],
    sourceHasSection: [],
    sourceContainsItem: [],
    sourceDefinesMechanic: [],
    schemaDescribesField: [],
    itemHasEffect: [],
    effectHasParameter: [],
    effectUsesMechanic: [],
    parameterMatchesField: [],
    sectionSupportsZone: [],
    fieldEntersZone: [],
    effectEntersZone: [],
  };
}

/** 对原始文件内容计算稳定摘要，使图谱结论可关联到数据版本。 */
function digest(content: string): string {
  return createHash("sha256").update(content).digest("hex");
}

/** 递归收集指定扩展名文件，结果按路径排序以保证构建确定性。 */
async function listFiles(directory: string, extension: string): Promise<string[]> {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(
    entries.map(async (entry) => {
      const absolutePath = path.join(directory, entry.name);
      if (entry.isDirectory()) {
        return listFiles(absolutePath, extension);
      }
      return entry.isFile() && entry.name.endsWith(extension)
        ? [absolutePath]
        : [];
    }),
  );
  return nested.flat().sort();
}

/** 把文件注册为 Source 节点，并返回可用于关系端点的 ID。 */
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
async function collectSchemaKnowledge(
  dataset: GraphDataset,
  paths: RepositoryPaths,
): Promise<void> {
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
        fieldIds.forEach((fieldId) => {
          dataset.schemaDescribesField.push({ from: id, to: fieldId });
        });
      }
    }
  }
}

/** 根据章节文本识别它直接解释的公式乘区。 */
function supportedZoneIds(content: string): string[] {
  const identifiers: Array<[string, RegExp]> = [
    ["FLAT_ATK", /攻击力直加|ΣF/],
    ["OUTER_ATK", /局外攻击|ΣO/],
    ["INNER_ATK", /局内攻击|ΣI/],
    ["DEF_PERCENT", /防御百分比|ΣDP/],
    ["DEF_FLAT", /防御点数直减|ΣDF/],
    ["RES_PERCENT", /法抗百分比|ΣRP/],
    ["RES_FLAT", /法抗点数直减|ΣRF/],
    ["DAMAGE_AMPLIFICATION", /AMP\[|独立增伤/],
    ["ENEMY_HP_RELIC", /HP_R/],
    ["ENEMY_HP_COPPER", /HP_C/],
    ["ATTACK_SPEED", /ΣSPD|攻击速度加成/],
    ["SPECIAL_TARGET_AMPLIFICATION", /HW\[|化物.*独立增伤/],
    ["ADDITIONAL_DAMAGE_PACKET", /追加伤害|伤害包/],
  ];
  return identifiers
    .filter(([, expression]) => expression.test(content))
    .map(([zoneId]) => zoneId);
}

/** 将人工 Markdown 拆成章节节点，同时链接其明确支持的乘区。 */
async function collectDocumentKnowledge(
  dataset: GraphDataset,
  paths: RepositoryPaths,
): Promise<void> {
  const files = (await listFiles(paths.docs, ".md")).filter(
    (file) => !file.includes(`${path.sep}_extracted${path.sep}`),
  );

  for (const absolutePath of files) {
    const content = await readFile(absolutePath, "utf8");
    const sourceId = addSource(dataset, paths.root, absolutePath, "document", content);
    const sourcePath = toRepositoryPath(paths.root, absolutePath);
    const lines = content.split(/\r?\n/);
    const headingLines = lines
      .map((line, index) => ({ line, index }))
      .filter(({ line }) => /^#{1,6}\s+/.test(line));

    for (let index = 0; index < headingLines.length; index += 1) {
      const heading = headingLines[index];
      if (!heading) continue;
      const next = headingLines[index + 1];
      const sectionContent = lines
        .slice(heading.index, next?.index ?? lines.length)
        .join("\n")
        .trim();
      const title = heading.line.replace(/^#{1,6}\s+/, "").trim();
      const id = `section:${sourcePath}:${heading.index + 1}`;
      dataset.sections.push({
        id,
        title,
        content: sectionContent,
        sourcePath,
        line: BigInt(heading.index + 1),
      });
      dataset.sourceHasSection.push({ from: sourceId, to: id });
      supportedZoneIds(sectionContent).forEach((zoneId) => {
        dataset.sectionSupportsZone.push({ from: id, to: zoneId });
      });
    }
  }
}

/** 递归提取战斗模板使用的 Action 节点类型。 */
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

/** 导入 buff_template_data 的模板键、事件与战斗组件实现。 */
async function collectBattleMechanics(
  dataset: GraphDataset,
  paths: RepositoryPaths,
): Promise<Set<string>> {
  const absolutePath = path.join(paths.gameData, "battle", "buff_template_data.json");
  const content = await readFile(absolutePath, "utf8");
  const sourceId = addSource(dataset, paths.root, absolutePath, "game-data", content);
  const sourcePath = toRepositoryPath(paths.root, absolutePath);
  const templates = JSON.parse(content) as Record<
    string,
    { eventToActions?: Record<string, unknown> }
  >;
  const keys = new Set(Object.keys(templates));

  for (const [name, template] of Object.entries(templates)) {
    const id = `mechanic:${name}`;
    dataset.mechanics.push({
      id,
      name,
      componentTypes: [...componentTypes(template)].sort().join(" | "),
      events: Object.keys(template.eventToActions ?? {}).sort().join(" | "),
      sourcePath,
      jsonPath: `$[${JSON.stringify(name)}]`,
    });
    dataset.sourceDefinesMechanic.push({ from: sourceId, to: id });
  }
  return keys;
}

/** 将黑板数组转成分类规则需要的 Map。 */
function parameterMap(
  blackboard: Array<{ key: string; value: number; valueStr: string | null }>,
): ReadonlyMap<string, number | string | null> {
  return new Map(
    blackboard.map((parameter) => [
      parameter.key,
      parameter.valueStr ?? parameter.value,
    ]),
  );
}

/** 生成便于终端阅读的黑板摘要。 */
function parameterSummary(
  blackboard: Array<{ key: string; value: number; valueStr: string | null }>,
): string {
  return blackboard
    .map((parameter) => `${parameter.key}=${parameter.valueStr ?? parameter.value}`)
    .join(", ");
}

/** 导入集成战略物品、藏品 buff、黑板参数以及到战斗模板的引用。 */
async function collectRoguelikeKnowledge(
  dataset: GraphDataset,
  paths: RepositoryPaths,
  battleMechanicKeys: ReadonlySet<string>,
): Promise<void> {
  const absolutePath = path.join(paths.gameData, "excel", "roguelike_topic_table.json");
  const content = await readFile(absolutePath, "utf8");
  const sourceId = addSource(dataset, paths.root, absolutePath, "game-data", content);
  // schema 包先验证真实解包数据，图谱导入器只处理已经满足结构契约的值。
  const data = RoguelikeTopicTableSchema.parse(JSON.parse(content));
  const fieldIds = new Set(dataset.fields.map((field) => String(field.id)));

  for (const [topicId, detail] of Object.entries(data.details)) {
    for (const [rawId, item] of Object.entries(detail.items)) {
      const id = `item:${topicId}:${rawId}`;
      const jsonPath = `$.details.${topicId}.items[${JSON.stringify(rawId)}]`;
      dataset.items.push({
        id,
        rawId,
        topic: topicId,
        name: item.name,
        description: item.description ?? item.usage ?? "",
        rarity: item.rarity,
        jsonPath,
      });
      dataset.sourceContainsItem.push({ from: sourceId, to: id });
    }

    for (const [rawId, relic] of Object.entries(detail.relics)) {
      const itemId = `item:${topicId}:${rawId}`;
      if (!dataset.items.some((item) => item.id === itemId)) {
        dataset.items.push({
          id: itemId,
          rawId,
          topic: topicId,
          name: rawId,
          description: "",
          rarity: "UNKNOWN",
          jsonPath: `$.details.${topicId}.relics[${JSON.stringify(rawId)}]`,
        });
        dataset.sourceContainsItem.push({ from: sourceId, to: itemId });
      }

      relic.buffs.forEach((buff, buffIndex) => {
        const effectId = `effect:${topicId}:${rawId}:${buffIndex}`;
        const jsonPath = `$.details.${topicId}.relics[${JSON.stringify(rawId)}].buffs[${buffIndex}]`;
        const parameters = parameterMap(buff.blackboard);
        const context: EffectContext = { effectKey: buff.key, parameters };
        dataset.effects.push({
          id: effectId,
          key: buff.key,
          parameters: parameterSummary(buff.blackboard),
          jsonPath,
        });
        dataset.itemHasEffect.push({ from: itemId, to: effectId });

        const mechanic = parameters.get("key");
        if (typeof mechanic === "string" && battleMechanicKeys.has(mechanic)) {
          dataset.effectUsesMechanic.push({
            from: effectId,
            to: `mechanic:${mechanic}`,
          });
        }

        buff.blackboard.forEach((parameter, parameterIndex) => {
          const parameterId = `${effectId}:parameter:${parameterIndex}`;
          const fieldId = `field:blackboard.${parameter.key}`;
          if (!fieldIds.has(fieldId)) {
            fieldIds.add(fieldId);
            dataset.fields.push({
              id: fieldId,
              path: `blackboard.${parameter.key}`,
              description: `藏品 buff 黑板参数 ${parameter.key}`,
            });
          }
          dataset.parameters.push({
            id: parameterId,
            key: parameter.key,
            numericValue: parameter.value,
            stringValue: parameter.valueStr ?? "",
            jsonPath: `${jsonPath}.blackboard[${parameterIndex}]`,
          });
          dataset.effectHasParameter.push({ from: effectId, to: parameterId });
          dataset.parameterMatchesField.push({ from: parameterId, to: fieldId });
        });

        classifyEffect(context).forEach((mapping) => {
          dataset.effectEntersZone.push({
            from: effectId,
            to: mapping.zoneId,
            status: mapping.status,
            confidence: mapping.confidence,
            reason: mapping.reason,
            evidencePath: mapping.evidencePath,
          });
        });
      });
    }
  }

}

/** 添加公式乘区、已知字段以及字段级证据边。 */
function collectDomainKnowledge(dataset: GraphDataset): void {
  DAMAGE_ZONES.forEach((zone) => {
    dataset.zones.push({ ...zone, stage: BigInt(zone.stage) });
  });

  FIELD_MAPPINGS.forEach((mapping, fieldPath) => {
    const id = `field:${fieldPath}`;
    dataset.fields.push({
      id,
      path: fieldPath,
      description: `领域字段 ${fieldPath}`,
    });
    dataset.fieldEntersZone.push({
      from: id,
      to: mapping.zoneId,
      status: mapping.status,
      confidence: mapping.confidence,
      reason: mapping.reason,
      evidencePath: mapping.evidencePath,
    });
  });
}

/** 把规范化数据集按依赖顺序写入 Kuzu。 */
async function writeDataset(connection: Connection, dataset: GraphDataset): Promise<void> {
  const nodes: Array<[Row[], string]> = [
    [dataset.sources, "CREATE (n:Source {id: row.id, kind: row.kind, path: row.path, digest: row.digest})"],
    [dataset.schemas, "CREATE (n:SchemaDefinition {id: row.id, name: row.name, kind: row.kind, sourcePath: row.sourcePath})"],
    [dataset.sections, "CREATE (n:DocumentSection {id: row.id, title: row.title, content: row.content, sourcePath: row.sourcePath, line: row.line})"],
    [dataset.items, "CREATE (n:Item {id: row.id, rawId: row.rawId, topic: row.topic, name: row.name, description: row.description, rarity: row.rarity, jsonPath: row.jsonPath})"],
    [dataset.effects, "CREATE (n:Effect {id: row.id, key: row.key, parameters: row.parameters, jsonPath: row.jsonPath})"],
    [dataset.parameters, "CREATE (n:Parameter {id: row.id, key: row.key, numericValue: row.numericValue, stringValue: row.stringValue, jsonPath: row.jsonPath})"],
    [dataset.fields, "CREATE (n:Field {id: row.id, path: row.path, description: row.description})"],
    [dataset.mechanics, "CREATE (n:Mechanic {id: row.id, name: row.name, componentTypes: row.componentTypes, events: row.events, sourcePath: row.sourcePath, jsonPath: row.jsonPath})"],
    [dataset.zones, "CREATE (n:DamageZone {id: row.id, symbol: row.symbol, name: row.name, stage: row.stage, stacking: row.stacking, formula: row.formula})"],
  ];
  for (const [rows, create] of nodes) {
    await executeBatch(connection, `UNWIND $rows AS row ${create}`, rows);
  }

  const relations: Array<[Row[], string]> = [
    [dataset.sourceDeclaresSchema, "MATCH (a:Source {id: row.from}), (b:SchemaDefinition {id: row.to}) CREATE (a)-[:SOURCE_DECLARES_SCHEMA]->(b)"],
    [dataset.sourceHasSection, "MATCH (a:Source {id: row.from}), (b:DocumentSection {id: row.to}) CREATE (a)-[:SOURCE_HAS_SECTION]->(b)"],
    [dataset.sourceContainsItem, "MATCH (a:Source {id: row.from}), (b:Item {id: row.to}) CREATE (a)-[:SOURCE_CONTAINS_ITEM]->(b)"],
    [dataset.sourceDefinesMechanic, "MATCH (a:Source {id: row.from}), (b:Mechanic {id: row.to}) CREATE (a)-[:SOURCE_DEFINES_MECHANIC]->(b)"],
    [dataset.schemaDescribesField, "MATCH (a:SchemaDefinition {id: row.from}), (b:Field {id: row.to}) CREATE (a)-[:SCHEMA_DESCRIBES_FIELD]->(b)"],
    [dataset.itemHasEffect, "MATCH (a:Item {id: row.from}), (b:Effect {id: row.to}) CREATE (a)-[:ITEM_HAS_EFFECT]->(b)"],
    [dataset.effectHasParameter, "MATCH (a:Effect {id: row.from}), (b:Parameter {id: row.to}) CREATE (a)-[:EFFECT_HAS_PARAMETER]->(b)"],
    [dataset.effectUsesMechanic, "MATCH (a:Effect {id: row.from}), (b:Mechanic {id: row.to}) CREATE (a)-[:EFFECT_USES_MECHANIC]->(b)"],
    [dataset.parameterMatchesField, "MATCH (a:Parameter {id: row.from}), (b:Field {id: row.to}) CREATE (a)-[:PARAMETER_MATCHES_FIELD]->(b)"],
    [dataset.sectionSupportsZone, "MATCH (a:DocumentSection {id: row.from}), (b:DamageZone {id: row.to}) CREATE (a)-[:SECTION_SUPPORTS_ZONE]->(b)"],
    [dataset.fieldEntersZone, "MATCH (a:Field {id: row.from}), (b:DamageZone {id: row.to}) CREATE (a)-[:FIELD_ENTERS_ZONE {status: row.status, confidence: row.confidence, reason: row.reason, evidencePath: row.evidencePath}]->(b)"],
    [dataset.effectEntersZone, "MATCH (a:Effect {id: row.from}), (b:DamageZone {id: row.to}) CREATE (a)-[:EFFECT_ENTERS_ZONE {status: row.status, confidence: row.confidence, reason: row.reason, evidencePath: row.evidencePath}]->(b)"],
  ];
  for (const [rows, statement] of relations) {
    await executeBatch(connection, `UNWIND $rows AS row ${statement}`, rows);
  }
}

/** 重建完整 Kuzu 图谱。 */
export async function buildKnowledgeGraph(databaseOverride?: string): Promise<BuildStatistics> {
  const paths = resolveRepositoryPaths(databaseOverride);
  const dataset = createDataset();
  collectDomainKnowledge(dataset);
  const battleMechanicKeys = await collectBattleMechanics(dataset, paths);
  await collectRoguelikeKnowledge(dataset, paths, battleMechanicKeys);
  await collectSchemaKnowledge(dataset, paths);
  await collectDocumentKnowledge(dataset, paths);

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
    sections: dataset.sections.length,
    items: dataset.items.length,
    effects: dataset.effects.length,
    parameters: dataset.parameters.length,
    mechanics: dataset.mechanics.length,
    classifiedEffects: new Set(dataset.effectEntersZone.map((edge) => edge.from)).size,
  };
}
