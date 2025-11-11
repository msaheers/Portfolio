/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // ⛔ Ignore ESLint errors during Vercel build
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true, // (Optional) if you’re using normal <img> instead of <Image />
  },
};

export default nextConfig;
