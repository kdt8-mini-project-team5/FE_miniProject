/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    const newConfig = {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
        },
      },
    };

    if (isServer) {
      if (Array.isArray(newConfig.resolve.alias)) {
        newConfig.resolve.alias.push({ name: 'msw/browser', alias: false });
      } else {
        newConfig.resolve.alias['msw/browser'] = false;
      }
    } else if (Array.isArray(newConfig.resolve.alias)) {
      newConfig.resolve.alias.push({ name: 'msw/node', alias: false });
    } else {
      newConfig.resolve.alias['msw/node'] = false;
    }
    return newConfig;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.pixabay.com',
      },
      {
        protocol: 'https',
        hostname: 'yaimg.yanolja.com',
      },
      {
        protocol: 'http',
        hostname: 'tong.visitkorea.or.kr',
      },
    ],
  },
};

export default nextConfig;
