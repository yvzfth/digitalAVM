/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    LOCATION_IQ_ACCESS_TOKEN: process.env.LOCATION_IQ_ACCESS_TOKEN,
  },
};

module.exports = nextConfig;
