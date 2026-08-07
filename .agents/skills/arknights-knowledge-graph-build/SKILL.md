---
name: arknights-knowledge-graph-build
description: 根据 mechanics-knowledge 人类知识、FormulaBook 当前乘区和公式、最新 GameData、buff_template Action 与 schema，生成本地声明式规则，校验冲突并全量原子重建明日方舟机制知识图谱。用户要求“构建/重建/刷新知识图谱”“游戏数据更新后重建图谱”“乘区或人类知识矫正后刷新图谱”“生成图谱规则”“处理图谱冲突或过期”时使用；不用于普通问答、追踪或导出。
---

# 构建明日方舟机制知识图谱

只修改构建程序；具体规则、候选库、正式 Kuzu、清单与冲突报告均保存在 Git 忽略的 `.data/arknights-knowledge-graph/`。

## 读取依据

首次处理任务时完整读取：

- `packages/arknights-knowledge-graph/README.md`
- `packages/arknights-knowledge-graph/package.json`
- `packages/arknights-knowledge-graph/mechanics-knowledge/README.md` 及其非示例知识文件
- `packages/arknights-knowledge-graph/src/lib/formula/formula-book.ts`
- `packages/arknights-knowledge-graph/src/lib/domain/engine-rules.ts`
- `packages/arknights-knowledge-graph/src/tools/graph-workspace.ts`

`mechanics-knowledge` 是最高级证据，FormulaBook 是第二级证据，GameData 图关系推断是第三级证据。冲突通常表示人类知识描述不充分；一次只向人类确认一个问题，禁止自行裁决。

## 构建流程

1. 运行 `pnpm graph:prepare`，读取 `.data/arknights-knowledge-graph/preparation.json`。
2. 按 `inputsDigest` 解释受影响知识，在 `.data/arknights-knowledge-graph/rules/*.json` 生成 `LocalGraphRuleFile v1`。
3. 分析当前 `topics + moduleTypes`，在 `.data/arknights-knowledge-graph/topic-systems/*.json` 生成 `LocalTopicSystemInterpretationFile v1`。解释文件只提供名称、别名、概念和引用语义，不控制实际覆盖。
4. 每条乘区规则记录稳定 ID、版本、`authority`、证据状态、FormulaBook zone、声明式条件和仓库相对 `evidencePaths`。
5. 人类乘区规则使用 `authority: human` 与 `status: human_verified`；GameData 推断只能是 `inferred` 或 `unknown`。
6. 不能唯一匹配对象、条件、叠加、引用或乘区时写入文件的 `conflicts`，不要猜测。
7. 运行 `pnpm graph:validate`，同时校验乘区规则和主题系统解释。冲突必须向人类确认；`unknown` 可以发布，`conflict` 不可发布。
8. `preparation.approval.required` 为真时，展示规则与关系差异并等待人类确认；确认后运行 `pnpm graph:approve -- "确认理由"`。禁止自行审批。
9. 无冲突且审批门禁通过后运行 `pnpm graph:build`。Kuzu 必须从全部当前输入全量构建候选库，成功后原子替换正式库。
10. 运行 `pnpm graph:status`，并使用新查询技能做抽样 trace/Cypher；构建期不得读取 Mechanics 程序或输出。

## 主题特殊系统提示

下列目录只帮助 AI 定位当前数据，不是权威规则，允许人工大致补充或删除。实际入图范围始终来自当前 GameData 的 `topics + modules[topicId].moduleTypes`；技能未列出的新增主题和模块也必须递归完整入图，无法解释的语义保留为 `unknown`。

- `rogue_1` 傀影与猩红孤钻：当前 `moduleTypes` 为空。
- `rogue_2` 水月与深蓝之树：`SANCHECK` 灯火/精神状态检查；`DICE` 骰子、投掷事件与规则。
- `rogue_3` 探索者的银凇止境：`CHAOS` 坍缩与坍缩范式；`TOTEMBUFF` 密文板与协语；`VISION` 远见。
- `rogue_4` 萨卡兹的无终奇语：`FRAGMENT` 灵感；`DISASTER` 年代；`NODE_UPGRADE` 主题节点升级。
- `rogue_5` 岁的界园志异：`COPPER` 界园通宝、品相与变化；`WRATH` 岁兽影响及战斗效果；`CANDLE` 烛火与伺烛客；`SKY` 岁兽残识节点与天象规则。
- `rogue_6` 沉沦者的黑流树海：`GRID_ZONE` 区域探索、理想域、实托邦与乌托邦；`WEATHER` 主天气、子天气和实托邦方针；`SCRAP` 零件、类型、移动、售卖与被动效果。

AI 必须结合当前 GameData、Schema、字段引用、buff template 和 Action 重新识别具体含义。技能提示本身不能产生 `human_verified` 结论，也不能阻止未列数据入图。

## 规则与图谱边界

- 仓库只提交事实提取器、规则 Schema、通用条件执行器、校验器、推理与构建程序。
- 禁止把具体藏品、难度、关卡或主题结论硬编码进 TypeScript。
- 图谱分事实层、知识层和推导层；每个发现的效果必须为 `predicted`、`unknown` 或 `not_applicable`，禁止静默遗漏。
- FormulaBook 当前没有人类知识所需乘区时停止询问，不得伪造 zone。
- 规则缓存可按影响范围重新解释，但 Kuzu 始终全量重建。
- 有有效规则但仍有冲突时，命令可生成 `candidate-invalid.kuzu` 供诊断；不得替换正式库。
- 人类知识或 FormulaBook 变化必须展示关系差异并经人类确认；稳定 GameData 更新可在无冲突时自动发布。
- 当前提取器未覆盖的对象类型必须保留在 preparation/manifest 覆盖报告中。
- 每个主题和 `moduleTypes` 都必须入图；模块递归还原摘要与原始摘要不一致、稳定 ID 冲突或明确 buff 静默遗漏时禁止发布。
- 新模块使用通用递归提取器自动保存对象、标量、原始路径和引用。AI 解释缺失不阻断数据入图，只标记为 `unknown`。

## 验证

至少运行：

```powershell
pnpm graph:prepare
pnpm graph:validate
pnpm graph:approve -- "人类确认理由"
pnpm graph:build
pnpm graph:status
pnpm graph:typecheck
pnpm graph:test
git diff --check
```

串行访问 Windows Kuzu。交付时报告输入变化、规则与冲突数、构建统计、覆盖缺口、抽样证据路径和正式 build ID。
