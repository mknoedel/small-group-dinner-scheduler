/** @type {import('next').NextConfig} */

const nextConfig = {
  // output: 'export', // Use this if you want to create "static generated website" (SSG), result in "/out" folder
  trailingSlash: true,
  images: { unoptimized: true },
  poweredByHeader: false,
  // You can add custom env variables here as well as in the .env file
  env: {
    // AUTH0_BASE_URL: process.env.VERCEL_URL || process.env.AUTH0_BASE_URL,
  },
  reactStrictMode: true, // false
};

export default nextConfig;
