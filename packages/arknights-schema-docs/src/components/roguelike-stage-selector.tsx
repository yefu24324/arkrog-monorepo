/** 集成战略主题内的区域、关卡级联选择器。 */

'use client';

import type {
  RoguelikeStageOption,
  RoguelikeStageOptionsPayload,
} from '@/lib/roguelike-stage-options';

/** 关卡选择器由父组件管理当前值，便于共享给藏品和校验计算。 */
interface RoguelikeStageSelectorProps {
  data: RoguelikeStageOptionsPayload | null;
  loading?: boolean;
  selectedRegionId: string;
  selectedStageId: string;
  onRegionChange: (regionId: string, firstStageId: string) => void;
  onStageChange: (stageId: string) => void;
}

/** 用关卡类型补足同名普通、紧急和 Boss 关卡的辨识信息。 */
function stageKindLabel(stage: RoguelikeStageOption): string {
  if (stage.isBoss) return 'Boss';
  if (stage.isElite || stage.difficulty === 'FOUR_STAR') return '紧急';
  return '普通';
}

/** 必须先选区域，再从该区域的关卡集合中选择。 */
export function RoguelikeStageSelector({
  data,
  loading = false,
  selectedRegionId,
  selectedStageId,
  onRegionChange,
  onStageChange,
}: RoguelikeStageSelectorProps) {
  const region = data?.regions.find((entry) => entry.id === selectedRegionId);
  const stages = (region?.stageIds ?? [])
    .map((stageId) => data?.stages[stageId])
    .filter((stage): stage is RoguelikeStageOption => Boolean(stage));
  const disabled = loading || !data;

  return (
    <div className="grid gap-3 sm:grid-cols-2">
      <label>
        <span className="mb-1.5 block text-xs font-medium text-fd-muted-foreground">区域</span>
        <select
          value={selectedRegionId}
          disabled={disabled}
          onChange={(event) => {
            const nextRegion = data?.regions.find((entry) => entry.id === event.target.value);
            onRegionChange(event.target.value, nextRegion?.stageIds[0] ?? '');
          }}
          className="w-full rounded-xl border bg-fd-background px-3 py-2 text-sm outline-none focus:border-fd-primary disabled:opacity-50"
        >
          <option value="">{loading ? '区域加载中…' : '请选择区域'}</option>
          {data?.regions.map((entry) => (
            <option key={entry.id} value={entry.id}>
              {entry.name}（{entry.stageIds.length}）
            </option>
          ))}
        </select>
      </label>
      <label>
        <span className="mb-1.5 block text-xs font-medium text-fd-muted-foreground">关卡</span>
        <select
          value={selectedStageId}
          disabled={disabled || !region}
          onChange={(event) => onStageChange(event.target.value)}
          className="w-full rounded-xl border bg-fd-background px-3 py-2 text-sm outline-none focus:border-fd-primary disabled:opacity-50"
        >
          <option value="">{region ? '请选择关卡' : '请先选择区域'}</option>
          {stages.map((stage) => (
            <option key={stage.id} value={stage.id}>
              {stage.name} · {stageKindLabel(stage)}（{stage.id}）
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}
