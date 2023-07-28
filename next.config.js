/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['picsum.photos', 'googleusercontent.com', 'th.bing.com'],
  },
  env: {
    LOCATION_IQ_ACCESS_TOKEN: process.env.LOCATION_IQ_ACCESS_TOKEN,
    ABSTRACTAPI_API_KEY: process.env.ABSTRACTAPI_API_KEY,
  },
};

module.exports = nextConfig;
