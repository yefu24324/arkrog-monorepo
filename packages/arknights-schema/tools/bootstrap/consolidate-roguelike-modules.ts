/**
 * 把首次 Bootstrap 产生的“一定义一文件”布局聚合为逻辑模块布局。
 *
 * 本工具只接受尚未聚合的 Bootstrap 产物；检测到 `.types.ts` 时会拒绝运行，避免
 * 在维护阶段覆盖人工修改。迁移会保留定义、JSDoc 与 Schema 实现。
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import ts from "typescript";

/** 单个 TypeScript 类型定义。 */
interface TypeDefinitionRecord {
  dependencies: Set<string>;
  directory: string;
  name: string;
  sourceText: string;
}

/** 单个 Zod Schema 定义。 */
interface SchemaDefinitionRecord {
  dependencies: Set<string>;
  name: string;
  sourceText: string;
  typeName: string;
}

/** 聚合后的逻辑模块。 */
interface LogicalModule {
  directory: string;
  name: string;
  schemaDefinitions: SchemaDefinitionRecord[];
  typeDefinitions: TypeDefinitionRecord[];
}

/** 等待写入的迁移产物。 */
interface OutputFile {
  absolutePath: string;
  content: string;
}

/** 当前包与 Type/Schema 镜像目录。 */
const CURRENT_FILE = fileURLToPath(import.meta.url);
const PACKAGE_ROOT = path.resolve(path.dirname(CURRENT_FILE), "../..");
const TABLE_DIRECTORY = "roguelike-topic-table";
const TYPES_ROOT = path.resolve(PACKAGE_ROOT, "src", "types");
const SCHEMAS_ROOT = path.resolve(PACKAGE_ROOT, "src", "schemas");
const TABLE_TYPES_ROOT = path.resolve(TYPES_ROOT, TABLE_DIRECTORY);
const TABLE_SCHEMAS_ROOT = path.resolve(SCHEMAS_ROOT, TABLE_DIRECTORY);

/** shared 目录中跨路径类型的稳定语义分组。 */
const SHARED_GROUPS: Readonly<Record<string, readonly string[]>> = {
  core: ["BgmSignal", "Id", "None", "Pos", "VariationClass"],
  buffs: [
    "Blackboard",
    "BuffDisplayInfo",
    "BuffElement",
    "CopperGildTypeDatum",
    "DevelopmentToken",
    "ErDatum",
    "Idea",
  ],
  "common-enums": [
    "Category",
    "DisplayForm",
    "EffectType",
    "HistoricalRecordsMode",
    "Mode",
    "NodeTypeElement",
    "ResultType",
    "ValidModeEnum",
  ],
  "item-enums": [
    "IconId",
    "ItemTypeEnum",
    "Profession",
    "Rarity",
    "RarityList",
    "RewardItemTypeEnum",
    "StyleId",
    "ZoneId",
  ],
  "rogue-enums": [
    "EnrollId",
    "GroupId",
    "LeftDisasterDesc",
    "LeftWrathDesc",
    "LuckyLevel",
    "Rogue2_Mutation1_BuffType",
    "Rogue6_ScrapM01_Enum",
  ],
  rewards: [
    "BuyConfirm",
    "BuyConfirmGroups",
    "FluffyBuySelect",
    "FluffyGroups",
    "Reward",
  ],
  "rogue-variants": [
    "Ro4FailEnding1",
    "Rogue2__Mutation4",
    "Rogue2_Mutation1_Class",
    "Rogue3__Difficulty1",
    "Rogue3__ExploreTool1",
  ],
};

/** archive-comp 大目录按原 JSON 子结构拆分，控制单模块规模。 */
const ARCHIVE_GROUPS: Readonly<Record<string, readonly string[]>> = {
  "archive-comp": ["ArchiveComp"],
  buff: ["ArchiveCompBuff", "BuffColor", "BuffValue"],
  capsule: ["ArchiveCompCapsule", "CapsuleValue"],
  chaos: ["ArchiveCompChaos", "Chao"],
  chat: ["ArchiveCompChat", "ChatItemList", "ChatValue"],
  copper: [
    "ArchiveCompCopper",
    "Blank",
    "CopperArchiveType",
    "CopperType",
    "CopperTypes",
    "CopperValue",
    "High",
    "LuckyLevels",
  ],
  endbook: ["ArchiveCompEndbook", "ClientEndbookItemData", "EndbookValue"],
  relic: ["ArchiveCompRelic", "RelicRelic", "Rogue1__ActiveTool"],
  trap: ["ArchiveCompTrap", "TrapTrap"],
  "module-archives": [
    "ArchiveCompDisaster",
    "ArchiveCompFragment",
    "ArchiveCompScrap",
    "ArchiveCompTotem",
    "ArchiveCompWeather",
    "ArchiveCompWrath",
    "DisasterValue",
    "FragmentValue",
    "ScrapValue",
    "TotemValue",
    "WeatherValue",
    "WrathValue",
  ],
};

/** 将系统路径转换为 import 与报告使用的正斜杠。 */
function toPosixPath(value: string): string {
  return value.replaceAll(path.sep, "/");
}

/** 递归列出目录中的全部文件。 */
function listFilesRecursively(directory: string): string[] {
  const result: string[] = [];
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const absolutePath = path.resolve(directory, entry.name);
    if (entry.isDirectory()) result.push(...listFilesRecursively(absolutePath));
    else if (entry.isFile()) result.push(absolutePath);
  }
  return result;
}

/** 创建 NodeNext 使用的相对 `.js` import 路径。 */
function createImportSpecifier(fromPath: string, toPath: string): string {
  const relativePath = toPosixPath(path.relative(path.dirname(fromPath), toPath))
    .replace(/\.ts$/, ".js");
  return relativePath.startsWith(".") ? relativePath : `./${relativePath}`;
}

/** 读取声明节点中引用的全部已知类型名。 */
function collectReferencedNames(
  node: ts.Node,
  knownNames: ReadonlySet<string>,
  ownName: string,
): Set<string> {
  const result = new Set<string>();
  /** 递归访问标识符并筛选已知定义。 */
  function visit(current: ts.Node): void {
    if (ts.isIdentifier(current)) {
      const name = current.text;
      if (name !== ownName && knownNames.has(name)) result.add(name);
    }
    ts.forEachChild(current, visit);
  }
  visit(node);
  return result;
}

/** 从一定义一文件布局读取所有显式类型并保留完整 JSDoc。 */
function readTypeDefinitions(): TypeDefinitionRecord[] {
  const files = listFilesRecursively(TABLE_TYPES_ROOT).filter(
    (filePath) => filePath.endsWith(".ts") && path.basename(filePath) !== "index.ts",
  );
  if (files.some((filePath) => filePath.endsWith(".types.ts"))) {
    throw new Error("检测到已聚合的 .types.ts，拒绝再次覆盖维护阶段源码。");
  }

  const preliminary = files.map((filePath) => {
    const source = fs.readFileSync(filePath, "utf8");
    const sourceFile = ts.createSourceFile(
      filePath,
      source,
      ts.ScriptTarget.ESNext,
      true,
      ts.ScriptKind.TS,
    );
    const definitions = sourceFile.statements.filter(
      (statement) =>
        ts.isInterfaceDeclaration(statement) || ts.isTypeAliasDeclaration(statement),
    );
    if (definitions.length !== 1) {
      throw new Error(`${filePath} 必须且只能包含一个初始类型定义。`);
    }
    const definition = definitions[0] as
      | ts.InterfaceDeclaration
      | ts.TypeAliasDeclaration;
    const relativePath = path.relative(TABLE_TYPES_ROOT, filePath);
    return {
      definition,
      directory: toPosixPath(path.dirname(relativePath)).replace(/^\.$/, ""),
      filePath,
      name: definition.name.text,
      sourceFile,
      sourceText: definition.getFullText(sourceFile).trim(),
    };
  });
  const knownNames = new Set(preliminary.map((record) => record.name));

  return preliminary.map((record) => {
    return {
      dependencies: collectReferencedNames(
        record.definition,
        knownNames,
        record.name,
      ),
      directory: record.directory,
      name: record.name,
      sourceText: record.sourceText,
    };
  });
}

/** 从一定义一文件布局读取全部 Schema，并保留字段注释和 `.describe()`。 */
function readSchemaDefinitions(
  typeNames: ReadonlySet<string>,
): SchemaDefinitionRecord[] {
  const files = listFilesRecursively(TABLE_SCHEMAS_ROOT).filter(
    (filePath) =>
      filePath.endsWith(".schema.ts") && path.basename(filePath) !== "index.ts",
  );
  const preliminary = files.map((filePath) => {
    const source = fs.readFileSync(filePath, "utf8");
    const sourceFile = ts.createSourceFile(
      filePath,
      source,
      ts.ScriptTarget.ESNext,
      true,
      ts.ScriptKind.TS,
    );
    const declarations = sourceFile.statements.filter(ts.isVariableStatement);
    if (declarations.length !== 1) {
      throw new Error(`${filePath} 必须且只能包含一个初始 Schema 定义。`);
    }
    const declaration = declarations[0];
    const variable = declaration.declarationList.declarations[0];
    if (!variable || !ts.isIdentifier(variable.name)) {
      throw new Error(`${filePath} 缺少具名 Schema 变量。`);
    }
    return {
      declaration,
      name: variable.name.text,
      sourceFile,
      sourceText: declaration.getFullText(sourceFile).trim(),
      typeName: variable.name.text.replace(/Schema$/, ""),
    };
  });
  const schemaNames = new Set(preliminary.map((record) => record.name));

  return preliminary.map((record) => {
    if (!typeNames.has(record.typeName)) {
      throw new Error(`${record.name} 找不到对应显式类型 ${record.typeName}。`);
    }
    return {
      dependencies: collectReferencedNames(
        record.declaration,
        schemaNames,
        record.name,
      ),
      name: record.name,
      sourceText: record.sourceText,
      typeName: record.typeName,
    };
  });
}

/** 根据特殊目录配置或目录名决定定义所属模块。 */
function resolveModuleName(directory: string, typeName: string): string {
  const specialGroups =
    directory === "shared"
      ? SHARED_GROUPS
      : directory === "details/archive-comp"
        ? ARCHIVE_GROUPS
        : null;
  if (specialGroups) {
    const match = Object.entries(specialGroups).find(([, names]) =>
      names.includes(typeName),
    );
    if (!match) throw new Error(`${directory} 中的 ${typeName} 缺少语义分组。`);
    return match[0];
  }
  if (!directory) return TABLE_DIRECTORY;
  return path.posix.basename(directory);
}

/** 组装全部逻辑模块，并确保 Schema 与 Type 一一对应。 */
function createLogicalModules(
  typeDefinitions: TypeDefinitionRecord[],
  schemaDefinitions: SchemaDefinitionRecord[],
): LogicalModule[] {
  const modules = new Map<string, LogicalModule>();
  const moduleByType = new Map<string, LogicalModule>();

  for (const definition of typeDefinitions) {
    const moduleName = resolveModuleName(definition.directory, definition.name);
    const key = `${definition.directory}\u0000${moduleName}`;
    const module = modules.get(key) ?? {
      directory: definition.directory,
      name: moduleName,
      schemaDefinitions: [],
      typeDefinitions: [],
    };
    module.typeDefinitions.push(definition);
    modules.set(key, module);
    moduleByType.set(definition.name, module);
  }

  for (const schema of schemaDefinitions) {
    const module = moduleByType.get(schema.typeName);
    if (!module) throw new Error(`${schema.name} 找不到对应类型模块。`);
    module.schemaDefinitions.push(schema);
  }

  for (const module of modules.values()) {
    if (module.schemaDefinitions.length !== module.typeDefinitions.length) {
      throw new Error(`${module.directory}/${module.name} 的 Type 与 Schema 数量不一致。`);
    }
  }
  return [...modules.values()].sort((left, right) =>
    `${left.directory}/${left.name}`.localeCompare(`${right.directory}/${right.name}`),
  );
}

/** 获取模块的 types 文件绝对路径。 */
function resolveModuleTypePath(module: LogicalModule): string {
  return path.resolve(
    TABLE_TYPES_ROOT,
    module.directory,
    `${module.name}.types.ts`,
  );
}

/** 获取模块的 schemas 文件绝对路径。 */
function resolveModuleSchemaPath(module: LogicalModule): string {
  return path.resolve(
    TABLE_SCHEMAS_ROOT,
    module.directory,
    `${module.name}.schemas.ts`,
  );
}

/** 按目标模块聚合 import 名称。 */
function addImport(
  imports: Map<string, Set<string>>,
  targetPath: string,
  importedName: string,
): void {
  const names = imports.get(targetPath) ?? new Set<string>();
  names.add(importedName);
  imports.set(targetPath, names);
}

/** 渲染聚合后的 TypeScript 类型模块。 */
function renderTypeModule(
  module: LogicalModule,
  moduleByType: ReadonlyMap<string, LogicalModule>,
): string {
  const currentPath = resolveModuleTypePath(module);
  const ownNames = new Set(module.typeDefinitions.map((definition) => definition.name));
  const imports = new Map<string, Set<string>>();
  for (const definition of module.typeDefinitions) {
    for (const dependency of definition.dependencies) {
      if (ownNames.has(dependency)) continue;
      const dependencyModule = moduleByType.get(dependency);
      if (!dependencyModule) throw new Error(`找不到类型依赖 ${dependency}。`);
      addImport(imports, resolveModuleTypePath(dependencyModule), dependency);
    }
  }
  const header = [
    "/**",
    ` * JSON 逻辑模块 \`${module.directory || TABLE_DIRECTORY}/${module.name}\` 的显式类型。`,
    " */",
  ].join("\n");
  const importLines: string[] = [];
  for (const [targetPath, names] of [...imports.entries()].sort()) {
    importLines.push(
      `import type { ${[...names].sort().join(", ")} } from "${createImportSpecifier(currentPath, targetPath)}";`,
    );
  }
  const definitions = module.typeDefinitions
      .sort((left, right) => left.name.localeCompare(right.name))
      .map((definition) => definition.sourceText)
      .join("\n\n");
  return `${[header, importLines.join("\n"), definitions].filter(Boolean).join("\n\n")}\n`;
}

/** 对模块内 Schema 做依赖优先排序，避免初始化时访问尚未声明的 const。 */
function sortSchemasByDependency(module: LogicalModule): SchemaDefinitionRecord[] {
  const byName = new Map(
    module.schemaDefinitions.map((definition) => [definition.name, definition]),
  );
  const result: SchemaDefinitionRecord[] = [];
  const pending = new Set(byName.keys());

  while (pending.size > 0) {
    const ready = [...pending]
      .filter((name) => {
        const definition = byName.get(name);
        if (!definition) return false;
        return [...definition.dependencies]
          .filter((dependency) => byName.has(dependency))
          .every((dependency) => !pending.has(dependency));
      })
      .sort();
    if (ready.length === 0) {
      throw new Error(`${module.directory}/${module.name} 存在无法直接聚合的 Schema 循环依赖。`);
    }
    for (const name of ready) {
      const definition = byName.get(name);
      if (definition) result.push(definition);
      pending.delete(name);
    }
  }
  return result;
}

/** 渲染聚合后的 Zod Schema 模块。 */
function renderSchemaModule(
  module: LogicalModule,
  moduleByType: ReadonlyMap<string, LogicalModule>,
  moduleBySchema: ReadonlyMap<string, LogicalModule>,
): string {
  const currentPath = resolveModuleSchemaPath(module);
  const ownSchemaNames = new Set(
    module.schemaDefinitions.map((definition) => definition.name),
  );
  const typeImports = new Map<string, Set<string>>();
  const schemaImports = new Map<string, Set<string>>();

  for (const definition of module.schemaDefinitions) {
    const typeModule = moduleByType.get(definition.typeName);
    if (!typeModule) throw new Error(`找不到 ${definition.typeName} 的类型模块。`);
    addImport(typeImports, resolveModuleTypePath(typeModule), definition.typeName);
    for (const dependency of definition.dependencies) {
      if (ownSchemaNames.has(dependency)) continue;
      const dependencyModule = moduleBySchema.get(dependency);
      if (!dependencyModule) throw new Error(`找不到 Schema 依赖 ${dependency}。`);
      addImport(schemaImports, resolveModuleSchemaPath(dependencyModule), dependency);
    }
  }

  const header = [
    "/**",
    ` * JSON 逻辑模块 \`${module.directory || TABLE_DIRECTORY}/${module.name}\` 的 Zod Schema。`,
    " */",
  ].join("\n");
  const importLines = ['import { z } from "zod";'];
  for (const [targetPath, names] of [...typeImports.entries()].sort()) {
    importLines.push(
      `import type { ${[...names].sort().join(", ")} } from "${createImportSpecifier(currentPath, targetPath)}";`,
    );
  }
  for (const [targetPath, names] of [...schemaImports.entries()].sort()) {
    importLines.push(
      `import { ${[...names].sort().join(", ")} } from "${createImportSpecifier(currentPath, targetPath)}";`,
    );
  }
  const definitions = sortSchemasByDependency(module)
    .map((definition) => definition.sourceText)
    .join("\n\n");
  return `${[header, importLines.join("\n"), definitions].join("\n\n")}\n`;
}

/** 渲染包级唯一公共出口，避免为每个小目录生成 index.ts。 */
function renderRootBarrel(modules: LogicalModule[], schema: boolean): string {
  const root = schema ? SCHEMAS_ROOT : TYPES_ROOT;
  const indexPath = path.resolve(root, "index.ts");
  const lines = [
    "/**",
    ` * 统一导出 roguelike_topic_table 的全部${schema ? " Zod Schema" : "显式类型"}模块。`,
    " */",
  ];
  for (const module of modules) {
    const targetPath = schema
      ? resolveModuleSchemaPath(module)
      : resolveModuleTypePath(module);
    lines.push(`export * from "${createImportSpecifier(indexPath, targetPath)}";`);
  }
  lines.push("");
  return lines.join("\n");
}

/** 确认递归清理目标严格位于当前包的指定表目录。 */
function assertTableDirectory(directory: string, expectedParent: string): void {
  const resolved = path.resolve(directory);
  if (
    path.dirname(resolved) !== path.resolve(expectedParent) ||
    path.basename(resolved) !== TABLE_DIRECTORY
  ) {
    throw new Error(`拒绝清理非目标表目录：${directory}`);
  }
}

/** 在内存完成全部迁移后，替换 Type/Schema 表目录并更新公共出口。 */
function writeOutputs(outputs: OutputFile[]): void {
  assertTableDirectory(TABLE_TYPES_ROOT, TYPES_ROOT);
  assertTableDirectory(TABLE_SCHEMAS_ROOT, SCHEMAS_ROOT);
  for (const directory of [TABLE_TYPES_ROOT, TABLE_SCHEMAS_ROOT]) {
    fs.rmSync(directory, { force: true, recursive: true });
  }
  for (const output of outputs) {
    fs.mkdirSync(path.dirname(output.absolutePath), { recursive: true });
    fs.writeFileSync(output.absolutePath, output.content, "utf8");
  }
}

/** 执行一次性 Bootstrap 布局聚合。 */
export function consolidateRoguelikeModules(): void {
  const typeDefinitions = readTypeDefinitions();
  const typeNames = new Set(typeDefinitions.map((definition) => definition.name));
  const schemaDefinitions = readSchemaDefinitions(typeNames);
  const modules = createLogicalModules(typeDefinitions, schemaDefinitions);
  const moduleByType = new Map<string, LogicalModule>();
  const moduleBySchema = new Map<string, LogicalModule>();
  for (const module of modules) {
    for (const definition of module.typeDefinitions) {
      moduleByType.set(definition.name, module);
    }
    for (const definition of module.schemaDefinitions) {
      moduleBySchema.set(definition.name, module);
    }
  }

  const outputs: OutputFile[] = [];
  for (const module of modules) {
    outputs.push(
      {
        absolutePath: resolveModuleTypePath(module),
        content: renderTypeModule(module, moduleByType),
      },
      {
        absolutePath: resolveModuleSchemaPath(module),
        content: renderSchemaModule(module, moduleByType, moduleBySchema),
      },
    );
  }
  outputs.push(
    {
      absolutePath: path.resolve(TYPES_ROOT, "index.ts"),
      content: renderRootBarrel(modules, false),
    },
    {
      absolutePath: path.resolve(SCHEMAS_ROOT, "index.ts"),
      content: renderRootBarrel(modules, true),
    },
  );
  writeOutputs(outputs);
  console.log(
    `已将 ${typeDefinitions.length} 个定义聚合为 ${modules.length} 个 Type 与 Schema 模块。`,
  );
}

/** 直接执行脚本时启动迁移；被 Bootstrap 生成器导入时由调用方执行。 */
if (process.argv[1] && path.resolve(process.argv[1]) === path.resolve(CURRENT_FILE)) {
  consolidateRoguelikeModules();
}
