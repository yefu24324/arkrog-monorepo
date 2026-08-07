import type { MechanicsBlackboardEntry } from "../contracts/program.js";
import { blackboardString } from "./blackboard.js";

/** 调用方提供的运行时事实；缺少条件所需事实时按未生效处理。 */
export interface FormulaActivationContext {
  /** 当前已启用藏品 ID；用于 reliance_relics。 */
  selectedRelicIds?: ReadonlySet<string> | readonly string[];
  /** 当前敌人或陷阱。 */
  enemy?: {
    id: string;
    levelType?: string | null;
    tags?: readonly string[] | null;
    buffKeys?: readonly string[] | null;
  };
  /** 当前干员。 */
  character?: {
    profession?: string;
    subProfessionId?: string;
    position?: string;
    hasToken?: boolean;
  };
  /** 当前关卡。 */
  stage?: {
    id?: string;
    isBoss?: boolean;
    isEmergency?: boolean;
    isDanger?: boolean;
  };
  /** 当前敌人登场后的秒数。 */
  elapsedSeconds?: number;
}

/** 竖线分隔的 GameData 选择器。 */
function selectorValues(value: string): string[] {
  return value.split("|").map((part) => part.trim()).filter(Boolean);
}

/** 判断选择器是否精确包含目标值。 */
function selectorIncludes(selector: string, actual: string): boolean {
  return selectorValues(selector).some(
    (value) => value.toLowerCase() === actual.toLowerCase(),
  );
}

/** 归一化敌人等级类型。 */
function enemyLevelType(value: string | null | undefined): string {
  const parts = value?.split(".") ?? [];
  return (parts.at(-1) ?? "").toUpperCase();
}

/** 将前端职业枚举转换为 GameData selector.profession 名称。 */
function professionName(value: string | undefined): string {
  const normalized = value?.toLowerCase() ?? "";
  const aliases: Readonly<Record<string, string>> = {
    vanguard: "pioneer",
    guard: "warrior",
    defender: "tank",
    supporter: "support",
    specialist: "special",
  };
  return aliases[normalized] ?? normalized;
}

/** 返回黑板声明的自然语言生效条件，静态分析只展示、不执行。 */
export function describeBuffConditions(
  blackboard: readonly MechanicsBlackboardEntry[],
): string[] {
  const conditions: string[] = [];
  const pairs: ReadonlyArray<readonly [string, string]> = [
    ["reliance_relics", "需要前置藏品"],
    ["selector.enemy", "仅指定敌人"],
    ["selector.enemy_exclude", "排除指定敌人"],
    ["selector.enemy_level_type", "仅指定敌人等级"],
    ["selector.profession", "仅指定职业"],
    ["selector.sub_profession", "仅指定子职业"],
    ["selector.buildable", "仅指定部署位"],
    ["validator.roguelike_event_type", "仅指定关卡类型"],
  ];
  for (const [key, label] of pairs) {
    const value = blackboardString(blackboard, key);
    if (value) conditions.push(`${label}：${value}`);
  }
  return conditions;
}

/** 保守判断通用黑板条件；缺少必要事实时返回 false。 */
export function isBuffActive(
  effectKey: string,
  blackboard: readonly MechanicsBlackboardEntry[],
  context: FormulaActivationContext,
): boolean {
  const reliance = blackboardString(blackboard, "reliance_relics");
  if (reliance) {
    const selected = context.selectedRelicIds instanceof Set
      ? context.selectedRelicIds
      : new Set(context.selectedRelicIds ?? []);
    if (selectorValues(reliance).some((id) => !selected.has(id))) return false;
  }

  const selectedEnemy = blackboardString(blackboard, "selector.enemy");
  if (selectedEnemy && (!context.enemy?.id || !selectorIncludes(selectedEnemy, context.enemy.id))) {
    return false;
  }
  const excludedEnemy = blackboardString(blackboard, "selector.enemy_exclude");
  if (excludedEnemy && (!context.enemy?.id || selectorIncludes(excludedEnemy, context.enemy.id))) {
    return false;
  }
  const selectedCharacter = blackboardString(blackboard, "selector.char")
    ?? blackboardString(blackboard, "char");
  if (selectedCharacter && (!context.enemy?.id || !selectorIncludes(selectedCharacter, context.enemy.id))) {
    return false;
  }
  const selectedLevelType = blackboardString(blackboard, "selector.enemy_level_type");
  if (selectedLevelType) {
    const actual = enemyLevelType(context.enemy?.levelType);
    if (!actual || !selectorValues(selectedLevelType).map(enemyLevelType).includes(actual)) return false;
  }
  const bossOption = blackboardString(blackboard, "selector.boss_option");
  if (bossOption?.toLowerCase() === "boss" && enemyLevelType(context.enemy?.levelType) !== "BOSS") {
    return false;
  }
  for (const key of ["tag", "selector.tag"] as const) {
    const tag = blackboardString(blackboard, key);
    const tags = context.enemy?.tags ?? [];
    if (tag && !selectorValues(tag).some((value) => tags.includes(value))) return false;
  }
  if (effectKey.startsWith("enemy") && context.enemy?.id.startsWith("trap_")) return false;

  const profession = blackboardString(blackboard, "selector.profession");
  if (profession && profession.toLowerCase() !== "trap") {
    if (profession.toLowerCase() === "token") {
      if (!context.character?.hasToken) return false;
    } else {
      const actual = professionName(context.character?.profession);
      if (!actual || !selectorIncludes(profession, actual)) return false;
    }
  }
  const subProfession = blackboardString(blackboard, "selector.sub_profession");
  if (subProfession && (
    !context.character?.subProfessionId
    || !selectorIncludes(subProfession, context.character.subProfessionId)
  )) return false;
  const buildable = blackboardString(blackboard, "selector.buildable");
  if (buildable && context.character?.position?.toLowerCase() !== buildable.toLowerCase()) {
    return false;
  }

  const eventType = blackboardString(blackboard, "validator.roguelike_event_type");
  if (eventType === "BATTLE_BOSS" && !context.stage?.isBoss) return false;
  if (eventType === "DUEL" && !context.stage?.id?.includes("duel")) return false;
  return true;
}
