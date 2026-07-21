# init

本页记录 JSON 逻辑模块 `details/init` 中的 1 个强关联类型及其 Schema。

## Init

`Init` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `InitSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/init/init.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/init/init.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `modeId` | `Mode` | 是 |
| `modeGrade` | `number` | 是 |
| `predefinedId` | `null \| string` | 是 |
| `predefinedStyle` | `StyleId \| null` | 是 |
| `initialBandRelic` | `string[]` | 是 |
| `initialRecruitGroup` | `IconId[] \| null` | 是 |
| `initialHp` | `number` | 是 |
| `initialPopulation` | `number` | 是 |
| `initialGold` | `number` | 是 |
| `initialSquadCapacity` | `number` | 是 |
| `initialShield` | `number` | 是 |
| `initialMaxHp` | `number` | 是 |
| `initialKey` | `number` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->
