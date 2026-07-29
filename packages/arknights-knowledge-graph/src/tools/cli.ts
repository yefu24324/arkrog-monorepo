#!/usr/bin/env node

import { access } from "node:fs/promises";

import { buildKnowledgeGraph } from "./build.js";
import { exportRelicZoneJson, listRelicZoneTopicIds } from "./export-json.js";
import { resolveRepositoryPaths } from "./paths.js";
import { answerQuestion, runCypher, traceItem } from "./query.js";

/** CLI 解析后的命令行参数。 */
interface CliArguments {
  /** 子命令。 */
  command: string;
  /** 子命令剩余文本。 */
  text: string;
  /** 可选数据库仓库相对路径。 */
  databaseOverride?: string;
}

/** 解析 `--db`，其余参数保持为自然语言或 Cypher 文本。 */
function parseArguments(arguments_: string[]): CliArguments {
  const values = arguments_.filter((argument) => argument !== "--");
  const command = values.shift() ?? "help";
  const databaseIndex = values.indexOf("--db");
  let databaseOverride: string | undefined;
  if (databaseIndex >= 0) {
    databaseOverride = values[databaseIndex + 1];
    values.splice(databaseIndex, 2);
  }
  return { command, text: values.join(" ").trim(), databaseOverride };
}

/** 查询命令首次运行时自动建图，保持最短可用路径。 */
async function ensureDatabase(databaseOverride?: string): Promise<void> {
  const paths = resolveRepositoryPaths(databaseOverride);
  try {
    await access(paths.database);
  } catch {
    const statistics = await buildKnowledgeGraph(databaseOverride);
    console.error(`Kuzu 图谱不存在，已自动构建：${JSON.stringify(statistics)}`);
  }
}

/** JSON.stringify 对 bigint 的安全转换器。 */
function jsonReplacer(_key: string, value: unknown): unknown {
  return typeof value === "bigint" ? value.toString() : value;
}

/** 输出简短帮助。 */
function printHelp(): void {
  console.log(`用法：
  pnpm graph:build
  pnpm graph:ask -- "item.effect.attack_bonus 最终进入哪个伤害乘区？"
  pnpm graph:trace -- rogue_5_relic_fight_11
  pnpm graph:export -- rogue_6
  pnpm graph:export -- all
  pnpm graph:cypher -- "MATCH (n) RETURN label(n), count(*)"

藏品→公式簿程序在 src/lib/mechanics/relic-programs.ts（route + apply），不生成按藏品 ID 总表。
  export 同时写出 Kuzu graph 预测与纯 TS formula 公式项写入结果。
ask/trace/cypher/build 可加 --db .data/custom.kuzu。`);
}

/** CLI 主入口。 */
async function main(): Promise<void> {
  const arguments_ = parseArguments(process.argv.slice(2));
  if (arguments_.command === "build") {
    console.log(JSON.stringify(await buildKnowledgeGraph(arguments_.databaseOverride), null, 2));
    return;
  }
  if (arguments_.command === "export") {
    await ensureDatabase(arguments_.databaseOverride);
    const requested = arguments_.text || "rogue_6";
    const topicIds = requested === "all" ? await listRelicZoneTopicIds() : [requested];
    // 逐主题执行可避免 Windows Kuzu 原生驱动同时打开多个数据库句柄。
    const results = [];
    for (const topicId of topicIds) {
      results.push(await exportRelicZoneJson(topicId, arguments_.databaseOverride));
    }
    console.log(JSON.stringify(results.length === 1 ? results[0] : results, null, 2));
    return;
  }
  if (arguments_.command === "codegen" || arguments_.command === "codegen:relic-zones") {
    console.error(
      "已取消按藏品 ID 生成总表。请使用 @arkrog/arknights-knowledge-graph 的 routeRelicBuffToZones / applyRelicBuffsToFormulaContext。",
    );
    process.exitCode = 1;
    return;
  }

  if (["ask", "trace", "cypher"].includes(arguments_.command)) {
    await ensureDatabase(arguments_.databaseOverride);
  }
  if (arguments_.command === "ask") {
    console.log(await answerQuestion(arguments_.text, arguments_.databaseOverride));
    return;
  }
  if (arguments_.command === "trace") {
    console.log(await traceItem(arguments_.text, arguments_.databaseOverride));
    return;
  }
  if (arguments_.command === "cypher") {
    console.log(
      JSON.stringify(
        await runCypher(arguments_.text, arguments_.databaseOverride),
        jsonReplacer,
        2,
      ),
    );
    return;
  }
  printHelp();
}

await main();
