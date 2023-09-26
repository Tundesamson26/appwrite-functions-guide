/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    env: {
      APPWRITE_PROJECT_ID: process.env.APPWRITE_PROJECT_ID,
      APPWRITE_API_ENDPOINT: process.env.APPWRITE_API_ENDPOINT,
      APPWRITE_API_KEY: process.env.APPWRITE_API_KEY
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
