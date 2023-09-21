/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns:[
            {
                hostname: 'unavatar.io',
                protocol: 'https'
            },
            {
                hostname: 'pokeapi.co',
                protocol: 'https'
            },
            {
                hostname: 'midu.dev',
                protocol: 'https'
            },
            {
                hostname: 'raw.githubusercontent.com',
                protocol: 'https'
            },
        ]
    }
}

module.exports = nextConfig
