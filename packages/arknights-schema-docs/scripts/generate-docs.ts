/**
 * 直接从 @arkrog/arknights-schema 的 TypeScript/JSDoc 生成类型页面，
 * 并将知识图谱导出的藏品乘区数据组装为 Fumadocs 内容。
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import ts from "typescript";

import {
  DAMAGE_FORMULA_BOOK,
  FORMULA_DAMAGE_ZONES,
  FormulaContext,
  explainDamageFormula,
  renderDamageFormula,
} from "../../arknights-knowledge-graph/src/formula/index.js";

/** 本脚本、源码包与生成目录的稳定路径。 */
const CURRENT_FILE = fileURLToPath(import.meta.url);
const PACKAGE_ROOT = path.resolve(path.dirname(CURRENT_FILE), "..");
const REPO_ROOT = path.resolve(PACKAGE_ROOT, "..", "..");
const SCHEMA_PACKAGE_ROOT = path.resolve(PACKAGE_ROOT, "..", "arknights-schema");
const TYPES_ROOT = path.resolve(SCHEMA_PACKAGE_ROOT, "src", "types");
const SCHEMAS_ROOT = path.resolve(SCHEMA_PACKAGE_ROOT, "src", "schemas");
const GAME_DOCS_ROOT = path.resolve(REPO_ROOT, "docs", "game");
const CONTENT_ROOT = path.resolve(PACKAGE_ROOT, "content", "docs");
const TYPES_CONTENT_ROOT = path.resolve(CONTENT_ROOT, "types");
const RELIC_ZONES_CONTENT_ROOT = path.resolve(CONTENT_ROOT, "relic-zones");
const RELIC_ZONES_DATA_ROOT = path.resolve(PACKAGE_ROOT, "public", "data", "relic-zones");
const FORMULA_BOOK_CONTENT_PATH = path.resolve(CONTENT_ROOT, "formula-book.mdx");
const FORMULA_BOOK_DATA_PATH = path.resolve(PACKAGE_ROOT, "public", "data", "formula-book.json");
const GENERATED_ROOT = path.resolve(PACKAGE_ROOT, "generated");

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
  id: string;
  itemCount: number;
  name: string;
  sourcePath: string;
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
      const module = readTypeModule(typePath);
      return {
        definitions: module.definitions,
        href: `/docs/${slugs.join("/")}`,
        name: stem,
        relativeDirectory,
        slugs,
        sourceKey: slugs.join("/"),
        sourceText: module.sourceText,
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

/** 扫描 graph:export 产出的藏品乘区 JSON。 */
function collectRelicZoneTopics(): RelicZoneTopicSummary[] {
  if (!fs.existsSync(GAME_DOCS_ROOT)) return [];
  const topics: RelicZoneTopicSummary[] = [];
  for (const entry of fs.readdirSync(GAME_DOCS_ROOT, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const folderPath = path.resolve(GAME_DOCS_ROOT, entry.name);
    const exportFile = fs
      .readdirSync(folderPath)
      .find((name) => name.endsWith("藏品乘区与生效条件表.json"));
    if (!exportFile) continue;
    const sourcePath = path.resolve(folderPath, exportFile);
    const raw = JSON.parse(fs.readFileSync(sourcePath, "utf8")) as {
      scope?: { effectCount?: number; itemCount?: number };
      topic?: { id?: string; name?: string };
    };
    const id = raw.topic?.id;
    if (!id || !/^rogue_\d+$/.test(id)) continue;
    topics.push({
      effectCount: raw.scope?.effectCount ?? 0,
      id,
      itemCount: raw.scope?.itemCount ?? 0,
      name: raw.topic?.name ?? entry.name,
      sourcePath,
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
  <Card title="伤害公式簿" href="/docs/formula-book">
    浏览完整伤害公式、结构化乘区、节点说明与公式 AST
  </Card>
</Cards>
`;
  fs.writeFileSync(path.resolve(CONTENT_ROOT, "index.mdx"), indexMdx, "utf8");
  fs.writeFileSync(
    path.resolve(CONTENT_ROOT, "meta.json"),
    `${JSON.stringify({ title: "文档", pages: ["index", "formula-book", "types", "relic-zones"] }, null, 2)}\n`,
    "utf8",
  );
}

/** 从实验公式源码生成浏览器可读取的数据和 Fumadocs 页面。 */
function writeFormulaBookPage(): number {
  const emptyContext = new FormulaContext();
  const formulas = Object.values(DAMAGE_FORMULA_BOOK).map((definition) => ({
    ...definition,
    compactFormula: renderDamageFormula(definition.id, { expandFormulaReferences: false }),
    fullFormula: renderDamageFormula(definition.id),
    zones: explainDamageFormula(definition.id, emptyContext).map((zone) => ({
      damageType: zone.damageType ?? null,
      name: zone.name,
      tooltip: zone.tooltip,
      zoneId: zone.zoneId,
    })),
  }));
  const data = {
    schemaVersion: 1,
    source: "packages/arknights-knowledge-graph/src/formula",
    formulas,
    zones: Object.values(FORMULA_DAMAGE_ZONES),
  };
  fs.mkdirSync(path.dirname(FORMULA_BOOK_DATA_PATH), { recursive: true });
  fs.writeFileSync(FORMULA_BOOK_DATA_PATH, `${JSON.stringify(data, null, 2)}\n`, "utf8");
  fs.writeFileSync(
    FORMULA_BOOK_CONTENT_PATH,
    `---
title: 伤害公式簿
description: 浏览结构化伤害公式、乘区聚合方式和节点说明
---

公式数据直接由知识图谱包的 formula 模块生成，不在文档站维护第二份定义。

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
    fs.copyFileSync(topic.sourcePath, path.resolve(RELIC_ZONES_DATA_ROOT, `${topic.id}.json`));
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
description: 按肉鸽主题浏览藏品原文、加成乘区与 buffs 原数据
---

由 \`pnpm graph:export\` 导出的藏品乘区与生效条件表。

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
description: ${JSON.stringify(`${topic.name}藏品乘区与生效条件表`)}
---

<RelicZoneExplorer topicId="${topic.id}" />
`,
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
    FORMULA_BOOK_CONTENT_PATH,
    FORMULA_BOOK_DATA_PATH,
    GENERATED_ROOT,
  ]) {
    if (fs.existsSync(directory)) fs.rmSync(directory, { force: true, recursive: true });
  }
}

/** 执行类型页面与游戏数据页面组装。 */
function main(): void {
  const entries = collectTypeEntries();
  const typeHrefByName = buildTypeHrefByName(entries);
  resetGeneratedContent();
  writeIndexPage(entries);
  writeTypeSources(entries);
  const typePages = writeDirectoryTree(buildDirectoryTree(entries), typeHrefByName);
  const relicPages = writeRelicZonePages(collectRelicZoneTopics());
  const formulaPages = writeFormulaBookPage();
  const definitionCount = entries.reduce(
    (total, entry) => total + entry.definitions.length,
    0,
  );
  console.log(
    `文档组装完成：${typePages} 个类型模块页面，覆盖 ${definitionCount} 个定义；伤害公式 ${formulaPages} 条；藏品乘区 ${relicPages} 个主题。`,
  );
}

try {
  main();
} catch (error: unknown) {
  const message = error instanceof Error ? error.stack ?? error.message : String(error);
  console.error(message);
  process.exitCode = 1;
}
