/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/MetaReview',
  assetPrefix: '/MetaReview/',
}

module.exports = nextConfig 