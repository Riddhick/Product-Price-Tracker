/** @type {import('next').NextConfig} */
const nextConfig = {

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
