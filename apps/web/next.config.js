/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const path = require('path')

module.exports = {
  reactStrictMode: true,
  output: 'standalone',
  experimental: {
    outputFileTracingRoot: path.join(__dirname, '../../'),
    transpilePackages: ['ui'],
  },
}
