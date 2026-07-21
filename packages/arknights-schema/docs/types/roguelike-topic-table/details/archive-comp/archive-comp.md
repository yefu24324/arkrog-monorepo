# archive-comp

本页记录 JSON 逻辑模块 `details/archive-comp` 中的 1 个强关联类型及其 Schema。

## ArchiveComp

`ArchiveComp` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `ArchiveCompSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/archive-comp/archive-comp.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/archive-comp/archive-comp.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `relic` | `ArchiveCompRelic` | 是 |
| `capsule` | `ArchiveCompCapsule \| null` | 是 |
| `trap` | `ArchiveCompTrap` | 是 |
| `chat` | `ArchiveCompChat` | 是 |
| `endbook` | `ArchiveCompEndbook` | 是 |
| `buff` | `ArchiveCompBuff` | 是 |
| `totem` | `ArchiveCompTotem \| null` | 是 |
| `chaos` | `ArchiveCompChaos \| null` | 是 |
| `fragment` | `ArchiveCompFragment \| null` | 是 |
| `disaster` | `ArchiveCompDisaster \| null` | 是 |
| `wrath` | `ArchiveCompWrath \| null` | 是 |
| `copper` | `ArchiveCompCopper \| null` | 是 |
| `scrap` | `ArchiveCompScrap \| null` | 是 |
| `weather` | `ArchiveCompWeather \| null` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->
