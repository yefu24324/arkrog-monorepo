/**
 * 生成 `roguelike/{topicId}/relics.json`。
 * 数据来源：roguelike_topic_table.json 的 details.items、details.relics 与
 * details.charBuffData。
 */

import TinyPinyin from "tiny-pinyin";

import type {
  ExportedRelicsReport,
  OriginalRelicCharacterBuffData,
  WrappedRelicTopicDetail,
} from "#roguelike/types";

/** 判断一条原始 charBuffData 是否属于指定藏品。 */
export function characterBuffBelongsToRelic(
  characterBuff: OriginalRelicCharacterBuffData,
  relicId: string,
): boolean {
  return characterBuff.relatedItemId === relicId || characterBuff.iconId === relicId;
}

/** 从 GameData 构建一份不带主题外层包装的藏品报告数组。 */
export function buildWrappedRelicItems(detail: WrappedRelicTopicDetail): ExportedRelicsReport {
  const characterBuffs = Object.values(detail.charBuffData);
  return Object.values(detail.items)
    .filter((item) => item.type === "RELIC" && Boolean(detail.relics[item.id]))
    .sort((left, right) => left.sortId - right.sortId || left.id.localeCompare(right.id))
    .map((item) => {
      const originalRelic = detail.relics[item.id]!;
      if (originalRelic.id !== item.id) {
        throw new Error(`藏品 item/relic ID 不一致：${item.id} !== ${originalRelic.id}`);
      }
      return {
        id: item.id,
        name: item.name,
        pinyin: TinyPinyin.convertToPinyin(item.name, "_").toLowerCase(),
        relic: { ...item, usage: item.usage ?? "", ...originalRelic },
        charBuffs: characterBuffs.filter((entry) =>
          characterBuffBelongsToRelic(entry, item.id),
        ),
        layer: 0,
        enable: true,
      };
    });
}
