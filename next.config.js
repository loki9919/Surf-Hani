/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  distDir: 'out',
  images: {
    unoptimized: true
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Surf-Hani' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/Surf-Hani' : '',
}

module.exports = nextConfig 