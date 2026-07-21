# battle-loading-tips

本页记录 JSON 逻辑模块 `details/battle-loading-tips` 中的 1 个强关联类型及其 Schema。

## BattleLoadingTip

`BattleLoadingTip` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `BattleLoadingTipSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/battle-loading-tips/battle-loading-tips.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/battle-loading-tips/battle-loading-tips.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `tip` | `string` | 是 |
| `weight` | `number` | 是 |
| `category` | `Category` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->
