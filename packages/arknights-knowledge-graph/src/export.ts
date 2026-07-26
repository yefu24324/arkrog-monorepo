import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

import { resolveRepositoryPaths, toRepositoryPath } from "./paths.js";
import { runCypher } from "./query.js";

/** GameData 中导出器使用的最小黑板结构。 */
export interface BlackboardValue {
  /** 黑板参数名。 */
  key: string;
  /** 数值参数。 */
  value: number;
  /** 字符串参数。 */
  valueStr: string | null;
}

/** GameData 中可由藏品或角色附加表提供的 buff。 */
interface BuffElement {
  /** buff 类型。 */
  key: string;
  /** buff 黑板。 */
  blackboard: BlackboardValue[];
}

/** 部分藏品通过 charBuffData 间接给指定干员附加效果。 */
interface CharacterBuff {
  /** 角色 buff ID。 */
  id: string;
  /** 可直接关联的藏品 ID。 */
  relatedItemId: string | null;
  /** 前八种新典训使用藏品 ID 作为图标 ID。 */
  iconId: string;
  /** 实际战斗 buff。 */
  buffs?: BuffElement[];
}

/** GameData 中导出器使用的最小藏品结构。 */
interface RelicItem {
  /** 藏品 ID。 */
  id: string;
  /** 藏品名称。 */
  name: string;
  /** 效果及条件原文。 */
  usage: string | null;
  /** 藏品背景描述。 */
  description: string | null;
  /** 稀有度。 */
  rarity: string;
  /** 游戏内排序值。 */
  sortId: number;
  /** 物品类型。 */
  type: string;
}

/** 单条图查询结果。 */
interface GraphEffectRow {
  /** 藏品 ID。 */
  itemId: string;
  /** 效果节点 ID。 */
  effectId: string;
  /** buff 类型。 */
  effectKey: string;
  /** 黑板摘要。 */
  parameters: string;
  /** 原始 JSON 路径。 */
  jsonPath: string;
  /** 效果事实来源。 */
  sourceKind: string;
  /** 战斗模板名。 */
  mechanic: string;
  /** 战斗事件。 */
  events: string;
  /** Action 组件。 */
  components: string;
  /** 乘区 ID。 */
  zoneId: string;
  /** 乘区符号。 */
  symbol: string;
  /** 乘区名称。 */
  zoneName: string;
  /** 公式位置。 */
  formula: string;
  /** 证据状态。 */
  status: string;
  /** 判定理由。 */
  reason: string;
  /** 证据路径。 */
  evidencePath: string;
  /** 命中的可版本化语义规则。 */
  ruleId: string;
}

/** JSON 中单个乘区预测的稳定结构。 */
export interface ExportedZonePrediction {
  /** 乘区 ID。 */
  id: string;
  /** 公式符号。 */
  symbol: string;
  /** 乘区中文名。 */
  name: string;
  /** 公式位置。 */
  formula: string;
  /** verified 或 inferred。 */
  status: string;
  /** 判定原因。 */
  reason: string;
  /** 命中的语义规则 ID。 */
  ruleId: string;
  /** 原始效果和 Action 的证据路径。 */
  evidencePaths: string[];
}

/** JSON 中一条藏品 buff 的完整生产预测。 */
export interface ExportedRelicEffect {
  /** 图谱 Effect 稳定 ID。 */
  effectId: string;
  /** relics 或具体 charBuffData 来源。 */
  source: string;
  /** 原始 buffs 数组的零基下标。 */
  buffIndex: number;
  /** buff 载体类型。 */
  key: string;
  /** 原始结构化黑板。 */
  blackboard: BlackboardValue[];
  /** 便于搜索和展示的黑板摘要。 */
  parameters: string;
  /** 战斗模板事实。 */
  mechanic: {
    /** 模板名。 */
    name: string;
    /** 模板事件。 */
    events: string[];
    /** 模板中的 Action 组件类型。 */
    componentTypes: string[];
  };
  /** 从事件和选择器得到的机器可见生效条件。 */
  condition: string;
  /** predicted、unknown 或 not_applicable。 */
  classification: "predicted" | "unknown" | "not_applicable";
  /** 当前效果命中的证据等级。 */
  evidenceStatuses: string[];
  /** 一个效果可以同时影响多个乘区。 */
  predictions: ExportedZonePrediction[];
  /** 未得到乘区时的明确原因。 */
  unclassifiedReason: string | null;
  /** 原始 GameData JSON 路径。 */
  jsonPath: string;
}

/** JSON 中一件藏品及其全部直接、间接效果。 */
export interface ExportedRelic {
  /** 藏品稳定 ID。 */
  id: string;
  /** 游戏内名称。 */
  name: string;
  /** 稀有度。 */
  rarity: string;
  /** 游戏内排序值。 */
  sortId: number;
  /** 效果与条件原文。 */
  usage: string | null;
  /** 背景描述。 */
  description: string | null;
  /** 机器可见生效条件去重集合。 */
  conditions: string[];
  /** 当前藏品涉及的去重乘区。 */
  zones: Array<{ id: string; symbol: string; name: string }>;
  /** 当前藏品的 buff 数量。 */
  effectCount: number;
  /** 当前藏品的全部 buff 预测。 */
  effects: ExportedRelicEffect[];
}

/** 主题藏品乘区 JSON 的顶层格式。 */
export interface RelicZoneExport {
  /** 导出格式版本，字段结构变化时递增。 */
  schemaVersion: 1;
  /** ISO 8601 生成时间。 */
  generatedAt: string;
  /** 集成战略主题。 */
  topic: { id: string; name: string };
  /** 生产预测实际使用的数据源。 */
  sources: string[];
  /** 导出口径和总数。 */
  scope: { itemType: "RELIC"; itemCount: number; effectCount: number };
  /** 乘区预测覆盖统计。 */
  coverage: {
    /** 至少含一个 verified 预测的效果数。 */
    verifiedEffectCount: number;
    /** 至少含一个 inferred 预测的效果数。 */
    inferredEffectCount: number;
    /** 涉及战斗数值但尚未映射的效果数。 */
    unknownEffectCount: number;
    /** 明确不进入伤害公式的效果数。 */
    notApplicableEffectCount: number;
  };
  /** 主题内全部 RELIC 藏品。 */
  items: ExportedRelic[];
}

/** 将常见战斗事件翻译成可读条件。 */
function translateEvent(event: string): string {
  const translations: Record<string, string> = {
    ON_AFTER_OUTPUT_DAMAGE: "造成伤害后",
    ON_ATTACKED: "受到攻击时",
    ON_ATTACK: "攻击时",
    ON_BUFF_START: "buff 开始时",
    ON_BUFF_TRIGGER: "buff 触发时",
    ON_DEPLOY: "部署时",
    ON_KILLED: "击杀时",
    ON_OUTPUT_DAMAGE: "造成伤害时",
    ON_SKILL_START: "技能开启时",
    ON_TAKE_DAMAGE: "受到伤害时",
  };
  return translations[event] ?? event;
}

/** 从战斗事件和黑板选择器中提炼机器可见的生效条件。 */
function deriveCondition(events: string, blackboard: BlackboardValue[]): string {
  const parts = events.split(" | ").filter(Boolean).map(translateEvent);
  const labels: Record<string, string> = {
    "selector.profession": "职业",
    "selector.sub_profession": "分支职业",
    "selector.buildable": "部署位",
    "selector.enemy_level_type": "敌人等级",
    "selector.enemy": "敌人",
    "selector.enemy_exclude": "排除敌人",
    "selector.char": "角色",
    "selector.side": "阵营",
    trig_type: "触发类型",
    duration: "持续时间",
    interval: "触发间隔",
    max_stack_cnt: "最大层数",
    max_valid_stack_cnt: "有效层数",
    prob: "触发概率",
    node: "节点类型",
  };
  for (const parameter of blackboard) {
    const label = labels[parameter.key];
    if (!label) continue;
    const value = parameter.valueStr ?? parameter.value;
    const suffix = parameter.key === "duration" || parameter.key === "interval" ? "秒" : "";
    parts.push(`${label}=${value}${suffix}`);
  }
  return [...new Set(parts)].join("；") || "常驻/原文未给出额外条件";
}

/** 把 Kuzu 的松散值转换成稳定字符串。 */
function text(value: unknown): string {
  return value === null || value === undefined ? "" : String(value);
}

/** 把 Kuzu 中用竖线连接的集合恢复成 JSON 数组。 */
function splitValues(value: string): string[] {
  return value.split(" | ").filter(Boolean);
}

/** 按效果节点聚合可能存在的多个乘区结论。 */
function groupGraphRows(rows: Record<string, unknown>[]): Map<string, GraphEffectRow[]> {
  const grouped = new Map<string, GraphEffectRow[]>();
  for (const row of rows) {
    const effectId = text(row.effectId);
    const normalized: GraphEffectRow = {
      itemId: text(row.itemId),
      effectId,
      effectKey: text(row.effectKey),
      parameters: text(row.parameters),
      jsonPath: text(row.jsonPath),
      sourceKind: text(row.sourceKind),
      mechanic: text(row.mechanic),
      events: text(row.events),
      components: text(row.components),
      zoneId: text(row.zoneId),
      symbol: text(row.symbol),
      zoneName: text(row.zoneName),
      formula: text(row.formula),
      status: text(row.status),
      reason: text(row.reason),
      evidencePath: text(row.evidencePath),
      ruleId: text(row.ruleId),
    };
    grouped.set(effectId, [...(grouped.get(effectId) ?? []), normalized]);
  }
  return grouped;
}

/** 生成与图谱 Effect.parameters 一致的黑板摘要。 */
function summarizeBlackboard(blackboard: BlackboardValue[]): string {
  return blackboard
    .map((parameter) => `${parameter.key}=${parameter.valueStr ?? parameter.value}`)
    .join(", ");
}

/** 区分未建模战斗效果与明确不进入伤害公式的载体效果。 */
function fallbackClassification(
  effectKey: string,
  parameters: string,
  components: string,
): { classification: "unknown" | "not_applicable"; reason: string } {
  const combatSignal = `${effectKey} ${parameters} ${components}`;
  const isCombatValue = /atk|attack|damage|def|resistance|max_hp|attack_speed|攻击|伤害|防御|法抗|生命|攻速/i.test(combatSignal);
  return isCombatValue
    ? { classification: "unknown", reason: "效果涉及战斗数值，但当前语义规则尚未映射到公式乘区。" }
    : { classification: "not_applicable", reason: "奖励、资源或部署规则等效果不进入伤害乘区。" };
}

/** 将图中一条乘区边转换成公开 JSON 结构。 */
function exportPrediction(row: GraphEffectRow): ExportedZonePrediction {
  return {
    id: row.zoneId,
    symbol: row.symbol || row.zoneId,
    name: row.zoneName,
    formula: row.formula,
    status: row.status,
    reason: row.reason,
    ruleId: row.ruleId,
    evidencePaths: splitValues(row.evidencePath),
  };
}

/** 导出指定集成战略主题的全部 RELIC 藏品与逐 buff 乘区 JSON。 */
export async function exportRelicZoneJson(
  topicId: string,
  outputOverride?: string,
  databaseOverride?: string,
): Promise<{ outputPath: string; itemCount: number; effectCount: number }> {
  if (!/^rogue_\d+$/.test(topicId)) {
    throw new Error(`主题 ID 格式无效：${topicId}`);
  }
  const paths = resolveRepositoryPaths(databaseOverride);
  const tablePath = path.join(paths.gameData, "excel", "roguelike_topic_table.json");
  const data = JSON.parse(await readFile(tablePath, "utf8")) as {
    topics: Record<string, { name: string }>;
    details: Record<string, {
      items: Record<string, RelicItem>;
      relics: Record<string, { buffs: BuffElement[] }>;
      charBuffData: Record<string, CharacterBuff>;
    }>;
  };
  const detail = data.details[topicId];
  const topicName = data.topics[topicId]?.name ?? topicId;
  if (!detail) throw new Error(`GameData 中不存在主题：${topicId}`);

  // 导出器只读取生产图中的预测，避免形成独立于语义规则的旁路分类器。
  const graphRows = await runCypher(
    `MATCH (i:Item)-[:ITEM_HAS_EFFECT]->(e:Effect)
     WHERE i.topic = '${topicId}'
     OPTIONAL MATCH (e)-[mapping:EFFECT_ENTERS_ZONE]->(z:DamageZone)
     OPTIONAL MATCH (e)-[:EFFECT_USES_MECHANIC]->(mechanic:Mechanic)
     RETURN i.rawId AS itemId, e.id AS effectId, e.key AS effectKey,
            e.parameters AS parameters, e.jsonPath AS jsonPath, e.sourceKind AS sourceKind,
            mechanic.name AS mechanic, mechanic.events AS events,
            mechanic.componentTypes AS components, z.id AS zoneId,
            z.symbol AS symbol, z.name AS zoneName, z.formula AS formula,
            mapping.status AS status, mapping.reason AS reason,
            mapping.evidencePath AS evidencePath, mapping.ruleId AS ruleId
     ORDER BY i.rawId, e.jsonPath, z.stage`,
    databaseOverride,
  );
  const graphByEffect = groupGraphRows(graphRows as Record<string, unknown>[]);
  const relicItems = Object.values(detail.items)
    .filter((item) => item.type === "RELIC")
    .sort((left, right) => left.sortId - right.sortId || left.id.localeCompare(right.id));

  let effectCount = 0;
  let verifiedEffectCount = 0;
  let inferredEffectCount = 0;
  let unknownEffectCount = 0;
  let notApplicableEffectCount = 0;
  const exportedItems: ExportedRelic[] = [];

  for (const item of relicItems) {
    const directBuffs = (detail.relics[item.id]?.buffs ?? []).map((buff, buffIndex) => ({
      buff,
      buffIndex,
      source: "relics",
      effectId: `effect:${topicId}:${item.id}:${buffIndex}`,
      jsonPath: `$.details.${topicId}.relics[${JSON.stringify(item.id)}].buffs[${buffIndex}]`,
      graphEffects: graphByEffect.get(`effect:${topicId}:${item.id}:${buffIndex}`) ?? [],
    }));
    const characterBuffs = Object.values(detail.charBuffData)
      .filter((characterBuff) => characterBuff.relatedItemId === item.id || characterBuff.iconId === item.id)
      .flatMap((characterBuff) => (characterBuff.buffs ?? []).map((buff, buffIndex) => ({
        buff,
        buffIndex,
        source: `charBuffData:${characterBuff.id}`,
        effectId: `effect:${topicId}:charBuffData:${characterBuff.id}:${buffIndex}`,
        jsonPath: `$.details.${topicId}.charBuffData[${JSON.stringify(characterBuff.id)}].buffs[${buffIndex}]`,
        // charBuffData 已是生产图中的原始事实，导出器按稳定 Effect ID 读取预测。
        graphEffects: graphByEffect.get(`effect:${topicId}:charBuffData:${characterBuff.id}:${buffIndex}`) ?? [],
      })));
    const effects = [...directBuffs, ...characterBuffs];
    const itemConditions = new Set<string>();
    const itemZones = new Map<string, { id: string; symbol: string; name: string }>();
    const exportedEffects: ExportedRelicEffect[] = [];

    for (const { buff, buffIndex, source, effectId, jsonPath, graphEffects } of effects) {
      effectCount += 1;
      const firstGraph = graphEffects[0];
      const parameters = firstGraph?.parameters ?? summarizeBlackboard(buff.blackboard);
      const condition = deriveCondition(firstGraph?.events ?? "", buff.blackboard);
      const zoneRows = graphEffects.filter((row) => row.zoneId);
      const predictions = zoneRows.map(exportPrediction);
      const fallback = fallbackClassification(buff.key, parameters, firstGraph?.components ?? "");
      const classification = predictions.length > 0 ? "predicted" as const : fallback.classification;
      const evidenceStatuses = [...new Set(zoneRows.map((row) => row.status).filter(Boolean))];

      itemConditions.add(condition);
      predictions.forEach((prediction) => itemZones.set(prediction.id, {
        id: prediction.id,
        symbol: prediction.symbol,
        name: prediction.name,
      }));
      if (evidenceStatuses.includes("verified")) verifiedEffectCount += 1;
      if (evidenceStatuses.includes("inferred")) inferredEffectCount += 1;
      if (classification === "unknown") unknownEffectCount += 1;
      if (classification === "not_applicable") notApplicableEffectCount += 1;

      exportedEffects.push({
        effectId: firstGraph?.effectId ?? effectId,
        source,
        buffIndex,
        key: buff.key,
        blackboard: buff.blackboard,
        parameters,
        mechanic: {
          name: firstGraph?.mechanic ?? "",
          events: splitValues(firstGraph?.events ?? ""),
          componentTypes: splitValues(firstGraph?.components ?? ""),
        },
        condition,
        classification,
        evidenceStatuses,
        predictions,
        unclassifiedReason: classification === "predicted" ? null : fallback.reason,
        jsonPath: firstGraph?.jsonPath ?? jsonPath,
      });
    }

    exportedItems.push({
      id: item.id,
      name: item.name,
      rarity: item.rarity,
      sortId: item.sortId,
      usage: item.usage,
      description: item.description,
      conditions: [...itemConditions],
      zones: [...itemZones.values()],
      effectCount: exportedEffects.length,
      effects: exportedEffects,
    });
  }

  const document: RelicZoneExport = {
    schemaVersion: 1,
    generatedAt: new Date().toISOString(),
    topic: { id: topicId, name: topicName },
    sources: [
      "ArknightsGameData/zh_CN/gamedata/excel/roguelike_topic_table.json",
      "ArknightsGameData/zh_CN/gamedata/battle/buff_template_data.json",
      "packages/arknights-schema/src",
      "packages/arknights-knowledge-graph/src/domain/engine-rules.ts",
    ],
    scope: { itemType: "RELIC", itemCount: relicItems.length, effectCount },
    coverage: {
      verifiedEffectCount,
      inferredEffectCount,
      unknownEffectCount,
      notApplicableEffectCount,
    },
    items: exportedItems,
  };
  const outputPath = outputOverride
    ? path.resolve(paths.root, outputOverride)
    : path.join(paths.root, "docs", "game", topicName, `${topicName}藏品乘区与生效条件表.json`);
  await mkdir(path.dirname(outputPath), { recursive: true });
  await writeFile(outputPath, `${JSON.stringify(document, null, 2)}\n`, "utf8");
  return {
    outputPath: toRepositoryPath(paths.root, outputPath),
    itemCount: relicItems.length,
    effectCount,
  };
}
