import type { OriginalGameDataObject } from "#shared/types";

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
  /** 干员或召唤物显示名。 */
  name?: string;
  /** 职业枚举。 */
  profession?: string;
  /** 星级枚举。 */
  rarity?: string;
  /** 不可获得角色不会进入干员索引。 */
  isNotObtainable?: boolean;
  /** 角色引用的技能及解锁元数据。 */
  skills?: Array<{ skillId?: string | null }>;
  /** 角色直接引用的召唤物 ID 字典。 */
  displayTokenDict?: Record<string, boolean> | null;
  /** 子职业稳定 ID。 */
  subProfessionId?: string | null;
  /** 近战或远程部署位。 */
  position?: string | null;
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

/** `operators/{operatorId}.json` 的完整战斗与养成聚合结构。 */
export interface ExportedOperatorArtifact {
  /** 基础干员稳定 ID。 */
  id: string;
  /** character_table 中未改写的完整角色对象。 */
  character: ExportedOperatorCharacterData;
  /** 干员、职业形态与召唤物引用的完整技能数据。 */
  skills: Record<string, OriginalGameDataObject>;
  /** 基础形态及 patch 形态的全部模组。 */
  modules: ExportedOperatorModuleData[];
  /** 职业形态 patch；没有形态切换时为 null。 */
  patch: ExportedOperatorPatchData | null;
  /** displayTokenDict 引用且能从 character_table 找到的完整召唤物。 */
  tokens: Record<string, ExportedOperatorCharacterData>;
  /** GameData 声明引用但 character_table 中缺失的召唤物 ID。 */
  missingTokenIds: string[];
}

/** `operators.json` 中的一条轻量干员信息。 */
export interface ExportedOperatorIndexItem {
  /** 基础干员稳定 ID。 */
  id: string;
  /** 干员显示名。 */
  name: string;
  /** 职业枚举。 */
  profession: string;
  /** 子职业稳定 ID。 */
  subProfessionId: string | null;
  /** 星级枚举。 */
  rarity: string;
  /** 近战或远程部署位。 */
  position: string | null;
}

/** `operators.json` 是可直接遍历的轻量干员数组。 */
export type ExportedOperatorIndex = ExportedOperatorIndexItem[];

/** char_patch_table 中一个基础干员的形态索引。 */
export interface CharacterPatchInfo extends OriginalGameDataObject {
  /** 基础形态及全部职业形态 ID。 */
  tmplIds?: string[];
}

/** char_patch_table 的完整关联表。 */
export interface CharacterPatchTable {
  /** 基础干员到全部形态的索引。 */
  infos: Record<string, CharacterPatchInfo>;
  /** 附加职业形态的完整角色数据。 */
  patchChars: Record<string, ExportedOperatorCharacterData>;
  /** 附加职业形态解锁条件。 */
  unlockConds: Record<string, unknown>;
  /** 每种职业形态的展示与排序信息。 */
  patchDetailInfoList: Record<string, unknown>;
}

/** uniequip_table 中关联干员与模组所需的字段。 */
export interface UniEquipTable {
  /** 模组 ID 到完整展示、解锁和消耗数据。 */
  equipDict: Record<string, OriginalGameDataObject>;
  /** 干员或职业形态到模组 ID 列表。 */
  charEquip: Record<string, string[]>;
}
