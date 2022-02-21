/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    serverRuntimeConfig: {
      uniform: {
        apiKey: process.env.UNIFORM_API_KEY,
        previewSecret: process.env.UNIFORM_PREVIEW_SECRET
      }
    },
    publicRuntimeConfig: {
      uniform: {
        projectId: process.env.UNIFORM_PROJECT_ID
      }
    }
  }
  
  module.exports = nextConfig
  