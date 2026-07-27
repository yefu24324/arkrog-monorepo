/** 集成战略难度 → Kuzu 同源规则 → FormulaContext 的运行时程序。 */

import {
  ROGUE_DIFFICULTY_SEMANTIC_RULES,
  type RogueDifficultySemanticRule,
} from "../domain/difficulty-rules.js";
import type { FormulaZoneId } from "../domain/damage-zones.js";
import type { FormulaDamageType } from "./ast.js";
import {
  evaluateBuffActivation,
  type FormulaActivationContext,
} from "./activation.js";
import {
  FormulaContext,
  type FormulaContribution,
} from "./context.js";
import {
  contributionsFromClassifiedEffect,
  toContributionEffect,
} from "./relic-contributions.js";
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
  damageTypes?: readonly FormulaDamageType[];
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

/** 将一条已路由难度效果转换成可追踪公式贡献。 */
function difficultyContribution(
  input: ApplyRogueDifficultyInput,
  effect: RogueDifficultyZoneEffect,
  active: boolean,
  inactiveReasons: readonly string[],
): FormulaContribution {
  return {
    id: `difficulty:${input.topicId}:${effect.modeDifficulty}:${effect.grade}:${effect.rule.id}`,
    zoneId: effect.zoneId,
    value: effect.value,
    tooltip: `${effect.modeDifficulty} ${effect.grade} · ${effect.matchedText}`,
    reason: `${effect.rule.description}${active ? "" : `（未生效：${inactiveReasons.join("；")}）`}`,
    damageTypes: effect.damageTypes,
    active,
    source: {
      kind: "difficulty",
      itemId: `${input.topicId}:${effect.modeDifficulty}:${effect.grade}`,
      effectPath: effect.evidencePath,
      ruleId: effect.rule.id,
      evidencePath: effect.evidencePath,
      evidencePaths:
        effect.evidencePath === effect.guardPath
          ? [effect.evidencePath]
          : [effect.evidencePath, effect.guardPath],
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
): FormulaContribution[] {
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
    if (effect.zoneId === "OUTER_ENEMY_DAMAGE_RESISTANCE") {
      resistanceEffects.push({ effect, ...activation });
      continue;
    }
    const contribution = difficultyContribution(
      input,
      effect,
      activation.active,
      activation.reasons,
    );
    context.addContribution(contribution);
    applied.push(contribution);
  }

  // 未生效的减伤规则仍单独保留，便于 UI 解释目标、关卡或时间条件。
  for (const entry of resistanceEffects.filter((candidate) => !candidate.active)) {
    const contribution = difficultyContribution(
      input,
      entry.effect,
      false,
      entry.reasons,
    );
    context.addContribution(contribution);
    applied.push(contribution);
  }

  // 同一难度体系的局外减伤按伤害类型累计为一个最终配置值，再交给局外 max 乘区。
  const activeResistance = resistanceEffects.filter((candidate) => candidate.active);
  const damageTypes: readonly FormulaDamageType[] = ["physical", "magical", "pure", "elemental"];
  for (const damageType of damageTypes) {
    const matching = activeResistance.filter(
      ({ effect }) => !effect.damageTypes || effect.damageTypes.includes(damageType),
    );
    if (matching.length === 0) continue;
    const evidencePaths = matching.map(({ effect }) => effect.evidencePath);
    const value = matching.reduce((sum, { effect }) => sum + effect.value, 0);
    const contribution: FormulaContribution = {
      id: `difficulty:${input.topicId}:${input.selectedDifficulty?.modeDifficulty}:${input.selectedDifficulty?.grade}:outer-resistance:${damageType}`,
      zoneId: "OUTER_ENEMY_DAMAGE_RESISTANCE",
      value,
      tooltip: `累计难度减伤 · ${damageType}`,
      reason: `Kuzu 同源规则累计 ${matching.length} 条当前目标适用的局外难度减伤。`,
      damageTypes: [damageType],
      active: true,
      source: {
        kind: "difficulty",
        itemId: `${input.topicId}:${input.selectedDifficulty?.modeDifficulty}:${input.selectedDifficulty?.grade}`,
        ruleId: matching.map(({ effect }) => effect.rule.id).join("+"),
        evidencePath: evidencePaths[0],
        evidencePaths,
      },
    };
    context.addContribution(contribution);
    applied.push(contribution);
  }

  // 条件藏品复用真实藏品程序取值，再把来源改写为 difficulty 以保持上下文语义。
  const enabledConditionalRelicIds = new Set(input.enabledConditionalRelicIds ?? []);
  for (const conditional of selectedRoute.conditionalRelicEffects) {
    const effect = toContributionEffect(conditional.route.effect);
    const activation = evaluateBuffActivation(
      effect.key,
      effect.blackboard,
      input.activation ?? {},
    );
    const conditionEnabled = enabledConditionalRelicIds.has(conditional.link.id);
    const conditionReason =
      conditional.link.kind === "LEGACY_CHOICE"
        ? "需持有上一局获得的遗留助力，并在本局开局选择该支援"
        : `需满足条件载体：${conditional.link.sourceItem.usage ?? conditional.link.sourceItem.name}`;
    const baseContributions = contributionsFromClassifiedEffect(
      {
        id: conditional.link.targetId,
        name: conditional.link.targetItem.name,
      },
      effect,
      {
        active: conditionEnabled && activation.active,
        inactiveReasons: [
          ...(conditionEnabled ? [] : [conditionReason]),
          ...activation.inactiveReasons,
        ],
      },
    );
    for (const base of baseContributions) {
      const contribution: FormulaContribution = {
        ...base,
        id: `difficulty-grant:${conditional.link.sourceId}:${base.id}`,
        tooltip: `${conditional.link.kind === "LEGACY_CHOICE" ? "条件支援" : "难度条件藏品"} · ${conditional.link.targetItem.name}`,
        reason: `${base.reason ?? ""}（${conditionReason}）`,
        source: {
          ...base.source,
          kind: "difficulty",
          itemId: conditional.link.targetId,
          evidencePath: conditional.link.evidencePaths[0] ?? conditional.link.jsonPath,
          evidencePaths: [...conditional.link.evidencePaths, effect.jsonPath],
        },
      };
      context.addContribution(contribution);
      applied.push(contribution);
    }
  }
  return applied;
}
