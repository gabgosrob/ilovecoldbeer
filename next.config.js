/** @type {import('next').NextConfig} */

const securityHeaders = [
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },
  {
    key: 'Content-Security-Policy',
    value: `frame-ancestors 'self'`
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  }  
]

const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders
      }
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
        pathname: '/u/**',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '**'
      }
    ],
  },
}

module.exports = nextConfig
