/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    newNextLinkBehavior: true,
    images: {
      allowFutureImage: true,
    },
  },
  images: {
    domains: ['secure-content.meetupstatic.com'],
  },
}

module.exports = nextConfig
