/** 干员召唤物聚合契约测试。 */

import { describe, expect, it } from "vitest";

import { collectSkillIds, collectTokens } from "../src/operators/collect-operator-family.ts";

describe("干员关联数据", () => {
  it("显式区分存在与缺失的召唤物", () => {
    const character = {
      displayTokenDict: { token_exists: true, token_missing: true },
      skills: [{ skillId: "skill_operator" }],
    };
    const token = { name: "召唤物", skills: [{ skillId: "skill_token" }] };
    const result = collectTokens([character], { token_exists: token });
    expect(result.tokens).toEqual({ token_exists: token });
    expect(result.missingTokenIds).toEqual(["token_missing"]);
    expect(collectSkillIds([character, ...Object.values(result.tokens)])).toEqual([
      "skill_operator",
      "skill_token",
    ]);
  });
});
