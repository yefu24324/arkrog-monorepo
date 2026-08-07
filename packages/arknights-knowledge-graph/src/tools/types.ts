import type { EvidenceStatus } from "../lib/types.js";

/** 构建图谱时使用的仓库路径集合。 */
export interface RepositoryPaths {
  /** monorepo 根目录的绝对路径。 */
  root: string;
  /** ArknightsGameData 中文数据根目录。 */
  gameData: string;
  /** schema 包源码目录。 */
  schemaSource: string;
  /** gamedata-report 公开源码目录，用于发现可建图对象类型。 */
  gameDataReportSource: string;
  /** 默认 Kuzu 数据库目录。 */
  database: string;
  /** 图谱本地工作区；规则、候选库和清单都不提交 Git。 */
  graphWorkspace: string;
  /** AI 生成并由确定性程序验证的本地声明式规则。 */
  graphRules: string;
  /** AI 生成并由确定性程序验证的主题特殊系统解释。 */
  graphTopicSystems: string;
  /** 当前正式图谱的构建清单。 */
  graphManifest: string;
  /** 有冲突时仅供诊断的候选图谱清单。 */
  graphCandidateManifest: string;
  /** 构建技能读取的输入准备报告。 */
  graphPreparation: string;
  /** 校验或构建冲突报告。 */
  graphConflicts: string;
  /** 人类对语义变化的本地发布审批。 */
  graphApproval: string;
}

/** 一条可展示的乘区追踪结果。 */
export interface TraceRow {
  /** 藏品 ID。 */
  itemId: string;
  /** 藏品显示名。 */
  itemName: string;
  /** buff 元素类型。 */
  effectKey: string;
  /** 效果来自 relics 或具体 charBuffData。 */
  sourceKind: string;
  /** 黑板参数及其原始值。 */
  parameters: string;
  /** 目标乘区标识；没有可靠结论时为 UNKNOWN。 */
  zoneId: string;
  /** 目标乘区显示名。 */
  zoneName: string;
  /** 结论状态。 */
  status: EvidenceStatus;
  /** 判定依据。 */
  reason: string;
  /** 命中的可版本化语义规则 ID。 */
  ruleId: string;
  /** 原始效果与 Action 的联合证据路径。 */
  evidencePath: string;
  /** 黑板 key 实际引用的战斗模板名。 */
  mechanicName: string;
  /** 战斗模板中的 Action 组件类型。 */
  componentTypes: string;
  /** 与本效果关联的 Action 属性、计算方式和目标事实。 */
  actionFacts: string;
  /** 原始 JSON 路径。 */
  jsonPath: string;
}

export type { EvidenceStatus };
