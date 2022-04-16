/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects:async()=>{
    return[
      {
        source:'/to-resume',
        destination:'/resume',
        permanent:true
      }
    ]
  },
  images: {
    domains: [
      "spacenews.com",
      "cdn.arstechnica.net",
      "spaceflightnow.com",
      "www.teslarati.com",
      "mars.nasa.gov",
      "www.nasa.gov",
      "www.nasaspaceflight.com",
      "upload.wikimedia.org",
      "www.esa.int",
    ],
  },
};

module.exports = nextConfig;
