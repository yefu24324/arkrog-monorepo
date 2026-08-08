/**
 * 生成 `roguelike/{topicId}/topic_ext.json`。
 * 数据来源：roguelike_topic_table.json 中未归入 topic/relics/stage 报告的
 * details、modules 与 customizeData；rogue_6 仅导出实托邦、乌托邦和概念体。
 */

import type { Detail } from "@arkrog/arknights-schema/types";

import { characterBuffBelongsToRelic } from "#roguelike/wrapped-relics";
import type {
  ExportedAnyRoguelikeTopicExtReport,
  ExportedRogue6TopicExtReport,
  ExportedRoguelikeTopicExtReport,
  OriginalRelicCharacterBuffData,
  RoguelikeTopicTableForReport,
} from "#roguelike/types";

/** 构建不重复藏品、难度和关卡大块数据的主题扩展报告。 */
export function buildTopicExtReport(
  table: RoguelikeTopicTableForReport,
  topicId: string,
): ExportedAnyRoguelikeTopicExtReport {
  if (topicId === "rogue_6") {
    return buildRogue6TopicExtReport(table);
  }
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

/** 构建黑流树海三类目标数据；数量或引用缺失时阻断生成。 */
function buildRogue6TopicExtReport(
  table: RoguelikeTopicTableForReport,
): ExportedRogue6TopicExtReport {
  const detail = table.details.rogue_6!;
  const module = table.modules.rogue_6!;
  if (!module.weather || !module.scrap || !detail.archiveComp.weather || !detail.archiveComp.scrap) {
    throw new Error("rogue_6 缺少 weather、scrap 或对应 archiveComp 数据");
  }

  const realUtopiaEffects = module.weather.mainWeatherData;
  const realUtopiaTypes = new Set(Object.values(realUtopiaEffects).map((effect) => effect.type));
  for (const type of realUtopiaTypes) {
    const levels = new Set<string>(Object.values(realUtopiaEffects)
      .filter((effect) => effect.type === type)
      .map((effect) => effect.levelName));
    if (levels.size !== 3 || !["早期", "中期", "晚期"].every((level) => levels.has(level))) {
      throw new Error(`rogue_6 实托邦 ${type} 缺少早期、中期或晚期完整阶段`);
    }
  }
  const realUtopiaArchive = Object.fromEntries(
    Object.entries(detail.archiveComp.weather.weathers)
      .filter(([weatherId]) => weatherId in realUtopiaEffects),
  );
  if (Object.keys(realUtopiaArchive).length !== Object.keys(realUtopiaEffects).length) {
    throw new Error("rogue_6 实托邦档案数据未完整关联全部阶段");
  }

  const utopiaEffects = detail.variationData;
  const utopiaArchive = Object.fromEntries(
    Object.entries(detail.archiveComp.weather.weathers)
      .filter(([effectId]) => effectId in utopiaEffects),
  );
  if (Object.keys(utopiaEffects).length === 0) {
    throw new Error("rogue_6 未发现乌托邦 variationData");
  }
  if (Object.keys(utopiaArchive).length !== Object.keys(utopiaEffects).length) {
    throw new Error("rogue_6 乌托邦档案数据未完整关联全部 Buff");
  }

  const conceptualEntityEntries = Object.fromEntries(
    Object.entries(module.scrap.passiveScrapData).map(([scrapId, effect]) => {
      const item = detail.items[scrapId];
      const archive = detail.archiveComp.scrap!.scraps[scrapId];
      if (!item || !archive) throw new Error(`rogue_6 概念体 ${scrapId} 缺少 Item 或档案关联`);
      return [scrapId, { item, effect, archive }];
    }),
  );
  if (Object.keys(conceptualEntityEntries).length === 0) {
    throw new Error("rogue_6 未发现概念体 passiveScrapData");
  }

  return {
    realUtopia: { effects: realUtopiaEffects, archive: realUtopiaArchive },
    utopia: { effects: utopiaEffects, archive: utopiaArchive },
    conceptualEntities: {
      type: module.scrap.scrapTypeData.PASSIVE,
      entries: conceptualEntityEntries,
    },
  };
}
