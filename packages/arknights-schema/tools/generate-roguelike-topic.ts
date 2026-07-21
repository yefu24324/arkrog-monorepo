/**
 * 仅在首次建模时根据完整 roguelike_topic_table.json 初始化类型、Schema 与中文文档。
 *
 * 生成器会先把主题 ID 字典转换为样本数组，让推断器合并所有主题的可选字段；
 * 输出根类型时再恢复为 Record。已有类型禁止再次运行本脚本覆盖，后续游戏更新应由
 * analyze-json.ts 定位不一致类型，再由维护者或大模型局部修改。
 */

import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";
import ts from "typescript";
import {
  InputData,
  jsonInputForTargetLanguage,
  quicktype,
} from "quicktype-core";
import { consolidateRoguelikeModules } from "./bootstrap/consolidate-roguelike-modules.js";

/** 命令行解析后的生成选项。 */
interface CliOptions {
  initial: boolean;
  dataRoot: string;
}

/** 等待写入或检查的单个生成产物。 */
interface Artifact {
  absolutePath: string;
  content: string;
}

/** 从 TypeScript AST 提取出的可生成定义。 */
type Definition = ts.InterfaceDeclaration | ts.TypeAliasDeclaration;

/** 单个定义根据原 JSON 字段路径计算出的目录与文件名。 */
interface DefinitionLocation {
  directory: string;
  stem: string;
}

/** 人工分析后确认或标记待确认的类型语义。 */
interface SemanticDescription {
  description: string;
  fields: Readonly<Record<string, string>>;
}

/** 根表中应保留动态主题 ID 的四个字典字段。 */
const ROOT_RECORD_FIELDS = new Set([
  "topics",
  "details",
  "modules",
  "customizeData",
]);

/** 推断前转成数组、输出时恢复为 ID 字典的嵌套字段。 */
const NORMALIZED_RECORD_PROPERTIES = new Map<string, ReadonlySet<string>>([
  ["Detail", new Set(["challenges"])],
]);

/**
 * topics 区块的人工语义说明。
 *
 * 带“待确认”的内容仅依据字段名、六个主题取值及相邻数据关系推断，后续可在确认
 * 客户端调用逻辑后替换，不应作为已经证实的游戏机制使用。
 */
const SEMANTIC_DESCRIPTIONS = new Map<string, SemanticDescription>([
  [
    "Topic",
    {
      description:
        "集成战略主题的入口元数据，描述主题标识、展示周期、首页入口、机制模块和客户端功能配置。",
      fields: {
        id: "主题唯一标识，同时用作 details、modules 与 customizeData 中的关联键。",
        name: "面向玩家展示的集成战略主题名称。",
        startTime: "主题首次开放的 Unix 时间戳，单位为秒。",
        disappearTimeOnMainScreen:
          "主题首次开放后从游戏主界面重点入口中移除的 Unix 时间戳，单位为秒；不表示主题数据失效。",
        sort: "主题在列表或入口中的排序序号，当前按发布时间递增。",
        showMedalId:
          "主题入口用于展示的代表勋章 ID；具体出现位置仍需结合客户端界面确认。",
        medalGroupId: "主题对应的勋章组 ID，用于关联该主题的成套勋章。",
        fullStoredTime:
          "推测为主题内容完整收录或转入常驻状态的 Unix 时间戳，单位为秒；准确触发行为待确认。",
        lineText: "主题入口展示的背景叙事引导文本。",
        homeEntryDisplayData:
          "主题在不同活动时间窗口中的首页入口展示配置列表，可包含首次开放与后续复刻窗口。",
        moduleTypes:
          "该主题启用的扩展机制模块标识列表；标识与同主题 modules 区块中的模块配置对应。",
        config: "主题级客户端功能开关与交互路由配置。",
      },
    },
  ],
  [
    "Config",
    {
      description:
        "集成战略主题的客户端功能配置，控制界面插件加载、Web 通信路由和月度对话触发方式。",
      fields: {
        loadCharCardPlugin:
          "是否加载干员卡片相关客户端插件；插件影响的具体界面与行为待确认。",
        webBusType:
          "WebBus 业务类型标识，推测用于 Web 页面与原生客户端之间的消息路由；准确调用链待确认。",
        monthChatTrigType:
          "月度小队或月度访谈对话的触发场景类型；TRANSITING 与 DUNGEON 的准确触发时机待确认。",
        loadRewardHpDecoPlugin:
          "是否加载奖励界面的生命值装饰插件；目前仅 rogue_3 开启，具体视觉效果待确认。",
        loadRewardExtraInfoPlugin:
          "是否加载奖励额外信息插件；目前仅 rogue_3 开启，具体展示内容待确认。",
      },
    },
  ],
  [
    "HomeEntryDisplayDatum",
    {
      description:
        "集成战略主题在一个指定时间窗口内使用的首页入口展示配置。",
      fields: {
        topicId: "所属集成战略主题 ID，应与外层 topics 字典键及 Topic.id 一致。",
        displayId:
          "该时间窗口使用的首页入口展示配置 ID；对应资源或配置的具体来源待确认。",
        startTs: "首页入口展示窗口的开始 Unix 时间戳，单位为秒。",
        endTs:
          "首页入口展示窗口的结束 Unix 时间戳，单位为秒；时间边界是否包含该秒待确认。",
      },
    },
  ],
]);

/** Markdown 人工说明区的起始标记。 */
const MANUAL_START = "<!-- MANUAL:START -->";

/** Markdown 人工说明区的结束标记。 */
const MANUAL_END = "<!-- MANUAL:END -->";

/** 当前脚本及包目录位置。 */
const CURRENT_FILE = fileURLToPath(import.meta.url);
const PACKAGE_ROOT = path.resolve(path.dirname(CURRENT_FILE), "..");
const MONOREPO_ROOT = path.resolve(PACKAGE_ROOT, "../..");
const DEFAULT_DATA_ROOT = path.resolve(MONOREPO_ROOT, "ArknightsGameData");
const TABLE_RELATIVE_PATH = path.join(
  "zh_CN",
  "gamedata",
  "excel",
  "roguelike_topic_table.json",
);

/** 将系统路径统一成便于报告与 import 使用的正斜杠形式。 */
function toPosixPath(value: string): string {
  return value.replaceAll(path.sep, "/");
}

/** 将 PascalCase 类型名转换为稳定的 kebab-case 文件名。 */
function toFileStem(typeName: string): string {
  return typeName
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/([A-Z])([A-Z][a-z])/g, "$1-$2")
    .replaceAll("_", "-")
    .replace(/-+/g, "-")
    .toLowerCase();
}

/** 解析仅供首次建模使用的 --initial 与数据仓库路径。 */
function parseCliOptions(argv: string[]): CliOptions {
  let initial = false;
  let dataRoot = process.env.ARKNIGHTS_GAME_DATA_PATH ?? DEFAULT_DATA_ROOT;

  for (let index = 0; index < argv.length; index += 1) {
    const argument = argv[index];
    if (argument === "--initial") {
      initial = true;
      continue;
    }
    if (argument === "--data") {
      const candidate = argv[index + 1];
      if (!candidate) {
        throw new Error("--data 后必须提供 ArknightsGameData 目录路径。");
      }
      dataRoot = path.resolve(candidate);
      index += 1;
      continue;
    }
    throw new Error(`无法识别的参数：${argument}`);
  }

  return { initial, dataRoot: path.resolve(dataRoot) };
}

/** 读取 JSON，并给解析异常补充清晰的数据文件位置。 */
function readJsonFile(filePath: string): unknown {
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf8")) as unknown;
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    throw new Error(`无法读取或解析 ${filePath}：${message}`);
  }
}

/** 判断值是否为可枚举键值对象。 */
function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

/**
 * 将四个主题字典转换成数组样本，避免为 rogue_1 到 rogue_6 各生成一套重复定义。
 */
function normalizeTableForInference(table: unknown): Record<string, unknown> {
  if (!isRecord(table)) {
    throw new Error("roguelike_topic_table.json 的根节点必须是对象。");
  }

  const normalized: Record<string, unknown> = { ...table };
  const details = table.details;
  if (!isRecord(details)) throw new Error("根字段 details 必须是主题 ID 字典。");
  normalized.details = Object.fromEntries(
    Object.entries(details).map(([topicId, rawDetail]) => {
      if (!isRecord(rawDetail) || !isRecord(rawDetail.challenges)) {
        throw new Error(`${topicId}.challenges 必须是挑战 ID 字典。`);
      }
      return [
        topicId,
        { ...rawDetail, challenges: Object.values(rawDetail.challenges) },
      ];
    }),
  );

  for (const field of ROOT_RECORD_FIELDS) {
    const value = normalized[field];
    if (!isRecord(value)) {
      throw new Error(`根字段 ${field} 必须是主题 ID 字典。`);
    }
    normalized[field] = Object.values(value);
  }

  return normalized;
}

/** 判断推断时的数组是否应在公开类型中恢复为字符串 ID 字典。 */
function isNormalizedRecordProperty(
  ownerName: string,
  propertyName: string | undefined,
): boolean {
  if (!propertyName) return false;
  if (ownerName === "RoguelikeTopicTable") {
    return ROOT_RECORD_FIELDS.has(propertyName);
  }
  return NORMALIZED_RECORD_PROPERTIES.get(ownerName)?.has(propertyName) ?? false;
}

/** 使用 quicktype 聚合全部主题样本并产出仅含类型的 TypeScript 源码。 */
async function inferTypeScriptSource(table: unknown): Promise<string> {
  const jsonInput = jsonInputForTargetLanguage("typescript");
  await jsonInput.addSource({
    name: "RoguelikeTopicTable",
    samples: [JSON.stringify(normalizeTableForInference(table))],
  });

  const inputData = new InputData();
  inputData.addInput(jsonInput);
  const result = await quicktype({
    inputData,
    lang: "typescript",
    rendererOptions: {
      "acronym-style": "camel",
      "just-types": "true",
      "prefer-unions": "true",
    },
  });

  return `${result.lines.join("\n")}\n`;
}

/** 从 quicktype 输出中收集 interface 与字符串联合 type 定义。 */
function collectDefinitions(sourceText: string): {
  sourceFile: ts.SourceFile;
  definitions: Definition[];
} {
  const sourceFile = ts.createSourceFile(
    "roguelike-topic-table.inferred.ts",
    sourceText,
    ts.ScriptTarget.ESNext,
    true,
    ts.ScriptKind.TS,
  );
  const definitions = sourceFile.statements.filter(
    (statement): statement is Definition =>
      ts.isInterfaceDeclaration(statement) || ts.isTypeAliasDeclaration(statement),
  );

  if (definitions.length === 0) {
    throw new Error("类型推断没有产生任何可导出的定义。");
  }

  return { sourceFile, definitions };
}

/** 读取属性名，兼容标识符、字符串字面量与数字字面量。 */
function readPropertyName(name: ts.PropertyName | undefined): string {
  if (!name) {
    throw new Error("遇到缺少名称的属性定义。");
  }
  if (
    ts.isIdentifier(name) ||
    ts.isStringLiteral(name) ||
    ts.isNumericLiteral(name)
  ) {
    return name.text;
  }
  throw new Error(`暂不支持计算属性名：${name.getText()}`);
}

/** 获取类型节点引用的其他生成类型，用于创建独立文件之间的 import。 */
function collectTypeDependencies(
  node: ts.Node,
  knownNames: ReadonlySet<string>,
  ownerName: string,
): string[] {
  const dependencies = new Set<string>();

  /** 递归访问类型节点并记录生成定义引用。 */
  function visit(current: ts.Node): void {
    if (ts.isTypeReferenceNode(current) && ts.isIdentifier(current.typeName)) {
      const dependency = current.typeName.text;
      if (dependency !== ownerName && knownNames.has(dependency)) {
        dependencies.add(dependency);
      }
    }
    ts.forEachChild(current, visit);
  }

  visit(node);
  return [...dependencies].sort((left, right) => left.localeCompare(right));
}

/** 收集 interface 每个直接字段所引用的生成类型。 */
function collectPropertyDependencies(
  definition: Definition,
  knownNames: ReadonlySet<string>,
): Map<string, string[]> {
  const result = new Map<string, string[]>();
  if (!ts.isInterfaceDeclaration(definition)) return result;

  for (const member of definition.members) {
    if (!ts.isPropertySignature(member) || !member.type) continue;
    const propertyName = readPropertyName(member.name);
    result.set(
      propertyName,
      collectTypeDependencies(member.type, knownNames, definition.name.text),
    );
  }
  return result;
}

/**
 * 根据原 JSON 的顶层区块与直接字段给每个定义分配目录。
 *
 * 某个依赖只属于一个字段时跟随该字段目录；被多个字段或区块引用时进入 shared，
 * 避免同一定义被复制到多个位置。
 */
function assignDefinitionLocations(
  definitions: Definition[],
): Map<string, DefinitionLocation> {
  const definitionsByName = new Map(
    definitions.map((definition) => [definition.name.text, definition] as const),
  );
  const knownNames = new Set(definitionsByName.keys());
  const dependencyGraph = new Map(
    definitions.map((definition) => [
      definition.name.text,
      collectTypeDependencies(definition, knownNames, definition.name.text),
    ]),
  );
  const sectionRoots = new Map<string, string>([
    ["Topic", "roguelike-topic-table/topics"],
    ["Constant", "roguelike-topic-table/constant"],
    ["Detail", "roguelike-topic-table/details"],
    ["Module", "roguelike-topic-table/modules"],
    ["CustomizeDatum", "roguelike-topic-table/customize-data"],
  ]);
  const groupsByName = new Map<string, Set<string>>();

  /** 记录类型及其全部传递依赖属于指定 JSON 字段分组。 */
  function assignGroup(typeName: string, group: string, visited: Set<string>): void {
    if (typeName === "RoguelikeTopicTable" || sectionRoots.has(typeName)) return;
    const visitKey = `${typeName}\u0000${group}`;
    if (visited.has(visitKey)) return;
    visited.add(visitKey);

    const groups = groupsByName.get(typeName) ?? new Set<string>();
    groups.add(group);
    groupsByName.set(typeName, groups);
    for (const dependency of dependencyGraph.get(typeName) ?? []) {
      assignGroup(dependency, group, visited);
    }
  }

  for (const [rootName, rootDirectory] of sectionRoots) {
    const rootDefinition = definitionsByName.get(rootName);
    if (!rootDefinition) throw new Error(`缺少分区根类型 ${rootName}。`);
    const propertyDependencies = collectPropertyDependencies(rootDefinition, knownNames);
    for (const [propertyName, dependencies] of propertyDependencies) {
      const group = `${rootDirectory}/${toFileStem(propertyName)}`;
      for (const dependency of dependencies) {
        assignGroup(dependency, group, new Set<string>());
      }
    }
  }

  const locations = new Map<string, DefinitionLocation>();
  locations.set("RoguelikeTopicTable", {
    directory: "roguelike-topic-table",
    stem: "roguelike-topic-table",
  });
  for (const [rootName, directory] of sectionRoots) {
    locations.set(rootName, { directory, stem: toFileStem(rootName) });
  }

  for (const definition of definitions) {
    const name = definition.name.text;
    if (locations.has(name)) continue;
    const groups = groupsByName.get(name);
    const directory =
      groups?.size === 1
        ? [...groups][0]
        : "roguelike-topic-table/shared";
    locations.set(name, { directory, stem: toFileStem(name) });
  }

  return locations;
}

/** 获取指定定义在 types 目录中的绝对文件位置。 */
function resolveTypePath(location: DefinitionLocation): string {
  return path.resolve(
    PACKAGE_ROOT,
    "src",
    "types",
    location.directory,
    `${location.stem}.ts`,
  );
}

/** 获取指定定义在 schemas 目录中的绝对文件位置。 */
function resolveSchemaPath(location: DefinitionLocation): string {
  return path.resolve(
    PACKAGE_ROOT,
    "src",
    "schemas",
    location.directory,
    `${location.stem}.schema.ts`,
  );
}

/** 获取指定定义在中文文档目录中的绝对文件位置。 */
function resolveDocumentPath(location: DefinitionLocation): string {
  return path.resolve(
    PACKAGE_ROOT,
    "docs",
    "types",
    location.directory,
    `${location.stem}.md`,
  );
}

/** 计算两个生成文件之间带 .js 后缀的 NodeNext 相对 import 路径。 */
function createImportSpecifier(fromPath: string, toPath: string): string {
  const relativePath = toPosixPath(path.relative(path.dirname(fromPath), toPath))
    .replace(/\.schema\.ts$/, ".schema.js")
    .replace(/\.ts$/, ".js");
  return relativePath.startsWith(".") ? relativePath : `./${relativePath}`;
}

/** 把 quicktype 的 any 空集合占位替换为 never，以便首次出现数据时触发变化。 */
function normalizeTypeText(value: string): string {
  return value.replace(/\bany\b/g, "never");
}

/** 渲染显式 TypeScript 类型节点，并恢复根主题字典的 Record 结构。 */
function renderTypeNode(
  node: ts.TypeNode,
  sourceFile: ts.SourceFile,
  ownerName: string,
  propertyName?: string,
): string {
  if (
    isNormalizedRecordProperty(ownerName, propertyName) &&
    ts.isArrayTypeNode(node)
  ) {
    return `Record<string, ${renderTypeNode(node.elementType, sourceFile, ownerName)}>`;
  }

  return normalizeTypeText(node.getText(sourceFile));
}

/** 将 TypeScript 类型节点递归转换为等价的严格 Zod 表达式。 */
function renderZodExpression(
  node: ts.TypeNode,
  sourceFile: ts.SourceFile,
  ownerName: string,
  propertyName?: string,
): string {
  if (
    isNormalizedRecordProperty(ownerName, propertyName) &&
    ts.isArrayTypeNode(node)
  ) {
    return `z.record(z.string(), ${renderZodExpression(node.elementType, sourceFile, ownerName)})`;
  }

  if (node.kind === ts.SyntaxKind.StringKeyword) return "z.string()";
  if (node.kind === ts.SyntaxKind.NumberKeyword) return "z.number()";
  if (node.kind === ts.SyntaxKind.BooleanKeyword) return "z.boolean()";
  if (node.kind === ts.SyntaxKind.UnknownKeyword) return "z.unknown()";
  if (node.kind === ts.SyntaxKind.AnyKeyword) return "z.never()";
  if (node.kind === ts.SyntaxKind.NeverKeyword) return "z.never()";

  if (ts.isArrayTypeNode(node)) {
    return `z.array(${renderZodExpression(node.elementType, sourceFile, ownerName)})`;
  }

  if (ts.isParenthesizedTypeNode(node)) {
    return renderZodExpression(node.type, sourceFile, ownerName, propertyName);
  }

  if (ts.isTypeReferenceNode(node) && ts.isIdentifier(node.typeName)) {
    if (node.typeName.text === "Array" && node.typeArguments?.length === 1) {
      return `z.array(${renderZodExpression(node.typeArguments[0], sourceFile, ownerName)})`;
    }
    return `${node.typeName.text}Schema`;
  }

  if (ts.isLiteralTypeNode(node)) {
    if (node.literal.kind === ts.SyntaxKind.NullKeyword) return "z.null()";
    if (ts.isStringLiteral(node.literal)) {
      return `z.literal(${JSON.stringify(node.literal.text)})`;
    }
    if (ts.isNumericLiteral(node.literal)) {
      return `z.literal(${node.literal.text})`;
    }
    if (node.literal.kind === ts.SyntaxKind.TrueKeyword) return "z.literal(true)";
    if (node.literal.kind === ts.SyntaxKind.FalseKeyword) return "z.literal(false)";
  }

  if (ts.isUnionTypeNode(node)) {
    const stringValues = node.types.every(
      (member) => ts.isLiteralTypeNode(member) && ts.isStringLiteral(member.literal),
    )
      ? node.types.map((member) =>
          JSON.stringify(
            ((member as ts.LiteralTypeNode).literal as ts.StringLiteral).text,
          ),
        )
      : null;

    if (stringValues) {
      return `z.enum([${stringValues.join(", ")}])`;
    }

    const members = node.types.map((member) =>
      renderZodExpression(member, sourceFile, ownerName),
    );
    return members.length === 1 ? members[0] : `z.union([${members.join(", ")}])`;
  }

  if (ts.isTypeLiteralNode(node)) {
    const indexSignature = node.members.find(ts.isIndexSignatureDeclaration);
    if (indexSignature?.type) {
      return `z.record(z.string(), ${renderZodExpression(indexSignature.type, sourceFile, ownerName)})`;
    }
  }

  throw new Error(`暂不支持的类型节点：${node.getText(sourceFile)}`);
}

/** 渲染单个 interface/type 文件，并为定义与字段添加中文注释。 */
function renderTypeFile(
  definition: Definition,
  sourceFile: ts.SourceFile,
  dependencies: string[],
  currentPath: string,
  locations: ReadonlyMap<string, DefinitionLocation>,
): string {
  const name = definition.name.text;
  const semantics = SEMANTIC_DESCRIPTIONS.get(name);
  const imports = dependencies.map((dependency) => {
    const location = locations.get(dependency);
    if (!location) throw new Error(`缺少 ${dependency} 的目录位置。`);
    const specifier = createImportSpecifier(currentPath, resolveTypePath(location));
    return `import type { ${dependency} } from "${specifier}";`;
  });
  const lines = [...imports];
  if (imports.length > 0) lines.push("");

  lines.push(
    "/**",
    ` * ${semantics?.description ?? `roguelike_topic_table.json 中 ${name} 的显式 TypeScript 定义。`}`,
    " *",
    " * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。",
    " */",
  );

  if (ts.isTypeAliasDeclaration(definition)) {
    lines.push(
      `export type ${name} = ${renderTypeNode(definition.type, sourceFile, name)};`,
      "",
    );
    return lines.join("\n");
  }

  if (definition.members.length === 0) {
    lines.push(`export type ${name} = Record<string, never>;`, "");
    return lines.join("\n");
  }

  lines.push(`export interface ${name} {`);
  for (const member of definition.members) {
    if (!ts.isPropertySignature(member) || !member.type) {
      throw new Error(`${name} 中出现暂不支持的 interface 成员。`);
    }
    const propertyName = readPropertyName(member.name);
    const renderedName = member.name.getText(sourceFile);
    const optional = member.questionToken ? "?" : "";
    const fieldDescription =
      semantics?.fields[propertyName] ?? `原始数据字段 \`${propertyName}\`。`;
    lines.push(
      `  /** ${fieldDescription} */`,
      `  ${renderedName}${optional}: ${renderTypeNode(member.type, sourceFile, name, propertyName)};`,
    );
  }
  lines.push("}", "");
  return lines.join("\n");
}

/** 渲染单个独立 Zod Schema 文件。 */
function renderSchemaFile(
  definition: Definition,
  sourceFile: ts.SourceFile,
  dependencies: string[],
  currentPath: string,
  locations: ReadonlyMap<string, DefinitionLocation>,
): string {
  const name = definition.name.text;
  const semantics = SEMANTIC_DESCRIPTIONS.get(name);
  const ownLocation = locations.get(name);
  if (!ownLocation) throw new Error(`缺少 ${name} 的目录位置。`);
  const lines = [
    'import { z } from "zod";',
    "",
    `import type { ${name} } from "${createImportSpecifier(currentPath, resolveTypePath(ownLocation))}";`,
  ];

  for (const dependency of dependencies) {
    const location = locations.get(dependency);
    if (!location) throw new Error(`缺少 ${dependency} 的目录位置。`);
    lines.push(
      `import { ${dependency}Schema } from "${createImportSpecifier(currentPath, resolveSchemaPath(location))}";`,
    );
  }
  lines.push("");

  const description =
    semantics?.description ??
    `roguelike_topic_table.json 中 ${name} 的运行时校验结构。`;
  lines.push(
    "/**",
    ` * ${description}`,
    " */",
  );

  if (ts.isTypeAliasDeclaration(definition)) {
    lines.push(
      `export const ${name}Schema = ${renderZodExpression(definition.type, sourceFile, name)}`,
      `  .describe(${JSON.stringify(description)}) satisfies z.ZodType<${name}>;`,
      "",
    );
    return lines.join("\n");
  }

  if (definition.members.length === 0) {
    lines.push(
      `export const ${name}Schema = z.record(z.string(), z.never())`,
      `  .describe(${JSON.stringify(description)}) satisfies z.ZodType<${name}>;`,
      "",
    );
    return lines.join("\n");
  }

  lines.push(`export const ${name}Schema = z.strictObject({`);
  for (const member of definition.members) {
    if (!ts.isPropertySignature(member) || !member.type) {
      throw new Error(`${name} 中出现暂不支持的 interface 成员。`);
    }
    const propertyName = readPropertyName(member.name);
    const optionalSuffix = member.questionToken ? ".optional()" : "";
    const fieldDescription = semantics?.fields[propertyName];
    const zodExpression = `${renderZodExpression(member.type, sourceFile, name, propertyName)}${optionalSuffix}`;
    if (fieldDescription) lines.push(`  /** ${fieldDescription} */`);
    lines.push(
      `  ${JSON.stringify(propertyName)}: ${fieldDescription ? `${zodExpression}.describe(${JSON.stringify(fieldDescription)})` : zodExpression},`,
    );
  }
  lines.push(
    "})",
    `  .describe(${JSON.stringify(description)}) satisfies z.ZodType<${name}>;`,
    "",
  );
  return lines.join("\n");
}

/** 从既有 Markdown 中提取人工说明区，重新生成时原样保留。 */
function readManualSection(filePath: string): string {
  if (!fs.existsSync(filePath)) return "待补充。";
  const content = fs.readFileSync(filePath, "utf8");
  const start = content.indexOf(MANUAL_START);
  const end = content.indexOf(MANUAL_END);
  if (start < 0 || end < start) return "待补充。";
  return content.slice(start + MANUAL_START.length, end).trim() || "待补充。";
}

/** 转义 Markdown 表格单元格中的竖线与换行。 */
function escapeMarkdownCell(value: string): string {
  return value.replaceAll("|", "\\|").replaceAll("\n", " ");
}

/** 为一个类型及其对应 Schema 渲染中文 Markdown 文档。 */
function renderMarkdownDocument(
  definition: Definition,
  sourceFile: ts.SourceFile,
  manualSection: string,
  location: DefinitionLocation,
): string {
  const name = definition.name.text;
  const typeFile = `src/types/${location.directory}/${location.stem}.ts`;
  const schemaFile = `src/schemas/${location.directory}/${location.stem}.schema.ts`;
  const lines = [
    `# ${name}`,
    "",
    `\`${name}\` 来源于 \`roguelike_topic_table.json\` 的完整主题样本；对应 Zod 定义为 \`${name}Schema\`。`,
    "",
    `- TypeScript：\`${typeFile}\``,
    `- Zod Schema：\`${schemaFile}\``,
    "- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`",
    "",
  ];

  if (ts.isInterfaceDeclaration(definition)) {
    lines.push("## 字段", "", "| 字段 | TypeScript 类型 | 必需 |", "|---|---|---|");
    for (const member of definition.members) {
      if (!ts.isPropertySignature(member) || !member.type) continue;
      const propertyName = readPropertyName(member.name);
      const typeText = renderTypeNode(member.type, sourceFile, name, propertyName);
      lines.push(
        `| \`${escapeMarkdownCell(propertyName)}\` | \`${escapeMarkdownCell(typeText)}\` | ${member.questionToken ? "否" : "是"} |`,
      );
    }
    lines.push("");
  } else {
    lines.push(
      "## 字面量范围",
      "",
      `\`${escapeMarkdownCell(renderTypeNode(definition.type, sourceFile, name))}\``,
      "",
    );
  }

  lines.push(
    "## 人工说明",
    "",
    MANUAL_START,
    "",
    manualSection,
    "",
    MANUAL_END,
    "",
  );
  return lines.join("\n");
}

/** 渲染 types 或 schemas 根目录的公共导出文件。 */
function renderBarrelFile(
  definitions: Definition[],
  schema: boolean,
  locations: ReadonlyMap<string, DefinitionLocation>,
  indexPath: string,
): string {
  const description = schema
    ? "统一导出 roguelike_topic_table 的全部 Zod Schema。"
    : "统一导出 roguelike_topic_table 的全部显式 TypeScript 类型。";
  const lines = ["/**", ` * ${description}`, " */"];

  for (const definition of definitions) {
    const location = locations.get(definition.name.text);
    if (!location) throw new Error(`缺少 ${definition.name.text} 的目录位置。`);
    const targetPath = schema
      ? resolveSchemaPath(location)
      : resolveTypePath(location);
    lines.push(`export * from "${createImportSpecifier(indexPath, targetPath)}";`);
  }
  lines.push("");
  return lines.join("\n");
}

/** 为每个 JSON 路径分组生成局部 index，便于按目录浏览和导入。 */
function createDirectoryBarrelArtifacts(
  definitions: Definition[],
  locations: ReadonlyMap<string, DefinitionLocation>,
  schema: boolean,
): Artifact[] {
  const definitionsByDirectory = new Map<string, Definition[]>();
  for (const definition of definitions) {
    const location = locations.get(definition.name.text);
    if (!location) throw new Error(`缺少 ${definition.name.text} 的目录位置。`);
    const values = definitionsByDirectory.get(location.directory) ?? [];
    values.push(definition);
    definitionsByDirectory.set(location.directory, values);
  }

  const root = path.resolve(PACKAGE_ROOT, "src", schema ? "schemas" : "types");
  return [...definitionsByDirectory.entries()].map(([directory, values]) => {
    const indexPath = path.resolve(root, directory, "index.ts");
    const lines = [
      "/**",
      ` * 导出 JSON 路径 \`${directory}\` 下的全部${schema ? " Zod Schema" : "显式类型"}。`,
      " */",
    ];
    for (const definition of values.sort((left, right) =>
      left.name.text.localeCompare(right.name.text),
    )) {
      const location = locations.get(definition.name.text);
      if (!location) throw new Error(`缺少 ${definition.name.text} 的目录位置。`);
      const targetPath = schema
        ? resolveSchemaPath(location)
        : resolveTypePath(location);
      lines.push(`export * from "${createImportSpecifier(indexPath, targetPath)}";`);
    }
    lines.push("");
    return { absolutePath: indexPath, content: lines.join("\n") };
  });
}

/** 生成逐一定义的双向类型兼容断言。 */
function renderTypeConsistencyTest(definitions: Definition[]): string {
  const names = definitions.map((definition) => definition.name.text);
  const typeImports = names.map((name) => `  ${name},`).join("\n");
  const schemaImports = names.map((name) => `  ${name}Schema,`).join("\n");
  const assertions = names
    .map(
      (name) =>
        `  Expect<Equal<${name}, z.infer<typeof ${name}Schema>>>,`,
    )
    .join("\n");

  return `/**
 * 编译期断言显式 TypeScript 类型与对应 Zod 推导类型完全一致。
 */

import { z } from "zod";

import type {
${typeImports}
} from "../src/types/index.js";
import {
${schemaImports}
} from "../src/schemas/index.js";

/** 比较两个类型是否完全相等。 */
type Equal<Left, Right> =
  (<Value>() => Value extends Left ? 1 : 2) extends
  (<Value>() => Value extends Right ? 1 : 2)
    ? true
    : false;

/** 要求传入的类型级布尔值为 true。 */
type Expect<Value extends true> = Value;

/** 所有生成定义的类型一致性断言集合。 */
export type RoguelikeTopicTypeAssertions = [
${assertions}
];
`;
}

/** 递归列出 excel 目录内其余待覆盖 JSON 表。 */
function listRemainingTables(dataRoot: string): string[] {
  const excelRoot = path.resolve(dataRoot, "zh_CN", "gamedata", "excel");
  const result: string[] = [];

  /** 深度优先遍历数据目录并收集 JSON 相对路径。 */
  function walk(directory: string): void {
    for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
      const absolutePath = path.resolve(directory, entry.name);
      if (entry.isDirectory()) {
        walk(absolutePath);
      } else if (
        entry.isFile() &&
        entry.name.endsWith(".json") &&
        entry.name !== "roguelike_topic_table.json"
      ) {
        result.push(toPosixPath(path.relative(excelRoot, absolutePath)));
      }
    }
  }

  walk(excelRoot);
  return result.sort((left, right) => left.localeCompare(right));
}

/** 更新 TODO 标记区，保留文件中的人工规划说明。 */
function renderTodoFile(dataRoot: string): string {
  const todoPath = path.resolve(PACKAGE_ROOT, "TODO.md");
  const current = fs.readFileSync(todoPath, "utf8");
  const start = current.indexOf("<!-- DATA_TABLE_TODO:START -->");
  const end = current.indexOf("<!-- DATA_TABLE_TODO:END -->");
  if (start < 0 || end < start) {
    throw new Error("TODO.md 缺少 DATA_TABLE_TODO 标记区。");
  }

  const rows = listRemainingTables(dataRoot).map((table) => `- [ ] \`${table}\``);
  return `${current.slice(0, start)}<!-- DATA_TABLE_TODO:START -->\n\n${rows.join("\n")}\n\n${current.slice(end)}`;
}

/** 创建全部生成产物，并检测文件名碰撞。 */
function createArtifacts(
  sourceFile: ts.SourceFile,
  definitions: Definition[],
  dataRoot: string,
): Artifact[] {
  const knownNames = new Set(definitions.map((definition) => definition.name.text));
  const locations = assignDefinitionLocations(definitions);
  const fileLocations = new Map<string, string>();
  const artifacts: Artifact[] = [];

  for (const definition of definitions) {
    const name = definition.name.text;
    const location = locations.get(name);
    if (!location) throw new Error(`缺少 ${name} 的目录位置。`);
    const locationKey = `${location.directory}/${location.stem}`;
    const previousName = fileLocations.get(locationKey);
    if (previousName && previousName !== name) {
      throw new Error(
        `类型 ${previousName} 与 ${name} 产生了相同文件位置 ${locationKey}。`,
      );
    }
    fileLocations.set(locationKey, name);

    const dependencies = collectTypeDependencies(definition, knownNames, name);
    const typePath = resolveTypePath(location);
    const schemaPath = resolveSchemaPath(location);
    const docPath = resolveDocumentPath(location);
    const legacyDocPath = path.resolve(
      PACKAGE_ROOT,
      "docs",
      "types",
      `${location.stem}.md`,
    );
    const manualSourcePath = fs.existsSync(docPath) ? docPath : legacyDocPath;

    artifacts.push(
      {
        absolutePath: typePath,
        content: renderTypeFile(
          definition,
          sourceFile,
          dependencies,
          typePath,
          locations,
        ),
      },
      {
        absolutePath: schemaPath,
        content: renderSchemaFile(
          definition,
          sourceFile,
          dependencies,
          schemaPath,
          locations,
        ),
      },
      {
        absolutePath: docPath,
        content: renderMarkdownDocument(
          definition,
          sourceFile,
          readManualSection(manualSourcePath),
          location,
        ),
      },
    );
  }

  const typeIndexPath = path.resolve(PACKAGE_ROOT, "src", "types", "index.ts");
  const schemaIndexPath = path.resolve(PACKAGE_ROOT, "src", "schemas", "index.ts");
  artifacts.push(
    {
      absolutePath: typeIndexPath,
      content: renderBarrelFile(definitions, false, locations, typeIndexPath),
    },
    {
      absolutePath: schemaIndexPath,
      content: renderBarrelFile(definitions, true, locations, schemaIndexPath),
    },
    {
      absolutePath: path.resolve(
        PACKAGE_ROOT,
        "test",
        "roguelike-topic-type-consistency.test-d.ts",
      ),
      content: renderTypeConsistencyTest(definitions),
    },
    {
      absolutePath: path.resolve(PACKAGE_ROOT, "TODO.md"),
      content: renderTodoFile(dataRoot),
    },
  );
  artifacts.push(
    ...createDirectoryBarrelArtifacts(definitions, locations, false),
    ...createDirectoryBarrelArtifacts(definitions, locations, true),
  );

  return artifacts.sort((left, right) =>
    left.absolutePath.localeCompare(right.absolutePath),
  );
}

/** 确认待清理目录位于当前包内，防止路径计算错误造成越界删除。 */
function assertGeneratedDirectory(directory: string): void {
  const relative = path.relative(PACKAGE_ROOT, directory);
  if (relative.startsWith("..") || path.isAbsolute(relative) || relative === "") {
    throw new Error(`拒绝清理包目录外路径：${directory}`);
  }
}

/** 首次建模时仅清理当前数据表目录，不影响未来其他表或人工维护内容。 */
function writeArtifacts(artifacts: Artifact[]): void {
  const generatedDirectories = [
    path.resolve(PACKAGE_ROOT, "src", "types", "roguelike-topic-table"),
    path.resolve(PACKAGE_ROOT, "src", "schemas", "roguelike-topic-table"),
    path.resolve(PACKAGE_ROOT, "docs", "types", "roguelike-topic-table"),
  ];

  for (const directory of generatedDirectories) {
    assertGeneratedDirectory(directory);
    fs.rmSync(directory, { force: true, recursive: true });
  }

  for (const artifact of artifacts) {
    fs.mkdirSync(path.dirname(artifact.absolutePath), { recursive: true });
    fs.writeFileSync(artifact.absolutePath, artifact.content, "utf8");
  }
  console.log(`已生成 ${artifacts.length} 个类型、Schema、测试与文档产物。`);
}

/** 运行完整生成或只读结构检查流程。 */
async function main(): Promise<void> {
  const options = parseCliOptions(process.argv.slice(2));
  if (!options.initial) {
    throw new Error(
      "该脚本仅用于初次全量建模。请显式传入 --initial；已有类型的游戏更新应使用 schema:analyze 并局部修改。",
    );
  }

  const existingRootType = path.resolve(
    PACKAGE_ROOT,
    "src",
    "types",
    "roguelike-topic-table",
    "roguelike-topic-table.types.ts",
  );
  if (fs.existsSync(existingRootType)) {
    throw new Error(
      `拒绝覆盖已有类型：${existingRootType}。后续更新必须根据分析报告局部维护。`,
    );
  }

  const tablePath = path.resolve(options.dataRoot, TABLE_RELATIVE_PATH);
  if (!fs.existsSync(tablePath)) {
    throw new Error(`找不到数据表：${tablePath}`);
  }

  console.log(`正在分析 ${tablePath}`);
  const table = readJsonFile(tablePath);
  const inferredSource = await inferTypeScriptSource(table);
  const { sourceFile, definitions } = collectDefinitions(inferredSource);
  const artifacts = createArtifacts(sourceFile, definitions, options.dataRoot);

  console.log(`共识别 ${definitions.length} 个独立类型定义。`);
  writeArtifacts(artifacts);
  consolidateRoguelikeModules();
}

main().catch((error: unknown) => {
  const message = error instanceof Error ? error.stack ?? error.message : String(error);
  console.error(message);
  process.exitCode = 1;
});
