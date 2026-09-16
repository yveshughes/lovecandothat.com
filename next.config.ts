import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // The old water page became the immersion page.
      { source: "/roatan", destination: "/immersion", permanent: true },
      // The old research page moved behind the password.
      { source: "/reading", destination: "/private", permanent: true },
    ];
  },
};

export default nextConfig;
