import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
    output: "export",
    trailingSlash: true,
    images: {
        unoptimized: true,
    },
    transpilePackages: ["@splinetool/react-spline", "@splinetool/runtime"],
    webpack: (config) => {
        config.resolve.alias = {
            ...config.resolve.alias,
            "@splinetool/react-spline/next": path.resolve(
                "./node_modules/@splinetool/react-spline/dist/react-spline-next.js"
            ),
        };
        return config;
    },
};

export default nextConfig;
