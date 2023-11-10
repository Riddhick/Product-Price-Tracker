/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images:{
        unoptimized: true ,
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
