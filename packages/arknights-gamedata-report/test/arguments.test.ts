/** 报告 CLI 路径契约测试。 */

import path from "node:path";
import { describe, expect, it } from "vitest";

import { parseGameDataReportArguments } from "../src/config/arguments.ts";
import { resolveGameDataReportPaths } from "../src/config/paths.ts";

describe("report:gamedata-report CLI", () => {
  it("要求显式提供输出相对目录", () => {
    expect(() => parseGameDataReportArguments([])).toThrow("必须通过 --out");
    expect(parseGameDataReportArguments(["--out", "dist/gamedata-report"])).toMatchObject({
      output: "dist/gamedata-report",
      help: false,
    });
  });

  it("按实际命令目录解析相对输入与输出", () => {
    const workingDirectory = path.resolve("A:/workspace/example-package");
    const paths = resolveGameDataReportPaths(
      parseGameDataReportArguments(["--data", "../ArknightsGameData", "--out", "public/data"]),
      workingDirectory,
    );
    expect(paths.dataRoot).toBe(path.resolve(workingDirectory, "../ArknightsGameData"));
    expect(paths.outputRoot).toBe(path.resolve(workingDirectory, "public/data"));
  });

  it("拒绝绝对输出路径", () => {
    const arguments_ = parseGameDataReportArguments(["--out", "A:/absolute/report"]);
    expect(() => resolveGameDataReportPaths(arguments_, process.cwd())).toThrow("只接受相对路径");
  });
});
