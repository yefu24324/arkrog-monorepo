/** GameData 中导出器使用的最小黑板结构。 */
export interface BlackboardValue {
  /** 黑板参数名。 */
  key: string;
  /** 数值参数。 */
  value: number;
  /** 字符串参数。 */
  valueStr: string | null;
}

/** GameData 中可由藏品或角色附加表提供的 buff。 */
export interface BuffElement {
  /** buff 类型。 */
  key: string;
  /** buff 黑板。 */
  blackboard: BlackboardValue[];
}

/** 部分藏品通过 charBuffData 间接给指定干员附加效果。 */
export interface CharacterBuff {
  /** 角色 buff ID。 */
  id: string;
  /** 可直接关联的藏品 ID。 */
  relatedItemId: string | null;
  /** 前八种新典训使用藏品 ID 作为图标 ID。 */
  iconId: string;
  /** 实际战斗 buff。 */
  buffs?: BuffElement[];
}

/** GameData 中导出器使用的最小藏品结构。 */
export interface RelicItem {
  /** 藏品 ID。 */
  id: string;
  /** 藏品名称。 */
  name: string;
  /** 效果及条件原文。 */
  usage: string | null;
  /** 藏品背景描述。 */
  description: string | null;
  /** 稀有度。 */
  rarity: string;
  /** 游戏内排序值。 */
  sortId: number;
  /** 物品类型。 */
  type: string;
}

/** JSON 中单个乘区预测的稳定结构。 */
export interface ExportedZonePrediction {
  /** 乘区 ID。 */
  id: string;
  /** 公式符号。 */
  symbol: string;
  /** 乘区中文名。 */
  name: string;
  /** 公式位置。 */
  formula: string;
  /** verified 或 inferred。 */
  status: string;
  /** 判定原因。 */
  reason: string;
  /** 命中的语义规则 ID。 */
  ruleId: string;
  /** 原始效果和 Action 的证据路径。 */
  evidencePaths: string[];
}

/** JSON 中一条藏品 buff 的完整生产预测。 */
export interface ExportedRelicEffect {
  /** 图谱 Effect 稳定 ID。 */
  effectId: string;
  /** relics 或具体 charBuffData 来源。 */
  source: string;
  /** 原始 buffs 数组的零基下标。 */
  buffIndex: number;
  /** buff 载体类型。 */
  key: string;
  /** 原始结构化黑板。 */
  blackboard: BlackboardValue[];
  /** 便于搜索和展示的黑板摘要。 */
  parameters: string;
  /** 战斗模板事实。 */
  mechanic: {
    /** 模板名。 */
    name: string;
    /** 模板事件。 */
    events: string[];
    /** 模板中的 Action 组件类型。 */
    componentTypes: string[];
  };
  /** 从事件和选择器得到的机器可见生效条件。 */
  condition: string;
  /** predicted、unknown 或 not_applicable。 */
  classification: "predicted" | "unknown" | "not_applicable";
  /** 当前效果命中的证据等级。 */
  evidenceStatuses: string[];
  /** 一个效果可以同时影响多个乘区。 */
  predictions: ExportedZonePrediction[];
  /** 未得到乘区时的明确原因。 */
  unclassifiedReason: string | null;
  /** 原始 GameData JSON 路径。 */
  jsonPath: string;
}

/** JSON 中一件藏品及其全部直接、间接效果。 */
export interface ExportedRelic {
  /** 藏品稳定 ID。 */
  id: string;
  /** 游戏内名称。 */
  name: string;
  /** 稀有度。 */
  rarity: string;
  /** 游戏内排序值。 */
  sortId: number;
  /** 效果与条件原文。 */
  usage: string | null;
  /** 背景描述。 */
  description: string | null;
  /** 机器可见生效条件去重集合。 */
  conditions: string[];
  /** 当前藏品涉及的去重乘区。 */
  zones: Array<{ id: string; symbol: string; name: string }>;
  /** 当前藏品的 buff 数量。 */
  effectCount: number;
  /** 当前藏品的全部 buff 预测。 */
  effects: ExportedRelicEffect[];
}

/** 主题藏品乘区 JSON 的顶层格式。 */
export interface RelicZoneExport {
  /** 导出格式版本，字段结构变化时递增。 */
  schemaVersion: 1;
  /** ISO 8601 生成时间。 */
  generatedAt: string;
  /** 集成战略主题。 */
  topic: { id: string; name: string };
  /** 生产预测实际使用的数据源。 */
  sources: string[];
  /** 导出口径和总数。 */
  scope: { itemType: "RELIC"; itemCount: number; effectCount: number };
  /** 乘区预测覆盖统计。 */
  coverage: {
    /** 至少含一个 verified 预测的效果数。 */
    verifiedEffectCount: number;
    /** 至少含一个 inferred 预测的效果数。 */
    inferredEffectCount: number;
    /** 涉及战斗数值但尚未映射的效果数。 */
    unknownEffectCount: number;
    /** 明确不进入伤害公式的效果数。 */
    notApplicableEffectCount: number;
  };
  /** 主题内全部 RELIC 藏品。 */
  items: ExportedRelic[];
}

/** 主题明细中 classify 需要的最小切片。 */
export interface TopicDetailForClassify {
  /** 主题物品表。 */
  items: Record<string, RelicItem>;
  /** 直接藏品 buff。 */
  relics: Record<string, { buffs: BuffElement[] }>;
  /** 关联角色 buff。 */
  charBuffData: Record<string, CharacterBuff>;
}
