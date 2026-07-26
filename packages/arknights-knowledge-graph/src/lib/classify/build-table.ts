import { classifyRelicItem } from "./classify-item.js";
import type { MechanicIndex } from "./mechanic-index.js";
import type { RelicZoneExport, TopicDetailForClassify } from "./types.js";

/** 构建主题乘区表的输入。 */
export interface BuildRelicZoneTableInput {
  /** 主题 ID。 */
  topicId: string;
  /** 主题显示名。 */
  topicName: string;
  /** 主题明细。 */
  detail: TopicDetailForClassify;
  /** 战斗模板索引。 */
  mechanicIndex: MechanicIndex;
  /** 可选覆盖生成时间（测试用）。 */
  generatedAt?: string;
}

/**
 * 纯 TS 构建整主题藏品乘区表。
 * 与 docs JSON / generated TS 共用同一预测路径。
 */
export function buildRelicZoneTable(input: BuildRelicZoneTableInput): RelicZoneExport {
  const relicItems = Object.values(input.detail.items)
    .filter((item) => item.type === "RELIC")
    .sort((left, right) => left.sortId - right.sortId || left.id.localeCompare(right.id));

  let effectCount = 0;
  let verifiedEffectCount = 0;
  let inferredEffectCount = 0;
  let unknownEffectCount = 0;
  let notApplicableEffectCount = 0;
  const exportedItems = relicItems.map((item) => {
    const exported = classifyRelicItem({
      topicId: input.topicId,
      item,
      detail: input.detail,
      mechanicIndex: input.mechanicIndex,
    });
    effectCount += exported.effects.length;
    for (const effect of exported.effects) {
      if (effect.evidenceStatuses.includes("verified")) verifiedEffectCount += 1;
      if (effect.evidenceStatuses.includes("inferred")) inferredEffectCount += 1;
      if (effect.classification === "unknown") unknownEffectCount += 1;
      if (effect.classification === "not_applicable") notApplicableEffectCount += 1;
    }
    return exported;
  });

  return {
    schemaVersion: 1,
    generatedAt: input.generatedAt ?? new Date().toISOString(),
    topic: { id: input.topicId, name: input.topicName },
    sources: [
      "ArknightsGameData/zh_CN/gamedata/excel/roguelike_topic_table.json",
      "ArknightsGameData/zh_CN/gamedata/battle/buff_template_data.json",
      "packages/arknights-schema/src",
      "packages/arknights-knowledge-graph/src/lib/domain/engine-rules.ts",
    ],
    scope: { itemType: "RELIC", itemCount: relicItems.length, effectCount },
    coverage: {
      verifiedEffectCount,
      inferredEffectCount,
      unknownEffectCount,
      notApplicableEffectCount,
    },
    items: exportedItems,
  };
}
