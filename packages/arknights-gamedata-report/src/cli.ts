#!/usr/bin/env node

/** @arkrog/arknights-gamedata-report 命令行入口。 */

import { parseGameDataReportArguments } from "#config/arguments";
import { generateGameDataReport } from "#report";

/** 打印自定义导出与内置报告刷新的命令说明。 */
function printHelp(): void {
  console.log(`用法：
  arknights-gamedata-report --out ./report
  arknights-gamedata-report --data ../ArknightsGameData --out ./report

选项：
  --data <目录>  ArknightsGameData 根目录；相对路径基于当前命令目录
  --out <目录>   必填的报告输出相对目录；不接受绝对路径
  -h, --help     显示帮助

未传 --data 时依次使用 ARKNIGHTS_GAME_DATA_PATH 和当前 monorepo 的 ArknightsGameData。
包内置报告通过 pnpm report:gamedata-report 刷新到 dist/gamedata-report。`);
}

/** 执行 CLI，并让错误自然产生非零退出码。 */
async function main(): Promise<void> {
  const arguments_ = parseGameDataReportArguments(process.argv.slice(2));
  if (arguments_.help) {
    printHelp();
    return;
  }
  console.log(JSON.stringify(await generateGameDataReport(arguments_), null, 2));
}

await main();
