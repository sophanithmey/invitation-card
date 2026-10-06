import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'api.qrserver.com',
      },
      {
        protocol: 'https',
        hostname: 'drxsceol5sg8q.cloudfront.net',
      },
      {
        protocol: 'https',
        hostname: 'tminspired.com',
      },
    ],
  },
};

export default nextConfig;
