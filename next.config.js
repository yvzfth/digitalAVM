/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { domains: ['picsum.photos', 'googleusercontent.com'] },
  env: {
    LOCATION_IQ_ACCESS_TOKEN: process.env.LOCATION_IQ_ACCESS_TOKEN,
    ABSTRACTAPI_API_KEY: process.env.ABSTRACTAPI_API_KEY,
  },
};

module.exports = nextConfig;
