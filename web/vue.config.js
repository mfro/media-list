const { ProvidePlugin } = require('webpack');

module.exports = {
  publicPath: '',

  outputDir: 'dist',

  pages: {
    index: {
      title: 'media',
      entry: 'src/main.ts',
      filename: 'index.html',
      template: 'src/main.html',
    },
  },

  devServer: {
    disableHostCheck: true,
  },

  configureWebpack: {
    resolve: {
      symlinks: false,
    },
  },
};
