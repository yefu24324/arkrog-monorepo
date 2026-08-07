/** 乘区历史契约与三方比较规则的单元测试。 */

import assert from 'node:assert/strict';
import test from 'node:test';
import {
  compareZoneValidation,
  createMechanicsHistoryRecord,
  orderHistoryDocument,
  parseHumanZoneValidation,
  roundZoneItem,
} from './zone-validation.js';

const WRITABLE_ZONES = new Set(['char_in_atk_mul', 'char_out_atk']);

test('解析时保留未知字段，并允许同一 zone 和 item 重复', () => {
  const parsed = parseHumanZoneValidation({
    topicSystems: { future: true },
    relics: [{
      id: 'relic_a',
      name: '藏品 A',
      note: '人工备注',
      zones: [
        { zoneId: 'char_in_atk_mul', item: 0.1, condition: '条件 A' },
        { zoneId: 'char_in_atk_mul', item: 0.1 },
      ],
    }],
  }, WRITABLE_ZONES);
  assert.deepEqual(parsed.topicSystems, { future: true });
  assert.equal(parsed.relics[0]?.note, '人工备注');
  assert.equal(parsed.relics[0]?.zones[0]?.condition, '条件 A');
  assert.equal(parsed.relics[0]?.zones.length, 2);
});

test('拒绝重复藏品、未知 zone 和非数字 item', () => {
  assert.throws(() => parseHumanZoneValidation({ relics: [
    { id: 'same', name: 'A', zones: [] },
    { id: 'same', name: 'B', zones: [] },
  ] }, WRITABLE_ZONES), /重复/);
  assert.throws(() => parseHumanZoneValidation({ relics: [
    { id: 'a', name: 'A', zones: [{ zoneId: 'unknown', item: 1 }] },
  ] }, WRITABLE_ZONES), /可写乘区/);
  assert.throws(() => parseHumanZoneValidation({ relics: [
    { id: 'a', name: 'A', zones: [{ zoneId: 'char_out_atk', item: '1' }] },
  ] }, WRITABLE_ZONES), /有限数字/);
});

test('比较忽略顺序、保留重复次数，并统一四舍五入到两位小数', () => {
  const history = {
    id: 'a',
    name: 'A',
    zones: [
      { zoneId: 'char_out_atk', item: 0.13 },
      { zoneId: 'char_in_atk_mul', item: 0.1 },
    ],
  };
  assert.equal(roundZoneItem(0.126), 0.13);
  assert.deepEqual(compareZoneValidation(
    ['char_in_atk_mul', 'char_out_atk'],
    [
      { zoneId: 'char_in_atk_mul', item: 0.10000000000000002 },
      { zoneId: 'char_out_atk', item: 0.126 },
    ],
    history,
  ), {
    graphMechanics: true,
    graphHistory: true,
    mechanicsHistory: true,
    matches: true,
  });
  assert.equal(compareZoneValidation(
    ['char_in_atk_mul', 'char_out_atk'],
    [
      { zoneId: 'char_in_atk_mul', item: 0.1 },
      { zoneId: 'char_in_atk_mul', item: 0.1 },
      { zoneId: 'char_out_atk', item: 0.13 },
    ],
    history,
  ).mechanicsHistory, false);
});

test('所有无实际乘区的状态统一为空结果并判为一致', () => {
  assert.deepEqual(compareZoneValidation([], [], undefined), {
    graphMechanics: true,
    graphHistory: true,
    mechanicsHistory: true,
    matches: true,
  });
  assert.equal(compareZoneValidation([], [], { id: 'a', name: 'A', zones: [] }).matches, true);
  assert.equal(compareZoneValidation(['char_in_atk_mul'], [], undefined).matches, false);
  assert.equal(compareZoneValidation([], [{ zoneId: 'char_in_atk_mul', item: 0.1 }], undefined).matches, false);
});

test('覆盖记录生成最小结构，并按当前与孤立顺序稳定导出', () => {
  const record = createMechanicsHistoryRecord('current', '当前名称', [
    { zoneId: 'char_in_atk_mul', item: 0.126 },
  ]);
  assert.deepEqual(record, {
    id: 'current',
    name: '当前名称',
    zones: [{ zoneId: 'char_in_atk_mul', item: 0.13 }],
  });
  const ordered = orderHistoryDocument({
    future: true,
    relics: [
      { id: 'orphan', name: '孤立', zones: [], note: '保留' },
      record,
    ],
  }, ['missing', 'current']);
  assert.deepEqual(ordered.relics.map(({ id }) => id), ['current', 'orphan']);
  assert.equal(ordered.relics[1]?.note, '保留');
  assert.equal(ordered.future, true);
});
