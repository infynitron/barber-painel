import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
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
