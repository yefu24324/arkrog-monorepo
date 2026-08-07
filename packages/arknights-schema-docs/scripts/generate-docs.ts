/**
 * 直接从 @arkrog/arknights-schema 的 TypeScript/JSDoc 生成类型页面，
 * 并将知识图谱导出的藏品乘区数据组装为 Fumadocs 内容。
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import ts from "typescript";
import type {
  ExportedOperatorIndex,
  ExportedRogueStageReport,
  ExportedAnyRoguelikeTopicExtReport,
} from "@arkrog/arknights-gamedata-report";

import type { FormulaExpression } from "../../arknights-knowledge-graph/src/lib/formula/ast.js";
import {
  FormulaBook,
  FormulaZoneId,
} from "../../arknights-knowledge-graph/src/lib/formula/formula-book.js";
import { buildRoguelikeStageOptions } from "../src/lib/roguelike-stage-options.js";
import { parseHumanZoneValidation } from "../src/lib/zone-validation.js";

/** 本脚本、源码包与生成目录的稳定路径。 */
const CURRENT_FILE = fileURLToPath(import.meta.url);
const PACKAGE_ROOT = path.resolve(path.dirname(CURRENT_FILE), "..");
const REPO_ROOT = path.resolve(PACKAGE_ROOT, "..", "..");
const SCHEMA_PACKAGE_ROOT = path.resolve(PACKAGE_ROOT, "..", "arknights-schema");
const TYPES_ROOT = path.resolve(SCHEMA_PACKAGE_ROOT, "src", "types");
const SCHEMAS_ROOT = path.resolve(SCHEMA_PACKAGE_ROOT, "src", "schemas");
const CONTENT_ROOT = path.resolve(PACKAGE_ROOT, "content", "docs");
const TYPES_CONTENT_ROOT = path.resolve(CONTENT_ROOT, "types");
const RELIC_ZONES_CONTENT_ROOT = path.resolve(CONTENT_ROOT, "relic-zones");
const RELIC_ZONES_DATA_ROOT = path.resolve(PACKAGE_ROOT, "public", "data", "relic-zones");
const ZONE_VALIDATION_CONTENT_ROOT = path.resolve(CONTENT_ROOT, "zone-validation");
/** 迁移后只用于删除旧生成路由与旧复制产物，不再写入。 */
const LEGACY_RELIC_VALIDATION_CONTENT_ROOT = path.resolve(CONTENT_ROOT, "relic-zone-validation");
const ZONE_VALIDATION_DATA_ROOT = path.resolve(
  PACKAGE_ROOT,
  "public",
  "data",
  "zone-validation",
);
const HUMAN_ZONE_VALIDATION_ROOT = path.resolve(PACKAGE_ROOT, "public", "human-zone-validation");
/** 旧 Graph 复制目录不再是输入，生成时清除以免留下废弃发布路径。 */
const LEGACY_RELIC_VALIDATION_DATA_ROOT = path.resolve(PACKAGE_ROOT, "public", "data", "relic-zone-validation");
const ENEMIES_DATA_ROOT = path.resolve(PACKAGE_ROOT, "public", "data", "enemies");
const STAGE_OPTIONS_DATA_ROOT = path.resolve(PACKAGE_ROOT, "public", "data", "roguelike-stages");
const FORMULA_BOOK_CONTENT_PATH = path.resolve(CONTENT_ROOT, "formula-book.mdx");
const FORMULA_BOOK_DATA_PATH = path.resolve(PACKAGE_ROOT, "public", "data", "formula-book.json");
const FORMULA_BOOK_SOURCE_PATH = path.resolve(
  PACKAGE_ROOT,
  "..",
  "arknights-knowledge-graph",
  "src",
  "lib",
  "formula",
  "formula-book.ts",
);
const GENERATED_ROOT = path.resolve(PACKAGE_ROOT, "generated");
/** GameData 报告生成的干员目录和原始敌人表，用于战斗预览面板。 */
const ENEMY_DATABASE_PATH = path.resolve(
  REPO_ROOT,
  "ArknightsGameData",
  "zh_CN",
  "gamedata",
  "levels",
  "enemydata",
  "enemy_database.json",
);

/** 一个 interface 字段的源码元数据。 */
interface TypeFieldDoc {
  /** 字段 JSDoc；缺失时保留待补充占位。 */
  description: string;
  /** 源码字段名。 */
  name: string;
  /** 字段是否必需。 */
  required: boolean;
  /** TypeScript 类型表达式。 */
  typeExpression: string;
}

/** 文档 JSON 中不包含 class 方法的递归公式 AST。 */
type SerializedFormulaExpression =
  | {
      kind: "item";
      tooltip: string;
      value: number;
    }
  | {
      kind: "operation";
      operands: SerializedFormulaExpression[];
      operator: string;
    }
  | {
      comment: string;
      kind: "zone";
      operands: SerializedFormulaExpression[];
      operator: string;
      zoneId: string;
    }
  | {
      comment: string;
      expression: SerializedFormulaExpression;
      id: string;
      kind: "formula";
    };

/** 一个 interface/type 定义的文档元数据。 */
interface TypeDefinitionDoc {
  /** 定义 JSDoc；缺失时保留待补充占位。 */
  description: string;
  /** interface 字段；type alias 时为空。 */
  fields: TypeFieldDoc[];
  /** 定义名称。 */
  name: string;
  /** type alias 的完整表达式。 */
  typeExpression?: string;
}

/** 单个逻辑类型模块的文档元数据。 */
interface TypeDocEntry {
  /** 模块中的全部 interface/type。 */
  definitions: TypeDefinitionDoc[];
  /** 文档站内绝对路径。 */
  href: string;
  /** 模块名。 */
  name: string;
  /** 相对 src/types 的目录。 */
  relativeDirectory: string;
  /** Fumadocs 路由段。 */
  slugs: string[];
  /** TypeSource 源码快照键。 */
  sourceKey: string;
  /** 模块源码全文。 */
  sourceText: string;
  /** 不含 .types.ts 的文件名。 */
  stem: string;
  /** TypeScript 文件绝对路径。 */
  typePath: string;
}

/** 类型页面目录树节点。 */
interface DirectoryNode {
  /** 直接子目录。 */
  directories: Map<string, DirectoryNode>;
  /** 本目录下的模块页面。 */
  pages: TypeDocEntry[];
  /** 相对 types 内容根的路径段。 */
  segments: string[];
}

/** CnTypeTable 可序列化字段节点。 */
interface TypeTableField {
  description: string;
  required: boolean;
  type: string;
  typeDescriptionLink?: string;
  typeLinks?: Record<string, string>;
}

/** graph:export 主题摘要。 */
interface RelicZoneTopicSummary {
  effectCount: number;
  graphSourcePath: string;
  id: string;
  itemCount: number;
  name: string;
}

/** 文档组装阶段读取的 Graph 产物身份。 */
interface RelicZoneArtifactHeader {
  producer?: {
    kind?: "graph";
  };
  scope?: { effectCount?: number; itemCount?: number };
  topic?: { id?: string; name?: string };
}

/** 已知数据表的中文侧栏标题。 */
const TABLE_TITLES: Readonly<Record<string, string>> = {
  "buff-template-data": "buff_template_data",
  "roguelike-topic-table": "roguelike_topic_table",
};

/** 常用 JSON 目录的侧栏标题。 */
const FOLDER_TITLES: Readonly<Record<string, string>> = {
  types: "类型定义",
  "buff-template-data": "战斗模板表",
  "roguelike-topic-table": "集成战略主题表",
  actions: "actions",
  constant: "constant",
  "customize-data": "customizeData",
  details: "details",
  modules: "modules",
  shared: "shared",
  topics: "topics",
};

/** TypeScript 内建类型不创建站内跳转。 */
const BUILTIN_TYPE_NAMES = new Set([
  "Array",
  "Date",
  "Error",
  "Exclude",
  "Extract",
  "Function",
  "Map",
  "NonNullable",
  "Omit",
  "Partial",
  "Pick",
  "Promise",
  "Readonly",
  "ReadonlyArray",
  "Record",
  "RegExp",
  "Required",
  "Set",
  "any",
  "bigint",
  "boolean",
  "never",
  "null",
  "number",
  "object",
  "string",
  "symbol",
  "undefined",
  "unknown",
  "void",
]);

/** 递归列出目录中的全部文件。 */
function listFilesRecursively(directory: string): string[] {
  if (!fs.existsSync(directory)) return [];
  const files: string[] = [];
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const absolutePath = path.resolve(directory, entry.name);
    if (entry.isDirectory()) files.push(...listFilesRecursively(absolutePath));
    else if (entry.isFile()) files.push(absolutePath);
  }
  return files;
}

/** 将系统路径统一成 URL 使用的 POSIX 形式。 */
function toPosix(filePath: string): string {
  return filePath.split(path.sep).join("/");
}

/** 从 JSDoc 块中提取首段中文说明。 */
function normalizeJsDoc(comment: string | undefined): string {
  if (!comment) return "待补充。";
  const lines = comment
    .replace(/^\/\*\*?/, "")
    .replace(/\*\/$/, "")
    .split(/\r?\n/)
    .map((line) => line.replace(/^\s*\*\s?/, "").trim());
  const paragraph: string[] = [];
  for (const line of lines) {
    if (line.startsWith("@")) break;
    if (line.length === 0) {
      if (paragraph.length > 0) break;
      continue;
    }
    paragraph.push(line);
  }
  return paragraph.join(" ").replace(/\s+/g, " ").trim() || "待补充。";
}

/** 读取 AST 节点前紧邻的 JSDoc 说明。 */
function readNodeDescription(sourceText: string, node: ts.Node): string {
  const ranges = ts.getLeadingCommentRanges(sourceText, node.getFullStart()) ?? [];
  const block = ranges
    .map((range) => sourceText.slice(range.pos, range.end))
    .reverse()
    .find((comment) => comment.startsWith("/**"));
  return normalizeJsDoc(block);
}

/** 将属性名节点转换为文档字段名。 */
function readPropertyName(name: ts.PropertyName, sourceFile: ts.SourceFile): string {
  if (ts.isIdentifier(name) || ts.isStringLiteral(name) || ts.isNumericLiteral(name)) {
    return name.text;
  }
  return name.getText(sourceFile);
}

/** 解析一个聚合 `.types.ts` 模块中的定义与 JSDoc。 */
function readTypeModule(typePath: string): {
  definitions: TypeDefinitionDoc[];
  sourceText: string;
} {
  const sourceText = fs.readFileSync(typePath, "utf8");
  const sourceFile = ts.createSourceFile(
    typePath,
    sourceText,
    ts.ScriptTarget.ESNext,
    true,
    ts.ScriptKind.TS,
  );
  const definitions: TypeDefinitionDoc[] = [];

  for (const statement of sourceFile.statements) {
    if (ts.isInterfaceDeclaration(statement)) {
      const fields: TypeFieldDoc[] = [];
      for (const member of statement.members) {
        if (!ts.isPropertySignature(member) || !member.type) continue;
        fields.push({
          description: readNodeDescription(sourceText, member),
          name: readPropertyName(member.name, sourceFile),
          required: !member.questionToken,
          typeExpression: member.type.getText(sourceFile),
        });
      }
      definitions.push({
        description: readNodeDescription(sourceText, statement),
        fields,
        name: statement.name.text,
      });
      continue;
    }
    if (ts.isTypeAliasDeclaration(statement)) {
      definitions.push({
        description: readNodeDescription(sourceText, statement),
        fields: [],
        name: statement.name.text,
        typeExpression: statement.type.getText(sourceFile),
      });
    }
  }

  if (definitions.length === 0) {
    throw new Error(`${typePath} 未找到 interface/type 定义。`);
  }
  return { definitions, sourceText: sourceText.trimEnd() };
}

/** 收集全部类型模块，并验证相邻 Zod 模块存在。 */
function collectTypeEntries(): TypeDocEntry[] {
  return listFilesRecursively(TYPES_ROOT)
    .filter((filePath) => filePath.endsWith(".types.ts"))
    .sort()
    .map((typePath) => {
      const relativePath = toPosix(path.relative(TYPES_ROOT, typePath));
      const relativeDirectory = toPosix(path.dirname(relativePath));
      const directorySegments =
        relativeDirectory === "." ? [] : relativeDirectory.split("/").filter(Boolean);
      const stem = path.basename(typePath, ".types.ts");
      const schemaPath = path.resolve(
        SCHEMAS_ROOT,
        ...directorySegments,
        `${stem}.schemas.ts`,
      );
      if (!fs.existsSync(schemaPath)) {
        throw new Error(`${relativePath} 缺少对应 Zod 模块：${schemaPath}`);
      }
      const slugs = ["types", ...directorySegments, stem];
      const typeModule = readTypeModule(typePath);
      return {
        definitions: typeModule.definitions,
        href: `/docs/${slugs.join("/")}`,
        name: stem,
        relativeDirectory,
        slugs,
        sourceKey: slugs.join("/"),
        sourceText: typeModule.sourceText,
        stem,
        typePath,
      };
    });
}

/** 构建类型导出名到模块页标题锚点的映射，并拒绝重名。 */
function buildTypeHrefByName(entries: TypeDocEntry[]): Map<string, string> {
  const links = new Map<string, string>();
  for (const entry of entries) {
    for (const definition of entry.definitions) {
      if (links.has(definition.name)) {
        throw new Error(`发现重复类型名：${definition.name}`);
      }
      links.set(definition.name, `${entry.href}#${definition.name.toLowerCase()}`);
    }
  }
  return links;
}

/** 从任意 TypeScript 类型表达式提取可跳转的自定义类型名。 */
function extractReferencedTypeNames(
  expression: string,
  typeHrefByName: ReadonlyMap<string, string>,
): string[] {
  const names = new Set<string>();
  for (const match of expression.matchAll(/[A-Za-z_][A-Za-z0-9_]*/g)) {
    const name = match[0];
    if (typeHrefByName.has(name) && !BUILTIN_TYPE_NAMES.has(name)) names.add(name);
  }
  return [...names].sort((left, right) => left.localeCompare(right));
}

/** 选择复杂表达式的主要类型链接。 */
function resolveTypeDescriptionLink(
  expression: string,
  referencedNames: string[],
  typeHrefByName: ReadonlyMap<string, string>,
): string | undefined {
  const patterns = [
    /^Record<[^,]+,\s*([A-Z][A-Za-z0-9_]*)\s*>$/,
    /^(?:Array|Partial|Promise|Readonly|Required)<\s*([A-Z][A-Za-z0-9_]*)\b/,
    /^([A-Z][A-Za-z0-9_]*)\[\]$/,
    /^([A-Z][A-Za-z0-9_]*)$/,
  ];
  for (const pattern of patterns) {
    const name = expression.match(pattern)?.[1];
    if (name && typeHrefByName.has(name)) return typeHrefByName.get(name);
  }
  const fallback = referencedNames.at(-1);
  return fallback ? typeHrefByName.get(fallback) : undefined;
}

/** 将 interface 字段转换为 CnTypeTable 数据并收集关联类型。 */
function buildTypeTable(
  fields: TypeFieldDoc[],
  typeHrefByName: ReadonlyMap<string, string>,
): { relatedTypes: string[]; table: Record<string, TypeTableField> } {
  const related = new Set<string>();
  const table: Record<string, TypeTableField> = {};
  for (const field of fields) {
    const referencedNames = extractReferencedTypeNames(field.typeExpression, typeHrefByName);
    referencedNames.forEach((name) => related.add(name));
    const typeLinks = Object.fromEntries(
      referencedNames.flatMap((name) => {
        const href = typeHrefByName.get(name);
        return href ? [[name, href]] : [];
      }),
    );
    const node: TypeTableField = {
      description: field.description,
      required: field.required,
      type: field.typeExpression,
    };
    if (Object.keys(typeLinks).length > 0) node.typeLinks = typeLinks;
    const primary = resolveTypeDescriptionLink(
      field.typeExpression,
      referencedNames,
      typeHrefByName,
    );
    if (primary) node.typeDescriptionLink = primary;
    table[field.name] = node;
  }
  return { relatedTypes: [...related].sort(), table };
}

/** 渲染模块中的一个 interface/type 章节。 */
function renderDefinitionSection(
  definition: TypeDefinitionDoc,
  typeHrefByName: ReadonlyMap<string, string>,
): { body: string; relatedTypes: string[] } {
  const lines = [`## ${definition.name}`, "", definition.description, ""];
  if (definition.fields.length > 0) {
    const { table, relatedTypes } = buildTypeTable(definition.fields, typeHrefByName);
    lines.push(
      "### 字段",
      "",
      `<CnTypeTable type={${JSON.stringify(table, null, 2)}} />`,
      "",
    );
    return { body: lines.join("\n"), relatedTypes };
  }

  const expression = definition.typeExpression ?? "never";
  lines.push(
    "### TypeScript 类型表达式",
    "",
    `<pre><code>{${JSON.stringify(expression)}}</code></pre>`,
    "",
  );
  return {
    body: lines.join("\n"),
    relatedTypes: extractReferencedTypeNames(expression, typeHrefByName),
  };
}

/** 直接从 TypeScript 元数据组装一个逻辑模块的 MDX 页面。 */
function buildTypeMdx(
  entry: TypeDocEntry,
  typeHrefByName: ReadonlyMap<string, string>,
): string {
  const sections: string[] = [];
  const related = new Set<string>();
  const ownNames = new Set(entry.definitions.map((definition) => definition.name));
  for (const definition of entry.definitions) {
    const rendered = renderDefinitionSection(definition, typeHrefByName);
    sections.push(rendered.body);
    rendered.relatedTypes.forEach((name) => {
      if (!ownNames.has(name)) related.add(name);
    });
  }

  const schemaRelative = toPosix(
    path.join(
      "src/schemas",
      entry.relativeDirectory === "." ? "" : entry.relativeDirectory,
      `${entry.stem}.schemas.ts`,
    ),
  );
  const typeRelative = toPosix(
    path.join(
      "src/types",
      entry.relativeDirectory === "." ? "" : entry.relativeDirectory,
      `${entry.stem}.types.ts`,
    ),
  );
  const relatedSection =
    related.size === 0
      ? ""
      : `## 相关类型\n\n${[...related]
          .sort()
          .map((name) => `- [\`${name}\`](${typeHrefByName.get(name)})`)
          .join("\n")}\n\n`;
  const firstDescription = entry.definitions[0]?.description ?? "待补充。";

  return `---
title: ${JSON.stringify(entry.name)}
description: ${JSON.stringify(`${entry.definitions.length} 个强关联类型。${firstDescription}`)}
---

本页直接由 TypeScript 类型结构与 JSDoc 生成，不依赖中间 Markdown 文档。

${sections.join("\n")}

${relatedSection}## 定义信息

| 项 | 值 |
|---|---|
| 种类 | \`logical module\` |
| 定义数量 | ${entry.definitions.length} |
| TypeScript | \`${typeRelative}\` |
| Zod Schema | \`${schemaRelative}\` |

## TypeScript 源码

<TypeSource name="${entry.sourceKey}" />
`;
}

/** 把类型条目折叠为 Fumadocs 目录树。 */
function buildDirectoryTree(entries: TypeDocEntry[]): DirectoryNode {
  const root: DirectoryNode = { directories: new Map(), pages: [], segments: [] };
  for (const entry of entries) {
    const segments =
      entry.relativeDirectory === "."
        ? []
        : entry.relativeDirectory.split("/").filter(Boolean);
    let node = root;
    const walked: string[] = [];
    for (const segment of segments) {
      walked.push(segment);
      let child = node.directories.get(segment);
      if (!child) {
        child = { directories: new Map(), pages: [], segments: [...walked] };
        node.directories.set(segment, child);
      }
      node = child;
    }
    node.pages.push(entry);
  }
  return root;
}

/** 写入类型目录树中的页面与 meta.json。 */
function writeDirectoryTree(
  node: DirectoryNode,
  typeHrefByName: ReadonlyMap<string, string>,
): number {
  const absoluteDirectory = path.resolve(TYPES_CONTENT_ROOT, ...node.segments);
  fs.mkdirSync(absoluteDirectory, { recursive: true });
  const folderKey = node.segments.at(-1) ?? "types";
  const indexPage = node.pages.find((page) => page.stem === folderKey);
  const childPages = node.pages
    .filter((page) => page !== indexPage)
    .map((page) => page.stem)
    .sort();
  const meta: {
    defaultOpen: boolean;
    pages: string[];
    pagesIndex?: string;
    title: string;
  } = {
    defaultOpen: node.segments.length <= 1,
    pages: [...node.directories.keys()].sort().concat(childPages),
    title: FOLDER_TITLES[folderKey] ?? TABLE_TITLES[folderKey] ?? folderKey,
  };
  if (indexPage) meta.pagesIndex = indexPage.stem;
  fs.writeFileSync(
    path.resolve(absoluteDirectory, "meta.json"),
    `${JSON.stringify(meta, null, 2)}\n`,
    "utf8",
  );

  let written = 0;
  for (const entry of node.pages) {
    fs.writeFileSync(
      path.resolve(absoluteDirectory, `${entry.stem}.mdx`),
      buildTypeMdx(entry, typeHrefByName),
      "utf8",
    );
    written += 1;
  }
  for (const child of node.directories.values()) {
    written += writeDirectoryTree(child, typeHrefByName);
  }
  return written;
}

/** 写出逻辑模块源码快照，供 TypeSource 组件读取。 */
function writeTypeSources(entries: TypeDocEntry[]): void {
  fs.mkdirSync(GENERATED_ROOT, { recursive: true });
  const sources = Object.fromEntries(
    entries.map((entry) => [entry.sourceKey, entry.sourceText]),
  );
  fs.writeFileSync(
    path.resolve(GENERATED_ROOT, "type-sources.json"),
    `${JSON.stringify(sources, null, 2)}\n`,
    "utf8",
  );
}

/** 按当前 GameData report 主题扫描直接发布的 Graph 产物。 */
function collectRelicZoneTopics(): RelicZoneTopicSummary[] {
  const graphRoot = path.resolve(ZONE_VALIDATION_DATA_ROOT, "graph");
  const reportRoot = path.resolve(PACKAGE_ROOT, "public", "gamedata-report", "roguelike");
  if (!fs.existsSync(reportRoot)) throw new Error(`未找到当前 GameData 主题报告：${reportRoot}`);
  const topics: RelicZoneTopicSummary[] = [];
  const currentTopicIds = fs.readdirSync(reportRoot, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && /^rogue_\d+$/.test(entry.name))
    .map((entry) => entry.name);
  for (const topicId of currentTopicIds) {
    const fileName = `${topicId}.json`;
    const graphSourcePath = path.resolve(graphRoot, fileName);
    if (!fs.existsSync(graphSourcePath)) {
      throw new Error(`当前 GameData 主题 ${topicId} 缺少 Graph 乘区校验产物：${graphSourcePath}`);
    }
    const raw = JSON.parse(fs.readFileSync(graphSourcePath, "utf8")) as RelicZoneArtifactHeader;
    const id = raw.topic?.id;
    if (id !== topicId) throw new Error(`${graphSourcePath} 的主题 ID 与文件名不一致。`);
    if (raw.producer?.kind !== "graph") {
      throw new Error(`${graphSourcePath} 不是从图谱导出的 graph 产物。`);
    }
    topics.push({
      effectCount: raw.scope?.effectCount ?? 0,
      graphSourcePath,
      id,
      itemCount: raw.scope?.itemCount ?? 0,
      name: raw.topic?.name ?? id,
    });
  }
  return topics.sort(
    (left, right) =>
      Number(left.id.replace("rogue_", "")) - Number(right.id.replace("rogue_", "")),
  );
}

/** 生成文档首页和顶层侧栏。 */
function writeIndexPage(entries: TypeDocEntry[]): void {
  const tables = new Map<string, TypeDocEntry[]>();
  for (const entry of entries) {
    const table = entry.slugs[1] ?? "unknown";
    const tableEntries = tables.get(table) ?? [];
    tableEntries.push(entry);
    tables.set(table, tableEntries);
  }
  const cards = [...tables.entries()]
    .sort(([left], [right]) => left.localeCompare(right))
    .map(([table, tableEntries]) => {
      const rootEntry = tableEntries.find((entry) => entry.stem === table) ?? tableEntries[0]!;
      const definitionCount = tableEntries.reduce(
        (total, entry) => total + entry.definitions.length,
        0,
      );
      return `  <Card title="${TABLE_TITLES[table] ?? table}" href="${rootEntry.href}">
    ${tableEntries.length} 个逻辑模块，${definitionCount} 个类型定义
  </Card>`;
    })
    .join("\n");
  const indexMdx = `---
title: Arknights 数据与类型
description: 浏览 Schema 类型定义和知识图谱导出的游戏数据
---

类型页面直接读取 TypeScript/JSDoc 生成，不创建或依赖 Schema Markdown 文件。

<Cards>
${cards}
  <Card title="藏品乘区" href="/docs/relic-zones">
    按主题浏览藏品原文、加成乘区，并展开查看 buffs 原数据
  </Card>
  <Card title="乘区校验" href="/docs/zone-validation">
    对照图谱、程序与人工维护的历史版本
  </Card>
  <Card title="公式簿" href="/docs/formula-book">
    干员与敌人最终属性公式
  </Card>
</Cards>
`;
  fs.writeFileSync(path.resolve(CONTENT_ROOT, "index.mdx"), indexMdx, "utf8");
  fs.writeFileSync(
    path.resolve(CONTENT_ROOT, "meta.json"),
    `${JSON.stringify(
      {
        title: "文档",
        pages: ["index", "formula-book", "types", "relic-zones", "zone-validation"],
      },
      null,
      2,
    )}\n`,
    "utf8",
  );
}

/** 从 FormulaZoneId 枚举成员前的 JSDoc 提取乘区中文注释。 */
function readFormulaZoneComments(): ReadonlyMap<string, string> {
  const sourceText = fs.readFileSync(FORMULA_BOOK_SOURCE_PATH, "utf8");
  const sourceFile = ts.createSourceFile(
    FORMULA_BOOK_SOURCE_PATH,
    sourceText,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TS,
  );
  const comments = new Map<string, string>();
  sourceFile.forEachChild((node) => {
    if (!ts.isEnumDeclaration(node) || node.name.text !== "FormulaZoneId") return;
    for (const member of node.members) {
      if (!member.initializer || !ts.isStringLiteral(member.initializer)) continue;
      const leadingText = sourceText.slice(member.getFullStart(), member.getStart(sourceFile));
      const jsDocs = [...leadingText.matchAll(/\/\*\*([\s\S]*?)\*\//g)];
      const latest = jsDocs.at(-1)?.[1];
      if (!latest) continue;
      const comment = latest
        .split(/\r?\n/)
        .map((line) => line.replace(/^\s*\*?\s?/, "").trim())
        .filter(Boolean)
        .join(" ");
      if (comment) comments.set(member.initializer.text, comment);
    }
  });
  return comments;
}

/** 把 FormulaBook class AST 转换为无方法、无重复字段的文档 AST。 */
function serializeFormulaExpression(
  expression: FormulaExpression,
  comments: ReadonlyMap<string, string>,
): SerializedFormulaExpression {
  if (expression.kind === "item") {
    return {
      kind: "item",
      tooltip: expression.tooltip,
      value: expression.value,
    };
  }
  if (expression.kind === "operation") {
    return {
      kind: "operation",
      operator: expression.operator,
      operands: expression.operands.map((operand) =>
        serializeFormulaExpression(operand, comments)),
    };
  }
  if (expression.kind === "zone") {
    const comment = comments.get(expression.zoneId);
    if (!comment) throw new Error(`FormulaZoneId.${expression.zoneId} 缺少 JSDoc 注释。`);
    return {
      kind: "zone",
      zoneId: expression.zoneId,
      comment,
      operator: expression.operator,
      operands: expression.operands.map((operand) =>
        serializeFormulaExpression(operand, comments)),
    };
  }
  const comment = comments.get(expression.id);
  if (!comment) throw new Error(`FormulaZoneId.${expression.id} 缺少 JSDoc 注释。`);
  return {
    kind: "formula",
    id: expression.id,
    comment,
    expression: serializeFormulaExpression(expression.expression, comments),
  };
}

/** 公式簿页面只展示各属性链路的最终派生公式。 */
const FINAL_FORMULA_IDS = [
  FormulaZoneId.char_final_max_hp,
  FormulaZoneId.char_final_atk,
  FormulaZoneId.char_final_attack_speed,
  FormulaZoneId.char_final_def,
  FormulaZoneId.enemy_final_max_hp,
  FormulaZoneId.enemy_final_atk,
  FormulaZoneId.enemy_final_def,
  FormulaZoneId.enemy_final_magic_resist,
] as const;

/** 从当前 FormulaBook 生成全部最终公式 AST 与可写乘区注释索引。 */
function writeFormulaBookPage(): number {
  const book = new FormulaBook();
  const comments = readFormulaZoneComments();
  const formulas = FINAL_FORMULA_IDS.map((id) =>
    serializeFormulaExpression(book.get_zone(id), comments),
  );
  // 藏品表需要显示不属于任一最终公式 AST 的可写乘区中文名。
  const writableZoneComments = Object.fromEntries(
    Object.values(book.zones)
      .filter((expression) => expression.kind === "zone")
      .map((expression) => {
        const comment = comments.get(expression.zoneId);
        if (!comment) throw new Error(`FormulaZoneId.${expression.zoneId} 缺少 JSDoc 注释。`);
        return [expression.zoneId, comment];
      }),
  );
  const data = {
    schemaVersion: 5,
    source: "packages/arknights-knowledge-graph/src/lib/formula/formula-book.ts",
    formulas,
    writableZoneComments,
  };
  fs.mkdirSync(path.dirname(FORMULA_BOOK_DATA_PATH), { recursive: true });
  fs.writeFileSync(FORMULA_BOOK_DATA_PATH, `${JSON.stringify(data, null, 2)}\n`, "utf8");
  fs.writeFileSync(
    FORMULA_BOOK_CONTENT_PATH,
    `---
title: 公式簿
---

<FormulaBookExplorer />
`,
    "utf8",
  );
  return formulas.length;
}

/** 同步藏品乘区 JSON，并生成主题页面。 */
function writeRelicZonePages(topics: RelicZoneTopicSummary[]): number {
  fs.mkdirSync(RELIC_ZONES_DATA_ROOT, { recursive: true });
  fs.mkdirSync(RELIC_ZONES_CONTENT_ROOT, { recursive: true });
  for (const topic of topics) {
    // 旧“藏品乘区”浏览页继续以 graph 预测作为事实展示源。
    fs.copyFileSync(
      topic.graphSourcePath,
      path.resolve(RELIC_ZONES_DATA_ROOT, `${topic.id}.json`),
    );
  }
  const cards = topics
    .map(
      (topic) => `  <Card title=${JSON.stringify(topic.name)} href="/docs/relic-zones/${topic.id}">
    ${topic.itemCount} 件藏品 · ${topic.effectCount} 条 buff
  </Card>`,
    )
    .join("\n");
  fs.writeFileSync(
    path.resolve(RELIC_ZONES_CONTENT_ROOT, "index.mdx"),
    `---
title: 藏品乘区
description: 按肉鸽主题选择难度，并浏览藏品原文、加成乘区与 buffs 原数据
---

由 \`pnpm graph:export\` 导出的 Kuzu graph 藏品乘区，与 Kuzu 同源难度规则共同驱动。难度表读取 GameData 报告的原始主题数据；无法由客户端事实验证的难度机制明确保留为 unknown。

<Cards>
${cards || '  <Card title="暂无数据">请先运行 graph:export</Card>'}
</Cards>
`,
    "utf8",
  );
  fs.writeFileSync(
    path.resolve(RELIC_ZONES_CONTENT_ROOT, "meta.json"),
    `${JSON.stringify(
      {
        defaultOpen: true,
        pages: ["index", ...topics.map((topic) => topic.id)],
        pagesIndex: "index",
        title: "藏品乘区",
      },
      null,
      2,
    )}\n`,
    "utf8",
  );
  for (const topic of topics) {
    fs.writeFileSync(
      path.resolve(RELIC_ZONES_CONTENT_ROOT, `${topic.id}.mdx`),
      `---
title: ${JSON.stringify(topic.name)}
description: ${JSON.stringify(`${topic.name}难度选择、藏品乘区与生效条件表`)}
---

<RelicZoneExplorer topicId="${topic.id}" />
`,
      "utf8",
    );
  }
  return topics.length;
}

/** 校验人工历史文件，并生成通用乘区校验页面。 */
function writeZoneValidationPages(topics: RelicZoneTopicSummary[]): number {
  fs.mkdirSync(ZONE_VALIDATION_CONTENT_ROOT, { recursive: true });
  fs.mkdirSync(HUMAN_ZONE_VALIDATION_ROOT, { recursive: true });
  const writableZoneIds = new Set(
    Object.values(new FormulaBook().zones)
      .filter((expression) => expression.kind === "zone")
      .map((expression) => expression.zoneId),
  );
  for (const topic of topics) {
    const historyPath = path.resolve(HUMAN_ZONE_VALIDATION_ROOT, `${topic.id}.json`);
    if (!fs.existsSync(historyPath)) continue;
    parseHumanZoneValidation(JSON.parse(fs.readFileSync(historyPath, "utf8")), writableZoneIds);
  }

  const cards = topics
    .map(
      (topic) => `  <Card title=${JSON.stringify(topic.name)} href="/docs/zone-validation/${topic.id}">
    ${topic.itemCount} 件藏品 · ${topic.effectCount} 条 buff
  </Card>`,
    )
    .join("\n");
  fs.writeFileSync(
    path.resolve(ZONE_VALIDATION_CONTENT_ROOT, "index.mdx"),
    `---
title: 乘区校验
description: 对照图谱结果、程序结果与人工维护的历史版本
---

本目录用于对照 Graph、Mechanics 与人工维护的历史版本。Graph 读取 Kuzu 图谱直接发布的独立产物；Mechanics 由页面调用当前程序即时分析；历史版本保存在 \`public/human-zone-validation\`，由人工复制或下载后维护。本次只展示藏品，后续可扩展主题难度与特殊系统。

<Cards>
${cards || '  <Card title="暂无数据">请先显式准备 Graph 导出数据</Card>'}
</Cards>
`,
    "utf8",
  );
  fs.writeFileSync(
    path.resolve(ZONE_VALIDATION_CONTENT_ROOT, "meta.json"),
    `${JSON.stringify(
      {
        defaultOpen: true,
        pages: ["index", ...topics.map((topic) => topic.id)],
        pagesIndex: "index",
        title: "乘区校验",
      },
      null,
      2,
    )}\n`,
    "utf8",
  );
  for (const topic of topics) {
    fs.writeFileSync(
      path.resolve(ZONE_VALIDATION_CONTENT_ROOT, `${topic.id}.mdx`),
      `---
title: ${JSON.stringify(`${topic.name} · 乘区校验`)}
description: ${JSON.stringify(`对照 ${topic.name} 的图谱、程序与历史藏品乘区`)}
---

<ZoneValidationExplorer topicId="${topic.id}" />
`,
      "utf8",
    );
  }
  return topics.length;
}

/** GameData DefinedData 包装：优先取已定义的 m_value。 */
function unwrapDefinedData(value: unknown): unknown {
  if (Array.isArray(value)) return value.map(unwrapDefinedData);
  if (!value || typeof value !== "object") return value;
  const record = value as Record<string, unknown>;
  if ("m_value" in record) {
    return unwrapDefinedData(record.m_value);
  }
  const result: Record<string, unknown> = {};
  for (const [key, entry] of Object.entries(record)) {
    result[key] = unwrapDefinedData(entry);
  }
  return result;
}

/** 读取已复制的 GameData 报告干员目录数量，不再覆盖完整干员文件。 */
function countExportedOperators(): number {
  const indexPath = path.resolve(PACKAGE_ROOT, "public", "gamedata-report", "operators.json");
  if (!fs.existsSync(indexPath)) {
    throw new Error(`未找到 GameData 报告干员目录：${indexPath}`);
  }
  const index = JSON.parse(fs.readFileSync(indexPath, "utf8")) as ExportedOperatorIndex;
  if (!Array.isArray(index)) {
    throw new Error(`GameData 报告干员目录格式无效：${indexPath}`);
  }
  return index.length;
}

/** 选择器用敌人目录条目。 */
interface EnemyIndexEntry {
  id: string;
  name: string;
  prefabKey: string;
}

/** 敌人 level0 详情（属性字段完整保留）。 */
interface EnemyDetail {
  id: string;
  name: string;
  prefabKey: string;
  level: number;
  attributes: Record<string, unknown>;
  /** 解开 DefinedData 后的完整 enemyData，便于后续扩展。 */
  enemyData: Record<string, unknown>;
}

/** 从 enemy_database 拆出索引与按 id 详情。 */
function writeEnemyCatalog(): number {
  if (!fs.existsSync(ENEMY_DATABASE_PATH)) {
    console.warn(`未找到 enemy_database：${ENEMY_DATABASE_PATH}`);
    return 0;
  }
  fs.mkdirSync(ENEMIES_DATA_ROOT, { recursive: true });
  const database = JSON.parse(fs.readFileSync(ENEMY_DATABASE_PATH, "utf8")) as {
    enemies?: Array<{ Key?: string; Value?: unknown }>;
  };
  const index: EnemyIndexEntry[] = [];
  for (const entry of database.enemies ?? []) {
    const id = entry.Key;
    if (!id) continue;
    // Value 可能是数组或带数字键的对象，统一取 level 0。
    const levels = Array.isArray(entry.Value)
      ? entry.Value
      : entry.Value && typeof entry.Value === "object"
        ? Object.values(entry.Value as Record<string, unknown>)
        : [];
    const level0 = levels.find((level) => {
      if (!level || typeof level !== "object") return false;
      return (level as { level?: number }).level === 0;
    }) as { level?: number; enemyData?: Record<string, unknown> } | undefined;
    if (!level0?.enemyData) continue;
    const enemyData = unwrapDefinedData(level0.enemyData) as Record<string, unknown>;
    const name =
      typeof enemyData.name === "string" && enemyData.name.length > 0 ? enemyData.name : id;
    const prefabKey =
      typeof enemyData.prefabKey === "string" && enemyData.prefabKey.length > 0
        ? enemyData.prefabKey
        : id;
    const attributes =
      enemyData.attributes && typeof enemyData.attributes === "object"
        ? (enemyData.attributes as Record<string, unknown>)
        : {};
    index.push({ id, name, prefabKey });
    const detail: EnemyDetail = {
      id,
      name,
      prefabKey,
      level: 0,
      attributes,
      enemyData,
    };
    fs.writeFileSync(
      path.resolve(ENEMIES_DATA_ROOT, `${id}.json`),
      `${JSON.stringify(detail, null, 2)}\n`,
      "utf8",
    );
  }
  index.sort((left, right) => left.name.localeCompare(right.name, "zh-CN"));
  fs.writeFileSync(
    path.resolve(ENEMIES_DATA_ROOT, "index.json"),
    `${JSON.stringify({ schemaVersion: 1, count: index.length, items: index }, null, 2)}\n`,
    "utf8",
  );
  return index.length;
}

/** 从已生成报告写出浏览器级联选择使用的轻量区域、关卡索引。 */
function writeRoguelikeStageOptions(topics: readonly RelicZoneTopicSummary[]): number {
  const reportRoot = path.resolve(PACKAGE_ROOT, "public", "gamedata-report", "roguelike");
  fs.mkdirSync(STAGE_OPTIONS_DATA_ROOT, { recursive: true });
  for (const topic of topics) {
    const topicRoot = path.resolve(reportRoot, topic.id);
    const stagePath = path.resolve(topicRoot, "stage.json");
    const topicExtPath = path.resolve(topicRoot, "topic_ext.json");
    if (!fs.existsSync(stagePath) || !fs.existsSync(topicExtPath)) {
      throw new Error(`主题 ${topic.id} 缺少 stage.json 或 topic_ext.json。`);
    }
    const stages = JSON.parse(
      fs.readFileSync(stagePath, "utf8"),
    ) as ExportedRogueStageReport;
    const topicExt = JSON.parse(
      fs.readFileSync(topicExtPath, "utf8"),
    ) as ExportedAnyRoguelikeTopicExtReport;
    const payload = buildRoguelikeStageOptions(topic.id, stages, topicExt);
    fs.writeFileSync(
      path.resolve(STAGE_OPTIONS_DATA_ROOT, `${topic.id}.json`),
      `${JSON.stringify(payload, null, 2)}\n`,
      "utf8",
    );
  }
  return topics.length;
}

/** 清理本脚本负责的全部可再生成输出。 */
function resetGeneratedContent(): void {
  fs.mkdirSync(CONTENT_ROOT, { recursive: true });
  for (const directory of [
    TYPES_CONTENT_ROOT,
    RELIC_ZONES_CONTENT_ROOT,
    RELIC_ZONES_DATA_ROOT,
    ZONE_VALIDATION_CONTENT_ROOT,
    LEGACY_RELIC_VALIDATION_CONTENT_ROOT,
    LEGACY_RELIC_VALIDATION_DATA_ROOT,
    ENEMIES_DATA_ROOT,
    STAGE_OPTIONS_DATA_ROOT,
    FORMULA_BOOK_CONTENT_PATH,
    FORMULA_BOOK_DATA_PATH,
    GENERATED_ROOT,
  ]) {
    if (fs.existsSync(directory)) fs.rmSync(directory, { force: true, recursive: true });
  }
}

/** 执行类型页面与游戏数据页面组装。 */
function main(): void {
  if (process.argv.includes("--formula-book-only")) {
    // 公式簿窄模式不触发尚未迁移的藏品、难度与 Kuzu 文档生成链。
    for (const target of [FORMULA_BOOK_CONTENT_PATH, FORMULA_BOOK_DATA_PATH]) {
      if (fs.existsSync(target)) fs.rmSync(target, { force: true });
    }
    const formulaPages = writeFormulaBookPage();
    console.log(`公式簿生成完成：${formulaPages} 条公式。`);
    return;
  }
  const entries = collectTypeEntries();
  const typeHrefByName = buildTypeHrefByName(entries);
  resetGeneratedContent();
  writeIndexPage(entries);
  writeTypeSources(entries);
  const typePages = writeDirectoryTree(buildDirectoryTree(entries), typeHrefByName);
  const relicTopics = collectRelicZoneTopics();
  const relicPages = writeRelicZonePages(relicTopics);
  const validationPages = writeZoneValidationPages(relicTopics);
  const formulaPages = writeFormulaBookPage();
  const operatorCount = countExportedOperators();
  const enemyCount = writeEnemyCatalog();
  const stageTopicCount = writeRoguelikeStageOptions(relicTopics);
  const definitionCount = entries.reduce(
    (total, entry) => total + entry.definitions.length,
    0,
  );
  console.log(
    `文档组装完成：${typePages} 个类型模块页面，覆盖 ${definitionCount} 个定义；战斗公式 ${formulaPages} 条；藏品乘区 ${relicPages} 个主题；乘区校验 ${validationPages} 个主题；关卡选项 ${stageTopicCount} 个主题；干员 ${operatorCount}、敌人 ${enemyCount}。`,
  );
}

try {
  main();
} catch (error: unknown) {
  const message = error instanceof Error ? error.stack ?? error.message : String(error);
  console.error(message);
  process.exitCode = 1;
}
