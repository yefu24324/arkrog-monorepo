import { createHash } from "node:crypto";
import { readFile, readdir, rename, rm } from "node:fs/promises";
import path from "node:path";

import { RoguelikeTopicTableSchema } from "@arkrog/arknights-schema";
import type { Connection, KuzuValue } from "kuzu";

import {
  fallbackClassification,
} from "../lib/classify/index.js";
import {
  extractMechanicActionFacts,
  predictEngineZonesWithRules,
  type EngineSemanticRule,
  type MechanicActionFact,
} from "../lib/domain/engine-rules.js";
import { FormulaZoneExpression } from "../lib/formula/ast.js";
import { FormulaBook } from "../lib/formula/formula-book.js";
import { closeGraph, executeBatch, openGraph } from "./graph/database.js";
import { createGraphSchema } from "./graph/schema.js";
import {
  collectGraphInputs,
  collectRulesDigest,
  collectTopicSystemsDigest,
  createBuildId,
  currentCoverage,
  assertGraphBuildApproved,
  loadAndValidateLocalRules,
  loadAndValidateTopicSystemInterpretations,
  writeCandidateManifest,
  writeGraphManifest,
  type GraphManifest,
  type LocalGraphRule,
} from "./graph-workspace.js";
import { resolveRepositoryPaths, toRepositoryPath } from "./paths.js";
import {
  normalizeTopicSystems,
  type TopicSystemInterpretation,
} from "./topic-systems.js";
import type { RepositoryPaths } from "./types.js";

/** Kuzu 批量写入接受的通用行。 */
type Row = Record<string, KuzuValue>;

/** Kuzu Node 驱动对批量 DOUBLE number 存在按位写入问题，统一以十进制文本传输。 */
function doubleText(value: number): string {
  return String(value);
}

/** 构建结果统计，用于 CI 和人工确认导入覆盖范围。 */
export interface BuildStatistics {
  /** 导入的数据源数量。 */
  sources: number;
  /** 导入的 schema 声明数量。 */
  schemas: number;
  /** 导入的游戏物品数量。 */
  items: number;
  /** 导入的肉鸽主题数量。 */
  topics: number;
  /** 导入的主题特殊系统数量。 */
  topicSystems: number;
  /** 递归导入的主题特殊系统对象数量。 */
  topicSystemObjects: number;
  /** 导入的主题系统标量字段数量。 */
  topicSystemFields: number;
  /** 已解析、外部和歧义引用总数。 */
  topicSystemReferences: number;
  /** 导入的肉鸽难度数量。 */
  difficulties: number;
  /** 从难度原文结构化出的效果数量。 */
  difficultyEffects: number;
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
  /** 自动得到乘区预测的难度效果数量。 */
  classifiedDifficultyEffects: number;
}

/** 内存中的规范化图数据；先收集再批量写入可显著降低原生调用次数。 */
interface GraphDataset {
  sources: Row[];
  schemas: Row[];
  items: Row[];
  topics: Row[];
  topicSystems: Row[];
  topicSystemObjects: Row[];
  topicSystemFields: Row[];
  topicSystemConcepts: Row[];
  externalReferences: Row[];
  difficulties: Row[];
  difficultyEffects: Row[];
  effects: Row[];
  parameters: Row[];
  fields: Row[];
  mechanics: Row[];
  actions: Row[];
  semanticRules: Row[];
  zones: Row[];
  sourceDeclaresSchema: Row[];
  sourceContainsItem: Row[];
  sourceContainsTopic: Row[];
  topicHasSystem: Row[];
  topicSystemHasObject: Row[];
  topicSystemHasConcept: Row[];
  topicObjectHasChild: Row[];
  topicObjectHasField: Row[];
  topicObjectHasEffect: Row[];
  topicObjectReferencesObject: Row[];
  topicObjectReferencesItem: Row[];
  topicObjectUsesMechanic: Row[];
  topicObjectReferencesExternal: Row[];
  sourceContainsDifficulty: Row[];
  sourceDefinesMechanic: Row[];
  schemaDescribesField: Row[];
  itemHasEffect: Row[];
  difficultyHasEffect: Row[];
  difficultyHasConditionalItem: Row[];
  effectHasParameter: Row[];
  effectUsesMechanic: Row[];
  mechanicHasAction: Row[];
  parameterMatchesField: Row[];
  ruleTargetsZone: Row[];
  sourceSupportsRule: Row[];
  sourceDefinesZone: Row[];
  effectPredictedBy: Row[];
  difficultyEffectPredictedBy: Row[];
  fieldEntersZone: Row[];
  effectEntersZone: Row[];
  difficultyEffectEntersZone: Row[];
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
    sources: [], schemas: [], items: [], topics: [], topicSystems: [], topicSystemObjects: [],
    topicSystemFields: [], topicSystemConcepts: [], externalReferences: [], difficulties: [], difficultyEffects: [],
    effects: [], parameters: [], fields: [],
    mechanics: [], actions: [], semanticRules: [], zones: [],
    sourceDeclaresSchema: [], sourceContainsItem: [], sourceContainsTopic: [], topicHasSystem: [],
    topicSystemHasObject: [], topicSystemHasConcept: [], topicObjectHasChild: [], topicObjectHasField: [],
    topicObjectHasEffect: [], topicObjectReferencesObject: [], topicObjectReferencesItem: [],
    topicObjectUsesMechanic: [], topicObjectReferencesExternal: [], sourceContainsDifficulty: [],
    sourceDefinesMechanic: [],
    schemaDescribesField: [], itemHasEffect: [], difficultyHasEffect: [],
    difficultyHasConditionalItem: [], effectHasParameter: [],
    effectUsesMechanic: [], mechanicHasAction: [], parameterMatchesField: [],
    ruleTargetsZone: [], sourceSupportsRule: [], sourceDefinesZone: [], effectPredictedBy: [], difficultyEffectPredictedBy: [],
    fieldEntersZone: [], effectEntersZone: [], difficultyEffectEntersZone: [],
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
  // GameData 存在带尾随空格的黑板键，进入统一语义规则前先规范化。
  return new Map(blackboard.map((parameter) => [parameter.key.trim(), parameter.valueStr ?? parameter.value]));
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
  semanticRules: readonly EngineSemanticRule[],
  fieldIds: Set<string>,
  battleMechanics: ReadonlyMap<string, BattleMechanicFacts>,
  input: {
    id: string;
    /** 藏品效果所属 Item；主题系统效果不提供。 */
    itemId?: string;
    /** 主题系统效果所属对象；藏品效果不提供。 */
    topicObjectId?: string;
    objectId: string;
    /** 规则匹配使用的对象种类。 */
    objectType?: string;
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
  const parametersText = parameterSummary(input.blackboard);
  if (input.itemId) dataset.itemHasEffect.push({ from: input.itemId, to: input.id });
  if (input.topicObjectId) dataset.topicObjectHasEffect.push({ from: input.topicObjectId, to: input.id });
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
      numericValue: doubleText(parameter.value),
      stringValue: parameter.valueStr ?? "",
      jsonPath: `${input.jsonPath}.blackboard[${parameterIndex}]`,
    });
    dataset.effectHasParameter.push({ from: input.id, to: parameterId });
    dataset.parameterMatchesField.push({ from: parameterId, to: fieldId });
  });

  const predictions = predictEngineZonesWithRules(semanticRules, {
    objectId: input.objectId,
    objectType: input.objectType ?? "relic",
    effectKey: input.key,
    parameters,
    mechanicName,
    actions: mechanic?.actions ?? [],
    sourceKind: input.sourceKind,
    jsonPath: input.jsonPath,
  });
  const componentText = mechanic?.actions.map((action) => action.componentType).filter(Boolean).join(" | ") ?? "";
  const fallback = fallbackClassification(input.key, parametersText, componentText);
  dataset.effects.push({
    id: input.id,
    key: input.key,
    parameters: parametersText,
    sourceKind: input.sourceKind,
    classification: predictions.length > 0 ? "predicted" : fallback.classification,
    unclassifiedReason: predictions.length > 0 ? "" : fallback.reason,
    jsonPath: input.jsonPath,
  });
  predictions.forEach((prediction) => {
    dataset.effectEntersZone.push({
      from: input.id,
      to: prediction.zoneId,
      ruleId: prediction.ruleId,
      status: prediction.status,
      confidence: doubleText(prediction.confidence),
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
  semanticRules: readonly EngineSemanticRule[],
  topicSystemInterpretations: readonly TopicSystemInterpretation[],
): Promise<void> {
  const absolutePath = path.join(paths.gameData, "excel", "roguelike_topic_table.json");
  const content = await readFile(absolutePath, "utf8");
  const sourceId = addSource(dataset, paths.root, absolutePath, "game-data", content);
  const data = RoguelikeTopicTableSchema.parse(JSON.parse(content));
  const fieldIds = new Set(dataset.fields.map((field) => String(field.id)));

  for (const [topicId, detail] of Object.entries(data.details)) {
    // 当前图谱版本导入藏品攻击力、防御力与最大生命事实；肉鸽难度等待后续按新 FormulaBook 单独重构。
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
      relic.buffs.forEach((buff, buffIndex) => addEffect(dataset, semanticRules, fieldIds, battleMechanics, {
        id: `effect:${topicId}:${rawId}:${buffIndex}`,
        itemId,
        objectId: rawId,
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
      (characterBuff.buffs ?? []).forEach((buff, buffIndex) => addEffect(dataset, semanticRules, fieldIds, battleMechanics, {
        id: `effect:${topicId}:charBuffData:${characterBuffId}:${buffIndex}`,
        itemId: `item:${topicId}:${linkedRawId}`,
        objectId: linkedRawId,
        key: buff.key,
        blackboard: buff.blackboard,
        sourceKind: `charBuffData:${characterBuffId}`,
        jsonPath: `$.details.${topicId}.charBuffData[${JSON.stringify(characterBuffId)}].buffs[${buffIndex}]`,
      }));
    }
  }

  /** 主题模块使用独立的通用递归事实层，不依赖任何具体模块的 TypeScript 分支。 */
  const normalized = normalizeTopicSystems(data, topicSystemInterpretations);
  const invalidDigests = normalized.systems.filter((system) => system.sourceDigest !== system.reconstructedDigest);
  if (invalidDigests.length > 0) {
    throw new Error(
      `主题特殊系统递归还原摘要不一致：${invalidDigests.map((system) => `${system.topicId}/${system.moduleType}`).join("、")}`,
    );
  }
  normalized.topics.forEach((topic) => {
    dataset.topics.push({
      id: topic.id,
      name: topic.name,
      description: topic.description,
      jsonPath: topic.jsonPath,
    });
    dataset.sourceContainsTopic.push({ from: sourceId, to: topic.id });
  });
  normalized.systems.forEach((system) => {
    dataset.topicSystems.push({ ...system, objectCount: BigInt(system.objectCount) });
    dataset.topicHasSystem.push({ from: system.topicId, to: system.id });
  });
  normalized.objects.forEach((object) => {
    dataset.topicSystemObjects.push({ ...object, arrayIndex: BigInt(object.arrayIndex) });
  });
  normalized.fields.forEach((field) => {
    dataset.topicSystemFields.push({
      ...field,
      numericValue: doubleText(field.numericValue),
    });
  });
  dataset.topicSystemHasObject.push(...normalized.systemHasObject);
  dataset.topicObjectHasChild.push(...normalized.objectHasChild.map((edge) => ({
    ...edge,
    arrayIndex: BigInt(edge.arrayIndex),
  })));
  dataset.topicObjectHasField.push(...normalized.objectHasField);

  normalized.buffs.forEach((buff) => addEffect(dataset, semanticRules, fieldIds, battleMechanics, {
    id: buff.id,
    topicObjectId: buff.objectId,
    objectId: buff.objectRawId,
    objectType: "topic-system",
    key: buff.key,
    blackboard: buff.blackboard,
    sourceKind: "topic-system-buff",
    jsonPath: buff.jsonPath,
  }));
  normalized.displayEffects.forEach((effect) => {
    dataset.effects.push({
      id: effect.id,
      key: "display_text",
      parameters: effect.text,
      sourceKind: "topic-system-display",
      classification: effect.classification,
      unclassifiedReason: effect.classification === "not_applicable"
        ? "资源、商店、路线或主题玩法规则不进入 FormulaBook。"
        : "仅由客户端显示文案证明，尚无黑板或战斗模板交叉证据。",
      jsonPath: effect.jsonPath,
    });
    dataset.topicObjectHasEffect.push({ from: effect.objectId, to: effect.id });
  });

  /** AI 解释只提供显示语义和概念，不控制 GameData 的实际覆盖范围。 */
  for (const interpretation of topicSystemInterpretations) {
    const systemId = `topic-system:${interpretation.topicId}:${interpretation.moduleType}`;
    for (const concept of interpretation.concepts ?? []) {
      const conceptId = `topic-concept:${digest(`${systemId}\0${concept.name}`).slice(0, 24)}`;
      dataset.topicSystemConcepts.push({
        id: conceptId,
        topicId: interpretation.topicId,
        systemId,
        name: concept.name,
        aliases: (concept.aliases ?? []).join(" | "),
        description: concept.description,
        status: concept.status,
        evidencePath: concept.evidencePath,
      });
      dataset.topicSystemHasConcept.push({ from: systemId, to: conceptId });
    }
  }

  /** 优先按系统对象原始键和显式 id 字段解析引用。 */
  const objectTargets = new Map<string, string[]>();
  const fieldsByObject = new Map<string, typeof normalized.fields>();
  for (const field of normalized.fields) {
    const fields = fieldsByObject.get(field.objectId) ?? [];
    fields.push(field);
    fieldsByObject.set(field.objectId, fields);
  }
  for (const object of normalized.objects) {
    const candidates = [object.rawKey];
    for (const field of fieldsByObject.get(object.id) ?? []) {
      if (field.name === "id" && field.stringValue) candidates.push(field.stringValue);
    }
    for (const candidate of candidates) {
      const targets = objectTargets.get(candidate) ?? [];
      if (!targets.includes(object.id)) targets.push(object.id);
      objectTargets.set(candidate, targets);
    }
  }
  const itemTargets = new Map(dataset.items.map((item) => [String(item.rawId), String(item.id)]));
  const mechanicTargets = new Set(battleMechanics.keys());
  const externalIds = new Set<string>();
  for (const reference of normalized.references) {
    const objectMatches = objectTargets.get(reference.targetRawId) ?? [];
    if (objectMatches.length === 1) {
      dataset.topicObjectReferencesObject.push({
        from: reference.fromObjectId,
        to: objectMatches[0]!,
        fieldName: reference.fieldName,
        evidencePath: reference.jsonPath,
      });
      continue;
    }
    const itemTarget = itemTargets.get(reference.targetRawId);
    if (itemTarget) {
      dataset.topicObjectReferencesItem.push({
        from: reference.fromObjectId,
        to: itemTarget,
        fieldName: reference.fieldName,
        evidencePath: reference.jsonPath,
      });
      continue;
    }
    if (mechanicTargets.has(reference.targetRawId)) {
      dataset.topicObjectUsesMechanic.push({
        from: reference.fromObjectId,
        to: `mechanic:${reference.targetRawId}`,
        fieldName: reference.fieldName,
        evidencePath: reference.jsonPath,
      });
      continue;
    }
    const status = objectMatches.length > 1 ? "ambiguous" : "unknown";
    const externalId = `external-reference:${digest(`${reference.targetRawId}\0${status}`).slice(0, 24)}`;
    if (!externalIds.has(externalId)) {
      externalIds.add(externalId);
      dataset.externalReferences.push({
        id: externalId,
        targetRawId: reference.targetRawId,
        inferredKind: reference.fieldName,
        status,
      });
    }
    dataset.topicObjectReferencesExternal.push({
      from: reference.fromObjectId,
      to: externalId,
      fieldName: reference.fieldName,
      evidencePath: reference.jsonPath,
    });
  }
}

/** 添加 FormulaBook 真实可写乘区、属性语义规则以及字段映射。 */
async function collectDomainKnowledge(
  dataset: GraphDataset,
  semanticRules: readonly LocalGraphRule[],
  paths: RepositoryPaths,
): Promise<void> {
  const formulaBookPath = path.join(
    paths.root,
    "packages",
    "arknights-knowledge-graph",
    "src",
    "lib",
    "formula",
    "formula-book.ts",
  );
  const formulaSourceId = addSource(
    dataset,
    paths.root,
    formulaBookPath,
    "formula-book",
    await readFile(formulaBookPath, "utf8"),
  );
  const writableZones = Object.values(new FormulaBook().zones)
    .filter((zone): zone is FormulaZoneExpression => zone instanceof FormulaZoneExpression);
  writableZones.forEach((zone, index) => {
    dataset.zones.push({
      id: zone.zoneId,
      // 图谱关系只依赖 FormulaBook ID；中文展示由 docs 从同一枚举注释读取。
      symbol: zone.zoneId,
      name: zone.zoneId,
      stage: BigInt(index),
      stacking: zone.operator,
      formula: "",
    });
    dataset.sourceDefinesZone.push({ from: formulaSourceId, to: zone.zoneId });
  });
  const fieldIds = new Set<string>();
  const sourceByPath = new Map<string, string>();
  const evidenceFiles = [...new Set(semanticRules.flatMap((rule) => rule.evidencePaths))]
    .map((evidencePath) => evidencePath.split("#")[0] ?? "")
    .filter(Boolean);
  for (const evidencePath of evidenceFiles) {
    const absolutePath = path.resolve(paths.root, evidencePath);
    const relative = path.relative(paths.root, absolutePath);
    if (!relative || relative.startsWith("..") || path.isAbsolute(relative)) continue;
    try {
      const content = await readFile(absolutePath, "utf8");
      sourceByPath.set(evidencePath, addSource(dataset, paths.root, absolutePath, "knowledge", content));
    } catch {
      // 规则校验阶段会把不存在的证据路径列为冲突；这里不制造无来源节点。
    }
  }
  for (const rule of semanticRules) {
    dataset.semanticRules.push({
      id: rule.id,
      version: BigInt(rule.version),
      name: rule.name,
      description: rule.description,
      zoneId: rule.zoneId,
      authority: rule.authority,
      status: rule.status,
      confidence: doubleText(rule.confidence),
      evidencePaths: rule.evidencePaths.join(" | "),
    });
    dataset.ruleTargetsZone.push({ from: rule.id, to: rule.zoneId });
    for (const evidencePath of rule.evidencePaths) {
      const sourcePath = evidencePath.split("#")[0] ?? "";
      const sourceId = sourceByPath.get(sourcePath);
      if (sourceId) dataset.sourceSupportsRule.push({ from: sourceId, to: rule.id, evidencePath });
    }
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
        confidence: doubleText(rule.confidence),
        reason: `${rule.name}：${rule.description}`,
        evidencePath: `.data/arknights-knowledge-graph/rules#${rule.id}`,
      });
    }
  }
}

/** 把规范化数据集按依赖顺序写入 Kuzu。 */
async function writeDataset(connection: Connection, dataset: GraphDataset): Promise<void> {
  const nodes: Array<[Row[], string]> = [
    [dataset.sources, "CREATE (n:Source {id: row.id, kind: row.kind, path: row.path, digest: row.digest})"],
    [dataset.schemas, "CREATE (n:SchemaDefinition {id: row.id, name: row.name, kind: row.kind, sourcePath: row.sourcePath})"],
    [dataset.topics, "CREATE (n:Topic {id: row.id, name: row.name, description: row.description, jsonPath: row.jsonPath})"],
    [dataset.topicSystems, "CREATE (n:TopicSystem {id: row.id, topicId: row.topicId, moduleType: row.moduleType, moduleKey: row.moduleKey, name: row.name, aliases: row.aliases, description: row.description, status: row.status, objectCount: row.objectCount, sourceDigest: row.sourceDigest, reconstructedDigest: row.reconstructedDigest, jsonPath: row.jsonPath})"],
    [dataset.topicSystemObjects, "CREATE (n:TopicSystemObject {id: row.id, topicId: row.topicId, systemId: row.systemId, objectType: row.objectType, rawKey: row.rawKey, arrayIndex: row.arrayIndex, displayName: row.displayName, description: row.description, searchText: row.searchText, rawJson: row.rawJson, status: row.status, jsonPath: row.jsonPath})"],
    [dataset.topicSystemFields, "CREATE (n:TopicSystemField {id: row.id, objectId: row.objectId, name: row.name, valueType: row.valueType, stringValue: row.stringValue, numericValue: CAST(row.numericValue AS DOUBLE), booleanValue: row.booleanValue, jsonPath: row.jsonPath})"],
    [dataset.topicSystemConcepts, "CREATE (n:TopicSystemConcept {id: row.id, topicId: row.topicId, systemId: row.systemId, name: row.name, aliases: row.aliases, description: row.description, status: row.status, evidencePath: row.evidencePath})"],
    [dataset.externalReferences, "CREATE (n:ExternalReference {id: row.id, targetRawId: row.targetRawId, inferredKind: row.inferredKind, status: row.status})"],
    [dataset.items, "CREATE (n:Item {id: row.id, rawId: row.rawId, topic: row.topic, name: row.name, description: row.description, rarity: row.rarity, itemType: row.itemType, jsonPath: row.jsonPath})"],
    [dataset.difficulties, "CREATE (n:RogueDifficulty {id: row.id, topic: row.topic, modeDifficulty: row.modeDifficulty, grade: row.grade, name: row.name, ruleDesc: row.ruleDesc, classification: row.classification, unclassifiedReason: row.unclassifiedReason, jsonPath: row.jsonPath})"],
    [dataset.difficultyEffects, "CREATE (n:DifficultyEffect {id: row.id, matchedText: row.matchedText, numericValue: CAST(row.numericText AS DOUBLE), target: row.target, damageTypes: row.damageTypes, evidenceKind: row.evidenceKind, jsonPath: row.jsonPath})"],
    [dataset.effects, "CREATE (n:Effect {id: row.id, key: row.key, parameters: row.parameters, sourceKind: row.sourceKind, classification: row.classification, unclassifiedReason: row.unclassifiedReason, jsonPath: row.jsonPath})"],
    [dataset.parameters, "CREATE (n:Parameter {id: row.id, key: row.key, numericValue: CAST(row.numericValue AS DOUBLE), stringValue: row.stringValue, jsonPath: row.jsonPath})"],
    [dataset.fields, "CREATE (n:Field {id: row.id, path: row.path, description: row.description})"],
    [dataset.mechanics, "CREATE (n:Mechanic {id: row.id, name: row.name, componentTypes: row.componentTypes, events: row.events, sourcePath: row.sourcePath, jsonPath: row.jsonPath})"],
    [dataset.actions, "CREATE (n:MechanicAction {id: row.id, event: row.event, componentType: row.componentType, targetType: row.targetType, buffOwner: row.buffOwner, attributeType: row.attributeType, formulaItem: row.formulaItem, damageMask: row.damageMask, applyWay: row.applyWay, rawJson: row.rawJson, jsonPath: row.jsonPath})"],
    [dataset.semanticRules, "CREATE (n:SemanticRule {id: row.id, version: row.version, name: row.name, description: row.description, zoneId: row.zoneId, authority: row.authority, status: row.status, confidence: CAST(row.confidence AS DOUBLE), evidencePaths: row.evidencePaths})"],
    [dataset.zones, "CREATE (n:DamageZone {id: row.id, symbol: row.symbol, name: row.name, stage: row.stage, stacking: row.stacking, formula: row.formula})"],
  ];
  for (const [rows, create] of nodes) await executeBatch(connection, `UNWIND $rows AS row ${create}`, rows);

  const relations: Array<[Row[], string]> = [
    [dataset.sourceDeclaresSchema, "MATCH (a:Source {id: row.from}), (b:SchemaDefinition {id: row.to}) CREATE (a)-[:SOURCE_DECLARES_SCHEMA]->(b)"],
    [dataset.sourceContainsTopic, "MATCH (a:Source {id: row.from}), (b:Topic {id: row.to}) CREATE (a)-[:SOURCE_CONTAINS_TOPIC]->(b)"],
    [dataset.topicHasSystem, "MATCH (a:Topic {id: row.from}), (b:TopicSystem {id: row.to}) CREATE (a)-[:TOPIC_HAS_SYSTEM]->(b)"],
    [dataset.topicSystemHasObject, "MATCH (a:TopicSystem {id: row.from}), (b:TopicSystemObject {id: row.to}) CREATE (a)-[:TOPIC_SYSTEM_HAS_OBJECT]->(b)"],
    [dataset.topicSystemHasConcept, "MATCH (a:TopicSystem {id: row.from}), (b:TopicSystemConcept {id: row.to}) CREATE (a)-[:TOPIC_SYSTEM_HAS_CONCEPT]->(b)"],
    [dataset.topicObjectHasChild, "MATCH (a:TopicSystemObject {id: row.from}), (b:TopicSystemObject {id: row.to}) CREATE (a)-[:TOPIC_OBJECT_HAS_CHILD {key: row.key, arrayIndex: row.arrayIndex}]->(b)"],
    [dataset.topicObjectHasField, "MATCH (a:TopicSystemObject {id: row.from}), (b:TopicSystemField {id: row.to}) CREATE (a)-[:TOPIC_OBJECT_HAS_FIELD]->(b)"],
    [dataset.topicObjectHasEffect, "MATCH (a:TopicSystemObject {id: row.from}), (b:Effect {id: row.to}) CREATE (a)-[:TOPIC_OBJECT_HAS_EFFECT]->(b)"],
    [dataset.topicObjectReferencesObject, "MATCH (a:TopicSystemObject {id: row.from}), (b:TopicSystemObject {id: row.to}) CREATE (a)-[:TOPIC_OBJECT_REFERENCES_OBJECT {fieldName: row.fieldName, evidencePath: row.evidencePath}]->(b)"],
    [dataset.topicObjectReferencesItem, "MATCH (a:TopicSystemObject {id: row.from}), (b:Item {id: row.to}) CREATE (a)-[:TOPIC_OBJECT_REFERENCES_ITEM {fieldName: row.fieldName, evidencePath: row.evidencePath}]->(b)"],
    [dataset.topicObjectUsesMechanic, "MATCH (a:TopicSystemObject {id: row.from}), (b:Mechanic {id: row.to}) CREATE (a)-[:TOPIC_OBJECT_USES_MECHANIC {fieldName: row.fieldName, evidencePath: row.evidencePath}]->(b)"],
    [dataset.topicObjectReferencesExternal, "MATCH (a:TopicSystemObject {id: row.from}), (b:ExternalReference {id: row.to}) CREATE (a)-[:TOPIC_OBJECT_REFERENCES_EXTERNAL {fieldName: row.fieldName, evidencePath: row.evidencePath}]->(b)"],
    [dataset.sourceContainsItem, "MATCH (a:Source {id: row.from}), (b:Item {id: row.to}) CREATE (a)-[:SOURCE_CONTAINS_ITEM]->(b)"],
    [dataset.sourceContainsDifficulty, "MATCH (a:Source {id: row.from}), (b:RogueDifficulty {id: row.to}) CREATE (a)-[:SOURCE_CONTAINS_DIFFICULTY]->(b)"],
    [dataset.sourceDefinesMechanic, "MATCH (a:Source {id: row.from}), (b:Mechanic {id: row.to}) CREATE (a)-[:SOURCE_DEFINES_MECHANIC]->(b)"],
    [dataset.schemaDescribesField, "MATCH (a:SchemaDefinition {id: row.from}), (b:Field {id: row.to}) CREATE (a)-[:SCHEMA_DESCRIBES_FIELD]->(b)"],
    [dataset.itemHasEffect, "MATCH (a:Item {id: row.from}), (b:Effect {id: row.to}) CREATE (a)-[:ITEM_HAS_EFFECT]->(b)"],
    [dataset.difficultyHasEffect, "MATCH (a:RogueDifficulty {id: row.from}), (b:DifficultyEffect {id: row.to}) CREATE (a)-[:DIFFICULTY_HAS_EFFECT]->(b)"],
    [dataset.difficultyHasConditionalItem, "MATCH (a:RogueDifficulty {id: row.from}), (b:Item {id: row.to}) CREATE (a)-[:DIFFICULTY_HAS_CONDITIONAL_ITEM {kind: row.kind, sourceItemId: row.sourceItemId, choiceId: row.choiceId, buffIndex: row.buffIndex, evidencePath: row.evidencePath}]->(b)"],
    [dataset.effectHasParameter, "MATCH (a:Effect {id: row.from}), (b:Parameter {id: row.to}) CREATE (a)-[:EFFECT_HAS_PARAMETER]->(b)"],
    [dataset.effectUsesMechanic, "MATCH (a:Effect {id: row.from}), (b:Mechanic {id: row.to}) CREATE (a)-[:EFFECT_USES_MECHANIC]->(b)"],
    [dataset.mechanicHasAction, "MATCH (a:Mechanic {id: row.from}), (b:MechanicAction {id: row.to}) CREATE (a)-[:MECHANIC_HAS_ACTION]->(b)"],
    [dataset.parameterMatchesField, "MATCH (a:Parameter {id: row.from}), (b:Field {id: row.to}) CREATE (a)-[:PARAMETER_MATCHES_FIELD]->(b)"],
    [dataset.ruleTargetsZone, "MATCH (a:SemanticRule {id: row.from}), (b:DamageZone {id: row.to}) CREATE (a)-[:RULE_TARGETS_ZONE]->(b)"],
    [dataset.sourceSupportsRule, "MATCH (a:Source {id: row.from}), (b:SemanticRule {id: row.to}) CREATE (a)-[:SOURCE_SUPPORTS_RULE {evidencePath: row.evidencePath}]->(b)"],
    [dataset.sourceDefinesZone, "MATCH (a:Source {id: row.from}), (b:DamageZone {id: row.to}) CREATE (a)-[:SOURCE_DEFINES_ZONE]->(b)"],
    [dataset.effectPredictedBy, "MATCH (a:Effect {id: row.from}), (b:SemanticRule {id: row.to}) CREATE (a)-[:EFFECT_PREDICTED_BY]->(b)"],
    [dataset.difficultyEffectPredictedBy, "MATCH (a:DifficultyEffect {id: row.from}), (b:SemanticRule {id: row.to}) CREATE (a)-[:DIFFICULTY_EFFECT_PREDICTED_BY]->(b)"],
    [dataset.fieldEntersZone, "MATCH (a:Field {id: row.from}), (b:DamageZone {id: row.to}) CREATE (a)-[:FIELD_ENTERS_ZONE {ruleId: row.ruleId, status: row.status, confidence: CAST(row.confidence AS DOUBLE), reason: row.reason, evidencePath: row.evidencePath}]->(b)"],
    [dataset.effectEntersZone, "MATCH (a:Effect {id: row.from}), (b:DamageZone {id: row.to}) CREATE (a)-[:EFFECT_ENTERS_ZONE {ruleId: row.ruleId, status: row.status, confidence: CAST(row.confidence AS DOUBLE), reason: row.reason, evidencePath: row.evidencePath}]->(b)"],
    [dataset.difficultyEffectEntersZone, "MATCH (a:DifficultyEffect {id: row.from}), (b:DamageZone {id: row.to}) CREATE (a)-[:DIFFICULTY_EFFECT_ENTERS_ZONE {ruleId: row.ruleId, status: row.status, confidence: CAST(row.confidence AS DOUBLE), reason: row.reason, evidencePath: row.evidencePath}]->(b)"],
  ];
  for (const [rows, statement] of relations) await executeBatch(connection, `UNWIND $rows AS row ${statement}`, rows);
}

/** 使用已经验证的本地规则构建一个指定 Kuzu 数据库。 */
async function buildDatabase(
  semanticRules: readonly LocalGraphRule[],
  topicSystemInterpretations: readonly TopicSystemInterpretation[],
  databaseOverride?: string,
): Promise<BuildStatistics> {
  const paths = resolveRepositoryPaths(databaseOverride);
  const dataset = createDataset();
  await collectDomainKnowledge(dataset, semanticRules, paths);
  const battleMechanics = await collectBattleMechanics(dataset, paths);
  await collectRoguelikeKnowledge(
    dataset,
    paths,
    battleMechanics,
    semanticRules,
    topicSystemInterpretations,
  );
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
    topics: dataset.topics.length,
    topicSystems: dataset.topicSystems.length,
    topicSystemObjects: dataset.topicSystemObjects.length,
    topicSystemFields: dataset.topicSystemFields.length,
    topicSystemReferences:
      dataset.topicObjectReferencesObject.length +
      dataset.topicObjectReferencesItem.length +
      dataset.topicObjectUsesMechanic.length +
      dataset.topicObjectReferencesExternal.length,
    difficulties: dataset.difficulties.length,
    difficultyEffects: dataset.difficultyEffects.length,
    effects: dataset.effects.length,
    parameters: dataset.parameters.length,
    mechanics: dataset.mechanics.length,
    actions: dataset.actions.length,
    semanticRules: dataset.semanticRules.length,
    classifiedEffects: new Set(dataset.effectEntersZone.map((edge) => edge.from)).size,
    classifiedDifficultyEffects: new Set(
      dataset.difficultyEffectEntersZone.map((edge) => edge.from),
    ).size,
  };
}

/** 确保候选库和正式库都严格位于仓库内，防止发布阶段误移动其他目录。 */
function assertSafePublishPath(paths: RepositoryPaths, target: string): void {
  const relative = path.relative(paths.root, target);
  if (!relative || relative.startsWith("..") || path.isAbsolute(relative)) {
    throw new Error(`图谱发布路径必须位于仓库内且不能是仓库根目录：${target}`);
  }
}

/**
 * 从全部当前输入全量构建候选库，成功后再替换正式库。
 * 规则冲突时只保留 conflicts.json，不创建可被查询使用的 manifest。
 */
export async function buildKnowledgeGraph(databaseOverride?: string): Promise<BuildStatistics> {
  const paths = resolveRepositoryPaths(databaseOverride);
  const { rules, conflicts } = await loadAndValidateLocalRules(databaseOverride);
  const topicValidation = await loadAndValidateTopicSystemInterpretations(databaseOverride);
  const allConflicts = [...conflicts, ...topicValidation.conflicts];
  if (allConflicts.length > 0) {
    if (rules.length > 0) {
      const candidateInvalidPath = `${paths.database}.candidate-invalid`;
      assertSafePublishPath(paths, candidateInvalidPath);
      await rm(candidateInvalidPath, { recursive: true, force: true });
      const statistics = await buildDatabase(
        rules,
        topicValidation.interpretations,
        toRepositoryPath(paths.root, candidateInvalidPath),
      );
      const inputs = await collectGraphInputs(paths);
      const rulesDigest = await collectRulesDigest(paths);
      const topicSystemsDigest = await collectTopicSystemsDigest(paths);
      await writeCandidateManifest({
        schemaVersion: 2,
        buildId: createBuildId(inputs, rulesDigest, topicSystemsDigest),
        builtAt: new Date().toISOString(),
        state: "invalid",
        databasePath: toRepositoryPath(paths.root, candidateInvalidPath),
        inputs,
        rulesDigest,
        topicSystemsDigest,
        statistics: { ...statistics },
        coverage: currentCoverage(paths),
      }, databaseOverride);
    }
    throw new Error(`本地图谱解释存在 ${allConflicts.length} 个冲突，候选图谱不得发布：${allConflicts.join("；")}`);
  }
  if (rules.length === 0) {
    throw new Error(
      "本地声明式规则为空。请先运行 graph:prepare，并使用 $arknights-knowledge-graph-build 将人类知识、FormulaBook 与 GameData 关系解释为规则。",
    );
  }
  await assertGraphBuildApproved(databaseOverride);

  const candidatePath = `${paths.database}.candidate`;
  const backupPath = `${paths.database}.previous`;
  [paths.database, candidatePath, backupPath].forEach((target) => assertSafePublishPath(paths, target));
  await rm(candidatePath, { recursive: true, force: true });
  const candidateOverride = toRepositoryPath(paths.root, candidatePath);
  const statistics = await buildDatabase(rules, topicValidation.interpretations, candidateOverride);

  // 关闭候选库后再移动目录，避免 Windows Kuzu 原生句柄阻止发布。
  await rm(backupPath, { recursive: true, force: true });
  let previousMoved = false;
  try {
    try {
      await rename(paths.database, backupPath);
      previousMoved = true;
    } catch (error) {
      if ((error as NodeJS.ErrnoException).code !== "ENOENT") throw error;
    }
    await rename(candidatePath, paths.database);
  } catch (error) {
    if (previousMoved) await rename(backupPath, paths.database);
    throw error;
  }

  const inputs = await collectGraphInputs(paths);
  const rulesDigest = await collectRulesDigest(paths);
  const topicSystemsDigest = await collectTopicSystemsDigest(paths);
  const manifest: GraphManifest = {
    schemaVersion: 2,
    buildId: createBuildId(inputs, rulesDigest, topicSystemsDigest),
    builtAt: new Date().toISOString(),
    state: "valid",
    databasePath: toRepositoryPath(paths.root, paths.database),
    inputs,
    rulesDigest,
    topicSystemsDigest,
    statistics: { ...statistics },
    coverage: currentCoverage(paths),
  };
  await writeGraphManifest(manifest, databaseOverride);
  return statistics;
}
