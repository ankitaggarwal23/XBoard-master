const webpack = require('webpack')

module.exports = {
  publicPath: '/XBoard/',

  outputDir: 'docs',
 
  assetsDir: '',
  productionSourceMap: false,

  css: {
    loaderOptions: {
      less: {

        javascriptEnabled: true
      }
    }
  },
  configureWebpack: {
    output: {

      chunkFilename: '[name].[chunkhash].js'
    }
  },
  chainWebpack: config => {
    config
      .plugin('provide')
      .use(webpack.ProvidePlugin, [{
        'window.Quill': 'quill'
      }]);
  }
}
