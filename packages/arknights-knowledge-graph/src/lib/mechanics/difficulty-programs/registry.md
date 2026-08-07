# registry.ts 生成说明

难度规则用完整 `ruleDesc` 作为 GameData 版本护栏。当前 FormulaBook 只能可靠接收敌方最大生命、攻击力与防御力的直接倍率增量，因此只将这三类历史语义目标映射到真实可写乘区。

敌方减伤、敌方攻击速度和法抗点数目前没有语义匹配的 FormulaBook 可写乘区，保持 `unknown` 并记录在统一 TODO。

本说明由 AI 生成，可删除或重新生成，不属于机制证据。
