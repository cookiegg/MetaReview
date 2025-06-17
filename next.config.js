/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/paperinsight',
  assetPrefix: '/paperinsight/',
}

module.exports = nextConfig 