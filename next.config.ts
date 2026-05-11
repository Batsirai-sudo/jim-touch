import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    turbopack: {
        root: __dirname,
    },
    // cssModules: {
    //     exportLocalsConvention: 'camelCase',
    // },
};

export default nextConfig;
