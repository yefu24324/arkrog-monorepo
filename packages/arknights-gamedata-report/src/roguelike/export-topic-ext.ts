/**
 * 生成 `roguelike/{topicId}/topic_ext.json`。
 * 数据来源：roguelike_topic_table.json 中未归入 topic/relics/stage 报告的
 * details、完整 modules 与除 difficulties 外的 customizeData。
 */

import type { Detail } from "@arkrog/arknights-schema/types";

import { characterBuffBelongsToRelic } from "#roguelike/wrapped-relics";
import type {
  ExportedRoguelikeTopicExtReport,
  OriginalRelicCharacterBuffData,
  RoguelikeTopicTableForReport,
} from "#roguelike/types";

/** 构建不重复藏品、难度和关卡大块数据的主题扩展报告。 */
export function buildTopicExtReport(
  table: RoguelikeTopicTableForReport,
  topicId: string,
): ExportedRoguelikeTopicExtReport {
  const detail = table.details[topicId]!;
  const {
    difficulties: _difficulties,
    stages: _stages,
    relics: _relics,
    items,
    charBuffData,
    ...remainingDetails
  } = detail;
  const relicIds = new Set(
    Object.values(items).filter((item) => item.type === "RELIC").map((item) => item.id),
  );
  const remainingItems = Object.fromEntries(
    Object.entries(items).filter(([, item]) => item.type !== "RELIC"),
  );
  const remainingCharacterBuffs = Object.fromEntries(
    Object.entries(charBuffData as unknown as Record<string, OriginalRelicCharacterBuffData>)
      .filter(([, characterBuff]) =>
        ![...relicIds].some((relicId) => characterBuffBelongsToRelic(characterBuff, relicId)),
      ),
  );
  const { difficulties: _customizedDifficulties, ...remainingCustomizeData } =
    table.customizeData[topicId]!;
  return {
    details: {
      ...(remainingDetails as Omit<Detail, "difficulties" | "stages" | "relics" | "items" | "charBuffData">),
      items: remainingItems,
      charBuffData: remainingCharacterBuffs,
    },
    modules: table.modules[topicId]!,
    customizeData: remainingCustomizeData,
  };
}
