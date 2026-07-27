# @arkrog/arknights-schema

`ArknightsGameData` 的 TypeScript 类型定义与 Zod 数据校验内部库。

当前完整覆盖 `zh_CN/gamedata/excel/roguelike_topic_table.json` 与
`zh_CN/gamedata/battle/buff_template_data.json`。初始类型由本地工具根据完整数据一次性生成；
进入维护阶段后，TypeScript 类型、Zod Schema 和注释均作为人工维护源码，
游戏更新只做针对性局部修改。

## 常用命令

```bash
# 仅供目标表尚无任何类型时执行首次全量初始化；已有类型时会拒绝覆盖。
pnpm schema:bootstrap -- --file zh_CN/gamedata/battle/buff_template_data.json

# 分析指定 JSON 与现有 Zod 的不一致，并定位具体 Schema/Type。
pnpm schema:analyze -- --file zh_CN/gamedata/excel/roguelike_topic_table.json

# 检查全部已覆盖 JSON；这是 schema:analyze --all 的兼容入口。
pnpm schema:inspect

# 使用严格 Zod Schema 校验完整数据表。
pnpm schema:validate

# 执行包级类型检查、测试和构建。
pnpm --filter @arkrog/arknights-schema typecheck
pnpm --filter @arkrog/arknights-schema test
pnpm --filter @arkrog/arknights-schema build

# 直接从 TypeScript/JSDoc 生成并预览类型文档站；不会创建 Schema Markdown。
pnpm schema:docs:generate
pnpm schema:docs:dev
```

## 数据路径

工具默认读取 monorepo 根目录下的 `ArknightsGameData`。可以通过 `--data <路径>` 或环境变量 `ARKNIGHTS_GAME_DATA_PATH` 指定其他数据仓库目录。

## 工作方式

### 首次 Bootstrap

- 仅在目标 JSON 尚无任何类型、Schema 和人工说明时运行全量生成。
- 使用 `--file <ArknightsGameData 内相对路径>` 选择已登记的 Bootstrap 配置。
- Bootstrap 根据完整真实数据建立初始结构、目录与类型一致性测试。
- 如果检测到已有根类型，工具会直接失败，避免覆盖人工注释或局部修正。

### 后续局部维护

1. 运行 `schema:analyze`，通过现有严格 Zod Schema 校验真实数据。
2. 从报告读取 JSON Pointer、不一致的 `XxxSchema`、显式类型及源码路径。
3. 只修改报告涉及的 TypeScript 类型、Zod Schema、注释和相关测试。
4. 运行全量校验与类型一致性测试；不要重新执行 Bootstrap。

## 建模约定

- 同一 JSON 逻辑路径下的强关联定义聚合到一个 `.types.ts`，对应 Zod 聚合到一个 `.schemas.ts`。
- 单模块通常控制在 8～12 个定义以内；超大目录继续按子语义拆分。
- 目录镜像原表的 JSON 字段路径，例如 `details/stages`、`details/relics`、`modules/grid-zone`。
- 被多个 JSON 区块复用的定义统一放入 `roguelike-topic-table/shared`。
- 每个定义和字段都在 TypeScript JSDoc 与 Zod `.describe()` 中维护中文语义说明。
- 只在 `src/types/index.ts` 与 `src/schemas/index.ts` 保留公共出口，不为每个小目录生成 `index.ts`。
- Zod 对象使用严格模式；游戏更新新增未知字段时校验会失败并给出 JSON 路径。
- 空数组被建模为 `never[]`，确保首次出现元素时能被变化检查捕获。
- `buff_template_data` 中的递归 Action 按 CLR `$type` 建模为严格判别联合，嵌套节点通过惰性 Schema 闭环。

## GameData 导出

纯 GameData 导出与 Kuzu 图谱命令完全分离。从 monorepo 根目录执行：

```powershell
pnpm relics:export
pnpm relics:export --out D:\arkrog-data
pnpm relics:export --out ./exports
```

命令始终导出全部藏品、肉鸽主题、关卡和干员，不接受范围或主题参数。`--out` 支持绝对路径；相对路径以 monorepo 根目录解析。缺省输出到 `docs/game/game-data`。

```text
<输出目录>/
├─ relics/{topicId}.json
├─ roguelike/
│  ├─ topics/{topicId}.json
│  └─ stages/{topicId}/{stageId}.json
└─ operators/
   ├─ index.json
   └─ {operatorId}.json
```

- `relics`：按主题导出包装藏品，游戏原始数据位于 `relic` 与 `charBuffs`。
- `topics`：聚合原始主题入口、`details.difficulties` 主难度、主题机制扩展，以及 `init_mode_relic` / `LEGACY force_add_choice` 到支援藏品的原始证据链。
- `stages`：同时保留主题、关卡元数据、主 level JSON 和全部替换 level JSON。
- `operators`：聚合完整角色等级帧、所有引用技能等级、模组及职业形态 patch；不含皮肤、语音和档案。

本命令只读取 `ArknightsGameData/zh_CN/gamedata`，不连接、构建或查询 Kuzu。需要乘区验证时使用独立的 `pnpm graph:export`。
