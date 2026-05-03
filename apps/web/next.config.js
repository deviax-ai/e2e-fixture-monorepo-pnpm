/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  // pnpm workspace dependencies need to be transpiled by Next.
  transpilePackages: ["@app/shared"],
};

module.exports = nextConfig;
