/**
 * AI_GENERATED：此文件可根据人类知识、最新 report 数据与图谱证据重新生成。
 * 禁止将本文件作为第一证据；纠正应写入 mechanics-knowledge。
 */

import { FormulaZoneId } from "../../formula/formula-book.js";
import type { GeneratedFormulaContribution } from "../contracts/program.js";

/** 黑流树海低难度在精确等级生效的敌方属性倍率。 */
const VALUES: Readonly<Record<number, { maxHp: number; attack: number }>> = {
  0: { maxHp: -0.4, attack: -0.3 },
  1: { maxHp: -0.2, attack: -0.2 },
  2: { maxHp: -0.15, attack: -0.15 },
  3: { maxHp: -0.1, attack: -0.1 },
};

/** 取得 rogue_6 当前精确低难度的两个 FormulaBook 贡献。 */
export function rogue6LowDifficultyProgram(
  modeDifficulty: string,
  grade: number,
): readonly GeneratedFormulaContribution[] {
  if (modeDifficulty !== "NORMAL") return [];
  const values = VALUES[grade];
  return values
    ? [
        { zoneId: FormulaZoneId.enemy_direct_max_hp_mul, value: values.maxHp },
        { zoneId: FormulaZoneId.enemy_direct_atk_mul, value: values.attack },
      ]
    : [];
}
