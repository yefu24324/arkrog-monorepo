/**
 * 将 Zod issue 定位到负责该 JSON 路径的具名 Schema。
 *
 * 这里读取 Zod 4 的只读定义树，不修改 Schema；定义对象映射还能识别 `.describe()`
 * 产生的浅克隆，因此可从字段级 Schema 回溯到导出的 `XxxSchema`。
 */

/** Zod issue 中分析器实际需要的稳定字段。 */
export interface SchemaIssue {
  code: string;
  message: string;
  path: PropertyKey[];
  keys?: string[];
}

/** 最小化的 Zod 内部定义结构。 */
interface SchemaDefinition extends Record<string, unknown> {
  type?: string;
}

/** 分析器使用的最小化 Zod Schema 接口。 */
export interface SchemaNode {
  _zod: {
    def: SchemaDefinition;
  };
}

/** 单条 Zod issue 的类型归属分析结果。 */
export interface LocatedSchemaIssue {
  issue: SchemaIssue;
  schemaNames: string[];
  typeNames: string[];
}

/** 判断未知值是否具有 Zod 4 Schema 的只读定义树。 */
export function isSchemaNode(value: unknown): value is SchemaNode {
  if (typeof value !== "object" || value === null) return false;
  const candidate = value as { _zod?: { def?: unknown } };
  return typeof candidate._zod?.def === "object" && candidate._zod.def !== null;
}

/** 根据所有运行时导出建立 Zod 定义对象到导出名的索引。 */
export function createSchemaNameIndex(
  exportsObject: Readonly<Record<string, unknown>>,
): WeakMap<object, string[]> {
  const result = new WeakMap<object, string[]>();
  for (const [exportName, value] of Object.entries(exportsObject)) {
    if (!exportName.endsWith("Schema") || !isSchemaNode(value)) continue;
    const definition = value._zod.def;
    const names = result.get(definition) ?? [];
    if (!names.includes(exportName)) names.push(exportName);
    result.set(definition, names);
  }
  return result;
}

/** 读取对象 Schema 的 shape，兼容对象形式与惰性 getter。 */
function readShape(definition: SchemaDefinition): Record<string, unknown> | null {
  const rawShape = definition.shape;
  const shape = typeof rawShape === "function" ? rawShape() : rawShape;
  return typeof shape === "object" && shape !== null
    ? (shape as Record<string, unknown>)
    : null;
}

/** 去重 Schema 节点，避免 union 或 wrapper 产生重复候选。 */
function uniqueSchemas(values: SchemaNode[]): SchemaNode[] {
  return [...new Set(values)];
}

/**
 * 沿一个 JSON 路径片段向下遍历 Schema。
 * wrapper 与 union 不消耗路径片段；对象、记录、数组和元组消耗一个片段。
 */
function descendSchema(
  schema: SchemaNode,
  segment: PropertyKey,
  visited: Set<SchemaNode>,
): SchemaNode[] {
  if (visited.has(schema)) return [];
  visited.add(schema);
  const definition = schema._zod.def;

  if (
    [
      "optional",
      "nullable",
      "default",
      "prefault",
      "nonoptional",
      "readonly",
      "catch",
    ].includes(definition.type ?? "")
  ) {
    const innerType = definition.innerType;
    return isSchemaNode(innerType)
      ? descendSchema(innerType, segment, visited)
      : [];
  }

  if (definition.type === "pipe") {
    const output = definition.out;
    const input = definition.in;
    return [output, input]
      .filter(isSchemaNode)
      .flatMap((candidate) => descendSchema(candidate, segment, visited));
  }

  if (definition.type === "lazy" && typeof definition.getter === "function") {
    const lazyValue = definition.getter();
    return isSchemaNode(lazyValue)
      ? descendSchema(lazyValue, segment, visited)
      : [];
  }

  if (definition.type === "union") {
    const options = Array.isArray(definition.options) ? definition.options : [];
    return uniqueSchemas(
      options
        .filter(isSchemaNode)
        .flatMap((candidate) => descendSchema(candidate, segment, new Set(visited))),
    );
  }

  if (definition.type === "intersection") {
    return uniqueSchemas(
      [definition.left, definition.right]
        .filter(isSchemaNode)
        .flatMap((candidate) => descendSchema(candidate, segment, new Set(visited))),
    );
  }

  if (definition.type === "object") {
    const shape = readShape(definition);
    const child = shape?.[String(segment)];
    return isSchemaNode(child) ? [child] : [];
  }

  if (definition.type === "record") {
    return isSchemaNode(definition.valueType) ? [definition.valueType] : [];
  }

  if (definition.type === "array") {
    return isSchemaNode(definition.element) ? [definition.element] : [];
  }

  if (definition.type === "tuple") {
    const items = Array.isArray(definition.items) ? definition.items : [];
    const index = typeof segment === "number" ? segment : Number(segment);
    const child = items[index] ?? definition.rest;
    return isSchemaNode(child) ? [child] : [];
  }

  return [];
}

/** 获取候选 Schema 中最后出现的具名导出。 */
function readCandidateNames(
  schemas: SchemaNode[],
  nameIndex: WeakMap<object, string[]>,
): string[] {
  return [
    ...new Set(
      schemas.flatMap((schema) => nameIndex.get(schema._zod.def) ?? []),
    ),
  ].sort();
}

/** 定位一个 JSON 路径最终由哪些具名 Schema 负责。 */
export function locateSchemaNames(
  rootSchema: SchemaNode,
  rootSchemaName: string,
  issuePath: PropertyKey[],
  nameIndex: WeakMap<object, string[]>,
): string[] {
  let candidates = [rootSchema];
  let lastNamedSchemas = readCandidateNames(candidates, nameIndex);
  if (lastNamedSchemas.length === 0) lastNamedSchemas = [rootSchemaName];

  for (const segment of issuePath) {
    const nextCandidates = uniqueSchemas(
      candidates.flatMap((schema) =>
        descendSchema(schema, segment, new Set<SchemaNode>()),
      ),
    );
    if (nextCandidates.length === 0) break;
    candidates = nextCandidates;
    const currentNames = readCandidateNames(candidates, nameIndex);
    if (currentNames.length > 0) lastNamedSchemas = currentNames;
  }

  return lastNamedSchemas;
}

/** 将 Zod issue 集合转换成带具体 Schema 与显式类型名称的报告项。 */
export function locateSchemaIssues(
  rootSchema: SchemaNode,
  rootSchemaName: string,
  issues: SchemaIssue[],
  nameIndex: WeakMap<object, string[]>,
): LocatedSchemaIssue[] {
  return issues.map((issue) => {
    const schemaNames = locateSchemaNames(
      rootSchema,
      rootSchemaName,
      issue.path,
      nameIndex,
    );
    return {
      issue,
      schemaNames,
      typeNames: schemaNames.map((name) => name.replace(/Schema$/, "")),
    };
  });
}
