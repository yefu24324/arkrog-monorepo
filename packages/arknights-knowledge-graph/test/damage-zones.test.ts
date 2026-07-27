import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import path from "node:path";

import { beforeAll, describe, expect, it } from "vitest";

import {
  ENGINE_FIELD_PATHS,
  extractMechanicActionFacts,
  predictEngineZones,
} from "../src/lib/domain/engine-rules.js";
import { resolveRepositoryPaths } from "../src/tools/paths.js";

/** 人工期望夹具的一条稳定 ID 用例。 */
interface ExpectationCase {
  /** 集成战略主题 ID。 */
  topicId: string;
  /** 藏品稳定 ID，仅用于校验关联未漂移。 */
  itemId: string;
  /** 原始效果所在数据表。 */
  sourceTable: "relics" | "charBuffData";
  /** relic 或 charBuffData 的稳定记录 ID。 */
  sourceId: string;
  /** buffs 数组下标。 */
  buffIndex: number;
  /** 生产图谱使用的原始 JSON 路径。 */
  effectPath: string;
  /** 人工确认的目标乘区。 */
  expectedZoneIds: string[];
  /** 人工复核说明。 */
  note: string;
}

/** 测试夹具元数据；摘要变化时必须人工复核期望。 */
interface ExpectationFixture {
  /** 夹具格式版本。 */
  schemaVersion: number;
  /** 被复核 GameData 的仓库路径。 */
  gameDataPath: string;
  /** 被复核 GameData 的 SHA-256。 */
  gameDataSha256: string;
  /** 稳定 ID 测试用例。 */
  cases: ExpectationCase[];
}

/** 测试所需的最小黑板结构。 */
interface BlackboardValue {
  /** 黑板键。 */
  key: string;
  /** 数值。 */
  value: number;
  /** 可选字符串值。 */
  valueStr: string | null;
}

/** 测试所需的最小 buff 结构。 */
interface BuffElement {
  /** 效果载体类型。 */
  key: string;
  /** 原始黑板。 */
  blackboard: BlackboardValue[];
}

/** 把原始黑板转换为语义规则输入。 */
function parameterMap(blackboard: BlackboardValue[]): ReadonlyMap<string, number | string | null> {
  return new Map(blackboard.map((parameter) => [parameter.key, parameter.valueStr ?? parameter.value]));
}

describe("可更新战斗引擎语义规则", () => {
  const paths = resolveRepositoryPaths();
  let fixture: ExpectationFixture;
  let topicData: {
    details: Record<string, {
      items: Record<string, unknown>;
      relics: Record<string, { buffs?: BuffElement[] }>;
      charBuffData: Record<string, { relatedItemId?: string | null; iconId?: string; buffs?: BuffElement[] }>;
    }>;
  };
  let templates: Record<string, { eventToActions?: Record<string, unknown[]> }>;

  beforeAll(async () => {
    // docs/game 只在测试装载；生产 build/query/export 均不接受该夹具作为输入。
    fixture = JSON.parse(await readFile(path.join(paths.root, "docs", "game", "knowledge-graph", "relic-zone-expectations.json"), "utf8")) as ExpectationFixture;
    const topicContent = await readFile(path.join(paths.root, fixture.gameDataPath), "utf8");
    topicData = JSON.parse(topicContent) as typeof topicData;
    templates = JSON.parse(await readFile(path.join(paths.gameData, "battle", "buff_template_data.json"), "utf8")) as typeof templates;
    const actualDigest = createHash("sha256").update(topicContent).digest("hex");
    expect(actualDigest, "GameData 已变化，请人工复核并更新 docs/game 测试期望").toBe(fixture.gameDataSha256);
  });

  it("把 attack_bonus 的兼容字段路由到局外攻击规则", () => {
    expect(ENGINE_FIELD_PATHS).toContain("item.effect.attack_bonus");
  });

  it("仅靠 GameData、Action 事实和语义规则匹配人工乘区期望", () => {
    for (const expectation of fixture.cases) {
      const detail = topicData.details[expectation.topicId];
      expect(detail?.items[expectation.itemId], `藏品关联漂移：${expectation.note}`).toBeDefined();
      const source = expectation.sourceTable === "relics"
        ? detail?.relics[expectation.sourceId]
        : detail?.charBuffData[expectation.sourceId];
      const buff = source?.buffs?.[expectation.buffIndex];
      expect(buff, `效果路径漂移：${expectation.effectPath}`).toBeDefined();
      if (!buff) continue;

      const parameters = parameterMap(buff.blackboard);
      const mechanicValue = parameters.get("key");
      const mechanicName = typeof mechanicValue === "string" ? mechanicValue : "";
      const actions = extractMechanicActionFacts(
        templates[mechanicName],
        `$[${JSON.stringify(mechanicName)}]`,
      );
      const actualZoneIds = predictEngineZones({
        effectKey: buff.key,
        parameters,
        mechanicName,
        actions,
        sourceKind: expectation.sourceTable === "relics"
          ? "relics"
          : `charBuffData:${expectation.sourceId}`,
        jsonPath: expectation.effectPath,
      }).map((prediction) => prediction.zoneId).sort();

      expect(actualZoneIds, expectation.note).toEqual([...expectation.expectedZoneIds].sort());
    }
  });

  it("从襁褓巨龙原始模板验证敌方生命 FINAL_SCALER 乘区", () => {
    const buff = topicData.details.rogue_6?.relics.rogue_6_start_3?.buffs?.[0];
    expect(buff).toBeDefined();
    if (!buff) return;
    const parameters = parameterMap(buff.blackboard);
    const mechanicName = String(parameters.get("key") ?? "");
    const actions = extractMechanicActionFacts(
      templates[mechanicName],
      `$[${JSON.stringify(mechanicName)}]`,
    );
    const predictions = predictEngineZones({
      effectKey: buff.key,
      parameters,
      mechanicName,
      actions,
      sourceKind: "relics",
      jsonPath: '$.details.rogue_6.relics["rogue_6_start_3"].buffs[0]',
    });

    expect(predictions).toEqual([
      expect.objectContaining({
        ruleId: "enemy-hp-legacy-support-action",
        zoneId: "ENEMY_HP_RELIC",
        status: "verified",
      }),
    ]);
    expect(predictions[0]?.evidencePath).toContain('$["rogue_6_start_3"]');
  });

  it("对断杖-新典训使用 Action 属性语义验证法抗点数直减", () => {
    const expectation = fixture.cases.find((candidate) => candidate.itemId === "rogue_6_relic_assign_2");
    expect(expectation).toBeDefined();
    if (!expectation) return;
    const buff = topicData.details[expectation.topicId]?.charBuffData[expectation.sourceId]?.buffs?.[expectation.buffIndex];
    expect(buff).toBeDefined();
    if (!buff) return;
    const parameters = parameterMap(buff.blackboard);
    const mechanicName = String(parameters.get("key") ?? "");
    const actions = extractMechanicActionFacts(templates[mechanicName], `$[${JSON.stringify(mechanicName)}]`);
    expect(actions).toEqual(expect.arrayContaining([
      expect.objectContaining({
        event: "ON_OUTPUT_DAMAGE",
        componentType: "CreateBuff",
        attributeType: "MAGIC_RESISTANCE",
        formulaItem: "ADDITION",
        buffOwner: "MODIFIER_TARGET",
      }),
    ]));
    const predictions = predictEngineZones({
      effectKey: buff.key,
      parameters,
      mechanicName,
      actions,
      sourceKind: `charBuffData:${expectation.sourceId}`,
      jsonPath: expectation.effectPath,
    });
    expect(predictions).toEqual(expect.arrayContaining([
      expect.objectContaining({ ruleId: "target-res-flat-addition", zoneId: "RES_FLAT", status: "verified" }),
    ]));
    expect(predictions.every((prediction) => !prediction.evidencePath.includes("docs/game"))).toBe(true);
  });

  it("对古堡的子嗣按 ADDITION 解释防御与法抗点数直加", () => {
    const expectation = fixture.cases.find((candidate) => candidate.itemId === "rogue_6_relic_legacy_63");
    expect(expectation).toBeDefined();
    if (!expectation) return;
    const buff = topicData.details[expectation.topicId]?.relics[expectation.sourceId]?.buffs?.[expectation.buffIndex];
    expect(buff).toBeDefined();
    if (!buff) return;
    const parameters = parameterMap(buff.blackboard);
    const mechanicName = String(parameters.get("key") ?? "");
    const actions = extractMechanicActionFacts(templates[mechanicName], `$[${JSON.stringify(mechanicName)}]`);
    const predictions = predictEngineZones({
      effectKey: buff.key,
      parameters,
      mechanicName,
      actions,
      sourceKind: "relics",
      jsonPath: expectation.effectPath,
    });
    // ADDITION 必须只进入点数直加区，不能再残留 global_buff 推断出的倍率区。
    expect(predictions).toEqual(expect.arrayContaining([
      expect.objectContaining({ ruleId: "char-def-runtime-flat-addition", zoneId: "FLAT_CHAR_DEF", status: "verified" }),
      expect.objectContaining({ ruleId: "char-res-runtime-flat-addition", zoneId: "FLAT_CHAR_RES", status: "verified" }),
    ]));
    expect(predictions.some((prediction) => prediction.zoneId === "INNER_CHAR_DEF")).toBe(false);
    expect(predictions.some((prediction) => prediction.zoneId === "INNER_CHAR_RES")).toBe(false);
  });

  it("证据不足时保持未知，不用字段名强行产生乘区", () => {
    const predictions = predictEngineZones({
      effectKey: "immediate_reward",
      parameters: new Map([["count", 1]]),
      mechanicName: "",
      actions: [],
      sourceKind: "relics",
      jsonPath: "$.fixture.unknown",
    });
    expect(predictions).toEqual([]);
  });
});
