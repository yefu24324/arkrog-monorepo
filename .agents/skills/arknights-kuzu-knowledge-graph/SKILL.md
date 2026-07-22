---
name: arknights-kuzu-knowledge-graph
description: 使用项目内置 Kuzu 图数据库构建、查询、导出和维护明日方舟机制知识图谱，追踪 ArknightsGameData 物品/藏品 buff 黑板、buff_template_data 战斗组件、@arkrog/arknights-schema 类型及 docs 人工知识到伤害乘区的证据路径。用户要求“查询 Kuzu/知识图谱”“重建图谱”“导出某个肉鸽主题的藏品乘区表”“分析藏品黑板进入哪个乘区”“追踪 item.effect.attack_bonus”“执行图查询/Cypher”“列出未知乘区”或修改图谱领域映射时使用。
---

# 使用明日方舟 Kuzu 知识图谱

通过仓库根目录的 `graph:*` 命令调用 Kuzu。优先使用现有封装，不临时编写另一套 Kuzu 驱动或直接修改生成的数据库。

## 准备

首次处理本轮图谱任务时读取：

- `packages/arknights-knowledge-graph/README.md`
- `packages/arknights-knowledge-graph/package.json`

始终从 monorepo 根目录执行命令。保留工作区现有改动，不更新或重置 `ArknightsGameData` 子模块。

数据库默认位于 `.data/arknights-knowledge.kuzu`，属于可重建缓存，不提交 Git。

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
pnpm graph:trace rogue_5_relic_blockg_1
```

检查输出中的完整路径：

```text
Item -> Effect -> Parameter
               -> Mechanic
               -> DamageZone
```

必须同时报告 buff key、黑板值、战斗模板、Action 组件、乘区结论和原始 JSON 路径。没有映射时保留 `UNKNOWN`，不要凭字段名补结论。

### 执行自定义图查询

标准命令无法回答时使用只读 Cypher：

```powershell
pnpm graph:cypher "MATCH (i:Item)-[:ITEM_HAS_EFFECT]->(e:Effect)-[:EFFECT_USES_MECHANIC]->(m:Mechanic) WHERE m.componentTypes CONTAINS 'DamageScale' RETURN i.name, e.parameters, m.name LIMIT 20"
```

遵守以下限制：

- 每次只执行一条 Cypher；Kuzu `0.11.3` 的 Windows Node 驱动执行多语句可能崩溃。
- 查询型请求只执行 `MATCH`、`RETURN` 等只读语句。
- 不用 Cypher 直接修补生成数据库；修改源数据模型或领域规则后重建。
- 限制无边界查询的返回量，优先添加 `WHERE` 与 `LIMIT`。

### 导出主题藏品表

用户要求某个肉鸽主题的全部藏品、乘区和生效条件时运行：

```powershell
pnpm graph:export rogue_6
```

按 `items.type = RELIC` 过滤真正藏品，并核对汇总表藏品数、唯一 ID 数和逐 buff 明细数。导出器必须同时解析 `relics` 和间接关联的 `charBuffData`，避免把“新典训”等隐藏战斗效果误标为未知。

### 重建图谱

出现以下任一情况时运行：

```powershell
pnpm graph:build
```

- `.data/arknights-knowledge.kuzu` 不存在或无法打开。
- 本轮任务修改了 GameData、schema、`docs/game` 或图谱领域规则。
- 用户明确要求重新导入、刷新或校验最新知识。

同一份输入在本轮中只需成功重建一次。记录构建输出的 sources、schemas、sections、items、effects、parameters、mechanics 和 classifiedEffects 数量。

## 解释证据

按关系属性解释结论：

- `verified`：存在直接公式、人工文档或战斗组件证据。
- `inferred`：根据完整 buff 类型、触发条件和黑板上下文推断。
- `unknown`：证据不足，不能宣称已经知道乘区。

回答必须区分字段级结论与具体 buff 结论。例如 `blackboard.atk` 本身有歧义；`char_attribute_mul.atk` 可推断为局外攻击区，而条件或层数战斗组件中的 `atk` 通常进入局内攻击区。

不要承诺客户端解包数据能覆盖服务器专属逻辑。对未知机制说明需要补充的反编译组件或可靠人工知识；一旦机制映射得到确认，所有引用该机制的藏品可通过重建批量获得结论。

## 维护领域映射

仅在用户要求新增或修正图谱知识时修改代码。先读取：

- `packages/arknights-knowledge-graph/src/domain/damage-zones.ts`
- `packages/arknights-knowledge-graph/test/damage-zones.test.ts`
- 对应的 GameData、战斗模板和 `docs/game` 证据

每条新映射必须包含目标乘区、`status`、`confidence`、判定理由和仓库证据路径。代码必须添加中文注释。修改后依次运行：

```powershell
pnpm graph:typecheck
pnpm graph:test
pnpm graph:build
```

最后用一个目标问题或具体藏品执行 `graph:ask`/`graph:trace`，确认图路径和证据输出符合预期。

## 交付结果

简要报告：

- 实际执行的图谱命令及退出结果。
- 结论所在乘区及公式符号。
- 证据状态、理由和源路径。
- 是否重建数据库及导入统计。
- 尚未分类的机制和无法静态确认的边界。
