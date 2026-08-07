---
name: arknights-mechanics-regenerate
description: 根据人类自然语言 mechanics 知识、唯一知识快照、最新 @arkrog/arknights-gamedata-report 与 Kuzu 证据，重新生成 arknights-knowledge-graph 的藏品、难度、关卡或 rogue_4 至 rogue_6 主题特殊系统程序。用户要求“重新生成 mechanics”“知识更新后重构程序”“对比 mechanics 知识快照”“重生成藏品/难度/关卡/主题程序”时使用。
---

# 重新生成 Mechanics

只重建可丢弃的生成程序与索引说明；保留人类知识原文和 FormulaBook 契约。

## 开始前

完整读取：

- `packages/arknights-knowledge-graph/mechanics-knowledge/README.md` 及该目录全部 Markdown。
- `packages/arknights-knowledge-graph/src/lib/mechanics/README.md`。
- `packages/arknights-knowledge-graph/src/lib/mechanics/DATA_REQUIREMENTS.md`。
- `packages/arknights-knowledge-graph/src/lib/mechanics/TODO.md`。
- `packages/arknights-knowledge-graph/src/lib/formula/formula-book.ts`。
- `.agents/skills/arknights-knowledge-graph-query/SKILL.md`，并先运行 `pnpm graph:status` 验证正式图谱新鲜有效。

把 `mechanics-knowledge/` 视为 AI 只读目录。不得新增、修改、格式化、移动或删除其中任何文件。开始前记录其文件清单与内容哈希，结束前再次比较。

## 选择范围

若用户没有明确选择，只询问以下一个决策，并推荐模式 2：

1. 全量重新生成：重建所有生成目录。
2. 根据归档内容对比：比较 `mechanics-knowledge/` 与 `src/lib/mechanics/human-knowledge-snapshot/`，只重建受变化知识影响的范围。
3. 指定范围重新生成：由用户指定藏品、难度、关卡或某个独立主题入口。

模式 2 的快照是唯一归档。只比较当前知识与这份快照，不维护历史快照，也不把生成 Markdown 当作知识差异依据。

## 证据与冲突

按以下优先级裁决：

1. 人类自然语言知识。
2. 最新 gamedata-report、有效正式 Kuzu 图谱、buff_template Action 与 schema 事实。
3. 现有生成 TS 和同名 Markdown 只作代码索引，可直接丢弃。

人类知识只要求自然语言，不要求 ID 或结构化字段。无法唯一匹配对象、数值、条件或乘区时，暂停受影响范围并要求人类补充；不要修改知识原文或自行猜测。图谱不支持的字段保持 `unknown`，列入 `TODO.md`。

图谱是 Mechanics 程序生成的单向依据：图谱构建不得读取 Mechanics 程序或输出；本技能可以读取有效 Kuzu 生成程序。图谱缺失、过期或无效时必须停止并提示先使用 `$arknights-knowledge-graph-build`。生成后的 Mechanics 运行时仍不得连接 Kuzu，且其分析结果不得与图谱结果互相回填。

## 生成规则

- 只消费 `@arkrog/arknights-gamedata-report` 公开类型；运行时不得读原始 GameData、Kuzu 或 AI。
- `formula-book.ts` 是唯一乘区来源，不修改 FormulaBook 或 AST。需要新乘区时先向用户确认公开契约变更。
- 稳定 `analyze-*` 文件只查找、组合和调用程序。变更其公开参数或返回值前必须向用户确认。
- 按通用机制签名归纳程序，通过配置或注册表覆盖重复模式；不要为每件藏品或每个关卡生成函数。只有无法归纳且证据明确的对象使用特例。
- `rogue_4`、`rogue_5`、`rogue_6` 主题特殊系统保持独立入口和独立程序目录，禁止合并成共享主题入口。
- 每个生成 `.ts` 都写中文注释和 `AI_GENERATED` 声明，并在同目录维护同名 `.md`，记录为什么映射到该逻辑；Markdown 不是证据。
- 静态结果逐效果返回 `supported`、`unknown` 或 `not_applicable`，禁止静默遗漏。
- 运行时 `apply*` 原地更新调用方传入的 FormulaBook，只返回实际写入项；条件所需数据缺失时视为不生效。
- 不恢复旧 API、兼容层或 `@deprecated` 转发。

可自主重构以下生成区：

- `src/lib/mechanics/relic-programs/`
- `src/lib/mechanics/difficulty-programs/`
- `src/lib/mechanics/stage-programs/`
- `src/lib/mechanics/rogue_4-topic-spec-programs/`
- `src/lib/mechanics/rogue_5-topic-spec-programs/`
- `src/lib/mechanics/rogue_6-topic-spec-programs/`

若新知识揭示更通用的机制，应调整目录和注册结构，使同类证据共享程序，而不是只追加对象分支。

## 验证与快照

至少执行：

```powershell
pnpm --filter @arkrog/arknights-knowledge-graph typecheck
pnpm --filter @arkrog/arknights-knowledge-graph test
pnpm --filter @arkrog/arknights-knowledge-graph build
pnpm --filter @arkrog/arknights-schema-docs types:check
git diff --check
```

按查询技能执行相关 status/trace/Cypher 对照；本技能禁止触发图谱 build。检查旧 API 已删除、每个生成 TS 有同名 Markdown、`unknown` 没有静默消失、知识目录哈希完全未变。

只有生成、消费者迁移和全部验证成功后，才用当前 `mechanics-knowledge/` 覆盖 `src/lib/mechanics/human-knowledge-snapshot/`。覆盖前删除旧快照内容，确保只保留一份当前快照；失败或仍有歧义时禁止更新。

交付时说明选择的模式、重生成范围、证据与 unknown 边界、验证结果，以及快照是否更新。
