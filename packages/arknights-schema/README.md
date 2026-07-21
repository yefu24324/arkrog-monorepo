# @arkrog/arknights-schema

`ArknightsGameData` 的 TypeScript 类型定义与 Zod 数据校验内部库。

首期完整覆盖 `zh_CN/gamedata/excel/roguelike_topic_table.json`。初始类型由本地工具根据完整数据一次性生成；进入维护阶段后，TypeScript 类型、Zod Schema、注释和文档均作为人工维护源码，游戏更新只做针对性局部修改。

## 常用命令

```bash
# 仅供尚无任何类型时执行首次全量初始化；已有类型时命令会拒绝覆盖。
pnpm schema:bootstrap

# 分析指定 JSON 与现有 Zod 的不一致，并定位具体 Schema/Type。
pnpm schema:analyze -- --file zh_CN/gamedata/excel/roguelike_topic_table.json

# 检查全部已覆盖 JSON；这是 schema:analyze --all 的兼容入口。
pnpm schema:inspect

# 使用严格 Zod Schema 校验完整数据表。
pnpm schema:validate

# 执行包级类型检查、测试、构建和文档完整性检查。
pnpm --filter @arkrog/arknights-schema typecheck
pnpm --filter @arkrog/arknights-schema test
pnpm --filter @arkrog/arknights-schema build
pnpm --filter @arkrog/arknights-schema docs:check

# 组装并预览自动生成的类型文档站（Fumadocs）。
pnpm schema:docs:generate
pnpm schema:docs:dev
```

## 数据路径

工具默认读取 monorepo 根目录下的 `ArknightsGameData`。可以通过 `--data <路径>` 或环境变量 `ARKNIGHTS_GAME_DATA_PATH` 指定其他数据仓库目录。

## 工作方式

### 首次 Bootstrap

- 仅在目标 JSON 尚无任何类型、Schema 和人工说明时运行全量生成。
- Bootstrap 根据完整真实数据建立初始结构、目录、类型一致性测试与文档。
- 如果检测到已有根类型，工具会直接失败，避免覆盖人工注释或局部修正。

### 后续局部维护

1. 运行 `schema:analyze`，通过现有严格 Zod Schema 校验真实数据。
2. 从报告读取 JSON Pointer、不一致的 `XxxSchema`、显式类型及源码路径。
3. 只修改报告涉及的 TypeScript 类型、Zod Schema、注释、文档和相关测试。
4. 运行全量校验与类型一致性测试；不要重新执行 Bootstrap。

## 建模约定

- 同一 JSON 逻辑路径下的强关联定义聚合到一个 `.types.ts`，对应 Zod 聚合到一个 `.schemas.ts`。
- 单模块通常控制在 8～12 个定义以内；超大目录继续按子语义拆分。
- 目录镜像原表的 JSON 字段路径，例如 `details/stages`、`details/relics`、`modules/grid-zone`。
- 被多个 JSON 区块复用的定义统一放入 `roguelike-topic-table/shared`。
- 每个定义都带有源码注释；每个 Type/Schema 逻辑模块对应一份中文 Markdown，页面内按类型分章节。
- 只在 `src/types/index.ts` 与 `src/schemas/index.ts` 保留公共出口，不为每个小目录生成 `index.ts`。
- Zod 对象使用严格模式；游戏更新新增未知字段时校验会失败并给出 JSON 路径。
- 空数组被建模为 `never[]`，确保首次出现元素时能被变化检查捕获。
- Markdown 中保留 `MANUAL` 标记用于区分人工说明；维护阶段不会重新生成或覆盖整个文档。
