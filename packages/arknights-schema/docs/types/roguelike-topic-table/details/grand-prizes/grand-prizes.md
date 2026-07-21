# grand-prizes

本页记录 JSON 逻辑模块 `details/grand-prizes` 中的 1 个强关联类型及其 Schema。

## GrandPrize

`GrandPrize` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `GrandPrizeSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/grand-prizes/grand-prizes.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/grand-prizes/grand-prizes.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `grandPrizeDisplayId` | `string` | 是 |
| `sortId` | `number` | 是 |
| `displayUnlockYear` | `number` | 是 |
| `displayUnlockMonth` | `number` | 是 |
| `acquireTitle` | `string` | 是 |
| `purchaseTitle` | `string` | 是 |
| `displayName` | `string` | 是 |
| `displayDiscription` | `string` | 是 |
| `bpLevelId` | `string` | 是 |
| `itemBundle` | `Reward \| null` | 是 |
| `detailAnnounceTime` | `null \| string` | 是 |
| `picIdAftrerUnlock` | `null \| string` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->
