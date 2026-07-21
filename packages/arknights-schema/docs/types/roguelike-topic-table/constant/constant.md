# constant

本页记录 JSON 逻辑模块 `constant` 中的 1 个强关联类型及其 Schema。

## Constant

`Constant` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `ConstantSchema`。

- TypeScript：`src/types/roguelike-topic-table/constant/constant.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/constant/constant.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `milestoneTokenRatio` | `number` | 是 |
| `outerBuffTokenRatio` | `number` | 是 |
| `relicTokenRatio` | `number` | 是 |
| `rogueSystemUnlockStage` | `string` | 是 |
| `ordiModeReOpenCoolDown` | `number` | 是 |
| `monthModeReOpenCoolDown` | `number` | 是 |
| `monthlyTaskUncompletedTime` | `number` | 是 |
| `monthlyTaskManualRefreshLimit` | `number` | 是 |
| `monthlyTeamUncompletedTime` | `number` | 是 |
| `bpPurchaseSystemUnlockTime` | `number` | 是 |
| `predefinedChars` | `{ [key: string]: PredefinedChar }` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->
