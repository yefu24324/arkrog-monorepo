import { classifyRelicEffect } from "./classify-effect.js";
import type { EngineSemanticRule } from "../domain/engine-rules.js";
import type { MechanicIndex } from "./mechanic-index.js";
import type {
  ExportedRelic,
  RelicItem,
  TopicDetailForClassify,
} from "./types.js";

/** 单件藏品分类输入。 */
export interface ClassifyRelicItemInput {
  /** 主题 ID，如 rogue_6。 */
  topicId: string;
  /** 藏品元数据。 */
  item: RelicItem;
  /** 主题明细切片。 */
  detail: TopicDetailForClassify;
  /** 战斗模板索引。 */
  mechanicIndex: MechanicIndex;
  /** 显式注入的声明式规则。 */
  semanticRules?: readonly EngineSemanticRule[];
}

/** 对一件藏品汇总直接 relics buff 与关联 charBuffData 的乘区预测。 */
export function classifyRelicItem(input: ClassifyRelicItemInput): ExportedRelic {
  const { topicId, item, detail, mechanicIndex, semanticRules } = input;
  const directBuffs = (detail.relics[item.id]?.buffs ?? []).map((buff, buffIndex) =>
    classifyRelicEffect({
      effectId: `effect:${topicId}:${item.id}:${buffIndex}`,
      source: "relics",
      sourceKind: "relics",
      objectId: item.id,
      buffIndex,
      key: buff.key,
      blackboard: buff.blackboard,
      jsonPath: `$.details.${topicId}.relics[${JSON.stringify(item.id)}].buffs[${buffIndex}]`,
      mechanicIndex,
      semanticRules,
    }),
  );

  const characterBuffs = Object.values(detail.charBuffData)
    .filter(
      (characterBuff) =>
        characterBuff.relatedItemId === item.id || characterBuff.iconId === item.id,
    )
    .flatMap((characterBuff) =>
      (characterBuff.buffs ?? []).map((buff, buffIndex) =>
        classifyRelicEffect({
          effectId: `effect:${topicId}:charBuffData:${characterBuff.id}:${buffIndex}`,
          source: `charBuffData:${characterBuff.id}`,
          sourceKind: `charBuffData:${characterBuff.id}`,
          objectId: item.id,
          buffIndex,
          key: buff.key,
          blackboard: buff.blackboard,
          jsonPath: `$.details.${topicId}.charBuffData[${JSON.stringify(characterBuff.id)}].buffs[${buffIndex}]`,
          mechanicIndex,
          semanticRules,
        }),
      ),
    );

  const effects = [...directBuffs, ...characterBuffs];
  const itemConditions = new Set<string>();
  const itemZones = new Set<ExportedRelic["zones"][number]>();
  for (const effect of effects) {
    itemConditions.add(effect.condition);
    for (const prediction of effect.predictions) {
      itemZones.add(prediction.zoneId);
    }
  }

  return {
    id: item.id,
    name: item.name,
    rarity: item.rarity,
    sortId: item.sortId,
    usage: item.usage,
    description: item.description,
    conditions: [...itemConditions],
    zones: [...itemZones],
    effectCount: effects.length,
    effects,
  };
}
