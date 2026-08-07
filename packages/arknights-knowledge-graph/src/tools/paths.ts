import path from "node:path";
import { fileURLToPath } from "node:url";

import type { RepositoryPaths } from "./types.js";

/** 从当前包位置解析 monorepo 根目录，不依赖调用命令时的工作目录。 */
export function resolveRepositoryPaths(databaseOverride?: string): RepositoryPaths {
  const packageDirectory = path.dirname(fileURLToPath(import.meta.url));
  // src/tools → 包根 → packages → monorepo 根
  const root = path.resolve(packageDirectory, "../../../..");

  const graphWorkspace = path.join(root, ".data", "arknights-knowledge-graph");
  const database = databaseOverride
    ? path.resolve(root, databaseOverride)
    : path.join(root, ".data", "arknights-knowledge.kuzu");
  const manifestBase = databaseOverride
    ? database
    : path.join(graphWorkspace, "manifest");
  return {
    root,
    gameData: path.join(root, "ArknightsGameData", "zh_CN", "gamedata"),
    schemaSource: path.join(root, "packages", "arknights-schema", "src"),
    gameDataReportSource: path.join(root, "packages", "arknights-gamedata-report", "src"),
    database,
    graphWorkspace,
    graphRules: path.join(graphWorkspace, "rules"),
    graphTopicSystems: path.join(graphWorkspace, "topic-systems"),
    graphManifest: `${manifestBase}.json`,
    graphCandidateManifest: `${manifestBase}.candidate.json`,
    graphPreparation: path.join(graphWorkspace, "preparation.json"),
    graphConflicts: path.join(graphWorkspace, "conflicts.json"),
    graphApproval: path.join(graphWorkspace, "approval.json"),
  };
}

/** 将绝对路径转成稳定、跨平台的仓库相对路径。 */
export function toRepositoryPath(root: string, absolutePath: string): string {
  return path.relative(root, absolutePath).split(path.sep).join("/");
}
