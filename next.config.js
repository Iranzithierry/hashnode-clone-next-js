/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "**.*.*",
        },
        {
          protocol: "https",
          hostname: "**.**.*.*",
        },
        {
          protocol: "https",
          hostname: "cdn.hashnode.com",
        },
      ],
  },
}

module.exports = nextConfig
