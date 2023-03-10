// @ts-check
const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "cdnjs.cloudflare.com",
      // HACK: using discord as a cdn... temporarily... hopefully
      "cdn.discordapp.com",
    ],
  },
};

const compose = (initial, fns) => fns.reduce((acc, fn) => fn(acc), initial);

module.exports = () => {
  const plugins = [withContentlayer];
  const config = compose(nextConfig, plugins);

  return config;
};
