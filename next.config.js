/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
    deviceSizes: [640, 750, 828, 1080, 1200], // Reduced from default
    imageSizes: [16, 32, 48, 64, 96],         // Reduced from default
    formats: ['image/webp'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Add aggressive caching headers
  async headers() {
    return [
      {
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/images/hero/(.*).webm',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'Content-Type',
            value: 'video/webm',
          }
        ],
      },
    ];
  },
};

module.exports = nextConfig;
