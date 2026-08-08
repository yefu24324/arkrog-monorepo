/**
 * AI_GENERATED：此文件可根据人类知识、最新 report 数据与图谱证据重新生成。
 * 禁止将本文件作为第一证据；纠正应写入 mechanics-knowledge。
 */

import { FormulaZoneId } from "../../formula/formula-book.js";
import type { GeneratedFormulaContribution } from "../contracts/program.js";

/** 编排入口归一化后的 rogue_6 主题效果证据。 */
export interface Rogue6TopicEffectProgramInput {
  kind: "realUtopia" | "utopia" | "conceptualEntity";
  id: string;
  sourceId: string;
  displayName: string;
  description: string;
}

/** 主题效果程序必须逐条给出支持、未知或不适用结论。 */
export type Rogue6TopicEffectResolution =
  | { status: "supported"; contributions: readonly GeneratedFormulaContribution[] }
  | { status: "unknown" }
  | { status: "not_applicable" };

/** 从已验证格式的原文中读取百分比；格式变化时拒绝沿用旧数值。 */
function matchPercentages(description: string, pattern: RegExp): number[] | null {
  const match = pattern.exec(description);
  if (!match) return null;
  const values = match.slice(1).map(Number);
  return values.every(Number.isFinite) ? values.map((value) => value / 100) : null;
}

/** 实托邦中能够直接进入现有属性 FormulaBook 的两类效果。 */
function resolveRealUtopia(input: Rogue6TopicEffectProgramInput): Rogue6TopicEffectResolution {
  if (input.sourceId.startsWith("rogue_6_weather_1_")) {
    const values = matchPercentages(input.description, /敌方攻击\+(\d+)%.*生命\+(\d+)%/);
    return values ? {
      status: "supported",
      contributions: [
        { zoneId: FormulaZoneId.enemy_direct_atk_mul, value: values[0]! },
        { zoneId: FormulaZoneId.enemy_direct_max_hp_mul, value: values[1]! },
      ],
    } : { status: "unknown" };
  }
  if (input.sourceId.startsWith("rogue_6_weather_8_")) {
    const values = matchPercentages(input.description, /我方单位攻击\+(\d+)%.*生命\+(\d+)%/);
    return values ? {
      status: "supported",
      contributions: [
        { zoneId: FormulaZoneId.char_in_atk_mul, value: values[0]! },
        { zoneId: FormulaZoneId.char_in_max_hp_mul, value: values[1]! },
      ],
    } : { status: "unknown" };
  }
  // 条件攻击力、我方承伤等效果缺少运行时事实或对应乘区，必须保持 unknown。
  if (/^rogue_6_weather_(2|4)_/.test(input.sourceId)) return { status: "unknown" };
  // 控制、资源、即时损血、费用、地图信息和视觉效果不修改当前属性 FormulaBook。
  if (/^rogue_6_weather_(3|5|6|7|9|10)_/.test(input.sourceId)) {
    return { status: "not_applicable" };
  }
  return { status: "unknown" };
}

/** 乌托邦仅对“孤立石林”两个互斥状态建立确定性攻速程序。 */
function resolveUtopia(input: Rogue6TopicEffectProgramInput): Rogue6TopicEffectResolution {
  if (input.id === "variation_4:attack-speed-up") {
    return {
      status: "supported",
      contributions: [{
        zoneId: FormulaZoneId.char_direct_attack_speed_add,
        value: 30,
        conditions: ["我方攻击范围内存在我方干员"],
      }],
    };
  }
  if (input.id === "variation_4:attack-speed-down") {
    return {
      status: "supported",
      contributions: [{
        zoneId: FormulaZoneId.char_direct_attack_speed_add,
        value: -50,
        conditions: ["我方攻击范围内不存在我方干员"],
      }],
    };
  }
  // “巨人摇篮”和“源石之城”缺少属性数值，不能猜测。
  if (input.sourceId === "variation_1" || input.sourceId === "variation_7") {
    return { status: "unknown" };
  }
  // 其余乌托邦影响技力、持续损血、地图或资源，不修改当前属性 FormulaBook。
  if (/^variation_(2|3|5|6|8|9)$/.test(input.sourceId)) {
    return { status: "not_applicable" };
  }
  return { status: "unknown" };
}

/** 概念体中两个作战节点效果提供明确的我方直接攻速加算。 */
function resolveConceptualEntity(
  input: Rogue6TopicEffectProgramInput,
): Rogue6TopicEffectResolution {
  if (input.sourceId === "rogue_6_scrap_P_01" || input.sourceId === "rogue_6_scrap_P_04") {
    const values = matchPercentages(input.description, /我方单位攻击速度\+(\d+)/);
    return values ? {
      status: "supported",
      contributions: [{
        zoneId: FormulaZoneId.char_direct_attack_speed_add,
        // 攻击速度是点数加算，不使用百分比归一化后的值。
        value: values[0]! * 100,
        conditions: ["选中概念体即视为对应节点触发条件满足"],
      }],
    } : { status: "unknown" };
  }
  if (/^rogue_6_scrap_P_0(2|3|5|6)$/.test(input.sourceId)) {
    return { status: "not_applicable" };
  }
  return { status: "unknown" };
}

/** 按三类公开数据路由 rogue_6 主题效果程序。 */
export function resolveRogue6TopicEffect(
  input: Rogue6TopicEffectProgramInput,
): Rogue6TopicEffectResolution {
  if (input.kind === "realUtopia") return resolveRealUtopia(input);
  if (input.kind === "utopia") return resolveUtopia(input);
  return resolveConceptualEntity(input);
}
