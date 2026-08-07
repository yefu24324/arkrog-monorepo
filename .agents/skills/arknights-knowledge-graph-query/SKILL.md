---
name: arknights-knowledge-graph-query
description: 只读使用已经构建且有效的明日方舟机制知识图谱进行用户问答、对象追踪、多跳关系分析、只读 Cypher 和通用 JSON/CSV/Markdown 导出。用户要求“查询知识图谱”“解释某效果/参数进入哪个乘区”“追踪藏品、难度、关卡或主题关系”“执行图查询”“导出图谱分析结果”“列出 unknown 或对照 Mechanics 结果”时使用；绝不生成规则、修改或重建图谱。
---

# 查询与导出明日方舟机制图谱

查询前运行 `pnpm graph:status`。状态为 `missing` 或 `invalid` 时拒绝问答和导出，并提示使用 `$arknights-knowledge-graph-build`；状态为 `stale` 时继续使用现有正式图谱，不在查询中途阻断用户，只在最终回答末尾提示图谱已过期、结果可能未包含最新输入，并建议重新构建。禁止自动或间接建图。

## 查询方式

- 自然语言问题：`pnpm graph:ask -- "问题"`
- 准确对象追踪：`pnpm graph:trace -- <ID或名称>`
- 自定义只读查询：`pnpm graph:cypher -- "MATCH ... RETURN ... LIMIT ..."`
- 通用关系导出：`pnpm graph:export --format json|csv|markdown --out <仓库相对路径> -- "MATCH ... RETURN ..."`

每次只执行一条 Cypher，只允许只读语句。优先使用对象 ID、关系路径、`WHERE` 与 `LIMIT`；不得用 Cypher 修补图谱。

`graph:trace` 是通用对象入口，支持主题、主题特殊系统、系统概念、系统对象和藏品。系统通称先返回概览；精确对象显示名称、描述、原始字段、buff、模板、Action、乘区和证据。多个同名对象按主题、系统和对象类型全部返回，不静默选择；只在描述中命中的内容标为文本引用。

## 主题特殊系统提示

以下中文称呼只用于帮助 AI 路由用户问题，允许人工大致补充或删除。图谱中的当前 `Topic`、`TopicSystem`、对象和引用才是查询事实；未来新增主题或模块即使未写入技能，也必须可以通过 ID、名称和通用关系查询。

- 水月：灯火/精神状态、骰子。
- 萨米：坍缩范式、密文板/协语、远见。
- 萨卡兹：灵感、年代、节点升级。
- 界园：界园通宝/品相、岁兽影响、烛火/伺烛客、岁兽残识/天象。
- 黑流树海：区域探索/理想域/实托邦/乌托邦、天气/实托邦方针、零件/自然物/加工品/概念体。

查询“零件”“实托邦”等通称时先返回系统或概念概览；查询精确显示名或 ID 时返回具体对象。技能提示不能覆盖图中证据，也不能把文本引用冒充系统本体。

## 回答边界

- 区分 `human_verified`、`verified`、`inferred`、`unknown` 和 `not_applicable`。
- 报告对象 ID、效果、参数、条件、目标、Action、乘区、聚合方式、规则与证据路径。
- 主题系统查询优先报告 `Topic → TopicSystem → TopicSystemObject → Effect/Field/Reference` 游戏数据关系；乘区只在图中有充分证据时附带。
- 图中已有推导标为 `graph_conclusion`。
- 可基于图中事实、规则和 FormulaBook 做一次性多跳推理，但必须标为 `query_inference`，展示路径，绝不写回；证据不足返回 `unknown`，矛盾返回 `conflict`。
- 导出默认只包含正式图关系。只有用户明确要求时才加入临时推断，并单独标记。
- 不把客户端 GameData 无法证明的服务器逻辑描述为已验证事实。

## 与 Mechanics 的关系

图谱分析和 Mechanics 运行结果必须独立：

- 图谱导出标记 `source: graph`，不得用 Mechanics 填充 `unknown`。
- Mechanics 输出不得回填图谱结论。
- 可以并列查询或导出两套结果并报告差异；差异标记为 `conflict`，交由人类处理。
- 本技能不调用 Mechanics 生成程序，也不修改任何 Mechanics 文件。

交付时说明正式 build ID、实际查询或导出命令、结论状态、证据路径、临时推断边界和输出路径。若状态为 `stale`，在这些结果之后追加一次过期提示及新鲜度差异；不要用过期提示替代查询结果。
