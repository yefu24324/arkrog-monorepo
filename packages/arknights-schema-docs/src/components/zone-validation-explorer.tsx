/** MDX 嵌入入口：渲染图谱、程序与人工历史的乘区校验表。 */

import { ZoneValidationTable } from '@/components/zone-validation-table';

interface ZoneValidationExplorerProps {
  /** 集成战略主题 ID，例如 rogue_6。 */
  topicId: string;
}

/** 文档站“乘区校验”栏目入口，展示藏品校验与 NORMAL 难度占位表。 */
export function ZoneValidationExplorer({ topicId }: ZoneValidationExplorerProps) {
  return <ZoneValidationTable topicId={topicId} />;
}
