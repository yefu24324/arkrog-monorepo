/** 集成战略难度 → Kuzu 同源规则 → FormulaContext 的运行时程序。 */

import {
  ROGUE_DIFFICULTY_SEMANTIC_RULES,
  type RogueDifficultySemanticRule,
} from "../domain/difficulty-rules.js";
import { FormulaZoneId } from "../formula/formula-book.js";
import type { FinalDamageType } from "../domain/damage-types.js";
import {
  evaluateBuffActivation,
  type FormulaActivationContext,
} from "./activation.js";
import {
  FormulaContext,
  FormulaItem,
} from "../formula/context.js";
import {
  formulaItemsFromClassifiedEffect,
  toFormulaItemEffect,
  type FormulaItemPlacement,
} from "./relic-items.js";
import {
  routeRelicBuffToZones,
  type RelicBuffZoneRoute,
} from "./relic-programs.js";
import type { ExportedRogueDifficultyConditionalRelic } from "@arkrog/arknights-schema/game-data";
import {
  applyManualTopicRulesToFormulaContext,
  getManualTopicDifficultyEffects,
  type ManualTopicDifficultyEffect,
} from "./topic-rule-programs.js";

/** formula 需要的原始难度最小结构；可直接传 relics:export 的 difficulty。 */
export interface RogueDifficultyForFormula {
  /** 原始模式枚举。 */
  modeDifficulty: string;
  /** 原始难度等级。 */
  grade: number;
  /** 原始显示名。 */
  name: string;
  /** 原始规则描述。 */
  ruleDesc: string;
  /** 当前难度是否允许使用上一局遗留支援。 */
  haveLegacy?: boolean;
}

/** 一条难度效果由图谱同源规则得出的乘区结论。 */
export interface RogueDifficultyZoneEffect {
  /** 稳定效果 ID。 */
  effectId: string;
  /** 原始难度等级。 */
  grade: number;
  /** 原始模式。 */
  modeDifficulty: string;
  /** 进入的乘区。 */
  zoneId: FormulaZoneId;
  /** 规范化贡献值。 */
  value: number;
  /** 实际匹配的原文片段。 */
  matchedText: string;
  /** 目标范围。 */
  target: RogueDifficultySemanticRule["target"];
  /** 伤害类型限制。 */
  damageTypes?: readonly FinalDamageType[];
  /** 命中的稳定语义规则。 */
  rule: RogueDifficultySemanticRule;
  /** 数值事实固定来自 GameData 难度描述。 */
  evidenceKind: "game-data-description";
  /** 数值事实的 GameData 路径。 */
  evidencePath: string;
  /** 用于防止游戏更新后继续套用旧规则的原始难度描述路径。 */
  guardPath: string;
}

/** 单个难度等级的结构化分析结果。 */
export interface RogueDifficultyZoneRoute {
  /** 主题 ID。 */
  topicId: string;
  /** 被分析的原始难度。 */
  difficulty: RogueDifficultyForFormula;
  /** predicted、partial 或 unknown。 */
  classification: "predicted" | "partial" | "unknown";
  /** 去重后的乘区列表。 */
  zoneIds: FormulaZoneId[];
  /** 逐条结构化效果。 */
  effects: RogueDifficultyZoneEffect[];
  /** 没有完全结构化时的明确原因。 */
  unclassifiedReason: string | null;
  /** 难度对象在原始文件中的路径。 */
  jsonPath: string;
}

/** 难度应用函数的完整输入。 */
export interface ApplyRogueDifficultyInput {
  /** 集成战略主题 ID。 */
  topicId: string;
  /** 当前主题全部主难度定义，用于累积较低等级效果。 */
  difficulties: readonly RogueDifficultyForFormula[];
  /** 用户单选的难度；null 表示不应用难度。 */
  selectedDifficulty: RogueDifficultyForFormula | null;
  /** 当前敌人、关卡和时间事实。 */
  activation?: FormulaActivationContext;
  /** relics:export 提取的难度条件藏品与遗留支援。 */
  conditionalRelics?: readonly ExportedRogueDifficultyConditionalRelic[];
  /** 用户确认已经满足并选择的条件藏品关联 ID。 */
  enabledConditionalRelicIds?: readonly string[];
}

/** 难度条件藏品或遗留支援中的单条 buff 路由。 */
export interface RogueDifficultyConditionalRelicEffect {
  /** 未改写的条件关联。 */
  link: ExportedRogueDifficultyConditionalRelic;
  /** 目标 relic.buffs 中的零基下标。 */
  buffIndex: number;
  /** 复用藏品 classify 得出的完整乘区结果。 */
  route: RelicBuffZoneRoute;
}

/** 用户选中难度经过累计后的完整乘区分析。 */
export interface SelectedRogueDifficultyZoneRoute {
  /** 当前选择；null 表示未应用难度。 */
  selectedDifficulty: RogueDifficultyForFormula | null;
  /** 逐等级分析结果，保留 unknown 与 partial。 */
  routes: RogueDifficultyZoneRoute[];
  /** 全部累计效果。 */
  effects: RogueDifficultyZoneEffect[];
  /** 全部累计乘区 ID。 */
  zoneIds: FormulaZoneId[];
  /** 仅在当前精确难度生效的人工主题效果。 */
  manualTopicEffects: ManualTopicDifficultyEffect[];
  /** 当前难度可用条件藏品的逐 buff 路由。 */
  conditionalRelicEffects: RogueDifficultyConditionalRelicEffect[];
}

/** 判断一条条件藏品是否能出现在当前难度的候选支援中。 */
export function conditionalRelicMatchesDifficulty(
  link: ExportedRogueDifficultyConditionalRelic,
  difficulty: RogueDifficultyForFormula,
): boolean {
  if (link.kind === "MODE_GRADE_GRANT") {
    return (
      link.modeDifficulty === difficulty.modeDifficulty &&
      Boolean(link.grades?.includes(difficulty.grade))
    );
  }
  // LEGACY_CHOICE 依赖上一局获得的载体和本局选择；难度只控制是否开放遗留系统。
  return difficulty.haveLegacy === true;
}

/** 生成稳定的原始难度 JSON Path。 */
function difficultyJsonPath(topicId: string, difficultyIndex: number): string {
  return `$.details.${topicId}.difficulties[${difficultyIndex}]`;
}

/** 对单个原始难度执行版本护栏匹配并得出乘区。 */
export function routeRogueDifficultyToZones(input: {
  /** 当前主题。 */
  topicId: string;
  /** 单个原始难度。 */
  difficulty: RogueDifficultyForFormula;
  /** 在 details[topicId].difficulties 中的零基下标。 */
  difficultyIndex?: number;
}): RogueDifficultyZoneRoute {
  const difficultyIndex = input.difficultyIndex ?? 0;
  const jsonPath = difficultyJsonPath(input.topicId, difficultyIndex);
  // 完整原文是规则版本护栏；只按 grade 命中会在游戏更新后静默沿用旧语义。
  const rules = ROGUE_DIFFICULTY_SEMANTIC_RULES.filter(
    (rule) =>
      rule.topicId === input.topicId &&
      rule.modeDifficulty === input.difficulty.modeDifficulty &&
      rule.grade === input.difficulty.grade &&
      rule.expectedRuleDesc === input.difficulty.ruleDesc,
  );
  const effects = rules.map((rule): RogueDifficultyZoneEffect => ({
    // 直接使用版本化规则 ID，新增同等级效果不会改变既有图谱节点主键。
    effectId: `difficulty-effect:${rule.id}`,
    grade: input.difficulty.grade,
    modeDifficulty: input.difficulty.modeDifficulty,
    zoneId: rule.zoneId,
    value: rule.value,
    matchedText: rule.matchedText,
    target: rule.target,
    damageTypes: rule.damageTypes ? [...rule.damageTypes] : undefined,
    rule,
    evidenceKind: "game-data-description",
    evidencePath: `${jsonPath}.ruleDesc`,
    guardPath: `${jsonPath}.ruleDesc`,
  }));
  const partial = rules.some((rule) => rule.coverage === "partial");
  return {
    topicId: input.topicId,
    difficulty: input.difficulty,
    classification: effects.length === 0 ? "unknown" : partial ? "partial" : "predicted",
    zoneIds: [...new Set(effects.map((effect) => effect.zoneId))],
    effects,
    unclassifiedReason:
      effects.length === 0
        ? "客户端 GameData 未提供可验证的结构化战斗效果，或版本化 ruleDesc 已变化。"
        : partial
          ? "该难度还包含主题机制、特定敌人或非公式效果；只写入已结构化部分。"
          : null,
    jsonPath,
  };
}

/** 选择 NORMAL 难度时累计同模式更低等级；其他特殊模式只应用自身。 */
export function selectCumulativeRogueDifficulties(
  difficulties: readonly RogueDifficultyForFormula[],
  selectedDifficulty: RogueDifficultyForFormula | null,
): Array<{ difficulty: RogueDifficultyForFormula; index: number }> {
  if (!selectedDifficulty) return [];
  return difficulties
    .map((difficulty, index) => ({ difficulty, index }))
    .filter(({ difficulty }) => {
      if (difficulty.modeDifficulty !== selectedDifficulty.modeDifficulty) return false;
      return selectedDifficulty.modeDifficulty === "NORMAL"
        ? difficulty.grade <= selectedDifficulty.grade
        : difficulty.grade === selectedDifficulty.grade;
    })
    .sort((left, right) => left.difficulty.grade - right.difficulty.grade);
}

/** 一次得出用户所选难度的累计等级、结构化效果与乘区。 */
export function routeSelectedRogueDifficultyToZones(input: {
  /** 当前主题。 */
  topicId: string;
  /** 当前主题全部原始难度。 */
  difficulties: readonly RogueDifficultyForFormula[];
  /** 用户单选难度。 */
  selectedDifficulty: RogueDifficultyForFormula | null;
  /** relics:export 提取的难度条件藏品与遗留支援。 */
  conditionalRelics?: readonly ExportedRogueDifficultyConditionalRelic[];
}): SelectedRogueDifficultyZoneRoute {
  const routes = selectCumulativeRogueDifficulties(
    input.difficulties,
    input.selectedDifficulty,
  ).map(({ difficulty, index }) =>
    routeRogueDifficultyToZones({ topicId: input.topicId, difficulty, difficultyIndex: index }),
  );
  const effects = routes.flatMap((route) => route.effects);
  // 人工主题规则只读取用户当前精确选择，禁止跟随 NORMAL 难度向上累计。
  const manualTopicEffects = getManualTopicDifficultyEffects({
    topicId: input.topicId,
    selectedDifficulty: input.selectedDifficulty,
  });
  const conditionalRelicEffects = input.selectedDifficulty
    ? (input.conditionalRelics ?? [])
        .filter((link) =>
          conditionalRelicMatchesDifficulty(link, input.selectedDifficulty!),
        )
        .flatMap((link) =>
          link.targetRelic.buffs.map(
            (buff, buffIndex): RogueDifficultyConditionalRelicEffect => ({
              link,
              buffIndex,
              // 条件藏品仍按真实 buff key/blackboard 路由，不从 item.usage 猜乘区。
              route: routeRelicBuffToZones({
                effectId: `difficulty-granted-effect:${input.topicId}:${link.sourceId}:${link.targetId}:${buffIndex}`,
                source: `difficultyConditionalRelic:${link.sourceId}`,
                sourceKind: `difficultyConditionalRelic:${link.sourceId}`,
                buffIndex,
                key: buff.key,
                blackboard: buff.blackboard,
                jsonPath: `$.details.${input.topicId}.relics[${JSON.stringify(link.targetId)}].buffs[${buffIndex}]`,
              }),
            }),
          ),
        )
    : [];
  return {
    selectedDifficulty: input.selectedDifficulty,
    routes,
    effects,
    zoneIds: [
      ...new Set([
        ...effects.map((effect) => effect.zoneId),
        ...manualTopicEffects.map((effect) => effect.zoneId),
        ...conditionalRelicEffects.flatMap((effect) => effect.route.zoneIds),
      ]),
    ],
    manualTopicEffects,
    conditionalRelicEffects,
  };
}

/** 把 levelType 归一到 NORMAL / ELITE / BOSS。 */
function normalizedEnemyLevelType(levelType: string | null | undefined): string {
  if (!levelType) return "";
  const segments = levelType.split(".");
  return (segments.at(-1) ?? levelType).toUpperCase();
}

/** 判断一条难度规则是否在当前运行时事实下生效。 */
function evaluateDifficultyRuleActivation(
  rule: RogueDifficultySemanticRule,
  activation: FormulaActivationContext,
): { active: boolean; reasons: string[] } {
  const reasons: string[] = [];
  const levelType = normalizedEnemyLevelType(activation.enemy?.levelType);
  if (rule.target === "elite" && levelType !== "ELITE") {
    reasons.push(activation.enemy ? "当前敌人不是精英" : "尚未选择敌人，无法确认精英条件");
  }
  if (rule.target === "elite-and-boss" && !["ELITE", "BOSS"].includes(levelType)) {
    reasons.push(
      activation.enemy
        ? "当前敌人不是精英或领袖"
        : "尚未选择敌人，无法确认精英或领袖条件",
    );
  }
  if (rule.target === "boss" && levelType !== "BOSS") {
    reasons.push(activation.enemy ? "当前敌人不是领袖" : "尚未选择敌人，无法确认领袖条件");
  }
  if (rule.stageKinds?.length) {
    const matchesStage =
      (rule.stageKinds.includes("emergency") && activation.stage?.isEmergency) ||
      (rule.stageKinds.includes("danger") && activation.stage?.isDanger);
    if (!matchesStage) reasons.push("当前关卡不是该难度效果要求的紧急作战或险路恶敌");
  }
  if (rule.durationSeconds !== undefined) {
    if (activation.elapsedSeconds === undefined) {
      reasons.push(`缺少敌人登场时间，无法确认前 ${rule.durationSeconds} 秒条件`);
    } else if (activation.elapsedSeconds > rule.durationSeconds) {
      reasons.push(`敌人登场已超过 ${rule.durationSeconds} 秒`);
    }
  }
  if (rule.requiredEnemyBuffs?.length) {
    const currentBuffs = new Set(activation.enemy?.buffKeys ?? []);
    const missing = rule.requiredEnemyBuffs.filter((buff) => !currentBuffs.has(buff));
    if (missing.length) reasons.push(`当前敌人缺少条件状态：${missing.join("、")}`);
  }
  return { active: reasons.length === 0, reasons };
}

/** 将一条已生效难度效果转换成最小公式项写入。 */
function difficultyPlacement(
  effect: RogueDifficultyZoneEffect,
): FormulaItemPlacement {
  return {
    zoneId: effect.zoneId,
    item: new FormulaItem(
      effect.value,
      `${effect.modeDifficulty} ${effect.grade} · ${effect.matchedText}`,
    ),
    route: {
      parameterKey: "ruleDesc",
      ruleId: effect.rule.id,
      reason: effect.rule.description,
      evidencePath: effect.evidencePath,
    },
  };
}

/**
 * 将用户选择的难度及其累计低等级效果写入 FormulaContext。
 * 局外敌人减伤先按当前目标和伤害类型合成总难度值，再写入 max 聚合区，避免逐级 max 丢失累计量。
 */
export function applyRogueDifficultyToFormulaContext(
  context: FormulaContext,
  input: ApplyRogueDifficultyInput,
): FormulaItemPlacement[] {
  const selectedRoute = routeSelectedRogueDifficultyToZones(input);
  // 人工维护主题规则独立写入，不能混入 Kuzu 同源难度 effects。
  const applied = applyManualTopicRulesToFormulaContext(context, {
    topicId: input.topicId,
    selectedDifficulty: input.selectedDifficulty,
  });
  const resistanceEffects: Array<{
    effect: RogueDifficultyZoneEffect;
    active: boolean;
    reasons: string[];
  }> = [];
  for (const effect of selectedRoute.effects) {
    const activation = evaluateDifficultyRuleActivation(effect.rule, input.activation ?? {});
    if (effect.zoneId === FormulaZoneId.藏品局外敌人减伤最大值) {
      resistanceEffects.push({ effect, ...activation });
      continue;
    }
    // 未生效难度效果保留在 selectedRoute，不进入纯公式上下文。
    if (!activation.active) continue;
    const placement = difficultyPlacement(effect);
    // FormulaBook 只接收 BuffContext 中真实存在的来源乘区。
    if (!context.book.hasZone(placement.zoneId)) continue;
    context.addItem(placement.zoneId, placement.item);
    applied.push(placement);
  }

  // 当前难度规则中的减伤均覆盖物理与法术，先累计为一个配置值再交给局外 max 乘区。
  const activeResistance = resistanceEffects.filter((candidate) => candidate.active);
  if (activeResistance.length > 0) {
    const value = activeResistance.reduce((sum, { effect }) => sum + effect.value, 0);
    const placement: FormulaItemPlacement = {
      zoneId: FormulaZoneId.藏品局外敌人减伤最大值,
      item: new FormulaItem(value, "累计难度物理与法术减伤"),
      route: {
        parameterKey: "ruleDesc",
        ruleId: activeResistance.map(({ effect }) => effect.rule.id).join("+"),
        reason: `Kuzu 同源规则累计 ${activeResistance.length} 条当前目标适用的局外难度减伤。`,
        evidencePath: activeResistance[0]?.effect.evidencePath ?? "",
      },
    };
    // 未被旧前端公式定义的机制乘区只保留路由，不写入 FormulaContext。
    if (context.book.hasZone(placement.zoneId)) {
      context.addItem(placement.zoneId, placement.item);
      applied.push(placement);
    }
  }

  // 条件藏品复用真实藏品程序取值，再把来源改写为 difficulty 以保持上下文语义。
  const enabledConditionalRelicIds = new Set(input.enabledConditionalRelicIds ?? []);
  for (const conditional of selectedRoute.conditionalRelicEffects) {
    const effect = toFormulaItemEffect(conditional.route.effect);
    const activation = evaluateBuffActivation(
      effect.key,
      effect.blackboard,
      input.activation ?? {},
    );
    const conditionEnabled = enabledConditionalRelicIds.has(conditional.link.id);
    // 条件关联和 buff 激活必须同时成立，未生效记录仍由 selectedRoute 提供解释。
    if (!conditionEnabled || !activation.active) continue;
    const basePlacements = formulaItemsFromClassifiedEffect(
      {
        id: conditional.link.targetId,
        name: conditional.link.targetItem.name,
      },
      effect,
    );
    for (const base of basePlacements) {
      const placement: FormulaItemPlacement = {
        ...base,
        item: new FormulaItem(
          base.item.value,
          `${conditional.link.kind === "LEGACY_CHOICE" ? "条件支援" : "难度条件藏品"} · ${conditional.link.targetItem.name}`,
        ),
        route: {
          ...base.route,
          evidencePath: conditional.link.evidencePaths[0] ?? conditional.link.jsonPath,
        },
      };
      // 条件藏品同样只能写入 BuffContext 已声明的乘区。
      if (!context.book.hasZone(placement.zoneId)) continue;
      context.addItem(placement.zoneId, placement.item);
      applied.push(placement);
    }
  }
  return applied;
}
