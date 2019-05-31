const dev = process.env.NODE_ENV !== 'production';
console.log('next config', dev)
module.exports = {
  // webpack: (config, options) => {
  //   config.module.rules.push({
  //     test: /\.mdx/,
  //     use: [
  //       options.defaultLoaders.babel,
  //       {
  //         loader: '@mdx-js/loader',
  //         options: pluginOptions.options
  //       }
  //     ]
  //   });

  //   return config;
  // }
  presets: ['next/babel'],
  plugins: [
    ['styled-components', { ssr: true, displayName: true, preprocess: false }],
  ],
};