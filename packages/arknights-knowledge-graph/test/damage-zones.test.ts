import { describe, expect, it } from "vitest";

import {
  classifyEffect,
  FIELD_MAPPINGS,
} from "../src/domain/damage-zones.js";

/** 用最小参数表构造一个可分类的 buff 上下文。 */
function context(
  effectKey: string,
  parameters: Record<string, number | string | null>,
) {
  return { effectKey, parameters: new Map(Object.entries(parameters)) };
}

describe("伤害乘区领域规则", () => {
  it("把 attack_bonus 映射到局外攻击区", () => {
    expect(FIELD_MAPPINGS.get("item.effect.attack_bonus")?.zoneId).toBe(
      "OUTER_ATK",
    );
  });

  it("把静态百分比攻击属性映射到局外攻击区", () => {
    const mappings = classifyEffect(context("char_attribute_mul", { atk: 0.2 }));
    expect(mappings.map((mapping) => mapping.zoneId)).toContain("OUTER_ATK");
  });

  it("把局内条件攻击属性映射到局内攻击区", () => {
    const mappings = classifyEffect(
      context("global_buff_normal", { key: "atk_up_on_skill_start", atk: 0.6 }),
    );
    expect(mappings.map((mapping) => mapping.zoneId)).toContain("INNER_ATK");
  });

  it("区分伤害倍率和按攻击力缩放的追加伤害包", () => {
    const amplification = classifyEffect(
      context("global_buff_normal", {
        key: "enemy_damage_scale[phy]",
        damage_scale: 1.5,
      }),
    );
    const packet = classifyEffect(
      context("char_ability_new", { key: "extra_damage", atk_scale: 1 }),
    );
    expect(amplification.map((mapping) => mapping.zoneId)).toContain(
      "DAMAGE_AMPLIFICATION",
    );
    expect(packet.map((mapping) => mapping.zoneId)).toContain(
      "ADDITIONAL_DAMAGE_PACKET",
    );
  });

  it("证据不足时不强行产生乘区", () => {
    expect(classifyEffect(context("immediate_reward", { count: 1 }))).toEqual([]);
  });
});
