/** MDX 嵌入入口：渲染 graph/formula/human 藏品乘区人工校验表。 */

import { RelicZoneValidationTable } from '@/components/relic-zone-validation-table';

interface RelicZoneValidationExplorerProps {
  /** 集成战略主题 ID，例如 rogue_6。 */
  topicId: string;
}

/** 文档站“藏品乘区人工校验”栏目入口。 */
export function RelicZoneValidationExplorer({ topicId }: RelicZoneValidationExplorerProps) {
  return <RelicZoneValidationTable topicId={topicId} />;
}
