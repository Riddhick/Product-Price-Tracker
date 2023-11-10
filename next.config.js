/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        output: 'export',
        remotePatterns:[
            {
                protocol:'https',
                hostname:'m.media-amazon.com',
                port:'',
                pathname:'/images/I/*',
            }
        ]
    }
}

module.exports = nextConfig
