import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";

/** 读取并解析一个 UTF-8 JSON 文件。 */
export async function readJson<T>(filePath: string): Promise<T> {
  return JSON.parse(await readFile(filePath, "utf8")) as T;
}

/** 使用稳定的两空格格式写入 JSON。 */
export async function writeJson(filePath: string, value: unknown): Promise<void> {
  await mkdir(path.dirname(filePath), { recursive: true });
  await writeFile(filePath, `${JSON.stringify(value, null, 2)}\n`, "utf8");
}

/**
 * 清空本报告拥有的新结构；输出根目录中的其他生成器产物不受影响。
 */
export async function clearOwnedReportFiles(outputRoot: string): Promise<void> {
  await Promise.all([
    rm(path.join(outputRoot, "operators"), { recursive: true, force: true }),
    rm(path.join(outputRoot, "operators.json"), { force: true }),
    rm(path.join(outputRoot, "roguelike"), { recursive: true, force: true }),
    rm(path.join(outputRoot, "roguelike.json"), { force: true }),
  ]);
}
