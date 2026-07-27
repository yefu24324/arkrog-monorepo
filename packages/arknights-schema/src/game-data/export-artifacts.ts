/** relics:export 生成的全部 JSON 产物契约。 */

import type { Stage } from "../types/roguelike-topic-table/details/stages/stages.types.js";
import type { DetailDifficulty } from "../types/roguelike-topic-table/details/difficulties/difficulties.types.js";
import type { CustomizeDatumDifficulty } from "../types/roguelike-topic-table/customize-data/difficulties/difficulties.types.js";
import type { Topic } from "../types/roguelike-topic-table/topics/topics.types.js";
import type { WrappedRelicTopicArtifact } from "./wrapped-relics.js";
import type { ExportedRogueDifficultyConditionalRelic } from "./difficulty-conditional-relics.js";

/** 尚未建立专用 Schema 的 GameData 原始 JSON 对象。 */
export interface OriginalGameDataObject {
  /** 原始对象允许保留任意游戏字段，导出器不得改写其值。 */
  readonly [key: string]: unknown;
}

/** 包装藏品主题文件的统一导出别名。 */
export type ExportedRelicTopicArtifact = WrappedRelicTopicArtifact;

/** topics[topicId] 中未改写的主题入口对象。 */
export type OriginalRoguelikeTopicData = Topic;

/** details[topicId].difficulties 中未改写的主难度数据。 */
export type OriginalRogueDifficultyData = DetailDifficulty;

/** customizeData[topicId].difficulties 中未改写的主题机制难度扩展。 */
export type OriginalRogueCustomizedDifficultyData = CustomizeDatumDifficulty;

/** `roguelike/topics/{topicId}.json` 的主题与完整难度聚合结构。 */
export interface ExportedRoguelikeTopicArtifact {
  /** 主题导出格式版本。 */
  schemaVersion: 3;
  /** topics[topicId] 中未改写的主题入口对象。 */
  topic: OriginalRoguelikeTopicData;
  /** details[topicId].difficulties 中的主难度定义。 */
  difficulties: OriginalRogueDifficultyData[];
  /** customizeData[topicId].difficulties 中按等级补充的主题机制参数。 */
  customizedDifficulties: OriginalRogueCustomizedDifficultyData[];
  /** 模式/等级自动藏品与遗留支援选择的完整原始关联。 */
  difficultyConditionalRelics: ExportedRogueDifficultyConditionalRelic[];
  /** 组成该文件的原始 GameData 路径。 */
  sources: string[];
}

/** details[topicId].stages 中一条未改写的关卡元数据。 */
export type OriginalRogueStageData = Stage;

/** 关卡文件中一个主 level 或替换 level 的完整原始数据。 */
export interface ExportedRogueLevelData {
  /** GameData levels 目录下不含扩展名的原始 levelId。 */
  levelId: string;
  /** level JSON 原始对象。 */
  level: OriginalGameDataObject;
}

/** `roguelike/stages/{topicId}/{stageId}.json` 的聚合结构。 */
export interface ExportedRogueStageArtifact {
  /** 关卡导出格式版本。 */
  schemaVersion: 1;
  /** roguelike_topic_table 中未改写的主题对象。 */
  topic: Topic;
  /** details[topicId].stages 中未改写的关卡元数据。 */
  stage: Stage;
  /** stage.levelId 对应的完整主 level JSON。 */
  level: OriginalGameDataObject;
  /** levelReplaceIds 对应的全部替换 level JSON。 */
  replacementLevels: ExportedRogueLevelData[];
  /** 组成该文件的原始 GameData 路径。 */
  sources: string[];
}

/** character_table 属性插值使用的单个等级关键帧。 */
export interface ExportedOperatorAttributeFrame extends OriginalGameDataObject {
  /** 当前属性关键帧的等级。 */
  level?: number;
  /** 当前等级的完整基础属性。 */
  data?: OriginalGameDataObject;
}

/** character_table 中一个精英化阶段的完整原始数据。 */
export interface ExportedOperatorPhaseData extends OriginalGameDataObject {
  /** 该阶段用于插值的全部属性关键帧。 */
  attributesKeyFrames?: ExportedOperatorAttributeFrame[];
}

/** character_table 或 char_patch_table 中一条完整角色原始数据。 */
export interface ExportedOperatorCharacterData extends OriginalGameDataObject {
  /** 干员显示名。 */
  name?: string;
  /** 职业枚举。 */
  profession?: string;
  /** 星级枚举。 */
  rarity?: string;
  /** 不可获得角色不会进入干员目录。 */
  isNotObtainable?: boolean;
  /** 干员引用的技能及解锁元数据。 */
  skills?: Array<{ skillId?: string }>;
  /** 子职业稳定 ID。 */
  subProfessionId?: string | null;
  /** 近战或远程部署位。 */
  position?: string | null;
  /** 召唤物展示映射；非召唤干员通常为 null。 */
  displayTokenDict?: OriginalGameDataObject | null;
  /** 全部精英化阶段与等级属性关键帧。 */
  phases?: ExportedOperatorPhaseData[];
}

/** uniequip_table 中一个模组的展示数据与可选战斗阶段。 */
export interface ExportedOperatorModuleData {
  /** 模组稳定 ID。 */
  id: string;
  /** uniequip_table.equipDict 中的完整原始对象。 */
  data: OriginalGameDataObject;
  /** battle_equip_table 中的完整战斗对象；初始职业证章为 null。 */
  combat: OriginalGameDataObject | null;
}

/** 一个基础干员及其全部职业形态 patch 数据。 */
export interface ExportedOperatorPatchData {
  /** 基础形态 ID。 */
  baseId: string;
  /** char_patch_table.infos 中的原始形态索引。 */
  info: OriginalGameDataObject;
  /** patch 形态 ID 到完整角色原始对象。 */
  characters: Record<string, ExportedOperatorCharacterData>;
  /** patch 形态 ID 到原始解锁条件。 */
  unlockConditions: Record<string, unknown>;
  /** 基础及 patch 形态 ID 到原始展示信息。 */
  details: Record<string, unknown>;
}

/** `operators/{operatorId}.json` 的完整战斗数据聚合结构。 */
export interface ExportedOperatorArtifact {
  /** 干员导出格式版本。 */
  schemaVersion: 1;
  /** 基础干员稳定 ID。 */
  id: string;
  /** character_table 中未改写的完整角色对象，包含等级属性帧。 */
  character: ExportedOperatorCharacterData;
  /** 技能 ID 到 skill_table 完整技能及全部等级。 */
  skills: Record<string, OriginalGameDataObject>;
  /** 基础形态及 patch 形态的全部模组。 */
  modules: ExportedOperatorModuleData[];
  /** 职业形态 patch；没有形态切换时为 null。 */
  patch: ExportedOperatorPatchData | null;
  /** 组成该文件的原始 GameData 路径。 */
  sources: string[];
}

/** operators/index.json 中的轻量干员目录项。 */
export interface ExportedOperatorIndexItem {
  /** 基础干员稳定 ID。 */
  id: string;
  /** 干员显示名。 */
  name: string;
  /** 职业枚举。 */
  profession: string;
  /** 星级枚举。 */
  rarity: string;
}

/** `operators/index.json` 的轻量目录结构。 */
export interface ExportedOperatorIndexArtifact {
  /** 干员索引格式版本。 */
  schemaVersion: 1;
  /** 导出的干员总数。 */
  count: number;
  /** 按中文名稳定排序的干员目录。 */
  items: ExportedOperatorIndexItem[];
}

/** relics:export 固定包含的四类数据。 */
export type RelicsExportSection = "relics" | "topics" | "stages" | "operators";

/** relics:export 控制台结果中的单类数据摘要。 */
export interface RelicsExportSectionResult {
  /** 数据分类。 */
  scope: RelicsExportSection;
  /** 写入的 JSON 文件数量。 */
  fileCount: number;
  /** 该分类的主要业务对象数量。 */
  itemCount: number;
  /** 实际输出目录。 */
  outputPath: string;
}

/** relics:export 控制台输出的完整结果。 */
export interface RelicsExportResult {
  /** 本次导出的共同根目录。 */
  outputRoot: string;
  /** 固定按藏品、主题、关卡、干员排列的结果摘要。 */
  results: RelicsExportSectionResult[];
}
