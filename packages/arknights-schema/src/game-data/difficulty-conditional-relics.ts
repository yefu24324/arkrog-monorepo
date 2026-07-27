/** 从原始肉鸽数据提取“指定模式/难度自动给予藏品”的可追踪关联。 */

import type {
  OriginalRelicData,
  RelicItemForWrap,
  WrappedRelicTopicDetail,
} from "./wrapped-relics.js";
import type { Choice } from "../types/roguelike-topic-table/details/choices/choices.types.js";

/** 难度相关条件藏品的来源类型。 */
export type RogueDifficultyConditionalRelicKind =
  | "MODE_GRADE_GRANT"
  | "LEGACY_CHOICE";

/** 难度页使用的完整条件藏品关联；所有嵌套对象均保持 GameData 原始值。 */
export interface ExportedRogueDifficultyConditionalRelic {
  /** 关联的稳定 ID，供 formula 与 UI 保存用户选择。 */
  id: string;
  /** 模式/等级自动给予，或上一局遗留的开局支援选择。 */
  kind: RogueDifficultyConditionalRelicKind;
  /** 条件载体物品 ID，例如隐藏的 LEGACY 开局助力。 */
  sourceId: string;
  /** 未改写的条件载体 item。 */
  sourceItem: RelicItemForWrap;
  /** 未改写的条件载体 relic。 */
  sourceRelic: OriginalRelicData;
  /** `sourceRelic.buffs` 中的零基下标。 */
  buffIndex: number;
  /** 原始 `cond_mode`；LEGACY_CHOICE 不限制模式时为 null。 */
  modeDifficulty: string | null;
  /** 原始 `cond_mode_grade` 解析出的等级集合；LEGACY_CHOICE 为 null。 */
  grades: number[] | null;
  /** force_add_choice 指向的选项 ID；直接按模式给予时为 null。 */
  choiceId: string | null;
  /** 未改写的开局支援选项；直接按模式给予时为 null。 */
  choice: Choice | null;
  /** 被自动给予的藏品 ID。 */
  targetId: string;
  /** 未改写的目标藏品 item。 */
  targetItem: RelicItemForWrap;
  /** 未改写的目标藏品 relic 与全部 buffs。 */
  targetRelic: OriginalRelicData;
  /** 条件 buff 在 roguelike_topic_table.json 中的原始路径。 */
  jsonPath: string;
  /** 完整来源链中的全部原始路径。 */
  evidencePaths: string[];
}

/** 按 key 读取原始黑板字符串。 */
function blackboardString(
  blackboard: OriginalRelicData["buffs"][number]["blackboard"],
  key: string,
): string | undefined {
  return blackboard.find((entry) => entry.key === key)?.valueStr ?? undefined;
}

/** 严格解析逗号分隔难度；非法数据立即失败，避免静默漏掉条件等级。 */
function parseGrades(value: string, sourceId: string): number[] {
  const grades = value.split(",").map((entry) => Number(entry.trim()));
  if (
    grades.length === 0 ||
    grades.some((grade) => !Number.isInteger(grade) || grade < 0)
  ) {
    throw new Error(`难度条件藏品 ${sourceId} 的 cond_mode_grade 无效：${value}`);
  }
  return grades;
}

/** 生成不会受显示名称影响的条件关联 ID。 */
function conditionalRelicId(
  sourceId: string,
  buffIndex: number,
  targetId: string,
): string {
  return `${sourceId}:${buffIndex}:${targetId}`;
}

/** 校验并读取一条关联两端的完整原始对象。 */
function resolveRelicLink(
  topicId: string,
  detail: WrappedRelicTopicDetail,
  sourceId: string,
  targetId: string,
): {
  sourceItem: RelicItemForWrap;
  sourceRelic: OriginalRelicData;
  targetItem: RelicItemForWrap;
  targetRelic: OriginalRelicData;
} {
  const sourceItem = detail.items[sourceId];
  const sourceRelic = detail.relics[sourceId];
  const targetItem = detail.items[targetId];
  const targetRelic = detail.relics[targetId];
  if (!sourceItem || !sourceRelic || !targetItem || !targetRelic) {
    throw new Error(`难度条件藏品关联不完整：${topicId}/${sourceId} -> ${targetId}`);
  }
  return { sourceItem, sourceRelic, targetItem, targetRelic };
}

/**
 * 提取主题内全部 `init_mode_relic` 条件链。
 * 包装层只增加关联字段，source/target item 与 relic 始终复用原始对象。
 */
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
        // 不带完整模式与等级条件的 init_mode_relic 不属于“难度条件藏品”。
        if (!targetId || !modeDifficulty || !gradeText) return;
        const link = resolveRelicLink(topicId, detail, sourceId, targetId);
        result.push({
          id: conditionalRelicId(sourceId, buffIndex, targetId),
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

      // LEGACY 的 force_add_choice 会把上一局条件奖励转换为下一局可选支援。
      if (buff.key !== "force_add_choice" || detail.items[sourceId]?.type !== "LEGACY") return;
      const choiceId = blackboardString(buff.blackboard, "choice_id");
      if (!choiceId) return;
      const choice = detail.choices?.[choiceId];
      const targetId = choice?.displayData.itemId;
      // 只导出真正指向 relic 的选项；资源、招募等非战斗支援由其他系统处理。
      if (!choice || !targetId || !detail.relics[targetId]) return;
      const link = resolveRelicLink(topicId, detail, sourceId, targetId);
      const choicePath = `$.details.${topicId}.choices[${JSON.stringify(choiceId)}]`;
      result.push({
        id: conditionalRelicId(sourceId, buffIndex, targetId),
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
