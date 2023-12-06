/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'midu.dev'
      },
      {
        protocol: 'https',
        hostname: 'swiperjs.com'
      }
    ]
  }
}
