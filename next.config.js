// Css, Sass import 사용
const withSass = require('@zeit/next-sass')
const withCss = require('@zeit/next-css')

require('dotenv').config()
const path = require('path')
const Dotenv = require('dotenv-webpack')

module.exports = withSass(withCss({
  target: 'serverless',
  
  env: {
    customKey: '커스텀 키'
  },
  webpack: config => {

    // 1번 .env 파일 방법
    config.plugins = config.plugins || []

    config.plugins = [
      ...config.plugins,

      // Read the .env file
      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true
      })
    ]

   
   
    return config
  }
}))
