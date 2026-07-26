/**
 * 首次根据完整 buff_template_data.json 生成严格类型与 Zod Schema。
 *
 * 该表由动态模板 ID 字典和递归 CLR Action 节点组成。生成器按 `$type` 聚合全部
 * Action 样本，以严格对象保留每个分支的字段边界，并用分层联合控制 TypeScript
 * 与 Zod 的单模块规模。生成完成后源码进入人工维护阶段，本工具不得再次覆盖。
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

/** JSON 可表示的完整值集合。 */
type JsonValue = null | boolean | number | string | JsonValue[] | JsonObject;

/** JSON 对象的显式递归表示。 */
interface JsonObject {
  [key: string]: JsonValue;
}

/** 推断后可直接渲染为 TypeScript 与 Zod 的结构节点。 */
type Shape =
  | { kind: "action" }
  | { kind: "array"; element: Shape }
  | { kind: "boolean" }
  | { kind: "never" }
  | { kind: "null" }
  | { kind: "number" }
  | { kind: "object"; properties: PropertyShape[] }
  | { kind: "string"; values: string[] | null }
  | { kind: "union"; variants: Shape[] };

/** 严格对象中的一个字段及其出现情况。 */
interface PropertyShape {
  description: string;
  name: string;
  optional: boolean;
  shape: Shape;
}

/** 一个 `$type` 判别值对应的全部真实 Action 样本。 */
interface ActionDefinition {
  clrType: string;
  name: string;
  properties: PropertyShape[];
}

/** 每个动作模块最多容纳十个具体动作，再附加一个局部联合。 */
interface ActionModule {
  definitions: ActionDefinition[];
  directory: string;
  groupName: string;
  letter: string;
  stem: string;
}

/** 等待写入的单个 Bootstrap 产物。 */
interface Artifact {
  absolutePath: string;
  content: string;
}

/** 生成结果摘要，供入口命令和交付报告使用。 */
export interface BuffTemplateBootstrapStatistics {
  actionTypes: number;
  artifacts: number;
  events: number;
  templates: number;
}

/** 当前包、仓库与目标表的稳定路径。 */
const CURRENT_FILE = fileURLToPath(import.meta.url);
const PACKAGE_ROOT = path.resolve(path.dirname(CURRENT_FILE), "../..");
const MONOREPO_ROOT = path.resolve(PACKAGE_ROOT, "../..");
const TABLE_DIRECTORY = "buff-template-data";
const TABLE_RELATIVE_PATH = path.join(
  "zh_CN",
  "gamedata",
  "battle",
  "buff_template_data.json",
);
const TYPES_ROOT = path.resolve(PACKAGE_ROOT, "src", "types");
const SCHEMAS_ROOT = path.resolve(PACKAGE_ROOT, "src", "schemas");
const TABLE_TYPES_ROOT = path.resolve(TYPES_ROOT, TABLE_DIRECTORY);
const TABLE_SCHEMAS_ROOT = path.resolve(SCHEMAS_ROOT, TABLE_DIRECTORY);
const EXPORT_START = "/** BUFF_TEMPLATE_DATA_EXPORTS:START */";
const EXPORT_END = "/** BUFF_TEMPLATE_DATA_EXPORTS:END */";

/** 已确认具有稳定枚举语义的字段名后缀。 */
const ENUM_FIELD_PATTERN =
  /(?:type|mask|owner|side|mode|formula|reason|priority|category|flag|motion|way|channel|operator|compare|timing|profession|phase|target|source|lifeType|statusResistable)$/i;

/** 少量高价值字段的人工语义；其余字段明确标记待确认。 */
const FIELD_DESCRIPTIONS: Readonly<Record<string, string>> = {
  $type: "CLR Action 组件的完整类型名，也是递归动作联合的判别字段。",
  _action: "当前节点执行的嵌套 Action；准确触发顺序待确认。",
  _actions: "当前节点执行的嵌套 Action 列表；准确触发顺序待确认。",
  _attributeType: "属性修改器指向的战斗属性。",
  _blackboardKey: "读取或写入战斗黑板的参数键。",
  _buff: "由当前 Action 创建、附加或检查的内嵌 Buff 配置。",
  _buffOwner: "Buff 的接收实体类型。",
  _conditionNode: "决定分支是否成立的条件 Action 节点。",
  _damageType: "本次伤害使用的伤害类型。",
  _failNodes: "条件不成立时依次执行的 Action 节点。",
  _sourceType: "Action 读取的来源实体类型。",
  _succeedNodes: "条件成立时依次执行的 Action 节点。",
  _targetType: "Action 作用的目标实体类型。",
  attributeType: "属性修改器指向的战斗属性。",
  effectKey: "模板关联的视觉或逻辑效果标识；空字符串表示未配置。",
  eventToActions: "按战斗事件保存的 Action 列表；没有监听的事件字段会缺失。",
  formulaItem: "属性修改器使用的计算方式，例如加算或乘算。",
  key: "黑板参数键或当前配置项的稳定键。",
  onEventPriority: "模板处理战斗事件时使用的优先级。",
  templateKey: "战斗模板唯一标识，应与外层动态字典键一致。",
  value: "黑板参数的数值槽。",
  valueStr: "黑板参数的字符串槽；`null` 表示该参数使用数值槽。",
};

/** 把系统路径统一为源码 import 使用的正斜杠。 */
function toPosixPath(value: string): string {
  return value.replaceAll(path.sep, "/");
}

/** 为 NodeNext 源码生成带 `.js` 后缀的相对 import。 */
function createImportSpecifier(fromPath: string, toPath: string): string {
  const relative = toPosixPath(path.relative(path.dirname(fromPath), toPath))
    .replace(/\.types\.ts$/, ".types.js")
    .replace(/\.schemas\.ts$/, ".schemas.js")
    .replace(/\.ts$/, ".js");
  return relative.startsWith(".") ? relative : `./${relative}`;
}

/** 判断 JSON 值是否为普通对象。 */
function isJsonObject(value: JsonValue): value is JsonObject {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

/** 判断对象是否为带 CLR `$type` 判别值的 Action 节点。 */
function isActionObject(value: JsonValue): value is JsonObject & { $type: string } {
  return isJsonObject(value) && typeof value.$type === "string";
}

/** 从完整 CLR 名称读取稳定且合法的 Action 类型短名。 */
function actionShortName(clrType: string): string {
  const withoutAssembly = clrType.split(",")[0] ?? clrType;
  const shortName = withoutAssembly.split("+").at(-1) ?? withoutAssembly;
  if (!/^[A-Za-z_$][A-Za-z0-9_$]*$/.test(shortName)) {
    throw new Error(`无法把 CLR Action 类型转换为 TypeScript 标识符：${clrType}`);
  }
  return `${shortName}Action`;
}

/** 根据字段名输出中文语义，无法确认时保留明确的待确认标记。 */
function describeField(fieldName: string, ownerName: string): string {
  const known = FIELD_DESCRIPTIONS[fieldName];
  if (known) return known;
  const displayName = fieldName.startsWith("_") ? fieldName.slice(1) : fieldName;
  return `${ownerName} 的 \`${displayName}\` 配置字段；准确战斗语义待确认。`;
}

/** 判断字符串集合是否应建模为有限枚举，而不是开放 ID 或资源名。 */
function shouldUseStringLiterals(fieldName: string, values: string[]): boolean {
  const distinct = new Set(values);
  return distinct.size > 0 && distinct.size <= 64 && ENUM_FIELD_PATTERN.test(fieldName);
}

/** 给联合分支生成稳定键，消除 null 等重复分支。 */
function shapeKey(shape: Shape): string {
  switch (shape.kind) {
    case "action":
    case "boolean":
    case "never":
    case "null":
    case "number":
      return shape.kind;
    case "string":
      return shape.values ? `string:${shape.values.join("\u0000")}` : "string";
    case "array":
      return `array:${shapeKey(shape.element)}`;
    case "object":
      return `object:${shape.properties
        .map((property) => `${property.name}:${property.optional}:${shapeKey(property.shape)}`)
        .join("|")}`;
    case "union":
      return `union:${shape.variants.map(shapeKey).join("|")}`;
  }
}

/** 合并并扁平化联合类型，保证输出顺序稳定。 */
function unionShape(variants: Shape[]): Shape {
  const flattened = variants.flatMap((variant) =>
    variant.kind === "union" ? variant.variants : [variant],
  );
  const unique = new Map(flattened.map((variant) => [shapeKey(variant), variant]));
  const values = [...unique.values()];
  return values.length === 1 ? values[0] : { kind: "union", variants: values };
}

/** 从同一逻辑字段的全部真实值推断严格结构。 */
function inferShape(values: JsonValue[], fieldName: string, ownerName: string): Shape {
  const variants: Shape[] = [];
  const nullValues = values.filter((value) => value === null);
  if (nullValues.length > 0) variants.push({ kind: "null" });

  const booleans = values.filter((value): value is boolean => typeof value === "boolean");
  if (booleans.length > 0) variants.push({ kind: "boolean" });

  const numbers = values.filter((value): value is number => typeof value === "number");
  if (numbers.length > 0) variants.push({ kind: "number" });

  const strings = values.filter((value): value is string => typeof value === "string");
  if (strings.length > 0) {
    const distinct = [...new Set(strings)].sort();
    variants.push({
      kind: "string",
      values: shouldUseStringLiterals(fieldName, strings) ? distinct : null,
    });
  }

  const arrays = values.filter((value): value is JsonValue[] => Array.isArray(value));
  if (arrays.length > 0) {
    const elements = arrays.flat();
    variants.push({
      kind: "array",
      element:
        elements.length === 0
          ? { kind: "never" }
          : inferShape(elements, fieldName, ownerName),
    });
  }

  const objects = values.filter(isJsonObject);
  const actions = objects.filter(isActionObject);
  if (actions.length > 0) variants.push({ kind: "action" });
  const plainObjects = objects.filter((value) => !isActionObject(value));
  if (plainObjects.length > 0) {
    const keys = [...new Set(plainObjects.flatMap((value) => Object.keys(value)))].sort();
    const properties = keys.map((key): PropertyShape => {
      const presentValues = plainObjects
        .filter((value) => Object.hasOwn(value, key))
        .map((value) => value[key] as JsonValue);
      return {
        description: describeField(key, ownerName),
        name: key,
        optional: presentValues.length < plainObjects.length,
        shape: inferShape(presentValues, key, ownerName),
      };
    });
    variants.push({ kind: "object", properties });
  }

  if (variants.length === 0) {
    throw new Error(`${ownerName}.${fieldName} 没有可推断的真实值。`);
  }
  return unionShape(variants);
}

/** 递归收集整张表中所有 `$type` Action 样本。 */
function collectActionSamples(root: JsonValue): Map<string, JsonObject[]> {
  const result = new Map<string, JsonObject[]>();
  /** 深度优先遍历所有数组和对象。 */
  function visit(value: JsonValue): void {
    if (Array.isArray(value)) {
      value.forEach(visit);
      return;
    }
    if (!isJsonObject(value)) return;
    if (isActionObject(value)) {
      const samples = result.get(value.$type) ?? [];
      samples.push(value);
      result.set(value.$type, samples);
    }
    Object.values(value).forEach(visit);
  }
  visit(root);
  return result;
}

/** 将 Action 样本聚合为按 `$type` 判别的严格接口定义。 */
function createActionDefinitions(table: JsonObject): ActionDefinition[] {
  return [...collectActionSamples(table).entries()]
    .map(([clrType, samples]): ActionDefinition => {
      const name = actionShortName(clrType);
      const keys = [...new Set(samples.flatMap((sample) => Object.keys(sample)))].sort(
        (left, right) => (left === "$type" ? -1 : right === "$type" ? 1 : left.localeCompare(right)),
      );
      const properties = keys.map((key): PropertyShape => {
        const presentValues = samples
          .filter((sample) => Object.hasOwn(sample, key))
          .map((sample) => sample[key] as JsonValue);
        const shape =
          key === "$type"
            ? { kind: "string", values: [clrType] } satisfies Shape
            : inferShape(presentValues, key, name);
        return {
          description: describeField(key, name),
          name: key,
          optional: presentValues.length < samples.length,
          shape,
        };
      });
      return { clrType, name, properties };
    })
    .sort((left, right) => left.name.localeCompare(right.name));
}

/** 按类型首字母和十个定义一组创建可维护模块。 */
function createActionModules(definitions: ActionDefinition[]): ActionModule[] {
  const byLetter = new Map<string, ActionDefinition[]>();
  for (const definition of definitions) {
    const letter = definition.name[0]?.toUpperCase() ?? "OTHER";
    const values = byLetter.get(letter) ?? [];
    values.push(definition);
    byLetter.set(letter, values);
  }
  const modules: ActionModule[] = [];
  for (const [letter, values] of [...byLetter.entries()].sort()) {
    for (let offset = 0; offset < values.length; offset += 10) {
      const index = Math.floor(offset / 10) + 1;
      const suffix = String(index).padStart(2, "0");
      modules.push({
        definitions: values.slice(offset, offset + 10),
        directory: `${TABLE_DIRECTORY}/actions/${letter.toLowerCase()}`,
        groupName: `BattleAction${letter}${suffix}`,
        letter,
        stem: `actions-${letter.toLowerCase()}-${suffix}`,
      });
    }
  }
  return modules;
}

/** 缩进多行表达式，但保留第一行供调用方拼接。 */
function indentContinuation(value: string, spaces: number): string {
  const padding = " ".repeat(spaces);
  return value.replaceAll("\n", `\n${padding}`);
}

/** 把 Shape 渲染为显式 TypeScript 类型。 */
function renderTypeShape(shape: Shape, depth = 0): string {
  const padding = "  ".repeat(depth);
  const childPadding = "  ".repeat(depth + 1);
  switch (shape.kind) {
    case "action":
      return "BattleAction";
    case "boolean":
      return "boolean";
    case "never":
      return "never";
    case "null":
      return "null";
    case "number":
      return "number";
    case "string":
      return shape.values
        ? shape.values.map((value) => JSON.stringify(value)).join(" | ")
        : "string";
    case "array":
      return shape.element.kind === "never"
        ? "never[]"
        : `Array<${renderTypeShape(shape.element, depth)}>`;
    case "union":
      return shape.variants.map((variant) => renderTypeShape(variant, depth)).join(" | ");
    case "object": {
      if (shape.properties.length === 0) return "Record<string, never>";
      const fields = shape.properties.flatMap((property) => [
        `${childPadding}/** ${property.description} */`,
        `${childPadding}${JSON.stringify(property.name)}${property.optional ? "?" : ""}: ${indentContinuation(renderTypeShape(property.shape, depth + 1), childPadding.length + JSON.stringify(property.name).length + 3)};`,
      ]);
      return `{\n${fields.join("\n")}\n${padding}}`;
    }
  }
}

/** 把 Shape 渲染为严格 Zod 表达式，并为所有嵌套字段附加描述。 */
function renderSchemaShape(shape: Shape, ownerName: string, depth = 0): string {
  const padding = "  ".repeat(depth);
  const childPadding = "  ".repeat(depth + 1);
  switch (shape.kind) {
    case "action":
      return "BattleActionReferenceSchema";
    case "boolean":
      return "z.boolean()";
    case "never":
      return "z.never()";
    case "null":
      return "z.null()";
    case "number":
      return "z.number()";
    case "string":
      if (!shape.values) return "z.string()";
      return shape.values.length === 1
        ? `z.literal(${JSON.stringify(shape.values[0])})`
        : `z.enum(${JSON.stringify(shape.values)})`;
    case "array":
      return `z.array(${renderSchemaShape(shape.element, ownerName, depth)})`;
    case "union": {
      const variants = shape.variants.map(
        (variant) => `${childPadding}${indentContinuation(renderSchemaShape(variant, ownerName, depth + 1), childPadding.length)},`,
      );
      return `z.union([\n${variants.join("\n")}\n${padding}])`;
    }
    case "object": {
      if (shape.properties.length === 0) return "z.strictObject({})";
      const fields = shape.properties.map((property) => {
        const expression = renderSchemaShape(property.shape, ownerName, depth + 1);
        const optional = property.optional ? ".optional()" : "";
        return `${childPadding}/** ${property.description} */\n${childPadding}${JSON.stringify(property.name)}: ${indentContinuation(expression, childPadding.length + JSON.stringify(property.name).length + 2)}${optional}.describe(${JSON.stringify(property.description)}),`;
      });
      return `z.strictObject({\n${fields.join("\n")}\n${padding}})`;
    }
  }
}

/** 渲染一个动作分支接口。 */
function renderActionInterface(definition: ActionDefinition): string {
  const lines = [
    "/**",
    ` * CLR 组件 \`${definition.clrType}\` 的严格 Action 数据。`,
    " *",
    " * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。",
    " */",
    `export interface ${definition.name} {`,
  ];
  for (const property of definition.properties) {
    lines.push(
      `  /** ${property.description} */`,
      `  ${JSON.stringify(property.name)}${property.optional ? "?" : ""}: ${indentContinuation(renderTypeShape(property.shape, 1), 2 + JSON.stringify(property.name).length + 3)};`,
    );
  }
  lines.push("}");
  return lines.join("\n");
}

/** 渲染一个动作分支的严格 Zod Schema。 */
function renderActionSchema(definition: ActionDefinition): string {
  const description = `CLR 组件 ${definition.clrType} 的严格 Action 数据。`;
  const lines = [
    "/**",
    ` * ${description}`,
    " */",
    `export const ${definition.name}Schema = z`,
    "  .strictObject({",
  ];
  for (const property of definition.properties) {
    const expression = renderSchemaShape(property.shape, definition.name, 2);
    const optional = property.optional ? ".optional()" : "";
    lines.push(
      `    /** ${property.description} */`,
      `    ${JSON.stringify(property.name)}: ${indentContinuation(expression, 4 + JSON.stringify(property.name).length + 2)}${optional}.describe(${JSON.stringify(property.description)}),`,
    );
  }
  lines.push(
    "  })",
    `  .describe(${JSON.stringify(description)}) satisfies z.ZodType<${definition.name}>;`,
  );
  return lines.join("\n");
}

/** 解析动作模块的 TypeScript 文件路径。 */
function actionModuleTypePath(module: ActionModule): string {
  return path.resolve(TYPES_ROOT, module.directory, `${module.stem}.types.ts`);
}

/** 解析动作模块的 Zod 文件路径。 */
function actionModuleSchemaPath(module: ActionModule): string {
  return path.resolve(SCHEMAS_ROOT, module.directory, `${module.stem}.schemas.ts`);
}

/** 渲染十个以内动作分支及局部判别联合的类型模块。 */
function renderActionTypeModule(module: ActionModule): string {
  const currentPath = actionModuleTypePath(module);
  const battleActionPath = path.resolve(TABLE_TYPES_ROOT, "battle-action.types.ts");
  const definitions = module.definitions.map(renderActionInterface).join("\n\n");
  const members = module.definitions.map((definition) => definition.name).join(" | ");
  return `/**
 * buff_template_data 的 ${module.letter} 组 Action 显式类型。
 */

import type { BattleAction } from "${createImportSpecifier(currentPath, battleActionPath)}";

${definitions}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type ${module.groupName} = ${members};
`;
}

/** 渲染十个以内动作分支及局部判别联合的 Schema 模块。 */
function renderActionSchemaModule(module: ActionModule): string {
  const currentPath = actionModuleSchemaPath(module);
  const typePath = actionModuleTypePath(module);
  const battleActionPath = path.resolve(
    TABLE_SCHEMAS_ROOT,
    "battle-action-reference.schemas.ts",
  );
  const typeNames = [
    ...module.definitions.map((definition) => definition.name),
    module.groupName,
  ].join(", ");
  const definitions = module.definitions.map(renderActionSchema).join("\n\n");
  const members = module.definitions
    .map((definition) => `${definition.name}Schema`)
    .join(", ");
  return `/**
 * buff_template_data 的 ${module.letter} 组 Action Zod Schema。
 */

import { z } from "zod";

import type { ${typeNames} } from "${createImportSpecifier(currentPath, typePath)}";
import { BattleActionReferenceSchema } from "${createImportSpecifier(currentPath, battleActionPath)}";

${definitions}

/** 本模块 Action 分支的局部判别联合。 */
export const ${module.groupName}Schema = z
  .discriminatedUnion("$type", [${members}])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<${module.groupName}>;
`;
}

/** 按首字母渲染动作组聚合类型与 Schema。 */
function createLetterArtifacts(modules: ActionModule[]): Artifact[] {
  const artifacts: Artifact[] = [];
  const byLetter = new Map<string, ActionModule[]>();
  for (const module of modules) {
    const values = byLetter.get(module.letter) ?? [];
    values.push(module);
    byLetter.set(module.letter, values);
  }
  for (const [letter, values] of [...byLetter.entries()].sort()) {
    const directory = `${TABLE_DIRECTORY}/actions/${letter.toLowerCase()}`;
    const stem = `battle-action-${letter.toLowerCase()}`;
    const typePath = path.resolve(TYPES_ROOT, directory, `${stem}.types.ts`);
    const schemaPath = path.resolve(SCHEMAS_ROOT, directory, `${stem}.schemas.ts`);
    const typeName = `BattleAction${letter}`;
    const typeImports = values.map(
      (module) =>
        `import type { ${module.groupName} } from "${createImportSpecifier(typePath, actionModuleTypePath(module))}";`,
    );
    const schemaImports = values.map(
      (module) =>
        `import { ${module.groupName}Schema } from "${createImportSpecifier(schemaPath, actionModuleSchemaPath(module))}";`,
    );
    artifacts.push(
      {
        absolutePath: typePath,
        content: `/** ${letter} 首字母 Action 分支的分层聚合类型。 */\n\n${typeImports.join("\n")}\n\n/** ${letter} 首字母 Action 的完整联合。 */\nexport type ${typeName} = ${values.map((module) => module.groupName).join(" | ")};\n`,
      },
      {
        absolutePath: schemaPath,
        content: `/** ${letter} 首字母 Action 分支的分层聚合 Schema。 */\n\nimport { z } from "zod";\n\nimport type { ${typeName} } from "${createImportSpecifier(schemaPath, typePath)}";\n${schemaImports.join("\n")}\n\n/** ${letter} 首字母 Action 的完整联合。 */\nexport const ${typeName}Schema = z\n  .union([${values.map((module) => `${module.groupName}Schema`).join(", ")}])\n  .describe("buff_template_data 中以 ${letter} 开头的 CLR Action 联合。") satisfies z.ZodType<${typeName}>;\n`,
      },
    );
  }
  return artifacts;
}

/** 创建完整递归 BattleAction 联合模块。 */
function createBattleActionArtifacts(modules: ActionModule[]): Artifact[] {
  const letters = [...new Set(modules.map((module) => module.letter))].sort();
  const typePath = path.resolve(TABLE_TYPES_ROOT, "battle-action.types.ts");
  const schemaPath = path.resolve(TABLE_SCHEMAS_ROOT, "battle-action.schemas.ts");
  const referenceSchemaPath = path.resolve(
    TABLE_SCHEMAS_ROOT,
    "battle-action-reference.schemas.ts",
  );
  const typeImports = letters.map((letter) => {
    const target = path.resolve(
      TABLE_TYPES_ROOT,
      "actions",
      letter.toLowerCase(),
      `battle-action-${letter.toLowerCase()}.types.ts`,
    );
    return `import type { BattleAction${letter} } from "${createImportSpecifier(typePath, target)}";`;
  });
  const schemaImports = letters.map((letter) => {
    const target = path.resolve(
      TABLE_SCHEMAS_ROOT,
      "actions",
      letter.toLowerCase(),
      `battle-action-${letter.toLowerCase()}.schemas.ts`,
    );
    return `import { BattleAction${letter}Schema } from "${createImportSpecifier(schemaPath, target)}";`;
  });
  return [
    {
      absolutePath: typePath,
      content: `/** buff_template_data 中全部递归 CLR Action 的显式联合类型。 */\n\n${typeImports.join("\n")}\n\n/** 全部已观测 CLR \`$type\` 分支的递归联合。 */\nexport type BattleAction = ${letters.map((letter) => `BattleAction${letter}`).join(" | ")};\n`,
    },
    {
      absolutePath: schemaPath,
      content: `/** buff_template_data 中全部递归 CLR Action 的 Zod Schema。 */\n\nimport { z } from "zod";\n\nimport type { BattleAction } from "${createImportSpecifier(schemaPath, typePath)}";\nimport { registerBattleActionSchema } from "${createImportSpecifier(schemaPath, referenceSchemaPath)}";\n${schemaImports.join("\n")}\n\n/** 全部已观测 CLR \`$type\` 分支的递归运行时联合。 */\nexport const BattleActionSchema = z\n  .union([${letters.map((letter) => `BattleAction${letter}Schema`).join(", ")}])\n  .describe("buff_template_data 中全部已观测 CLR $type 分支的递归 Action 联合。") satisfies z.ZodType<BattleAction>;\n\n// 所有具体 Action 模块通过独立惰性引用访问根联合，避免 ESM 循环初始化。\nregisterBattleActionSchema(BattleActionSchema);\n`,
    },
    {
      absolutePath: referenceSchemaPath,
      content: `/** 隔离具体 Action Schema 与根联合之间 ESM 循环依赖的惰性引用。 */\n\nimport { z } from "zod";\n\nimport type { BattleAction } from "${createImportSpecifier(referenceSchemaPath, typePath)}";\n\n/** 根 Action Schema 初始化后注册的稳定引用。 */\nlet registeredSchema: z.ZodType<BattleAction> | null = null;\n\n/** 由根联合模块在初始化完成后注册自身。 */\nexport function registerBattleActionSchema(schema: z.ZodType<BattleAction>): void {\n  registeredSchema = schema;\n}\n\n/** 具体 Action 分支中递归字段使用的惰性 Schema。 */\nexport const BattleActionReferenceSchema: z.ZodType<BattleAction> = z.lazy(() => {\n  if (!registeredSchema) {\n    throw new Error("BattleActionSchema 尚未完成初始化。");\n  }\n  return registeredSchema;\n});\n`,
    },
  ];
}

/** 从真实表提取固定事件和顶层有限字符串集合。 */
function collectCoreValues(table: JsonObject): {
  effectKeys: string[];
  eventAllowsNull: Readonly<Record<string, boolean>>;
  events: string[];
  priorities: string[];
} {
  const effectKeys = new Set<string>();
  const events = new Set<string>();
  const eventAllowsNull = new Map<string, boolean>();
  const priorities = new Set<string>();
  for (const template of Object.values(table)) {
    if (!isJsonObject(template)) throw new Error("模板字典值必须是对象。");
    if (typeof template.effectKey !== "string") throw new Error("effectKey 必须是字符串。");
    if (typeof template.onEventPriority !== "string") {
      throw new Error("onEventPriority 必须是字符串。");
    }
    if (!isJsonObject(template.eventToActions)) {
      throw new Error("eventToActions 必须是事件字典。");
    }
    effectKeys.add(template.effectKey);
    priorities.add(template.onEventPriority);
    for (const [event, rawActions] of Object.entries(template.eventToActions)) {
      if (!Array.isArray(rawActions)) {
        throw new Error(`事件 ${event} 的值必须是 Action 数组。`);
      }
      for (const action of rawActions) {
        if (action !== null && !isActionObject(action)) {
          throw new Error(`事件 ${event} 出现了非 Action、非 null 的元素。`);
        }
      }
      events.add(event);
      if (rawActions.some((action) => action === null)) eventAllowsNull.set(event, true);
    }
  }
  return {
    effectKeys: [...effectKeys].sort(),
    eventAllowsNull: Object.fromEntries(
      [...events].sort().map((event) => [event, eventAllowsNull.get(event) ?? false]),
    ),
    events: [...events].sort(),
    priorities: [...priorities].sort(),
  };
}

/** 创建顶层模板、事件字典和根动态记录的类型与 Schema。 */
function createCoreArtifacts(table: JsonObject): Artifact[] {
  const { effectKeys, eventAllowsNull, events, priorities } = collectCoreValues(table);
  const coreTypePath = path.resolve(TABLE_TYPES_ROOT, "core.types.ts");
  const coreSchemaPath = path.resolve(TABLE_SCHEMAS_ROOT, "core.schemas.ts");
  const actionTypePath = path.resolve(TABLE_TYPES_ROOT, "battle-action.types.ts");
  const actionSchemaPath = path.resolve(TABLE_SCHEMAS_ROOT, "battle-action.schemas.ts");
  const rootTypePath = path.resolve(TABLE_TYPES_ROOT, "buff-template-data.types.ts");
  const rootSchemaPath = path.resolve(TABLE_SCHEMAS_ROOT, "buff-template-data.schemas.ts");
  const eventUnion = events.map((value) => JSON.stringify(value)).join(" | ");
  const effectUnion = effectKeys.map((value) => JSON.stringify(value)).join(" | ");
  const priorityUnion = priorities.map((value) => JSON.stringify(value)).join(" | ");
  const eventTypeFields = events
    .map((event) => {
      const element = eventAllowsNull[event] ? "BattleAction | null" : "BattleAction";
      return `  /** 战斗事件 \`${event}\` 触发时依次执行的 Action。 */\n  ${JSON.stringify(event)}?: Array<${element}>;`;
    })
    .join("\n");
  const eventSchemaFields = events
    .map((event) => {
      const element = eventAllowsNull[event]
        ? "z.union([BattleActionSchema, z.null()])"
        : "BattleActionSchema";
      const description = `战斗事件 ${event} 触发时依次执行的 Action。`;
      return `  /** ${description} */\n  ${JSON.stringify(event)}: z.array(${element}).optional().describe(${JSON.stringify(description)}),`;
    })
    .join("\n");
  return [
    {
      absolutePath: coreTypePath,
      content: `/** buff_template_data 顶层模板与事件字典的显式类型。 */\n\nimport type { BattleAction } from "${createImportSpecifier(coreTypePath, actionTypePath)}";\n\n/** 当前数据中出现的战斗事件键。 */\nexport type BattleEvent = ${eventUnion};\n\n/** 模板关联的效果标识有限集合。 */\nexport type EffectKey = ${effectUnion};\n\n/** 战斗事件处理优先级。 */\nexport type OnEventPriority = ${priorityUnion};\n\n/** 按战斗事件保存递归 Action 列表的严格稀疏对象。 */\nexport interface EventToActions {\n${eventTypeFields}\n}\n\n/** 一个具名战斗模板及其事件 Action 配置。 */\nexport interface BuffTemplate {\n  /** 战斗模板唯一标识，应与外层动态字典键一致。 */\n  templateKey: string;\n  /** 模板关联的视觉或逻辑效果标识；空字符串表示未配置。 */\n  effectKey: EffectKey;\n  /** 模板处理战斗事件时使用的优先级。 */\n  onEventPriority: OnEventPriority;\n  /** 按战斗事件保存的 Action 列表；没有监听的事件字段会缺失。 */\n  eventToActions: EventToActions;\n}\n`,
    },
    {
      absolutePath: coreSchemaPath,
      content: `/** buff_template_data 顶层模板与事件字典的 Zod Schema。 */\n\nimport { z } from "zod";\n\nimport type { BattleEvent, BuffTemplate, EffectKey, EventToActions, OnEventPriority } from "${createImportSpecifier(coreSchemaPath, coreTypePath)}";\nimport { BattleActionSchema } from "${createImportSpecifier(coreSchemaPath, actionSchemaPath)}";\n\n/** 当前数据中出现的战斗事件键。 */\nexport const BattleEventSchema = z.enum(${JSON.stringify(events)}).describe("buff_template_data 当前已观测的战斗事件键。") satisfies z.ZodType<BattleEvent>;\n\n/** 模板关联的效果标识有限集合。 */\nexport const EffectKeySchema = z.enum(${JSON.stringify(effectKeys)}).describe("buff_template_data 模板关联的效果标识；空字符串表示未配置。") satisfies z.ZodType<EffectKey>;\n\n/** 战斗事件处理优先级。 */\nexport const OnEventPrioritySchema = z.enum(${JSON.stringify(priorities)}).describe("buff_template_data 的战斗事件处理优先级。") satisfies z.ZodType<OnEventPriority>;\n\n/** 按战斗事件保存递归 Action 列表的严格稀疏对象。 */\nexport const EventToActionsSchema: z.ZodType<EventToActions> = z.strictObject({\n${eventSchemaFields}\n}).describe("按已知战斗事件保存递归 Action 列表；未监听事件会缺失。");\n\n/** 一个具名战斗模板及其事件 Action 配置。 */\nexport const BuffTemplateSchema: z.ZodType<BuffTemplate> = z.strictObject({\n  /** 战斗模板唯一标识，应与外层动态字典键一致。 */\n  templateKey: z.string().describe("战斗模板唯一标识，应与外层动态字典键一致。"),\n  /** 模板关联的视觉或逻辑效果标识；空字符串表示未配置。 */\n  effectKey: EffectKeySchema.describe("模板关联的视觉或逻辑效果标识；空字符串表示未配置。"),\n  /** 模板处理战斗事件时使用的优先级。 */\n  onEventPriority: OnEventPrioritySchema.describe("模板处理战斗事件时使用的优先级。"),\n  /** 按战斗事件保存的 Action 列表；没有监听的事件字段会缺失。 */\n  eventToActions: EventToActionsSchema.describe("按战斗事件保存的 Action 列表；没有监听的事件字段会缺失。"),\n}).describe("一个具名战斗模板及其事件 Action 配置。");\n`,
    },
    {
      absolutePath: rootTypePath,
      content: `/** buff_template_data.json 根动态字典的显式类型。 */\n\nimport type { BuffTemplate } from "${createImportSpecifier(rootTypePath, coreTypePath)}";\n\n/** 按模板 ID 保存全部战斗模板的动态字典。 */\nexport type BuffTemplateData = Record<string, BuffTemplate>;\n`,
    },
    {
      absolutePath: rootSchemaPath,
      content: `/** buff_template_data.json 根动态字典的 Zod Schema。 */\n\nimport { z } from "zod";\n\nimport type { BuffTemplateData } from "${createImportSpecifier(rootSchemaPath, rootTypePath)}";\nimport { BuffTemplateSchema } from "${createImportSpecifier(rootSchemaPath, coreSchemaPath)}";\n\n/** 按模板 ID 保存全部战斗模板，并验证字典键与 templateKey 一致。 */\nexport const BuffTemplateDataSchema: z.ZodType<BuffTemplateData> = z\n  .record(z.string(), BuffTemplateSchema)\n  .superRefine((templates, context) => {\n    // 外层键是稳定模板 ID，必须与记录内冗余的 templateKey 保持一致。\n    for (const [templateId, template] of Object.entries(templates)) {\n      if (template.templateKey === templateId) continue;\n      context.addIssue({\n        code: "custom",\n        message: \`模板字典键 \${templateId} 与 templateKey \${template.templateKey} 不一致。\`,\n        path: [templateId, "templateKey"],\n      });\n    }\n  })\n  .describe("buff_template_data.json 中按模板 ID 保存全部战斗模板的动态字典。");\n`,
    },
  ];
}

/** 创建根类型与递归 Action 的编译期双向一致性断言。 */
function createTypeConsistencyArtifact(): Artifact {
  const testPath = path.resolve(
    PACKAGE_ROOT,
    "test",
    "buff-template-data-type-consistency.test-d.ts",
  );
  return {
    absolutePath: testPath,
    content: `/** 编译期断言 buff_template_data 显式类型与 Zod 推导类型完全一致。 */\n\nimport type { z } from "zod";\n\nimport type { BattleAction, BuffTemplate, BuffTemplateData, EventToActions } from "../src/types/index.js";\nimport { BattleActionSchema, BuffTemplateDataSchema, BuffTemplateSchema, EventToActionsSchema } from "../src/schemas/index.js";\n\n/** 比较两个类型是否双向完全相等。 */\ntype Equal<Left, Right> =\n  (<Value>() => Value extends Left ? 1 : 2) extends\n  (<Value>() => Value extends Right ? 1 : 2)\n    ? true\n    : false;\n\n/** 要求类型级布尔值为 true。 */\ntype Expect<Value extends true> = Value;\n\n/** 目标表关键递归边界的双向一致性断言。 */\nexport type BuffTemplateDataTypeAssertions = [\n  Expect<Equal<BattleAction, z.infer<typeof BattleActionSchema>>>,\n  Expect<Equal<EventToActions, z.infer<typeof EventToActionsSchema>>>,\n  Expect<Equal<BuffTemplate, z.infer<typeof BuffTemplateSchema>>>,\n  Expect<Equal<BuffTemplateData, z.infer<typeof BuffTemplateDataSchema>>>,\n];\n`,
  };
}

/** 创建真实数据校验与严格对象拒绝未知字段的测试。 */
function createRuntimeTestArtifact(): Artifact {
  const testPath = path.resolve(PACKAGE_ROOT, "test", "buff-template-data.test.ts");
  return {
    absolutePath: testPath,
    content: `/** 对真实 buff_template_data 执行全量校验并检查 Action 严格字段边界。 */\n\nimport fs from "node:fs";\nimport path from "node:path";\nimport { fileURLToPath } from "node:url";\nimport { describe, expect, it } from "vitest";\n\nimport { BuffTemplateDataSchema } from "../src/schemas/buff-template-data/buff-template-data.schemas.js";\n\n/** 测试所使用的完整真实数据文件。 */\nconst CURRENT_FILE = fileURLToPath(import.meta.url);\nconst TABLE_PATH = path.resolve(path.dirname(CURRENT_FILE), "../../..", "ArknightsGameData", "zh_CN", "gamedata", "battle", "buff_template_data.json");\n\ndescribe("BuffTemplateDataSchema", () => {\n  it("校验当前完整 buff_template_data 数据", () => {\n    const data = JSON.parse(fs.readFileSync(TABLE_PATH, "utf8")) as unknown;\n    const result = BuffTemplateDataSchema.safeParse(data);\n    expect(result.success, result.success ? undefined : result.error.message).toBe(true);\n  });\n\n  it("拒绝 Action 中尚未建模的字段", () => {\n    const data = JSON.parse(fs.readFileSync(TABLE_PATH, "utf8")) as Record<string, { eventToActions: Record<string, Array<Record<string, unknown>>> }>;\n    const template = Object.values(data).find((entry) => Object.values(entry.eventToActions).some((actions) => actions.length > 0));\n    expect(template).toBeDefined();\n    if (!template) return;\n    const actions = Object.values(template.eventToActions).find((entries) => entries.length > 0);\n    expect(actions).toBeDefined();\n    if (!actions?.[0]) return;\n    actions[0].unexpectedUpdateField = true;\n    expect(BuffTemplateDataSchema.safeParse(data).success).toBe(false);\n  });\n});\n`,
  };
}

/** 在包级唯一公共出口中维护目标表导出标记区。 */
function updateBarrel(indexPath: string, artifacts: Artifact[], suffix: "types" | "schemas"): void {
  const current = fs.readFileSync(indexPath, "utf8");
  const start = current.indexOf(EXPORT_START);
  const end = current.indexOf(EXPORT_END);
  const withoutPrevious =
    start >= 0 && end >= start
      ? `${current.slice(0, start).trimEnd()}\n`
      : current.trimEnd();
  const root = suffix === "types" ? TYPES_ROOT : SCHEMAS_ROOT;
  const exports = artifacts
    .filter((artifact) => artifact.absolutePath.startsWith(root))
    .filter((artifact) => artifact.absolutePath.endsWith(`.${suffix}.ts`))
    // 惰性引用是表内部循环依赖基础设施，不作为包级公共 API 导出。
    .filter((artifact) => !artifact.absolutePath.endsWith("battle-action-reference.schemas.ts"))
    .map((artifact) => toPosixPath(path.relative(root, artifact.absolutePath)))
    .sort()
    .map((relative) => `export * from "./${relative.replace(/\.ts$/, ".js")}";`);
  const content = `${withoutPrevious}\n\n${EXPORT_START}\n${exports.join("\n")}\n${EXPORT_END}\n`;
  fs.writeFileSync(indexPath, content, "utf8");
}

/** 确认清理目标严格位于当前包的目标表目录。 */
function assertTableDirectory(directory: string, parent: string): void {
  if (
    path.dirname(path.resolve(directory)) !== path.resolve(parent) ||
    path.basename(directory) !== TABLE_DIRECTORY
  ) {
    throw new Error(`拒绝清理非目标表目录：${directory}`);
  }
}

/** 原子边界内写入目标表产物，不触碰其他数据表目录。 */
function writeArtifacts(artifacts: Artifact[]): void {
  assertTableDirectory(TABLE_TYPES_ROOT, TYPES_ROOT);
  assertTableDirectory(TABLE_SCHEMAS_ROOT, SCHEMAS_ROOT);
  for (const directory of [TABLE_TYPES_ROOT, TABLE_SCHEMAS_ROOT]) {
    fs.rmSync(directory, { force: true, recursive: true });
  }
  for (const artifact of artifacts) {
    fs.mkdirSync(path.dirname(artifact.absolutePath), { recursive: true });
    fs.writeFileSync(artifact.absolutePath, artifact.content, "utf8");
  }
  updateBarrel(path.resolve(TYPES_ROOT, "index.ts"), artifacts, "types");
  updateBarrel(path.resolve(SCHEMAS_ROOT, "index.ts"), artifacts, "schemas");
}

/** 首次生成目标表全部产物；已有根类型时拒绝覆盖。 */
export function bootstrapBuffTemplateData(dataRoot: string): BuffTemplateBootstrapStatistics {
  const rootTypePath = path.resolve(TABLE_TYPES_ROOT, "buff-template-data.types.ts");
  if (fs.existsSync(rootTypePath)) {
    throw new Error(`拒绝覆盖已有类型：${rootTypePath}。后续更新必须局部维护。`);
  }
  const tablePath = path.resolve(dataRoot, TABLE_RELATIVE_PATH);
  if (!fs.existsSync(tablePath)) throw new Error(`找不到数据表：${tablePath}`);
  const parsed = JSON.parse(fs.readFileSync(tablePath, "utf8")) as JsonValue;
  if (!isJsonObject(parsed)) throw new Error("buff_template_data.json 根节点必须是对象。");

  const definitions = createActionDefinitions(parsed);
  const modules = createActionModules(definitions);
  const artifacts: Artifact[] = [];
  for (const module of modules) {
    artifacts.push(
      { absolutePath: actionModuleTypePath(module), content: renderActionTypeModule(module) },
      { absolutePath: actionModuleSchemaPath(module), content: renderActionSchemaModule(module) },
    );
  }
  artifacts.push(
    ...createLetterArtifacts(modules),
    ...createBattleActionArtifacts(modules),
    ...createCoreArtifacts(parsed),
    createTypeConsistencyArtifact(),
    createRuntimeTestArtifact(),
  );
  writeArtifacts(artifacts);
  const events = new Set<string>();
  for (const value of Object.values(parsed)) {
    if (!isJsonObject(value) || !isJsonObject(value.eventToActions)) continue;
    Object.keys(value.eventToActions).forEach((event) => events.add(event));
  }
  return {
    actionTypes: definitions.length,
    artifacts: artifacts.length,
    events: events.size,
    templates: Object.keys(parsed).length,
  };
}

/** 直接运行该文件时使用默认 ArknightsGameData 路径。 */
if (process.argv[1] && path.resolve(process.argv[1]) === path.resolve(CURRENT_FILE)) {
  const defaultDataRoot = path.resolve(MONOREPO_ROOT, "ArknightsGameData");
  const statistics = bootstrapBuffTemplateData(defaultDataRoot);
  console.log(JSON.stringify(statistics, null, 2));
}
