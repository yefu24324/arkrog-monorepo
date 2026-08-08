import { createHash } from "node:crypto";
import { access, mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";

import type {
  EngineRuleCondition,
  EngineSemanticRule,
} from "../lib/domain/engine-rules.js";
import { FormulaZoneExpression } from "../lib/formula/ast.js";
import {
  FormulaBook,
  type FormulaWritableZoneId,
} from "../lib/formula/formula-book.js";
import { resolveRepositoryPaths, toRepositoryPath } from "./paths.js";
import type { RepositoryPaths } from "./types.js";
import type {
  LocalTopicSystemInterpretationFile,
  TopicSystemInterpretation,
} from "./topic-systems.js";
import type { LocalDifficultyGraphRule } from "./difficulties.js";

/** 当前清单格式；变更输入口径或发布协议时必须递增。 */
export const GRAPH_MANIFEST_SCHEMA_VERSION = 2;

/** 本地声明式规则的证据来源。 */
export type GraphRuleAuthority = "human" | "formula" | "gamedata";

/** AI 写入本地缓存的一条声明式规则。 */
export interface LocalGraphRule extends EngineSemanticRule {
  /** 证据优先级：人类知识最高，FormulaBook 次之，GameData 推断最低。 */
  authority: GraphRuleAuthority;
  /** 可复核的仓库相对证据路径；不得引用生成文档。 */
  evidencePaths: string[];
}

/** AI 本地规则文件的稳定外壳。 */
export interface LocalGraphRuleFile {
  schemaVersion: 1;
  /** 规则文件覆盖的机制范围，供增量重新解释时定位。 */
  scope: string;
  /** 生成规则时 preparation.json 中全部输入的摘要。 */
  preparedInputsDigest: string;
  /** AI 无法唯一解释且必须询问人类的问题。 */
  conflicts?: Array<{ id: string; question: string; evidencePaths: string[] }>;
  /** 基于完整 ruleDesc 护栏的肉鸽 NORMAL 难度解释。 */
  difficultyRules?: LocalDifficultyGraphRule[];
  /** 战斗模板、黑板与普通对象使用的通用规则。 */
  rules: LocalGraphRule[];
}

/** 一个参与新鲜度判断的输入摘要。 */
export interface GraphInputDigest {
  path: string;
  sha256: string;
}

/** 当前构建覆盖范围；未覆盖项必须显式报告。 */
export interface GraphCoverageReport {
  coveredObjectTypes: string[];
  coveredSources: string[];
  uncoveredObjectTypes: string[];
  note: string;
}

/** 构建技能读取的确定性准备报告。 */
export interface GraphPreparation {
  schemaVersion: 1;
  preparedAt: string;
  inputs: GraphInputDigest[];
  inputsDigest: string;
  rulesDigest: string;
  /** AI 主题系统解释缓存的语义摘要。 */
  topicSystemsDigest: string;
  coverage: GraphCoverageReport;
  /** gamedata-report 中发现、供 AI 评估相关性的公开对象类型。 */
  discoveredObjectTypes: string[];
  /** 当前输入和规则是否必须经人类确认才能正式发布。 */
  approval: { required: boolean; reasons: string[]; approvalPath: string };
  ruleDirectory: string;
  /** AI 主题系统解释文件目录。 */
  topicSystemDirectory: string;
  conflictsPath: string;
}

/** 正式图谱构建清单。 */
export interface GraphManifest {
  schemaVersion: number;
  buildId: string;
  builtAt: string;
  state: "valid" | "invalid";
  databasePath: string;
  inputs: GraphInputDigest[];
  rulesDigest: string;
  /** AI 主题系统解释缓存的语义摘要。 */
  topicSystemsDigest: string;
  statistics: Record<string, number>;
  coverage: GraphCoverageReport;
}

/** 查询前的可用性与新鲜度审计结果。 */
export interface GraphStatus {
  /** stale 仍可只读使用；missing 与 invalid 才会阻断查询。 */
  usable: boolean;
  state: "missing" | "invalid" | "stale" | "valid";
  buildId?: string;
  mismatches: string[];
  manifestPath: string;
}

/** 只有可打开的正式图谱可查询；stale 影响可信时效，不影响只读可用性。 */
export function isGraphStatusUsable(state: GraphStatus["state"]): boolean {
  return state === "valid" || state === "stale";
}

/** 人类确认语义变化后由构建技能写入的本地审批记录。 */
export interface GraphApproval {
  schemaVersion: 1;
  approvedAt: string;
  inputsDigest: string;
  rulesDigest: string;
  /** 审批时的主题系统解释摘要。 */
  topicSystemsDigest: string;
  reason: string;
}

/** 对内容计算稳定 SHA-256。 */
function digest(content: string): string {
  return createHash("sha256").update(content).digest("hex");
}

/** 递归枚举文件并稳定排序。 */
async function listFiles(directory: string, extension?: string): Promise<string[]> {
  try {
    const entries = await readdir(directory, { withFileTypes: true });
    const nested = await Promise.all(entries.map(async (entry) => {
      const absolutePath = path.join(directory, entry.name);
      if (entry.isDirectory()) return listFiles(absolutePath, extension);
      if (!entry.isFile() || (extension && !entry.name.endsWith(extension))) return [];
      return [absolutePath];
    }));
    return nested.flat().sort();
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") return [];
    throw error;
  }
}

/** 汇总多个文件内容和相对路径，避免同内容换名后摘要不变。 */
async function digestFiles(root: string, files: readonly string[]): Promise<string> {
  const fragments = await Promise.all(files.map(async (file) => {
    const relative = toRepositoryPath(root, file);
    return `${relative}\0${await readFile(file, "utf8")}`;
  }));
  return digest(fragments.join("\0"));
}

/** 收集会改变图谱事实、规则解释或发布协议的全部输入。 */
export async function collectGraphInputs(paths: RepositoryPaths): Promise<GraphInputDigest[]> {
  const fixedFiles = [
    path.join(paths.gameData, "excel", "roguelike_topic_table.json"),
    path.join(paths.gameData, "battle", "buff_template_data.json"),
    path.join(paths.root, "packages", "arknights-knowledge-graph", "src", "lib", "formula", "formula-book.ts"),
    path.join(paths.root, "packages", "arknights-knowledge-graph", "src", "lib", "formula", "ast.ts"),
    path.join(paths.root, "packages", "arknights-knowledge-graph", "src", "lib", "domain", "engine-rules.ts"),
    path.join(paths.root, "packages", "arknights-knowledge-graph", "src", "tools", "build.ts"),
    path.join(paths.root, "packages", "arknights-knowledge-graph", "src", "tools", "difficulties.ts"),
    path.join(paths.root, "packages", "arknights-knowledge-graph", "src", "tools", "graph-workspace.ts"),
    path.join(paths.root, "packages", "arknights-knowledge-graph", "src", "tools", "topic-systems.ts"),
    path.join(paths.root, "packages", "arknights-knowledge-graph", "src", "tools", "graph", "schema.ts"),
  ];
  const knowledgeFiles = await listFiles(
    path.join(paths.root, "packages", "arknights-knowledge-graph", "mechanics-knowledge"),
    ".md",
  );
  const files = [...new Set([
    ...fixedFiles,
    ...knowledgeFiles.filter((file) => !toRepositoryPath(paths.root, file).includes("/examples/")),
  ])].sort();
  const inputs = await Promise.all(files.map(async (file) => ({
    path: toRepositoryPath(paths.root, file),
    sha256: digest(await readFile(file, "utf8")),
  })));
  inputs.push({
    path: "packages/arknights-schema/src/**/*.ts",
    sha256: await digestFiles(paths.root, await listFiles(paths.schemaSource, ".ts")),
  });
  inputs.push({
    path: "packages/arknights-gamedata-report/src/**/*.ts",
    sha256: await digestFiles(paths.root, await listFiles(paths.gameDataReportSource, ".ts")),
  });
  return inputs.sort((left, right) => left.path.localeCompare(right.path));
}

/** 从 gamedata-report 公开类型发现潜在机制对象，避免把扫描范围写死为藏品。 */
async function discoverReportObjectTypes(paths: RepositoryPaths): Promise<string[]> {
  const files = await listFiles(paths.gameDataReportSource, ".ts");
  const names = new Set<string>();
  for (const file of files) {
    const content = await readFile(file, "utf8");
    for (const match of content.matchAll(/export\s+(?:interface|type)\s+([A-Za-z0-9_]+)/g)) {
      if (match[1]) names.add(match[1]);
    }
  }
  return [...names].sort();
}

/** 读取规则缓存的整体摘要；空目录也有稳定摘要。 */
export async function collectRulesDigest(paths: RepositoryPaths): Promise<string> {
  const files = await listFiles(paths.graphRules, ".json");
  const semanticContents = await Promise.all(files.map(async (file) => {
    const relative = toRepositoryPath(paths.root, file);
    const content = await readFile(file, "utf8");
    try {
      const parsed = JSON.parse(content) as Record<string, unknown>;
      // preparedInputsDigest 只是防止旧缓存复用，不代表规则语义变化。
      const { preparedInputsDigest: _preparedInputsDigest, ...semanticRuleFile } = parsed;
      return `${relative}\0${JSON.stringify(semanticRuleFile)}`;
    } catch {
      // preparation 必须可运行；具体 JSON 错误由 graph:validate 输出冲突。
      return `${relative}\0INVALID_JSON\0${content}`;
    }
  }));
  return digest(semanticContents.join("\0"));
}

/** 读取主题系统解释缓存的整体语义摘要。 */
export async function collectTopicSystemsDigest(paths: RepositoryPaths): Promise<string> {
  const files = await listFiles(paths.graphTopicSystems, ".json");
  const semanticContents = await Promise.all(files.map(async (file) => {
    const relative = toRepositoryPath(paths.root, file);
    const content = await readFile(file, "utf8");
    try {
      const parsed = JSON.parse(content) as Record<string, unknown>;
      // preparedInputsDigest 只负责拒绝旧缓存，不属于解释语义。
      const { preparedInputsDigest: _preparedInputsDigest, ...semanticFile } = parsed;
      return `${relative}\0${JSON.stringify(semanticFile)}`;
    } catch {
      return `${relative}\0INVALID_JSON\0${content}`;
    }
  }));
  return digest(semanticContents.join("\0"));
}

/** 比较当前输入与正式 manifest，判断是否涉及需人工确认的语义变化。 */
async function inspectApprovalRequirement(
  paths: RepositoryPaths,
  inputs: GraphInputDigest[],
  rulesDigest: string,
  topicSystemsDigest: string,
  databaseOverride?: string,
): Promise<{ required: boolean; reasons: string[] }> {
  const manifest = await readGraphManifest(databaseOverride);
  if (!manifest) return { required: true, reasons: ["首次发布正式图谱"] };
  const previous = new Map(manifest.inputs.map((entry) => [entry.path, entry.sha256]));
  const current = new Map(inputs.map((entry) => [entry.path, entry.sha256]));
  const changedPaths = new Set<string>();
  for (const entry of inputs) {
    if (previous.get(entry.path) !== entry.sha256) changedPaths.add(entry.path);
  }
  for (const entry of manifest.inputs) {
    if (!current.has(entry.path)) changedPaths.add(entry.path);
  }
  const reasons: string[] = [];
  if ([...changedPaths].some((entry) => entry.includes("/mechanics-knowledge/"))) {
    reasons.push("mechanics-knowledge 人类知识发生变化");
  }
  if ([...changedPaths].some((entry) => entry.endsWith("/formula/formula-book.ts") || entry.endsWith("/formula/ast.ts"))) {
    reasons.push("FormulaBook 或公式 AST 发生变化");
  }
  if (manifest.rulesDigest !== rulesDigest) {
    reasons.push("本地声明式规则发生变化");
  }
  if (manifest.topicSystemsDigest !== topicSystemsDigest) {
    reasons.push("主题特殊系统解释发生变化");
  }
  return { required: reasons.length > 0, reasons };
}

/** 返回当前扫描器的真实覆盖范围，不把未来目标冒充成已完成能力。 */
export function currentCoverage(paths: RepositoryPaths): GraphCoverageReport {
  return {
    coveredObjectTypes: [
      "肉鸽主题",
      "六主题 NORMAL 难度、结构化效果与科技启用关系",
      "主题特殊系统及递归对象字段",
      "特殊系统 Buff、显示效果与引用",
      "肉鸽物品",
      "藏品效果",
      "藏品关联角色 Buff",
      "战斗模板 Action",
      "Schema 声明",
    ],
    coveredSources: [
      toRepositoryPath(paths.root, path.join(paths.gameData, "excel", "roguelike_topic_table.json")),
      toRepositoryPath(paths.root, path.join(paths.gameData, "battle", "buff_template_data.json")),
      "packages/arknights-schema/src/**/*.ts",
    ],
    uncoveredObjectTypes: ["关卡机制", "干员技能与模组", "非肉鸽 GameData 机制表"],
    note: "难度只覆盖 rogue_1 至 rogue_6 的 NORMAL；主题特殊系统按 topics + moduleTypes 自动发现并递归完整入图；未知语义保留为 unknown，不等同于数据未覆盖。",
  };
}

/** 生成 AI 解释规则所需的输入清单与覆盖报告。 */
export async function prepareGraphWorkspace(databaseOverride?: string): Promise<GraphPreparation> {
  const paths = resolveRepositoryPaths(databaseOverride);
  await mkdir(paths.graphRules, { recursive: true });
  await mkdir(paths.graphTopicSystems, { recursive: true });
  const inputs = await collectGraphInputs(paths);
  const rulesDigest = await collectRulesDigest(paths);
  const topicSystemsDigest = await collectTopicSystemsDigest(paths);
  const approval = await inspectApprovalRequirement(paths, inputs, rulesDigest, topicSystemsDigest, databaseOverride);
  const preparation: GraphPreparation = {
    schemaVersion: 1,
    preparedAt: new Date().toISOString(),
    inputs,
    inputsDigest: digest(JSON.stringify(inputs)),
    rulesDigest,
    topicSystemsDigest,
    coverage: currentCoverage(paths),
    discoveredObjectTypes: await discoverReportObjectTypes(paths),
    approval: {
      ...approval,
      approvalPath: toRepositoryPath(paths.root, paths.graphApproval),
    },
    ruleDirectory: toRepositoryPath(paths.root, paths.graphRules),
    topicSystemDirectory: toRepositoryPath(paths.root, paths.graphTopicSystems),
    conflictsPath: toRepositoryPath(paths.root, paths.graphConflicts),
  };
  await mkdir(path.dirname(paths.graphPreparation), { recursive: true });
  await writeFile(paths.graphPreparation, `${JSON.stringify(preparation, null, 2)}\n`, "utf8");
  return preparation;
}

/** 人类确认后记录当前语义输入与规则摘要。 */
export async function approveCurrentGraphRules(
  reason: string,
  databaseOverride?: string,
): Promise<GraphApproval> {
  if (!reason.trim()) throw new Error("graph:approve 需要记录本次人类确认理由");
  const paths = resolveRepositoryPaths(databaseOverride);
  const inputs = await collectGraphInputs(paths);
  const approval: GraphApproval = {
    schemaVersion: 1,
    approvedAt: new Date().toISOString(),
    inputsDigest: digest(JSON.stringify(inputs)),
    rulesDigest: await collectRulesDigest(paths),
    topicSystemsDigest: await collectTopicSystemsDigest(paths),
    reason: reason.trim(),
  };
  await mkdir(path.dirname(paths.graphApproval), { recursive: true });
  await writeFile(paths.graphApproval, `${JSON.stringify(approval, null, 2)}\n`, "utf8");
  return approval;
}

/** 构建正式库前执行分级人工审批门禁。 */
export async function assertGraphBuildApproved(databaseOverride?: string): Promise<void> {
  const paths = resolveRepositoryPaths(databaseOverride);
  const inputs = await collectGraphInputs(paths);
  const rulesDigest = await collectRulesDigest(paths);
  const topicSystemsDigest = await collectTopicSystemsDigest(paths);
  const requirement = await inspectApprovalRequirement(paths, inputs, rulesDigest, topicSystemsDigest, databaseOverride);
  if (!requirement.required) return;
  let approval: GraphApproval | null = null;
  try {
    approval = JSON.parse(await readFile(paths.graphApproval, "utf8")) as GraphApproval;
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code !== "ENOENT") throw error;
  }
  const inputsDigest = digest(JSON.stringify(inputs));
  if (
    !approval ||
    approval.schemaVersion !== 1 ||
    approval.inputsDigest !== inputsDigest ||
    approval.rulesDigest !== rulesDigest
    || approval.topicSystemsDigest !== topicSystemsDigest
  ) {
    throw new Error(
      `正式图谱发布需要人类确认：${requirement.reasons.join("；")}。确认后运行 graph:approve -- <理由>。`,
    );
  }
}

/** 判断普通对象。 */
function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

/** 检查声明式条件的最小结构；具体匹配字段由 TypeScript 联合类型约束。 */
function isCondition(value: unknown): value is EngineRuleCondition {
  if (!isRecord(value) || typeof value.kind !== "string") return false;
  if (["objectIdIn", "objectTypeIn", "effectKeyIn", "effectKeyContains", "mechanicContains", "mechanicNotContains"].includes(value.kind)) {
    return Array.isArray(value.values) && value.values.every((entry) => typeof entry === "string");
  }
  if (["hasParameter", "parameterNonZero"].includes(value.kind)) {
    return Array.isArray(value.keys) && value.keys.every((entry) => typeof entry === "string");
  }
  if (value.kind === "actionMatches" || value.kind === "actionNotMatches") {
    return ["event", "componentType", "attributeType", "formulaItem", "target"]
      .every((key) => value[key] === undefined || typeof value[key] === "string");
  }
  return false;
}

/** 读取并验证 AI 生成的主题特殊系统解释。 */
export async function loadAndValidateTopicSystemInterpretations(
  databaseOverride?: string,
): Promise<{ interpretations: TopicSystemInterpretation[]; conflicts: string[] }> {
  const paths = resolveRepositoryPaths(databaseOverride);
  const files = await listFiles(paths.graphTopicSystems, ".json");
  const currentInputsDigest = digest(JSON.stringify(await collectGraphInputs(paths)));
  const interpretations: TopicSystemInterpretation[] = [];
  const conflicts: string[] = [];
  for (const file of files) {
    let parsed: unknown;
    try {
      parsed = JSON.parse(await readFile(file, "utf8"));
    } catch (error) {
      conflicts.push(`${toRepositoryPath(paths.root, file)} 无法解析：${String(error)}`);
      continue;
    }
    if (!isRecord(parsed) || parsed.schemaVersion !== 1 || !Array.isArray(parsed.interpretations)) {
      conflicts.push(`${toRepositoryPath(paths.root, file)} 不符合 LocalTopicSystemInterpretationFile v1`);
      continue;
    }
    const ruleFile = parsed as unknown as LocalTopicSystemInterpretationFile;
    if (ruleFile.preparedInputsDigest !== currentInputsDigest) {
      conflicts.push(`${toRepositoryPath(paths.root, file)} 基于旧 preparation 输入生成，必须重新解释`);
      continue;
    }
    for (const conflict of ruleFile.conflicts ?? []) {
      if (typeof conflict.id === "string" && typeof conflict.question === "string") {
        conflicts.push(`${conflict.id}：${conflict.question}`);
      } else {
        conflicts.push(`${toRepositoryPath(paths.root, file)} 包含格式无效的待裁决冲突`);
      }
    }
    for (const [index, interpretation] of ruleFile.interpretations.entries()) {
      const valid =
        isRecord(interpretation) &&
        typeof interpretation.topicId === "string" &&
        typeof interpretation.moduleType === "string" &&
        typeof interpretation.name === "string" &&
        Array.isArray(interpretation.aliases) && interpretation.aliases.every((entry) => typeof entry === "string") &&
        typeof interpretation.description === "string" &&
        (interpretation.concepts === undefined || (
          Array.isArray(interpretation.concepts) && interpretation.concepts.every((concept) =>
            isRecord(concept) && typeof concept.name === "string" &&
            (concept.aliases === undefined || (Array.isArray(concept.aliases) && concept.aliases.every((entry) => typeof entry === "string"))) &&
            typeof concept.description === "string" &&
            ["verified", "inferred", "unknown"].includes(String(concept.status)) &&
            typeof concept.evidencePath === "string")
        ));
      if (!valid) {
        conflicts.push(`${toRepositoryPath(paths.root, file)} interpretations[${index}] 字段无效`);
        continue;
      }
      interpretations.push(interpretation as unknown as TopicSystemInterpretation);
    }
  }

  const keys = new Set<string>();
  for (const interpretation of interpretations) {
    const key = `${interpretation.topicId}:${interpretation.moduleType}`;
    if (keys.has(key)) conflicts.push(`主题特殊系统解释重复：${key}`);
    keys.add(key);
    for (const concept of interpretation.concepts ?? []) {
      const sourcePath = concept.evidencePath.split("#")[0] ?? "";
      const absolutePath = path.resolve(paths.root, sourcePath);
      const relative = path.relative(paths.root, absolutePath);
      if (!sourcePath || !relative || relative.startsWith("..") || path.isAbsolute(relative)) {
        conflicts.push(`主题概念证据路径无效：${key}/${concept.name} -> ${concept.evidencePath}`);
        continue;
      }
      try {
        await access(absolutePath);
      } catch {
        conflicts.push(`主题概念证据文件不存在：${key}/${concept.name} -> ${concept.evidencePath}`);
      }
    }
  }
  return { interpretations, conflicts };
}

/** 从本地读取并严格校验规则，不允许回退到源码内置具体规则。 */
export async function loadAndValidateLocalRules(
  databaseOverride?: string,
): Promise<{
  rules: LocalGraphRule[];
  difficultyRules: LocalDifficultyGraphRule[];
  conflicts: string[];
}> {
  const paths = resolveRepositoryPaths(databaseOverride);
  const files = await listFiles(paths.graphRules, ".json");
  const writableZones = new Set<FormulaWritableZoneId>(
    Object.values(new FormulaBook().zones)
      .filter((zone): zone is FormulaZoneExpression => zone instanceof FormulaZoneExpression)
      .map((zone) => zone.zoneId as FormulaWritableZoneId),
  );
  const rules: LocalGraphRule[] = [];
  const difficultyRules: LocalDifficultyGraphRule[] = [];
  const conflicts: string[] = [];
  const currentInputsDigest = digest(JSON.stringify(await collectGraphInputs(paths)));
  for (const file of files) {
    let parsed: unknown;
    try {
      parsed = JSON.parse(await readFile(file, "utf8"));
    } catch (error) {
      conflicts.push(`${toRepositoryPath(paths.root, file)} 无法解析：${String(error)}`);
      continue;
    }
    if (!isRecord(parsed) || parsed.schemaVersion !== 1 || !Array.isArray(parsed.rules)) {
      conflicts.push(`${toRepositoryPath(paths.root, file)} 不符合 LocalGraphRuleFile v1`);
      continue;
    }
    if (parsed.preparedInputsDigest !== currentInputsDigest) {
      conflicts.push(`${toRepositoryPath(paths.root, file)} 基于旧 preparation 输入生成，必须重新解释`);
      continue;
    }
    if (parsed.conflicts !== undefined) {
      if (!Array.isArray(parsed.conflicts)) {
        conflicts.push(`${toRepositoryPath(paths.root, file)} conflicts 不是数组`);
      } else {
        for (const conflict of parsed.conflicts) {
          if (isRecord(conflict) && typeof conflict.id === "string" && typeof conflict.question === "string") {
            conflicts.push(`${conflict.id}：${conflict.question}`);
          } else {
            conflicts.push(`${toRepositoryPath(paths.root, file)} 包含格式无效的待裁决冲突`);
          }
        }
      }
    }
    for (const [index, value] of parsed.rules.entries()) {
      if (!isRecord(value)) {
        conflicts.push(`${toRepositoryPath(paths.root, file)} rules[${index}] 不是对象`);
        continue;
      }
      const authority = value.authority;
      const zoneId = value.zoneId;
      const evidencePaths = value.evidencePaths;
      const valid =
        typeof value.id === "string" &&
        Number.isInteger(value.version) &&
        typeof value.name === "string" &&
        typeof value.description === "string" &&
        (authority === "human" || authority === "formula" || authority === "gamedata") &&
        typeof zoneId === "string" && writableZones.has(zoneId as FormulaWritableZoneId) &&
        (value.status === "human_verified" || value.status === "verified" || value.status === "inferred" || value.status === "unknown") &&
        typeof value.confidence === "number" && value.confidence >= 0 && value.confidence <= 1 &&
        Array.isArray(value.all) && value.all.every(isCondition) &&
        (value.any === undefined || (Array.isArray(value.any) && value.any.every(isCondition))) &&
        Array.isArray(evidencePaths) && evidencePaths.every((entry) => typeof entry === "string");
      if (!valid) {
        conflicts.push(`${toRepositoryPath(paths.root, file)} rules[${index}] 字段、乘区或证据状态无效`);
        continue;
      }
      rules.push(value as unknown as LocalGraphRule);
    }
    if (parsed.difficultyRules !== undefined && !Array.isArray(parsed.difficultyRules)) {
      conflicts.push(`${toRepositoryPath(paths.root, file)} difficultyRules 不是数组`);
    }
    for (const [index, value] of (Array.isArray(parsed.difficultyRules)
      ? parsed.difficultyRules
      : []).entries()) {
      if (!isRecord(value)) {
        conflicts.push(`${toRepositoryPath(paths.root, file)} difficultyRules[${index}] 不是对象`);
        continue;
      }
      const authority = value.authority;
      const zoneId = value.zoneId;
      const evidencePaths = value.evidencePaths;
      const valid =
        typeof value.id === "string"
        && Number.isInteger(value.version)
        && typeof value.name === "string"
        && typeof value.description === "string"
        && /^rogue_[1-6]$/.test(String(value.topicId))
        && value.modeDifficulty === "NORMAL"
        && Number.isInteger(value.grade)
        && typeof value.expectedRuleDesc === "string"
        && typeof value.matchedText === "string"
        && value.matchedText.length > 0
        && (value.coverage === "full" || value.coverage === "partial")
        && typeof zoneId === "string" && writableZones.has(zoneId as FormulaWritableZoneId)
        && typeof value.value === "number" && Number.isFinite(value.value)
        && ["all-enemies", "elite", "elite-and-boss", "boss", "specific-enemy"].includes(String(value.target))
        && (authority === "human" || authority === "formula" || authority === "gamedata")
        && (value.status === "human_verified" || value.status === "verified" || value.status === "inferred" || value.status === "unknown")
        && typeof value.confidence === "number" && value.confidence >= 0 && value.confidence <= 1
        && Array.isArray(evidencePaths) && evidencePaths.every((entry) => typeof entry === "string")
        && (value.status !== "inferred" || evidencePaths.length >= 2);
      if (!valid) {
        conflicts.push(`${toRepositoryPath(paths.root, file)} difficultyRules[${index}] 字段、乘区、护栏或证据状态无效`);
        continue;
      }
      difficultyRules.push(value as unknown as LocalDifficultyGraphRule);
    }
  }

  const ruleIds = new Set<string>();
  for (const rule of [...rules, ...difficultyRules]) {
    if (ruleIds.has(rule.id)) conflicts.push(`规则 ID 重复：${rule.id}`);
    ruleIds.add(rule.id);
    if (rule.authority === "human" && rule.status !== "human_verified") {
      conflicts.push(`人类知识规则必须标为 human_verified：${rule.id}`);
    }
    if (rule.authority !== "human" && rule.status === "human_verified") {
      conflicts.push(`只有人类知识规则可以标为 human_verified：${rule.id}`);
    }
    if (rule.authority === "gamedata" && (rule.status === "verified" || rule.status === "human_verified")) {
      conflicts.push(`GameData 图关系推断不能标为 verified：${rule.id}`);
    }
    for (const evidencePath of rule.evidencePaths) {
      const sourcePath = evidencePath.split("#")[0] ?? "";
      const absolutePath = path.resolve(paths.root, sourcePath);
      const relative = path.relative(paths.root, absolutePath);
      if (!sourcePath || !relative || relative.startsWith("..") || path.isAbsolute(relative)) {
        conflicts.push(`规则证据路径无效：${rule.id} -> ${evidencePath}`);
        continue;
      }
      try {
        await access(absolutePath);
      } catch {
        conflicts.push(`规则证据文件不存在：${rule.id} -> ${evidencePath}`);
      }
    }
  }
  await mkdir(path.dirname(paths.graphConflicts), { recursive: true });
  await writeFile(paths.graphConflicts, `${JSON.stringify({ conflicts }, null, 2)}\n`, "utf8");
  return { rules, difficultyRules, conflicts };
}

/** 写入正式图谱 manifest；只有发布成功后调用。 */
export async function writeGraphManifest(
  manifest: GraphManifest,
  databaseOverride?: string,
): Promise<void> {
  const paths = resolveRepositoryPaths(databaseOverride);
  await mkdir(path.dirname(paths.graphManifest), { recursive: true });
  await writeFile(paths.graphManifest, `${JSON.stringify(manifest, null, 2)}\n`, "utf8");
}

/** 写入仅供构建技能诊断的无效候选清单，查询侧永远不读取它。 */
export async function writeCandidateManifest(
  manifest: GraphManifest,
  databaseOverride?: string,
): Promise<void> {
  const paths = resolveRepositoryPaths(databaseOverride);
  await mkdir(path.dirname(paths.graphCandidateManifest), { recursive: true });
  await writeFile(paths.graphCandidateManifest, `${JSON.stringify(manifest, null, 2)}\n`, "utf8");
}

/** 读取正式 manifest；文件缺失返回 null。 */
export async function readGraphManifest(
  databaseOverride?: string,
): Promise<GraphManifest | null> {
  const paths = resolveRepositoryPaths(databaseOverride);
  try {
    return JSON.parse(await readFile(paths.graphManifest, "utf8")) as GraphManifest;
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") return null;
    throw error;
  }
}

/** 查询命令统一使用的新鲜度与可用性审计。 */
export async function inspectGraphStatus(databaseOverride?: string): Promise<GraphStatus> {
  const paths = resolveRepositoryPaths(databaseOverride);
  const manifest = await readGraphManifest(databaseOverride);
  const manifestPath = toRepositoryPath(paths.root, paths.graphManifest);
  if (!manifest) {
    return { usable: false, state: "missing", mismatches: ["正式构建清单不存在"], manifestPath };
  }
  // 可用性问题会阻断查询；新鲜度差异只在最终输出中提示用户。
  const availabilityMismatches: string[] = [];
  const freshnessMismatches: string[] = [];
  if (manifest.schemaVersion !== GRAPH_MANIFEST_SCHEMA_VERSION) {
    freshnessMismatches.push(`manifest schema ${manifest.schemaVersion} != ${GRAPH_MANIFEST_SCHEMA_VERSION}`);
  }
  if (manifest.state !== "valid") availabilityMismatches.push(`manifest 状态为 ${manifest.state}`);
  if (manifest.databasePath !== toRepositoryPath(paths.root, paths.database)) {
    availabilityMismatches.push(`manifest 数据库路径为 ${manifest.databasePath}，当前请求为 ${toRepositoryPath(paths.root, paths.database)}`);
  }
  let databaseExists = true;
  try {
    await access(paths.database);
  } catch {
    databaseExists = false;
    availabilityMismatches.push("正式 Kuzu 数据库不存在");
  }
  const currentInputs = await collectGraphInputs(paths);
  const expectedInputs = new Map(manifest.inputs.map((entry) => [entry.path, entry.sha256]));
  const currentInputMap = new Map(currentInputs.map((entry) => [entry.path, entry.sha256]));
  for (const entry of currentInputs) {
    if (expectedInputs.get(entry.path) !== entry.sha256) freshnessMismatches.push(`输入摘要变化：${entry.path}`);
  }
  for (const entry of manifest.inputs) {
    if (!currentInputMap.has(entry.path)) freshnessMismatches.push(`构建输入已不存在：${entry.path}`);
  }
  if (manifest.rulesDigest !== await collectRulesDigest(paths)) freshnessMismatches.push("本地声明式规则摘要变化");
  if (manifest.topicSystemsDigest !== await collectTopicSystemsDigest(paths)) freshnessMismatches.push("主题特殊系统解释摘要变化");
  const mismatches = [...availabilityMismatches, ...freshnessMismatches];
  const state = !databaseExists
    ? "missing"
    : availabilityMismatches.length > 0
      ? "invalid"
      : freshnessMismatches.length > 0
        ? "stale"
        : "valid";
  return {
    usable: isGraphStatusUsable(state),
    state,
    buildId: manifest.buildId,
    mismatches,
    manifestPath,
  };
}

/** 把 stale 状态转换为只在命令最终输出追加的用户提示。 */
export function formatStaleGraphWarning(status: GraphStatus): string | undefined {
  if (status.state !== "stale") return undefined;
  const buildLabel = status.buildId ? `（build ID：${status.buildId}）` : "";
  const mismatchLabel = status.mismatches.length > 0
    ? `：${status.mismatches.join("；")}`
    : "";
  return `提示：当前知识图谱已过期${buildLabel}${mismatchLabel}。以上结果可能未包含最新输入，请使用 $arknights-knowledge-graph-build 重新构建。`;
}

/** 查询、追踪、Cypher 与导出只阻断缺失或无效图谱，stale 图谱仍可只读使用。 */
export async function assertUsableGraph(databaseOverride?: string): Promise<GraphManifest> {
  const status = await inspectGraphStatus(databaseOverride);
  if (!status.usable) {
    throw new Error(
      `知识图谱不可用（${status.state}）：${status.mismatches.join("；")}。请使用 $arknights-knowledge-graph-build 重新构建。`,
    );
  }
  const manifest = await readGraphManifest(databaseOverride);
  if (!manifest) throw new Error("正式构建清单在状态检查后消失");
  return manifest;
}

/** 根据当前输入和规则生成稳定构建 ID。 */
export function createBuildId(
  inputs: readonly GraphInputDigest[],
  rulesDigest: string,
  topicSystemsDigest: string,
): string {
  return digest(JSON.stringify({ inputs, rulesDigest, topicSystemsDigest, schema: GRAPH_MANIFEST_SCHEMA_VERSION })).slice(0, 20);
}
