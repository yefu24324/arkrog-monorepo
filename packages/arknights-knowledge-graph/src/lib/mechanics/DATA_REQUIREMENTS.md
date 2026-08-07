# Mechanics 数据要求

所有公开入口只消费 `@arkrog/arknights-gamedata-report` 公开模型。调用方必须传入报告数据；mechanics 不自行读盘或查询 Kuzu。

## 藏品

正常运行必须提供 `WrappedRelicItem`：稳定 ID、名称、`relic.buffs`、关联 `charBuffs`、当前层数和启用状态。每条 buff 必须保留外层 `key` 以及黑板的 `key/value/valueStr`。

运行时条件可选传入敌人 ID/等级/tags、干员职业/子职业/部署位、关卡类型和时间。某条效果声明了条件却缺少判断数据时，该效果不生效。

## 难度

必须提供 `ExportedRoguelikeTopicReport`、所选 `DetailDifficulty`、主题 ID。`difficulties` 的 `modeDifficulty`、`grade` 和完整 `ruleDesc` 用于累计选择及版本护栏。条件藏品需要 report 保留完整来源链，并由用户显式传入启用关联 ID。

## 关卡

当前入口接收 `ExportedRogueStageReportItem`，其中包含关卡元数据、主 Level JSON 和替换 Level JSON。

TODO：report 还需把以下原始对象整理成稳定、具名的数据模型后才能正常生成公式程序：关卡全局 buff、敌人波次与等级替换、地图装置及其黑板、当前采用的 replacement、紧急/险路恶敌等运行时状态。缺少这些字段时 `analyzeStage` 返回 `unknown`，`applyStage` 不写入。

## 主题特殊系统

`rogue_4`、`rogue_5` 入口接收通用 `ExportedRoguelikeTopicExtReport`。`rogue_6` 接收专用 `ExportedRogue6TopicExtReport`，只包含实托邦、乌托邦和概念体：实托邦保存10类三阶段原始效果，乌托邦保存 portal 场景、选项及完整战斗 Stage/Level，概念体保存 Item、触发效果与档案关联。

TODO：report 仍需分别整理 `rogue_4` 萨卡兹年代/年代印痕、`rogue_5` 界园通宝/烛火/天象的稳定战斗关联。`rogue_6` 当前客户端数据只为实托邦和概念体提供效果文案与参数字段，没有额外黑板/模板引用；mechanics 必须保持原始证据边界，缺少结构化战斗语义时返回 `unknown`。

## 通用约束

- 每条原始效果必须有可稳定重建的 `effectId`。
- 数值必须保留原始编码，规范化由对应生成程序负责。
- report 类型是数据契约唯一来源，mechanics 不复制镜像模型。
- 证据不足或 FormulaBook 没有语义匹配的可写乘区时保持 `unknown`。
