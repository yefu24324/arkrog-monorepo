/**
 * 从 @arkrog/arknights-schema 的类型定义与中文 Markdown 组装 Fumadocs MDX。
 * 字段区使用中文三列 CnTypeTable；Record 等泛型中的自定义类型也可跳转。
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import ts from "typescript";

/** 本脚本与输出、源 schema 包的路径锚点。 */
const CURRENT_FILE = fileURLToPath(import.meta.url);
const PACKAGE_ROOT = path.resolve(path.dirname(CURRENT_FILE), "..");
const SCHEMA_PACKAGE_ROOT = path.resolve(PACKAGE_ROOT, "..", "arknights-schema");
const TYPES_ROOT = path.resolve(SCHEMA_PACKAGE_ROOT, "src", "types");
const DOCS_ROOT = path.resolve(SCHEMA_PACKAGE_ROOT, "docs", "types");
const CONTENT_ROOT = path.resolve(PACKAGE_ROOT, "content", "docs");
const TYPES_CONTENT_ROOT = path.resolve(CONTENT_ROOT, "types");

/** 原始 Markdown 文档中的一段解析结果。 */
interface ParsedMarkdown {
  /** 去掉一级标题后的正文主体。 */
  body: string;
  /** 人工说明区原文（含标记）。 */
  manualSection: string | null;
}

/** 单个可浏览类型的完整元数据。 */
interface TypeDocEntry {
  /** 逻辑模块名称。 */
  name: string;
  /** 模块内 interface/type 定义数量。 */
  definitionCount: number;
  /** 相对 `src/types` 的目录路径（POSIX）。 */
  relativeDirectory: string;
  /** 不含扩展名的文件名。 */
  stem: string;
  /** Fumadocs 路由 slugs（不含 `/docs` 前缀）。 */
  slugs: string[];
  /** 文档站内绝对路径。 */
  href: string;
  /** TypeScript 源文件绝对路径。 */
  typePath: string;
  /** 对应中文 Markdown 绝对路径。 */
  markdownPath: string;
  /** TypeSource 快照使用的全局唯一键。 */
  sourceKey: string;
  /** 从 JSDoc 提取的简短说明。 */
  summary: string;
  /** 类型源码全文。 */
  sourceText: string;
}

/** 目录树节点，用于生成 meta.json。 */
interface DirectoryNode {
  /** 相对 `types` 内容根的路径段。 */
  segments: string[];
  /** 直接子目录。 */
  directories: Map<string, DirectoryNode>;
  /** 本目录下的类型条目。 */
  pages: TypeDocEntry[];
}

/** 已知顶层数据表的展示标题。 */
const TABLE_TITLES: Record<string, string> = {
  "roguelike-topic-table": "roguelike_topic_table",
};

/** 常见目录的中文侧栏标题。 */
const FOLDER_TITLES: Record<string, string> = {
  types: "类型定义",
  "roguelike-topic-table": "集成战略主题表",
  topics: "topics",
  constant: "constant",
  details: "details",
  modules: "modules",
  shared: "shared",
  "customize-data": "customizeData",
};

/** 不会被链接化的 TypeScript 内建与关键字。 */
const BUILTIN_TYPE_NAMES = new Set([
  "string",
  "number",
  "boolean",
  "null",
  "undefined",
  "void",
  "never",
  "any",
  "unknown",
  "object",
  "bigint",
  "symbol",
  "Record",
  "Partial",
  "Required",
  "Readonly",
  "Pick",
  "Omit",
  "Exclude",
  "Extract",
  "NonNullable",
  "Array",
  "ReadonlyArray",
  "Promise",
  "Map",
  "Set",
  "Date",
  "Error",
  "RegExp",
  "Function",
]);

/** 递归列出目录中的全部文件。 */
function listFilesRecursively(directory: string): string[] {
  if (!fs.existsSync(directory)) return [];
  const result: string[] = [];
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const absolutePath = path.resolve(directory, entry.name);
    if (entry.isDirectory()) result.push(...listFilesRecursively(absolutePath));
    else if (entry.isFile()) result.push(absolutePath);
  }
  return result;
}

/** 将路径统一为 POSIX 风格，便于生成 URL 与 meta。 */
function toPosix(filePath: string): string {
  return filePath.split(path.sep).join("/");
}

/** 转义 YAML frontmatter 中的双引号字符串。 */
function escapeYamlString(value: string): string {
  return value.replaceAll("\\", "\\\\").replaceAll('"', '\\"');
}

/** 从 JSDoc 文本中提取第一段可读摘要。 */
function extractSummary(jsDocText: string | undefined): string {
  if (!jsDocText) return "由 arknights-schema 自动生成的类型文档。";
  const lines = jsDocText
    .replace(/^\/\*\*?/, "")
    .replace(/\*\/$/, "")
    .split("\n")
    .map((line) => line.replace(/^\s*\*\s?/, "").trimEnd())
    .map((line) => line.trim());

  const paragraphLines: string[] = [];
  for (const line of lines) {
    if (line.startsWith("@")) break;
    if (line.length === 0) {
      if (paragraphLines.length > 0) break;
      continue;
    }
    paragraphLines.push(line);
  }

  const paragraph = paragraphLines.join(" ").replace(/\s+/g, " ").trim();
  return paragraph.length > 0 ? paragraph : "由 arknights-schema 自动生成的类型文档。";
}

/** 读取聚合类型模块的定义数量与首个定义摘要。 */
function readTypeMetadata(filePath: string): {
  definitionCount: number;
  summary: string;
} {
  const sourceText = fs.readFileSync(filePath, "utf8");
  const sourceFile = ts.createSourceFile(
    filePath,
    sourceText,
    ts.ScriptTarget.ESNext,
    true,
    ts.ScriptKind.TS,
  );

  const definitions = sourceFile.statements.filter(
    (statement) =>
      ts.isInterfaceDeclaration(statement) || ts.isTypeAliasDeclaration(statement),
  );
  if (definitions.length === 0) {
    throw new Error(`${filePath} 未找到 interface/type 导出定义。`);
  }
  const firstDefinition = definitions[0]!;
  const docs = ts.getJSDocCommentsAndTags(firstDefinition);
  const commentRanges = ts.getLeadingCommentRanges(sourceText, firstDefinition.pos) ?? [];
  const firstBlock = commentRanges
    .map((range) => sourceText.slice(range.pos, range.end))
    .find((comment) => comment.startsWith("/**"));
  const summaryFromDocs =
    docs.length > 0 && typeof docs[0]?.comment === "string"
      ? docs[0].comment
      : firstBlock;
  return {
    definitionCount: definitions.length,
    summary: `${definitions.length} 个强关联类型。${extractSummary(summaryFromDocs)}`,
  };
}

/** 收集 schema 包内全部可浏览类型条目。 */
function collectTypeEntries(): TypeDocEntry[] {
  const typeFiles = listFilesRecursively(TYPES_ROOT)
    .filter((filePath) => filePath.endsWith(".types.ts"))
    .sort();

  return typeFiles.map((typePath) => {
    const relativePath = toPosix(path.relative(TYPES_ROOT, typePath));
    const stem = path.basename(typePath, ".types.ts");
    const relativeDirectory = toPosix(path.dirname(relativePath));
    const directorySegments =
      relativeDirectory === "." ? [] : relativeDirectory.split("/").filter(Boolean);
    const metadata = readTypeMetadata(typePath);
    const slugs = ["types", ...directorySegments, stem];
    const markdownPath = path.resolve(DOCS_ROOT, ...directorySegments, `${stem}.md`);

    if (!fs.existsSync(markdownPath)) {
      throw new Error(`${stem} 模块缺少对应 Markdown：${markdownPath}`);
    }

    return {
      name: stem,
      definitionCount: metadata.definitionCount,
      relativeDirectory,
      stem,
      slugs,
      href: `/docs/${slugs.join("/")}`,
      typePath,
      markdownPath,
      sourceKey: slugs.join("/"),
      summary: metadata.summary,
      sourceText: fs.readFileSync(typePath, "utf8").trimEnd(),
    };
  });
}

/** 读取聚合类型模块中全部导出的 interface/type 名称。 */
function readExportedTypeNames(filePath: string): string[] {
  const sourceText = fs.readFileSync(filePath, "utf8");
  const sourceFile = ts.createSourceFile(
    filePath,
    sourceText,
    ts.ScriptTarget.ESNext,
    true,
    ts.ScriptKind.TS,
  );
  const names: string[] = [];
  for (const statement of sourceFile.statements) {
    if (ts.isInterfaceDeclaration(statement) || ts.isTypeAliasDeclaration(statement)) {
      names.push(statement.name.text);
    }
  }
  return names;
}

/**
 * 构建「类型导出名 → 文档锚点」映射。
 * 页面按逻辑模块聚合，因此链接指向模块页并附加标题锚点。
 */
function buildTypeHrefByName(entries: TypeDocEntry[]): Map<string, string> {
  const map = new Map<string, string>();
  for (const entry of entries) {
    for (const typeName of readExportedTypeNames(entry.typePath)) {
      // Fumadocs / github-slugger 对 PascalCase 标题通常直接小写。
      map.set(typeName, `${entry.href}#${typeName.toLowerCase()}`);
    }
  }
  return map;
}

/** 解析 schema 包中的中文 Markdown：去掉一级标题，保留各类型小节的人工说明。 */
function parseMarkdown(markdown: string): ParsedMarkdown {
  const withoutTitle = markdown.replace(/^#\s+.+\r?\n+/, "");
  return { body: withoutTitle.trim(), manualSection: null };
}

/**
 * 把 schema Markdown 中的 HTML 注释改成 MDX 安全的 JSX 注释。
 */
function sanitizeManualSection(manualSection: string): string {
  return manualSection
    .replaceAll("<!--", "{/*")
    .replaceAll("-->", "*/}");
}

/**
 * 从类型表达式中提取可跳转的自定义类型名。
 */
function extractReferencedTypeNames(
  expression: string,
  typeHrefByName: Map<string, string>,
  sortedTypeNames: string[],
): string[] {
  const found = new Set<string>();
  let index = 0;

  while (index < expression.length) {
    if (!/[A-Za-z_]/.test(expression[index]!)) {
      index += 1;
      continue;
    }

    let matched: string | null = null;
    for (const typeName of sortedTypeNames) {
      if (
        expression.startsWith(typeName, index) &&
        !/[A-Za-z0-9_]/.test(expression[index + typeName.length] ?? "")
      ) {
        matched = typeName;
        break;
      }
    }

    if (matched && typeHrefByName.has(matched) && !BUILTIN_TYPE_NAMES.has(matched)) {
      found.add(matched);
      index += matched.length;
      continue;
    }

    const identifierMatch = expression.slice(index).match(/^[A-Za-z_][A-Za-z0-9_]*/);
    index += identifierMatch?.[0].length ?? 1;
  }

  return [...found].sort((left, right) => left.localeCompare(right));
}

/** Markdown 字段表中的一行。 */
interface FieldRow {
  /** 字段名。 */
  name: string;
  /** TypeScript 类型表达式原文。 */
  typeExpression: string;
  /** 是否必需。 */
  required: boolean;
}

/** CnTypeTable 单个字段节点（序列化为 MDX 的 JSON 友好结构）。 */
interface TypeTableField {
  description?: string;
  type: string;
  /** 表达式内全部可跳转自定义类型。 */
  typeLinks?: Record<string, string>;
  /** 主跳转目标（Record 值类型、数组元素类型或单一自定义类型）。 */
  typeDescriptionLink?: string;
  required?: boolean;
}

/**
 * 解析复杂类型表达式的主跳转目标（优先 Record/包装器的值类型）。
 */
function resolveTypeDescriptionLink(
  expression: string,
  typeHrefByName: Map<string, string>,
  referencedNames: string[],
): string | undefined {
  const patterns = [
    /^Record<[^,]+,\s*([A-Z][A-Za-z0-9_]*)\s*>$/,
    /^(?:Partial|Required|Readonly|Array|Promise|NonNullable|Omit|Pick|Exclude|Extract)<\s*([A-Z][A-Za-z0-9_]*)\b/,
    /^([A-Z][A-Za-z0-9_]*)\[\]$/,
    /^([A-Z][A-Za-z0-9_]*)$/,
    /^null\s*\|\s*([A-Z][A-Za-z0-9_]*)$/,
    /^([A-Z][A-Za-z0-9_]*)\s*\|\s*null$/,
  ];

  for (const pattern of patterns) {
    const match = expression.match(pattern);
    if (match?.[1] && typeHrefByName.has(match[1])) {
      return typeHrefByName.get(match[1]);
    }
  }

  // 回退：取表达式中最后一个自定义类型（常为 Record 值类型）。
  for (let index = referencedNames.length - 1; index >= 0; index -= 1) {
    const name = referencedNames[index]!;
    if (typeHrefByName.has(name)) return typeHrefByName.get(name);
  }

  return undefined;
}

/**
 * 从 TypeScript interface 成员上提取字段 JSDoc 说明。
 */
function readPropertyDescriptions(filePath: string): Map<string, string> {
  const sourceText = fs.readFileSync(filePath, "utf8");
  const sourceFile = ts.createSourceFile(
    filePath,
    sourceText,
    ts.ScriptTarget.ESNext,
    true,
    ts.ScriptKind.TS,
  );
  const descriptions = new Map<string, string>();

  for (const statement of sourceFile.statements) {
    if (!ts.isInterfaceDeclaration(statement)) continue;
    for (const member of statement.members) {
      if (!ts.isPropertySignature(member) || !member.name) continue;
      const name = member.name.getText(sourceFile);
      const commentRanges = ts.getLeadingCommentRanges(sourceText, member.pos) ?? [];
      const firstBlock = commentRanges
        .map((range) => sourceText.slice(range.pos, range.end))
        .find((comment) => comment.startsWith("/**"));
      if (!firstBlock) continue;
      const summary = extractSummary(firstBlock);
      if (summary !== "由 arknights-schema 自动生成的类型文档。") {
        descriptions.set(name, summary);
      }
    }
  }

  return descriptions;
}

/**
 * 按 Markdown 表格规则拆分行：保留单元格内用 `\|` 转义的联合类型竖线。
 */
function splitMarkdownTableRow(line: string): string[] {
  const trimmed = line.replace(/^\||\|$/g, "");
  const cells: string[] = [];
  let current = "";

  for (let index = 0; index < trimmed.length; index += 1) {
    const char = trimmed[index]!;
    const next = trimmed[index + 1];
    if (char === "\\" && next === "|") {
      current += "|";
      index += 1;
      continue;
    }
    if (char === "|") {
      cells.push(current.trim());
      current = "";
      continue;
    }
    current += char;
  }
  cells.push(current.trim());
  return cells.filter((cell) => cell.length > 0);
}

/**
 * 解析「字段」表格的数据行文本。
 */
function parseFieldRows(rowsText: string): FieldRow[] {
  const rows: FieldRow[] = [];
  for (const line of rowsText.trim().split(/\r?\n/)) {
    const cells = splitMarkdownTableRow(line);
    if (cells.length < 3) continue;
    const name = cells[0]!.replace(/^`|`$/g, "");
    // 去掉围栏反引号，并把残留的 Markdown 转义还原为 TypeScript 联合类型。
    const typeExpression = cells[1]!
      .replace(/^`|`$/g, "")
      .replaceAll("\\|", "|")
      .replaceAll("\\<", "<")
      .replaceAll("\\>", ">");
    const required = cells[2] === "是";
    rows.push({ name, typeExpression, required });
  }
  return rows;
}

/**
 * 把字段行组装为 CnTypeTable 的 type 对象。
 */
function buildTypeTableFields(
  fields: FieldRow[],
  propertyDescriptions: Map<string, string>,
  typeHrefByName: Map<string, string>,
  sortedTypeNames: string[],
): { typeTable: Record<string, TypeTableField>; relatedTypes: string[] } {
  const related = new Set<string>();
  const typeTable: Record<string, TypeTableField> = {};

  for (const field of fields) {
    const referencedNames = extractReferencedTypeNames(
      field.typeExpression,
      typeHrefByName,
      sortedTypeNames,
    );
    for (const name of referencedNames) related.add(name);

    const typeLinks: Record<string, string> = {};
    for (const name of referencedNames) {
      const href = typeHrefByName.get(name);
      if (href) typeLinks[name] = href;
    }

    const node: TypeTableField = {
      type: field.typeExpression,
      required: field.required,
    };
    const description = propertyDescriptions.get(field.name);
    if (description) node.description = description;
    if (Object.keys(typeLinks).length > 0) node.typeLinks = typeLinks;

    const primaryLink = resolveTypeDescriptionLink(
      field.typeExpression,
      typeHrefByName,
      referencedNames,
    );
    if (primaryLink) node.typeDescriptionLink = primaryLink;

    typeTable[field.name] = node;
  }

  return {
    typeTable,
    relatedTypes: [...related].sort((left, right) => left.localeCompare(right)),
  };
}

/**
 * 将 Markdown 正文中的全部字段表替换为 CnTypeTable，并收集相关类型。
 */
function transformMarkdownBody(
  body: string,
  entry: TypeDocEntry,
  typeHrefByName: Map<string, string>,
  sortedTypeNames: string[],
): { body: string; relatedTypes: string[] } {
  const propertyDescriptions = readPropertyDescriptions(entry.typePath);
  const related = new Set<string>();

  const nextBody = body.replace(
    /^#{2,3} 字段\s*\r?\n\r?\n\|[^\n]+\|\r?\n\|[-| :]+\|\r?\n((?:\|[^\n]+\|\r?\n?)*)/gm,
    (_full, rowsText: string) => {
      const fields = parseFieldRows(rowsText);
      if (fields.length === 0) return _full;

      const { typeTable, relatedTypes } = buildTypeTableFields(
        fields,
        propertyDescriptions,
        typeHrefByName,
        sortedTypeNames,
      );
      for (const name of relatedTypes) related.add(name);

      return `### 字段

<CnTypeTable type={${JSON.stringify(typeTable, null, 2)}} />

`;
    },
  );

  return {
    body: nextBody,
    relatedTypes: [...related].sort((left, right) => left.localeCompare(right)),
  };
}

/** 组装单个类型的 MDX 页面内容。 */
function buildTypeMdx(
  entry: TypeDocEntry,
  typeHrefByName: Map<string, string>,
  sortedTypeNames: string[],
): string {
  const markdown = fs.readFileSync(entry.markdownPath, "utf8");
  const parsed = parseMarkdown(markdown);
  const { body: linkedBody, relatedTypes } = transformMarkdownBody(
    parsed.body,
    entry,
    typeHrefByName,
    sortedTypeNames,
  );

  const schemaRelative = toPosix(
    path.join(
      "src/schemas",
      entry.relativeDirectory === "." ? "" : entry.relativeDirectory,
      `${entry.stem}.schemas.ts`,
    ),
  ).replace(/^\//, "");

  const typeRelative = toPosix(
    path.join(
      "src/types",
      entry.relativeDirectory === "." ? "" : entry.relativeDirectory,
      `${entry.stem}.types.ts`,
    ),
  ).replace(/^\//, "");

  const relatedSection =
    relatedTypes.length > 0
      ? `## 相关类型\n\n${relatedTypes
          .map((name) => `- [\`${name}\`](${typeHrefByName.get(name)})`)
          .join("\n")}\n`
      : "";

  return `---
title: "${escapeYamlString(entry.name)}"
description: "${escapeYamlString(entry.summary)}"
---

${sanitizeManualSection(linkedBody)}

${relatedSection}
## 定义信息

| 项 | 值 |
|---|---|
| 种类 | \`logical module\` |
| 定义数量 | ${entry.definitionCount} |
| TypeScript | \`${typeRelative}\` |
| Zod Schema | \`${schemaRelative}\` |

源码见 schema 包内 \`${typeRelative}\`。

## TypeScript 定义

<TypeSource name="${entry.sourceKey}" />
`;
}

/** 把条目列表折叠为目录树。 */
function buildDirectoryTree(entries: TypeDocEntry[]): DirectoryNode {
  const root: DirectoryNode = {
    segments: [],
    directories: new Map(),
    pages: [],
  };

  for (const entry of entries) {
    const directorySegments =
      entry.relativeDirectory === "."
        ? []
        : entry.relativeDirectory.split("/").filter(Boolean);
    let node = root;
    const walked: string[] = [];

    for (const segment of directorySegments) {
      walked.push(segment);
      let child = node.directories.get(segment);
      if (!child) {
        child = {
          segments: [...walked],
          directories: new Map(),
          pages: [],
        };
        node.directories.set(segment, child);
      }
      node = child;
    }

    node.pages.push(entry);
  }

  return root;
}

/** 写入目录及其子树的 MDX 与 meta.json。 */
function writeDirectoryTree(
  node: DirectoryNode,
  typeHrefByName: Map<string, string>,
  sortedTypeNames: string[],
): number {
  const absoluteDirectory = path.resolve(TYPES_CONTENT_ROOT, ...node.segments);
  fs.mkdirSync(absoluteDirectory, { recursive: true });

  let written = 0;
  const folderKey = node.segments.at(-1) ?? "types";
  const title =
    FOLDER_TITLES[folderKey] ??
    TABLE_TITLES[folderKey] ??
    folderKey;

  // 与文件夹同名的页面作为可点击索引：点击折叠组标题即可跳转，无需再点子菜单。
  const indexPage = node.pages.find((page) => page.stem === folderKey);
  const childPageNames = node.pages
    .filter((page) => page.stem !== folderKey)
    .map((page) => page.stem)
    .sort();
  const pageNames = [...[...node.directories.keys()].sort(), ...childPageNames];

  const meta: {
    title: string;
    pages: string[];
    defaultOpen: boolean;
    pagesIndex?: string;
  } = {
    title,
    pages: pageNames,
    defaultOpen: node.segments.length <= 1,
  };
  if (indexPage) {
    meta.pagesIndex = indexPage.stem;
  }
  fs.writeFileSync(
    path.resolve(absoluteDirectory, "meta.json"),
    `${JSON.stringify(meta, null, 2)}\n`,
    "utf8",
  );

  for (const entry of node.pages) {
    const mdx = buildTypeMdx(entry, typeHrefByName, sortedTypeNames);
    fs.writeFileSync(path.resolve(absoluteDirectory, `${entry.stem}.mdx`), mdx, "utf8");
    written += 1;
  }

  for (const child of node.directories.values()) {
    written += writeDirectoryTree(child, typeHrefByName, sortedTypeNames);
  }

  return written;
}

/** 生成文档首页与类型总览。 */
function writeIndexPages(entries: TypeDocEntry[]): void {
  const tables = new Map<string, TypeDocEntry[]>();
  for (const entry of entries) {
    const table = entry.slugs[1] ?? "unknown";
    if (!tables.has(table)) tables.set(table, []);
    tables.get(table)!.push(entry);
  }

  const tableCards = [...tables.entries()]
    .sort(([left], [right]) => left.localeCompare(right))
    .map(([table, tableEntries]) => {
      const title = TABLE_TITLES[table] ?? table;
      const href = `/docs/types/${table}/${table}`;
      return `  <Card title="${title}" href="${href}">
    ${tableEntries.length} 个逻辑模块，${tableEntries.reduce((sum, entry) => sum + entry.definitionCount, 0)} 个类型定义
  </Card>`;
    })
    .join("\n");

  const indexMdx = `---
title: Arknights Schema
description: 浏览 @arkrog/arknights-schema 的 TypeScript 类型与中文说明
---

本站点由脚本从 \`@arkrog/arknights-schema\` 的类型定义与 Markdown 文档自动组装。
字段表中的自定义类型可点击跳转到对应页面。

## 数据表

<Cards>
${tableCards}
</Cards>

## 使用说明

1. 在 schema 包中更新类型或中文 Markdown。
2. 运行 \`pnpm docs:generate\` 重新组装本站内容。
3. 运行 \`pnpm --filter @arkrog/arknights-schema-docs dev\` 预览。
`;

  fs.writeFileSync(path.resolve(CONTENT_ROOT, "index.mdx"), indexMdx, "utf8");
  fs.writeFileSync(
    path.resolve(CONTENT_ROOT, "meta.json"),
    `${JSON.stringify(
      {
        title: "文档",
        pages: ["index", "types"],
      },
      null,
      2,
    )}\n`,
    "utf8",
  );
}

/** 清空已生成的 types 目录，避免残留过期页面。 */
function resetGeneratedContent(): void {
  fs.mkdirSync(CONTENT_ROOT, { recursive: true });
  if (fs.existsSync(TYPES_CONTENT_ROOT)) {
    fs.rmSync(TYPES_CONTENT_ROOT, { recursive: true, force: true });
  }
  fs.mkdirSync(TYPES_CONTENT_ROOT, { recursive: true });
}

/** 写出类型名到源码快照的映射，供 TypeSource 组件读取。 */
function writeTypeSources(entries: TypeDocEntry[]): void {
  const generatedRoot = path.resolve(PACKAGE_ROOT, "generated");
  fs.mkdirSync(generatedRoot, { recursive: true });
  const sources: Record<string, string> = {};
  for (const entry of entries) {
    sources[entry.sourceKey] = entry.sourceText;
  }
  fs.writeFileSync(
    path.resolve(generatedRoot, "type-sources.json"),
    `${JSON.stringify(sources, null, 2)}\n`,
    "utf8",
  );
}

/** 执行文档组装主流程。 */
function main(): void {
  const entries = collectTypeEntries();
  const typeHrefByName = buildTypeHrefByName(entries);
  const sortedTypeNames = [...typeHrefByName.keys()].sort(
    (left, right) => right.length - left.length,
  );

  resetGeneratedContent();
  writeIndexPages(entries);
  writeTypeSources(entries);
  const tree = buildDirectoryTree(entries);
  const written = writeDirectoryTree(tree, typeHrefByName, sortedTypeNames);
  const definitionCount = entries.reduce(
    (sum, entry) => sum + entry.definitionCount,
    0,
  );

  console.log(
    `文档组装完成：${written} 个模块页面，覆盖 ${definitionCount} 个定义，${typeHrefByName.size} 个可跳转类型。`,
  );
}

try {
  main();
} catch (error: unknown) {
  const message = error instanceof Error ? error.stack ?? error.message : String(error);
  console.error(message);
  process.exitCode = 1;
}
