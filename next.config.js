/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['spacenews.com','cdn.arstechnica.net','spaceflightnow.com','www.teslarati.com','mars.nasa.gov','www.nasa.gov','www.nasaspaceflight.com','upload.wikimedia.org','www.esa.int'],
  },
}

module.exports = nextConfig
