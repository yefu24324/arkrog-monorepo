/**
 * 生成 `roguelike/{topicId}/stage.json`。
 * 数据来源：roguelike_topic_table.json 的 details.stages，以及
 * ArknightsGameData/zh_CN/gamedata/levels 下各 stage.levelId 与替换 Level JSON。
 */

import path from "node:path";

import type { Detail } from "@arkrog/arknights-schema/types";

import { readJson } from "#shared/json-file";
import type { OriginalGameDataObject } from "#shared/types";
import type { ExportedRogueStageReport } from "#roguelike/types";

/** 将 GameData levelId 安全解析到 levels 目录中的 JSON。 */
export function resolveLevelJsonPath(gameDataRoot: string, levelId: string): string {
  const levelsRoot = path.join(gameDataRoot, "levels");
  const relativeLevelPath = `${levelId}.json`.replaceAll("/", path.sep).replaceAll("\\", path.sep);
  const levelPath = path.resolve(levelsRoot, relativeLevelPath.toLowerCase());
  const relativeToLevels = path.relative(levelsRoot, levelPath);
  if (relativeToLevels.startsWith(`..${path.sep}`) || relativeToLevels === "..") {
    throw new Error(`levelId 越出 levels 目录：${levelId}`);
  }
  return levelPath;
}

/** 构建一个主题的全部关卡、主 Level 与替换 Level 字典。 */
export async function buildStagesReport(
  gameDataRoot: string,
  topicId: string,
  detail: Detail,
): Promise<ExportedRogueStageReport> {
  const report: ExportedRogueStageReport = {};
  const stages = Object.entries(detail.stages).sort(([left], [right]) => left.localeCompare(right));
  for (const [stageId, stage] of stages) {
    if (stage.id !== stageId) {
      throw new Error(`关卡字典键与 id 不一致：${topicId}/${stageId} !== ${stage.id}`);
    }
    const replacementLevels: Record<string, OriginalGameDataObject> = {};
    for (const levelId of stage.levelReplaceIds ?? []) {
      replacementLevels[levelId] = await readJson(resolveLevelJsonPath(gameDataRoot, levelId));
    }
    report[stageId] = {
      stage,
      level: await readJson(resolveLevelJsonPath(gameDataRoot, stage.levelId)),
      replacementLevels,
    };
  }
  return report;
}
