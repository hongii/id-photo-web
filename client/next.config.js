/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  output: 'standalone',
  eslint: {
    dirs: ['.'],
  },
  async rewrites() {
    return [
      {
        source: '/aws/:path*',
        destination: `https://dpus62qeqc.execute-api.ap-northeast-2.amazonaws.com/:path*`,
      },
      {
        source: '/s3/:path*',
        destination: `https://sweetndata-barbershop.s3.amazonaws.com/:path*`,
      },
      {
        source: '/clip/:path*',
        destination: `https://clipdrop-api.co/:path*`,
      },
      {
        source: '/:path*',
        destination: `https://ai-result-rapidapi.ailabtools.com/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
