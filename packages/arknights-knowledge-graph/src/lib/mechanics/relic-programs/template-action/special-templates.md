# special-templates.ts 生成说明

这些模板无法仅靠外层属性载体确定数值，需要结合 `buff_template_data` Action 语义解释层数、目标或最终倍率：

- `rogue_6_pioneer_skill`：技能触发层数转换为干员局内攻击力倍率。
- `rogue_6_caster_attack`：伤害触发层数转换为敌方直接法抗修改。
- `defdown[support]`：同时处理敌方直接防御力与法抗修改。
- `rogue_5_enemy_minus_magic_resistance[take_damage]`：受击层数转换为敌方直接法抗修改。
- `rogue_6_start_3`：最终生命增量转换为绝对倍率。

本说明由 AI 生成，可删除或重新生成，不属于机制证据。
