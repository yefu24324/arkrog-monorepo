# @arkrog/arknights-knowledge-graph

使用 Kuzu 与纯 TS 语义规则构建可追溯的明日方舟战斗机制知识。

## 目录：`lib` vs `tools`

| 路径 | 谁用 | 内容 |
|------|------|------|
| `src/lib/` | 前端 / docs / 测试 / tools | **对外纯 TS**：domain 规则、classify、formula（含藏品→公式簿程序） |
| `src/tools/` | 本 monorepo | **自用**：Kuzu 建图、ask/trace/cypher、读盘 export |

`package.json` exports：`.`、`./classify`、`./formula`。不导出 `tools`（避免拖进 kuzu）。

**不再**生成按藏品 ID 的 `RELIC_ZONE_BY_ITEM` 总表。运行时对选中 buff 调用路由/写入程序。

## 藏品 → 公式簿程序（复用 classify + formula-book）

```ts
import {
  FormulaContext,
  applyRelicBuffsToFormulaContext,
  evaluateDamageFormula,
} from "@arkrog/arknights-knowledge-graph/formula";

const context = new FormulaContext();
applyRelicBuffsToFormulaContext(context, {
  // CalcCenter 已经筛出的 userActive 藏品可整批直接传入。
  relics: selectedRelics,
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
evaluateDamageFormula("FINAL_ATK", context, { ATK0: 100 });
```

- **路由** `routeRelicBuffToZones`：buff → 乘区（与是否生效正交）
- **模板程序** `runRelicFormulaProgram`：已注册战斗模板使用独立函数解释参数、目标和乘区；未注册模板才回退到明确的通用语义规则
- **生效** `evaluateBuffActivation`：读黑板 `reliance_relics` / 敌人 ID、排除、等级与标签 / 职业、子职业与部署位 / 关卡选择器
- **受赠者** 文档预览默认当前干员收到 `charBuffData`；职业新典训会从进阶券稳定 ID 额外校验职业
- **批量** `applyRelicBuffsToFormulaContext`：一次处理 CalcCenter 的 `selectedRelics`，并从同一列表推导 `reliance_relics` 依赖集合
- **写入** 贡献可 `active=false`（保留记录与原因，公式簿求值自动跳过）

实现：`src/lib/formula/activation.ts`、`relic-programs.ts`、`relic-contributions.ts`、`relic-template-programs.ts`。

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

`export` 按主题写出两份独立 JSON：

- `docs/game/relic-zone-validation/graph/rogue_N.json`：只读取 Kuzu 的 `EFFECT_ENTERS_ZONE` 预测边。
- `docs/game/relic-zone-validation/formula/rogue_N.json`：使用公式贡献函数检查可写入乘区；所有 buff 假定生效，不执行公式数值求值。

稀疏人工修正位于 `docs/game/relic-zone-validation/human/`。文档站最终显示按 `human > formula` 回退，human 不参与生产图谱或公式路由。
