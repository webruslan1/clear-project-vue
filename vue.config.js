const path = require('path');

module.exports = {
  devServer: {
    // disableHostCheck: true,
    // port: 8080,
    // host: '0.0.0.0',
    proxy: {
      '/api/': {
        target: 'https://bananarust.com',
        changeOrigin: true,
        secure: true,
      },
    },
  },

  // productionSourceMap: false,
  css: {
    loaderOptions: {
      sass: {
        sassOptions: {
          includePaths: ['./node_modules'],
        },
      },
    },
  },
  chainWebpack: (config) => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];
    types.forEach((type) => addStyleResource(config.module.rule('scss').oneOf(type)));
  },
};

function addStyleResource(rule) {
  rule
    .use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [path.resolve(__dirname, './src/assets/scss/global.scss')],
    });
}
