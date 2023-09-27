/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns:[
            {
                hostname: 'tailus.io',
                protocol: 'https'
            },
            {
                hostname: 'unavatar.io',
                protocol: 'https'
            },
        ]
    }
}

module.exports = nextConfig
