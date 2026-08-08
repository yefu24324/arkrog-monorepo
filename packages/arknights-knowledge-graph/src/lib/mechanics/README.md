# Mechanics

本目录把 `@arkrog/arknights-gamedata-report` 整理的数据转换为 FormulaBook 公式项。运行时不读取原始 ArknightsGameData、不连接 Kuzu、不调用 AI。

## 稳定入口

- `analyze-relic.ts`：单个或批量藏品的静态分析与场景应用。
- `analyze-difficulty.ts`：所选难度及累计等级效果。
- `analyze-stage.ts`：关卡效果；等待 report 完成稳定数据整理。
- `analyze-rogue_4-topic-spec.ts`：萨卡兹年代和年代印痕。
- `analyze-rogue_5-topic-spec.ts`：界园通宝、烛火和天象。
- `analyze-rogue_6-topic-spec.ts`：黑流树海实托邦、乌托邦和概念体。

主题特殊系统不共享入口。公开入口只负责查找、组合和调用程序，不包含具体机制逻辑。

## 生成程序

`difficulty-programs/program.ts` 是六主题 NORMAL 难度的唯一程序文件：普通词条来自已构建图谱，逐层倍率、低难度减益和服务器明确特例集中写死，不使用注册表或兼容层。其他 `*-programs/` 仍按“GameData 机制类型与参数模式”复用程序，不在运行时扫描目录。生成程序标记为 `AI_GENERATED`；说明 Markdown 只是代码索引，不是证据。

未注册机制返回 `unknown`，不会回退到 `engine-rules` 猜测乘区。奖励、资源和商店等明确不进入 FormulaBook 的效果返回 `not_applicable`。

## 两种调用方式

静态入口忽略条件，返回逐效果的 `supported`、`unknown` 或 `not_applicable`。`supported` 包含 `effectId`、真实可写乘区、FormulaItem 和自然语言条件。

场景入口原地更新调用方传入的 FormulaBook，只返回实际写入的 `{ zoneId, item }[]`。条件不满足、数据不足或未知时不写入也不返回原因。FormulaBook 实例的创建、复用和防重复由调用方管理。

## 证据优先级

1. `packages/arknights-knowledge-graph/mechanics-knowledge/` 中人类自然语言知识。
2. 最新 gamedata-report、Kuzu 图谱、buff_template Action 与 schema 事实。
3. AI 生成 Markdown 仅供参考，无裁决权。

人类知识存在歧义时必须要求人类补充，不能猜测。当前人类知识目录由 AI 初始化后永久只读。唯一快照位于 `human-knowledge-snapshot/`，只在成功重新生成并通过全部验证后更新。

完整输入要求见 `DATA_REQUIREMENTS.md`，未完成项见 `TODO.md`。
