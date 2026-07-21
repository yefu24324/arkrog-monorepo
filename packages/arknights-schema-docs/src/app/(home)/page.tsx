import Link from 'next/link';

/** 文档站首页：引导进入自动生成的类型浏览器。 */
export default function HomePage() {
  return (
    <div className="flex flex-col justify-center text-center flex-1 px-6">
      <h1 className="text-3xl font-bold mb-3">Arknights Schema</h1>
      <p className="text-fd-muted-foreground mb-6 max-w-xl mx-auto">
        浏览 <code>@arkrog/arknights-schema</code> 的 TypeScript 类型、Zod Schema
        对应关系与中文说明；字段中的自定义类型可直接跳转。
      </p>
      <p>
        <Link
          href="/docs"
          className="inline-flex items-center rounded-md bg-fd-primary px-4 py-2 text-fd-primary-foreground font-medium"
        >
          打开类型文档
        </Link>
      </p>
    </div>
  );
}
