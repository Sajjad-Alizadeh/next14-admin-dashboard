/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "negativespace.co",
            }
        ]
    }
}

module.exports = nextConfig
