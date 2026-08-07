import path from "node:path";
import { fileURLToPath } from "node:url";

import type { GameDataReportArguments } from "#config/arguments";

/** 报告生成使用的绝对路径集合。 */
export interface GameDataReportPaths {
  /** ArknightsGameData 根目录。 */
  dataRoot: string;
  /** zh_CN/gamedata 目录。 */
  gameData: string;
  /** 报告输出根目录。 */
  outputRoot: string;
  /** 命令实际运行目录。 */
  workingDirectory: string;
}

/** 从包源码位置定位当前 checkout 的 monorepo 根目录。 */
function packageMonorepoRoot(): string {
  const configDirectory = path.dirname(fileURLToPath(import.meta.url));
  return path.resolve(configDirectory, "../../../..");
}

/** 根据实际进程目录解析输出路径，并按约定定位 GameData。 */
export function resolveGameDataReportPaths(
  arguments_: GameDataReportArguments,
  workingDirectory = process.cwd(),
): GameDataReportPaths {
  if (path.isAbsolute(arguments_.output)) {
    throw new Error(`--out 只接受相对路径：${arguments_.output}`);
  }
  const configuredDataRoot =
    arguments_.dataOverride ?? process.env.ARKNIGHTS_GAME_DATA_PATH;
  const dataRoot = configuredDataRoot
    ? path.resolve(workingDirectory, configuredDataRoot)
    : path.join(packageMonorepoRoot(), "ArknightsGameData");
  return {
    dataRoot,
    gameData: path.join(dataRoot, "zh_CN", "gamedata"),
    outputRoot: path.resolve(workingDirectory, arguments_.output),
    workingDirectory,
  };
}
