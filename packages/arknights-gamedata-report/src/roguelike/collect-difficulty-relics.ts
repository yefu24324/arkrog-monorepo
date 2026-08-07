/**
 * 提取 `topic.json` 使用的难度条件藏品关联。
 * 数据来源：roguelike_topic_table.json 的 details.relics、items 与 choices。
 */

import type { DetailRelic } from "@arkrog/arknights-schema/types";

import type {
  ExportedRogueDifficultyConditionalRelic,
  WrappedRelicTopicDetail,
} from "#roguelike/types";

/** 按 key 读取原始黑板字符串。 */
function blackboardString(
  blackboard: DetailRelic["buffs"][number]["blackboard"],
  key: string,
): string | undefined {
  return blackboard.find((entry) => entry.key === key)?.valueStr ?? undefined;
}

/** 严格解析逗号分隔难度，非法数据立即失败。 */
function parseGrades(value: string, sourceId: string): number[] {
  const grades = value.split(",").map((entry) => Number(entry.trim()));
  if (grades.length === 0 || grades.some((grade) => !Number.isInteger(grade) || grade < 0)) {
    throw new Error(`难度条件藏品 ${sourceId} 的 cond_mode_grade 无效：${value}`);
  }
  return grades;
}

/** 校验并读取一条关联两端的完整原始对象。 */
function resolveRelicLink(
  topicId: string,
  detail: WrappedRelicTopicDetail,
  sourceId: string,
  targetId: string,
) {
  const sourceItem = detail.items[sourceId];
  const sourceRelic = detail.relics[sourceId];
  const targetItem = detail.items[targetId];
  const targetRelic = detail.relics[targetId];
  if (!sourceItem || !sourceRelic || !targetItem || !targetRelic) {
    throw new Error(`难度条件藏品关联不完整：${topicId}/${sourceId} -> ${targetId}`);
  }
  return { sourceItem, sourceRelic, targetItem, targetRelic };
}

/** 提取主题内模式/等级自动藏品与 LEGACY 支援关联。 */
export function collectDifficultyConditionalRelics(
  topicId: string,
  detail: WrappedRelicTopicDetail,
): ExportedRogueDifficultyConditionalRelic[] {
  const result: ExportedRogueDifficultyConditionalRelic[] = [];
  for (const [sourceId, sourceRelic] of Object.entries(detail.relics)) {
    sourceRelic.buffs.forEach((buff, buffIndex) => {
      const jsonPath = `$.details.${topicId}.relics[${JSON.stringify(sourceId)}].buffs[${buffIndex}]`;
      if (buff.key === "init_mode_relic") {
        const targetId = blackboardString(buff.blackboard, "id");
        const modeDifficulty = blackboardString(buff.blackboard, "cond_mode");
        const gradeText = blackboardString(buff.blackboard, "cond_mode_grade");
        if (!targetId || !modeDifficulty || !gradeText) return;
        const link = resolveRelicLink(topicId, detail, sourceId, targetId);
        result.push({
          id: `${sourceId}:${buffIndex}:${targetId}`,
          kind: "MODE_GRADE_GRANT",
          sourceId,
          ...link,
          buffIndex,
          modeDifficulty,
          grades: parseGrades(gradeText, sourceId),
          choiceId: null,
          choice: null,
          targetId,
          jsonPath,
          evidencePaths: [jsonPath],
        });
        return;
      }
      if (buff.key !== "force_add_choice" || detail.items[sourceId]?.type !== "LEGACY") return;
      const choiceId = blackboardString(buff.blackboard, "choice_id");
      if (!choiceId) return;
      const choice = detail.choices?.[choiceId];
      const targetId = choice?.displayData.itemId;
      if (!choice || !targetId || !detail.relics[targetId]) return;
      const link = resolveRelicLink(topicId, detail, sourceId, targetId);
      const choicePath = `$.details.${topicId}.choices[${JSON.stringify(choiceId)}]`;
      result.push({
        id: `${sourceId}:${buffIndex}:${targetId}`,
        kind: "LEGACY_CHOICE",
        sourceId,
        ...link,
        buffIndex,
        modeDifficulty: null,
        grades: null,
        choiceId,
        choice,
        targetId,
        jsonPath,
        evidencePaths: [jsonPath, choicePath],
      });
    });
  }
  return result;
}
