#!/usr/bin/env node

/**
 * 从 ArknightsGameData 导出前端可直接按需加载的分类 JSON。
 * 本入口只读取原始游戏数据，不依赖、打开或构建 Kuzu 数据库。
 */

import { createHash } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import {
  buildWrappedRelicTopicArtifact,
  collectDifficultyConditionalRelics,
  type ExportedOperatorArtifact,
  type ExportedOperatorCharacterData,
  type ExportedOperatorIndexArtifact,
  type ExportedOperatorIndexItem,
  type ExportedOperatorModuleData,
  type ExportedOperatorPatchData,
  type ExportedRogueLevelData,
  type ExportedRogueStageArtifact,
  type ExportedRoguelikeTopicArtifact,
  type OriginalGameDataObject,
  type OriginalRogueCustomizedDifficultyData,
  type OriginalRogueDifficultyData,
  type OriginalRogueStageData,
  type OriginalRoguelikeTopicData,
  type RelicsExportResult,
  type RelicsExportSectionResult,
  type WrappedRelicTopicDetail,
} from "../src/game-data/index.js";

/** 单主题原始明细中本导出器需要的字段。 */
interface RogueTopicDetailForExport extends WrappedRelicTopicDetail {
  /** 主题关卡元数据字典。 */
  stages: Record<string, OriginalRogueStageData>;
  /** 主题主难度定义。 */
  difficulties: OriginalRogueDifficultyData[];
}

/** roguelike_topic_table.json 的导出读取结构。 */
interface RoguelikeTopicTableForExport {
  /** 主题入口原始数据。 */
  topics: Record<string, OriginalRoguelikeTopicData>;
  /** 各主题完整明细。 */
  details: Record<string, RogueTopicDetailForExport>;
  /** 各主题机制对难度等级的原始扩展。 */
  customizeData: Record<
    string,
    { difficulties: OriginalRogueCustomizedDifficultyData[] }
  >;
}

/** char_patch_table 中一个基础干员的形态索引。 */
interface CharacterPatchInfo extends OriginalGameDataObject {
  /** 基础形态及全部职业形态 ID。 */
  tmplIds?: string[];
}

/** char_patch_table 的完整关联表。 */
interface CharacterPatchTable {
  /** 基础干员到全部形态的索引。 */
  infos: Record<string, CharacterPatchInfo>;
  /** 附加职业形态的完整角色数据。 */
  patchChars: Record<string, ExportedOperatorCharacterData>;
  /** 附加职业形态解锁条件。 */
  unlockConds: Record<string, unknown>;
  /** 每种职业形态的展示与排序信息。 */
  patchDetailInfoList: Record<string, unknown>;
}

/** uniequip_table 中关联干员与模组所需的字段。 */
interface UniEquipTable {
  /** 模组 ID 到完整展示、解锁和消耗数据。 */
  equipDict: Record<string, OriginalGameDataObject>;
  /** 干员或职业形态到模组 ID 列表。 */
  charEquip: Record<string, string[]>;
}

/** relics:export 解析后的稳定配置。 */
interface RelicsExportArguments {
  /** 用户传入的输出目录；缺省时使用 docs/game/game-data。 */
  outputOverride?: string;
  /** 是否只打印帮助。 */
  help: boolean;
}

/** 本脚本所在 monorepo 的固定路径集合。 */
interface GameDataExportPaths {
  /** monorepo 根目录。 */
  root: string;
  /** zh_CN gamedata 根目录。 */
  gameData: string;
  /** 本次导出根目录。 */
  output: string;
}

/** 仅解析 `--out`；relics:export 始终导出全部数据。 */
export function parseGameDataExportArguments(arguments_: string[]): RelicsExportArguments {
  const values = arguments_.filter((argument) => argument !== "--");
  let outputOverride: string | undefined;
  let help = false;

  for (let index = 0; index < values.length; index += 1) {
    const argument = values[index]!;
    if (argument === "--help" || argument === "-h") {
      help = true;
      continue;
    }
    if (argument === "--out") {
      outputOverride = values[index + 1];
      if (!outputOverride) throw new Error("--out 缺少目录参数。");
      index += 1;
      continue;
    }
    if (argument.startsWith("--out=")) {
      outputOverride = argument.slice("--out=".length);
      if (!outputOverride) throw new Error("--out 缺少目录参数。");
      continue;
    }
    if (argument.startsWith("-")) throw new Error(`未知参数：${argument}`);
    throw new Error(`relics:export 始终导出全部数据，不接受内容范围：${argument}`);
  }

  return { outputOverride, help };
}

/** 根据脚本位置解析仓库、GameData 与用户输出目录。 */
function resolveGameDataExportPaths(outputOverride?: string): GameDataExportPaths {
  const toolDirectory = path.dirname(fileURLToPath(import.meta.url));
  // tools → arknights-schema → packages → monorepo 根目录。
  const root = path.resolve(toolDirectory, "../../..");
  const output = outputOverride
    ? path.isAbsolute(outputOverride)
      ? path.normalize(outputOverride)
      : path.resolve(root, outputOverride)
    : path.join(root, "docs", "game", "game-data");
  return {
    root,
    gameData: path.join(root, "ArknightsGameData", "zh_CN", "gamedata"),
    output,
  };
}

/** 仓库内路径转 POSIX 相对路径，仓库外自定义目录保留绝对路径。 */
function displayPath(root: string, targetPath: string): string {
  const relativePath = path.relative(root, targetPath);
  const isInsideRepository =
    relativePath.length === 0 ||
    (!relativePath.startsWith(`..${path.sep}`) && relativePath !== "..");
  return (isInsideRepository ? relativePath || "." : targetPath).split(path.sep).join("/");
}

/** 读取并解析一个 UTF-8 GameData JSON。 */
async function readJson<T>(filePath: string): Promise<T> {
  return JSON.parse(await readFile(filePath, "utf8")) as T;
}

/** 使用稳定两空格格式写入 JSON。 */
async function writeJson(filePath: string, value: unknown): Promise<void> {
  await mkdir(path.dirname(filePath), { recursive: true });
  await writeFile(filePath, `${JSON.stringify(value, null, 2)}\n`, "utf8");
}

/** 返回稳定排序的全部 rogue_N 主题 ID。 */
function allTopicIds(table: RoguelikeTopicTableForExport): string[] {
  return Object.keys(table.details)
    .filter((topicId) => /^rogue_\d+$/.test(topicId))
    .sort(
      (left, right) =>
        Number(left.replace("rogue_", "")) - Number(right.replace("rogue_", "")),
    );
}

/** 校验并返回当前 GameData 中的全部主题 ID。 */
function selectTopicIds(table: RoguelikeTopicTableForExport): string[] {
  const topicIds = allTopicIds(table);
  for (const topicId of topicIds) {
    if (!/^rogue_\d+$/.test(topicId)) throw new Error(`主题 ID 格式无效：${topicId}`);
    if (!table.details[topicId] || !table.topics[topicId]) {
      throw new Error(`GameData 中不存在主题：${topicId}`);
    }
    if (!table.customizeData[topicId]?.difficulties) {
      throw new Error(`GameData 中不存在主题难度扩展：${topicId}`);
    }
  }
  return topicIds;
}

/** 读取一次肉鸽主题表，并保留原始文本供藏品产物计算哈希。 */
async function readRoguelikeTopicTable(paths: GameDataExportPaths): Promise<{
  table: RoguelikeTopicTableForExport;
  sourceSha256: string;
}> {
  const tablePath = path.join(paths.gameData, "excel", "roguelike_topic_table.json");
  const tableJson = await readFile(tablePath, "utf8");
  return {
    table: JSON.parse(tableJson) as RoguelikeTopicTableForExport,
    // 内容哈希保证重复导出可比较，不写入每次变化的生成时间。
    sourceSha256: createHash("sha256").update(tableJson).digest("hex"),
  };
}

/** 按主题导出包装藏品列表。 */
async function exportRelics(
  paths: GameDataExportPaths,
  table: RoguelikeTopicTableForExport,
  sourceSha256: string,
  topicIds: readonly string[],
): Promise<RelicsExportSectionResult> {
  const outputDirectory = path.join(paths.output, "relics");
  for (const topicId of topicIds) {
    const topic = table.topics[topicId]!;
    const artifact = buildWrappedRelicTopicArtifact({
      topicId,
      topicName: typeof topic.name === "string" ? topic.name : topicId,
      detail: table.details[topicId]!,
      sourceSha256,
    });
    await writeJson(path.join(outputDirectory, `${topicId}.json`), artifact);
  }
  return {
    scope: "relics",
    fileCount: topicIds.length,
    itemCount: topicIds.reduce(
      (count, topicId) =>
        count +
        Object.values(table.details[topicId]!.items).filter((item) => item.type === "RELIC")
          .length,
      0,
    ),
    outputPath: displayPath(paths.root, outputDirectory),
  };
}

/** 按主题 ID 原封导出主题入口对象。 */
async function exportTopics(
  paths: GameDataExportPaths,
  table: RoguelikeTopicTableForExport,
  topicIds: readonly string[],
): Promise<RelicsExportSectionResult> {
  const outputDirectory = path.join(paths.output, "roguelike", "topics");
  for (const topicId of topicIds) {
    const artifact: ExportedRoguelikeTopicArtifact = {
      schemaVersion: 3,
      topic: table.topics[topicId]!,
      difficulties: table.details[topicId]!.difficulties,
      customizedDifficulties: table.customizeData[topicId]!.difficulties,
      // 条件载体、选项与目标藏品均原封保留，外层只补充可查询的证据链。
      difficultyConditionalRelics: collectDifficultyConditionalRelics(
        topicId,
        table.details[topicId]!,
      ),
      sources: [
        "ArknightsGameData/zh_CN/gamedata/excel/roguelike_topic_table.json",
      ],
    };
    await writeJson(path.join(outputDirectory, `${topicId}.json`), artifact);
  }
  return {
    scope: "topics",
    fileCount: topicIds.length,
    itemCount: topicIds.length,
    outputPath: displayPath(paths.root, outputDirectory),
  };
}

/** 将 GameData levelId 安全解析到 levels 目录中的 JSON。 */
function resolveLevelJsonPath(paths: GameDataExportPaths, levelId: string): string {
  const levelsRoot = path.join(paths.gameData, "levels");
  const relativeLevelPath = `${levelId}.json`.replaceAll("/", path.sep).replaceAll("\\", path.sep);
  const levelPath = path.resolve(levelsRoot, relativeLevelPath.toLowerCase());
  const relativeToLevels = path.relative(levelsRoot, levelPath);
  if (relativeToLevels.startsWith(`..${path.sep}`) || relativeToLevels === "..") {
    throw new Error(`levelId 越出 levels 目录：${levelId}`);
  }
  return levelPath;
}

/** 读取一个主关卡或替换关卡的完整原始 level JSON。 */
async function readLevel(
  paths: GameDataExportPaths,
  levelId: string,
): Promise<ExportedRogueLevelData> {
  return {
    levelId,
    level: await readJson<OriginalGameDataObject>(resolveLevelJsonPath(paths, levelId)),
  };
}

/** 按主题与关卡 ID 导出元数据、主 level 和全部替换 level。 */
async function exportStages(
  paths: GameDataExportPaths,
  table: RoguelikeTopicTableForExport,
  topicIds: readonly string[],
): Promise<RelicsExportSectionResult> {
  const outputDirectory = path.join(paths.output, "roguelike", "stages");
  let stageCount = 0;
  for (const topicId of topicIds) {
    const topic = table.topics[topicId]!;
    const stages = Object.entries(table.details[topicId]!.stages).sort(([left], [right]) =>
      left.localeCompare(right),
    );
    for (const [stageId, stage] of stages) {
      if (stage.id !== stageId) {
        throw new Error(`关卡字典键与 id 不一致：${topicId}/${stageId} !== ${stage.id}`);
      }
      const primary = await readLevel(paths, stage.levelId);
      const replacementLevels = await Promise.all(
        (stage.levelReplaceIds ?? []).map((levelId) => readLevel(paths, levelId)),
      );
      // topic、stage 和 level 都直接引用解析后的原始对象，不改写任何游戏字段。
      const artifact: ExportedRogueStageArtifact = {
        schemaVersion: 1,
        topic,
        stage,
        level: primary.level,
        replacementLevels,
        sources: [
          "ArknightsGameData/zh_CN/gamedata/excel/roguelike_topic_table.json",
          `ArknightsGameData/zh_CN/gamedata/levels/${primary.levelId.toLowerCase()}.json`,
          ...replacementLevels.map(
            (replacement) =>
              `ArknightsGameData/zh_CN/gamedata/levels/${replacement.levelId.toLowerCase()}.json`,
          ),
        ],
      };
      await writeJson(path.join(outputDirectory, topicId, `${stageId}.json`), artifact);
      stageCount += 1;
    }
  }
  return {
    scope: "stages",
    fileCount: stageCount,
    itemCount: stageCount,
    outputPath: displayPath(paths.root, outputDirectory),
  };
}

/** 判断 character_table 记录是否为可获得干员，而不是敌人、召唤物或陷阱。 */
function isPlayableOperator(
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

/** 从基础角色和 patch 形态收集不重复的技能 ID。 */
function collectSkillIds(
  character: ExportedOperatorCharacterData,
  patchCharacters: readonly ExportedOperatorCharacterData[],
): string[] {
  const skillIds = new Set<string>();
  for (const source of [character, ...patchCharacters]) {
    for (const skill of source.skills ?? []) {
      if (skill.skillId) skillIds.add(skill.skillId);
    }
  }
  return [...skillIds].sort();
}

/** 收集引用技能的完整等级数据；引用不存在时立即失败，禁止静默导出残缺干员。 */
function collectSkills(
  skillIds: readonly string[],
  skillTable: Record<string, OriginalGameDataObject>,
): Record<string, OriginalGameDataObject> {
  const skills: Record<string, OriginalGameDataObject> = {};
  for (const skillId of skillIds) {
    const skill = skillTable[skillId];
    if (!skill) throw new Error(`skill_table 缺少干员引用技能：${skillId}`);
    skills[skillId] = skill;
  }
  return skills;
}

/** 收集基础干员和 patch 形态的全部模组展示数据与战斗阶段数据。 */
function collectModules(
  characterIds: readonly string[],
  uniEquipTable: UniEquipTable,
  battleEquipTable: Record<string, OriginalGameDataObject>,
): ExportedOperatorModuleData[] {
  const moduleIds = new Set<string>();
  for (const characterId of characterIds) {
    for (const moduleId of uniEquipTable.charEquip[characterId] ?? []) moduleIds.add(moduleId);
  }
  return [...moduleIds].sort().map((moduleId) => {
    const data = uniEquipTable.equipDict[moduleId];
    if (!data) throw new Error(`uniequip_table.equipDict 缺少干员引用模组：${moduleId}`);
    return {
      id: moduleId,
      data,
      // 初始职业证章没有 battle_equip 战斗阶段，明确输出 null。
      combat: battleEquipTable[moduleId] ?? null,
    };
  });
}

/** 构建一个基础干员的完整 patch 家族，非变身干员返回 null。 */
function buildPatchArtifact(
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
    if (patchTable.unlockConds[formId]) {
      unlockConditions[formId] = patchTable.unlockConds[formId];
    }
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

/** 按干员 ID 导出完整角色、技能等级、模组和职业形态数据。 */
async function exportOperators(paths: GameDataExportPaths): Promise<RelicsExportSectionResult> {
  const excelRoot = path.join(paths.gameData, "excel");
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
  const outputDirectory = path.join(paths.output, "operators");
  const operatorEntries = Object.entries(characterTable)
    .filter(([characterId, character]) => isPlayableOperator(characterId, character))
    .sort(([leftId, left], [rightId, right]) =>
      (left.name ?? leftId).localeCompare(right.name ?? rightId, "zh-CN"),
    );
  const index: ExportedOperatorIndexItem[] = [];

  for (const [characterId, character] of operatorEntries) {
    const patch = buildPatchArtifact(characterId, patchTable);
    const patchCharacters = Object.values(patch?.characters ?? {});
    const relatedCharacterIds = patch
      ? [patch.baseId, ...Object.keys(patch.characters)]
      : [characterId];
    const skills = collectSkills(collectSkillIds(character, patchCharacters), skillTable);
    const modules = collectModules(relatedCharacterIds, uniEquipTable, battleEquipTable);
    const artifact: ExportedOperatorArtifact = {
      schemaVersion: 1,
      id: characterId,
      character,
      skills,
      modules,
      patch,
      sources: [
        "ArknightsGameData/zh_CN/gamedata/excel/character_table.json",
        "ArknightsGameData/zh_CN/gamedata/excel/skill_table.json",
        "ArknightsGameData/zh_CN/gamedata/excel/uniequip_table.json",
        "ArknightsGameData/zh_CN/gamedata/excel/battle_equip_table.json",
        "ArknightsGameData/zh_CN/gamedata/excel/char_patch_table.json",
      ],
    };
    await writeJson(path.join(outputDirectory, `${characterId}.json`), artifact);
    index.push({
      id: characterId,
      name: character.name ?? characterId,
      profession: character.profession ?? "",
      rarity: character.rarity ?? "",
    });
  }
  const indexArtifact: ExportedOperatorIndexArtifact = {
    schemaVersion: 1,
    count: index.length,
    items: index,
  };
  await writeJson(path.join(outputDirectory, "index.json"), indexArtifact);
  return {
    scope: "operators",
    fileCount: operatorEntries.length + 1,
    itemCount: operatorEntries.length,
    outputPath: displayPath(paths.root, outputDirectory),
  };
}

/** 执行一次独立 GameData 导出。 */
export async function exportGameData(
  arguments_: RelicsExportArguments,
): Promise<RelicsExportResult> {
  const paths = resolveGameDataExportPaths(arguments_.outputOverride);
  const topicSource = await readRoguelikeTopicTable(paths);
  const topicIds = selectTopicIds(topicSource.table);
  // 命令不暴露范围选择，固定完整导出，避免消费者拿到缺少关联文件的半套数据。
  const results: RelicsExportSectionResult[] = [
    await exportRelics(paths, topicSource.table, topicSource.sourceSha256, topicIds),
    await exportTopics(paths, topicSource.table, topicIds),
    await exportStages(paths, topicSource.table, topicIds),
    await exportOperators(paths),
  ];

  return {
    outputRoot: displayPath(paths.root, paths.output),
    results,
  };
}

/** 打印独立 GameData 导出器帮助。 */
function printHelp(): void {
  console.log(`用法：
  pnpm relics:export
  pnpm relics:export --out D:\\arkrog-data
  pnpm relics:export --out ./exports

命令始终导出全部藏品、肉鸽主题、关卡和干员，不接受范围或主题参数。
--out 支持绝对路径；相对路径统一以 monorepo 根目录解析。
缺省输出目录：docs/game/game-data。
本命令只读取 ArknightsGameData，不连接或构建 Kuzu。`);
}

/** CLI 主入口。 */
async function main(): Promise<void> {
  const arguments_ = parseGameDataExportArguments(process.argv.slice(2));
  if (arguments_.help) {
    printHelp();
    return;
  }
  console.log(JSON.stringify(await exportGameData(arguments_), null, 2));
}

// 仅直接执行脚本时启动 CLI；测试导入参数解析器时不得触发全量文件写入。
const currentFilePath = path.resolve(fileURLToPath(import.meta.url));
const entryFilePath = process.argv[1] ? path.resolve(process.argv[1]) : "";
if (currentFilePath === entryFilePath) await main();
