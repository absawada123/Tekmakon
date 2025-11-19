/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Tells Next.js to generate static HTML files
  images: {
    unoptimized: true, // Required for static export (GitHub Pages)
  },
};

export default nextConfig;