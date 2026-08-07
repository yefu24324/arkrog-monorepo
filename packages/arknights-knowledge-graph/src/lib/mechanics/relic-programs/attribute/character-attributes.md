# character-attributes.ts 生成说明

本程序归纳 GameData 中重复出现的 `char_attribute_mul`、`char_attribute_add`、`char_squad_attribute_*` 与 `layer_char_attribute_*`。它只解释 FormulaBook 当前已定义的攻击力、防御力、最大生命和攻击速度字段。

静态倍率写入对应局外倍率区，静态点数写入对应局外加算区；攻击速度写入直接攻击速度加算区。`layer_` 载体使用调用方传入的当前层数。其他黑板字段不会被猜测成相近乘区。

本说明由 AI 生成，可删除或重新生成，不属于机制证据。
