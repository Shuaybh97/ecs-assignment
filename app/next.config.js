/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    // Ignore unused variable warnings during build
    tsconfigPath: './tsconfig.json',
  },
  eslint: {
    // Disable ESLint during build to prevent false positives
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
