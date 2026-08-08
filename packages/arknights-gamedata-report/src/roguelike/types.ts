import type {
  ArchiveCompScrap,
  ArchiveCompWeather,
  BuffElement,
  Choice,
  CustomizeDatum,
  CustomizeDatumDifficulty,
  Detail,
  DetailDifficulty,
  DetailRelic,
  ErDatum,
  Idea,
  Item,
  Module,
  PassiveScrapDatum,
  Rogue2__Mutation4,
  Stage,
  Topic,
} from "@arkrog/arknights-schema/types";

import type { OriginalGameDataObject } from "#shared/types";

/** `roguelike.json` 是全部主题入口原始对象组成的数组。 */
export type ExportedRoguelikeIndex = Topic[];

/** 包装器要求的最小藏品元数据；实际 GameData 其余字段会原样保留。 */
export interface RelicItemForWrap {
  id: string;
  name: string;
  description: string | null;
  usage: string | null;
  rarity: string;
  sortId: number;
  type: string;
  readonly [key: string]: unknown;
}

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

/** 构建包装藏品所需的单主题原始切片。 */
export interface WrappedRelicTopicDetail {
  /** 主题物品元数据。 */
  items: Record<string, RelicItemForWrap>;
  /** 主题直接藏品原始数据。 */
  relics: Record<string, DetailRelic>;
  /** 主题角色附加 buff 原始数据。 */
  charBuffData: Record<string, OriginalRelicCharacterBuffData>;
  /** 主题事件选项原始数据。 */
  choices?: Record<string, Choice>;
}

/** 导出前仅把 nullable usage 收窄为空字符串，其余 item 字段保持原值。 */
export type ExportedRelicItemData = Omit<RelicItemForWrap, "usage"> & { usage: string };

/** `items[itemId]` 与 `relics[itemId]` 合并后的藏品游戏数据。 */
export type MergedRelicData = ExportedRelicItemData & DetailRelic;

/** `relics.json` 中一件完整包装藏品。 */
export interface WrappedRelicItem {
  /** 藏品稳定 ID。 */
  id: string;
  /** 藏品显示名。 */
  name: string;
  /** 与既有前端规则相同的下划线分隔小写拼音。 */
  pinyin: string;
  /** GameData 原始 item 与直接藏品效果的合并对象。 */
  relic: MergedRelicData;
  /** GameData 中未改写的关联 charBuffData。 */
  charBuffs: OriginalRelicCharacterBuffData[];
  /** 用户选择的效果层数；报告统一从 0 开始。 */
  layer: number;
  /** 用户是否启用该藏品；报告统一从启用开始。 */
  enable: boolean;
}

/** `relics.json` 是当前主题全部藏品的包装数组。 */
export type ExportedRelicsReport = WrappedRelicItem[];

/** 难度相关条件藏品的来源类型。 */
export type RogueDifficultyConditionalRelicKind = "MODE_GRADE_GRANT" | "LEGACY_CHOICE";

/** 难度页使用的完整条件藏品关联；嵌套对象保持 GameData 原始值。 */
export interface ExportedRogueDifficultyConditionalRelic {
  /** 关联的稳定 ID。 */
  id: string;
  /** 模式/等级自动给予，或上一局遗留的开局支援选择。 */
  kind: RogueDifficultyConditionalRelicKind;
  /** 条件载体物品 ID。 */
  sourceId: string;
  /** 未改写的条件载体 item。 */
  sourceItem: RelicItemForWrap;
  /** 未改写的条件载体 relic。 */
  sourceRelic: DetailRelic;
  /** sourceRelic.buffs 中的零基下标。 */
  buffIndex: number;
  /** 原始 cond_mode；遗留支援为 null。 */
  modeDifficulty: string | null;
  /** 原始 cond_mode_grade 解析出的等级集合。 */
  grades: number[] | null;
  /** force_add_choice 指向的选项 ID。 */
  choiceId: string | null;
  /** 未改写的开局支援选项。 */
  choice: Choice | null;
  /** 被自动给予的藏品 ID。 */
  targetId: string;
  /** 未改写的目标藏品 item。 */
  targetItem: RelicItemForWrap;
  /** 未改写的目标藏品 relic。 */
  targetRelic: DetailRelic;
  /** 条件 buff 在原始主题表中的 JSONPath。 */
  jsonPath: string;
  /** 完整来源链中的全部原始路径。 */
  evidencePaths: string[];
}

/** `topic.json` 的主题入口与难度聚合结构。 */
export interface ExportedRoguelikeTopicReport {
  /** topics[topicId] 中未改写的主题入口对象。 */
  topic: Topic;
  /** details[topicId].difficulties 中的主难度定义。 */
  difficulties: DetailDifficulty[];
  /** customizeData[topicId].difficulties 中的主题机制难度扩展。 */
  customizedDifficulties: CustomizeDatumDifficulty[];
  /** 难度自动藏品与遗留支援选择的原始关联。 */
  difficultyConditionalRelics: ExportedRogueDifficultyConditionalRelic[];
}

/** `stage.json` 中一个替换 Level 的按 ID 字典。 */
export type ExportedReplacementLevelMap = Record<string, OriginalGameDataObject>;

/** `stage.json` 中一个关卡的完整聚合数据。 */
export interface ExportedRogueStageReportItem {
  /** details[topicId].stages 中未改写的关卡元数据。 */
  stage: Stage;
  /** stage.levelId 对应的完整主 Level JSON。 */
  level: OriginalGameDataObject;
  /** levelReplaceIds 对应的全部替换 Level，以 levelId 为键。 */
  replacementLevels: ExportedReplacementLevelMap;
}

/** `stage.json` 以主题内关卡 ID 为键。 */
export type ExportedRogueStageReport = Record<string, ExportedRogueStageReportItem>;

/** topic_ext.json 中排除已归入其他报告的 details 字段。 */
export type ExportedRoguelikeTopicExtDetails = Omit<
  Detail,
  "difficulties" | "stages" | "relics" | "items" | "charBuffData"
> & {
  /** 主题内全部非 RELIC 物品。 */
  items: Record<string, Item>;
  /** 未与任何藏品关联的 charBuffData。 */
  charBuffData: Record<string, OriginalRelicCharacterBuffData>;
};

/** topic_ext.json 中排除已归入 topic.json 的定制难度。 */
export type ExportedRoguelikeTopicExtCustomizeData = Omit<CustomizeDatum, "difficulties">;

/** `topic_ext.json` 的无损剩余主题数据。 */
export interface ExportedRoguelikeTopicExtReport {
  /** 除难度、关卡、藏品及关联数据外的完整 details。 */
  details: ExportedRoguelikeTopicExtDetails;
  /** 当前主题的完整 modules。 */
  modules: Module;
  /** 除难度外的完整 customizeData。 */
  customizeData: ExportedRoguelikeTopicExtCustomizeData;
}

/** 黑流树海实托邦的十类三阶段原始效果及档案关联。 */
export interface ExportedRogue6RealUtopiaData {
  /** `weather.mainWeatherData` 的三十条完整原始效果。 */
  effects: Record<string, ErDatum>;
  /** 仅保留上述效果的档案排序与解锁信息。 */
  archive: ArchiveCompWeather["weathers"];
}

/** 黑流树海乌托邦 Buff 及档案关联。 */
export interface ExportedRogue6UtopiaData {
  /** `details.rogue_6.variationData` 的九条完整原始效果。 */
  effects: Record<string, Rogue2__Mutation4>;
  /** 仅保留上述效果的档案排序与解锁信息。 */
  archive: ArchiveCompWeather["weathers"];
}

/** 单个概念体的展示、机制和档案数据。 */
export interface ExportedRogue6ConceptualEntity {
  /** `details.items` 中的完整名称、描述与用途。 */
  item: Item;
  /** `passiveScrapData` 中的触发节点、层数和效果。 */
  effect: PassiveScrapDatum;
  /** `archiveComp.scrap.scraps` 中的排序与解锁信息。 */
  archive: ArchiveCompScrap["scraps"][string];
}

/** 黑流树海六个概念体及其类型说明。 */
export interface ExportedRogue6ConceptualEntitiesData {
  /** `scrapTypeData.PASSIVE` 的概念体分类说明。 */
  type: Idea;
  /** 以概念体 ID 为键的完整关联数据。 */
  entries: Record<string, ExportedRogue6ConceptualEntity>;
}

/** `rogue_6/topic_ext.json` 仅导出的三类主题特殊系统数据。 */
export interface ExportedRogue6TopicExtReport {
  realUtopia: ExportedRogue6RealUtopiaData;
  utopia: ExportedRogue6UtopiaData;
  conceptualEntities: ExportedRogue6ConceptualEntitiesData;
}

/** topic_ext 对其他主题保留旧结构，黑流树海使用专用精简结构。 */
export type ExportedAnyRoguelikeTopicExtReport =
  | ExportedRoguelikeTopicExtReport
  | ExportedRogue6TopicExtReport;

/** 报告生成器读取的完整主题表主结构。 */
export interface RoguelikeTopicTableForReport {
  topics: Record<string, Topic>;
  details: Record<string, Detail>;
  modules: Record<string, Module>;
  customizeData: Record<string, CustomizeDatum>;
}
