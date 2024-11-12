import type { NextConfig } from 'next'

const repoName = '/works'

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export', // static export
  images: { unoptimized: true },
  assetPrefix: repoName,
  basePath: repoName,
}

export default nextConfig
