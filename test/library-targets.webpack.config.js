const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');

module.exports = ({libraryTarget}) => ({
  mode: 'production',
  output: {
    library: 'MyLibrary',
    libraryTarget,
    filename: `${libraryTarget}.js`
  },
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      reportFilename: 'report.html',
      openAnalyzer: false
    })
  ]
});
