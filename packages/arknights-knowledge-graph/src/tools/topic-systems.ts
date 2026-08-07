import { createHash } from "node:crypto";

/** GameData 中模块代码与对象根字段的确定性映射。 */
export const TOPIC_MODULE_KEYS: Readonly<Record<string, string>> = {
  SANCHECK: "sanCheck",
  DICE: "dice",
  CHAOS: "chaos",
  TOTEMBUFF: "totemBuff",
  VISION: "vision",
  FRAGMENT: "fragment",
  DISASTER: "disaster",
  NODE_UPGRADE: "nodeUpgrade",
  COPPER: "copper",
  WRATH: "wrath",
  CANDLE: "candle",
  SKY: "sky",
  GRID_ZONE: "gridZone",
  WEATHER: "weather",
  SCRAP: "scrap",
};

/** 本地 AI 解释文件中一个特殊系统的展示语义。 */
export interface TopicSystemInterpretation {
  /** 所属主题。 */
  topicId: string;
  /** GameData moduleTypes 中的模块代码。 */
  moduleType: string;
  /** 面向用户的系统名称。 */
  name: string;
  /** 可用于检索和消歧的别名。 */
  aliases: string[];
  /** 粗粒度系统说明；具体事实仍以 GameData 为准。 */
  description: string;
  /** 可直接查询的系统概念。 */
  concepts?: Array<{
    name: string;
    aliases?: string[];
    description: string;
    status: "verified" | "inferred" | "unknown";
    evidencePath: string;
  }>;
}

/** 一个可被构建器严格校验的本地 AI 解释文件。 */
export interface LocalTopicSystemInterpretationFile {
  schemaVersion: 1;
  preparedInputsDigest: string;
  interpretations: TopicSystemInterpretation[];
  conflicts?: Array<{ id: string; question: string; evidencePaths: string[] }>;
}

/** 主题事实。 */
export interface NormalizedTopic {
  id: string;
  name: string;
  description: string;
  jsonPath: string;
}

/** 主题特殊系统事实。 */
export interface NormalizedTopicSystem {
  id: string;
  topicId: string;
  moduleType: string;
  moduleKey: string;
  name: string;
  aliases: string;
  description: string;
  status: "verified" | "inferred" | "unknown";
  objectCount: number;
  sourceDigest: string;
  reconstructedDigest: string;
  jsonPath: string;
}

/** 递归拆分后的容器或记录对象。 */
export interface NormalizedTopicSystemObject {
  id: string;
  topicId: string;
  systemId: string;
  objectType: string;
  rawKey: string;
  arrayIndex: number;
  displayName: string;
  description: string;
  searchText: string;
  rawJson: string;
  status: "verified" | "inferred" | "unknown";
  jsonPath: string;
}

/** 一个对象自身的标量字段。 */
export interface NormalizedTopicSystemField {
  id: string;
  objectId: string;
  name: string;
  valueType: "string" | "number" | "boolean" | "null";
  stringValue: string;
  numericValue: number;
  booleanValue: boolean;
  jsonPath: string;
}

/** 从明确 BuffElement 结构发现的可验证效果。 */
export interface NormalizedTopicSystemBuff {
  id: string;
  objectId: string;
  objectRawId: string;
  key: string;
  blackboard: Array<{ key: string; value: number; valueStr: string | null }>;
  jsonPath: string;
}

/** 只有显示文案而没有黑板的效果声明。 */
export interface NormalizedTopicDisplayEffect {
  id: string;
  objectId: string;
  text: string;
  classification: "inferred" | "not_applicable";
  jsonPath: string;
}

/** 从疑似 ID 字段发现的引用候选。 */
export interface TopicSystemReferenceCandidate {
  fromObjectId: string;
  fieldName: string;
  targetRawId: string;
  jsonPath: string;
}

/** 特殊系统事实规范化结果。 */
export interface NormalizedTopicSystemDataset {
  topics: NormalizedTopic[];
  systems: NormalizedTopicSystem[];
  objects: NormalizedTopicSystemObject[];
  fields: NormalizedTopicSystemField[];
  buffs: NormalizedTopicSystemBuff[];
  displayEffects: NormalizedTopicDisplayEffect[];
  references: TopicSystemReferenceCandidate[];
  systemHasObject: Array<{ from: string; to: string }>;
  objectHasChild: Array<{ from: string; to: string; key: string; arrayIndex: number }>;
  objectHasField: Array<{ from: string; to: string }>;
}

/** 判断普通 JSON 对象。 */
function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

/** 对规范化 JSON 内容计算稳定摘要。 */
function digest(value: unknown): string {
  return createHash("sha256").update(JSON.stringify(value)).digest("hex");
}

/** 对 JSONPath 计算短摘要，避免特殊字符和超长主键进入 Kuzu。 */
function pathId(prefix: string, jsonPath: string): string {
  return `${prefix}:${createHash("sha256").update(jsonPath).digest("hex").slice(0, 24)}`;
}

/** 从 GameData 富文本生成仅用于搜索的纯文本；原值仍保存在字段中。 */
export function stripGameDataMarkup(value: string): string {
  return value
    .replace(/<[^>]+>/g, "")
    .replace(/\\n|\r?\n/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/** 选择稳定显示名；没有官方显示字段时回退到原始键。 */
function displayName(record: Record<string, unknown>, rawKey: string): string {
  for (const key of ["name", "title", "typeName", "gildName"]) {
    if (typeof record[key] === "string" && record[key]) return record[key];
  }
  return rawKey;
}

/** 选择主要功能描述，同时保留其他描述字段供逐字段查询。 */
function description(record: Record<string, unknown>): string {
  for (const key of ["functionDesc", "description", "desc", "usage", "gildDesc", "bannerText", "hintText"]) {
    if (typeof record[key] === "string" && record[key]) return record[key];
  }
  return "";
}

/** 判断一个对象是否符合 GameData 的 BuffElement 结构。 */
function isBuffElement(value: Record<string, unknown>): value is Record<string, unknown> & {
  key: string;
  blackboard: Array<{ key: string; value: number; valueStr: string | null }>;
} {
  return typeof value.key === "string" && Array.isArray(value.blackboard) && value.blackboard.every((entry) =>
    isRecord(entry) && typeof entry.key === "string" && typeof entry.value === "number" &&
    (entry.valueStr === null || typeof entry.valueStr === "string"));
}

/** 判断显示文案是否明确属于资源、商店或路线规则。 */
function displayEffectClassification(text: string): "inferred" | "not_applicable" {
  return /源石锭|希望|护盾|收藏品|招募券|商店|行商|节点|零件|烛火|行动力|售出|估价|票券/.test(text)
    ? "not_applicable"
    : "inferred";
}

/** 判断标量字段是否很可能保存对象引用。 */
function isReferenceField(name: string): boolean {
  // 对象自身的 id 是身份字段，不建立指向自己的引用边。
  if (/^id$/i.test(name)) return false;
  return /(?:^|_)(?:id|ids|ref)$/i.test(name) || /(?:Id|Ids|IdList|ItemList|TypeList)$/.test(name);
}

/** 建立一个标量字段。 */
function scalarField(
  systemId: string,
  objectId: string,
  name: string,
  value: string | number | boolean | null,
  jsonPath: string,
): NormalizedTopicSystemField {
  const valueType = value === null ? "null" : typeof value;
  return {
    // 同一 details/customizeData 证据可以归属多个系统，ID 必须包含系统作用域。
    id: pathId("topic-field", `${systemId}\0${jsonPath}`),
    objectId,
    name,
    valueType: valueType as NormalizedTopicSystemField["valueType"],
    stringValue: typeof value === "string" ? value : value === null ? "" : String(value),
    numericValue: typeof value === "number" ? value : 0,
    booleanValue: typeof value === "boolean" ? value : false,
    jsonPath,
  };
}

/**
 * 递归拆分全部模块对象与标量字段。
 * 返回的 clone 完全由已拆分事实重建，用于和原模块做摘要一致性校验。
 */
function normalizeValue(
  dataset: NormalizedTopicSystemDataset,
  topicId: string,
  systemId: string,
  value: unknown,
  jsonPath: string,
  rawKey: string,
  objectType: string,
  parentObjectId?: string,
  arrayIndex = -1,
  status: "verified" | "inferred" | "unknown" = "verified",
): unknown {
  if (!isRecord(value) && !Array.isArray(value)) return value;

  // JSONPath 在单个系统内稳定；加入 systemId 可避免同一文本证据被多个概念系统复用时主键冲突。
  const objectId = pathId("topic-object", `${systemId}\0${jsonPath}`);
  const record = isRecord(value) ? value : {};
  const ownScalars: Record<string, string | number | boolean | null> = {};
  const strings: string[] = [];
  for (const [key, child] of Object.entries(record)) {
    if (child === null || ["string", "number", "boolean"].includes(typeof child)) {
      ownScalars[key] = child as string | number | boolean | null;
      if (typeof child === "string") strings.push(stripGameDataMarkup(child));
    }
  }
  dataset.objects.push({
    id: objectId,
    topicId,
    systemId,
    objectType,
    rawKey,
    arrayIndex,
    displayName: displayName(record, rawKey),
    description: description(record),
    searchText: [...new Set([rawKey, ...strings].filter(Boolean))].join(" | "),
    rawJson: JSON.stringify(ownScalars),
    status,
    jsonPath,
  });
  if (parentObjectId) {
    dataset.objectHasChild.push({ from: parentObjectId, to: objectId, key: rawKey, arrayIndex });
  } else {
    dataset.systemHasObject.push({ from: systemId, to: objectId });
  }

  if (isBuffElement(record)) {
    dataset.buffs.push({
      id: pathId("topic-effect", `${systemId}\0${jsonPath}`),
      objectId,
      objectRawId: typeof record.id === "string" ? record.id : rawKey,
      key: record.key,
      blackboard: record.blackboard,
      jsonPath,
    });
  } else {
    for (const key of ["functionDesc", "scrapDesc", "gildDesc"]) {
      const text = record[key];
      if (typeof text !== "string" || !text) continue;
      dataset.displayEffects.push({
        id: pathId("topic-display-effect", `${systemId}\0${jsonPath}.${key}`),
        objectId,
        text,
        classification: displayEffectClassification(stripGameDataMarkup(text)),
        jsonPath: `${jsonPath}.${key}`,
      });
    }
  }

  if (Array.isArray(value)) {
    return value.map((child, index) => {
      const childPath = `${jsonPath}[${index}]`;
      if (isRecord(child) || Array.isArray(child)) {
        return normalizeValue(dataset, topicId, systemId, child, childPath, String(index), objectType, objectId, index, status);
      }
      const field = scalarField(systemId, objectId, String(index), child as string | number | boolean | null, childPath);
      dataset.fields.push(field);
      dataset.objectHasField.push({ from: objectId, to: field.id });
      if (typeof child === "string" && child && isReferenceField(rawKey)) {
        dataset.references.push({ fromObjectId: objectId, fieldName: rawKey, targetRawId: child, jsonPath: childPath });
      }
      return child;
    });
  }

  const clone: Record<string, unknown> = {};
  for (const [key, child] of Object.entries(value)) {
    const childPath = `${jsonPath}[${JSON.stringify(key)}]`;
    if (isRecord(child) || Array.isArray(child)) {
      clone[key] = normalizeValue(dataset, topicId, systemId, child, childPath, key, key, objectId, -1, status);
      continue;
    }
    const scalar = child as string | number | boolean | null;
    const field = scalarField(systemId, objectId, key, scalar, childPath);
    dataset.fields.push(field);
    dataset.objectHasField.push({ from: objectId, to: field.id });
    if (typeof scalar === "string" && scalar && isReferenceField(key)) {
      dataset.references.push({ fromObjectId: objectId, fieldName: key, targetRawId: scalar, jsonPath: childPath });
    }
    clone[key] = child;
  }
  return clone;
}

/** 规范化当前 GameData 的全部主题和 moduleTypes 特殊系统。 */
export function normalizeTopicSystems(
  data: {
    topics: Record<string, unknown>;
    modules: Record<string, unknown>;
    details?: Record<string, unknown>;
    customizeData?: Record<string, unknown>;
  },
  interpretations: readonly TopicSystemInterpretation[] = [],
): NormalizedTopicSystemDataset {
  const dataset: NormalizedTopicSystemDataset = {
    topics: [], systems: [], objects: [], fields: [], buffs: [], displayEffects: [], references: [],
    systemHasObject: [], objectHasChild: [], objectHasField: [],
  };
  const interpretationIndex = new Map(
    interpretations.map((entry) => [`${entry.topicId}:${entry.moduleType}`, entry]),
  );

  for (const [topicId, topicValue] of Object.entries(data.topics)) {
    const topic = isRecord(topicValue) ? topicValue : {};
    dataset.topics.push({
      id: topicId,
      name: typeof topic.name === "string" ? topic.name : topicId,
      description: typeof topic.description === "string" ? topic.description : "",
      jsonPath: `$.topics[${JSON.stringify(topicId)}]`,
    });
    const module = isRecord(data.modules[topicId]) ? data.modules[topicId] as Record<string, unknown> : {};
    const moduleTypes = Array.isArray(module.moduleTypes)
      ? module.moduleTypes.filter((entry): entry is string => typeof entry === "string")
      : [];
    for (const moduleType of moduleTypes) {
      // 已知映射用于兼容当前 Schema；未来模块按 lowerCamelCase 约定自动尝试根字段。
      const moduleKey = TOPIC_MODULE_KEYS[moduleType] ?? moduleType
        .toLowerCase()
        .replace(/_([a-z])/g, (_match, letter: string) => letter.toUpperCase());
      const moduleValue = module[moduleKey];
      const jsonPath = `$.modules[${JSON.stringify(topicId)}][${JSON.stringify(moduleKey)}]`;
      const systemId = `topic-system:${topicId}:${moduleType}`;
      const interpretation = interpretationIndex.get(`${topicId}:${moduleType}`);
      const before = dataset.objects.length;
      const reconstructed = normalizeValue(
        dataset,
        topicId,
        systemId,
        moduleValue ?? {},
        jsonPath,
        moduleKey,
        moduleKey,
      );
      dataset.systems.push({
        id: systemId,
        topicId,
        moduleType,
        moduleKey,
        name: interpretation?.name ?? moduleType,
        aliases: interpretation?.aliases.join(" | ") ?? "",
        description: interpretation?.description ?? "等待 AI 根据当前 GameData 补充说明。",
        status: interpretation ? "verified" : "unknown",
        objectCount: dataset.objects.length - before,
        sourceDigest: digest(moduleValue ?? {}),
        reconstructedDigest: digest(reconstructed),
        jsonPath,
      });
    }
  }

  /**
   * 从 AI 概念词出发收集 details/customizeData 中直接包含术语的最小记录。
   * 这类关系只证明文本关联，因此对象状态固定为 inferred。
   */
  const closurePaths = new Set<string>();
  const collectTextClosure = (
    value: unknown,
    jsonPath: string,
    terms: readonly string[],
    matches: Array<{ value: Record<string, unknown>; jsonPath: string; rawKey: string }>,
  ): void => {
    if (Array.isArray(value)) {
      value.forEach((child, index) => collectTextClosure(child, `${jsonPath}[${index}]`, terms, matches));
      return;
    }
    if (!isRecord(value)) return;
    const directText = Object.values(value)
      .filter((child): child is string => typeof child === "string")
      .join("\n");
    if (terms.some((term) => term && directText.includes(term))) {
      const rawKey = typeof value.id === "string" ? value.id
        : typeof value.name === "string" ? value.name
          : jsonPath.split(/[.\[]/).filter(Boolean).at(-1)?.replaceAll('"', "") ?? "evidence";
      matches.push({ value, jsonPath, rawKey });
      return;
    }
    for (const [key, child] of Object.entries(value)) {
      collectTextClosure(child, `${jsonPath}[${JSON.stringify(key)}]`, terms, matches);
    }
  };

  for (const interpretation of interpretations) {
    const system = dataset.systems.find((entry) =>
      entry.topicId === interpretation.topicId && entry.moduleType === interpretation.moduleType);
    if (!system) continue;
    const terms = (interpretation.concepts ?? []).flatMap((concept) => [concept.name, ...(concept.aliases ?? [])]);
    if (terms.length === 0) continue;
    const matches: Array<{ value: Record<string, unknown>; jsonPath: string; rawKey: string }> = [];
    collectTextClosure(
      data.details?.[interpretation.topicId],
      `$.details[${JSON.stringify(interpretation.topicId)}]`,
      terms,
      matches,
    );
    collectTextClosure(
      data.customizeData?.[interpretation.topicId],
      `$.customizeData[${JSON.stringify(interpretation.topicId)}]`,
      terms,
      matches,
    );
    const before = dataset.objects.length;
    for (const match of matches) {
      const closureKey = `${system.id}\0${match.jsonPath}`;
      if (closurePaths.has(closureKey)) continue;
      closurePaths.add(closureKey);
      normalizeValue(
        dataset,
        interpretation.topicId,
        system.id,
        match.value,
        match.jsonPath,
        match.rawKey,
        "text-evidence",
        undefined,
        -1,
        "inferred",
      );
    }
    system.objectCount += dataset.objects.length - before;
  }
  return dataset;
}
