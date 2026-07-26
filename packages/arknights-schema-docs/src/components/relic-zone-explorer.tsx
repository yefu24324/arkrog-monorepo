/**
 * MDX 嵌入入口：按主题 ID 渲染藏品乘区交互表。
 */

import { RelicZoneTable } from '@/components/relic-zone-table';

interface RelicZoneExplorerProps {
  /** 集成战略主题 ID，例如 rogue_6。 */
  topicId: string;
}

/** 文档站「藏品乘区」栏目使用的浏览器组件。 */
export function RelicZoneExplorer({ topicId }: RelicZoneExplorerProps) {
  return <RelicZoneTable topicId={topicId} />;
}
