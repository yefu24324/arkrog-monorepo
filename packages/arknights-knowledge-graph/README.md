# @arkrog/arknights-knowledge-graph

使用 Kuzu 将三类来源组成可追溯的明日方舟机制知识图谱：

- `ArknightsGameData/zh_CN/gamedata/excel/roguelike_topic_table.json`：物品、藏品 buff 与黑板原始值。
- `ArknightsGameData/zh_CN/gamedata/battle/buff_template_data.json`：模板事件和 `DamageScale`、`CreateBuff` 等客户端战斗组件。
- `packages/arknights-schema/src` 与 `docs/game`：数据结构定义和人工确认的真实公式知识。

数据库默认生成到 `.data/arknights-knowledge.kuzu`，不提交到 Git；所有结论均可由源数据重建。

## 快速使用

在 monorepo 根目录运行：

```bash
pnpm graph:build
pnpm graph:ask "item.effect.attack_bonus 最终进入哪个伤害乘区？"
pnpm graph:ask "不同的藏品buff黑板最终会被计算到角色的哪个乘区"
pnpm graph:trace rogue_5_relic_blockg_1
pnpm graph:export rogue_6
```

答案会同时给出乘区、证据状态、判定原因、原始 JSON 路径以及实际引用的战斗组件。`verified` 表示存在直接公式或组件证据，`inferred` 表示根据完整 buff 上下文推断，`unknown` 表示证据不足且不会强行分类。

`graph:export <topicId>` 会在对应 `docs/game/<主题名>/` 下生成全部 `RELIC` 藏品汇总及逐 buff 证据明细，并补充由藏品间接关联的 `charBuffData` 效果。

## 图模型

核心路径如下：

```text
Source ──CONTAINS──> Item ──HAS_EFFECT──> Effect ──HAS_PARAMETER──> Parameter
                                  │                 │
                                  │                 └──MATCHES──> Field ──ENTERS_ZONE──> DamageZone
                                  ├──USES_MECHANIC──> Mechanic
                                  └──ENTERS_ZONE──────────────────────────> DamageZone

Source ──DECLARES──> SchemaDefinition ──DESCRIBES──> Field
Source ──HAS_SECTION──> DocumentSection ──SUPPORTS──> DamageZone
```

`FIELD_ENTERS_ZONE` 和 `EFFECT_ENTERS_ZONE` 关系携带 `status`、`confidence`、`reason`、`evidencePath`。因此答案不是关键词搜索结果，而是一条可以回溯到 GameData、schema 和人工知识的图路径。

## 直接查询

研究新机制时可以直接执行 Cypher：

```bash
pnpm graph:cypher "MATCH (i:Item)-[:ITEM_HAS_EFFECT]->(e:Effect)-[:EFFECT_USES_MECHANIC]->(m:Mechanic) WHERE m.componentTypes CONTAINS 'DamageScale' RETURN i.name, e.parameters, m.name LIMIT 20"
```

受 Kuzu `0.11.3` Windows Node 驱动限制，`graph:cypher` 每次只接受一条 Cypher，多条查询请分别运行。

新增确定性知识应优先补充到 `src/domain/damage-zones.ts` 并附证据路径，再重建数据库。GameData 更新只需重新运行 `pnpm graph:build`。

## 当前边界

当前版本已完整规范化 `roguelike_topic_table` 中 6 个集成战略主题的物品、藏品 buff 和黑板，并导入全部战斗 buff 模板、schema 声明和人工 Markdown 章节。其他 GameData 表尚未逐实体展开。

图谱可以消除大量重复实测，但客户端解包数据不一定包含服务器逻辑，且未知组件的语义不能由字段名可靠推出。此类结论会保持 `unknown`；补充反编译证据或可靠文档映射后即可一次性覆盖所有引用该机制的藏品，而无需逐件进游戏测试。

当前 Node 驱动使用 Kuzu `0.11.3`；这是 KuzuDB 归档后的最终兼容版本。数据库访问被隔离在本包的 `src/graph` 中，后续替换驱动不会影响领域规则和导入模型。
