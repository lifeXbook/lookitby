import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  transpilePackages: ["@workspace/ui"],
  // Next.js allows the dev server hostname (localhost) only. 127.0.0.1 is a
  // different origin, and without this entry client scripts and HMR are blocked.
  allowedDevOrigins: ["127.0.0.1"],
}

export default nextConfig
