---
name: arknights-kuzu-knowledge-graph
description: 使用项目内置 Kuzu 图数据库构建、查询、导出和维护明日方舟机制知识图谱，追踪 ArknightsGameData 藏品 buff 黑板、buff_template_data Action、@arkrog/arknights-schema 类型及可版本化战斗引擎语义规则到伤害乘区的证据路径；docs/game 仅作为单元测试人工期望。用户要求“查询 Kuzu/知识图谱”“重建图谱”“导出某个肉鸽主题的藏品乘区表”“分析藏品黑板进入哪个乘区”“追踪 item.effect.attack_bonus”“执行图查询/Cypher”“列出未知乘区”或修改图谱领域映射时使用。
---

# 使用明日方舟 Kuzu 知识图谱

通过仓库根目录的 `graph:*` 命令调用 Kuzu。优先使用现有封装，不临时编写另一套驱动，也不直接修改生成的数据库。

## 准备

首次处理本轮图谱任务时完整读取：

- `packages/arknights-knowledge-graph/README.md`
- `packages/arknights-knowledge-graph/package.json`

始终从 monorepo 根目录执行命令。保留工作区现有改动，不更新或重置 `ArknightsGameData` 子模块。

数据库默认位于 `.data/arknights-knowledge.kuzu`，属于可重建缓存，不提交 Git。

## 生产架构边界

生产数据流固定为：

```text
GameData + buff_template_data + schema
  -> 原始事实图
  -> 可版本化战斗引擎语义规则
  -> 自动乘区预测
  -> 生产查询/导出
```

`docs/game` 只能提供测试期望，不得被 `build.ts`、`query.ts`、`export.ts` 或 `EFFECT_ENTERS_ZONE.evidencePath` 当作生产证据。人工期望文件使用稳定 ID、buff 下标、JSON 路径和 GameData 摘要，禁止只按显示名称匹配。

## 选择操作

### 回答字段或一般乘区问题

```powershell
pnpm graph:ask "item.effect.attack_bonus 最终进入哪个伤害乘区？"
pnpm graph:ask "不同的藏品 buff 黑板最终会进入哪个乘区？"
```

使用 `graph:ask` 处理明确字段、自然语言问题和乘区汇总。数据库不存在时命令会自动构建。

### 追踪具体藏品

已知藏品原始 ID 或准确名称时优先使用：

```powershell
pnpm graph:trace rogue_6_relic_assign_2
```

必须同时报告 buff key、黑板值、事实来源、战斗模板、Action 属性/计算方式/目标、命中规则、乘区结论和原始 JSON 路径。没有映射时保留 `UNKNOWN`，不要凭字段名补结论。

### 执行自定义图查询

标准命令无法回答时使用只读 Cypher：

```powershell
pnpm graph:cypher "MATCH (i:Item)-[:ITEM_HAS_EFFECT]->(e:Effect)-[:EFFECT_USES_MECHANIC]->(m:Mechanic)-[:MECHANIC_HAS_ACTION]->(a:MechanicAction) WHERE a.componentType = 'DamageScale' RETURN i.name, e.parameters, m.name, a.event LIMIT 20"
```

遵守以下限制：

- 每次只执行一条 Cypher；Kuzu `0.11.3` 的 Windows Node 驱动执行多语句可能崩溃。
- 查询型请求只执行 `MATCH`、`RETURN` 等只读语句。
- 不用 Cypher 修补生成数据库；修改原始模型或领域规则后重建。
- 限制无边界查询的返回量，优先添加 `WHERE` 与 `LIMIT`。

### 导出主题藏品 JSON

```powershell
pnpm graph:export rogue_6
pnpm graph:export:all
```

按 `Item.itemType = RELIC` 的原始数据口径核对真正藏品，并同时覆盖 `relics` 和关联的 `charBuffData`。每个主题输出两份独立产物：

- `docs/game/relic-zone-validation/graph/rogue_N.json` 只读取图中 `EFFECT_ENTERS_ZONE` 预测。
- `docs/game/relic-zone-validation/formula/rogue_N.json` 使用官方公式贡献程序输出实际可写入乘区，默认全部 buff 生效且不求公式数值；它不是第二套分类器。

`docs/game/relic-zone-validation/human/` 只保存稀疏人工修正，未记录藏品在文档站回退到 formula。human 禁止被生产建图、分类、查询或公式程序读取。

验证 JSON 能被正常解析，并核对顶层 `schemaVersion`、`scope.itemCount`、`scope.effectCount` 和 `items[].effects[]`。每条效果应保留零基 `buffIndex`、原始黑板、分类状态、预测数组、规则 ID、证据路径与原始 JSON 路径。

### 重建图谱

以下情况运行：

```powershell
pnpm graph:build
```

- 数据库不存在或无法打开。
- 修改了 GameData、schema 或战斗引擎语义规则。
- 用户明确要求刷新或校验最新知识。

仅修改 `docs/game` 测试期望不需要重建生产图。同一份输入每轮只需成功重建一次。记录 sources、schemas、items、effects、parameters、mechanics、actions、semanticRules 和 classifiedEffects 数量。

## 解释证据

- `verified`：完整公式或战斗 Action 属性语义可直接验证。
- `inferred`：由完整 buff 类型、触发条件、黑板上下文和模板名推断。
- `unknown`：证据不足，不能宣称已经知道乘区。

回答必须区分字段级结论与具体 buff 结论。例如 `blackboard.atk` 本身有歧义；`char_attribute_mul.atk` 通常是局外攻击区，战斗事件创建的 ATK multiplier 通常是局内攻击区。

不要承诺客户端解包数据能覆盖服务器专属逻辑。未知机制应说明缺少的 Action、反编译组件或客户端事实；语义规则确认后，重建即可批量覆盖全部引用效果。

## 维护战斗引擎语义规则

用户要求新增或修正规则时先读取：

- `packages/arknights-knowledge-graph/src/lib/domain/damage-zones.ts`
- `packages/arknights-knowledge-graph/src/lib/domain/engine-rules.ts`
- `packages/arknights-knowledge-graph/test/damage-zones.test.ts`
- 对应 GameData、战斗模板和 `docs/game/knowledge-graph/relic-zone-expectations.json`

对外纯 TS 在 `src/lib/`；Kuzu/CLI/export 在 `src/tools/`。
藏品进公式簿：`src/lib/formula/relic-programs.ts`（`routeRelicBuffToZones` / `applyRelicBuffsToFormulaContext`），不生成按藏品 ID 总表。


每条规则必须包含稳定 ID、`version`、目标乘区、`status`、`confidence`、说明和声明式条件。修改已有语义时递增版本。`damage-zones.ts` 只定义公式乘区，不参与推断。代码必须添加中文注释。

修改后依次运行：

```powershell
pnpm graph:typecheck
pnpm graph:test
pnpm graph:build
```

最后用具体目标执行 `graph:ask` 或 `graph:trace`，并检查生产预测没有引用人工期望：

```powershell
pnpm graph:cypher "MATCH ()-[m:EFFECT_ENTERS_ZONE]->() WHERE m.evidencePath CONTAINS 'docs/game' RETURN count(*) AS count"
```

结果必须为 `0`。

## 交付结果

简要报告：

- 实际执行的命令及退出结果。
- 结论所在乘区与公式符号。
- 命中规则、证据状态、原因和原始路径。
- 是否重建数据库及导入统计。
- 人工期望测试结果，以及尚未分类或无法静态确认的边界。
