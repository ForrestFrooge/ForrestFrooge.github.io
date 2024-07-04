/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",  // <=== enables static exports
    reactStrictMode: true,
    assetPrefix:"",
    images: { unoptimized: true }
  };
  
module.exports = nextConfig;