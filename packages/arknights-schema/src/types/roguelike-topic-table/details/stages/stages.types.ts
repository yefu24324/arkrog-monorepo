/**

 * JSON 逻辑模块 `details/stages/stages` 的显式类型。

 */

/**
 * roguelike_topic_table.json 中 CapsulePool 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export type CapsulePool = "pool_capsule_default";

/**
 * roguelike_topic_table.json 中 Code 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export type Code = "ISW-NO" | "ISW-DF" | "ISW-DU" | "ISW-SP" | " ";

/**
 * roguelike_topic_table.json 中 DifficultyEnum 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export type DifficultyEnum = "NORMAL" | "FOUR_STAR";

/**
 * roguelike_topic_table.json 中 LoadingPicId 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export type LoadingPicId =
  | "loading_PCS"
  | "loading_SY"
  | "loading_SM_RL"
  | "loading_SKZ_RL"
  | "loading_SUI_RL"
  | "loading_HLSH_RL";

/**
 * roguelike_topic_table.json 中 RedCapsulePool 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export type RedCapsulePool = "pool_capsule_red";

/**
 * roguelike_topic_table.json 中 Stage 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface Stage {
  /** 原始数据字段 `id`。 */
  id: string;
  /** 原始数据字段 `linkedStageId`。 */
  linkedStageId: string;
  /** 原始数据字段 `levelId`。 */
  levelId: string;
  /** 原始数据字段 `levelReplaceIds`。 */
  levelReplaceIds: string[];
  /** 原始数据字段 `code`。 */
  code: Code;
  /** 原始数据字段 `name`。 */
  name: string;
  /** 原始数据字段 `loadingPicId`。 */
  loadingPicId: LoadingPicId;
  /** 原始数据字段 `description`。 */
  description: string;
  /** 原始数据字段 `eliteDesc`。 */
  eliteDesc: null | string;
  /** 原始数据字段 `isBoss`。 */
  isBoss: number;
  /** 原始数据字段 `isElite`。 */
  isElite: number;
  /** 原始数据字段 `difficulty`。 */
  difficulty: DifficultyEnum;
  /** 原始数据字段 `capsulePool`。 */
  capsulePool: CapsulePool | null;
  /** 原始数据字段 `capsuleProb`。 */
  capsuleProb: number;
  /** 原始数据字段 `vutresProb`。 */
  vutresProb: number[];
  /** 原始数据字段 `boxProb`。 */
  boxProb: number[];
  /** 原始数据字段 `specialNodeId`。 */
  specialNodeId: null | string;
  /** 原始数据字段 `redCapsulePool`。 */
  redCapsulePool: RedCapsulePool | null;
  /** 原始数据字段 `redCapsuleProb`。 */
  redCapsuleProb: number;
}
