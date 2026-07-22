import path from "node:path";
import { fileURLToPath } from "node:url";

import type { RepositoryPaths } from "./types.js";

/** 从当前包位置解析 monorepo 根目录，不依赖调用命令时的工作目录。 */
export function resolveRepositoryPaths(databaseOverride?: string): RepositoryPaths {
  const packageDirectory = path.dirname(fileURLToPath(import.meta.url));
  const root = path.resolve(packageDirectory, "../../..");

  return {
    root,
    gameData: path.join(root, "ArknightsGameData", "zh_CN", "gamedata"),
    schemaSource: path.join(root, "packages", "arknights-schema", "src"),
    docs: path.join(root, "docs", "game"),
    database: databaseOverride
      ? path.resolve(root, databaseOverride)
      : path.join(root, ".data", "arknights-knowledge.kuzu"),
  };
}

/** 将绝对路径转成稳定、跨平台的仓库相对路径。 */
export function toRepositoryPath(root: string, absolutePath: string): string {
  return path.relative(root, absolutePath).split(path.sep).join("/");
}
