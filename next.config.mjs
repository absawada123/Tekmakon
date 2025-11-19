/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/Tekmakon", // <-- Replace "tekmakon" with your ACTUAL repo name if different
  assetPrefix: "/Tekmakon", // <-- Replace "tekmakon" with your ACTUAL repo name
};

export default nextConfig;