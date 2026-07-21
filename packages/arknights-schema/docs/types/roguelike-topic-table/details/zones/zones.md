# zones

本页记录 JSON 逻辑模块 `details/zones` 中的 1 个强关联类型及其 Schema。

## ZoneValue

`ZoneValue` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `ZoneValueSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/zones/zones.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/zones/zones.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `id` | `string` | 是 |
| `name` | `string` | 是 |
| `clockPerformance` | `null \| string` | 是 |
| `displayTime` | `null \| string` | 是 |
| `description` | `string` | 是 |
| `buffDescription` | `null \| string` | 是 |
| `endingDescription` | `string` | 是 |
| `backgroundId` | `string` | 是 |
| `zoneIconId` | `string` | 是 |
| `isHiddenZone` | `boolean` | 是 |
| `bgmSignal` | `BgmSignal` | 是 |
| `bgmSignalWithLowSan` | `null \| string` | 是 |
| `transitionEffectId` | `null \| string` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->
