/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['placeimg.com', 'images.unsplash.com', 'i.pravatar.cc'],
  },
};
