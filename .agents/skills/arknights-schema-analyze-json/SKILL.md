---
name: arknights-schema-analyze-json
description: 对用户指定的 ArknightsGameData JSON 文件执行全量结构分析，并比较 @arkrog/arknights-schema 中的现有 TypeScript 类型和 Zod Schema，定位真实数据在字段、可空性、可选性、枚举、数组、联合类型及 ID 字典方面的格式差异。用户要求“分析 JSON”“比较真实数据与 Schema”“定位类型变化点”“生成变化指南”时使用；必须有明确 JSON 文件路径。
---

# 分析指定 JSON 与 Schema 差异

读取完整数据而不是抽取第一条记录，输出可直接交给 Schema 生成流程使用的变化指南。此技能只分析，不修改代码。

## 输入要求

- 必须获得一个或多个明确的 `.json` 文件路径。
- 相对路径默认以 `ArknightsGameData` 为根，例如 `zh_CN/gamedata/excel/item_table.json`。
- 用户未指定文件时，直接询问目标 JSON 路径并停止；不要自行选择数据表。
- 可选接收现有校验日志、旧版 JSON、旧版 commit 或变化指南草稿。

## 工作流

### 1. 定位数据与 Schema

确认文件存在且是合法 JSON。然后检查：

- `packages/arknights-schema/src/schemas/`
- `packages/arknights-schema/src/types/`
- `packages/arknights-schema/tools/`
- `packages/arknights-schema/TODO.md`

建立目标 JSON 到根 Schema、根类型、生成工具和校验工具的映射。不存在映射时标记为“尚未覆盖”，但仍完成真实数据结构分析。

### 2. 全量分析真实数据

遍历完整 JSON，并在每个逻辑路径汇总：

- 实际出现的 primitive 类型
- 字段出现次数、缺失次数和 `null` 次数
- 数组元素的全部结构分支，包括空数组
- 对象键及不同记录间的字段差异
- 字符串有限值集合与枚举候选
- 数字是否存在整数、小数、负数或时间戳特征
- 可能的 ID 字典与固定配置对象

不要因为单个样本缺字段就立即判为可选。先确认它是否属于同一逻辑记录集合。不要从空对象或空数组推断未知的宽泛类型；将其列为待确认边界。

### 3. 对照现有 Schema

若存在根 Schema，先运行指定文件分析命令：

```powershell
pnpm schema:analyze -- --file <ArknightsGameData 内相对路径>
```

该命令会输出 JSON Pointer、Zod issue、真实值摘要、不一致的 `XxxSchema`、显式 TypeScript 类型及两者源码路径。把这些具体类型作为后续源码检查入口，不要重新运行全量生成器来推断差异。

逐项对照源码与 Zod issue，至少识别：

- 未知字段与删除字段
- `string`、`number`、`boolean`、对象、数组之间的变化
- required、optional 与 nullable 差异
- 字符串字面量联合新增或失效值
- 数组元素或判别联合的新分支
- `Record<string, T>` 被错误建模为固定属性，或反向误判
- Zod 与显式 TypeScript 类型不一致

在命令报告基础上继续检查同一逻辑记录集合，补充出现次数、关联分支和代表性值。敏感或超长值只展示足以证明结论的片段。

### 4. 输出变化指南

使用以下结构；该格式可直接传给 `$arknights-schema-generate`：

```markdown
# <JSON 相对路径> 类型变化指南

## 分析范围
- 数据版本：
- 根 Schema：
- 扫描记录数：

## 已确认变化
| JSON Pointer | 当前 Schema | 真实数据 | 出现次数 | 建议类型 |

## 字典与固定对象决策
| JSON Pointer | 判断 | 依据 |

## 枚举变化
| JSON Pointer | 现有值 | 新值 | 建议 |

## 待确认
| JSON Pointer | 无法确认原因 | 暂定处理 |

## 建议生成范围
- 需要新增、修改或删除的类型：
- 需要更新的 Schema：
- 需要补充的中文语义：
```

无差异时明确写“当前真实数据与 Schema 一致”，并列出执行过的验证。无法确认的内容保留“待确认”，不要用 `unknown` 或 `any` 掩盖问题。

不要修改类型或 Schema；将报告交给 `$arknights-schema-generate` 执行局部维护。
