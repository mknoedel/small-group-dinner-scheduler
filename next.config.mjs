/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export', // Use this if you want to create "static generated website" (SSG), result in "/out" folder
  trailingSlash: true,
  images: { unoptimized: true },
  env: {
    // You can add custom env variables here as well as in the .env file
    AUTHOR: 'Michael Knoedel',
  },
  reactStrictMode: true, // false
};

export default nextConfig;
