import type { NextConfig } from "next";

// Project Pages URL: https://sarpsusuzer.github.io/pinarsusuzer/
// When www.pinarsusuzer.com is released from pinarsusuzer/pinarsusuzer
// and pointed here, set NEXT_PUBLIC_BASE_PATH="" (empty) for a root deploy.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "/pinarsusuzer";

const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath || undefined,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
