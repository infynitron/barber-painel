import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  reactCompiler: true,
  rewrites() {
    return [
      {
        source: "/cliente",
        destination: "/customer",
      },
      {
        source: "/barbeiro",
        destination: "/producer",
      },
    ];
  },
};

export default nextConfig;
