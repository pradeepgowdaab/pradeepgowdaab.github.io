/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  distDir: 'build'
  // sassOptions: {
  //     includePaths: [path.join(__dirname, 'styles')],
  // },
}

module.exports = nextConfig
