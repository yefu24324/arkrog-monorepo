#!/usr/bin/env node

import { buildKnowledgeGraph } from "./build.js";
import { exportGraphRelations, type GraphExportFormat } from "./export-graph.js";
import {
  exportRelicZoneValidation,
  listRelicZoneTopicIds,
} from "./export-relic-zones.js";
import {
  approveCurrentGraphRules,
  formatStaleGraphWarning,
  inspectGraphStatus,
  loadAndValidateLocalRules,
  loadAndValidateTopicSystemInterpretations,
  prepareGraphWorkspace,
} from "./graph-workspace.js";
import { answerQuestion, runCypher, traceItem } from "./query.js";

/** CLI 解析后的参数。 */
interface CliArguments {
  command: string;
  text: string;
  databaseOverride?: string;
  format?: GraphExportFormat;
  outputPath?: string;
}

/** 读取一个带值选项并从参数数组中移除。 */
function takeOption(values: string[], name: string): string | undefined {
  const index = values.indexOf(name);
  if (index < 0) return undefined;
  const value = values[index + 1];
  if (!value || value.startsWith("--")) throw new Error(`${name} 缺少参数值`);
  values.splice(index, 2);
  return value;
}

/** 解析公共数据库选项与通用导出选项。 */
function parseArguments(arguments_: string[]): CliArguments {
  const values = arguments_.filter((argument) => argument !== "--");
  const command = values.shift() ?? "help";
  const databaseOverride = takeOption(values, "--db");
  const formatValue = takeOption(values, "--format");
  const outputPath = takeOption(values, "--out");
  if (formatValue && !["json", "csv", "markdown"].includes(formatValue)) {
    throw new Error(`不支持的导出格式：${formatValue}`);
  }
  return {
    command,
    text: values.join(" ").trim(),
    databaseOverride,
    format: formatValue as GraphExportFormat | undefined,
    outputPath,
  };
}

/** JSON.stringify 对 bigint 的安全转换器。 */
function jsonReplacer(_key: string, value: unknown): unknown {
  return typeof value === "bigint" ? value.toString() : value;
}

/** 查询主体输出完成后再提示 stale，避免提示污染 JSON、CSV 或 Markdown 数据。 */
async function printStaleWarningAtEnd(databaseOverride?: string): Promise<void> {
  const warning = formatStaleGraphWarning(await inspectGraphStatus(databaseOverride));
  if (warning) console.warn(warning);
}

/** 输出命令边界；查询命令永不触发构建。 */
function printHelp(): void {
  console.log(`构建技能命令：
  pnpm graph:prepare
  pnpm graph:validate
  pnpm graph:approve -- "人类确认理由"
  pnpm graph:build

查询技能命令：
  pnpm graph:status
  pnpm graph:ask -- "某个效果为什么进入这个乘区？"
  pnpm graph:trace -- rogue_6_relic_fight_21
  pnpm graph:cypher -- "MATCH (n) RETURN label(n), count(*)"
  pnpm graph:export --format json --out .data/export.json -- "MATCH (n) RETURN n LIMIT 20"
  pnpm graph:export-relic-zones -- all --out packages/arknights-schema-docs/public/data/zone-validation/graph

ask、trace、cypher、export 只读取正式图谱；stale 时继续执行并在最终输出提示，缺失或无效时拒绝执行。`);
}

/** CLI 主入口。 */
async function main(): Promise<void> {
  const arguments_ = parseArguments(process.argv.slice(2));
  if (arguments_.command === "prepare") {
    console.log(JSON.stringify(await prepareGraphWorkspace(arguments_.databaseOverride), null, 2));
    return;
  }
  if (arguments_.command === "validate") {
    const validation = await loadAndValidateLocalRules(arguments_.databaseOverride);
    const topicValidation = await loadAndValidateTopicSystemInterpretations(arguments_.databaseOverride);
    const conflicts = [...validation.conflicts, ...topicValidation.conflicts];
    console.log(JSON.stringify({
      ruleCount: validation.rules.length,
      difficultyRuleCount: validation.difficultyRules.length,
      topicSystemInterpretationCount: topicValidation.interpretations.length,
      conflicts,
    }, null, 2));
    if (conflicts.length > 0) process.exitCode = 1;
    return;
  }
  if (arguments_.command === "approve") {
    console.log(JSON.stringify(
      await approveCurrentGraphRules(arguments_.text, arguments_.databaseOverride),
      null,
      2,
    ));
    return;
  }
  if (arguments_.command === "build") {
    console.log(JSON.stringify(await buildKnowledgeGraph(arguments_.databaseOverride), null, 2));
    return;
  }
  if (arguments_.command === "status") {
    const status = await inspectGraphStatus(arguments_.databaseOverride);
    console.log(JSON.stringify(status, null, 2));
    if (!status.usable) process.exitCode = 1;
    return;
  }
  if (arguments_.command === "ask") {
    if (!arguments_.text) throw new Error("graph:ask 需要自然语言问题");
    console.log(await answerQuestion(arguments_.text, arguments_.databaseOverride));
    await printStaleWarningAtEnd(arguments_.databaseOverride);
    return;
  }
  if (arguments_.command === "trace") {
    if (!arguments_.text) throw new Error("graph:trace 需要对象 ID 或准确名称");
    console.log(await traceItem(arguments_.text, arguments_.databaseOverride));
    await printStaleWarningAtEnd(arguments_.databaseOverride);
    return;
  }
  if (arguments_.command === "cypher") {
    if (!arguments_.text) throw new Error("graph:cypher 需要一条只读 Cypher");
    console.log(JSON.stringify(
      await runCypher(arguments_.text, arguments_.databaseOverride),
      jsonReplacer,
      2,
    ));
    await printStaleWarningAtEnd(arguments_.databaseOverride);
    return;
  }
  if (arguments_.command === "export") {
    if (!arguments_.text) throw new Error("graph:export 需要一条只读 Cypher");
    if (!arguments_.format) throw new Error("graph:export 需要 --format json|csv|markdown");
    if (!arguments_.outputPath) throw new Error("graph:export 需要 --out 仓库内相对路径");
    console.log(JSON.stringify(await exportGraphRelations({
      statement: arguments_.text,
      format: arguments_.format,
      outputPath: arguments_.outputPath,
      databaseOverride: arguments_.databaseOverride,
    }), null, 2));
    await printStaleWarningAtEnd(arguments_.databaseOverride);
    return;
  }
  if (arguments_.command === "export-relic-zones") {
    if (!arguments_.outputPath) {
      throw new Error("graph:export-relic-zones 需要 --out 仓库内相对目录");
    }
    const requested = arguments_.text || "all";
    const topicIds = requested === "all"
      ? await listRelicZoneTopicIds()
      : [requested];
    // Windows 下逐主题查询，避免 Kuzu 原生驱动同时打开多个数据库句柄。
    const results = [];
    for (const topicId of topicIds) {
      results.push(await exportRelicZoneValidation(
        topicId,
        arguments_.outputPath,
        arguments_.databaseOverride,
      ));
    }
    console.log(JSON.stringify(results.length === 1 ? results[0] : results, null, 2));
    await printStaleWarningAtEnd(arguments_.databaseOverride);
    return;
  }
  printHelp();
}

await main();
