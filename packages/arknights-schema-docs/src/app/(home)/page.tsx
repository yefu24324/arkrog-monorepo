import Link from 'next/link';

/** 文档站首页：引导进入类型与游戏数据浏览页面。 */
export default function HomePage() {
  return (
    <div className="flex flex-col justify-center text-center flex-1 px-6">
      <h1 className="text-3xl font-bold mb-3">Arknights 数据与类型</h1>
      <p className="text-fd-muted-foreground mb-6 max-w-xl mx-auto">
        浏览直接由 TypeScript/JSDoc 生成的 Schema 类型说明，以及知识图谱导出的藏品乘区数据。
      </p>
      <p>
        <Link
          href="/docs"
          className="inline-flex items-center rounded-md bg-fd-primary px-4 py-2 text-fd-primary-foreground font-medium"
        >
          打开文档
        </Link>
      </p>
    </div>
  );
}
