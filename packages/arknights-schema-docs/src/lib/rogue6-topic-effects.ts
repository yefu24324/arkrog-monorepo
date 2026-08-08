/** rogue_6 实托邦、乌托邦和概念体的共享展示模型与筛选规则。 */

import type { ExportedRogue6TopicExtReport } from '@arkrog/arknights-gamedata-report';
import type { FormulaWritableZoneId } from '@arkrog/arknights-knowledge-graph/formula';
import MD5 from 'crypto-js/md5';
import {
  analyzeRogue6TopicSpecEffect,
  ROGUE6_ISOLATED_STONE_DOWN_ID,
  ROGUE6_ISOLATED_STONE_UP_ID,
  type Rogue6TopicSpecSelection,
} from '@arkrog/arknights-knowledge-graph/mechanics';
import { ZONE_FILTER_NONE } from './roguelike-difficulties';

/** 三类表格的稳定分类。 */
export type Rogue6TopicEffectKind = Rogue6TopicSpecSelection['kind'];

/** 一行可展示、搜索、筛选和选择的主题效果。 */
export interface Rogue6TopicEffectRow {
  id: string;
  kind: Rogue6TopicEffectKind;
  sourceId: string;
  name: string;
  category: string;
  description: string;
  flavorText: string | null;
  iconUrl: string;
  selection: Rogue6TopicSpecSelection;
  zones: FormulaWritableZoneId[];
  /** 展开行保留完整 report 数据，避免为了表格丢失证据。 */
  raw: unknown;
}

/** 三张表按产品顺序组成的行集合。 */
export interface Rogue6TopicEffectRows {
  realUtopia: Rogue6TopicEffectRow[];
  utopia: Rogue6TopicEffectRow[];
  conceptualEntities: Rogue6TopicEffectRow[];
}

const IMAGE_HOST = 'https://media.prts.wiki/';

/** PRTS 文件服务器使用完整文件名的 MD5 前两级作为稳定目录。 */
function prtsIconUrl(prefix: '乌托邦幸福论' | '零件', name: string): string {
  const fileName = `沉沦者的黑流树海_${prefix}_${name}.png`;
  const hash = MD5(fileName).toString();
  return `${IMAGE_HOST}${hash.slice(0, 1)}/${hash.slice(0, 2)}/${encodeURIComponent(fileName)}`;
}

/** 按选择独立分析一行，只保留能够写入 FormulaBook 的乘区。 */
function analyzeZones(
  report: ExportedRogue6TopicExtReport,
  selection: Rogue6TopicSpecSelection,
  enabled: boolean,
): FormulaWritableZoneId[] {
  if (!enabled) return [];
  return [...new Set(analyzeRogue6TopicSpecEffect(report, selection)
    .flatMap((analysis): FormulaWritableZoneId[] =>
      analysis.status === 'supported' ? [analysis.zoneId] : []))];
}

/** 数字后缀决定 GameData 展示顺序，阶段字母继续按早中晚排列。 */
function numericIdOrder(left: string, right: string): number {
  const leftParts = left.match(/(\d+)(?:_([a-z]))?$/i);
  const rightParts = right.match(/(\d+)(?:_([a-z]))?$/i);
  const numberDifference = Number(leftParts?.[1] ?? 0) - Number(rightParts?.[1] ?? 0);
  return numberDifference || String(leftParts?.[2] ?? '').localeCompare(String(rightParts?.[2] ?? ''));
}

/** 构建实托邦 10 类 × 3 阶段的三十行。 */
function buildRealUtopiaRows(
  report: ExportedRogue6TopicExtReport,
  withAnalysis: boolean,
): Rogue6TopicEffectRow[] {
  return Object.values(report.realUtopia.effects)
    .sort((left, right) => numericIdOrder(left.id, right.id))
    .map((effect) => {
      const selection = { kind: 'realUtopia', id: effect.id } as const;
      return {
        id: effect.id,
        kind: selection.kind,
        sourceId: effect.id,
        name: effect.name,
        category: effect.levelName,
        description: effect.functionDesc,
        flavorText: effect.desc || null,
        iconUrl: prtsIconUrl('乌托邦幸福论', effect.name),
        selection,
        zones: analyzeZones(report, selection, withAnalysis),
        raw: { effect, archive: report.realUtopia.archive[effect.id] ?? null },
      };
    });
}

/** 为“孤立石林”派生两个互斥状态，其余乌托邦保持一条原始对象一行。 */
function utopiaSelectionIds(sourceId: string): string[] {
  return sourceId === 'variation_4'
    ? [ROGUE6_ISOLATED_STONE_UP_ID, ROGUE6_ISOLATED_STONE_DOWN_ID]
    : [sourceId];
}

/** 构建九条原始乌托邦 Buff 派生出的十行。 */
function buildUtopiaRows(
  report: ExportedRogue6TopicExtReport,
  withAnalysis: boolean,
): Rogue6TopicEffectRow[] {
  return Object.values(report.utopia.effects)
    .sort((left, right) => numericIdOrder(left.id, right.id))
    .flatMap((effect) => utopiaSelectionIds(effect.id).map((id) => {
      const selection = { kind: 'utopia', id } as const;
      const state = id === ROGUE6_ISOLATED_STONE_UP_ID
        ? '范围内存在我方干员'
        : id === ROGUE6_ISOLATED_STONE_DOWN_ID
          ? '范围内不存在我方干员'
          : null;
      return {
        id,
        kind: selection.kind,
        sourceId: effect.id,
        name: `${effect.outerName ?? effect.innerName ?? effect.id}${state ? `（${state}）` : ''}`,
        category: effect.type ?? '-',
        description: state
          ? `${effect.functionDesc}（当前行：${state}）`
          : effect.functionDesc,
        flavorText: effect.desc || null,
        iconUrl: prtsIconUrl('乌托邦幸福论', effect.outerName ?? effect.innerName ?? effect.id),
        selection,
        zones: analyzeZones(report, selection, withAnalysis),
        raw: {
          effect,
          archive: report.utopia.archive[effect.id] ?? null,
          derivedState: state,
        },
      };
    }));
}

/** 构建六个概念体，并按物品 sortId 保持档案顺序。 */
function buildConceptualEntityRows(
  report: ExportedRogue6TopicExtReport,
  withAnalysis: boolean,
): Rogue6TopicEffectRow[] {
  return Object.values(report.conceptualEntities.entries)
    .sort((left, right) => left.item.sortId - right.item.sortId)
    .map((entry) => {
      const selection = { kind: 'conceptualEntity', id: entry.item.id } as const;
      return {
        id: entry.item.id,
        kind: selection.kind,
        sourceId: entry.item.id,
        name: entry.item.name,
        category: entry.effect.node,
        description: entry.effect.scrapDesc,
        flavorText: entry.item.description,
        iconUrl: prtsIconUrl('零件', entry.item.name),
        selection,
        zones: analyzeZones(report, selection, withAnalysis),
        raw: { type: report.conceptualEntities.type, ...entry },
      };
    });
}

/** 一次构建三张表，校验页可关闭 Mechanics 分析以保留纯占位。 */
export function buildRogue6TopicEffectRows(
  report: ExportedRogue6TopicExtReport,
  withAnalysis: boolean,
): Rogue6TopicEffectRows {
  return {
    realUtopia: buildRealUtopiaRows(report, withAnalysis),
    utopia: buildUtopiaRows(report, withAnalysis),
    conceptualEntities: buildConceptualEntityRows(report, withAnalysis),
  };
}

/** 搜索覆盖名称、ID、分类、原文、完整详情和乘区名称。 */
export function rogue6TopicEffectMatchesSearch(
  row: Rogue6TopicEffectRow,
  query: string,
  comments: Readonly<Record<string, string>>,
): boolean {
  if (!query) return true;
  const text = [
    row.id,
    row.sourceId,
    row.name,
    row.category,
    row.description,
    row.flavorText,
    JSON.stringify(row.raw),
    ...row.zones.flatMap((zoneId) => [zoneId, comments[zoneId]]),
  ].filter(Boolean).join(' ').toLowerCase();
  return text.includes(query);
}

/** 乘区筛选与藏品、难度保持全部命中语义。 */
export function rogue6TopicEffectMatchesZones(
  row: Rogue6TopicEffectRow,
  selected: ReadonlySet<string>,
): boolean {
  if (selected.size === 0) return true;
  for (const zoneId of selected) {
    if (zoneId === ZONE_FILTER_NONE) {
      if (row.zones.length > 0) return false;
    } else if (!row.zones.includes(zoneId as FormulaWritableZoneId)) {
      return false;
    }
  }
  return true;
}
