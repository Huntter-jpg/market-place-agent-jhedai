/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  transpilePackages: ["framer-motion", "motion", "motion-dom", "motion-utils"],
};

export default nextConfig;
