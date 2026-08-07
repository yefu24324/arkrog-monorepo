/** 加载当前主题的轻量区域、关卡索引，并维护合法的级联选择。 */

'use client';

import { useEffect, useMemo, useState } from 'react';
import type { RoguelikeStageOptionsPayload } from '@/lib/roguelike-stage-options';

/** 主题切换时异步结果必须带回 topicId，避免短暂使用上一主题关卡。 */
interface StageOptionsLoadState {
  data: RoguelikeStageOptionsPayload | null;
  error: string | null;
  /** 最近一次完成请求的主题；与当前主题不同即仍在加载。 */
  resolvedTopicId: string | null;
}

/** 返回区域、关卡选择状态以及当前关卡的最小运行时事实。 */
export function useRoguelikeStageOptions(topicId: string) {
  const [loadState, setLoadState] = useState<StageOptionsLoadState>({
    data: null,
    error: null,
    resolvedTopicId: null,
  });
  const [selectedRegionId, setSelectedRegionId] = useState('');
  const [selectedStageId, setSelectedStageId] = useState('');

  useEffect(() => {
    let cancelled = false;
    void fetch(`/data/roguelike-stages/${topicId}.json`)
      .then(async (response) => {
        if (!response.ok) throw new Error(`stages HTTP ${response.status}`);
        return (await response.json()) as RoguelikeStageOptionsPayload;
      })
      .then((data) => {
        if (cancelled) return;
        if (data.topicId !== topicId) throw new Error(`关卡主题不匹配：${data.topicId}`);
        const firstRegion = data.regions[0];
        setLoadState({ data, error: null, resolvedTopicId: topicId });
        setSelectedRegionId(firstRegion?.id ?? '');
        setSelectedStageId(firstRegion?.stageIds[0] ?? '');
      })
      .catch((error: unknown) => {
        if (cancelled) return;
        setLoadState({
          data: null,
          error: error instanceof Error ? error.message : String(error),
          resolvedTopicId: topicId,
        });
      });
    return () => {
      cancelled = true;
    };
  }, [topicId]);

  const data = loadState.data?.topicId === topicId ? loadState.data : null;
  const error = loadState.resolvedTopicId === topicId ? loadState.error : null;
  const selectedStage = useMemo(
    () => data?.stages[selectedStageId] ?? null,
    [data, selectedStageId],
  );

  /** 切换区域时同步选中该区域首个关卡，确保两级状态始终一致。 */
  function selectRegion(regionId: string, firstStageId: string) {
    setSelectedRegionId(regionId);
    setSelectedStageId(firstStageId);
  }

  return {
    data,
    error,
    loading: loadState.resolvedTopicId !== topicId,
    selectedRegionId,
    selectedStage,
    selectedStageId,
    selectRegion,
    selectStage: setSelectedStageId,
  };
}
