/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  distDir: '_static',
  images: {
    // unoptimized: true,
    loader: 'custom',
    loaderFile: './ImageLoader.js',
  },
}

module.exports = nextConfig
