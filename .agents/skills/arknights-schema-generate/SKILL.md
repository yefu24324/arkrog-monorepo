---
name: arknights-schema-generate
description: 为用户明确指定的 ArknightsGameData JSON 文件创建或更新 @arkrog/arknights-schema。尚未覆盖的数据表使用脚本进行一次性全量 Bootstrap；已有 Schema 的游戏更新必须依据 analyze-json 报告由大模型局部修改具体 TypeScript 类型、Zod Schema、中文源码注释与测试，禁止重新全量生成。用户要求“生成 Schema”“为 JSON 添加类型”“根据变化指南更新类型”时使用。目标 JSON 文件为必选输入，类型变化指南为可选输入。
---

# 为指定 JSON 生成 Schema

首次基于完整真实数据初始化可维护类型；之后根据具体差异报告局部维护。接受可选变化指南，但必须获得明确的目标 JSON 文件。

## 输入契约

- 必选：一个或多个目标 `.json` 文件路径。
- 可选：由 `$arknights-schema-analyze-json` 产出的变化指南。
- 用户未提供 JSON 文件时，直接询问路径并停止。变化指南缺失时不要阻塞，先运行 `schema:analyze -- --file <路径>` 并按分析技能补全报告。
- 只处理用户指定的文件；不要顺带覆盖其他 TODO 数据表。

## 生成前检查

1. 阅读仓库根 `AGENTS.md`。
2. 检查工作区状态并保留用户已有改动。
3. 阅读 `packages/arknights-schema/README.md`、现有生成工具和相邻数据表实现。
4. 确认目标文件存在、数据版本、根结构和 Schema 覆盖状态。
5. 有变化指南时逐项以真实数据复核；指南不是替代全量校验的依据。

## 建模规则

- 同一 JSON 逻辑路径下的强关联 interface、type 与字符串字面量联合聚合到一个 `.types.ts`，对应 Zod 聚合到一个 `.schemas.ts`。
- 单模块通常控制在 8～12 个导出定义以内；更大的目录按 JSON 子结构或语义继续拆分。
- `types` 与 `schemas` 按原 JSON 路径镜像组织。
- 被多个 JSON 路径复用的定义放入该数据表的 `shared` 目录。
- 显式维护 TypeScript 类型与 Zod Schema，并生成双向类型一致性断言。
- 字符串有限集合使用字面量联合与 `z.enum()`，不要使用 TypeScript `enum`。
- 固定配置对象使用严格对象；动态 ID 键使用 `Record<string, T>` 与 `z.record()`。
- 区分缺失、`undefined` 与 `null`。只有真实记录集合中确实缺失的字段才标为 optional。
- 空对象使用严格空记录；空数组在没有其他样本时使用 `never[]`，并标记待确认，确保未来首次出现数据时能触发变化。
- 禁止用 `any`、宽泛 `unknown`、宽松对象或 catch-all 绕过完备性校验。
- 为类型、Schema 和字段添加中文语义注释及 Zod `.describe()`。无法确认的含义明确写“待确认”。
- 把人工语义元数据直接维护在 TypeScript JSDoc、字段注释和 Zod `.describe()` 中。
- 只维护包级公共出口，不为每个小目录创建 `index.ts`。

## 工作流分流

先检查目标 JSON 是否已经存在根 TypeScript 类型与根 Zod Schema。

### 尚未覆盖：首次 Bootstrap

1. 全量扫描目标 JSON 的所有逻辑记录，不只读取第一条。
2. 配置源路径、根类型、ID 字典、枚举候选、目录归属和初始语义。
3. 使用脚本一次性生成完整类型、Schema、包级出口和类型一致性测试。
4. Bootstrap 完成后立即把生成结果视为人工维护源码；同一数据表不得再次全量生成。
5. 当前仓库入口为 `pnpm schema:bootstrap`；如果该脚本尚不支持目标 JSON，先扩展 Bootstrap 配置，而不是复制现有类型作为最终结果。

### 已经覆盖：大模型局部维护

1. 禁止运行 `schema:bootstrap` 或 `schema:generate`。
2. 运行 `pnpm schema:analyze -- --file <路径>`，读取每条变化的 JSON Pointer、`XxxSchema`、显式类型和源码路径。
3. 只打开报告涉及的类型、Schema、依赖类型和测试。
4. 根据完整真实数据确认局部变化边界；不要因为单条错误扩大修改范围。
5. 直接编辑现有源码，保留所有人工注释，并同步更新 TypeScript 类型、Zod、`.describe()` 和类型断言。
6. 再次运行分析；只有目标 JSON 报告无不一致时才算完成。

## Bootstrap 基础设施要求

1. 扩展可复用 Bootstrap 基础设施；不要简单复制大型单表生成器形成长期分叉。
2. 为目标 JSON 建立源路径、根类型、字典路径和语义元数据配置。
3. 生成分层逻辑模块、包级出口和类型一致性测试。
4. 新增或更新目标表的全量 Zod 校验入口。
5. 更新分析注册表与包级聚合命令，使 `data:analyze`、`data:inspect`、`data:validate` 覆盖所有已支持表。
6. 保证 Bootstrap 检测到已有根类型时拒绝覆盖，不提供常规更新用的 force 选项。
7. 从 `packages/arknights-schema/TODO.md` 移除已经完整覆盖的目标文件；未完整覆盖时保留并注明状态。
8. 保持 `@arkrog/arknights-schema` 为内部私有包，不添加发布步骤。

## 必须验证

局部维护或 Bootstrap 完成后依次执行：

```powershell
pnpm --filter @arkrog/arknights-schema typecheck
pnpm schema:analyze -- --file <目标 JSON>
pnpm schema:validate
pnpm --filter @arkrog/arknights-schema test
pnpm --filter @arkrog/arknights-schema build
pnpm schema:inspect
```

此外确认：

- 目标 JSON 的全部真实数据通过对应根 Schema。
- 显式类型与 `z.infer` 完全一致。
- `schema:analyze` 对目标 JSON 输出“当前真实数据与现有 Zod Schema 一致”。
- 每个导出定义和字段都有中文源码注释，Zod Schema 带有对应 `.describe()`。
- 新增未知字段会被严格对象拒绝。
- 已覆盖表的局部维护没有改动无关类型或覆盖人工注释。

## 交付报告

列出：

- 已处理的必选 JSON 文件
- 使用或自行生成的变化指南，以及报告定位的具体类型
- 本次属于首次 Bootstrap 还是局部维护
- 新增、修改、删除的类型与 Schema 数量；局部维护时列出实际涉及文件
- 目录规划及 `shared` 决策
- 待确认的字段语义或空集合边界
- 执行过的验证及结果
- 仍保留在 TODO 中的原因（如有）
