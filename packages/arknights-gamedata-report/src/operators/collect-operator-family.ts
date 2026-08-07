import type { OriginalGameDataObject } from "#shared/types";
import type {
  CharacterPatchTable,
  ExportedOperatorCharacterData,
  ExportedOperatorModuleData,
  ExportedOperatorPatchData,
  UniEquipTable,
} from "#operators/types";

/** 判断 character_table 记录是否为可获得干员，而不是敌人、召唤物或陷阱。 */
export function isPlayableOperator(
  characterId: string,
  character: ExportedOperatorCharacterData,
): boolean {
  return (
    characterId.startsWith("char_") &&
    !character.isNotObtainable &&
    character.profession !== "TOKEN" &&
    character.profession !== "TRAP"
  );
}

/** 查找一个基础干员及其全部职业形态 ID。 */
function findPatchFamily(
  characterId: string,
  patchTable: CharacterPatchTable,
): { baseId: string; formIds: string[] } | null {
  for (const [baseId, info] of Object.entries(patchTable.infos)) {
    const formIds = info.tmplIds ?? [baseId];
    if (formIds.includes(characterId)) return { baseId, formIds };
  }
  return null;
}

/** 构建一个基础干员的完整 patch 家族，非变身干员返回 null。 */
export function buildPatchArtifact(
  characterId: string,
  patchTable: CharacterPatchTable,
): ExportedOperatorPatchData | null {
  const family = findPatchFamily(characterId, patchTable);
  if (!family) return null;
  const characters: Record<string, ExportedOperatorCharacterData> = {};
  const unlockConditions: Record<string, unknown> = {};
  const details: Record<string, unknown> = {};
  for (const formId of family.formIds) {
    if (patchTable.patchChars[formId]) characters[formId] = patchTable.patchChars[formId]!;
    if (patchTable.unlockConds[formId]) unlockConditions[formId] = patchTable.unlockConds[formId];
    if (patchTable.patchDetailInfoList[formId]) {
      details[formId] = patchTable.patchDetailInfoList[formId];
    }
  }
  return {
    baseId: family.baseId,
    info: patchTable.infos[family.baseId]!,
    characters,
    unlockConditions,
    details,
  };
}

/** 收集基础形态、职业形态及其直接引用的召唤物。 */
export function collectTokens(
  characters: readonly ExportedOperatorCharacterData[],
  characterTable: Readonly<Record<string, ExportedOperatorCharacterData>>,
): { tokens: Record<string, ExportedOperatorCharacterData>; missingTokenIds: string[] } {
  const tokenIds = new Set<string>();
  for (const character of characters) {
    for (const tokenId of Object.keys(character.displayTokenDict ?? {})) tokenIds.add(tokenId);
  }
  const tokens: Record<string, ExportedOperatorCharacterData> = {};
  const missingTokenIds: string[] = [];
  for (const tokenId of [...tokenIds].sort()) {
    const token = characterTable[tokenId];
    if (token) tokens[tokenId] = token;
    else missingTokenIds.push(tokenId);
  }
  return { tokens, missingTokenIds };
}

/** 从所有相关角色收集不重复的非空技能 ID。 */
export function collectSkillIds(
  characters: readonly ExportedOperatorCharacterData[],
): string[] {
  const skillIds = new Set<string>();
  for (const character of characters) {
    for (const skill of character.skills ?? []) {
      if (skill.skillId) skillIds.add(skill.skillId);
    }
  }
  return [...skillIds].sort();
}

/** 收集引用技能的完整等级数据；引用不存在时立即失败。 */
export function collectSkills(
  skillIds: readonly string[],
  skillTable: Readonly<Record<string, OriginalGameDataObject>>,
): Record<string, OriginalGameDataObject> {
  const skills: Record<string, OriginalGameDataObject> = {};
  for (const skillId of skillIds) {
    const skill = skillTable[skillId];
    if (!skill) throw new Error(`skill_table 缺少角色引用技能：${skillId}`);
    skills[skillId] = skill;
  }
  return skills;
}

/** 收集基础干员和 patch 形态的全部模组展示数据与战斗阶段数据。 */
export function collectModules(
  characterIds: readonly string[],
  uniEquipTable: UniEquipTable,
  battleEquipTable: Readonly<Record<string, OriginalGameDataObject>>,
): ExportedOperatorModuleData[] {
  const moduleIds = new Set<string>();
  for (const characterId of characterIds) {
    for (const moduleId of uniEquipTable.charEquip[characterId] ?? []) moduleIds.add(moduleId);
  }
  return [...moduleIds].sort().map((moduleId) => {
    const data = uniEquipTable.equipDict[moduleId];
    if (!data) throw new Error(`uniequip_table.equipDict 缺少干员引用模组：${moduleId}`);
    return { id: moduleId, data, combat: battleEquipTable[moduleId] ?? null };
  });
}
