# @arkrog/arknights-gamedata-report

`@arkrog/arknights-gamedata-report` 从 `ArknightsGameData` 聚合前端和文档站可直接加载的干员、集成战略 JSON 报告，同时公开报告的主要 TypeScript 类型与纯数据组装函数。

本包只提供原始 TypeScript 源码，不编译 JavaScript 或声明文件。运行环境和消费方需要能够直接处理 TypeScript；仓库当前使用 Node.js 24。

## 报告结构

```text
gamedata-report/
├─ operators.json
├─ operators/
│  └─ {operatorId}.json
├─ roguelike.json
└─ roguelike/
   └─ {topicId}/
      ├─ topic.json
      ├─ relics.json
      ├─ stage.json
      └─ topic_ext.json
```

### operators.json

所有可获得干员的轻量索引数组。每项包含干员 ID、名称、职业、子职业、稀有度和部署位置，适合选择器和列表页一次性加载。

### operators/{operatorId}.json

单个干员的完整战斗与养成报告：

- `character`：基础角色、精英阶段、等级属性帧、天赋、潜能和养成数据。
- `skills`：基础形态、职业形态和召唤物引用的完整技能等级数据。
- `modules`：模组展示数据及战斗阶段数据。
- `patch`：阿米娅等职业形态及其解锁、展示数据；没有职业形态时为 `null`。
- `tokens`：`displayTokenDict` 引用且能在 `character_table.json` 找到的召唤物。
- `missingTokenIds`：GameData 声明引用但当前角色表中不存在的召唤物 ID，禁止静默丢失。

报告不聚合皮肤、语音、档案和基建资料。

### roguelike.json

所有集成战略主题入口原始对象组成的数组。它只作为主题索引，不重复详细难度、藏品、关卡和主题扩展数据。

### roguelike/{topicId}/topic.json

主题入口和难度报告：

- `topic`：完整主题入口对象。
- `difficulties`：`details[topicId].difficulties` 原始主难度数组。
- `customizedDifficulties`：`customizeData[topicId].difficulties` 原始主题机制难度数组。
- `difficultyConditionalRelics`：难度自动给予藏品及 `LEGACY force_add_choice` 支援关联。

### roguelike/{topicId}/relics.json

当前主题全部藏品的裸数组。每件藏品包含合并后的 `item + relic`、关联 `charBuffData`、拼音，以及客户端使用的初始 `layer: 0`、`enable: true`。

### roguelike/{topicId}/stage.json

以关卡 ID 为键的完整关卡字典。每项包含：

- `stage`：主题表中的关卡元数据。
- `level`：主 `levelId` 对应的完整 Level JSON。
- `replacementLevels`：以替换 `levelId` 为键的完整 Level JSON 字典。

### roguelike/{topicId}/topic_ext.json

无损保留未归入其他三个主题文件的数据：

- `details` 排除 `difficulties`、`stages`、`relics`，其中 `items` 仅保留非藏品，`charBuffData` 仅保留未关联藏品的数据。
- `modules` 完整保留。
- `customizeData` 排除已进入 `topic.json` 的 `difficulties`，其余字段完整保留。
- 空字段也保留，确保结构稳定并避免新主题机制被白名单遗漏。

报告 JSON 不写入 `schemaVersion` 或 `sources`。每类报告的数据来源由对应 `src/**/export-*.ts` 文件顶部的中文注释标明。

## 生成报告

### 刷新包内置报告

从 monorepo 根目录执行：

```powershell
pnpm report:gamedata-report
```

该命令刷新：

```text
packages/arknights-gamedata-report/dist/gamedata-report
```

### 通过依赖提供的命令生成

依赖本包后，在调用方自己的工作目录执行：

```powershell
arknights-gamedata-report --out public/gamedata-report
```

指定其他 GameData checkout：

```powershell
arknights-gamedata-report --data ../ArknightsGameData --out public/gamedata-report
```

参数规则：

- `--out` 必填，只接受相对路径，并基于命令实际运行目录 `process.cwd()` 解析。
- `--data` 可使用绝对或相对路径；相对路径同样基于 `process.cwd()`。
- 未传 `--data` 时，依次读取 `ARKNIGHTS_GAME_DATA_PATH`，最后回退到当前 monorepo 根目录的 `ArknightsGameData`。
- 生成器先预检必要 Excel 表和全部被引用 Level 文件，成功后才清理上一份报告。
- 清理范围仅包括输出根目录下的 `operators/`、`operators.json`、`roguelike/` 和 `roguelike.json`，不会删除同目录的其他文件。

schema-docs 的 `docs:generate` 会从其包目录执行：

```text
arknights-gamedata-report --out public/gamedata-report
```

因此文档站通过 `/gamedata-report/**` 访问报告；敌人、公式和乘区等其他生成数据仍位于 `/data/**`。

## 包出口

```ts
import type {
  ExportedOperatorArtifact,
  ExportedOperatorIndex,
  ExportedRelicsReport,
  ExportedRoguelikeTopicReport,
} from "@arkrog/arknights-gamedata-report";

import {
  buildWrappedRelicItems,
  collectDifficultyConditionalRelics,
} from "@arkrog/arknights-gamedata-report";
```

发布内容包括：

- `src/**/*.ts`：类型、纯组装函数和 CLI 源码。
- `dist/gamedata-report/**`：包内置的已生成报告。
- `./gamedata-report/*`：报告文件的 package exports 子路径。
- `./package.json`：供依赖方定位包安装目录。

## 源码组织

```text
src/
├─ config/       CLI 参数与路径解析
├─ operators/    干员索引、详情、关联角色收集与类型
├─ roguelike/    五类肉鸽报告、藏品包装、难度关联与类型
├─ shared/       JSON 读写、清理和公共结果类型
├─ report.ts     预检、清理与全量生成编排
├─ cli.ts        bin 命令入口
└─ index.ts      公共 TypeScript 出口
```

每种目标 JSON 必须继续由独立的 `export-*.ts` 模块负责；不要把不同报告类型重新集中到单个大文件。

## 修改与验证

不要直接修改 `dist/gamedata-report` 中的 JSON。修改 `src`、原始 Schema 或 GameData 后重新生成。

基础验证：

```powershell
pnpm --filter @arkrog/arknights-gamedata-report typecheck
pnpm --filter @arkrog/arknights-gamedata-report test
pnpm report:gamedata-report
```

涉及 schema-docs 消费时继续运行：

```powershell
pnpm --filter @arkrog/arknights-schema-docs docs:generate
pnpm --filter @arkrog/arknights-schema-docs exec tsc --noEmit
pnpm --filter @arkrog/arknights-schema-docs lint
```

涉及 `WrappedRelicItem` 或难度条件藏品契约时，还需运行 knowledge-graph 中对应测试。提交前执行 `git diff --check`，并检查生成数量、目录结构、`missingTokenIds` 和意外的大体积变化。
