/** CLI 解析后的稳定参数。 */
export interface GameDataReportArguments {
  /** 可选的 ArknightsGameData 根目录。 */
  dataOverride?: string;
  /** 必填的报告输出相对目录。 */
  output: string;
  /** 是否只打印帮助。 */
  help: boolean;
}

/** 解析报告 CLI 参数，并拒绝会造成输出位置歧义的形式。 */
export function parseGameDataReportArguments(arguments_: string[]): GameDataReportArguments {
  const values = arguments_.filter((argument) => argument !== "--");
  let dataOverride: string | undefined;
  let output: string | undefined;
  let help = false;

  for (let index = 0; index < values.length; index += 1) {
    const argument = values[index]!;
    if (argument === "--help" || argument === "-h") {
      help = true;
      continue;
    }
    if (argument === "--data" || argument === "--out") {
      const value = values[index + 1];
      if (!value) throw new Error(`${argument} 缺少目录参数。`);
      if (argument === "--data") dataOverride = value;
      else output = value;
      index += 1;
      continue;
    }
    if (argument.startsWith("--data=")) {
      dataOverride = argument.slice("--data=".length);
      if (!dataOverride) throw new Error("--data 缺少目录参数。");
      continue;
    }
    if (argument.startsWith("--out=")) {
      output = argument.slice("--out=".length);
      if (!output) throw new Error("--out 缺少目录参数。");
      continue;
    }
    throw new Error(`未知参数：${argument}`);
  }

  if (help) return { dataOverride, output: output ?? ".", help };
  if (!output) throw new Error("必须通过 --out 指定报告输出相对目录。");
  return { dataOverride, output, help };
}
