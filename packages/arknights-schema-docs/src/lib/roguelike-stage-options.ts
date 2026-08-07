/** 将 GameData 报告中的主题区域和关卡整理为浏览器可用的轻量级联选项。 */

import type {
  ExportedAnyRoguelikeTopicExtReport,
  ExportedRogueStageReport,
} from '@arkrog/arknights-gamedata-report';

/** 关卡选择器需要的最小运行时事实。 */
export interface RoguelikeStageOption {
  code: string;
  difficulty: string;
  id: string;
  isBoss: boolean;
  isElite: boolean;
  levelId: string;
  name: string;
}

/** 一个区域及其可选关卡 ID。 */
export interface RoguelikeStageRegionOption {
  id: string;
  name: string;
  stageIds: string[];
}

/** 单主题的轻量区域、关卡索引。 */
export interface RoguelikeStageOptionsPayload {
  regions: RoguelikeStageRegionOption[];
  stages: Record<string, RoguelikeStageOption>;
  topicId: string;
}

/** 各主题第三层和第五层 Boss 数量来自现有计算器的关卡 ID 约定。 */
const BOSS_COUNTS: Readonly<Record<string, readonly [number, number]>> = {
  rogue_1: [5, 2],
  rogue_2: [3, 2],
  rogue_3: [3, 2],
  rogue_4: [3, 2],
  rogue_5: [3, 2],
  rogue_6: [3, 2],
};

/** rogue_6 精简 topic_ext 后仍需保留的基础区域显示名。 */
const ROGUE_6_BASE_ZONE_NAMES = [
  '玻利瓦尔肤层',
  '甜美的伤口',
  '血色空脉',
  '受害者腐殖',
  '卡德霍之颅',
  '源流交汇处',
] as const;

/** 判断基础战斗关是否属于区域对应的层数。 */
function isBaseStageInRegion(stageId: string, regionIndex: number): boolean {
  const parts = stageId.split('_');
  return (parts[1] === 'n' || parts[1] === 'e')
    && Number(parts[2]) === regionIndex + 1;
}

/** 狭路相逢可在三至五层出现，因此会列入这些区域。 */
function isDuelStageInRegion(stageId: string, regionIndex: number): boolean {
  return regionIndex > 1 && regionIndex < 5 && stageId.split('_')[1] === 'duel';
}

/** 按主题内 Boss 编号恢复其所在层。 */
function isBossStageInRegion(
  topicId: string,
  stageId: string,
  regionIndex: number,
): boolean {
  const parts = stageId.split('_');
  if (parts[1] !== 'b') return false;
  const bossNumber = Number(parts[2]);
  const counts = BOSS_COUNTS[topicId];
  if (!Number.isFinite(bossNumber) || !counts) return false;
  const [zone3Count, zone5Count] = counts;
  if (regionIndex === 2) return bossNumber <= zone3Count;
  if (regionIndex === 4) {
    return bossNumber > zone3Count && bossNumber <= zone3Count + zone5Count;
  }
  if (regionIndex > 4 && regionIndex - bossNumber === zone3Count + zone5Count - 6) {
    return true;
  }
  // 超出已知第三、第五及后续层 Boss 编号范围时不归入任何区域。
  return false;
}

/** 为基础楼层区域筛选普通、紧急、Boss 与多层狭路关卡。 */
function baseRegionStageIds(
  topicId: string,
  regionIndex: number,
  stageIds: readonly string[],
): string[] {
  return stageIds.filter((stageId) =>
    isBaseStageInRegion(stageId, regionIndex)
    || isDuelStageInRegion(stageId, regionIndex)
    || isBossStageInRegion(topicId, stageId, regionIndex));
}

/** 为主题特有区域筛选关卡。 */
function specialRegions(
  topicId: string,
  stageIds: readonly string[],
): RoguelikeStageRegionOption[] {
  if (topicId === 'rogue_5') {
    return [
      {
        id: 'zone_sky_1',
        name: '岁兽残识 · 是非境',
        stageIds: stageIds.filter((id) => id.split('_')[1] === 'sv' && !id.endsWith('_dlc1')),
      },
      {
        id: 'zone_sky_2',
        name: '岁兽残识 · 今昔境',
        stageIds: stageIds.filter((id) => id.split('_')[1] === 'sv' && id.endsWith('_dlc1')),
      },
    ];
  }
  if (topicId === 'rogue_6') {
    return [{
      id: 'zone_portal',
      name: '未萌生的摇篮',
      stageIds: stageIds.filter((id) => id.split('_')[1] === 'c'),
    }];
  }
  return [];
}

/** 为所有主题追加不按楼层划分的公共区域。 */
function sharedRegions(stageIds: readonly string[]): RoguelikeStageRegionOption[] {
  return [
    {
      id: 'zone_incident',
      name: '不期而遇',
      stageIds: stageIds.filter((id) => {
        const parts = id.split('_');
        return parts[1] === 't' || parts[2] === 't';
      }),
    },
    {
      id: 'zone_shop',
      name: '诡异行商',
      stageIds: stageIds.filter((id) => id.split('_')[1] === 'ev'),
    },
    {
      id: 'zone_stashed_recruit',
      name: '指点迷津',
      stageIds: stageIds.filter((id) => {
        const kind = id.split('_')[1];
        return kind === 'fs' || kind === 'dv';
      }),
    },
  ];
}

/** 以普通、紧急、Boss 和稳定 ID 的顺序展示同一区域关卡。 */
function sortStageIds(
  stageIds: readonly string[],
  stages: Readonly<Record<string, RoguelikeStageOption>>,
): string[] {
  return [...stageIds].sort((leftId, rightId) => {
    const left = stages[leftId]!;
    const right = stages[rightId]!;
    if (left.isBoss !== right.isBoss) return left.isBoss ? -1 : 1;
    if (left.isElite !== right.isElite) return left.isElite ? 1 : -1;
    const nameOrder = left.name.localeCompare(right.name, 'zh-CN');
    return nameOrder || left.id.localeCompare(right.id);
  });
}

/** 从完整报告构建不会携带 Level 大对象的区域、关卡索引。 */
export function buildRoguelikeStageOptions(
  topicId: string,
  stageReport: ExportedRogueStageReport,
  topicExt: ExportedAnyRoguelikeTopicExtReport,
): RoguelikeStageOptionsPayload {
  const stages = Object.fromEntries(Object.entries(stageReport).map(([stageId, entry]) => [
    stageId,
    {
      code: entry.stage.code,
      difficulty: entry.stage.difficulty,
      id: entry.stage.id,
      isBoss: Boolean(entry.stage.isBoss),
      isElite: Boolean(entry.stage.isElite),
      levelId: entry.stage.levelId,
      name: entry.stage.name,
    } satisfies RoguelikeStageOption,
  ]));
  const stageIds = Object.keys(stages);
  // rogue_6 的 topic_ext 已精简为三个特殊系统分区，基础楼层从关卡 ID 自身恢复。
  const baseZones = 'realUtopia' in topicExt
    ? ROGUE_6_BASE_ZONE_NAMES.map((name, index) => ({ id: `zone_${index + 1}`, name }))
    : Object.values(topicExt.details.zones)
    // 变体、传送门和深埋迷境不代表独立的基础楼层选项。
      .filter((zone) => /^zone_\d+$/.test(zone.id));
  const regions: RoguelikeStageRegionOption[] = baseZones.map((zone, index) => ({
    id: zone.id,
    name: zone.name,
    stageIds: baseRegionStageIds(topicId, index, stageIds),
  }));
  regions.push(...specialRegions(topicId, stageIds), ...sharedRegions(stageIds));
  return {
    topicId,
    stages,
    regions: regions
      .filter((region) => region.stageIds.length > 0)
      .map((region) => ({
        ...region,
        stageIds: sortStageIds(region.stageIds, stages),
      })),
  };
}
