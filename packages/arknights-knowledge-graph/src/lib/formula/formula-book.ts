import { formula, FormulaItemExpression, FormulaNodeExpression, FormulaZoneExpression, item, multiply, plus, zone } from "./ast.js";

/** FormulaBook 中全部命名乘区与派生公式的统一枚举。 */
export enum FormulaZoneId {
  /// --------------我方/最大生命属性加成--------------
  /** 干员基础最大生命 */
  char_base_max_hp = "char_base_max_hp",
  /** 干员局外最大生命加成 */
  char_out_max_hp_add = "char_out_max_hp_add",
  /** 干员局外最大生命倍率 */
  char_out_max_hp_mul = "char_out_max_hp_mul",
  /** 干员局外最大生命 */
  char_out_max_hp = "char_out_max_hp",
  /** 干员局内最大生命加成 */
  char_in_max_hp_add = "char_in_max_hp_add",
  /** 干员局内最大生命倍率 */
  char_in_max_hp_mul = "char_in_max_hp_mul",
  /** 干员局内最大生命 */
  char_in_max_hp = "char_in_max_hp",
  /** 干员最终最大生命加成 */
  char_final_max_hp_add = "char_final_max_hp_add",
  /** 干员最终最大生命 */
  char_final_max_hp = "char_final_max_hp",
  /// --------------我方/攻击属性加成--------------
  /** 干员基础攻击力 */
  char_base_atk = "char_base_atk",
  /** 干员局外攻击力加成 */
  char_out_atk_add = "char_out_atk_add",
  /** 干员局外攻击力倍率 */
  char_out_atk_mul = "char_out_atk_mul",
  /** 干员局外攻击力 */
  char_out_atk = "char_out_atk",
  /** 干员局内攻击力加成 */
  char_in_atk_add = "char_in_atk_add",
  /** 干员局内攻击力倍率 */
  char_in_atk_mul = "char_in_atk_mul",
  /** 干员局内攻击力 */
  char_in_atk = "char_in_atk",
  /** 干员最终攻击力加成 */
  char_final_atk_add = "char_final_atk_add",
  /** 干员最终攻击力 */
  char_final_atk = "char_final_atk",
  /// --------------我方/攻速属性加成--------------
  /** 干员基础攻击速度 */
  char_base_attack_speed = "char_base_attack_speed",
  /** 干员直接攻击速度加成 */
  char_direct_attack_speed_add = "char_direct_attack_speed_add",
  /// --------------我方/防御属性加成--------------
  /** 干员基础防御力 */
  char_base_def = "char_base_def",
  /** 干员局外防御力加成 */
  char_out_def_add = "char_out_def_add",
  /** 干员局外防御力倍率 */
  char_out_def_mul = "char_out_def_mul",
  /** 干员局外防御力 */
  char_out_def = "char_out_def",
  /** 干员局内防御力加成 */
  char_in_def_add = "char_in_def_add",
  /** 干员局内防御力倍率 */
  char_in_def_mul = "char_in_def_mul",
  /** 干员局内防御力 */
  char_in_def = "char_in_def",
  /** 干员最终防御力加成 */
  char_final_def_add = "char_final_def_add",
  /** 干员最终防御力 */
  char_final_def = "char_final_def",
  /// --------------敌方/最大生命属性加成--------------
  /** 敌方基础生命 */
  enemy_base_max_hp = "enemy_base_max_hp",
  /** 敌人直接血量乘算 */
  enemy_direct_max_hp_mul = "enemy_direct_max_hp_mul",
  /** 敌人最终血量乘算 */
  enemy_final_max_hp_mul = "enemy_final_max_hp_mul",
  /** 敌人最终血量 */
  enemy_final_max_hp = "enemy_final_max_hp",
  /// --------------敌方/攻击属性加成--------------
  /** 敌方基础攻击力 */
  enemy_base_atk = "enemy_base_atk",
  /** 敌人直接攻击力乘算 */
  enemy_direct_atk_mul = "enemy_direct_atk_mul",
  /** 敌人最终攻击力乘算 */
  enemy_final_atk_mul = "enemy_final_atk_mul",
  /** 敌人最终攻击力 */
  enemy_final_atk = "enemy_final_atk",
  /// --------------敌方/防御属性加成--------------
  /** 敌方基础防御力 */
  enemy_base_def = "enemy_base_def",
  /** 敌人直接防御力乘算 */
  enemy_direct_def_mul = "enemy_direct_def_mul",
  /** 敌人最终防御力乘算 */
  enemy_final_def_mul = "enemy_final_def_mul",
  /** 敌人最终防御力 */
  enemy_final_def = "enemy_final_def",
  /// --------------敌方/法抗属性加成--------------
  /** 敌方基础法抗 */
  enemy_base_magic_resist = "enemy_base_magic_resist",
  /** 敌人直接法抗乘算 */
  enemy_direct_magic_resist_mul = "enemy_direct_magic_resist_mul",
  /** 敌人最终法抗乘算 */
  enemy_final_magic_resist_mul = "enemy_final_magic_resist_mul",
  /** 敌人最终法抗 */
  enemy_final_magic_resist = "enemy_final_magic_resist",
}

/** 由 `zone(...)` 定义、允许业务写入 item 的乘区 ID。 */
export type FormulaWritableZoneId =
  | FormulaZoneId.char_base_max_hp
  | FormulaZoneId.char_out_max_hp_add
  | FormulaZoneId.char_out_max_hp_mul
  | FormulaZoneId.char_in_max_hp_add
  | FormulaZoneId.char_in_max_hp_mul
  | FormulaZoneId.char_final_max_hp_add
  | FormulaZoneId.char_base_atk
  | FormulaZoneId.char_out_atk_add
  | FormulaZoneId.char_out_atk_mul
  | FormulaZoneId.char_in_atk_add
  | FormulaZoneId.char_in_atk_mul
  | FormulaZoneId.char_final_atk_add
  | FormulaZoneId.char_base_attack_speed
  | FormulaZoneId.char_direct_attack_speed_add
  | FormulaZoneId.char_base_def
  | FormulaZoneId.char_out_def_add
  | FormulaZoneId.char_out_def_mul
  | FormulaZoneId.char_in_def_add
  | FormulaZoneId.char_in_def_mul
  | FormulaZoneId.char_final_def_add
  | FormulaZoneId.enemy_base_max_hp
  | FormulaZoneId.enemy_direct_max_hp_mul
  | FormulaZoneId.enemy_final_max_hp_mul
  | FormulaZoneId.enemy_base_atk
  | FormulaZoneId.enemy_direct_atk_mul
  | FormulaZoneId.enemy_final_atk_mul
  | FormulaZoneId.enemy_base_def
  | FormulaZoneId.enemy_direct_def_mul
  | FormulaZoneId.enemy_final_def_mul
  | FormulaZoneId.enemy_base_magic_resist
  | FormulaZoneId.enemy_direct_magic_resist_mul
  | FormulaZoneId.enemy_final_magic_resist_mul;

/** 由 `formula(...)` 定义、只负责派生计算的公式 ID。 */
export type FormulaId =
  | FormulaZoneId.char_out_max_hp
  | FormulaZoneId.char_in_max_hp
  | FormulaZoneId.char_final_max_hp
  | FormulaZoneId.char_out_atk
  | FormulaZoneId.char_in_atk
  | FormulaZoneId.char_final_atk
  | FormulaZoneId.char_out_def
  | FormulaZoneId.char_in_def
  | FormulaZoneId.char_final_def
  | FormulaZoneId.enemy_final_max_hp
  | FormulaZoneId.enemy_final_atk
  | FormulaZoneId.enemy_final_def
  | FormulaZoneId.enemy_final_magic_resist;

/**
 * 一次公式计算使用的完整公式书。
 * 每个实例同时持有静态公式结构和本次计算写入 zone 的动态 item。
 */
export class FormulaBook {
  /** 所有 zone/formula 共用索引，保持源码定义顺序。 */
  readonly zones: Record<FormulaZoneId, FormulaNodeExpression | FormulaZoneExpression>;

  constructor() {
    // 我方攻击力
    const char_base_atk = zone(FormulaZoneId.char_base_atk, plus);
    const char_out_atk_add = zone(FormulaZoneId.char_out_atk_add, plus);
    const char_out_atk_mul = zone(FormulaZoneId.char_out_atk_mul, plus, item("基数", 1));
    const char_out_atk = formula(FormulaZoneId.char_out_atk, multiply(plus(char_base_atk, char_out_atk_add), char_out_atk_mul));
    const char_in_atk_add = zone(FormulaZoneId.char_in_atk_add, plus);
    const char_in_atk_mul = zone(FormulaZoneId.char_in_atk_mul, plus, item("基数", 1));
    const char_in_atk = formula(FormulaZoneId.char_in_atk, multiply(plus(char_out_atk, char_in_atk_add), char_in_atk_mul));
    const char_final_atk_add = zone(FormulaZoneId.char_final_atk_add, plus);
    const char_final_atk = formula(FormulaZoneId.char_final_atk, plus(char_in_atk, char_final_atk_add));
    // 攻击速度只区分基础值与直接加算，所有已确认藏品效果统一追加点数。
    const char_base_attack_speed = zone(FormulaZoneId.char_base_attack_speed, plus);
    const char_direct_attack_speed_add = zone(FormulaZoneId.char_direct_attack_speed_add, plus);
    // 我方防御力沿用攻击力的局外、局内与最终三阶段聚合语义。
    const char_base_def = zone(FormulaZoneId.char_base_def, plus);
    const char_out_def_add = zone(FormulaZoneId.char_out_def_add, plus);
    const char_out_def_mul = zone(FormulaZoneId.char_out_def_mul, plus, item("基数", 1));
    const char_out_def = formula(FormulaZoneId.char_out_def, multiply(plus(char_base_def, char_out_def_add), char_out_def_mul));
    const char_in_def_add = zone(FormulaZoneId.char_in_def_add, plus);
    const char_in_def_mul = zone(FormulaZoneId.char_in_def_mul, plus, item("基数", 1));
    const char_in_def = formula(FormulaZoneId.char_in_def, multiply(plus(char_out_def, char_in_def_add), char_in_def_mul));
    const char_final_def_add = zone(FormulaZoneId.char_final_def_add, plus);
    const char_final_def = formula(FormulaZoneId.char_final_def, plus(char_in_def, char_final_def_add));
    // 我方最大生命
    const char_base_max_hp = zone(FormulaZoneId.char_base_max_hp, plus);
    const char_out_max_hp_add = zone(FormulaZoneId.char_out_max_hp_add, plus);
    const char_out_max_hp_mul = zone(FormulaZoneId.char_out_max_hp_mul, plus, item("基数", 1));
    const char_out_max_hp = formula(FormulaZoneId.char_out_max_hp, multiply(plus(char_base_max_hp, char_out_max_hp_add), char_out_max_hp_mul));
    const char_in_max_hp_add = zone(FormulaZoneId.char_in_max_hp_add, plus);
    const char_in_max_hp_mul = zone(FormulaZoneId.char_in_max_hp_mul, plus, item("基数", 1));
    const char_in_max_hp = formula(FormulaZoneId.char_in_max_hp, multiply(plus(char_out_max_hp, char_in_max_hp_add), char_in_max_hp_mul));
    const char_final_max_hp_add = zone(FormulaZoneId.char_final_max_hp_add, plus);
    const char_final_max_hp = formula(FormulaZoneId.char_final_max_hp, plus(char_in_max_hp, char_final_max_hp_add));

    const enemy_base_max_hp = zone(FormulaZoneId.enemy_base_max_hp, plus);
    const enemy_direct_max_hp_mul = zone(FormulaZoneId.enemy_direct_max_hp_mul, plus, item("基数", 1));
    const enemy_final_max_hp_mul = zone(FormulaZoneId.enemy_final_max_hp_mul, multiply, item("基数", 1));
    const enemy_final_max_hp = formula(FormulaZoneId.enemy_final_max_hp, multiply(enemy_base_max_hp, enemy_direct_max_hp_mul, enemy_final_max_hp_mul));

    // 敌方攻击力、 防御力与法抗沿用敌方生命的直接区加算和最终区绝对倍率语义。
    const enemy_base_atk = zone(FormulaZoneId.enemy_base_atk, plus);
    const enemy_direct_atk_mul = zone(FormulaZoneId.enemy_direct_atk_mul, plus, item("基数", 1));
    const enemy_final_atk_mul = zone(FormulaZoneId.enemy_final_atk_mul, multiply, item("基数", 1));
    const enemy_final_atk = formula(FormulaZoneId.enemy_final_atk, multiply(enemy_base_atk, enemy_direct_atk_mul, enemy_final_atk_mul));

    const enemy_base_def = zone(FormulaZoneId.enemy_base_def, plus);
    const enemy_direct_def_mul = zone(FormulaZoneId.enemy_direct_def_mul, plus, item("基数", 1));
    const enemy_final_def_mul = zone(FormulaZoneId.enemy_final_def_mul, multiply, item("基数", 1));
    const enemy_final_def = formula(FormulaZoneId.enemy_final_def, multiply(enemy_base_def, enemy_direct_def_mul, enemy_final_def_mul));

    const enemy_base_magic_resist = zone(FormulaZoneId.enemy_base_magic_resist, plus);
    const enemy_direct_magic_resist_mul = zone(FormulaZoneId.enemy_direct_magic_resist_mul, plus, item("基数", 1));
    const enemy_final_magic_resist_mul = zone(FormulaZoneId.enemy_final_magic_resist_mul, multiply, item("基数", 1));
    const enemy_final_magic_resist = formula(
      FormulaZoneId.enemy_final_magic_resist,
      multiply(enemy_base_magic_resist, enemy_direct_magic_resist_mul, enemy_final_magic_resist_mul),
    );

    this.zones = {
      char_base_max_hp,
      char_out_max_hp_add,
      char_out_max_hp_mul,
      char_out_max_hp,
      char_in_max_hp_add,
      char_in_max_hp_mul,
      char_in_max_hp,
      char_final_max_hp_add,
      char_final_max_hp,
      /// 干员攻击力
      char_base_atk,
      char_out_atk_add,
      char_out_atk_mul,
      char_out_atk,
      char_in_atk_add,
      char_in_atk_mul,
      char_in_atk,
      char_final_atk_add,
      char_final_atk,
      // 干员攻击速度
      char_base_attack_speed,
      char_direct_attack_speed_add,
      // 干员防御力
      char_base_def,
      char_out_def_add,
      char_out_def_mul,
      char_out_def,
      char_in_def_add,
      char_in_def_mul,
      char_in_def,
      char_final_def_add,
      char_final_def,
      // 敌人最大血量
      enemy_base_max_hp,
      enemy_direct_max_hp_mul,
      enemy_final_max_hp_mul,
      enemy_final_max_hp,
      // 敌人攻击力
      enemy_base_atk,
      enemy_direct_atk_mul,
      enemy_final_atk_mul,
      enemy_final_atk,
      // 敌人防御力
      enemy_base_def,
      enemy_direct_def_mul,
      enemy_final_def_mul,
      enemy_final_def,
      // 敌人法抗
      enemy_base_magic_resist,
      enemy_direct_magic_resist_mul,
      enemy_final_magic_resist_mul,
      enemy_final_magic_resist,
    };
  }

  /** 取得允许直接追加 item 的真实 zone。 */
  get_zone(id: FormulaWritableZoneId): FormulaZoneExpression;

  /** 取得只负责派生计算的命名公式。 */
  get_zone(id: FormulaId): FormulaNodeExpression;

  /** 通过统一枚举取得任意命名节点。 */
  get_zone(id: FormulaZoneId): FormulaNodeExpression | FormulaZoneExpression;

  get_zone(id: FormulaZoneId): FormulaNodeExpression | FormulaZoneExpression {
    return this.zones[id];
  }

  /** 向当前公式书中的真实 zone 追加一个 item。 */
  add_item(zoneId: FormulaWritableZoneId, entry: FormulaItemExpression): this {
    const expression = this.zones[zoneId];
    if (!(expression instanceof FormulaZoneExpression)) {
      throw new Error(`“${zoneId}”不是允许写入 item 的 zone`);
    }
    expression.add_item(entry);
    return this;
  }

  /** 计算当前公式书中的任意真实 zone 或派生公式。 */
  calculate(id: FormulaZoneId): number {
    return this.get_zone(id).calculate();
  }
}
