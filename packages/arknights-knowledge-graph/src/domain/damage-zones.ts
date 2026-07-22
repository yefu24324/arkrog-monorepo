import type { EffectContext, ZoneMapping } from "../types.js";

/** 人工公式文档在图谱中的固定路径，所有领域规则都必须声明证据来源。 */
const DAMAGE_DOCUMENT = "docs/game/藏品伤害乘区.md";

/** 伤害公式中的稳定乘区定义。 */
export const DAMAGE_ZONES = [
  {
    id: "FLAT_ATK",
    symbol: "F",
    name: "攻击力直加",
    stage: 10,
    stacking: "区内先求和",
    formula: "ATK0 + ΣF",
  },
  {
    id: "OUTER_ATK",
    symbol: "O",
    name: "局外攻击力加成",
    stage: 20,
    stacking: "同区加算",
    formula: "1 + ΣO",
  },
  {
    id: "INNER_ATK",
    symbol: "I",
    name: "局内攻击力加成",
    stage: 30,
    stacking: "同区加算，并与局外区乘算",
    formula: "1 + ΣI",
  },
  {
    id: "DEF_PERCENT",
    symbol: "DP",
    name: "敌方防御百分比降低",
    stage: 40,
    stacking: "百分比修改先于点数直减",
    formula: "DEF0 × (1 - ΣDP)",
  },
  {
    id: "DEF_FLAT",
    symbol: "DF",
    name: "敌方防御点数直减",
    stage: 50,
    stacking: "区内求和",
    formula: "-ΣDF",
  },
  {
    id: "RES_PERCENT",
    symbol: "RP",
    name: "敌方法抗百分比降低",
    stage: 60,
    stacking: "百分比修改先于点数直减",
    formula: "RES0 × (1 - ΣRP)",
  },
  {
    id: "RES_FLAT",
    symbol: "RF",
    name: "敌方法抗点数直减",
    stage: 70,
    stacking: "区内求和",
    formula: "-ΣRF",
  },
  {
    id: "DAMAGE_AMPLIFICATION",
    symbol: "AMP",
    name: "独立伤害放大",
    stage: 80,
    stacking: "不同来源分别乘算",
    formula: "Πj(1 + AMP[t,j])",
  },
  {
    id: "ENEMY_HP_RELIC",
    symbol: "HP_R",
    name: "藏品敌方生命降低",
    stage: 90,
    stacking: "藏品内部加算",
    formula: "1 - ΣHP_R",
  },
  {
    id: "ENEMY_HP_COPPER",
    symbol: "HP_C",
    name: "通宝敌方生命降低",
    stage: 100,
    stacking: "通宝内部加算，并与藏品区乘算",
    formula: "1 - ΣHP_C",
  },
  {
    id: "ATTACK_SPEED",
    symbol: "SPD",
    name: "攻击速度加成",
    stage: 110,
    stacking: "区内加算，只影响 DPS",
    formula: "(100 + ΣSPD) / 100",
  },
  {
    id: "SPECIAL_TARGET_AMPLIFICATION",
    symbol: "HW",
    name: "特定目标独立增伤",
    stage: 120,
    stacking: "按来源独立乘算",
    formula: "Πj(1 + HW[j])",
  },
  {
    id: "ADDITIONAL_DAMAGE_PACKET",
    symbol: "PACKET",
    name: "追加伤害包",
    stage: 130,
    stacking: "独立计算后与主伤害包求和",
    formula: "DMG_main + ΣDMG_packet",
  },
] as const;

/** 已知字段路径的领域映射；字段名本身不足时不应在这里添加规则。 */
export const FIELD_MAPPINGS = new Map<string, ZoneMapping>([
  [
    "item.effect.attack_bonus",
    {
      zoneId: "OUTER_ATK",
      status: "verified",
      confidence: 1,
      reason: "人工公式将藏品恒定百分比攻击加成定义为局外攻击区 O。",
      evidencePath: DAMAGE_DOCUMENT,
    },
  ],
  [
    "blackboard.damage_scale",
    {
      zoneId: "DAMAGE_AMPLIFICATION",
      status: "verified",
      confidence: 1,
      reason: "damage_scale 表示伤害倍率，人工公式将不同增伤来源按 AMP 独立乘算。",
      evidencePath: DAMAGE_DOCUMENT,
    },
  ],
  [
    "blackboard.atk_scale",
    {
      zoneId: "ADDITIONAL_DAMAGE_PACKET",
      status: "verified",
      confidence: 0.95,
      reason: "atk_scale 描述以攻击力为基准的新伤害包，不等同于攻击力百分比加成。",
      evidencePath: DAMAGE_DOCUMENT,
    },
  ],
  [
    "blackboard.attack_speed",
    {
      zoneId: "ATTACK_SPEED",
      status: "verified",
      confidence: 1,
      reason: "attack_speed 进入攻速区 SPD，只改变 DPS，不改变单发伤害。",
      evidencePath: DAMAGE_DOCUMENT,
    },
  ],
]);

/** 判断黑板中是否存在指定参数。 */
function hasParameter(context: EffectContext, key: string): boolean {
  return context.parameters.has(key);
}

/** 读取机制键；多数 global_buff_normal 的真实组件名存放在黑板 key 中。 */
function mechanicKey(context: EffectContext): string {
  const value = context.parameters.get("key");
  return typeof value === "string" ? value.toLowerCase() : "";
}

/** 根据完整 buff 上下文分类，避免仅凭 `atk` 这种歧义参数误判。 */
export function classifyEffect(context: EffectContext): ZoneMapping[] {
  const mappings: ZoneMapping[] = [];
  const effectKey = context.effectKey.toLowerCase();
  const mechanic = mechanicKey(context);
  const evidencePath = DAMAGE_DOCUMENT;

  if (
    hasParameter(context, "atk") &&
    ["char_attribute_mul", "char_squad_attribute_mul"].includes(effectKey)
  ) {
    mappings.push({
      zoneId: "OUTER_ATK",
      status: "inferred",
      confidence: 0.9,
      reason: `${context.effectKey}.atk 是编队阶段写入的静态百分比攻击属性。`,
      evidencePath,
    });
  }

  if (
    hasParameter(context, "atk") &&
    (effectKey.includes("layer_") ||
      effectKey.includes("ability") ||
      effectKey.includes("global_buff"))
  ) {
    mappings.push({
      zoneId: "INNER_ATK",
      status: "inferred",
      confidence: 0.85,
      reason: `${context.effectKey}.atk 由层数、条件或战斗组件在局内触发。`,
      evidencePath,
    });
  }

  if (hasParameter(context, "atk") && effectKey === "char_attribute_add") {
    mappings.push({
      zoneId: "FLAT_ATK",
      status: "inferred",
      confidence: 0.75,
      reason: "char_attribute_add.atk 按命名表示攻击力点数直加；仍应结合组件实现复核。",
      evidencePath,
    });
  }

  if (hasParameter(context, "damage_scale") || mechanic.includes("damage_scale")) {
    mappings.push({
      zoneId: "DAMAGE_AMPLIFICATION",
      status: "verified",
      confidence: 0.98,
      reason: `战斗机制 ${mechanic || context.effectKey} 使用 damage_scale 伤害倍率。`,
      evidencePath,
    });
  }

  if (hasParameter(context, "atk_scale")) {
    mappings.push({
      zoneId: "ADDITIONAL_DAMAGE_PACKET",
      status: "verified",
      confidence: 0.95,
      reason: "atk_scale 生成按攻击力缩放的追加伤害包，不进入 O/I 攻击力区。",
      evidencePath,
    });
  }

  if (hasParameter(context, "attack_speed")) {
    mappings.push({
      zoneId: "ATTACK_SPEED",
      status: "verified",
      confidence: 1,
      reason: "attack_speed 进入 SPD 攻速区。",
      evidencePath,
    });
  }

  if (mechanic.includes("enemy_def_down") && hasParameter(context, "def")) {
    mappings.push({
      zoneId: "DEF_PERCENT",
      status: "inferred",
      confidence: 0.9,
      reason: "enemy_def_down.def 在现有藏品数据中以倍率形式修改敌方防御。",
      evidencePath,
    });
  }

  if (
    mechanic.includes("enemy_max_hp_down") &&
    hasParameter(context, "max_hp")
  ) {
    const isCopper = context.parameters.has("trig_type");
    mappings.push({
      zoneId: isCopper ? "ENEMY_HP_COPPER" : "ENEMY_HP_RELIC",
      status: "inferred",
      confidence: 0.9,
      reason: isCopper
        ? "带通宝触发类型的 enemy_max_hp_down 进入 HP_C。"
        : "普通藏品的 enemy_max_hp_down 进入 HP_R。",
      evidencePath,
    });
  }

  return mappings;
}
