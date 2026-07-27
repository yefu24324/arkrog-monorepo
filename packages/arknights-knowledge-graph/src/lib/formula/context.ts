import type { FormulaZoneId } from "../domain/damage-zones.js";
import type { FormulaDamageType } from "./ast.js";
import { getFormulaZone } from "./zones.js";

/** 加成来源类型，保持领域层与具体前端对象解耦。 */
export type FormulaContributionSourceKind =
  | "relic"
  | "talent"
  | "skill"
  | "stage"
  | "difficulty"
  | "manual"
  | "engine-rule";

/** 一条加成可以追踪到的原始事实与语义规则。 */
export interface FormulaContributionSource {
  /** 来源类别。 */
  kind: FormulaContributionSourceKind;
  /** 藏品或其他实体的稳定 ID。 */
  itemId?: string;
  /** 原始效果在 GameData 中的路径。 */
  effectPath?: string;
  /** 原始 buff 载体键。 */
  buffKey?: string;
  /** 真正提供数值的黑板参数键。 */
  parameterKey?: string;
  /** 命中的战斗引擎语义规则 ID。 */
  ruleId?: string;
  /** 规则使用的原始事实证据路径。 */
  evidencePath?: string;
  /** 聚合多个难度等级时保留全部原始事实路径。 */
  evidencePaths?: readonly string[];
}

/** 一个被放入指定乘区的原子加成。 */
export interface FormulaContribution {
  /** 上下文内稳定且唯一的贡献项 ID。 */
  id: string;
  /** 贡献项进入的稳定乘区 ID。 */
  zoneId: FormulaZoneId;
  /** 已规范化到乘区约定方向的数值。 */
  value: number;
  /** 公式 UI 紧邻数值展示的短提示。 */
  tooltip: string;
  /** 该数值为什么进入此乘区的详细原因。 */
  reason?: string;
  /** 该数值的事实和规则来源。 */
  source?: FormulaContributionSource;
  /** 未指定时表示对所有伤害类型生效。 */
  damageTypes?: readonly FormulaDamageType[];
  /** 仅事件型资源贡献使用；未指定表示不受触发事件筛选。 */
  triggerTypes?: readonly string[];
  /** 条件不成立时仍保留记录，但不参与当前求值。 */
  active: boolean;
}

/** 创建加成时可选的追踪信息。 */
export type FormulaContributionOptions = Omit<
  FormulaContribution,
  "id" | "zoneId" | "value" | "tooltip" | "active"
> & {
  /** 调用方可提供稳定 ID；省略时由上下文生成本地 ID。 */
  id?: string;
  /** 默认参与计算。 */
  active?: boolean;
};

/** 查询乘区贡献项时使用的筛选条件。 */
export interface FormulaContributionFilter {
  /** 只选择适用于此伤害类型的贡献项。 */
  damageType?: FormulaDamageType;
  /** 只选择适用于该战斗触发事件的资源贡献项。 */
  triggerType?: string;
  /** 是否同时返回因条件不成立而停用的贡献项。 */
  includeInactive?: boolean;
}

/** 乘区求值与解释所需的结构化快照。 */
export interface EvaluatedFormulaZone {
  /** 稳定乘区 ID。 */
  zoneId: FormulaZoneId;
  /** 乘区当前聚合结果。 */
  value: number;
  /** 实际参与求值的贡献项。 */
  contributions: readonly FormulaContribution[];
}

/**
 * 新公式系统的可追踪上下文。
 * API 刻意接近 BuffContext 的“持续添加来源”用法，但内部统一按稳定乘区 ID 保存。
 */
export class FormulaContext {
  /** 按乘区保存原子贡献项，避免公式结构和藏品来源互相耦合。 */
  private readonly contributions = new Map<FormulaZoneId, FormulaContribution[]>();

  /** 仅用于生成未显式指定 ID 的上下文本地贡献项。 */
  private nextLocalId = 1;

  /** 添加一条带 tooltip 和证据来源的加成。 */
  add(
    zoneId: FormulaZoneId,
    value: number,
    tooltip: string,
    options: FormulaContributionOptions = {},
  ): this {
    const contribution: FormulaContribution = {
      ...options,
      id: options.id ?? `local-${this.nextLocalId++}`,
      zoneId,
      value,
      tooltip,
      active: options.active ?? true,
    };
    return this.addContribution(contribution);
  }

  /** 添加一条已经由图谱或适配器构造完成的原子贡献项。 */
  addContribution(contribution: FormulaContribution): this {
    const entries = this.contributions.get(contribution.zoneId) ?? [];
    if (entries.some((entry) => entry.id === contribution.id)) {
      throw new Error(`乘区 ${contribution.zoneId} 已存在贡献项 ID：${contribution.id}`);
    }
    entries.push({
      ...contribution,
      damageTypes: contribution.damageTypes ? [...contribution.damageTypes] : undefined,
      triggerTypes: contribution.triggerTypes ? [...contribution.triggerTypes] : undefined,
      source: contribution.source
        ? {
            ...contribution.source,
            evidencePaths: contribution.source.evidencePaths
              ? [...contribution.source.evidencePaths]
              : undefined,
          }
        : undefined,
    });
    this.contributions.set(contribution.zoneId, entries);
    return this;
  }

  /** 返回指定乘区中符合伤害类型和激活状态的贡献项副本。 */
  getContributions(
    zoneId: FormulaZoneId,
    filter: FormulaContributionFilter = {},
  ): readonly FormulaContribution[] {
    return (this.contributions.get(zoneId) ?? [])
      .filter((entry) => filter.includeInactive || entry.active)
      .filter((entry) =>
        !filter.damageType || !entry.damageTypes || entry.damageTypes.includes(filter.damageType),
      )
      .filter((entry) =>
        !filter.triggerType || !entry.triggerTypes || entry.triggerTypes.includes(filter.triggerType),
      )
      .map((entry) => ({
        ...entry,
        damageTypes: entry.damageTypes ? [...entry.damageTypes] : undefined,
        triggerTypes: entry.triggerTypes ? [...entry.triggerTypes] : undefined,
        source: entry.source
          ? {
              ...entry.source,
              evidencePaths: entry.source.evidencePaths
                ? [...entry.source.evidencePaths]
                : undefined,
            }
          : undefined,
      }));
  }

  /** 按实验乘区定义聚合当前贡献项。 */
  evaluateZone(zoneId: FormulaZoneId, filter: FormulaContributionFilter = {}): EvaluatedFormulaZone {
    const zone = getFormulaZone(zoneId);
    const contributions = this.getContributions(zoneId, filter);
    const values = contributions.map((entry) => entry.value);
    // 每一种聚合均对应战斗引擎中的一种稳定区内规则，禁止调用方自行二次解释贡献值。
    let value: number;
    switch (zone.aggregation.kind) {
      case "sum":
        value = zone.aggregation.base
          + zone.aggregation.termScale * values.reduce((total, entry) => total + entry, 0);
        break;
      case "product-one-plus":
        value = values.reduce((product, entry) => product * (1 + entry), 1);
        break;
      case "product":
        value = values.reduce((product, entry) => product * entry, 1);
        break;
      case "union":
        value = 1 - values.reduce((remaining, entry) => remaining * (1 - entry), 1);
        break;
      case "max":
        value = values.reduce((maximum, entry) => Math.max(maximum, entry), zone.aggregation.base);
        break;
    }
    return { zoneId, value, contributions };
  }

  /** 深度克隆上下文，方便旧计算器迁移期进行双轨数值对照。 */
  clone(): FormulaContext {
    const cloned = new FormulaContext();
    cloned.nextLocalId = this.nextLocalId;
    for (const entries of this.contributions.values()) {
      for (const entry of entries) cloned.addContribution(entry);
    }
    return cloned;
  }

  /**
   * 切换已有贡献项的生效状态（用于敌人/前置藏品变化后的重判）。
   * 找不到对应 ID 时抛错，避免静默失败。
   */
  setContributionActive(contributionId: string, zoneId: FormulaZoneId, active: boolean): this {
    const entries = this.contributions.get(zoneId);
    if (!entries) {
      throw new Error(`乘区 ${zoneId} 不存在，无法切换贡献项 ${contributionId}`);
    }
    const target = entries.find((entry) => entry.id === contributionId);
    if (!target) {
      throw new Error(`乘区 ${zoneId} 中不存在贡献项 ID：${contributionId}`);
    }
    target.active = active;
    return this;
  }
}
