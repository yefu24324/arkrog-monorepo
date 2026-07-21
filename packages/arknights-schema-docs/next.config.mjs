import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  // fumadocs-mdx 生成的 .source/server.ts 含 top-level await，部分 TS 检查会误报 “is not a module”。
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default withMDX(config);
