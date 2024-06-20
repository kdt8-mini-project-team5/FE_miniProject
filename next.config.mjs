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
};

export default nextConfig;
