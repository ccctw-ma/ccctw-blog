/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "avatars.githubusercontent.com",
                port: "",
                pathname: "/u/**",
            },
        ],
    },
    output: "export",
    experimental: {
        mdxRs: true,
    },
};

const withMDX = require("@next/mdx")();
module.exports = withMDX(nextConfig);
