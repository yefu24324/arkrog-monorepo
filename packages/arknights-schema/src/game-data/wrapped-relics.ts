/**
 * docs、frontend 与公式包共用的藏品包装数据契约。
 * `relic` 与 `charBuffs` 始终保留 GameData 原始对象，用户态字段只放在外层。
 */

import TinyPinyin from "tiny-pinyin";

import type { CharBuffData } from "../types/roguelike-topic-table/details/char-buff-data/char-buff-data.types.js";
import type { Choice } from "../types/roguelike-topic-table/details/choices/choices.types.js";
import type { BuffElement } from "../types/roguelike-topic-table/shared/buffs.types.js";

/** 包装器要求的最小藏品元数据；实际 GameData 其余字段会由对象展开原封保留。 */
export interface RelicItemForWrap {
  /** 藏品稳定 ID。 */
  id: string;
  /** 藏品显示名。 */
  name: string;
  /** 藏品描述。 */
  description: string | null;
  /** 效果与使用条件原文。 */
  usage: string | null;
  /** 游戏内稀有度。 */
  rarity: string;
  /** 游戏内排序值。 */
  sortId: number;
  /** 物品类型；只有 RELIC 会进入包装产物。 */
  type: string;
}

/** GameData `details[topicId].relics[itemId]` 中的原始藏品效果对象。 */
export interface OriginalRelicData {
  /** GameData 原始藏品 ID。 */
  id: string;
  /** GameData 原始直接 buff 列表。 */
  buffs: BuffElement[];
}

/** 导出前仅把 nullable usage 收窄为空字符串，其余 item 字段保持原值。 */
export type ExportedRelicItemData = Omit<RelicItemForWrap, "usage"> & { usage: string };

/** `items[itemId]` 与 `relics[itemId]` 合并后的藏品游戏数据。 */
export type MergedRelicData = ExportedRelicItemData & OriginalRelicData;

/** GameData `charBuffData` 中与藏品关联的单条原始对象。 */
export interface OriginalRelicCharacterBuffData {
  /** charBuffData 自身 ID，不是藏品 ID。 */
  id: string;
  /** 直接关联的藏品 ID；部分数据使用 iconId 关联。 */
  relatedItemId: string | null;
  /** 可回退关联藏品的原始图标 ID。 */
  iconId: string;
  /** 原始角色 buff 列表。 */
  buffs?: BuffElement[];
  /** 保留 GameData 其余原始字段，例如名称和说明。 */
  readonly [key: string]: unknown;
}

/** 公式、docs 与 frontend 共同消费的单件包装藏品。 */
export interface WrappedRelicItem {
  /** 藏品稳定 ID。 */
  id: string;
  /** 藏品显示名。 */
  name: string;
  /** 与 backend 相同规则生成的下划线分隔小写拼音。 */
  pinyin: string;
  /** GameData 原始 item 与直接藏品效果的合并对象；所有字段值保持原样。 */
  relic: MergedRelicData;
  /** GameData 中未改写的关联 charBuffData；一件藏品允许关联多条。 */
  charBuffs: OriginalRelicCharacterBuffData[];
  /** 用户选择的效果层数；生成产物统一从 0 开始。 */
  layer: number;
  /** 用户是否启用该藏品；被选中后默认启用。 */
  enable: boolean;
}

/** 单主题包装藏品 JSON 的稳定顶层结构。 */
export interface WrappedRelicTopicArtifact {
  /** 包装 JSON 格式版本。 */
  schemaVersion: 4;
  /** 原始 roguelike_topic_table.json 的 SHA-256；同源数据生成结果可复现。 */
  sourceSha256: string;
  /** 集成战略主题。 */
  topic: { id: string; name: string };
  /** 原始生产数据路径。 */
  sources: string[];
  /** 当前主题全部 RELIC 包装列表。 */
  items: WrappedRelicItem[];
}

/** 构建包装列表所需的 GameData 主题切片。 */
export interface WrappedRelicTopicDetail {
  /** 主题物品元数据。 */
  items: Record<string, RelicItemForWrap>;
  /** 主题直接藏品原始数据。 */
  relics: Record<string, OriginalRelicData>;
  /** 主题角色附加 buff 原始数据；显式字段类型在导出边界收窄成统一结构。 */
  charBuffData: CharBuffData | Record<string, OriginalRelicCharacterBuffData>;
  /** 主题事件选项原始数据；难度支援链会从 force_add_choice 追踪到目标藏品。 */
  choices?: Record<string, Choice>;
}

/** 判断一条原始 charBuffData 是否属于指定藏品。 */
function characterBuffBelongsToRelic(
  characterBuff: OriginalRelicCharacterBuffData,
  relicId: string,
): boolean {
  return characterBuff.relatedItemId === relicId || characterBuff.iconId === relicId;
}

/**
 * 从 GameData 构建单主题包装藏品列表。
 * 函数只组装外层结构，`relic` 与 `charBuffs` 直接复用输入对象引用。
 */
export function buildWrappedRelicTopicArtifact(input: {
  /** 主题 ID，例如 rogue_6。 */
  topicId: string;
  /** 主题显示名。 */
  topicName: string;
  /** GameData 主题明细。 */
  detail: WrappedRelicTopicDetail;
  /** 原始 roguelike_topic_table.json 的 SHA-256。 */
  sourceSha256: string;
}): WrappedRelicTopicArtifact {
  const characterBuffs = Object.values(input.detail.charBuffData) as OriginalRelicCharacterBuffData[];
  const items = Object.values(input.detail.items)
    .filter((item) => item.type === "RELIC" && Boolean(input.detail.relics[item.id]))
    .sort((left, right) => left.sortId - right.sortId || left.id.localeCompare(right.id))
    .map((item): WrappedRelicItem => {
      const originalRelic = input.detail.relics[item.id]!;
      if (originalRelic.id !== item.id) {
        throw new Error(`藏品 item/relic ID 不一致：${item.id} !== ${originalRelic.id}`);
      }
      return {
        id: item.id,
        name: item.name,
        // 与 backend c68306d 的生产规则保持一致：下划线分隔并统一小写。
        pinyin: TinyPinyin.convertToPinyin(item.name, "_").toLowerCase(),
        // 两张 GameData 表仅同值 id 重叠；usage 的 null 按导出契约归一为空字符串。
        relic: { ...item, usage: item.usage ?? "", ...originalRelic },
        // 保留一对多关系，并保持 GameData 中的原始遍历顺序。
        charBuffs: characterBuffs.filter((entry) => characterBuffBelongsToRelic(entry, item.id)),
        layer: 0,
        enable: true,
      };
    });

  return {
    schemaVersion: 4,
    sourceSha256: input.sourceSha256,
    topic: { id: input.topicId, name: input.topicName },
    sources: ["ArknightsGameData/zh_CN/gamedata/excel/roguelike_topic_table.json"],
    items,
  };
}
