/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'lojaintegrada.com.br',
                pathname: '/**',
                port: '',
            },
            {
                protocol: 'https',
                hostname: 'apod.nasa.gov',
                pathname: '/**',
                port: '',
            }
        ],
    }


};

export default nextConfig;
