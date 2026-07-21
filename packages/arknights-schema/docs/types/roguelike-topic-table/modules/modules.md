# modules

本页记录 JSON 逻辑模块 `modules` 中的 1 个强关联类型及其 Schema。

## Module

`Module` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `ModuleSchema`。

- TypeScript：`src/types/roguelike-topic-table/modules/modules.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/modules/modules.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `moduleTypes` | `string[]` | 是 |
| `sanCheck` | `SanCheck \| null` | 是 |
| `dice` | `Dice \| null` | 是 |
| `chaos` | `ModuleChaos \| null` | 是 |
| `totemBuff` | `TotemBuff \| null` | 是 |
| `vision` | `Vision \| null` | 是 |
| `fragment` | `ModuleFragment \| null` | 是 |
| `disaster` | `ModuleDisaster \| null` | 是 |
| `nodeUpgrade` | `NodeUpgrade \| null` | 是 |
| `copper` | `ModuleCopper \| null` | 是 |
| `wrath` | `ModuleWrath \| null` | 是 |
| `candle` | `Candle \| null` | 是 |
| `sky` | `Sky \| null` | 是 |
| `weather` | `ModuleWeather \| null` | 是 |
| `gridZone` | `GridZone \| null` | 是 |
| `scrap` | `ModuleScrap \| null` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->
