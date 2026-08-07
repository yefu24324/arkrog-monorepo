---
name: arknights-gamedata-report
description: 维护 @arkrog/arknights-gamedata-report 的导出结构、类型、CLI、生成数据和消费者链路。用户要求在 ArknightsGameData 更新后刷新或审计报告、修复报告缺失字段、增加或调整 operators/roguelike JSON、修改 report 数据契约、处理 schema-docs 的 /gamedata-report 数据、迁移 WrappedRelicItem 或难度关联类型时使用。
---

# 维护 Arknights GameData Report

## 先建立事实

1. 阅读仓库 `AGENTS.md` 和 `packages/arknights-gamedata-report/README.md`。
2. 执行 `git status --short`，保留现有工作区修改。
3. 检查用户要求涉及的原始 GameData 文件、`@arkrog/arknights-schema` 类型、报告模块和消费者；能从仓库确认的事实不要询问用户。
4. 区分以下任务，不要把“刷新数据”和“修改报告契约”混为一谈：
   - 仅 GameData 内容变化：不改导出结构，重新生成并审计差异。
   - 原始 JSON 结构变化：先更新 schema，再调整 report。
   - 报告字段或目录契约变化：先分析所有消费者并让用户确认关键设计，再实施。
   - 消费路径变化：同时更新生成命令、静态 URL、文档脚本和 README。

## 遵守不变量

- `@arkrog/arknights-schema` 是原始 GameData 类型来源；report 不复制另一套完整原始 Schema。
- 每种目标 JSON 保持独立 `export-*.ts` 模块，并在文件顶部用中文注释标明来源。
- 不直接编辑 `dist/gamedata-report/**` 或 schema-docs 生成目录；修改源码后重新生成。
- 报告 JSON 不增加 `schemaVersion`、`sources` 或未确认的兼容字段。
- `operators.json` 和 `roguelike.json` 保持裸数组。
- 单干员报告显式保留 `missingTokenIds`；缺失召唤物不得静默忽略或伪造。
- `relics.json` 保持裸数组，并保留 `pinyin`、`layer`、`enable`。
- `stage.json` 保持关卡 ID 字典，替换 Level 保持 levelId 字典。
- `topic_ext.json` 无损保存其余主题数据，避免与 topic/relics/stage 大块重复；新字段默认不得因白名单遗漏。
- 先验证全部输入文件，再清理输出；只清理 `operators/`、`operators.json`、`roguelike/`、`roguelike.json`。
- `--out` 只接受相对路径并以 `process.cwd()` 为基准；不要改用包目录或 `INIT_CWD`。
- 包公开原始 TypeScript，不生成 JS；内部使用 package imports，避免向消费者暴露 `.ts` 后缀相对导入要求。

## 按变化类型处理

### GameData 内容更新

1. 运行 schema 更新审计；若用户要求检查游戏更新，结合 `arknights-schema-check-updates` skill。
2. 若没有结构变化，执行 `pnpm report:gamedata-report`。
3. 审计干员数、主题数、各主题藏品/关卡数、`missingTokenIds` 和文件体积变化。
4. 内容数量变化允许随 GameData 漂移，不要把旧数量硬编码成永恒断言；异常跳变必须追踪来源。

### 原始 JSON 结构变化

1. 不要用 `unknown` 或宽泛索引签名掩盖已知结构变化。
2. 先用 `arknights-schema-analyze-json` 分析明确的 JSON 文件；再按需使用 `arknights-schema-generate` 更新已有类型和 Zod Schema。
3. 从 `@arkrog/arknights-schema/types` 引用更新后的类型。
4. 调整受影响的 report 类型、收集函数和单独导出模块。
5. 增加覆盖新字段、可空性或关联关系的测试，然后重新生成报告。

### 修改干员报告

- 轻量索引：`src/operators/export-operators-index.ts`、`types.ts`。
- 单干员聚合：`export-operator-details.ts`。
- 职业形态、技能、模组、召唤物关联：`collect-operator-family.ts`。
- 新增来源表时，同时更新预检清单、来源注释、类型和 README。
- 不擅自把皮肤、语音、档案或基建资料并入报告；这属于范围扩张，先确认。

### 修改肉鸽报告

- 主题索引：`export-roguelike-index.ts`。
- 主题与难度：`export-topic.ts`、`collect-difficulty-relics.ts`。
- 藏品：`export-relics.ts`、`wrapped-relics.ts`。
- 关卡与 Level：`export-stages.ts`。
- 其余主题数据分区：`export-topic-ext.ts`。
- 编排和每主题四文件写入：`export-roguelike-reports.ts`。
- 调整字段归属时检查四个文件的并集与交集：要求信息无损，已分类的大块不得重复。

### 修改 CLI、路径或清理

- 参数：`src/config/arguments.ts`。
- 工作目录与 GameData 定位：`src/config/paths.ts`。
- 预检和生成顺序：`src/report.ts`。
- 文件写入与清理所有权：`src/shared/json-file.ts`。
- 命令帮助和 bin：`src/cli.ts`、`package.json`。
- 任何清理范围扩大都视为破坏性设计，先确认并做路径边界检查。

### 修改消费者

1. 用 `rg` 查找报告类型导入、静态 URL、生成命令和路径常量。
2. knowledge-graph 只从包公共出口引用报告类型和纯函数，不回退到 schema 的旧 `./game-data` 出口。
3. schema-docs 从自身目录运行 `arknights-gamedata-report --out public/gamedata-report`，前端通过 `/gamedata-report/**` 读取报告。
4. 敌人、公式、乘区等非 report 数据继续使用 `/data/**`，不要机械替换所有 `/data` URL。
5. 删除旧入口，不添加 deprecated 转发或双写兼容目录，除非用户明确要求。

## 验证

先运行 report 自身检查：

```powershell
pnpm --filter @arkrog/arknights-gamedata-report typecheck
pnpm --filter @arkrog/arknights-gamedata-report test
pnpm report:gamedata-report
```

检查生成结果：

- 根目录只有 `operators.json`、`operators/`、`roguelike.json`、`roguelike/`。
- 每个 `rogue_N` 恰有 `topic.json`、`relics.json`、`stage.json`、`topic_ext.json`。
- 顶层没有 `schemaVersion` 或 `sources`。
- `topic_ext` 不含 `difficulties`、`stages`、`relics`，其 `customizeData` 不含 `difficulties`。
- 缺失召唤物只出现在 `missingTokenIds`，并追踪其原始引用。

涉及 schema 时运行 schema typecheck/test。涉及消费者时运行：

```powershell
pnpm --filter @arkrog/arknights-schema-docs docs:generate
pnpm --filter @arkrog/arknights-schema-docs exec tsc --noEmit
pnpm --filter @arkrog/arknights-schema-docs lint
```

涉及藏品包装或难度条件契约时，运行 knowledge-graph 对应测试；全套测试若失败，区分本次 report 回归与工作区已有 FormulaBook 差异，不越界修改 FormulaBook。

最后执行：

```powershell
rg -n "relics:export|@arkrog/arknights-schema/game-data|/data/operators|/data/roguelike" packages package.json README.md
git diff --check
```

交付时报告生成数量、验证结果、未验证项和任何原始 GameData 缺失关联。
