/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns:[
            {
                hostname: 'unavatar.io',
                protocol: 'https'
            }
        ]
    }
}

module.exports = nextConfig
