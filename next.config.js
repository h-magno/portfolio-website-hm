
/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@react-three/fiber', '@types/three', 'three' ],
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig