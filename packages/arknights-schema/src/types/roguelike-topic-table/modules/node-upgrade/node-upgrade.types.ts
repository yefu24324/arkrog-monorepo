/**

 * JSON 逻辑模块 `modules/node-upgrade/node-upgrade` 的显式类型。

 */

/**
 * roguelike_topic_table.json 中 Alchemy 的显式 TypeScript 定义。
 *
 * 字段语义应直接维护在类型与字段的源码注释中。
 */
export interface Alchemy {
  /** 原始数据字段 `nodeType`。 */
  nodeType: AlchemyNodeType;
  /** 原始数据字段 `sortId`。 */
  sortId: number;
  /** 原始数据字段 `permItemList`。 */
  permItemList: PermItemList[];
  /** 原始数据字段 `tempItemList`。 */
  tempItemList: TempItemList[];
}

/**
 * roguelike_topic_table.json 中 AlchemyNodeType 的显式 TypeScript 定义。
 *
 * 字段语义应直接维护在类型与字段的源码注释中。
 */
export type AlchemyNodeType = "ALCHEMY" | "BATTLE_SHOP" | "REST";

/**
 * roguelike_topic_table.json 中 CostItemId 的显式 TypeScript 定义。
 *
 * 字段语义应直接维护在类型与字段的源码注释中。
 */
export type CostItemId = "rogue_4_fragment_I_1";

/**
 * roguelike_topic_table.json 中 NodeUpgrade 的显式 TypeScript 定义。
 *
 * 字段语义应直接维护在类型与字段的源码注释中。
 */
export interface NodeUpgrade {
  /** 原始数据字段 `nodeUpgradeDataMap`。 */
  nodeUpgradeDataMap: NodeUpgradeDataMap;
}

/**
 * roguelike_topic_table.json 中 NodeUpgradeDataMap 的显式 TypeScript 定义。
 *
 * 字段语义应直接维护在类型与字段的源码注释中。
 */
export interface NodeUpgradeDataMap {
  /** 原始数据字段 `REST`。 */
  REST: Alchemy;
  /** 原始数据字段 `BATTLE_SHOP`。 */
  BATTLE_SHOP: Alchemy;
  /** 原始数据字段 `ALCHEMY`。 */
  ALCHEMY: Alchemy;
}

/**
 * roguelike_topic_table.json 中 PermItemList 的显式 TypeScript 定义。
 *
 * 字段语义应直接维护在类型与字段的源码注释中。
 */
export interface PermItemList {
  /** 原始数据字段 `upgradeId`。 */
  upgradeId: string;
  /** 原始数据字段 `nodeType`。 */
  nodeType: AlchemyNodeType;
  /** 原始数据字段 `nodeLevel`。 */
  nodeLevel: number;
  /** 原始数据字段 `costItemId`。 */
  costItemId: CostItemId;
  /** 原始数据字段 `costItemCount`。 */
  costItemCount: number;
  /** 原始数据字段 `desc`。 */
  desc: string;
  /** 原始数据字段 `nodeName`。 */
  nodeName: string;
}

/**
 * roguelike_topic_table.json 中 TempItemList 的显式 TypeScript 定义。
 *
 * 字段语义应直接维护在类型与字段的源码注释中。
 */
export interface TempItemList {
  /** 原始数据字段 `upgradeId`。 */
  upgradeId: string;
  /** 原始数据字段 `nodeType`。 */
  nodeType: AlchemyNodeType;
  /** 原始数据字段 `sortId`。 */
  sortId: number;
  /** 原始数据字段 `costItemId`。 */
  costItemId: CostItemId;
  /** 原始数据字段 `costItemCount`。 */
  costItemCount: number;
  /** 原始数据字段 `desc`。 */
  desc: string;
}
