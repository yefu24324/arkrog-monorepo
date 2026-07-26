/**

 * JSON 逻辑模块 `customize-data/developments/developments` 的显式类型。

 */

import type { BuffDisplayInfo } from "../../shared/buffs.types.js";

import type { EffectType } from "../../shared/common-enums.types.js";

import type { EnrollId } from "../../shared/rogue-enums.types.js";

import type { Rogue3__Difficulty1 } from "../../shared/rogue-variants.types.js";

/**
 * roguelike_topic_table.json 中 BuffIconId 的显式 TypeScript 定义。
 *
 * 字段语义应直接维护在类型与字段的源码注释中。
 */
export type BuffIconId =
  | "rogue_1_grow_icon_attack"
  | "rogue_1_grow_icon_def"
  | "rogue_1_grow_icon_hp"
  | "rogue_1_grow_icon_gold"
  | "rogue_1_grow_icon_mixed";

/**
 * roguelike_topic_table.json 中 Developments 的显式 TypeScript 定义。
 *
 * 字段语义应直接维护在类型与字段的源码注释中。
 */
export interface Developments {
  /** 原始数据字段 `outbuff_1`。 */
  outbuff_1?: Outbuff;
  /** 原始数据字段 `outbuff_2`。 */
  outbuff_2?: Outbuff;
  /** 原始数据字段 `outbuff_3`。 */
  outbuff_3?: Outbuff;
  /** 原始数据字段 `outbuff_4`。 */
  outbuff_4?: Outbuff;
  /** 原始数据字段 `outbuff_5`。 */
  outbuff_5?: Outbuff;
  /** 原始数据字段 `outbuff_6`。 */
  outbuff_6?: Outbuff;
  /** 原始数据字段 `outbuff_7`。 */
  outbuff_7?: Outbuff;
  /** 原始数据字段 `outbuff_8`。 */
  outbuff_8?: Outbuff;
  /** 原始数据字段 `outbuff_9`。 */
  outbuff_9?: Outbuff;
  /** 原始数据字段 `outbuff_10`。 */
  outbuff_10?: Outbuff;
  /** 原始数据字段 `outbuff_11`。 */
  outbuff_11?: Outbuff;
  /** 原始数据字段 `outbuff_12`。 */
  outbuff_12?: Outbuff;
  /** 原始数据字段 `outbuff_13`。 */
  outbuff_13?: Outbuff;
  /** 原始数据字段 `outbuff_14`。 */
  outbuff_14?: Outbuff;
  /** 原始数据字段 `outbuff_15`。 */
  outbuff_15?: Outbuff;
  /** 原始数据字段 `outbuff_16`。 */
  outbuff_16?: Outbuff;
  /** 原始数据字段 `outbuff_17`。 */
  outbuff_17?: Outbuff;
  /** 原始数据字段 `outbuff_18`。 */
  outbuff_18?: Outbuff;
  /** 原始数据字段 `outbuff_19`。 */
  outbuff_19?: Outbuff;
  /** 原始数据字段 `outbuff_20`。 */
  outbuff_20?: Outbuff;
  /** 原始数据字段 `outbuff_21`。 */
  outbuff_21?: Outbuff;
  /** 原始数据字段 `outbuff_22`。 */
  outbuff_22?: Outbuff;
  /** 原始数据字段 `outbuff_23`。 */
  outbuff_23?: Outbuff;
  /** 原始数据字段 `outbuff_24`。 */
  outbuff_24?: Outbuff;
  /** 原始数据字段 `outbuff_25`。 */
  outbuff_25?: Outbuff;
  /** 原始数据字段 `outbuff_26`。 */
  outbuff_26?: Outbuff;
  /** 原始数据字段 `outbuff_27`。 */
  outbuff_27?: Outbuff;
  /** 原始数据字段 `outbuff_28`。 */
  outbuff_28?: Outbuff;
  /** 原始数据字段 `outbuff_29`。 */
  outbuff_29?: Outbuff;
  /** 原始数据字段 `outbuff_30`。 */
  outbuff_30?: Outbuff;
  /** 原始数据字段 `outbuff_31`。 */
  outbuff_31?: Outbuff;
  /** 原始数据字段 `outbuff_32`。 */
  outbuff_32?: Outbuff;
  /** 原始数据字段 `outbuff_33`。 */
  outbuff_33?: Outbuff;
  /** 原始数据字段 `outbuff_34`。 */
  outbuff_34?: Outbuff;
  /** 原始数据字段 `outbuff_35`。 */
  outbuff_35?: Outbuff;
  /** 原始数据字段 `outbuff_36`。 */
  outbuff_36?: Outbuff;
  /** 原始数据字段 `outbuff_37`。 */
  outbuff_37?: Outbuff;
  /** 原始数据字段 `outbuff_38`。 */
  outbuff_38?: Outbuff;
  /** 原始数据字段 `outbuff_39`。 */
  outbuff_39?: Outbuff;
  /** 原始数据字段 `outbuff_40`。 */
  outbuff_40?: Outbuff;
  /** 原始数据字段 `outbuff_41`。 */
  outbuff_41?: Outbuff;
  /** 原始数据字段 `outbuff_42`。 */
  outbuff_42?: Outbuff;
  /** 原始数据字段 `outbuff_43`。 */
  outbuff_43?: Outbuff;
  /** 原始数据字段 `outbuff_44`。 */
  outbuff_44?: Outbuff;
  /** 原始数据字段 `outbuff_45`。 */
  outbuff_45?: Outbuff;
  /** 原始数据字段 `rogue_2_outbuff_1`。 */
  rogue_2_outbuff_1?: Rogue2__Outbuff;
  /** 原始数据字段 `rogue_2_outbuff_2`。 */
  rogue_2_outbuff_2?: Rogue2__Outbuff;
  /** 原始数据字段 `rogue_2_outbuff_3`。 */
  rogue_2_outbuff_3?: Rogue2__Outbuff;
  /** 原始数据字段 `rogue_2_outbuff_4`。 */
  rogue_2_outbuff_4?: Rogue2__Outbuff;
  /** 原始数据字段 `rogue_2_outbuff_5`。 */
  rogue_2_outbuff_5?: Rogue2__Outbuff;
  /** 原始数据字段 `rogue_2_outbuff_6`。 */
  rogue_2_outbuff_6?: Rogue2__Outbuff;
  /** 原始数据字段 `rogue_2_outbuff_7`。 */
  rogue_2_outbuff_7?: Rogue2__Outbuff;
  /** 原始数据字段 `rogue_2_outbuff_8`。 */
  rogue_2_outbuff_8?: Rogue2__Outbuff;
  /** 原始数据字段 `rogue_2_outbuff_9`。 */
  rogue_2_outbuff_9?: Rogue2__Outbuff;
  /** 原始数据字段 `rogue_2_outbuff_10`。 */
  rogue_2_outbuff_10?: Rogue2__Outbuff;
  /** 原始数据字段 `rogue_2_outbuff_11`。 */
  rogue_2_outbuff_11?: Rogue2__Outbuff;
  /** 原始数据字段 `rogue_2_outbuff_12`。 */
  rogue_2_outbuff_12?: Rogue2__Outbuff;
  /** 原始数据字段 `rogue_2_outbuff_13`。 */
  rogue_2_outbuff_13?: Rogue2__Outbuff;
  /** 原始数据字段 `rogue_2_outbuff_14`。 */
  rogue_2_outbuff_14?: Rogue2__Outbuff;
  /** 原始数据字段 `rogue_2_outbuff_15`。 */
  rogue_2_outbuff_15?: Rogue2__Outbuff;
  /** 原始数据字段 `rogue_2_outbuff_16`。 */
  rogue_2_outbuff_16?: Rogue2__Outbuff;
  /** 原始数据字段 `rogue_2_outbuff_17`。 */
  rogue_2_outbuff_17?: Rogue2__Outbuff;
  /** 原始数据字段 `rogue_2_outbuff_18`。 */
  rogue_2_outbuff_18?: Rogue2__Outbuff;
  /** 原始数据字段 `rogue_2_outbuff_19`。 */
  rogue_2_outbuff_19?: Rogue2__Outbuff;
  /** 原始数据字段 `rogue_2_outbuff_20`。 */
  rogue_2_outbuff_20?: Rogue2__Outbuff;
  /** 原始数据字段 `rogue_2_outbuff_21`。 */
  rogue_2_outbuff_21?: Rogue2__Outbuff;
  /** 原始数据字段 `rogue_2_outbuff_22`。 */
  rogue_2_outbuff_22?: Rogue2__Outbuff;
  /** 原始数据字段 `rogue_2_outbuff_23`。 */
  rogue_2_outbuff_23?: Rogue2__Outbuff;
  /** 原始数据字段 `rogue_2_outbuff_24`。 */
  rogue_2_outbuff_24?: Rogue2__Outbuff;
  /** 原始数据字段 `rogue_2_outbuff_25`。 */
  rogue_2_outbuff_25?: Rogue2__Outbuff;
  /** 原始数据字段 `rogue_2_outbuff_26`。 */
  rogue_2_outbuff_26?: Rogue2__Outbuff;
  /** 原始数据字段 `rogue_2_outbuff_27`。 */
  rogue_2_outbuff_27?: Rogue2__Outbuff;
  /** 原始数据字段 `rogue_2_outbuff_28`。 */
  rogue_2_outbuff_28?: Rogue2__Outbuff;
  /** 原始数据字段 `rogue_2_outbuff_29`。 */
  rogue_2_outbuff_29?: Rogue2__Outbuff;
  /** 原始数据字段 `rogue_2_outbuff_30`。 */
  rogue_2_outbuff_30?: Rogue2__Outbuff;
  /** 原始数据字段 `rogue_2_outbuff_31`。 */
  rogue_2_outbuff_31?: Rogue2__Outbuff;
  /** 原始数据字段 `rogue_2_outbuff_32`。 */
  rogue_2_outbuff_32?: Rogue2__Outbuff;
  /** 原始数据字段 `rogue_2_outbuff_33`。 */
  rogue_2_outbuff_33?: Rogue2__Outbuff;
  /** 原始数据字段 `rogue_2_outbuff_34`。 */
  rogue_2_outbuff_34?: Rogue2__Outbuff;
  /** 原始数据字段 `rogue_2_outbuff_35`。 */
  rogue_2_outbuff_35?: Rogue2__Outbuff;
  /** 原始数据字段 `rogue_2_outbuff_36`。 */
  rogue_2_outbuff_36?: Rogue2__Outbuff;
  /** 原始数据字段 `rogue_2_outbuff_37`。 */
  rogue_2_outbuff_37?: Rogue2__Outbuff;
  /** 原始数据字段 `rogue_2_outbuff_38`。 */
  rogue_2_outbuff_38?: Rogue2__Outbuff;
  /** 原始数据字段 `rogue_2_outbuff_39`。 */
  rogue_2_outbuff_39?: Rogue2__Outbuff;
  /** 原始数据字段 `rogue_2_outbuff_40`。 */
  rogue_2_outbuff_40?: Rogue2__Outbuff;
  /** 原始数据字段 `rogue_2_outbuff_41`。 */
  rogue_2_outbuff_41?: Rogue2__Outbuff;
  /** 原始数据字段 `rogue_2_outbuff_42`。 */
  rogue_2_outbuff_42?: Rogue2__Outbuff;
  /** 原始数据字段 `rogue_2_outbuff_43`。 */
  rogue_2_outbuff_43?: Rogue2__Outbuff;
  /** 原始数据字段 `rogue_2_outbuff_44`。 */
  rogue_2_outbuff_44?: Rogue2__Outbuff;
  /** 原始数据字段 `rogue_2_outbuff_45`。 */
  rogue_2_outbuff_45?: Rogue2__Outbuff;
  /** 原始数据字段 `rogue_2_outbuff_46`。 */
  rogue_2_outbuff_46?: Rogue2__Outbuff;
  /** 原始数据字段 `rogue_2_outbuff_47`。 */
  rogue_2_outbuff_47?: Rogue2__Outbuff;
  /** 原始数据字段 `rogue_2_outbuff_48`。 */
  rogue_2_outbuff_48?: Rogue2__Outbuff;
  /** 原始数据字段 `rogue_2_outbuff_49`。 */
  rogue_2_outbuff_49?: Rogue2__Outbuff;
  /** 原始数据字段 `rogue_2_outbuff_50`。 */
  rogue_2_outbuff_50?: Rogue2__Outbuff;
  /** 原始数据字段 `rogue_2_outbuff_51`。 */
  rogue_2_outbuff_51?: Rogue2__Outbuff;
  /** 原始数据字段 `rogue_2_outbuff_52`。 */
  rogue_2_outbuff_52?: Rogue2__Outbuff;
  /** 原始数据字段 `rogue_2_outbuff_53`。 */
  rogue_2_outbuff_53?: Rogue2__Outbuff;
  /** 原始数据字段 `rogue_2_outbuff_54`。 */
  rogue_2_outbuff_54?: Rogue2__Outbuff;
  /** 原始数据字段 `rogue_2_outbuff_55`。 */
  rogue_2_outbuff_55?: Rogue2__Outbuff;
  /** 原始数据字段 `rogue_2_outbuff_56`。 */
  rogue_2_outbuff_56?: Rogue2__Outbuff;
  /** 原始数据字段 `rogue_2_outbuff_57`。 */
  rogue_2_outbuff_57?: Rogue2__Outbuff;
  /** 原始数据字段 `rogue_2_outbuff_58`。 */
  rogue_2_outbuff_58?: Rogue2__Outbuff;
  /** 原始数据字段 `rogue_3_outbuff_1`。 */
  rogue_3_outbuff_1?: Rogue3__Difficulty1;
  /** 原始数据字段 `rogue_3_outbuff_2`。 */
  rogue_3_outbuff_2?: Rogue3__Difficulty1;
  /** 原始数据字段 `rogue_3_outbuff_3`。 */
  rogue_3_outbuff_3?: Rogue3__Difficulty1;
  /** 原始数据字段 `rogue_3_outbuff_4`。 */
  rogue_3_outbuff_4?: Rogue3__Difficulty1;
  /** 原始数据字段 `rogue_3_outbuff_5`。 */
  rogue_3_outbuff_5?: Rogue3__Difficulty1;
  /** 原始数据字段 `rogue_3_outbuff_6`。 */
  rogue_3_outbuff_6?: Rogue3__Difficulty1;
  /** 原始数据字段 `rogue_3_outbuff_7`。 */
  rogue_3_outbuff_7?: Rogue3__Difficulty1;
  /** 原始数据字段 `rogue_3_difficulty_1`。 */
  rogue_3_difficulty_1?: Rogue3__Difficulty1;
  /** 原始数据字段 `rogue_3_outbuff_9`。 */
  rogue_3_outbuff_9?: Rogue3__Difficulty1;
  /** 原始数据字段 `rogue_3_outbuff_10`。 */
  rogue_3_outbuff_10?: Rogue3__Difficulty1;
  /** 原始数据字段 `rogue_3_outbuff_11`。 */
  rogue_3_outbuff_11?: Rogue3__Difficulty1;
  /** 原始数据字段 `rogue_3_outbuff_12`。 */
  rogue_3_outbuff_12?: Rogue3__Difficulty1;
  /** 原始数据字段 `rogue_3_outbuff_13`。 */
  rogue_3_outbuff_13?: Rogue3__Difficulty1;
  /** 原始数据字段 `rogue_3_outbuff_14`。 */
  rogue_3_outbuff_14?: Rogue3__Difficulty1;
  /** 原始数据字段 `rogue_3_outbuff_15`。 */
  rogue_3_outbuff_15?: Rogue3__Difficulty1;
  /** 原始数据字段 `rogue_3_outbuff_16`。 */
  rogue_3_outbuff_16?: Rogue3__Difficulty1;
  /** 原始数据字段 `rogue_3_outbuff_17`。 */
  rogue_3_outbuff_17?: Rogue3__Difficulty1;
  /** 原始数据字段 `rogue_3_outbuff_18`。 */
  rogue_3_outbuff_18?: Rogue3__Difficulty1;
  /** 原始数据字段 `rogue_3_outbuff_19`。 */
  rogue_3_outbuff_19?: Rogue3__Difficulty1;
  /** 原始数据字段 `rogue_3_outbuff_20`。 */
  rogue_3_outbuff_20?: Rogue3__Difficulty1;
  /** 原始数据字段 `rogue_3_outbuff_21`。 */
  rogue_3_outbuff_21?: Rogue3__Difficulty1;
  /** 原始数据字段 `rogue_3_difficulty_2`。 */
  rogue_3_difficulty_2?: Rogue3__Difficulty1;
  /** 原始数据字段 `rogue_3_outbuff_23`。 */
  rogue_3_outbuff_23?: Rogue3__Difficulty1;
  /** 原始数据字段 `rogue_3_outbuff_24`。 */
  rogue_3_outbuff_24?: Rogue3__Difficulty1;
  /** 原始数据字段 `rogue_3_outbuff_25`。 */
  rogue_3_outbuff_25?: Rogue3__Difficulty1;
  /** 原始数据字段 `rogue_3_outbuff_26`。 */
  rogue_3_outbuff_26?: Rogue3__Difficulty1;
  /** 原始数据字段 `rogue_3_outbuff_27`。 */
  rogue_3_outbuff_27?: Rogue3__Difficulty1;
  /** 原始数据字段 `rogue_3_outbuff_28`。 */
  rogue_3_outbuff_28?: Rogue3__Difficulty1;
  /** 原始数据字段 `rogue_3_outbuff_29`。 */
  rogue_3_outbuff_29?: Rogue3__Difficulty1;
  /** 原始数据字段 `rogue_3_outbuff_30`。 */
  rogue_3_outbuff_30?: Rogue3__Difficulty1;
  /** 原始数据字段 `rogue_3_outbuff_31`。 */
  rogue_3_outbuff_31?: Rogue3__Difficulty1;
  /** 原始数据字段 `rogue_3_outbuff_32`。 */
  rogue_3_outbuff_32?: Rogue3__Difficulty1;
  /** 原始数据字段 `rogue_3_outbuff_33`。 */
  rogue_3_outbuff_33?: Rogue3__Difficulty1;
  /** 原始数据字段 `rogue_3_outbuff_34`。 */
  rogue_3_outbuff_34?: Rogue3__Difficulty1;
  /** 原始数据字段 `rogue_3_outbuff_35`。 */
  rogue_3_outbuff_35?: Rogue3__Difficulty1;
  /** 原始数据字段 `rogue_3_difficulty_3`。 */
  rogue_3_difficulty_3?: Rogue3__Difficulty1;
  /** 原始数据字段 `rogue_3_outbuff_37`。 */
  rogue_3_outbuff_37?: Rogue3__Difficulty1;
  /** 原始数据字段 `rogue_3_outbuff_38`。 */
  rogue_3_outbuff_38?: Rogue3__Difficulty1;
  /** 原始数据字段 `rogue_3_outbuff_39`。 */
  rogue_3_outbuff_39?: Rogue3__Difficulty1;
  /** 原始数据字段 `rogue_3_outbuff_40`。 */
  rogue_3_outbuff_40?: Rogue3__Difficulty1;
  /** 原始数据字段 `rogue_3_outbuff_41`。 */
  rogue_3_outbuff_41?: Rogue3__Difficulty1;
  /** 原始数据字段 `rogue_3_outbuff_42`。 */
  rogue_3_outbuff_42?: Rogue3__Difficulty1;
  /** 原始数据字段 `rogue_3_outbuff_43`。 */
  rogue_3_outbuff_43?: Rogue3__Difficulty1;
}

/**
 * roguelike_topic_table.json 中 Outbuff 的显式 TypeScript 定义。
 *
 * 字段语义应直接维护在类型与字段的源码注释中。
 */
export interface Outbuff {
  /** 原始数据字段 `buffId`。 */
  buffId: string;
  /** 原始数据字段 `sortId`。 */
  sortId: number;
  /** 原始数据字段 `nodeType`。 */
  nodeType: Outbuff1_NodeType;
  /** 原始数据字段 `nextNodeId`。 */
  nextNodeId: string[];
  /** 原始数据字段 `frontNodeId`。 */
  frontNodeId: string[];
  /** 原始数据字段 `tokenCost`。 */
  tokenCost: number;
  /** 原始数据字段 `buffName`。 */
  buffName: string;
  /** 原始数据字段 `buffIconId`。 */
  buffIconId: BuffIconId;
  /** 原始数据字段 `buffTypeName`。 */
  buffTypeName: string;
  /** 原始数据字段 `buffDisplayInfo`。 */
  buffDisplayInfo: BuffDisplayInfo[];
}

/**
 * roguelike_topic_table.json 中 Outbuff1_NodeType 的显式 TypeScript 定义。
 *
 * 字段语义应直接维护在类型与字段的源码注释中。
 */
export type Outbuff1_NodeType = "BRANCH" | "KEY";

/**
 * roguelike_topic_table.json 中 Rogue2__Outbuff 的显式 TypeScript 定义。
 *
 * 字段语义应直接维护在类型与字段的源码注释中。
 */
export interface Rogue2__Outbuff {
  /** 原始数据字段 `buffId`。 */
  buffId: string;
  /** 原始数据字段 `nodeType`。 */
  nodeType: Rogue2_Outbuff1_NodeType;
  /** 原始数据字段 `frontNodeId`。 */
  frontNodeId: string[];
  /** 原始数据字段 `nextNodeId`。 */
  nextNodeId: string[];
  /** 原始数据字段 `positionP`。 */
  positionP: number;
  /** 原始数据字段 `positionR`。 */
  positionR: number;
  /** 原始数据字段 `tokenCost`。 */
  tokenCost: number;
  /** 原始数据字段 `buffName`。 */
  buffName: string;
  /** 原始数据字段 `buffIconId`。 */
  buffIconId: string;
  /** 原始数据字段 `effectType`。 */
  effectType: EffectType;
  /** 原始数据字段 `rawDesc`。 */
  rawDesc: string;
  /** 原始数据字段 `buffDisplayInfo`。 */
  buffDisplayInfo: BuffDisplayInfo[];
  /** 原始数据字段 `enrollId`。 */
  enrollId: EnrollId | null;
}

/**
 * roguelike_topic_table.json 中 Rogue2_Outbuff1_NodeType 的显式 TypeScript 定义。
 *
 * 字段语义应直接维护在类型与字段的源码注释中。
 */
export type Rogue2_Outbuff1_NodeType =
  "SMALL" | "NORMAL" | "LARGE_RHODES" | "LARGE_ABYSSAL" | "LARGE_IBERIA";
