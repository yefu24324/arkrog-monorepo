import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

import {
  classifyEffect,
  DAMAGE_ZONES,
} from "./domain/damage-zones.js";
import { resolveRepositoryPaths, toRepositoryPath } from "./paths.js";
import { runCypher } from "./query.js";
import type { EffectContext } from "./types.js";

/** GameData 中导出器使用的最小黑板结构。 */
interface BlackboardValue {
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
  buffs: BuffElement[];
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
}

/** 避免 Markdown 表格被原始文本中的管道符或换行打断。 */
function markdown(value: unknown): string {
  return String(value ?? "")
    .replaceAll("|", "\\|")
    .replace(/\r?\n/g, "<br>")
    .trim();
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
function deriveCondition(
  events: string,
  blackboard: BlackboardValue[],
): string {
  const parts = events
    .split(" | ")
    .filter(Boolean)
    .map(translateEvent);
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
    };
    grouped.set(effectId, [...(grouped.get(effectId) ?? []), normalized]);
  }
  return grouped;
}

/** 将黑板数组转换成领域分类器使用的上下文。 */
function effectContext(buff: BuffElement): EffectContext {
  return {
    effectKey: buff.key,
    parameters: new Map(
      buff.blackboard.map((parameter) => [
        parameter.key,
        parameter.valueStr ?? parameter.value,
      ]),
    ),
  };
}

/** 生成与图谱 Effect.parameters 一致的黑板摘要。 */
function summarizeBlackboard(blackboard: BlackboardValue[]): string {
  return blackboard
    .map((parameter) => `${parameter.key}=${parameter.valueStr ?? parameter.value}`)
    .join(", ");
}

/** 递归提取战斗模板 Action 组件名。 */
function templateComponents(value: unknown, target = new Set<string>()): Set<string> {
  if (Array.isArray(value)) {
    value.forEach((entry) => templateComponents(entry, target));
    return target;
  }
  if (!value || typeof value !== "object") return target;
  for (const [key, child] of Object.entries(value)) {
    if (key === "$type" && typeof child === "string") {
      target.add(child.split(",")[0]?.replace("Torappu.Battle.Action.Nodes+", "") ?? child);
    } else {
      templateComponents(child, target);
    }
  }
  return target;
}

/** 为尚未进入主图的 charBuffData 效果生成同构乘区结果。 */
function classifyCharacterBuff(
  topicId: string,
  itemId: string,
  characterBuffId: string,
  buff: BuffElement,
  buffIndex: number,
  templates: Record<string, { eventToActions?: Record<string, unknown> }>,
): GraphEffectRow[] {
  const context = effectContext(buff);
  const mechanicValue = context.parameters.get("key");
  const mechanic = typeof mechanicValue === "string" ? mechanicValue : "";
  const template = templates[mechanic];
  const base = {
    itemId,
    effectId: `effect:${topicId}:charBuffData:${characterBuffId}:${buffIndex}`,
    effectKey: buff.key,
    parameters: summarizeBlackboard(buff.blackboard),
    jsonPath: `$.details.${topicId}.charBuffData[${JSON.stringify(characterBuffId)}].buffs[${buffIndex}]`,
    mechanic,
    events: Object.keys(template?.eventToActions ?? {}).sort().join(" | "),
    components: [...templateComponents(template)].sort().join(" | "),
  };
  const mappings = classifyEffect(context);
  if (mappings.length === 0) {
    return [{
      ...base,
      zoneId: "",
      symbol: "",
      zoneName: "",
      formula: "",
      status: "",
      reason: "",
      evidencePath: "",
    }];
  }
  return mappings.map((mapping) => {
    const zone = DAMAGE_ZONES.find((candidate) => candidate.id === mapping.zoneId);
    return {
      ...base,
      zoneId: mapping.zoneId,
      symbol: zone?.symbol ?? mapping.zoneId,
      zoneName: zone?.name ?? mapping.zoneId,
      formula: zone?.formula ?? "",
      status: mapping.status,
      reason: mapping.reason,
      evidencePath: mapping.evidencePath,
    };
  });
}

/** 区分未建模战斗效果与明确不进入伤害公式的载体效果。 */
function fallbackZone(effectKey: string, parameters: string, components: string): string {
  const combatSignal = `${effectKey} ${parameters} ${components}`;
  return /atk|attack|damage|def|resistance|max_hp|attack_speed|攻击|伤害|防御|法抗|生命|攻速/i.test(combatSignal)
    ? "UNKNOWN（战斗数值尚未映射）"
    : "N/A（非伤害乘区）";
}

/** 导出指定集成战略主题的全部 RELIC 藏品与逐 buff 乘区明细。 */
export async function exportRelicZoneMarkdown(
  topicId: string,
  outputOverride?: string,
): Promise<{ outputPath: string; itemCount: number; effectCount: number }> {
  if (!/^rogue_\d+$/.test(topicId)) {
    throw new Error(`主题 ID 格式无效：${topicId}`);
  }
  const paths = resolveRepositoryPaths();
  const tablePath = path.join(paths.gameData, "excel", "roguelike_topic_table.json");
  const data = JSON.parse(await readFile(tablePath, "utf8")) as {
    topics: Record<string, { name: string }>;
    details: Record<
      string,
      {
        items: Record<string, RelicItem>;
        relics: Record<string, { buffs: BuffElement[] }>;
        charBuffData: Record<string, CharacterBuff>;
      }
    >;
  };
  const detail = data.details[topicId];
  const topicName = data.topics[topicId]?.name ?? topicId;
  if (!detail) throw new Error(`GameData 中不存在主题：${topicId}`);
  const templatePath = path.join(paths.gameData, "battle", "buff_template_data.json");
  const templates = JSON.parse(await readFile(templatePath, "utf8")) as Record<
    string,
    { eventToActions?: Record<string, unknown> }
  >;

  const graphRows = await runCypher(
    `MATCH (i:Item)-[:ITEM_HAS_EFFECT]->(e:Effect)
     WHERE i.topic = '${topicId}'
     OPTIONAL MATCH (e)-[mapping:EFFECT_ENTERS_ZONE]->(z:DamageZone)
     OPTIONAL MATCH (e)-[:EFFECT_USES_MECHANIC]->(mechanic:Mechanic)
     RETURN i.rawId AS itemId, e.id AS effectId, e.key AS effectKey,
            e.parameters AS parameters, e.jsonPath AS jsonPath,
            mechanic.name AS mechanic, mechanic.events AS events,
            mechanic.componentTypes AS components, z.id AS zoneId,
            z.symbol AS symbol, z.name AS zoneName, z.formula AS formula,
            mapping.status AS status, mapping.reason AS reason,
            mapping.evidencePath AS evidencePath
     ORDER BY i.rawId, e.jsonPath, z.stage`,
  );
  const graphByEffect = groupGraphRows(graphRows as Record<string, unknown>[]);
  const items = Object.values(detail.items)
    .filter((item) => item.type === "RELIC")
    .sort((left, right) => left.sortId - right.sortId || left.id.localeCompare(right.id));

  const summaryRows: string[] = [];
  const detailRows: string[] = [];
  let effectCount = 0;
  let verifiedCount = 0;
  let inferredCount = 0;
  for (const [itemIndex, item] of items.entries()) {
    const directBuffs = (detail.relics[item.id]?.buffs ?? []).map((buff, buffIndex) => ({
      buff,
      buffIndex,
      source: "relics",
      graphEffects: graphByEffect.get(`effect:${topicId}:${item.id}:${buffIndex}`) ?? [],
    }));
    const characterBuffs = Object.values(detail.charBuffData)
      .filter((characterBuff) =>
        characterBuff.relatedItemId === item.id || characterBuff.iconId === item.id,
      )
      .flatMap((characterBuff) =>
        characterBuff.buffs.map((buff, buffIndex) => ({
          buff,
          buffIndex,
          source: `charBuffData:${characterBuff.id}`,
          graphEffects: classifyCharacterBuff(
            topicId,
            item.id,
            characterBuff.id,
            buff,
            buffIndex,
            templates,
          ),
        })),
      );
    const effects = [...directBuffs, ...characterBuffs];
    const itemZones = new Set<string>();
    const itemConditions = new Set<string>();
    effects.forEach(({ buff, buffIndex, source, graphEffects }) => {
      effectCount += 1;
      const firstGraph = graphEffects[0];
      const conditions = deriveCondition(firstGraph?.events ?? "", buff.blackboard);
      itemConditions.add(conditions);
      const zones = graphEffects.filter((row) => row.zoneId);
      zones.forEach((row) => itemZones.add(`${row.zoneName}（${row.symbol || row.zoneId}）`));
      const zoneText = zones.length
        ? zones.map((row) => `${row.zoneName}（${row.symbol || row.zoneId}）`).join("；")
        : fallbackZone(buff.key, firstGraph?.parameters ?? summarizeBlackboard(buff.blackboard), firstGraph?.components ?? "");
      const status = zones.length
        ? [...new Set(zones.map((row) => row.status))].join("/")
        : zoneText.startsWith("UNKNOWN")
          ? "unknown"
          : "not_applicable";
      verifiedCount += zones.some((row) => row.status === "verified") ? 1 : 0;
      inferredCount += zones.some((row) => row.status === "inferred") ? 1 : 0;
      const reason = zones.map((row) => row.reason).filter(Boolean).join("；");
      const evidence = zones.map((row) => row.evidencePath).filter(Boolean).join("；");
      detailRows.push(
        `| ${itemIndex + 1} | ${markdown(item.id)} | ${markdown(item.name)} | ${markdown(source)} | ${buffIndex + 1} | ${markdown(buff.key)} | ${markdown(firstGraph?.parameters ?? summarizeBlackboard(buff.blackboard))} | ${markdown(firstGraph?.mechanic ?? "")} | ${markdown(firstGraph?.components ?? "")} | ${markdown(conditions)} | ${markdown(zoneText)} | ${markdown(status)} | ${markdown(reason)} | ${markdown(evidence)} | ${markdown(firstGraph?.jsonPath ?? "")} |`,
      );
    });
    summaryRows.push(
      `| ${itemIndex + 1} | ${markdown(item.id)} | ${markdown(item.name)} | ${markdown(item.rarity)} | ${markdown(item.usage)} | ${markdown([...itemConditions].join("；"))} | ${markdown([...itemZones].join("；") || (/攻击|伤害|防御|法抗|生命|攻速/.test(item.usage ?? "") ? "UNKNOWN（战斗数值尚未映射）" : "N/A（非伤害乘区）"))} | ${effects.length} |`,
    );
  }

  const generatedAt = new Date().toISOString();
  const outputPath = outputOverride
    ? path.resolve(paths.root, outputOverride)
    : path.join(paths.root, "docs", "game", topicName, `${topicName}藏品乘区与生效条件表.md`);
  const content = `# ${topicName}（${topicId}）藏品乘区与生效条件表

> 生成时间：${generatedAt}  
> 数据源：\`ArknightsGameData/zh_CN/gamedata/excel/roguelike_topic_table.json\`、\`buff_template_data.json\`、\`packages/arknights-schema\`、\`docs/game\`。  
> 口径：只统计 \`details.${topicId}.items\` 中 \`type = RELIC\` 的 ${items.length} 件藏品。同一藏品的多个 buff 在明细表中分行。

## 覆盖情况

| 指标 | 数量 |
|---|---:|
| 藏品 | ${items.length} |
| buff 明细 | ${effectCount} |
| 含 verified 乘区的 buff | ${verifiedCount} |
| 含 inferred 乘区的 buff | ${inferredCount} |

\`UNKNOWN\` 表示效果涉及战斗数值，但当前图谱没有足够证据映射到公式乘区；\`N/A\` 表示奖励、资源、部署规则等不进入伤害乘区。生效条件优先来自战斗模板事件和黑板选择器，完整自然语言限制保留在“效果与条件原文”。

## 藏品汇总

| # | 藏品 ID | 名称 | 稀有度 | 效果与条件原文 | 机器可见生效条件 | 涉及乘区 | buff 数 |
|---:|---|---|---|---|---|---|---:|
${summaryRows.join("\n")}

## Buff 与证据明细

| 藏品序号 | 藏品 ID | 名称 | 效果来源 | buff # | buff 类型 | 黑板 | 战斗模板 | Action 组件 | 机器可见生效条件 | 乘区 | 证据状态 | 判定理由 | 证据路径 | 原始 JSON 路径 |
|---:|---|---|---|---:|---|---|---|---|---|---|---|---|---|---|
${detailRows.join("\n")}
`;
  await mkdir(path.dirname(outputPath), { recursive: true });
  await writeFile(outputPath, content, "utf8");
  return {
    outputPath: toRepositoryPath(paths.root, outputPath),
    itemCount: items.length,
    effectCount,
  };
}
