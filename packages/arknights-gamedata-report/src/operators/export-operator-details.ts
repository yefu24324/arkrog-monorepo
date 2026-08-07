/**
 * 生成 `operators/{operatorId}.json`。
 * 数据来源：character_table.json、skill_table.json、uniequip_table.json、
 * battle_equip_table.json 与 char_patch_table.json。召唤物同样来自 character_table.json。
 */

import path from "node:path";

import { readJson, writeJson } from "#shared/json-file";
import type { OriginalGameDataObject } from "#shared/types";
import {
  buildPatchArtifact,
  collectModules,
  collectSkillIds,
  collectSkills,
  collectTokens,
  isPlayableOperator,
} from "#operators/collect-operator-family";
import { buildOperatorsIndex } from "#operators/export-operators-index";
import type {
  CharacterPatchTable,
  ExportedOperatorArtifact,
  ExportedOperatorCharacterData,
  UniEquipTable,
} from "#operators/types";

/** 干员报告生成所需的五张原始 Excel 表。 */
interface OperatorSourceTables {
  battleEquipTable: Record<string, OriginalGameDataObject>;
  characterTable: Record<string, ExportedOperatorCharacterData>;
  patchTable: CharacterPatchTable;
  skillTable: Record<string, OriginalGameDataObject>;
  uniEquipTable: UniEquipTable;
}

/** 一次读取干员报告依赖的全部原始表。 */
async function readOperatorSourceTables(gameDataRoot: string): Promise<OperatorSourceTables> {
  const excelRoot = path.join(gameDataRoot, "excel");
  const [characterTable, skillTable, uniEquipTable, battleEquipTable, patchTable] =
    await Promise.all([
      readJson<Record<string, ExportedOperatorCharacterData>>(
        path.join(excelRoot, "character_table.json"),
      ),
      readJson<Record<string, OriginalGameDataObject>>(path.join(excelRoot, "skill_table.json")),
      readJson<UniEquipTable>(path.join(excelRoot, "uniequip_table.json")),
      readJson<Record<string, OriginalGameDataObject>>(
        path.join(excelRoot, "battle_equip_table.json"),
      ),
      readJson<CharacterPatchTable>(path.join(excelRoot, "char_patch_table.json")),
    ]);
  return { battleEquipTable, characterTable, patchTable, skillTable, uniEquipTable };
}

/** 构建一个基础干员的完整报告。 */
export function buildOperatorArtifact(
  characterId: string,
  character: ExportedOperatorCharacterData,
  tables: OperatorSourceTables,
): ExportedOperatorArtifact {
  const patch = buildPatchArtifact(characterId, tables.patchTable);
  const patchCharacters = Object.values(patch?.characters ?? {});
  const operatorCharacters = [character, ...patchCharacters];
  const { tokens, missingTokenIds } = collectTokens(operatorCharacters, tables.characterTable);
  const allSkillCharacters = [...operatorCharacters, ...Object.values(tokens)];
  const relatedCharacterIds = patch
    ? [...new Set([patch.baseId, ...Object.keys(patch.characters)])]
    : [characterId];
  return {
    id: characterId,
    character,
    skills: collectSkills(collectSkillIds(allSkillCharacters), tables.skillTable),
    modules: collectModules(relatedCharacterIds, tables.uniEquipTable, tables.battleEquipTable),
    patch,
    tokens,
    missingTokenIds,
  };
}

/** 写入干员轻量索引与每个干员的完整报告。 */
export async function exportOperatorReports(
  gameDataRoot: string,
  outputRoot: string,
): Promise<{ fileCount: number; itemCount: number }> {
  const tables = await readOperatorSourceTables(gameDataRoot);
  const operators = Object.entries(tables.characterTable)
    .filter(([characterId, character]) => isPlayableOperator(characterId, character))
    .sort(([leftId, left], [rightId, right]) =>
      (left.name ?? leftId).localeCompare(right.name ?? rightId, "zh-CN"),
    );
  for (const [characterId, character] of operators) {
    await writeJson(
      path.join(outputRoot, "operators", `${characterId}.json`),
      buildOperatorArtifact(characterId, character, tables),
    );
  }
  await writeJson(path.join(outputRoot, "operators.json"), buildOperatorsIndex(operators));
  return { fileCount: operators.length + 1, itemCount: operators.length };
}
