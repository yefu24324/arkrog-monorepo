/**
 * buff_template_data 的 S 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SortDeck, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SortDeckAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SortDeck, Assembly-CSharp";
  /** SortDeckAction 的 `source` 配置字段；准确战斗语义待确认。 */
  "_source": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SpawnCharacterByUid, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SpawnCharacterByUidAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SpawnCharacterByUid, Assembly-CSharp";
  /** SpawnCharacterByUidAction 的 `addBuffToTarget` 配置字段；准确战斗语义待确认。 */
  "_addBuffToTarget": boolean;
  /** SpawnCharacterByUidAction 的 `buffs` 配置字段；准确战斗语义待确认。 */
  "_buffs": Array<{
                 /** SpawnCharacterByUidAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                 "attributes": {
                                      /** SpawnCharacterByUidAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                      "abnormalAntis": null;
                                      /** SpawnCharacterByUidAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                      "abnormalComboImmunes": null;
                                      /** SpawnCharacterByUidAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                      "abnormalCombos": null;
                                      /** SpawnCharacterByUidAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                      "abnormalFlags": null;
                                      /** SpawnCharacterByUidAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                      "abnormalImmunes": null;
                                      /** SpawnCharacterByUidAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                      "attributeModifiers": null;
                                    };
                 /** SpawnCharacterByUidAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                 "audioSignal": null;
                 /** SpawnCharacterByUidAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                 "blackboard": never[];
                 /** SpawnCharacterByUidAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                 "buffKey": string;
                 /** SpawnCharacterByUidAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                 "clearAllStackCntWhenTimeUp": boolean;
                 /** SpawnCharacterByUidAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                 "disableOverride": boolean;
                 /** SpawnCharacterByUidAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                 "durationKey": null;
                 /** SpawnCharacterByUidAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                 "enableInitDirectionFromSource": boolean;
                 /** SpawnCharacterByUidAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                 "firstTriggerInterval": number;
                 /** SpawnCharacterByUidAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                 "independentCharacterSource": boolean;
                 /** SpawnCharacterByUidAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                 "isDamageMissable": boolean;
                 /** SpawnCharacterByUidAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                 "isDurableBuff": boolean;
                 /** SpawnCharacterByUidAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                 "isFreezable": boolean;
                 /** SpawnCharacterByUidAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                 "isLevitatable": boolean;
                 /** SpawnCharacterByUidAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                 "isSilenceable": boolean;
                 /** SpawnCharacterByUidAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                 "isStunnable": boolean;
                 /** SpawnCharacterByUidAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                 "lifeTime": number;
                 /** SpawnCharacterByUidAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                 "lifeTimeType": "IMMEDIATELY" | "INFINITY" | "LIMITED";
                 /** SpawnCharacterByUidAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                 "loadFromDB": boolean;
                 /** SpawnCharacterByUidAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                 "maxStackCnt": number;
                 /** SpawnCharacterByUidAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                 "maxValidStackCnt": number;
                 /** 模板处理战斗事件时使用的优先级。 */
                 "onEventPriority": "DEFAULT";
                 /** SpawnCharacterByUidAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                 "overrideEffectKey": null | string;
                 /** SpawnCharacterByUidAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                 "overrideKey": null;
                 /** SpawnCharacterByUidAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                 "overrideOnEventPriority": boolean;
                 /** SpawnCharacterByUidAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                 "overrideType": "DEFAULT";
                 /** SpawnCharacterByUidAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                 "priority": number;
                 /** SpawnCharacterByUidAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                 "priorityBBKeys": never[];
                 /** SpawnCharacterByUidAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                 "refreshRemainingTimeWhenStackMax": boolean;
                 /** SpawnCharacterByUidAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                 "statusResistable": "AUTOMATIC";
                 /** SpawnCharacterByUidAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                 "stripBlackboardParamsWithBuffKey": boolean;
                 /** SpawnCharacterByUidAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                 "takeSnapshotWhenExtend": boolean;
                 /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                 "templateKey": string;
                 /** SpawnCharacterByUidAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                 "triggerCnt": number;
                 /** SpawnCharacterByUidAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                 "triggerInterval": number;
                 /** SpawnCharacterByUidAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                 "triggerLifeType": "IMMEDIATELY";
                 /** SpawnCharacterByUidAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                 "waitFirstTriggerInterval": boolean;
               }>;
  /** SpawnCharacterByUidAction 的 `freely` 配置字段；准确战斗语义待确认。 */
  "_freely": boolean;
  /** SpawnCharacterByUidAction 的 `getPosViaBB` 配置字段；准确战斗语义待确认。 */
  "_getPosViaBB": boolean;
  /** SpawnCharacterByUidAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SpawnMultiTokenBySkill, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SpawnMultiTokenBySkillAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SpawnMultiTokenBySkill, Assembly-CSharp";
  /** SpawnMultiTokenBySkillAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
  "_abilityName": null;
  /** SpawnMultiTokenBySkillAction 的 `buffs` 配置字段；准确战斗语义待确认。 */
  "_buffs": Array<{
                 /** SpawnMultiTokenBySkillAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                 "attributes": {
                                      /** SpawnMultiTokenBySkillAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                      "abnormalAntis": never[];
                                      /** SpawnMultiTokenBySkillAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                      "abnormalComboImmunes": never[];
                                      /** SpawnMultiTokenBySkillAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                      "abnormalCombos": never[];
                                      /** SpawnMultiTokenBySkillAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                      "abnormalFlags": never[];
                                      /** SpawnMultiTokenBySkillAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                      "abnormalImmunes": never[];
                                      /** SpawnMultiTokenBySkillAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                      "attributeModifiers": never[];
                                    };
                 /** SpawnMultiTokenBySkillAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                 "audioSignal": null;
                 /** SpawnMultiTokenBySkillAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                 "blackboard": never[];
                 /** SpawnMultiTokenBySkillAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                 "buffKey": string;
                 /** SpawnMultiTokenBySkillAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                 "clearAllStackCntWhenTimeUp": boolean;
                 /** SpawnMultiTokenBySkillAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                 "disableOverride": boolean;
                 /** SpawnMultiTokenBySkillAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                 "durationKey": null;
                 /** SpawnMultiTokenBySkillAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                 "enableInitDirectionFromSource": boolean;
                 /** SpawnMultiTokenBySkillAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                 "firstTriggerInterval": number;
                 /** SpawnMultiTokenBySkillAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                 "independentCharacterSource": boolean;
                 /** SpawnMultiTokenBySkillAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                 "isDamageMissable": boolean;
                 /** SpawnMultiTokenBySkillAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                 "isDurableBuff": boolean;
                 /** SpawnMultiTokenBySkillAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                 "isFreezable": boolean;
                 /** SpawnMultiTokenBySkillAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                 "isLevitatable": boolean;
                 /** SpawnMultiTokenBySkillAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                 "isSilenceable": boolean;
                 /** SpawnMultiTokenBySkillAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                 "isStunnable": boolean;
                 /** SpawnMultiTokenBySkillAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                 "lifeTime": number;
                 /** SpawnMultiTokenBySkillAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                 "lifeTimeType": "IMMEDIATELY";
                 /** SpawnMultiTokenBySkillAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                 "loadFromDB": boolean;
                 /** SpawnMultiTokenBySkillAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                 "maxStackCnt": number;
                 /** SpawnMultiTokenBySkillAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                 "maxValidStackCnt": number;
                 /** 模板处理战斗事件时使用的优先级。 */
                 "onEventPriority": "DEFAULT";
                 /** SpawnMultiTokenBySkillAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                 "overrideEffectKey": null;
                 /** SpawnMultiTokenBySkillAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                 "overrideKey": null;
                 /** SpawnMultiTokenBySkillAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                 "overrideOnEventPriority": boolean;
                 /** SpawnMultiTokenBySkillAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                 "overrideType": "DEFAULT";
                 /** SpawnMultiTokenBySkillAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                 "priority": number;
                 /** SpawnMultiTokenBySkillAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                 "priorityBBKeys": never[];
                 /** SpawnMultiTokenBySkillAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                 "refreshRemainingTimeWhenStackMax": boolean;
                 /** SpawnMultiTokenBySkillAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                 "statusResistable": "AUTOMATIC";
                 /** SpawnMultiTokenBySkillAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                 "stripBlackboardParamsWithBuffKey": boolean;
                 /** SpawnMultiTokenBySkillAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                 "takeSnapshotWhenExtend": boolean;
                 /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                 "templateKey": string;
                 /** SpawnMultiTokenBySkillAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                 "triggerCnt": number;
                 /** SpawnMultiTokenBySkillAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                 "triggerInterval": number;
                 /** SpawnMultiTokenBySkillAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                 "triggerLifeType": "IMMEDIATELY";
                 /** SpawnMultiTokenBySkillAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                 "waitFirstTriggerInterval": boolean;
               }>;
  /** SpawnMultiTokenBySkillAction 的 `checkBuildableType` 配置字段；准确战斗语义待确认。 */
  "_checkBuildableType": boolean;
  /** SpawnMultiTokenBySkillAction 的 `colKey` 配置字段；准确战斗语义待确认。 */
  "_colKey": string;
  /** SpawnMultiTokenBySkillAction 的 `createEffectOnTokenTile` 配置字段；准确战斗语义待确认。 */
  "_createEffectOnTokenTile": boolean;
  /** SpawnMultiTokenBySkillAction 的 `forceSpawn` 配置字段；准确战斗语义待确认。 */
  "_forceSpawn": boolean;
  /** SpawnMultiTokenBySkillAction 的 `ignoreAdvancedBuildableMask` 配置字段；准确战斗语义待确认。 */
  "_ignoreAdvancedBuildableMask": boolean;
  /** SpawnMultiTokenBySkillAction 的 `ignoreSourceType` 配置字段；准确战斗语义待确认。 */
  "_ignoreSourceType": boolean;
  /** SpawnMultiTokenBySkillAction 的 `ignoreTargetType` 配置字段；准确战斗语义待确认。 */
  "_ignoreTargetType": boolean;
  /** SpawnMultiTokenBySkillAction 的 `playerSide` 配置字段；准确战斗语义待确认。 */
  "_playerSide": "DEFAULT";
  /** SpawnMultiTokenBySkillAction 的 `readDataFromBlackboard` 配置字段；准确战斗语义待确认。 */
  "_readDataFromBlackboard": boolean;
  /** SpawnMultiTokenBySkillAction 的 `refreshTokenCardCooldown` 配置字段；准确战斗语义待确认。 */
  "_refreshTokenCardCooldown": boolean;
  /** SpawnMultiTokenBySkillAction 的 `respawnSameToken` 配置字段；准确战斗语义待确认。 */
  "_respawnSameToken": boolean;
  /** SpawnMultiTokenBySkillAction 的 `rowKey` 配置字段；准确战斗语义待确认。 */
  "_rowKey": string;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_SOURCE";
  /** SpawnMultiTokenBySkillAction 的 `spawnedTokenSideType` 配置字段；准确战斗语义待确认。 */
  "_spawnedTokenSideType": "NONE";
  /** SpawnMultiTokenBySkillAction 的 `spawnTokenFromCards` 配置字段；准确战斗语义待确认。 */
  "_spawnTokenFromCards": boolean;
  /** SpawnMultiTokenBySkillAction 的 `spawnTokenKey` 配置字段；准确战斗语义待确认。 */
  "_spawnTokenKey": null;
  /** SpawnMultiTokenBySkillAction 的 `specifierPlayerSideType` 配置字段；准确战斗语义待确认。 */
  "_specifierPlayerSideType": boolean;
  /** SpawnMultiTokenBySkillAction 的 `specifierRelativeSideType` 配置字段；准确战斗语义待确认。 */
  "_specifierRelativeSideType": boolean;
  /** SpawnMultiTokenBySkillAction 的 `specifierSideType` 配置字段；准确战斗语义待确认。 */
  "_specifierSideType": boolean;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
  /** SpawnMultiTokenBySkillAction 的 `tileEffect` 配置字段；准确战斗语义待确认。 */
  "_tileEffect": null;
  /** SpawnMultiTokenBySkillAction 的 `tokenToSpawn` 配置字段；准确战斗语义待确认。 */
  "_tokenToSpawn": {
                        /** SpawnMultiTokenBySkillAction 的 `inst` 配置字段；准确战斗语义待确认。 */
                        "inst": {
                                       /** SpawnMultiTokenBySkillAction 的 `characterKey` 配置字段；准确战斗语义待确认。 */
                                       "characterKey": string;
                                       /** SpawnMultiTokenBySkillAction 的 `favorPoint` 配置字段；准确战斗语义待确认。 */
                                       "favorPoint": number;
                                       /** SpawnMultiTokenBySkillAction 的 `level` 配置字段；准确战斗语义待确认。 */
                                       "level": number;
                                       /** SpawnMultiTokenBySkillAction 的 `phase` 配置字段；准确战斗语义待确认。 */
                                       "phase": "PHASE_0";
                                       /** SpawnMultiTokenBySkillAction 的 `potentialRank` 配置字段；准确战斗语义待确认。 */
                                       "potentialRank": number;
                                     };
                        /** SpawnMultiTokenBySkillAction 的 `mainSkillLvl` 配置字段；准确战斗语义待确认。 */
                        "mainSkillLvl": number;
                        /** SpawnMultiTokenBySkillAction 的 `masterInfos` 配置字段；准确战斗语义待确认。 */
                        "masterInfos": never[];
                        /** SpawnMultiTokenBySkillAction 的 `overrideSkillBlackboard` 配置字段；准确战斗语义待确认。 */
                        "overrideSkillBlackboard": null;
                        /** SpawnMultiTokenBySkillAction 的 `overrideTalents` 配置字段；准确战斗语义待确认。 */
                        "overrideTalents": null;
                        /** SpawnMultiTokenBySkillAction 的 `showSpIllust` 配置字段；准确战斗语义待确认。 */
                        "showSpIllust": boolean;
                        /** SpawnMultiTokenBySkillAction 的 `skillIndex` 配置字段；准确战斗语义待确认。 */
                        "skillIndex": number;
                        /** SpawnMultiTokenBySkillAction 的 `skinId` 配置字段；准确战斗语义待确认。 */
                        "skinId": null;
                        /** SpawnMultiTokenBySkillAction 的 `tmplId` 配置字段；准确战斗语义待确认。 */
                        "tmplId": null;
                        /** SpawnMultiTokenBySkillAction 的 `uniEquipIds` 配置字段；准确战斗语义待确认。 */
                        "uniEquipIds": never[];
                      };
  /** SpawnMultiTokenBySkillAction 的 `usePosByBB` 配置字段；准确战斗语义待确认。 */
  "_usePosByBB": boolean;
  /** SpawnMultiTokenBySkillAction 的 `useTokenKeyDirectly` 配置字段；准确战斗语义待确认。 */
  "_useTokenKeyDirectly": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SpawnTokenByIdUseAbilitySelector, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SpawnTokenByIdUseAbilitySelectorAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SpawnTokenByIdUseAbilitySelector, Assembly-CSharp";
  /** SpawnTokenByIdUseAbilitySelectorAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
  "_abilityName": string;
  /** SpawnTokenByIdUseAbilitySelectorAction 的 `addBuff` 配置字段；准确战斗语义待确认。 */
  "_addBuff": boolean;
  /** SpawnTokenByIdUseAbilitySelectorAction 的 `buffToToken` 配置字段；准确战斗语义待确认。 */
  "_buffToToken": {
                       /** SpawnTokenByIdUseAbilitySelectorAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                       "attributes": {
                                            /** SpawnTokenByIdUseAbilitySelectorAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                            "abnormalAntis": never[];
                                            /** SpawnTokenByIdUseAbilitySelectorAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                            "abnormalComboImmunes": never[];
                                            /** SpawnTokenByIdUseAbilitySelectorAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                            "abnormalCombos": never[];
                                            /** SpawnTokenByIdUseAbilitySelectorAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                            "abnormalFlags": never[];
                                            /** SpawnTokenByIdUseAbilitySelectorAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                            "abnormalImmunes": never[];
                                            /** SpawnTokenByIdUseAbilitySelectorAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                            "attributeModifiers": never[];
                                          };
                       /** SpawnTokenByIdUseAbilitySelectorAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                       "audioSignal": null;
                       /** SpawnTokenByIdUseAbilitySelectorAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                       "blackboard": Array<{
                                            /** 黑板参数键或当前配置项的稳定键。 */
                                            "key": string;
                                            /** 黑板参数的数值槽。 */
                                            "value": number;
                                            /** 黑板参数的字符串槽；`null` 表示该参数使用数值槽。 */
                                            "valueStr": string;
                                          }>;
                       /** SpawnTokenByIdUseAbilitySelectorAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                       "buffKey": string;
                       /** SpawnTokenByIdUseAbilitySelectorAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                       "clearAllStackCntWhenTimeUp": boolean;
                       /** SpawnTokenByIdUseAbilitySelectorAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                       "disableOverride": boolean;
                       /** SpawnTokenByIdUseAbilitySelectorAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                       "durationKey": null;
                       /** SpawnTokenByIdUseAbilitySelectorAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                       "enableInitDirectionFromSource": boolean;
                       /** SpawnTokenByIdUseAbilitySelectorAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                       "firstTriggerInterval": number;
                       /** SpawnTokenByIdUseAbilitySelectorAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                       "independentCharacterSource": boolean;
                       /** SpawnTokenByIdUseAbilitySelectorAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                       "isDamageMissable": boolean;
                       /** SpawnTokenByIdUseAbilitySelectorAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                       "isDurableBuff": boolean;
                       /** SpawnTokenByIdUseAbilitySelectorAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                       "isFreezable": boolean;
                       /** SpawnTokenByIdUseAbilitySelectorAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                       "isLevitatable": boolean;
                       /** SpawnTokenByIdUseAbilitySelectorAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                       "isSilenceable": boolean;
                       /** SpawnTokenByIdUseAbilitySelectorAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                       "isStunnable": boolean;
                       /** SpawnTokenByIdUseAbilitySelectorAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                       "lifeTime": number;
                       /** SpawnTokenByIdUseAbilitySelectorAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                       "lifeTimeType": "IMMEDIATELY";
                       /** SpawnTokenByIdUseAbilitySelectorAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                       "loadFromDB": boolean;
                       /** SpawnTokenByIdUseAbilitySelectorAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                       "maxStackCnt": number;
                       /** SpawnTokenByIdUseAbilitySelectorAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                       "maxValidStackCnt": number;
                       /** 模板处理战斗事件时使用的优先级。 */
                       "onEventPriority": "DEFAULT";
                       /** SpawnTokenByIdUseAbilitySelectorAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                       "overrideEffectKey": null;
                       /** SpawnTokenByIdUseAbilitySelectorAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                       "overrideKey": null;
                       /** SpawnTokenByIdUseAbilitySelectorAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                       "overrideOnEventPriority": boolean;
                       /** SpawnTokenByIdUseAbilitySelectorAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                       "overrideType": "DEFAULT";
                       /** SpawnTokenByIdUseAbilitySelectorAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                       "priority": number;
                       /** SpawnTokenByIdUseAbilitySelectorAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                       "priorityBBKeys": never[];
                       /** SpawnTokenByIdUseAbilitySelectorAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                       "refreshRemainingTimeWhenStackMax": boolean;
                       /** SpawnTokenByIdUseAbilitySelectorAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                       "statusResistable": "AUTOMATIC";
                       /** SpawnTokenByIdUseAbilitySelectorAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                       "stripBlackboardParamsWithBuffKey": boolean;
                       /** SpawnTokenByIdUseAbilitySelectorAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                       "takeSnapshotWhenExtend": boolean;
                       /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                       "templateKey": string;
                       /** SpawnTokenByIdUseAbilitySelectorAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                       "triggerCnt": number;
                       /** SpawnTokenByIdUseAbilitySelectorAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                       "triggerInterval": number;
                       /** SpawnTokenByIdUseAbilitySelectorAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                       "triggerLifeType": "IMMEDIATELY";
                       /** SpawnTokenByIdUseAbilitySelectorAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                       "waitFirstTriggerInterval": boolean;
                     };
  /** SpawnTokenByIdUseAbilitySelectorAction 的 `checkTokenMaxDeployCnt` 配置字段；准确战斗语义待确认。 */
  "_checkTokenMaxDeployCnt": boolean;
  /** SpawnTokenByIdUseAbilitySelectorAction 的 `dontUpdateCardRespawnState` 配置字段；准确战斗语义待确认。 */
  "_dontUpdateCardRespawnState": boolean;
  /** SpawnTokenByIdUseAbilitySelectorAction 的 `exceptSourceRootTile` 配置字段；准确战斗语义待确认。 */
  "_exceptSourceRootTile": boolean;
  /** SpawnTokenByIdUseAbilitySelectorAction 的 `force` 配置字段；准确战斗语义待确认。 */
  "_force": boolean;
  /** SpawnTokenByIdUseAbilitySelectorAction 的 `returnIfCreateToken` 配置字段；准确战斗语义待确认。 */
  "_returnIfCreateToken": boolean;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER";
  /** SpawnTokenByIdUseAbilitySelectorAction 的 `spawnOnOverlapBuildableTrap` 配置字段；准确战斗语义待确认。 */
  "_spawnOnOverlapBuildableTrap": boolean;
  /** Action 作用的目标实体类型。 */
  "_targetType": "TARGET";
  /** SpawnTokenByIdUseAbilitySelectorAction 的 `tokenId` 配置字段；准确战斗语义待确认。 */
  "_tokenId": string;
  /** SpawnTokenByIdUseAbilitySelectorAction 的 `useHostAsSpawnTokenHost` 配置字段；准确战斗语义待确认。 */
  "_useHostAsSpawnTokenHost": boolean;
  /** SpawnTokenByIdUseAbilitySelectorAction 的 `useSourceAbility` 配置字段；准确战斗语义待确认。 */
  "_useSourceAbility": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SpawnTokenInCharacterRangeById, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SpawnTokenInCharacterRangeByIdAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SpawnTokenInCharacterRangeById, Assembly-CSharp";
  /** SpawnTokenInCharacterRangeByIdAction 的 `checkExtraBuildableCheckers` 配置字段；准确战斗语义待确认。 */
  "_checkExtraBuildableCheckers": boolean;
  /** SpawnTokenInCharacterRangeByIdAction 的 `checkTokenMaxDeployCnt` 配置字段；准确战斗语义待确认。 */
  "_checkTokenMaxDeployCnt": boolean;
  /** SpawnTokenInCharacterRangeByIdAction 的 `hostType` 配置字段；准确战斗语义待确认。 */
  "_hostType": "BUFF_SOURCE";
  /** SpawnTokenInCharacterRangeByIdAction 的 `maxTileCnt` 配置字段；准确战斗语义待确认。 */
  "_maxTileCnt": number;
  /** SpawnTokenInCharacterRangeByIdAction 的 `targetCategory` 配置字段；准确战斗语义待确认。 */
  "_targetCategory": "DEFAULT";
  /** SpawnTokenInCharacterRangeByIdAction 的 `targetMotion` 配置字段；准确战斗语义待确认。 */
  "_targetMotion": "WALK_ONLY";
  /** SpawnTokenInCharacterRangeByIdAction 的 `targetSide` 配置字段；准确战斗语义待确认。 */
  "_targetSide": "ENEMY";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
  /** SpawnTokenInCharacterRangeByIdAction 的 `tokenId` 配置字段；准确战斗语义待确认。 */
  "_tokenId": string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SpawnTokenOnRangeTile, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SpawnTokenOnRangeTileAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SpawnTokenOnRangeTile, Assembly-CSharp";
  /** SpawnTokenOnRangeTileAction 的 `buffToToken` 配置字段；准确战斗语义待确认。 */
  "_buffToToken": null | Array<{
                       /** SpawnTokenOnRangeTileAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                       "attributes": {
                                            /** SpawnTokenOnRangeTileAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                            "abnormalAntis": null;
                                            /** SpawnTokenOnRangeTileAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                            "abnormalComboImmunes": null;
                                            /** SpawnTokenOnRangeTileAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                            "abnormalCombos": null;
                                            /** SpawnTokenOnRangeTileAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                            "abnormalFlags": null;
                                            /** SpawnTokenOnRangeTileAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                            "abnormalImmunes": null;
                                            /** SpawnTokenOnRangeTileAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                            "attributeModifiers": null;
                                          };
                       /** SpawnTokenOnRangeTileAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                       "audioSignal": null;
                       /** SpawnTokenOnRangeTileAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                       "blackboard": never[];
                       /** SpawnTokenOnRangeTileAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                       "buffKey": string;
                       /** SpawnTokenOnRangeTileAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                       "clearAllStackCntWhenTimeUp": boolean;
                       /** SpawnTokenOnRangeTileAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                       "disableOverride": boolean;
                       /** SpawnTokenOnRangeTileAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                       "durationKey": null;
                       /** SpawnTokenOnRangeTileAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                       "enableInitDirectionFromSource": boolean;
                       /** SpawnTokenOnRangeTileAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                       "firstTriggerInterval": number;
                       /** SpawnTokenOnRangeTileAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                       "independentCharacterSource": boolean;
                       /** SpawnTokenOnRangeTileAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                       "isDamageMissable": boolean;
                       /** SpawnTokenOnRangeTileAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                       "isDurableBuff": boolean;
                       /** SpawnTokenOnRangeTileAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                       "isFreezable": boolean;
                       /** SpawnTokenOnRangeTileAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                       "isLevitatable": boolean;
                       /** SpawnTokenOnRangeTileAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                       "isSilenceable": boolean;
                       /** SpawnTokenOnRangeTileAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                       "isStunnable": boolean;
                       /** SpawnTokenOnRangeTileAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                       "lifeTime": number;
                       /** SpawnTokenOnRangeTileAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                       "lifeTimeType": "IMMEDIATELY";
                       /** SpawnTokenOnRangeTileAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                       "loadFromDB": boolean;
                       /** SpawnTokenOnRangeTileAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                       "maxStackCnt": number;
                       /** SpawnTokenOnRangeTileAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                       "maxValidStackCnt": number;
                       /** 模板处理战斗事件时使用的优先级。 */
                       "onEventPriority": "DEFAULT";
                       /** SpawnTokenOnRangeTileAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                       "overrideEffectKey": null;
                       /** SpawnTokenOnRangeTileAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                       "overrideKey": null;
                       /** SpawnTokenOnRangeTileAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                       "overrideOnEventPriority": boolean;
                       /** SpawnTokenOnRangeTileAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                       "overrideType": "DEFAULT";
                       /** SpawnTokenOnRangeTileAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                       "priority": number;
                       /** SpawnTokenOnRangeTileAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                       "priorityBBKeys": never[];
                       /** SpawnTokenOnRangeTileAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                       "refreshRemainingTimeWhenStackMax": boolean;
                       /** SpawnTokenOnRangeTileAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                       "statusResistable": "AUTOMATIC";
                       /** SpawnTokenOnRangeTileAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                       "stripBlackboardParamsWithBuffKey": boolean;
                       /** SpawnTokenOnRangeTileAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                       "takeSnapshotWhenExtend": boolean;
                       /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                       "templateKey": string;
                       /** SpawnTokenOnRangeTileAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                       "triggerCnt": number;
                       /** SpawnTokenOnRangeTileAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                       "triggerInterval": number;
                       /** SpawnTokenOnRangeTileAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                       "triggerLifeType": "IMMEDIATELY";
                       /** SpawnTokenOnRangeTileAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                       "waitFirstTriggerInterval": boolean;
                     }>;
  /** SpawnTokenOnRangeTileAction 的 `checkBuildableType` 配置字段；准确战斗语义待确认。 */
  "_checkBuildableType": boolean;
  /** SpawnTokenOnRangeTileAction 的 `checkPassableMask` 配置字段；准确战斗语义待确认。 */
  "_checkPassableMask": boolean;
  /** SpawnTokenOnRangeTileAction 的 `force` 配置字段；准确战斗语义待确认。 */
  "_force": boolean;
  /** SpawnTokenOnRangeTileAction 的 `passableMask` 配置字段；准确战斗语义待确认。 */
  "_passableMask": "WALK_ONLY";
  /** SpawnTokenOnRangeTileAction 的 `rangeId` 配置字段；准确战斗语义待确认。 */
  "_rangeId": string;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER" | "BUFF_SOURCE" | "SOURCE";
  /** SpawnTokenOnRangeTileAction 的 `spawnCnt` 配置字段；准确战斗语义待确认。 */
  "_spawnCnt": number;
  /** SpawnTokenOnRangeTileAction 的 `spawnOnRandomTiles` 配置字段；准确战斗语义待确认。 */
  "_spawnOnRandomTiles": boolean;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "TARGET";
  /** SpawnTokenOnRangeTileAction 的 `tileEffect` 配置字段；准确战斗语义待确认。 */
  "_tileEffect": null | string;
  /** SpawnTokenOnRangeTileAction 的 `tileHoldEffect` 配置字段；准确战斗语义待确认。 */
  "_tileHoldEffect": boolean;
  /** SpawnTokenOnRangeTileAction 的 `tokenToSpawn` 配置字段；准确战斗语义待确认。 */
  "_tokenToSpawn": {
                        /** SpawnTokenOnRangeTileAction 的 `inst` 配置字段；准确战斗语义待确认。 */
                        "inst": {
                                       /** SpawnTokenOnRangeTileAction 的 `characterKey` 配置字段；准确战斗语义待确认。 */
                                       "characterKey": string;
                                       /** SpawnTokenOnRangeTileAction 的 `favorPoint` 配置字段；准确战斗语义待确认。 */
                                       "favorPoint": number;
                                       /** SpawnTokenOnRangeTileAction 的 `level` 配置字段；准确战斗语义待确认。 */
                                       "level": number;
                                       /** SpawnTokenOnRangeTileAction 的 `phase` 配置字段；准确战斗语义待确认。 */
                                       "phase": "PHASE_0";
                                       /** SpawnTokenOnRangeTileAction 的 `potentialRank` 配置字段；准确战斗语义待确认。 */
                                       "potentialRank": number;
                                     };
                        /** SpawnTokenOnRangeTileAction 的 `mainSkillLvl` 配置字段；准确战斗语义待确认。 */
                        "mainSkillLvl": number;
                        /** SpawnTokenOnRangeTileAction 的 `masterInfos` 配置字段；准确战斗语义待确认。 */
                        "masterInfos": null | never[];
                        /** SpawnTokenOnRangeTileAction 的 `overrideSkillBlackboard` 配置字段；准确战斗语义待确认。 */
                        "overrideSkillBlackboard": null;
                        /** SpawnTokenOnRangeTileAction 的 `overrideTalents` 配置字段；准确战斗语义待确认。 */
                        "overrideTalents": null;
                        /** SpawnTokenOnRangeTileAction 的 `showSpIllust` 配置字段；准确战斗语义待确认。 */
                        "showSpIllust": boolean;
                        /** SpawnTokenOnRangeTileAction 的 `skillIndex` 配置字段；准确战斗语义待确认。 */
                        "skillIndex": number;
                        /** SpawnTokenOnRangeTileAction 的 `skinId` 配置字段；准确战斗语义待确认。 */
                        "skinId": null;
                        /** SpawnTokenOnRangeTileAction 的 `tmplId` 配置字段；准确战斗语义待确认。 */
                        "tmplId": null;
                        /** SpawnTokenOnRangeTileAction 的 `uniEquipIds` 配置字段；准确战斗语义待确认。 */
                        "uniEquipIds": never[];
                      };
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SpawnTokenOnTargetTile, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SpawnTokenOnTargetTileAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SpawnTokenOnTargetTile, Assembly-CSharp";
  /** SpawnTokenOnTargetTileAction 的 `buffs` 配置字段；准确战斗语义待确认。 */
  "_buffs": null | Array<{
                 /** SpawnTokenOnTargetTileAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                 "attributes": {
                                      /** SpawnTokenOnTargetTileAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                      "abnormalAntis": null | never[];
                                      /** SpawnTokenOnTargetTileAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                      "abnormalComboImmunes": null | never[];
                                      /** SpawnTokenOnTargetTileAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                      "abnormalCombos": null | never[];
                                      /** SpawnTokenOnTargetTileAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                      "abnormalFlags": null | Array<string>;
                                      /** SpawnTokenOnTargetTileAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                      "abnormalImmunes": null | never[];
                                      /** SpawnTokenOnTargetTileAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                      "attributeModifiers": null | never[];
                                    };
                 /** SpawnTokenOnTargetTileAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                 "audioSignal": null;
                 /** SpawnTokenOnTargetTileAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                 "blackboard": null | never[];
                 /** SpawnTokenOnTargetTileAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                 "buffKey": string;
                 /** SpawnTokenOnTargetTileAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                 "clearAllStackCntWhenTimeUp": boolean;
                 /** SpawnTokenOnTargetTileAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                 "disableOverride": boolean;
                 /** SpawnTokenOnTargetTileAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                 "durationKey": null;
                 /** SpawnTokenOnTargetTileAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                 "enableInitDirectionFromSource": boolean;
                 /** SpawnTokenOnTargetTileAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                 "firstTriggerInterval": number;
                 /** SpawnTokenOnTargetTileAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                 "independentCharacterSource": boolean;
                 /** SpawnTokenOnTargetTileAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                 "isDamageMissable": boolean;
                 /** SpawnTokenOnTargetTileAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                 "isDurableBuff": boolean;
                 /** SpawnTokenOnTargetTileAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                 "isFreezable": boolean;
                 /** SpawnTokenOnTargetTileAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                 "isLevitatable": boolean;
                 /** SpawnTokenOnTargetTileAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                 "isSilenceable": boolean;
                 /** SpawnTokenOnTargetTileAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                 "isStunnable": boolean;
                 /** SpawnTokenOnTargetTileAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                 "lifeTime": number;
                 /** SpawnTokenOnTargetTileAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                 "lifeTimeType": "IMMEDIATELY" | "INFINITY" | "LIMITED";
                 /** SpawnTokenOnTargetTileAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                 "loadFromDB": boolean;
                 /** SpawnTokenOnTargetTileAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                 "maxStackCnt": number;
                 /** SpawnTokenOnTargetTileAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                 "maxValidStackCnt": number;
                 /** 模板处理战斗事件时使用的优先级。 */
                 "onEventPriority": "DEFAULT";
                 /** SpawnTokenOnTargetTileAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                 "overrideEffectKey": null;
                 /** SpawnTokenOnTargetTileAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                 "overrideKey": null;
                 /** SpawnTokenOnTargetTileAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                 "overrideOnEventPriority": boolean;
                 /** SpawnTokenOnTargetTileAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                 "overrideType": "DEFAULT";
                 /** SpawnTokenOnTargetTileAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                 "priority": number;
                 /** SpawnTokenOnTargetTileAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                 "priorityBBKeys": null | never[];
                 /** SpawnTokenOnTargetTileAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                 "refreshRemainingTimeWhenStackMax": boolean;
                 /** SpawnTokenOnTargetTileAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                 "statusResistable": "AUTOMATIC";
                 /** SpawnTokenOnTargetTileAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                 "stripBlackboardParamsWithBuffKey": boolean;
                 /** SpawnTokenOnTargetTileAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                 "takeSnapshotWhenExtend": boolean;
                 /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                 "templateKey": string;
                 /** SpawnTokenOnTargetTileAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                 "triggerCnt": number;
                 /** SpawnTokenOnTargetTileAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                 "triggerInterval": number;
                 /** SpawnTokenOnTargetTileAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                 "triggerLifeType": "IMMEDIATELY";
                 /** SpawnTokenOnTargetTileAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                 "waitFirstTriggerInterval": boolean;
               }>;
  /** SpawnTokenOnTargetTileAction 的 `checkBuildableType` 配置字段；准确战斗语义待确认。 */
  "_checkBuildableType": boolean;
  /** SpawnTokenOnTargetTileAction 的 `createEffectOnTokenTile` 配置字段；准确战斗语义待确认。 */
  "_createEffectOnTokenTile": boolean;
  /** SpawnTokenOnTargetTileAction 的 `doRuneProcess` 配置字段；准确战斗语义待确认。 */
  "_doRuneProcess": boolean;
  /** SpawnTokenOnTargetTileAction 的 `forceSpawn` 配置字段；准确战斗语义待确认。 */
  "_forceSpawn": boolean;
  /** SpawnTokenOnTargetTileAction 的 `ignoreAdvancedBuildableMask` 配置字段；准确战斗语义待确认。 */
  "_ignoreAdvancedBuildableMask": boolean;
  /** SpawnTokenOnTargetTileAction 的 `ignoreSourceType` 配置字段；准确战斗语义待确认。 */
  "_ignoreSourceType": boolean;
  /** SpawnTokenOnTargetTileAction 的 `ignoreTargetType` 配置字段；准确战斗语义待确认。 */
  "_ignoreTargetType": boolean;
  /** SpawnTokenOnTargetTileAction 的 `loadTileFromCharacterSharedData` 配置字段；准确战斗语义待确认。 */
  "_loadTileFromCharacterSharedData": boolean;
  /** SpawnTokenOnTargetTileAction 的 `locatedColBBKey` 配置字段；准确战斗语义待确认。 */
  "_locatedColBBKey": string;
  /** SpawnTokenOnTargetTileAction 的 `locatedRowBBKey` 配置字段；准确战斗语义待确认。 */
  "_locatedRowBBKey": string;
  /** SpawnTokenOnTargetTileAction 的 `playerSide` 配置字段；准确战斗语义待确认。 */
  "_playerSide": "DEFAULT";
  /** SpawnTokenOnTargetTileAction 的 `readDataFromBlackboard` 配置字段；准确战斗语义待确认。 */
  "_readDataFromBlackboard": boolean;
  /** SpawnTokenOnTargetTileAction 的 `refreshTokenCardCooldown` 配置字段；准确战斗语义待确认。 */
  "_refreshTokenCardCooldown": boolean;
  /** SpawnTokenOnTargetTileAction 的 `respawnSameToken` 配置字段；准确战斗语义待确认。 */
  "_respawnSameToken": boolean;
  /** SpawnTokenOnTargetTileAction 的 `returnIfSpawnFailed` 配置字段；准确战斗语义待确认。 */
  "_returnIfSpawnFailed": boolean;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER" | "BUFF_SOURCE" | "SOURCE";
  /** SpawnTokenOnTargetTileAction 的 `spawnedTokenSideType` 配置字段；准确战斗语义待确认。 */
  "_spawnedTokenSideType": "ENEMY" | "NONE";
  /** SpawnTokenOnTargetTileAction 的 `spawnTokenFromCards` 配置字段；准确战斗语义待确认。 */
  "_spawnTokenFromCards": boolean;
  /** SpawnTokenOnTargetTileAction 的 `spawnTokenKey` 配置字段；准确战斗语义待确认。 */
  "_spawnTokenKey": null | string;
  /** SpawnTokenOnTargetTileAction 的 `specifierPlayerSideType` 配置字段；准确战斗语义待确认。 */
  "_specifierPlayerSideType": boolean;
  /** SpawnTokenOnTargetTileAction 的 `specifierRelativeSideType` 配置字段；准确战斗语义待确认。 */
  "_specifierRelativeSideType": boolean;
  /** SpawnTokenOnTargetTileAction 的 `specifierSideType` 配置字段；准确战斗语义待确认。 */
  "_specifierSideType": boolean;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "MAIN_TARGET" | "SOURCE" | "TARGET";
  /** SpawnTokenOnTargetTileAction 的 `tileEffect` 配置字段；准确战斗语义待确认。 */
  "_tileEffect": null | string;
  /** SpawnTokenOnTargetTileAction 的 `tileFromBlackboard` 配置字段；准确战斗语义待确认。 */
  "_tileFromBlackboard": boolean;
  /** SpawnTokenOnTargetTileAction 的 `tileFromBlackboardFixed` 配置字段；准确战斗语义待确认。 */
  "_tileFromBlackboardFixed": boolean;
  /** SpawnTokenOnTargetTileAction 的 `tileFromSnapshot` 配置字段；准确战斗语义待确认。 */
  "_tileFromSnapshot": boolean;
  /** SpawnTokenOnTargetTileAction 的 `tokenToSpawn` 配置字段；准确战斗语义待确认。 */
  "_tokenToSpawn": {
                        /** SpawnTokenOnTargetTileAction 的 `inst` 配置字段；准确战斗语义待确认。 */
                        "inst": {
                                       /** SpawnTokenOnTargetTileAction 的 `characterKey` 配置字段；准确战斗语义待确认。 */
                                       "characterKey": null | string;
                                       /** SpawnTokenOnTargetTileAction 的 `favorPoint` 配置字段；准确战斗语义待确认。 */
                                       "favorPoint": number;
                                       /** SpawnTokenOnTargetTileAction 的 `level` 配置字段；准确战斗语义待确认。 */
                                       "level": number;
                                       /** SpawnTokenOnTargetTileAction 的 `phase` 配置字段；准确战斗语义待确认。 */
                                       "phase": "PHASE_0";
                                       /** SpawnTokenOnTargetTileAction 的 `potentialRank` 配置字段；准确战斗语义待确认。 */
                                       "potentialRank": number;
                                     };
                        /** SpawnTokenOnTargetTileAction 的 `mainSkillLvl` 配置字段；准确战斗语义待确认。 */
                        "mainSkillLvl": number;
                        /** SpawnTokenOnTargetTileAction 的 `masterInfos` 配置字段；准确战斗语义待确认。 */
                        "masterInfos": null | never[];
                        /** SpawnTokenOnTargetTileAction 的 `overrideSkillBlackboard` 配置字段；准确战斗语义待确认。 */
                        "overrideSkillBlackboard": null;
                        /** SpawnTokenOnTargetTileAction 的 `overrideTalents` 配置字段；准确战斗语义待确认。 */
                        "overrideTalents": null;
                        /** SpawnTokenOnTargetTileAction 的 `showSpIllust` 配置字段；准确战斗语义待确认。 */
                        "showSpIllust": boolean;
                        /** SpawnTokenOnTargetTileAction 的 `skillIndex` 配置字段；准确战斗语义待确认。 */
                        "skillIndex": number;
                        /** SpawnTokenOnTargetTileAction 的 `skinId` 配置字段；准确战斗语义待确认。 */
                        "skinId": null;
                        /** SpawnTokenOnTargetTileAction 的 `tmplId` 配置字段；准确战斗语义待确认。 */
                        "tmplId": null;
                        /** SpawnTokenOnTargetTileAction 的 `uniEquipIds` 配置字段；准确战斗语义待确认。 */
                        "uniEquipIds": null | never[];
                      };
  /** SpawnTokenOnTargetTileAction 的 `useDirectionFromSharedData` 配置字段；准确战斗语义待确认。 */
  "_useDirectionFromSharedData": boolean;
  /** SpawnTokenOnTargetTileAction 的 `useTokenKeyDirectly` 配置字段；准确战斗语义待确认。 */
  "_useTokenKeyDirectly": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SpawnTokenOnTargetTileWithCondition, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SpawnTokenOnTargetTileWithConditionAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SpawnTokenOnTargetTileWithCondition, Assembly-CSharp";
  /** SpawnTokenOnTargetTileWithConditionAction 的 `buffs` 配置字段；准确战斗语义待确认。 */
  "_buffs": never[];
  /** SpawnTokenOnTargetTileWithConditionAction 的 `checkBuildableType` 配置字段；准确战斗语义待确认。 */
  "_checkBuildableType": boolean;
  /** SpawnTokenOnTargetTileWithConditionAction 的 `options` 配置字段；准确战斗语义待确认。 */
  "_options": {
                   /** SpawnTokenOnTargetTileWithConditionAction 的 `advancedBuildableMask` 配置字段；准确战斗语义待确认。 */
                   "advancedBuildableMask": "NONE";
                   /** SpawnTokenOnTargetTileWithConditionAction 的 `advancedBuildableMaskExcept` 配置字段；准确战斗语义待确认。 */
                   "advancedBuildableMaskExcept": boolean;
                   /** SpawnTokenOnTargetTileWithConditionAction 的 `allowAllAdvancedBuildableMask` 配置字段；准确战斗语义待确认。 */
                   "allowAllAdvancedBuildableMask": boolean;
                   /** SpawnTokenOnTargetTileWithConditionAction 的 `allowNoneBuildableType` 配置字段；准确战斗语义待确认。 */
                   "allowNoneBuildableType": boolean;
                   /** SpawnTokenOnTargetTileWithConditionAction 的 `allowNonePassableMask` 配置字段；准确战斗语义待确认。 */
                   "allowNonePassableMask": boolean;
                   /** SpawnTokenOnTargetTileWithConditionAction 的 `allowedTileBlackboardKey` 配置字段；准确战斗语义待确认。 */
                   "allowedTileBlackboardKey": null;
                   /** SpawnTokenOnTargetTileWithConditionAction 的 `buildableType` 配置字段；准确战斗语义待确认。 */
                   "buildableType": "MELEE";
                   /** SpawnTokenOnTargetTileWithConditionAction 的 `checkBuildableOrPassable` 配置字段；准确战斗语义待确认。 */
                   "checkBuildableOrPassable": boolean;
                   /** SpawnTokenOnTargetTileWithConditionAction 的 `checkExtraBuildableCheckers` 配置字段；准确战斗语义待确认。 */
                   "checkExtraBuildableCheckers": boolean;
                   /** SpawnTokenOnTargetTileWithConditionAction 的 `checkHeightType` 配置字段；准确战斗语义待确认。 */
                   "checkHeightType": boolean;
                   /** SpawnTokenOnTargetTileWithConditionAction 的 `checkTileHidden` 配置字段；准确战斗语义待确认。 */
                   "checkTileHidden": boolean;
                   /** SpawnTokenOnTargetTileWithConditionAction 的 `checkTileMode` 配置字段；准确战斗语义待确认。 */
                   "checkTileMode": boolean;
                   /** SpawnTokenOnTargetTileWithConditionAction 的 `checkTileMoveCost` 配置字段；准确战斗语义待确认。 */
                   "checkTileMoveCost": boolean;
                   /** SpawnTokenOnTargetTileWithConditionAction 的 `checkTileTypes` 配置字段；准确战斗语义待确认。 */
                   "checkTileTypes": boolean;
                   /** SpawnTokenOnTargetTileWithConditionAction 的 `exceptTileTypes` 配置字段；准确战斗语义待确认。 */
                   "exceptTileTypes": boolean;
                   /** SpawnTokenOnTargetTileWithConditionAction 的 `excludeTileBlackboardKey` 配置字段；准确战斗语义待确认。 */
                   "excludeTileBlackboardKey": null;
                   /** SpawnTokenOnTargetTileWithConditionAction 的 `heightType` 配置字段；准确战斗语义待确认。 */
                   "heightType": "LOWLAND";
                   /** SpawnTokenOnTargetTileWithConditionAction 的 `modeIndex` 配置字段；准确战斗语义待确认。 */
                   "modeIndex": number;
                   /** SpawnTokenOnTargetTileWithConditionAction 的 `moveCostCompareType` 配置字段；准确战斗语义待确认。 */
                   "moveCostCompareType": "EQUALS";
                   /** SpawnTokenOnTargetTileWithConditionAction 的 `moveCostThreshold` 配置字段；准确战斗语义待确认。 */
                   "moveCostThreshold": number;
                   /** SpawnTokenOnTargetTileWithConditionAction 的 `passableMask` 配置字段；准确战斗语义待确认。 */
                   "passableMask": "ALL";
                   /** SpawnTokenOnTargetTileWithConditionAction 的 `tileTypesMask` 配置字段；准确战斗语义待确认。 */
                   "tileTypesMask": "NONE";
                 };
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER" | "SOURCE";
  /** SpawnTokenOnTargetTileWithConditionAction 的 `spawnedTokenSideType` 配置字段；准确战斗语义待确认。 */
  "_spawnedTokenSideType": "ALLY" | "ENEMY";
  /** SpawnTokenOnTargetTileWithConditionAction 的 `specifierSideType` 配置字段；准确战斗语义待确认。 */
  "_specifierSideType": boolean;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
  /** SpawnTokenOnTargetTileWithConditionAction 的 `tileBlackList` 配置字段；准确战斗语义待确认。 */
  "_tileBlackList": string;
  /** SpawnTokenOnTargetTileWithConditionAction 的 `tileBlackListKey` 配置字段；准确战斗语义待确认。 */
  "_tileBlackListKey": null | string;
  /** SpawnTokenOnTargetTileWithConditionAction 的 `tileEffect` 配置字段；准确战斗语义待确认。 */
  "_tileEffect": null;
  /** SpawnTokenOnTargetTileWithConditionAction 的 `tileFromBlackboard` 配置字段；准确战斗语义待确认。 */
  "_tileFromBlackboard": boolean;
  /** SpawnTokenOnTargetTileWithConditionAction 的 `tokenToSpawn` 配置字段；准确战斗语义待确认。 */
  "_tokenToSpawn": {
                        /** SpawnTokenOnTargetTileWithConditionAction 的 `inst` 配置字段；准确战斗语义待确认。 */
                        "inst": {
                                       /** SpawnTokenOnTargetTileWithConditionAction 的 `characterKey` 配置字段；准确战斗语义待确认。 */
                                       "characterKey": string;
                                       /** SpawnTokenOnTargetTileWithConditionAction 的 `favorPoint` 配置字段；准确战斗语义待确认。 */
                                       "favorPoint": number;
                                       /** SpawnTokenOnTargetTileWithConditionAction 的 `level` 配置字段；准确战斗语义待确认。 */
                                       "level": number;
                                       /** SpawnTokenOnTargetTileWithConditionAction 的 `phase` 配置字段；准确战斗语义待确认。 */
                                       "phase": "PHASE_0";
                                       /** SpawnTokenOnTargetTileWithConditionAction 的 `potentialRank` 配置字段；准确战斗语义待确认。 */
                                       "potentialRank": number;
                                     };
                        /** SpawnTokenOnTargetTileWithConditionAction 的 `mainSkillLvl` 配置字段；准确战斗语义待确认。 */
                        "mainSkillLvl": number;
                        /** SpawnTokenOnTargetTileWithConditionAction 的 `masterInfos` 配置字段；准确战斗语义待确认。 */
                        "masterInfos": null;
                        /** SpawnTokenOnTargetTileWithConditionAction 的 `overrideSkillBlackboard` 配置字段；准确战斗语义待确认。 */
                        "overrideSkillBlackboard": null;
                        /** SpawnTokenOnTargetTileWithConditionAction 的 `overrideTalents` 配置字段；准确战斗语义待确认。 */
                        "overrideTalents": null;
                        /** SpawnTokenOnTargetTileWithConditionAction 的 `showSpIllust` 配置字段；准确战斗语义待确认。 */
                        "showSpIllust": boolean;
                        /** SpawnTokenOnTargetTileWithConditionAction 的 `skillIndex` 配置字段；准确战斗语义待确认。 */
                        "skillIndex": number;
                        /** SpawnTokenOnTargetTileWithConditionAction 的 `skinId` 配置字段；准确战斗语义待确认。 */
                        "skinId": null;
                        /** SpawnTokenOnTargetTileWithConditionAction 的 `tmplId` 配置字段；准确战斗语义待确认。 */
                        "tmplId": null;
                        /** SpawnTokenOnTargetTileWithConditionAction 的 `uniEquipIds` 配置字段；准确战斗语义待确认。 */
                        "uniEquipIds": never[];
                      };
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SpawnTokenOnTileByBlackboard, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SpawnTokenOnTileByBlackboardAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SpawnTokenOnTileByBlackboard, Assembly-CSharp";
  /** SpawnTokenOnTileByBlackboardAction 的 `checkBuildableType` 配置字段；准确战斗语义待确认。 */
  "_checkBuildableType": boolean;
  /** SpawnTokenOnTileByBlackboardAction 的 `dirBlackboard` 配置字段；准确战斗语义待确认。 */
  "_dirBlackboard": string;
  /** SpawnTokenOnTileByBlackboardAction 的 `excludeTileInBlackboard` 配置字段；准确战斗语义待确认。 */
  "_excludeTileInBlackboard": boolean;
  /** SpawnTokenOnTileByBlackboardAction 的 `onlySpawnOnNoCharacterTile` 配置字段；准确战斗语义待确认。 */
  "_onlySpawnOnNoCharacterTile": boolean;
  /** SpawnTokenOnTileByBlackboardAction 的 `rangeId` 配置字段；准确战斗语义待确认。 */
  "_rangeId": string;
  /** SpawnTokenOnTileByBlackboardAction 的 `tokenToSpawn` 配置字段；准确战斗语义待确认。 */
  "_tokenToSpawn": {
                        /** SpawnTokenOnTileByBlackboardAction 的 `inst` 配置字段；准确战斗语义待确认。 */
                        "inst": {
                                       /** SpawnTokenOnTileByBlackboardAction 的 `characterKey` 配置字段；准确战斗语义待确认。 */
                                       "characterKey": string;
                                       /** SpawnTokenOnTileByBlackboardAction 的 `favorPoint` 配置字段；准确战斗语义待确认。 */
                                       "favorPoint": number;
                                       /** SpawnTokenOnTileByBlackboardAction 的 `level` 配置字段；准确战斗语义待确认。 */
                                       "level": number;
                                       /** SpawnTokenOnTileByBlackboardAction 的 `phase` 配置字段；准确战斗语义待确认。 */
                                       "phase": "PHASE_0";
                                       /** SpawnTokenOnTileByBlackboardAction 的 `potentialRank` 配置字段；准确战斗语义待确认。 */
                                       "potentialRank": number;
                                     };
                        /** SpawnTokenOnTileByBlackboardAction 的 `mainSkillLvl` 配置字段；准确战斗语义待确认。 */
                        "mainSkillLvl": number;
                        /** SpawnTokenOnTileByBlackboardAction 的 `masterInfos` 配置字段；准确战斗语义待确认。 */
                        "masterInfos": never[];
                        /** SpawnTokenOnTileByBlackboardAction 的 `overrideSkillBlackboard` 配置字段；准确战斗语义待确认。 */
                        "overrideSkillBlackboard": null;
                        /** SpawnTokenOnTileByBlackboardAction 的 `overrideTalents` 配置字段；准确战斗语义待确认。 */
                        "overrideTalents": null;
                        /** SpawnTokenOnTileByBlackboardAction 的 `showSpIllust` 配置字段；准确战斗语义待确认。 */
                        "showSpIllust": boolean;
                        /** SpawnTokenOnTileByBlackboardAction 的 `skillIndex` 配置字段；准确战斗语义待确认。 */
                        "skillIndex": number;
                        /** SpawnTokenOnTileByBlackboardAction 的 `skinId` 配置字段；准确战斗语义待确认。 */
                        "skinId": null;
                        /** SpawnTokenOnTileByBlackboardAction 的 `tmplId` 配置字段；准确战斗语义待确认。 */
                        "tmplId": null;
                        /** SpawnTokenOnTileByBlackboardAction 的 `uniEquipIds` 配置字段；准确战斗语义待确认。 */
                        "uniEquipIds": never[];
                      };
  /** SpawnTokenOnTileByBlackboardAction 的 `validTileBlackboard` 配置字段；准确战斗语义待确认。 */
  "_validTileBlackboard": null;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SpawnTokenUseAbilitySelector, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SpawnTokenUseAbilitySelectorAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SpawnTokenUseAbilitySelector, Assembly-CSharp";
  /** SpawnTokenUseAbilitySelectorAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
  "_abilityName": string;
  /** SpawnTokenUseAbilitySelectorAction 的 `force` 配置字段；准确战斗语义待确认。 */
  "_force": boolean;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER";
  /** Action 作用的目标实体类型。 */
  "_targetType": "TARGET";
  /** SpawnTokenUseAbilitySelectorAction 的 `tileEffect` 配置字段；准确战斗语义待确认。 */
  "_tileEffect": null;
  /** SpawnTokenUseAbilitySelectorAction 的 `tileHoldEffect` 配置字段；准确战斗语义待确认。 */
  "_tileHoldEffect": boolean;
  /** SpawnTokenUseAbilitySelectorAction 的 `tokenToSpawn` 配置字段；准确战斗语义待确认。 */
  "_tokenToSpawn": {
                        /** SpawnTokenUseAbilitySelectorAction 的 `inst` 配置字段；准确战斗语义待确认。 */
                        "inst": {
                                       /** SpawnTokenUseAbilitySelectorAction 的 `characterKey` 配置字段；准确战斗语义待确认。 */
                                       "characterKey": string;
                                       /** SpawnTokenUseAbilitySelectorAction 的 `favorPoint` 配置字段；准确战斗语义待确认。 */
                                       "favorPoint": number;
                                       /** SpawnTokenUseAbilitySelectorAction 的 `level` 配置字段；准确战斗语义待确认。 */
                                       "level": number;
                                       /** SpawnTokenUseAbilitySelectorAction 的 `phase` 配置字段；准确战斗语义待确认。 */
                                       "phase": "PHASE_0";
                                       /** SpawnTokenUseAbilitySelectorAction 的 `potentialRank` 配置字段；准确战斗语义待确认。 */
                                       "potentialRank": number;
                                     };
                        /** SpawnTokenUseAbilitySelectorAction 的 `mainSkillLvl` 配置字段；准确战斗语义待确认。 */
                        "mainSkillLvl": number;
                        /** SpawnTokenUseAbilitySelectorAction 的 `masterInfos` 配置字段；准确战斗语义待确认。 */
                        "masterInfos": never[];
                        /** SpawnTokenUseAbilitySelectorAction 的 `overrideSkillBlackboard` 配置字段；准确战斗语义待确认。 */
                        "overrideSkillBlackboard": null;
                        /** SpawnTokenUseAbilitySelectorAction 的 `overrideTalents` 配置字段；准确战斗语义待确认。 */
                        "overrideTalents": null;
                        /** SpawnTokenUseAbilitySelectorAction 的 `showSpIllust` 配置字段；准确战斗语义待确认。 */
                        "showSpIllust": boolean;
                        /** SpawnTokenUseAbilitySelectorAction 的 `skillIndex` 配置字段；准确战斗语义待确认。 */
                        "skillIndex": number;
                        /** SpawnTokenUseAbilitySelectorAction 的 `skinId` 配置字段；准确战斗语义待确认。 */
                        "skinId": null;
                        /** SpawnTokenUseAbilitySelectorAction 的 `tmplId` 配置字段；准确战斗语义待确认。 */
                        "tmplId": null;
                        /** SpawnTokenUseAbilitySelectorAction 的 `uniEquipIds` 配置字段；准确战斗语义待确认。 */
                        "uniEquipIds": never[];
                      };
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionS12 = SortDeckAction | SpawnCharacterByUidAction | SpawnMultiTokenBySkillAction | SpawnTokenByIdUseAbilitySelectorAction | SpawnTokenInCharacterRangeByIdAction | SpawnTokenOnRangeTileAction | SpawnTokenOnTargetTileAction | SpawnTokenOnTargetTileWithConditionAction | SpawnTokenOnTileByBlackboardAction | SpawnTokenUseAbilitySelectorAction;
