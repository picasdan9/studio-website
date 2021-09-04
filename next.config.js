const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  reactStrictMode: true,
  basePath: isProd ? '/night-personal-site' : '',
  assetPrefix: isProd ? '/night-personal-site/' : '',
};
