/**
 * 集成战略主题详情中难度与特殊模式配置的 Zod Schema。
 *
 * 数据位于 `roguelike_topic_table.json` 各主题的 `details.<topic>.difficulties` 数组。
 */

import { z } from "zod";

import type {
  DetailDifficulty,
  DisplayIconId,
  FailForceDesc,
  FailTitle,
  NameImage,
  RuleDescReplacement,
} from "../../../../types/roguelike-topic-table/details/difficulties/difficulties.types.js";

import {
  HistoricalRecordsModeSchema,
  ModeSchema,
} from "../../shared/common-enums.schemas.js";

import { EnrollIdSchema } from "../../shared/rogue-enums.schemas.js";

/**
 * 难度选择界面使用的分档图标资源标识。
 *
 * 后缀 `0` 至 `3` 对应数据中由低到高的图标分档；未配置图标的条目由
 * `DetailDifficulty.displayIconId` 使用 `null` 表示。
 */
export const DisplayIconIdSchema = z
  .enum([
    "icon_difficulty_0",
    "icon_difficulty_1",
    "icon_difficulty_2",
    "icon_difficulty_3",
  ])
  .describe(
    "roguelike_topic_table.json 中 DisplayIconId 的运行时校验结构。",
  ) satisfies z.ZodType<DisplayIconId>;

/**
 * 探索失败界面显示的强制提示文案。
 *
 * 普通难度使用干员养成提示，月度小队、挑战模式等特殊条目使用与各自机制对应的提示。
 */
export const FailForceDescSchema = z
  .enum([
    "通过提升干员等级、技能等级或将干员精英化，可以在战斗中取得更大优势",
    "理解月度小队成员的特点并灵活运用，可以在战斗中取得更大优势",
    "充分利用【调查条目】提供的特殊条件，可以在战斗中取得更大优势",
    "理解追忆映射成员的特点并灵活运用，可以在战斗中取得更大优势",
    "充分利用【探索条目】提供的特殊条件，可以在战斗中取得更大优势",
    "掌握探索者档案所记录的成员特点并灵活运用，可以在战斗中取得更大优势",
    "在本次深入调查中，非险路恶敌作战失败不会结束探索",
    "掌握讲述者列表所记录的成员特点并灵活运用，可以在战斗中取得更大优势",
  ])
  .describe(
    "roguelike_topic_table.json 中 FailForceDesc 的运行时校验结构。",
  ) satisfies z.ZodType<FailForceDesc>;

/**
 * 探索失败界面的标题文案。
 *
 * 标题会随普通探索、月度小队或挑战模式而变化。
 */
export const FailTitleSchema = z
  .enum(["联系中断", "小队解散", "调查终止", "暂时撤退"])
  .describe(
    "roguelike_topic_table.json 中 FailTitle 的运行时校验结构。",
  ) satisfies z.ZodType<FailTitle>;

/**
 * 难度名称的配套图片资源标识。
 *
 * 未配置名称图片的条目由 `DetailDifficulty.nameImage` 使用 `null` 表示。
 */
export const NameImageSchema = z
  .enum(["name_2", "name_1"])
  .describe(
    "roguelike_topic_table.json 中 NameImage 的运行时校验结构。",
  ) satisfies z.ZodType<NameImage>;

/**
 * 按主题开放批次覆盖难度规则文案的配置。
 *
 * 当前批次命中 `enrollId` 时，使用此处的 `ruleDesc` 替换难度条目上的默认规则文案。
 */
export const RuleDescReplacementSchema = z
  .strictObject({
    /** 关联同一主题 `enrolls` 字典中的开放批次。 */
    enrollId: EnrollIdSchema,
    /** 该开放批次下替代默认文案的难度规则说明。 */
    ruleDesc: z.string(),
  })
  .describe(
    "roguelike_topic_table.json 中 RuleDescReplacement 的运行时校验结构。",
  ) satisfies z.ZodType<RuleDescReplacement>;

/**
 * 一个可选难度或特殊模式的完整配置。
 *
 * 每个集成战略主题都以数组保存这类条目；普通难度按 `grade` 递增，简单、月度小队与
 * 挑战模式则作为独立条目存在。
 */
export const DetailDifficultySchema = z
  .strictObject({
    /** 模式分类：简单、普通难度、月度小队或挑战模式。 */
    modeDifficulty: ModeSchema,
    /** 模式内的难度等级；当前普通难度为 0–18，特殊模式均为 0。 */
    grade: z.number(),
    /** 难度或特殊模式的主名称。 */
    name: z.string(),
    /** 配套的名称图片资源标识；`null` 表示未配置。 */
    nameImage: z.union([NameImageSchema, z.null()]),
    /** 名称下方的副标题文案；`null` 表示不显示副标题。 */
    subName: z.union([z.null(), z.string()]),
    /** 关联同一主题 `enrolls` 字典的开放批次；`null` 表示未绑定批次。 */
    enrollId: z.union([z.null(), z.string()]),
    /** 是否在条目上显示初始藏品图标。 */
    haveInitialRelicIcon: z.boolean(),
    /** 结算得分倍率；在参与计分的条目中与 `bpValue` 的百分比修正相对应。 */
    scoreFactor: z.number(),
    /** 该模式的探索是否可解锁藏品等收集项。 */
    canUnlockItem: z.boolean(),
    /** 该模式的探索是否计入月度任务进度。 */
    doMonthTask: z.boolean(),
    /** 难度选择界面显示的主规则说明。 */
    ruleDesc: z.string(),
    /** 按开放批次替换主规则文案的配置；`null` 表示无替换项。 */
    ruleDescReplacements: z.union([
      z.array(RuleDescReplacementSchema),
      z.null(),
    ]),
    /** 探索失败界面的标题。 */
    failTitle: FailTitleSchema,
    /** 探索失败界面的图片资源标识。 */
    failImageId: z.string(),
    /** 探索失败界面强制显示的引导文案。 */
    failForceDesc: FailForceDescSchema,
    /** 难度列表的排序分组值。 */
    sortId: z.number(),
    /** 供其他难度相关系统使用的折算等级；通常与 `grade` 相同。 */
    equivalentGrade: z.number(),
    /** 难度条目的十六进制界面颜色；`null` 表示使用默认颜色。 */
    color: z.union([z.null(), z.string()]),
    /** 结算得分的百分比修正值；计分条目满足 `scoreFactor = 1 + bpValue / 100`。 */
    bpValue: z.number(),
    /** 首领战对应的难度计分值。 */
    bossValue: z.number(),
    /** 主规则之外的补充说明；`null` 表示无补充文案。 */
    addDesc: z.union([z.null(), z.string()]),
    /** 历史记录界面使用的难度警告等级。 */
    warningType: HistoricalRecordsModeSchema,
    /** 尚未解锁时显示的解锁条件文案；`null` 表示无条件文案。 */
    unlockText: z.union([z.null(), z.string()]),
    /** 难度分档图标的资源标识；`null` 表示不显示分档图标。 */
    displayIconId: z.union([DisplayIconIdSchema, z.null()]),
    /** 结算时是否隐藏结局剧情。 */
    hideEndingStory: z.boolean(),
    /** 该难度是否启用主题的传承（Legacy）机制。 */
    haveLegacy: z.boolean(),
  })
  .describe(
    "roguelike_topic_table.json 中 DetailDifficulty 的运行时校验结构。",
  ) satisfies z.ZodType<DetailDifficulty>;
