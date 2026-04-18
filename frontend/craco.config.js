const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Replace CSS Minimizer with clean-css minifier
      webpackConfig.optimization.minimizer = webpackConfig.optimization.minimizer.filter(
        (minimizer) => minimizer.constructor.name !== 'CssMinimizerPlugin'
      );

      // Add CSS Minimizer using clean-css instead of cssnano
      webpackConfig.optimization.minimizer.push(
        new CssMinimizerPlugin({
          minify: CssMinimizerPlugin.cleanCssMinify,
          minimizerOptions: {
            level: {
              1: {
                all: true,
              },
              2: {
                restructureRules: true,
              },
            },
          },
        })
      );

      return webpackConfig;
    },
  },
};
