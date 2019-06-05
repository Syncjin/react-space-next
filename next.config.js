// Css, Sass import 사용
const withSass = require('@zeit/next-sass')
const withCss = require('@zeit/next-css')

require('dotenv').config()
const path = require('path')
const Dotenv = require('dotenv-webpack')

module.exports = withSass(withCss({
  target: 'serverless',
  
  webpack: config => {

    config.plugins = config.plugins || []

    config.plugins = [
      ...config.plugins,

      // Read the .env file
      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true
      })
    ]
    // config.module.rules.push(
    //   {
    //     test: /\.css$/,
    //     use: [
    //       'style-loader',
    //       {
    //         loader: 'css-loader',
    //         options: {
    //           modules: true,
    //           importLoaders: 1,
    //           localIdentName:"[name]_[local]_[hash:base64]",
    //           sourceMap: true,
    //         }
    //       }
    //     ]
    //   },
    //   {
    //     test: /\.scss$/,
    //     use: [
    //       'style-loader',
    //       {
    //         loader: 'css-loader',
    //         options: {
    //           modules: true,
    //           importLoaders: 1,
    //           localIdentName:"[name]_[local]_[hash:base64]",
    //           sourceMap: true,
    //         }
    //       },
    //       'sass-loader'
    //     ]
    //    }
    // )
   
    return config
  }
}))
