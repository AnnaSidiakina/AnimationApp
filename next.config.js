/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["image.tmdb.org"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.tmdb.org",
        port: "",
        pathname: "/t/p/w200**",
      },
    ],
  },
};

module.exports = nextConfig;
