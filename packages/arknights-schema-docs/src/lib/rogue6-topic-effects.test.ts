/** rogue_6 三类主题效果行、派生状态和筛选语义测试。 */

import assert from 'node:assert/strict';
import fs from 'node:fs';
import test from 'node:test';
import type { ExportedRogue6TopicExtReport } from '@arkrog/arknights-gamedata-report';
import { FormulaZoneId } from '@arkrog/arknights-knowledge-graph/formula';
import {
  buildRogue6TopicEffectRows,
  rogue6TopicEffectMatchesSearch,
  rogue6TopicEffectMatchesZones,
} from './rogue6-topic-effects';

/** 从生成后的公开报告验证真实数量和当前 Mechanics 覆盖。 */
function report(): ExportedRogue6TopicExtReport {
  const reportPath = new URL(
    '../../public/gamedata-report/roguelike/rogue_6/topic_ext.json',
    import.meta.url,
  );
  return JSON.parse(fs.readFileSync(reportPath, 'utf8')) as ExportedRogue6TopicExtReport;
}

test('生成30个实托邦阶段、10个乌托邦状态和6个概念体', () => {
  const rows = buildRogue6TopicEffectRows(report(), true);
  assert.equal(rows.realUtopia.length, 30);
  assert.equal(rows.utopia.length, 10);
  assert.equal(rows.conceptualEntities.length, 6);
  assert.deepEqual(
    rows.utopia.filter((row) => row.sourceId === 'variation_4').map((row) => row.zones),
    [[FormulaZoneId.char_direct_attack_speed_add], [FormulaZoneId.char_direct_attack_speed_add]],
  );
  // 三类图标都使用旧前端已验证的 PRTS 文件名散列规则，不依赖失效的 manifest 路径。
  assert.match(rows.realUtopia[0]!.iconUrl, /^https:\/\/media\.prts\.wiki\/9\/99\//);
  assert.match(rows.utopia[0]!.iconUrl, /^https:\/\/media\.prts\.wiki\/d\/d8\//);
  assert.match(rows.conceptualEntities[0]!.iconUrl, /^https:\/\/media\.prts\.wiki\/1\/1e\//);
});

test('当前明确效果覆盖实托邦敌我属性和概念体攻速', () => {
  const rows = buildRogue6TopicEffectRows(report(), true);
  assert.deepEqual(rows.realUtopia.find((row) => row.id === 'rogue_6_weather_1_a')?.zones, [
    FormulaZoneId.enemy_direct_atk_mul,
    FormulaZoneId.enemy_direct_max_hp_mul,
  ]);
  assert.deepEqual(rows.realUtopia.find((row) => row.id === 'rogue_6_weather_8_c')?.zones, [
    FormulaZoneId.char_in_atk_mul,
    FormulaZoneId.char_in_max_hp_mul,
  ]);
  assert.deepEqual(rows.conceptualEntities.find((row) => row.id === 'rogue_6_scrap_P_01')?.zones, [
    FormulaZoneId.char_direct_attack_speed_add,
  ]);
});

test('搜索覆盖分类和完整详情，乘区筛选不改变行对象', () => {
  const rows = buildRogue6TopicEffectRows(report(), true);
  const giantCradle = rows.utopia.find((row) => row.sourceId === 'variation_1')!;
  const fertileSoil = rows.realUtopia.find((row) => row.id === 'rogue_6_weather_8_c')!;
  assert.equal(rogue6TopicEffectMatchesSearch(giantCradle, 'bat', {}), true);
  assert.equal(rogue6TopicEffectMatchesSearch(giantCradle, '攻击力提升', {}), true);
  assert.equal(rogue6TopicEffectMatchesZones(
    fertileSoil,
    new Set([FormulaZoneId.char_in_atk_mul, FormulaZoneId.char_in_max_hp_mul]),
  ), true);
  assert.equal(rogue6TopicEffectMatchesZones(
    giantCradle,
    new Set([FormulaZoneId.char_in_atk_mul]),
  ), false);
});
