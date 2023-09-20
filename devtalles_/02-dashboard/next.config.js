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
        ]
    }
}

module.exports = nextConfig
