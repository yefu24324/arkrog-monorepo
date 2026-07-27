/** 从 GameData 按主题导出 docs 与 frontend 共用的包装藏品 JSON。 */

import { mkdir, readFile, writeFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import path from "node:path";

import {
  buildWrappedRelicTopicArtifact,
  type WrappedRelicTopicDetail,
} from "../lib/formula/wrapped-relics.js";
import { resolveRepositoryPaths, toRepositoryPath } from "./paths.js";

/** roguelike_topic_table.json 的包装导出最小读取结构。 */
interface RoguelikeTopicTableForWrappedExport {
  /** 主题名称表。 */
  topics: Record<string, { name: string }>;
  /** 主题原始明细。 */
  details: Record<string, WrappedRelicTopicDetail>;
}

/** 单主题导出结果。 */
export interface WrappedRelicExportResult {
  /** 主题 ID。 */
  topicId: string;
  /** 输出的藏品数量。 */
  itemCount: number;
  /** 仓库内三份同内容产物路径。 */
  outputPaths: string[];
}

/** 返回稳定排序的全部 rogue_N 主题 ID。 */
function topicIdsOf(table: RoguelikeTopicTableForWrappedExport): string[] {
  return Object.keys(table.details)
    .filter((topicId) => /^rogue_\d+$/.test(topicId))
    .sort(
      (left, right) =>
        Number(left.replace("rogue_", "")) - Number(right.replace("rogue_", "")),
    );
}

/** 导出指定主题；未传主题时导出 GameData 中全部 rogue_N。 */
export async function exportWrappedRelicItems(
  requestedTopicIds?: readonly string[],
): Promise<WrappedRelicExportResult[]> {
  const paths = resolveRepositoryPaths();
  const tablePath = path.join(paths.gameData, "excel", "roguelike_topic_table.json");
  const tableJson = await readFile(tablePath, "utf8");
  const table = JSON.parse(tableJson) as RoguelikeTopicTableForWrappedExport;
  // 内容哈希替代生成时间，确保 prebuild 重跑不会制造无意义 JSON diff。
  const sourceSha256 = createHash("sha256").update(tableJson).digest("hex");
  const topicIds = requestedTopicIds?.length ? [...requestedTopicIds] : topicIdsOf(table);
  const results: WrappedRelicExportResult[] = [];

  for (const topicId of topicIds) {
    const detail = table.details[topicId];
    if (!detail) throw new Error(`GameData 中不存在主题：${topicId}`);
    const artifact = buildWrappedRelicTopicArtifact({
      topicId,
      topicName: table.topics[topicId]?.name ?? topicId,
      detail,
      sourceSha256,
    });
    const outputPaths = [
      path.join(paths.root, "docs", "game", "wrapped-relics", `${topicId}.json`),
      path.join(
        paths.root,
        "packages",
        "arknights-schema-docs",
        "public",
        "data",
        "wrapped-relics",
        `${topicId}.json`,
      ),
      path.join(
        paths.root,
        "arkrog_frontend",
        "public",
        "data",
        "wrapped-relics",
        `${topicId}.json`,
      ),
    ];
    const json = `${JSON.stringify(artifact, null, 2)}\n`;
    // 三个消费者目录写入完全相同的字节，避免 docs 与 frontend 契约漂移。
    await Promise.all(
      outputPaths.map(async (outputPath) => {
        await mkdir(path.dirname(outputPath), { recursive: true });
        await writeFile(outputPath, json, "utf8");
      }),
    );
    results.push({
      topicId,
      itemCount: artifact.items.length,
      outputPaths: outputPaths.map((outputPath) => toRepositoryPath(paths.root, outputPath)),
    });
  }

  return results;
}

/** CLI 入口：`all` 或空参数导出全部主题，也可传一个或多个主题 ID。 */
const arguments_ = process.argv.slice(2).filter((argument) => argument !== "--");
const requested = arguments_.length === 0 || arguments_.includes("all") ? undefined : arguments_;
console.log(JSON.stringify(await exportWrappedRelicItems(requested), null, 2));
