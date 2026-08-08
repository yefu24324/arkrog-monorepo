/** NORMAL 难度行、逐级 Mechanics 分析和共享筛选语义测试。 */

import assert from 'node:assert/strict';
import fs from 'node:fs';
import test from 'node:test';
import type { ExportedRoguelikeTopicReport } from '@arkrog/arknights-gamedata-report';
import { FormulaZoneId } from '@arkrog/arknights-knowledge-graph/formula';
import {
  buildNormalDifficultyRows,
  difficultyMatchesSearch,
  difficultyMatchesZones,
  ZONE_FILTER_NONE,
} from './roguelike-difficulties';

/** 构造测试所需的最小难度报告。 */
function report(): ExportedRoguelikeTopicReport {
  const difficulty = (
    modeDifficulty: string,
    grade: number,
    ruleDesc: string,
  ) => ({ modeDifficulty, grade, name: '保密等级', ruleDesc });
  return {
    topic: { name: '测试主题' },
    difficulties: [
      difficulty('NORMAL', 5, '所有敌人最大生命+30%'),
      difficulty('MONTH_TEAM', 0, '月度小队'),
      difficulty('NORMAL', 8, '精英及领袖敌人攻击力+15%'),
    ],
    customizedDifficulties: [{
      modeDifficulty: 'NORMAL',
      grade: 8,
      buffDesc: ['扩展说明'],
      buffs: ['difficulty_buff'],
    }],
    difficultyConditionalRelics: [],
  } as unknown as ExportedRoguelikeTopicReport;
}

test('仅保留 NORMAL 难度、降序排列并配对扩展数据', () => {
  const rows = buildNormalDifficultyRows(report(), 'rogue_6', false);
  assert.deepEqual(rows.map((row) => row.difficulty.grade), [8, 5]);
  assert.equal(rows[0]?.customized?.buffDesc[0], '扩展说明');
  assert.deepEqual(rows.flatMap((row) => row.zones), []);
});

test('逐级 Mechanics 分析不会把低等级乘区带入高等级行', () => {
  const rows = buildNormalDifficultyRows(report(), 'rogue_6', true);
  assert.deepEqual(rows[0]?.zones, [FormulaZoneId.enemy_direct_atk_mul]);
  assert.deepEqual(rows[1]?.zones, [FormulaZoneId.enemy_direct_max_hp_mul]);
});

test('搜索覆盖扩展数据，乘区筛选保持全部命中语义', () => {
  const rows = buildNormalDifficultyRows(report(), 'rogue_6', true);
  const grade8 = rows[0]!;
  const grade5 = rows[1]!;
  assert.equal(difficultyMatchesSearch(grade8, '扩展说明', {}), true);
  assert.equal(difficultyMatchesSearch(grade5, '扩展说明', {}), false);
  assert.equal(difficultyMatchesZones(
    grade8,
    new Set([FormulaZoneId.enemy_direct_atk_mul]),
  ), true);
  assert.equal(difficultyMatchesZones(grade8, new Set([ZONE_FILTER_NONE])), false);
  assert.equal(difficultyMatchesZones(
    grade8,
    new Set([FormulaZoneId.enemy_direct_atk_mul, FormulaZoneId.enemy_direct_max_hp_mul]),
  ), false);
});

test('当前六个主题均生成完整 NORMAL 难度并默认最高级', () => {
  const expected = [
    ['rogue_1', 16, 15],
    ['rogue_2', 19, 18],
    ['rogue_3', 16, 15],
    ['rogue_4', 19, 18],
    ['rogue_5', 19, 18],
    ['rogue_6', 16, 15],
  ] as const;
  for (const [topicId, count, highestGrade] of expected) {
    const reportPath = new URL(
      `../../public/gamedata-report/roguelike/${topicId}/topic.json`,
      import.meta.url,
    );
    const currentReport = JSON.parse(
      fs.readFileSync(reportPath, 'utf8'),
    ) as ExportedRoguelikeTopicReport;
    const rows = buildNormalDifficultyRows(currentReport, topicId, true);
    assert.equal(rows.length, count, topicId);
    assert.equal(rows[0]?.difficulty.grade, highestGrade, topicId);
    assert.equal(rows.some((row) => row.zones.length > 0), true, `${topicId} 应有 Mechanics 乘区`);
  }
});
