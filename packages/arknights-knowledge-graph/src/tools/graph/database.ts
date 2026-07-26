import { mkdir, rm } from "node:fs/promises";
import path from "node:path";

import kuzu, {
  type Connection,
  type KuzuValue,
  type QueryResult,
} from "kuzu";

import type { RepositoryPaths } from "../types.js";

/** 一个同时持有数据库与连接的资源句柄。 */
export interface GraphHandle {
  /** Kuzu 数据库对象。 */
  database: InstanceType<typeof kuzu.Database>;
  /** Kuzu 查询连接。 */
  connection: Connection;
}

/** 防止重建命令删除仓库外目录或仓库根目录。 */
function assertSafeDatabasePath(paths: RepositoryPaths): void {
  const relative = path.relative(paths.root, paths.database);
  if (!relative || relative.startsWith("..") || path.isAbsolute(relative)) {
    throw new Error(`数据库路径必须位于仓库内且不能是仓库根目录：${paths.database}`);
  }
}

/** 打开 Kuzu 数据库，并按需安全地清理旧数据库。 */
export async function openGraph(
  paths: RepositoryPaths,
  recreate = false,
): Promise<GraphHandle> {
  assertSafeDatabasePath(paths);
  if (recreate) {
    await rm(paths.database, { recursive: true, force: true });
  }
  await mkdir(path.dirname(paths.database), { recursive: true });

  const database = new kuzu.Database(paths.database);
  const connection = new kuzu.Connection(database);
  await database.init();
  await connection.init();
  return { database, connection };
}

/** 按正确顺序释放 Kuzu 资源。 */
export async function closeGraph(handle: GraphHandle): Promise<void> {
  await handle.connection.close();
  await handle.database.close();
}

/** 把查询结果统一展开为普通对象数组，并立即释放原生结果集。 */
export async function rowsFromResult(
  result: QueryResult | QueryResult[],
): Promise<Record<string, KuzuValue>[]> {
  const results = Array.isArray(result) ? result : [result];
  const rows: Record<string, KuzuValue>[] = [];
  for (const entry of results) {
    rows.push(...(await entry.getAll()));
    entry.close();
  }
  return rows;
}

/** 使用参数化 Cypher 执行批量写入。 */
export async function executeBatch(
  connection: Connection,
  statement: string,
  rows: Record<string, KuzuValue>[],
  batchSize = 500,
): Promise<void> {
  const prepared = await connection.prepare(statement);
  if (!prepared.isSuccess()) {
    throw new Error(`无法准备 Kuzu 写入语句：${prepared.getErrorMessage()}`);
  }

  for (let offset = 0; offset < rows.length; offset += batchSize) {
    const result = await connection.execute(prepared, {
      rows: rows.slice(offset, offset + batchSize),
    });
    const results = Array.isArray(result) ? result : [result];
    results.forEach((entry) => entry.close());
  }
}
