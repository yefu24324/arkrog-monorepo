/**
 * 游戏机制到公式乘区的适配层。
 * 本目录只判断来源效果是否生效、进入哪个乘区以及写入什么 FormulaItem。
 */

/** 导出 buff 的前置藏品、敌人、职业与关卡生效判定。 */
export * from "./activation.js";

/** 导出攻击力、防御力与最大生命藏品黑板到最小公式项的映射。 */
export * from "./relic-items.js";

/** 导出攻击力、防御力与最大生命藏品战斗模板和数值解释程序。 */
export * from "./relic-template-programs.js";

/** 导出攻击力、防御力与最大生命藏品路由与 FormulaBook 写入程序。 */
export * from "./relic-programs.js";

/** 导出 graph/formula 人工校验所需的属性产物构建器。 */
export * from "./relic-zone-validation.js";
