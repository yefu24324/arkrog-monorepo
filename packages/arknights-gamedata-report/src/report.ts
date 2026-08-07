import { access } from "node:fs/promises";
import path from "node:path";

import type { GameDataReportArguments } from "#config/arguments";
import { resolveGameDataReportPaths } from "#config/paths";
import { exportOperatorReports } from "#operators/export-operator-details";
import { exportRoguelikeReports } from "#roguelike/export-roguelike-reports";
import { resolveLevelJsonPath } from "#roguelike/export-stages";
import type { RoguelikeTopicTableForReport } from "#roguelike/types";
import { clearOwnedReportFiles, readJson } from "#shared/json-file";
import type { GameDataReportResult } from "#shared/types";

/** 干员与主题报告启动前必须存在的原始 Excel 文件。 */
const REQUIRED_EXCEL_FILES = [
  "battle_equip_table.json",
  "char_patch_table.json",
  "character_table.json",
  "roguelike_topic_table.json",
  "skill_table.json",
  "uniequip_table.json",
] as const;

/**
 * 在清空现有报告前验证所有固定数据表和主题引用的 Level 文件存在。
 * 这样输入路径错误或 GameData checkout 残缺时不会破坏上一份可用报告。
 */
async function validateReportSources(gameDataRoot: string): Promise<void> {
  const excelRoot = path.join(gameDataRoot, "excel");
  await Promise.all(REQUIRED_EXCEL_FILES.map((fileName) => access(path.join(excelRoot, fileName))));
  const table = await readJson<RoguelikeTopicTableForReport>(
    path.join(excelRoot, "roguelike_topic_table.json"),
  );
  const levelPaths = new Set<string>();
  for (const [topicId, detail] of Object.entries(table.details)) {
    if (!/^rogue_\d+$/.test(topicId)) continue;
    for (const stage of Object.values(detail.stages)) {
      levelPaths.add(resolveLevelJsonPath(gameDataRoot, stage.levelId));
      for (const levelId of stage.levelReplaceIds ?? []) {
        levelPaths.add(resolveLevelJsonPath(gameDataRoot, levelId));
      }
    }
  }
  await Promise.all([...levelPaths].map((levelPath) => access(levelPath)));
}

/** 预检、清空本包拥有的旧产物，并生成完整报告。 */
export async function generateGameDataReport(
  arguments_: GameDataReportArguments,
  workingDirectory = process.cwd(),
): Promise<GameDataReportResult> {
  const paths = resolveGameDataReportPaths(arguments_, workingDirectory);
  await validateReportSources(paths.gameData);
  await clearOwnedReportFiles(paths.outputRoot);
  const operatorResult = await exportOperatorReports(paths.gameData, paths.outputRoot);
  const roguelikeResult = await exportRoguelikeReports(paths.gameData, paths.outputRoot);
  return {
    dataRoot: paths.dataRoot,
    outputRoot: paths.outputRoot,
    results: [
      { scope: "operators", ...operatorResult, outputPath: path.join(paths.outputRoot, "operators") },
      { scope: "roguelike", ...roguelikeResult, outputPath: path.join(paths.outputRoot, "roguelike") },
    ],
  };
}
