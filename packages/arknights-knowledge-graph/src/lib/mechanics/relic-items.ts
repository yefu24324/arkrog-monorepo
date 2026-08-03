/** 将属性语义预测转换为 FormulaBook 可直接消费的最小公式项。 */

import type { EnginePrediction } from "../domain/engine-rules.js";
import { item as createFormulaItem } from "../formula/ast.js";
import type { FormulaItemExpression } from "../formula/ast.js";
import type { FormulaWritableZoneId } from "../formula/formula-book.js";
import { runRelicFormulaProgram } from "./relic-template-programs.js";

/** GameData buff 黑板条目。 */
export interface BlackboardEntry {
  /** 参数名。 */
  key: string;
  /** 数值。 */
  value: number;
  /** 字符串值。 */
  valueStr: string | null;
}

/** 已完成属性乘区路由、等待解释数值的单条效果。 */
export interface RelicFormulaEffect {
  /** 稳定效果 ID。 */
  effectId: string;
  /** relics 或 charBuffData:... 来源标签。 */
  source: string;
  /** buff 载体 key。 */
  key: string;
  /** 黑板引用的战斗模板名。 */
  mechanicName: string;
  /** 原始黑板。 */
  blackboard: readonly BlackboardEntry[];
  /** 原始 GameData JSON 路径。 */
  jsonPath: string;
  /** engine-rules 给出的属性 zone 预测。 */
  predictions: readonly EnginePrediction[];
}

/** 单条属性效果写入 FormulaBook 后返回的可追溯记录。 */
export interface FormulaItemPlacement {
  /** 已由规则或精确模板确定的真实写入 zone。 */
  zoneId: FormulaWritableZoneId;
  /** 公式 AST 只保留显示提示和规范化数值。 */
  item: FormulaItemExpression;
  /** 图谱路由证据与运行时公式项分离保存。 */
  route: {
    /** 提供数值的黑板参数。 */
    parameterKey: "atk" | "attack_speed" | "def" | "max_hp" | "magic_resistance";
    /** 命中的语义规则或精确模板 ID。 */
    ruleId: string;
    /** 为什么写入该 zone。 */
    reason: string;
    /** 原始 GameData 效果路径。 */
    evidencePath: string;
  };
}

/** 将一条已路由效果转换为可直接追加到 FormulaBook 的属性公式项。 */
export function formulaItemsFromRelicEffect(
  relic: { readonly name: string },
  effect: RelicFormulaEffect,
  options: {
    /** 当前层数由精确模板解释，普通静态 buff 不消费。 */
    layer?: number;
  } = {},
): FormulaItemPlacement[] {
  return runRelicFormulaProgram(effect, { layer: options.layer ?? 0 }).map((write) => {
    // 精确模板会替换规则 ID，因此先按规则 ID、再按相同 zone 继承 Action 证据。
    const prediction = effect.predictions.find((candidate) => candidate.ruleId === write.ruleId)
      ?? effect.predictions.find((candidate) => candidate.zoneId === write.zoneId);
    return {
      zoneId: write.zoneId,
      item: createFormulaItem(relic.name, write.value),
      route: {
        parameterKey: write.parameterKey,
        ruleId: write.ruleId,
        reason: write.reason,
        evidencePath: prediction?.evidencePath ?? effect.jsonPath,
      },
    };
  });
}
