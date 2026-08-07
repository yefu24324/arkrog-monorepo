import { describe, expect, it } from "vitest";

import {
  formatStaleGraphWarning,
  isGraphStatusUsable,
  type GraphStatus,
} from "../src/tools/graph-workspace.js";

/** 构造只关注状态提示的最小审计结果。 */
function graphStatus(state: GraphStatus["state"]): GraphStatus {
  return {
    usable: state === "valid" || state === "stale",
    state,
    buildId: "build-test",
    mismatches: state === "stale" ? ["输入摘要变化：example.json"] : [],
    manifestPath: ".data/arknights-knowledge-graph/manifest.json",
  };
}

describe("图谱 stale 最终提示", () => {
  it("允许只读使用 stale 图谱", () => {
    expect(isGraphStatusUsable("stale")).toBe(true);
    expect(isGraphStatusUsable("valid")).toBe(true);
    expect(isGraphStatusUsable("missing")).toBe(false);
    expect(isGraphStatusUsable("invalid")).toBe(false);
  });

  it("为 stale 图谱生成包含构建和差异信息的提示", () => {
    expect(formatStaleGraphWarning(graphStatus("stale"))).toBe(
      "提示：当前知识图谱已过期（build ID：build-test）：输入摘要变化：example.json。以上结果可能未包含最新输入，请使用 $arknights-knowledge-graph-build 重新构建。",
    );
  });

  it.each(["valid", "missing", "invalid"] as const)("不会为 %s 状态生成 stale 提示", (state) => {
    expect(formatStaleGraphWarning(graphStatus(state))).toBeUndefined();
  });
});
