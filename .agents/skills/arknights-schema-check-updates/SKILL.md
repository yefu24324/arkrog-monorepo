---
name: arknights-schema-check-updates
description: 检查 ArknightsGameData 游戏更新后 @arkrog/arknights-schema 已覆盖数据的 TypeScript 类型与 Zod Schema 是否发生结构变化，并输出发生类型变化、仅内容变化、未覆盖或校验失败的 JSON 文件清单。用户要求“校验游戏更新”“检查类型变化”“列出变化的 JSON”“更新 GameData 后检查 Schema”或需要只读更新审计时使用。
---

# 校验游戏数据更新

对游戏数据执行只读更新审计。区分“文件内容改变”和“数据结构改变”，不要生成或覆盖类型。

## 约束

- 从 monorepo 根目录执行命令。
- 不运行 `schema:bootstrap` 或 `schema:generate`，不修改 Schema、类型、文档或数据子模块。
- 保留工作区现有改动；不要更新、切换或重置 `ArknightsGameData` 子模块。
- `schema:inspect` 使用现有 Zod 校验全部已覆盖 JSON；非零表示发现 Schema 不一致或工具故障，必须根据输出区分。
- 仅把有证据的文件列为“类型变化”；普通文本、数值或记录增删属于“仅内容变化”。

## 工作流

### 1. 确认基线与覆盖范围

读取以下文件：

- `packages/arknights-schema/package.json`
- `packages/arknights-schema/tools/`
- `packages/arknights-schema/src/schemas/`
- `packages/arknights-schema/TODO.md`

如果用户提供旧版 GameData commit、目录或变更清单，将它作为比较基线。没有基线时，使用已生成的 Schema 作为结构基线，并明确说明无法完整列出仅内容变化的文件。

如有两个 Git revision，可用以下只读命令获取内容变化清单：

```powershell
git -C ArknightsGameData diff --name-only <旧版本>..<新版本> -- "*.json"
```

不要擅自猜测 revision。

### 2. 执行已覆盖数据的结构检查

```powershell
pnpm schema:inspect
pnpm schema:validate
```

`schema:inspect` 会直接输出发生类型变化的 JSON 文件，并为每个 Zod issue 给出 JSON Pointer、负责的 `XxxSchema`、对应 TypeScript 类型及源码路径。以该报告作为“类型发生变化”的主要证据。

对检查失败项归类：

- 新增或删除字段
- 字段类型变化
- 必需、可选或 `null` 规则变化
- 新增字符串枚举值
- 数组元素或联合分支变化
- 固定对象与 ID 字典边界变化
- 纯数据校验失败但静态结构未变化

### 3. 处理未覆盖 JSON

把 GameData 内容变化清单与已覆盖源文件、`TODO.md` 对照：

- 已覆盖且结构检查变化：列入“类型发生变化”。
- 已覆盖且结构检查无变化：列入“仅内容变化”。
- 未覆盖：列入“尚无 Schema，无法判断类型变化”。
- 未发生内容变化：不要列入报告。

需要深入解释某个文件时，继续使用 `$arknights-schema-analyze-json`，并把 `schema:inspect` 输出的 JSON 路径和具体类型传给它。

## 输出格式

始终输出以下四组清单，即使某组为空：

```markdown
## 类型发生变化
| JSON 文件 | 变化类别 | 证据 | 建议动作 |

## 仅内容变化
| JSON 文件 | 依据 |

## 校验失败
| JSON 文件 | JSON Pointer | 错误摘要 |

## 尚未覆盖
| JSON 文件 | TODO 状态 |
```

最后给出：

- 使用的基线与当前版本
- 已检查、类型变化、仅内容变化、失败和未覆盖的文件数量
- 是否建议运行分析技能或生成技能
- 实际执行过的命令及退出结果

如果没有可靠基线，明确写出限制，不要输出伪造的完整变化清单。
