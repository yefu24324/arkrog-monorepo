# band-ref

本页记录 JSON 逻辑模块 `details/band-ref` 中的 1 个强关联类型及其 Schema。

## BandRef

`BandRef` 来源于 `roguelike_topic_table.json` 的完整主题样本；对应 Zod 定义为 `BandRefSchema`。

- TypeScript：`src/types/roguelike-topic-table/details/band-ref/band-ref.types.ts`
- Zod Schema：`src/schemas/roguelike-topic-table/details/band-ref/band-ref.schemas.ts`
- 数据源：`zh_CN/gamedata/excel/roguelike_topic_table.json`

### 字段

| 字段 | TypeScript 类型 | 必需 |
|---|---|---|
| `itemId` | `string` | 是 |
| `bandLevel` | `number` | 是 |
| `normalBandId` | `string` | 是 |

### 人工说明

<!-- MANUAL:START -->

待补充。

<!-- MANUAL:END -->
