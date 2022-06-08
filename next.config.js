/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  env: {
    DICT_TOKEN: process.env.DICT_TOKEN
  }
}

module.exports = nextConfig
