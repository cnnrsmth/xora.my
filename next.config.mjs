/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Required for static export
  },
  // basePath: '/xora.my', // Uncomment if your repo isn't at root domain
};

export default nextConfig;
