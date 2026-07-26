/**
 * 藏品 buff 运行时生效判定。
 * 覆盖：前置藏品（reliance_relics）、敌人选择器、职业选择器、关卡校验器。
 * 判定失败时贡献仍可写入 FormulaContext，但 active=false，不参与公式簿求值。
 */

import type { BlackboardValue } from "../classify/types.js";

/** 运行时生效上下文：由调用方（前端选藏/选敌）注入。 */
export interface FormulaActivationContext {
  /** 当前已选藏品 ID 集合（含正在结算的自身）。 */
  selectedRelicIds?: ReadonlySet<string> | readonly string[];
  /** 当前敌人。 */
  enemy?: {
    /** 敌人/陷阱 ID。 */
    id: string;
    /** 等级类型原文或已解析值，如 ELITE / BOSS。 */
    levelType?: string | null;
    /** 敌人 tags。 */
    tags?: readonly string[] | null;
  };
  /** 当前干员（职业类选择器用）。 */
  character?: {
    /** 职业；兼容前端 GUARD/VANGUARD 与黑板 warrior/pioneer 两套命名。 */
    profession?: string;
    /** 子职业 ID。 */
    subProfessionId?: string;
    /** melee | ranged。 */
    position?: string;
    /** 是否拥有召唤物；用于 selector.profession=token。 */
    hasToken?: boolean;
  };
  /** 当前关卡。 */
  stage?: {
    /** 关卡 ID。 */
    id?: string;
    /** 是否 Boss 关。 */
    isBoss?: boolean;
  };
}

/** 单条生效判定结果。 */
export interface BuffActivationResult {
  /** 是否参与公式求值。 */
  active: boolean;
  /** 未生效时的人类可读原因（可多条）。 */
  inactiveReasons: string[];
}

/** 读取黑板字符串。 */
function blackboardString(
  blackboard: readonly BlackboardValue[],
  key: string,
): string | undefined {
  // 少量 GameData 键名带尾随空格，查询时统一 trim，避免条件被静默跳过。
  const entry = blackboard.find((item) => item.key.trim() === key);
  return entry?.valueStr ?? undefined;
}

/** 将 selectedRelicIds 归一成 Set。 */
function asRelicIdSet(
  selected: FormulaActivationContext["selectedRelicIds"],
): ReadonlySet<string> {
  if (!selected) return new Set();
  return selected instanceof Set ? selected : new Set(selected);
}

/** 解析 GameData 里常见的 "A|B|C" 或已是单值的选择器。 */
function splitSelector(value: string): string[] {
  return value.split("|").map((part) => part.trim()).filter(Boolean);
}

/** 尝试从 levelType 原文取出稳定枚举段。 */
function normalizeLevelType(levelType: string | null | undefined): string {
  if (!levelType) return "";
  // 兼容 "ENEMY_LEVEL_TYPE.BOSS" / "BOSS" 等写法。
  const parts = levelType.split(".");
  return (parts[parts.length - 1] ?? levelType).toUpperCase();
}

/** 将前端职业枚举转换为 GameData selector.profession 使用的内部名称。 */
function normalizeProfession(profession: string | undefined): string {
  const normalized = profession?.toLowerCase() ?? "";
  const aliases: Readonly<Record<string, string>> = {
    vanguard: "pioneer",
    guard: "warrior",
    defender: "tank",
    supporter: "support",
    specialist: "special",
  };
  return aliases[normalized] ?? normalized;
}

/** 判断竖线分隔选择器是否精确包含目标，避免 includes 的 ID/职业前缀误命中。 */
function selectorIncludes(selector: string, actual: string): boolean {
  return splitSelector(selector).some((value) => value.toLowerCase() === actual.toLowerCase());
}

/**
 * 根据黑板选择器与运行时上下文，判定该 buff 当前是否生效。
 * 无对应选择器时视为「不限制」；缺少上下文数据且存在选择器时判定为不生效（保守）。
 */
export function evaluateBuffActivation(
  effectKey: string,
  blackboard: readonly BlackboardValue[],
  activation: FormulaActivationContext = {},
): BuffActivationResult {
  const inactiveReasons: string[] = [];

  // —— 前置藏品 ——
  const reliance = blackboardString(blackboard, "reliance_relics");
  if (reliance) {
    const requiredIds = splitSelector(reliance);
    const selected = asRelicIdSet(activation.selectedRelicIds);
    const missing = requiredIds.filter((id) => !selected.has(id));
    if (missing.length > 0) {
      inactiveReasons.push(`缺少前置藏品：${missing.join(", ")}`);
    }
  }

  // —— 敌人 / 陷阱选择器 ——
  const selectorEnemy = blackboardString(blackboard, "selector.enemy");
  if (selectorEnemy) {
    if (!activation.enemy?.id) {
      inactiveReasons.push("需要敌人目标，但未提供 enemy.id");
    } else if (!selectorIncludes(selectorEnemy, activation.enemy.id)) {
      inactiveReasons.push(`敌人 ID 不匹配 selector.enemy=${selectorEnemy}`);
    }
  }

  const excludedEnemies = blackboardString(blackboard, "selector.enemy_exclude");
  if (excludedEnemies) {
    if (!activation.enemy?.id) {
      inactiveReasons.push("需要敌人目标以检查 selector.enemy_exclude，但未提供 enemy.id");
    } else if (selectorIncludes(excludedEnemies, activation.enemy.id)) {
      inactiveReasons.push(`敌人被 selector.enemy_exclude 排除：${activation.enemy.id}`);
    }
  }

  const selectorChar =
    blackboardString(blackboard, "selector.char") ?? blackboardString(blackboard, "char");
  if (selectorChar) {
    if (!activation.enemy?.id) {
      inactiveReasons.push("需要陷阱/单位目标，但未提供 enemy.id");
    } else if (!selectorIncludes(selectorChar, activation.enemy.id)) {
      inactiveReasons.push(`单位 ID 不匹配 selector.char=${selectorChar}`);
    }
  }

  const enemyLevelType = blackboardString(blackboard, "selector.enemy_level_type");
  if (enemyLevelType) {
    const actual = normalizeLevelType(activation.enemy?.levelType);
    // 等级类型同样按竖线支持多选，当前 GameData 多数为单个 BOSS/ELITE 值。
    const expected = splitSelector(enemyLevelType).map(normalizeLevelType);
    if (!actual) {
      inactiveReasons.push("需要敌人等级类型，但未提供 enemy.levelType");
    } else if (!expected.includes(actual)) {
      inactiveReasons.push(`敌人等级类型不匹配：期望 ${expected.join("|")}，实际 ${actual}`);
    }
  }

  const tag = blackboardString(blackboard, "tag");
  if (tag) {
    const tags = activation.enemy?.tags ?? [];
    if (!splitSelector(tag).some((expected) => tags.includes(expected))) {
      inactiveReasons.push(`敌人缺少 tag=${tag}`);
    }
  }

  const selectorTag = blackboardString(blackboard, "selector.tag");
  if (selectorTag) {
    const tags = activation.enemy?.tags ?? [];
    if (!splitSelector(selectorTag).some((expected) => tags.includes(expected))) {
      inactiveReasons.push(`敌人缺少 selector.tag=${selectorTag}`);
    }
  }

  const bossOption = blackboardString(blackboard, "selector.boss_option");
  if (bossOption?.toLowerCase() === "boss") {
    const actual = normalizeLevelType(activation.enemy?.levelType);
    if (!actual) {
      inactiveReasons.push("需要敌人等级类型以检查 Boss 条件，但未提供 enemy.levelType");
    } else if (actual !== "BOSS") {
      inactiveReasons.push(`仅领袖敌人生效，实际 enemy.levelType=${actual}`);
    }
  }

  // enemy* 载体默认不对 trap_ 生效（与前端通用敌人黑板一致）。
  if (effectKey.startsWith("enemy") && activation.enemy?.id?.startsWith("trap_")) {
    inactiveReasons.push("enemy* buff 不对 trap_ 单位生效");
  }

  // —— 干员职业选择器 ——
  const profession = blackboardString(blackboard, "selector.profession");
  if (profession && profession.toLowerCase() !== "trap") {
    const actual = normalizeProfession(activation.character?.profession);
    if (!actual) {
      inactiveReasons.push("需要干员职业，但未提供 character.profession");
    } else if (profession.toLowerCase() === "token") {
      if (!activation.character?.hasToken) {
        inactiveReasons.push("仅拥有召唤物的干员生效，但 character.hasToken 不为 true");
      }
    } else if (!selectorIncludes(profession, actual)) {
      inactiveReasons.push(`职业不匹配 selector.profession=${profession}`);
    }
  }

  const subProfession = blackboardString(blackboard, "selector.sub_profession");
  if (subProfession) {
    const allowed = splitSelector(subProfession);
    const actual = activation.character?.subProfessionId;
    if (!actual) {
      inactiveReasons.push("需要子职业，但未提供 character.subProfessionId");
    } else if (!allowed.includes(actual)) {
      inactiveReasons.push(`子职业不匹配 selector.sub_profession=${subProfession}`);
    }
  }

  const buildable = blackboardString(blackboard, "selector.buildable");
  if (buildable) {
    const actual = activation.character?.position?.toLowerCase();
    if (!actual) {
      inactiveReasons.push("需要部署位，但未提供 character.position");
    } else if (actual !== buildable.toLowerCase()) {
      inactiveReasons.push(`部署位不匹配 selector.buildable=${buildable}`);
    }
  }

  // —— 关卡校验 ——
  const eventType = blackboardString(blackboard, "validator.roguelike_event_type");
  if (eventType === "BATTLE_BOSS") {
    if (!activation.stage?.isBoss) {
      inactiveReasons.push("仅 Boss 关生效");
    }
  } else if (eventType === "DUEL") {
    if (!activation.stage?.id?.includes("duel")) {
      inactiveReasons.push("仅决斗关生效");
    }
  }

  return {
    active: inactiveReasons.length === 0,
    inactiveReasons,
  };
}
