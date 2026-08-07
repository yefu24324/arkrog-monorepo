/**
 * 生成 `operators.json`。
 * 数据来源：ArknightsGameData/zh_CN/gamedata/excel/character_table.json。
 */

import type {
  ExportedOperatorCharacterData,
  ExportedOperatorIndex,
} from "#operators/types";

/** 从已筛选并稳定排序的干员记录生成轻量索引。 */
export function buildOperatorsIndex(
  operators: readonly (readonly [string, ExportedOperatorCharacterData])[],
): ExportedOperatorIndex {
  return operators.map(([id, character]) => ({
    id,
    name: character.name ?? id,
    profession: character.profession ?? "",
    subProfessionId: character.subProfessionId ?? null,
    rarity: character.rarity ?? "",
    position: character.position ?? null,
  }));
}
