# registry.ts 生成说明

注册表以 GameData 机制签名为主，不为每件藏品创建函数：

1. 人类知识确认的藏品特例优先，并同时校验稳定 ID、模板和参数键。
2. 精确 `buff_template_data` 模板用于解释层数、目标或最终倍率。
3. 外层 `buff.key` 选择可跨藏品复用的属性程序。
4. 稳定机制名选择敌方属性等通用程序。
5. 奖励、招募、商店和关卡替换等明确局外载体标记为 `not_applicable`。
6. 未注册机制返回 `unknown`，禁止回退到通用字段猜测。

`char_ability_new`、`char_ability_new_at_root` 与 `global_buff_normal` 复用条件干员属性程序；程序内部会排除明确的敌方与特殊最终倍率模板。层数或目标语义不足时仍返回空贡献，由入口标记为 `unknown`。

`damage/elemental-damage.ts` 精确解释“阿猛”和“冰中火”的三条人类确认元素倍率；任一数据护栏变化时返回空贡献并由入口标记为 `unknown`。

本说明由 AI 生成，可删除或重新生成，不属于机制证据。
