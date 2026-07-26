/** 对真实 buff_template_data 执行全量校验并检查 Action 严格字段边界。 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

import { BuffTemplateDataSchema } from "../src/schemas/buff-template-data/buff-template-data.schemas.js";

/** 测试所使用的完整真实数据文件。 */
const CURRENT_FILE = fileURLToPath(import.meta.url);
const TABLE_PATH = path.resolve(path.dirname(CURRENT_FILE), "../../..", "ArknightsGameData", "zh_CN", "gamedata", "battle", "buff_template_data.json");

describe("BuffTemplateDataSchema", () => {
  it("校验当前完整 buff_template_data 数据", () => {
    const data = JSON.parse(fs.readFileSync(TABLE_PATH, "utf8")) as unknown;
    const result = BuffTemplateDataSchema.safeParse(data);
    expect(result.success, result.success ? undefined : result.error.message).toBe(true);
  });

  it("拒绝 Action 中尚未建模的字段", () => {
    const data = JSON.parse(fs.readFileSync(TABLE_PATH, "utf8")) as Record<string, { eventToActions: Record<string, Array<Record<string, unknown>>> }>;
    const template = Object.values(data).find((entry) => Object.values(entry.eventToActions).some((actions) => actions.length > 0));
    expect(template).toBeDefined();
    if (!template) return;
    const actions = Object.values(template.eventToActions).find((entries) => entries.length > 0);
    expect(actions).toBeDefined();
    if (!actions?.[0]) return;
    actions[0].unexpectedUpdateField = true;
    expect(BuffTemplateDataSchema.safeParse(data).success).toBe(false);
  });
});
