import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/sdk",
        destination: "/hyperagent",
        permanent: true,
      },
      {
        source: "/sdk/:path*",
        destination: "/hyperagent",
        permanent: true,
      },
      {
        source: "/aa-hyperwallet",
        destination: "/hyperagent",
        permanent: true,
      },
      {
        source: "/aa-hyperwallet/:path*",
        destination: "/hyperagent",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
