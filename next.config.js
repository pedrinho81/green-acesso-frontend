/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['rickandmortyapi.com','img.icons8.com']
  },
  
}

module.exports = nextConfig
