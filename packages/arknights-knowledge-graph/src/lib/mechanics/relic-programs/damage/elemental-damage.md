# 元素伤害与元素损伤倍率

`AI_GENERATED`：本说明是生成程序索引，不是机制证据。

## 映射依据

- 人类知识确认“阿猛”与“冰中火”的元素伤害倍率分别为 `2` 与 `1.75`，共同进入 `enemy_elment_damage_mul`，由 FormulaBook 的乘法聚合得到 `1.75 × 2`。
- 人类知识同时确认“冰中火”的 `ep_damage_scale=1.75` 进入 `enemy_ep_damage_mul`。
- 正式图谱 build `51b5444638d91935f05a` 中恰有对应三条 `human_verified` 的 `EFFECT_ENTERS_ZONE` 边。

程序同时校验藏品稳定 ID、外层 buff key、战斗模板名和参数键。任一字段变化时不猜测近似语义，而是让该效果回到 `unknown`。
