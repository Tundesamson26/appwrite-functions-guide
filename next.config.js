/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    env: {
      PROJECT_ID: process.env.PROJECT_ID,
      API_ENDPOINT: process.env.ENDPOINT,
      API_KEY: process.env.API_KEY
    },
    webpack: (config, { isServer }) => {
      if (!isServer) {
          // don't resolve 'fs' module on the client to prevent this error on build --> Error: Can't resolve 'fs'
          config.resolve.fallback = {
              fs: false
          }
      }
      return config;
  }
  }
  module.exports = nextConfig
