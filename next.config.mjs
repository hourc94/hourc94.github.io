import path from 'path';
/** @type {import('next').NextConfig} */
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
const isProjectPages = Boolean(
  process.env.GITHUB_PAGES && repoName && !repoName.endsWith('.github.io'),
);

const nextConfig = {
  output: process.env.GITHUB_PAGES ? "export" : "standalone",
  distDir: process.env.NODE_ENV === "production" ? ".next-prod" : ".next",
  basePath: isProjectPages ? `/${repoName}` : undefined,
  assetPrefix: isProjectPages ? `/${repoName}/` : undefined,
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true
  }
};
export default nextConfig;
