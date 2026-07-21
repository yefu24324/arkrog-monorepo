/**
 * 检查每个独立 TypeScript 类型是否拥有对应 Schema 与中文 Markdown 文档。
 */

import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";
import ts from "typescript";

/** 当前包内三个需要保持一一对应的目录。 */
const CURRENT_FILE = fileURLToPath(import.meta.url);
const PACKAGE_ROOT = path.resolve(path.dirname(CURRENT_FILE), "..");
const TYPES_ROOT = path.resolve(PACKAGE_ROOT, "src", "types");
const SCHEMAS_ROOT = path.resolve(PACKAGE_ROOT, "src", "schemas");
const DOCS_ROOT = path.resolve(PACKAGE_ROOT, "docs", "types");

/** 递归列出目录中的全部文件，供分层生成目录检查使用。 */
function listFilesRecursively(directory: string): string[] {
  const result: string[] = [];
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const absolutePath = path.resolve(directory, entry.name);
    if (entry.isDirectory()) result.push(...listFilesRecursively(absolutePath));
    else if (entry.isFile()) result.push(absolutePath);
  }
  return result;
}

/** 从聚合类型模块提取全部导出的 interface/type 名称。 */
function readDefinitionNames(filePath: string): string[] {
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
    throw new Error(`${filePath} 至少应包含一个 interface/type 定义。`);
  }
  return definitions.map(
    (definition) =>
      (definition as ts.InterfaceDeclaration | ts.TypeAliasDeclaration).name.text,
  );
}

/** 执行类型、Schema、文档和人工说明标记的完整性检查。 */
function main(): void {
  const typeFiles = listFilesRecursively(TYPES_ROOT)
    .filter((filePath) => filePath.endsWith(".types.ts"))
    .sort();
  const problems: string[] = [];
  let definitionCount = 0;

  for (const typePath of typeFiles) {
    const relativePath = path.relative(TYPES_ROOT, typePath);
    const stem = path.basename(typePath, ".types.ts");
    const relativeDirectory = path.dirname(relativePath);
    const definitionNames = readDefinitionNames(typePath);
    definitionCount += definitionNames.length;
    const schemaPath = path.resolve(
      SCHEMAS_ROOT,
      relativeDirectory,
      `${stem}.schemas.ts`,
    );
    const docPath = path.resolve(DOCS_ROOT, relativeDirectory, `${stem}.md`);

    if (!fs.existsSync(schemaPath)) {
      problems.push(`${relativePath} 缺少对应 ${stem}.schemas.ts`);
    } else {
      const schemaSource = fs.readFileSync(schemaPath, "utf8");
      for (const definitionName of definitionNames) {
        if (!schemaSource.includes(`export const ${definitionName}Schema =`)) {
          problems.push(`${stem}.schemas.ts 未导出 ${definitionName}Schema`);
        }
      }
    }

    if (!fs.existsSync(docPath)) {
      problems.push(`${relativePath} 缺少模块文档 ${stem}.md`);
    } else {
      const docSource = fs.readFileSync(docPath, "utf8");
      for (const definitionName of definitionNames) {
        if (!docSource.includes(`## ${definitionName}`)) {
          problems.push(`${stem}.md 缺少 ${definitionName} 章节`);
        }
      }
    }
  }

  if (problems.length > 0) {
    console.error(`文档完整性检查失败：${problems.length} 个问题。`);
    for (const problem of problems) console.error(`- ${problem}`);
    process.exitCode = 1;
    return;
  }
  console.log(
    `文档完整性检查通过：${typeFiles.length} 个逻辑模块覆盖 ${definitionCount} 个定义。`,
  );
}

try {
  main();
} catch (error: unknown) {
  const message = error instanceof Error ? error.stack ?? error.message : String(error);
  console.error(message);
  process.exitCode = 1;
}
