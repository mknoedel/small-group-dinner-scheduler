/** @type {import('next').NextConfig} */

const nextConfig = {
  // output: 'export', // Use this if you want to create "static generated website" (SSG), result in "/out" folder
  trailingSlash: true,
  images: { unoptimized: true },
  poweredByHeader: false,
  // You can add custom env variables here as well as in the .env file
  env: {},
  reactStrictMode: true, // false
};

export default nextConfig;
