/** 乘区校验的人类历史数据契约、比较规则与稳定导出工具。 */

/** 人工留档中的单条 FormulaBook 贡献。 */
export interface HumanZoneItem {
  zoneId: string;
  item: number;
  [key: string]: unknown;
}

/** 人工留档中的单件藏品。 */
export interface HumanRelicValidation {
  id: string;
  name: string;
  zones: HumanZoneItem[];
  [key: string]: unknown;
}

/** 人工文件允许并列保存未来的难度和主题系统数据。 */
export interface HumanZoneValidationDocument {
  relics: HumanRelicValidation[];
  [key: string]: unknown;
}

/** 页面中 Mechanics 与历史版本共用的逐项结果。 */
export interface ZoneItemValue {
  zoneId: string;
  item: number;
}

/** 三方比较的紧凑结果。 */
export interface ZoneValidationComparison {
  graphMechanics: boolean;
  graphHistory: boolean;
  mechanicsHistory: boolean;
  matches: boolean;
}

/** 将 FormulaBook item 统一四舍五入到两位小数。 */
export function roundZoneItem(value: number): number {
  return Math.round((value + Number.EPSILON) * 100) / 100;
}

/** 为错误信息补充稳定的 JSON 路径。 */
function assertRecord(value: unknown, jsonPath: string): asserts value is Record<string, unknown> {
  if (!value || typeof value !== 'object' || Array.isArray(value)) {
    throw new Error(`${jsonPath} 必须是对象`);
  }
}

/** 解析并严格校验人工历史文件，同时保留未知字段。 */
export function parseHumanZoneValidation(
  value: unknown,
  writableZoneIds: ReadonlySet<string>,
): HumanZoneValidationDocument {
  assertRecord(value, '$');
  if (!Array.isArray(value.relics)) throw new Error('$.relics 必须是数组');
  const relicIds = new Set<string>();
  const relics = value.relics.map((candidate, relicIndex): HumanRelicValidation => {
    const relicPath = `$.relics[${relicIndex}]`;
    assertRecord(candidate, relicPath);
    if (typeof candidate.id !== 'string' || candidate.id.trim().length === 0) {
      throw new Error(`${relicPath}.id 必须是非空字符串`);
    }
    if (relicIds.has(candidate.id)) throw new Error(`${relicPath}.id 与已有藏品重复：${candidate.id}`);
    relicIds.add(candidate.id);
    if (typeof candidate.name !== 'string' || candidate.name.trim().length === 0) {
      throw new Error(`${relicPath}.name 必须是非空字符串`);
    }
    if (!Array.isArray(candidate.zones)) throw new Error(`${relicPath}.zones 必须是数组`);
    const zones = candidate.zones.map((zoneCandidate, zoneIndex): HumanZoneItem => {
      const zonePath = `${relicPath}.zones[${zoneIndex}]`;
      assertRecord(zoneCandidate, zonePath);
      if (typeof zoneCandidate.zoneId !== 'string' || !writableZoneIds.has(zoneCandidate.zoneId)) {
        throw new Error(`${zonePath}.zoneId 不是 FormulaBook 可写乘区：${String(zoneCandidate.zoneId)}`);
      }
      if (typeof zoneCandidate.item !== 'number' || !Number.isFinite(zoneCandidate.item)) {
        throw new Error(`${zonePath}.item 必须是有限数字`);
      }
      return { ...zoneCandidate, zoneId: zoneCandidate.zoneId, item: zoneCandidate.item };
    });
    return { ...candidate, id: candidate.id, name: candidate.name, zones };
  });
  return { ...value, relics };
}

/** 将 zone 集合变成与排列无关的稳定签名。 */
function zoneSetSignature(zoneIds: readonly string[]): string {
  return [...new Set(zoneIds)].sort().join('|');
}

/** 将逐项结果变成保留重复次数、但忽略排列顺序的签名。 */
function zoneItemMultisetSignature(items: readonly ZoneItemValue[]): string {
  return items
    .map(({ zoneId, item }) => `${zoneId}\u0000${roundZoneItem(item)}`)
    .sort()
    .join('|');
}

/** 按确认口径比较 Graph、Mechanics 与历史版本。 */
export function compareZoneValidation(
  graphZoneIds: readonly string[],
  mechanicsItems: readonly ZoneItemValue[],
  history: HumanRelicValidation | undefined,
): ZoneValidationComparison {
  const mechanicsZoneIds = mechanicsItems.map((entry) => entry.zoneId);
  const historyItems = history?.zones ?? [];
  const historyZoneIds = historyItems.map((entry) => entry.zoneId);
  const graphMechanics = zoneSetSignature(graphZoneIds) === zoneSetSignature(mechanicsZoneIds);
  // 未记录、不涉及乘区、待分类和待支持都归一为空结果，彼此对照视为一致。
  const graphHistory = zoneSetSignature(graphZoneIds) === zoneSetSignature(historyZoneIds);
  const mechanicsHistory = zoneSetSignature(mechanicsZoneIds) === zoneSetSignature(historyZoneIds)
    && zoneItemMultisetSignature(mechanicsItems) === zoneItemMultisetSignature(historyItems);
  return {
    graphMechanics,
    graphHistory,
    mechanicsHistory,
    matches: graphMechanics && graphHistory && mechanicsHistory,
  };
}

/** 用当前 Mechanics 结果构造最小、稳定的单件藏品快照。 */
export function createMechanicsHistoryRecord(
  id: string,
  name: string,
  items: readonly ZoneItemValue[],
): HumanRelicValidation {
  return {
    name,
    id,
    zones: items.map(({ zoneId, item }) => ({ zoneId, item: roundZoneItem(item) })),
  };
}

/** 按 GameData 顺序输出当前记录，并把孤立历史记录原序追加到末尾。 */
export function orderHistoryDocument(
  document: HumanZoneValidationDocument,
  currentRelicIds: readonly string[],
): HumanZoneValidationDocument {
  const byId = new Map(document.relics.map((record) => [record.id, record]));
  const currentIdSet = new Set(currentRelicIds);
  const current = currentRelicIds.flatMap((id) => {
    const record = byId.get(id);
    return record ? [record] : [];
  });
  const orphaned = document.relics.filter((record) => !currentIdSet.has(record.id));
  return { ...document, relics: [...current, ...orphaned] };
}

/** 生成可直接保存的格式化 JSON。 */
export function serializeHistoryDocument(
  document: HumanZoneValidationDocument,
  currentRelicIds: readonly string[],
): string {
  return `${JSON.stringify(orderHistoryDocument(document, currentRelicIds), null, 2)}\n`;
}
