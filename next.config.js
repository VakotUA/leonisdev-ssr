/** @type {import('next').NextConfig} */

const nextTranslate = require('next-translate')

const nextConfig = {
  swcMinify: true,
  ...nextTranslate(),
}

module.exports = nextConfig
