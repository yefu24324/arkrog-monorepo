# enemy-attributes.ts 生成说明

本程序处理 GameData 中稳定命名的敌方攻击力、防御力、最大生命降低模板，以及 `enemy_attribute_mul` / `enemy_attribute_add` 当前 FormulaBook 已覆盖的属性。

敌方直接属性区按增量聚合。GameData 若提供大于等于 1 的绝对倍率，则先减去 1；负数和小于 1 的增量保持原值。无法确认目标或聚合方式的模板不会进入本程序。

本说明由 AI 生成，可删除或重新生成，不属于机制证据。
