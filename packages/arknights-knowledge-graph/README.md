# @arkrog/arknights-knowledge-graph

使用 Kuzu 构建可追溯、可重建的明日方舟战斗机制知识图谱。生产结论与人工期望严格分流：

```text
GameData + buff_template_data + @arkrog/arknights-schema
                         ↓
                   原始事实知识图谱
                         ↓
              可版本化战斗引擎语义规则
                         ↓
                   自动预测乘区结果
                         ↓
                      生产查询

docs/game 人工期望 ──────────────> 单元测试比较
```

`docs/game` 不参与建图和生产预测。人工结论只保存在测试夹具中，用来发现语义规则与已知游戏行为的差异；即使删除整个 `docs/game`，生产图谱仍可由原始数据和规则重建。

## 数据层与规则层

原始事实来自：

- `ArknightsGameData/zh_CN/gamedata/excel/roguelike_topic_table.json`：物品、藏品、直接 `relics` buff、间接 `charBuffData` buff 和黑板值。
- `ArknightsGameData/zh_CN/gamedata/battle/buff_template_data.json`：战斗事件、Action 类型、属性目标、计算方式和作用目标。
- `packages/arknights-schema/src`：TypeScript 与 Zod 数据结构声明。

战斗引擎语义规则位于 `src/domain/engine-rules.ts`。每条规则具有稳定 ID、独立版本、声明式匹配条件、目标乘区、证据等级和置信度。规则更新后重建图谱即可批量重新预测全部效果，无需修改生成的 Kuzu 数据库。

人工测试期望位于 `docs/game/knowledge-graph/relic-zone-expectations.json`。每条用例使用 `topicId + itemId + sourceTable/sourceId + buffIndex + effectPath` 定位效果，并绑定 GameData SHA-256，禁止只按显示名称匹配。

## 快速使用

在 monorepo 根目录运行：

```bash
pnpm graph:build
pnpm graph:ask "item.effect.attack_bonus 最终进入哪个伤害乘区？"
pnpm graph:ask "不同的藏品buff黑板最终会被计算到角色的哪个乘区"
pnpm graph:trace rogue_6_relic_assign_2
pnpm graph:export rogue_6
```

答案会给出乘区、证据状态、命中规则、原始 JSON 路径、战斗模板和 Action 属性事实。`verified` 表示 Action 或公式语义足以直接验证；`inferred` 表示由完整载体与黑板上下文推断；没有规则命中时保留 `unknown`。

`graph:export <topicId>` 会在 `docs/game/<主题名>/` 下生成 `*.json`。JSON 顶层包含主题、生产来源、口径和覆盖统计；`items[].effects[]` 保留结构化黑板、战斗模板、条件、分类状态、乘区预测、规则 ID、证据路径和原始 JSON 路径。输出目录只是报告落点，不会反向成为图谱证据。

导出格式带有 `schemaVersion`；JSON 字段结构发生不兼容变化时必须递增该版本。`buffIndex` 与原始 GameData 一致，使用零基下标。

## 图模型

生产图中的主要证据路径为：

```text
Source ──SOURCE_CONTAINS_ITEM──> Item ──ITEM_HAS_EFFECT──> Effect
                                      ├──EFFECT_HAS_PARAMETER──> Parameter
                                      ├──EFFECT_USES_MECHANIC──> Mechanic
                                      │                            └──MECHANIC_HAS_ACTION──> MechanicAction
                                      ├──EFFECT_PREDICTED_BY──> SemanticRule
                                      └──EFFECT_ENTERS_ZONE──> DamageZone

Source ──SOURCE_DECLARES_SCHEMA──> SchemaDefinition ──SCHEMA_DESCRIBES_FIELD──> Field
SemanticRule ──RULE_TARGETS_ZONE──> DamageZone
```

`EFFECT_ENTERS_ZONE` 保存 `ruleId`、`status`、`confidence`、`reason` 和只指向原始事实的 `evidencePath`。`SemanticRule.version` 用来跟踪战斗引擎理解的语义变化。

## 更新战斗引擎语义

发现新组件或规则不一致时：

1. 在 `engine-rules.ts` 中新增规则，或修改现有规则并递增其 `version`。
2. 为新增或变化的语义在人工期望夹具中添加稳定 ID 用例；GameData 更新后同步复核摘要。
3. 依次运行 `pnpm graph:typecheck`、`pnpm graph:test`、`pnpm graph:build`。
4. 使用 `graph:trace` 检查 `Effect → SemanticRule → DamageZone` 以及关联 Action 的完整证据路径。

人工期望与原始执行语义不一致时应显式记录差异，不应为了让测试通过而把人工名称分类写回生产规则。

## 直接查询

研究新机制时可以执行一条只读 Cypher：

```bash
pnpm graph:cypher "MATCH (i:Item)-[:ITEM_HAS_EFFECT]->(e:Effect)-[:EFFECT_USES_MECHANIC]->(m:Mechanic)-[:MECHANIC_HAS_ACTION]->(a:MechanicAction) WHERE a.componentType = 'DamageScale' RETURN i.name, e.parameters, m.name, a.event LIMIT 20"
```

Kuzu `0.11.3` 的 Windows Node 驱动每次只执行一条 Cypher。不要用 Cypher 修补生成数据库；领域规则或输入变化后应重建。

## 当前边界

当前版本规范化 `roguelike_topic_table` 内所有主题的物品、直接藏品效果、关联角色 buff，以及 `buff_template_data` 全部模板和 Action。其他 GameData 表尚未逐实体展开。

客户端解包数据不一定覆盖服务器专属逻辑。缺少 Action 语义或客户端实现时结论会保持 `unknown`；补充反编译事实或新的可验证规则后，重建即可批量覆盖所有引用该机制的藏品。
