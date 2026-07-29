# @arkrog/arknights-knowledge-graph

使用 Kuzu 与纯 TS 语义规则构建可追溯的明日方舟战斗机制知识。

## 目录：`lib` vs `tools`

| 路径 | 谁用 | 内容 |
|------|------|------|
| `src/lib/` | 前端 / docs / 测试 / tools | **对外纯 TS**：domain 规则、classify、formula 公式定义、mechanics 游戏机制适配 |
| `src/tools/` | 本 monorepo | **自用**：Kuzu 建图、ask/trace/cypher、读盘 export |

`package.json` exports：`.`、`./classify`、`./formula`、`./mechanics`。不导出 `tools`（避免拖进 kuzu）。

**不再**生成按藏品 ID 的 `RELIC_ZONE_BY_ITEM` 总表。运行时对选中 buff 调用路由/写入程序。

## 藏品 → 公式簿程序（复用 classify + formula-book）

```ts
import {
  FormulaContext,
  evaluateFormula,
} from "@arkrog/arknights-knowledge-graph/formula";
import {
  applyRelicItemsToFormulaContext,
} from "@arkrog/arknights-knowledge-graph/mechanics";

const context = new FormulaContext();
// 基础属性与藏品 buff 一样，作为 FormulaItem 写入对应乘区。
context.add("干员基础攻击力", 100, "干员基础攻击力");
applyRelicItemsToFormulaContext(context, selectedRelics, {
  // selectedRelics 使用 relics:export 生成的 { id, name, relic, charBuffs, layer, enable }。
  topicId: rogueInput.topic,
  // 生效上下文：敌人类型 / 职业 / 关卡；前置藏品从 relics 自动解析。
  activation: {
    enemy: { id: enemyBase.id, levelType: enemyBase.levelType, tags: enemyBase.enemyTags },
    character: {
      profession: charData.profession,
      subProfessionId: charData.subProfessionId,
      position: charData.position,
      hasToken: Boolean(charData.displayTokenDict),
    },
    stage: stageData ? { id: stageData.id, isBoss: Boolean(stageData.isBoss) } : undefined,
  },
});
evaluateFormula("operator_in_game_atk", context);
```

- **路由** `routeRelicBuffToZones`：buff → 乘区（与是否生效正交）
- **模板程序** `runRelicFormulaProgram`：已注册战斗模板使用独立函数解释参数、目标和乘区；未注册模板才回退到明确的通用语义规则
- **生效** `evaluateBuffActivation`：读黑板 `reliance_relics` / 敌人 ID、排除、等级与标签 / 职业、子职业与部署位 / 关卡选择器
- **受赠者** 文档预览默认当前干员收到 `charBuffData`；职业新典训会从进阶券稳定 ID 额外校验职业
- **批量** `applyRelicItemsToFormulaContext`：一次处理共享包装藏品；`enable=false` 完全跳过，启用列表自动形成 `reliance_relics` 依赖集合
- **原始数据** `relic` 与 `charBuffs` 保留 GameData 原始对象，`layer` 从 0 开始并由具体藏品程序解释
- **写入** 只有已经通过生效判定的最小 `FormulaItem` 才进入 `FormulaContext`
- **组装** 公式簿使用 `multiply`、`add`、`sum`、`union`、`max`、`product`、`productOnePlus` 等运算符 DSL 和 `item("说明", value)` 构造完整公式；所有函数仍返回同一种 `FormulaZoneExpression`
- **基础值** 不再使用独立 `input` 参数；基础属性、伤害倍率与 buff 都以最小 `FormulaItem` 写入同名乘区
- **伤害类型** 不进入 `FormulaItem` 或 Context 分桶；物理、法术、真实和元素最终公式分别引用自己的独立增伤乘区
- **乘区边界** 只有 `formula-book.ts` 的 `FormulaZoneId` 真实 ID 可以用于分类、路由和 `FormulaItem` 写入

实现：`src/lib/mechanics/activation.ts`、`relic-programs.ts`、`relic-items.ts`、`relic-template-programs.ts`。

## 肉鸽难度 → 公式簿程序

难度原始事实来自 `roguelike_topic_table.json` 的
`details[topicId].difficulties[].ruleDesc`。`customizeData[].difficulties[].buffs`
是发展树节点 ID，只用于主题机制展示，不作为战斗 buff。

```ts
import {
  FormulaContext,
} from "@arkrog/arknights-knowledge-graph/formula";
import {
  applyRogueDifficultyToFormulaContext,
  routeRogueDifficultyToZones,
  routeSelectedRogueDifficultyToZones,
} from "@arkrog/arknights-knowledge-graph/mechanics";

const context = new FormulaContext();
const route = routeRogueDifficultyToZones({
  topicId: "rogue_6",
  difficulty: topic.difficulties[11],
  difficultyIndex: 11,
});
const cumulativeRoute = routeSelectedRogueDifficultyToZones({
  topicId: "rogue_6",
  difficulties: topic.difficulties,
  selectedDifficulty: topic.difficulties[11],
});
const placements = applyRogueDifficultyToFormulaContext(context, {
  topicId: "rogue_6",
  difficulties: topic.difficulties,
  selectedDifficulty: topic.difficulties[11],
  activation: { enemy: { id: enemy.id, levelType: enemy.levelType } },
  conditionalRelics: topic.difficultyConditionalRelics,
  // 失败助力和上一局遗留支援默认关闭，只有用户确认条件成立并选择后才传入。
  enabledConditionalRelicIds: ["rogue_6_legacy_06:0:rogue_6_start_3"],
});
```

- `NORMAL` 难度会累计同模式中不高于所选 grade 的效果；特殊模式只应用自身。
- Kuzu 使用 `RogueDifficulty -> DifficultyEffect -> DamageZone` 保存原始描述、数值、目标、规则和证据路径。
- `RogueDifficulty -> DIFFICULTY_HAS_CONDITIONAL_ITEM -> Item -> Effect -> DamageZone` 保存难度可用的失败助力与遗留支援；它们默认不生效。
- 例如“襁褓巨龙”来自 `legacy_06 -> choice_ro6_startbuff_9 -> start_3`，需上一局至少通过两个区域且本局选择后，才把 `max_hp=0.5` 写入 `relic_rune_mul.enemy_max_hp`。
- mechanics 与 Kuzu 共用 `difficulty-rules.ts`，不存在浏览器端第二份乘区表。
- 完整 `ruleDesc` 是版本护栏；原文更新后旧规则会失配并返回 `unknown`。
- 静态表缺失的主题特有规则不进入 Kuzu 同源难度事实；统一放在 `src/lib/mechanics/topic-rules/` 下并标记为人工维护。
- `rogue_6` NORMAL 0–3 的低难度敌方生命与攻击修正由 `topic-rules/rogue-6.ts` 按精确等级写入，禁止向更高难度累计。
- 客户端未提供战斗实现的主题机制、特定敌人和无数值效果保持未知，不根据文案补造参数。

## 命令

```bash
pnpm graph:build
pnpm graph:ask "..."
pnpm graph:trace rogue_6_relic_assign_2
pnpm graph:export rogue_6
pnpm graph:export:all
pnpm graph:test
pnpm graph:typecheck
```

`graph:export` 只负责依赖 Kuzu 的乘区验证，并按主题写出两份独立 JSON：

- `docs/game/relic-zone-validation/graph/rogue_N.json`：只读取 Kuzu 的 `EFFECT_ENTERS_ZONE` 预测边。
- `docs/game/relic-zone-validation/formula/rogue_N.json`：使用公式项写入函数检查可写入乘区；所有 buff 假定生效，不执行公式数值求值。

稀疏人工修正位于 `docs/game/relic-zone-validation/human/`。文档站最终显示按 `human > formula` 回退，human 不参与生产图谱或公式路由。

游戏数据整理、合并与自定义目录输出统一使用仓库根目录的 `pnpm relics:export`。该命令由 schema 包提供，不属于图谱工具，也不会加载或初始化 Kuzu。
