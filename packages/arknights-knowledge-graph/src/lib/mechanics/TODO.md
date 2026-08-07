# Mechanics TODO

## 图谱缺失

- 当前 Kuzu 中 `DIFFICULTY_EFFECT_ENTERS_ZONE` 为零；难度规则需要在独立图谱任务中补齐生产证据边。
- 未注册的战斗模板和伤害机制保持 `unknown`，需要通过 trace 补充 Action 证据后重新生成程序。
- `enemy_damage_scale[phy]`、`enemy_damage_scale[mag]` 等伤害倍率尚未进入首轮生成程序，禁止仅按字段名猜测易伤、脆弱或独立增幅。

## Report 数据

- 按 `DATA_REQUIREMENTS.md` 整理关卡 Level、replacement、敌人、装置和关卡 buff 数据模型。
- 整理 `rogue_4`～`rogue_6` 主题特殊系统的当前状态、数值、目标和条件模型。
- 本次不修改 `@arkrog/arknights-gamedata-report`；后续建立独立任务实现上述导出契约。

## FormulaBook 缺口

- 当前没有敌方攻击速度加算乘区，相关难度效果保持 `unknown`。
- 当前没有能准确表达难度“受到伤害降低”的可写乘区，相关规则保持 `unknown`。
- 当前敌方法抗结构只有乘算语义，难度固定法抗点数不可写入相近乘区。

## 人类知识

- 人类自然语言知识若无法唯一匹配对象，重新生成技能必须要求人类补充，不得修改知识原文或猜测目标。
