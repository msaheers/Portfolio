//** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Ignore ESLint errors during build (for Vercel)
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true, // since we use normal <img>
  },
  reactStrictMode: true,
};

export default nextConfig;
