import { describe, expect, it } from "vitest";

import { runCypher } from "../src/query.js";

describe("原始 Cypher 查询保护", () => {
  it("在进入原生驱动前拒绝多条 Cypher", async () => {
    await expect(runCypher("RETURN 1; RETURN 2")).rejects.toThrow(
      "每次只允许一条 Cypher",
    );
  });
});
