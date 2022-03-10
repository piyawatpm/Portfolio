/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['spacenews.com','cdn.arstechnica.net','spaceflightnow.com','www.teslarati.com','mars.nasa.gov','www.nasa.gov'],
  },
}

module.exports = nextConfig
