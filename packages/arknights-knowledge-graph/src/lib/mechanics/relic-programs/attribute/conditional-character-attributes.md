# conditional-character-attributes.ts 生成说明

图谱中 `char_ability_new`、`char_ability_new_at_root` 与 `global_buff_normal` 大量复用相同的干员战斗内属性模式：`atk`、`def`、`max_hp` 使用对应局内倍率，`attack_speed` 使用直接攻击速度加算。

程序按机制签名归纳这些共同逻辑，并排除名称明确包含敌方、减防或 `rogue_6_start_3` 最终生命语义的模板。需要层数、特殊目标或不同聚合方式的效果不在此猜测，继续保持 `unknown`。

本说明由 AI 生成，可删除或重新生成，不属于机制证据。
