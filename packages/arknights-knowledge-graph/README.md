# @arkrog/arknights-knowledge-graph

使用本地 Kuzu 保存可追溯的明日方舟机制证据图，并把有效正式图谱作为 Mechanics 程序重新生成的依据。

## 模块边界

| 路径 | 作用 |
| --- | --- |
| `src/lib/formula/` | 定义 FormulaBook、可写乘区与公式 AST |
| `src/lib/domain/engine-rules.ts` | 定义声明式规则语言、Action 事实提取器和通用执行器，不保存具体知识 |
| `src/lib/mechanics/` | 生成后的确定性 Mechanics 运行时；不连接 Kuzu |
| `src/tools/` | 准备输入、校验本地规则与主题解释、构建和只读查询 Kuzu |
| `mechanics-knowledge/` | 人类自然语言知识，是最高级机制证据 |
| `.data/arknights-knowledge-graph/` | Git 忽略的规则缓存、清单、冲突、候选库与导出 |

生产代码只提交事实提取、规则 Schema、通用推理、校验和构建程序。具体声明式规则与 Kuzu 图谱只保存在本地。

## 证据与三层图谱

证据顺序固定为：

1. `mechanics-knowledge` 人类知识。
2. FormulaBook 当前乘区、聚合方式与公式。
3. GameData、buff_template Action、schema 和图关系推断。

图谱保存三层关系：

- 事实层：对象、效果、参数、模板、Action 和原始路径。
- 知识层：人类知识来源、FormulaBook zone 和本地声明式规则。
- 推导层：乘区、证据状态、`unknown` 与 `not_applicable`。

人类知识与其他证据冲突时停止发布并询问人类。`unknown` 可以进入正式图谱，`conflict` 不可发布。

## 构建

使用 `$arknights-knowledge-graph-build`：

```powershell
pnpm graph:prepare
# AI 在 rules/ 生成乘区规则，并在 topic-systems/ 生成主题系统解释
pnpm graph:validate
# preparation 要求人工审批时，在人类确认后记录当前输入与规则摘要
pnpm graph:approve -- "人类确认理由"
pnpm graph:build
pnpm graph:status
```

规则缓存可以按影响范围重新解释；Kuzu 始终从全部当前输入全量构建候选库，成功后原子替换正式库。构建清单记录人类知识、FormulaBook、GameData、schema、构建程序和规则缓存摘要。

当前覆盖报告会明确列出已纳入和未纳入的对象类型；不得把未实现的关卡、主题或其他 GameData 提取器描述为已经支持。

主题特殊系统以 GameData 的 `topics + moduleTypes` 为权威范围。构建器把每个模块递归拆成 `Topic → TopicSystem → TopicSystemObject → TopicSystemField`，保存局部原始 JSON、JSONPath、引用与摘要一致性证据。未来新增模块无需专用 TypeScript 分支即可先完整入图，暂时无法解释的语义标为 `unknown`。明确黑板与模板引用形成结构化效果链，只有显示文案的效果标为 `inferred`，资源、商店和路线规则标为 `not_applicable`。

## 查询与通用导出

使用 `$arknights-knowledge-graph-query`：

```powershell
pnpm graph:status
pnpm graph:ask -- "冰中火进入哪些乘区？"
pnpm graph:trace -- rogue_6_relic_fight_21
pnpm graph:cypher -- "MATCH (n) RETURN label(n), count(*)"
pnpm graph:export --format json --out .data/result.json -- "MATCH (n) RETURN n LIMIT 20"
```

`ask`、`trace`、`cypher` 和 `export` 只读取正式图谱，绝不隐式构建。图谱为 `stale` 时仍会完成查询或导出，只在最终输出提示结果可能未包含最新输入；正式数据库缺失或 manifest 无效时才拒绝执行。`trace` 是通用对象追踪入口，支持主题、特殊系统、系统概念、系统对象与藏品；同名对象不会被静默裁剪。`graph:export` 是通用关系导出，不限定藏品，可输出 JSON、CSV 或 Markdown；它只导出图谱结果，不调用或融合 Mechanics。

## 与 Mechanics 的关系

依赖方向为：

```text
mechanics-knowledge + FormulaBook + GameData
                    ↓
                 有效图谱
                    ↓
         Mechanics 程序重新生成
```

Mechanics 生成可以读取有效正式 Kuzu；生成后的运行时只消费 gamedata-report。图谱分析和 Mechanics 运行结果保持独立，可以对照但不能互相补全或回填。
