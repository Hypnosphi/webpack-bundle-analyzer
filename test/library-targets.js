const config = require('./library-targets.webpack.config');

const libraryTargets = [
  'var',
  'assign',
  'this',
  'window',
  'global',
  'commonjs',
  'commonjs2',
  'amd',
  'amd-require',
  'umd',
  'system',
  'jsonp'
];

describe('libraryTarget values', () => {
  forEachWebpackVersion(({it, webpackCompile}) => {
    for (const libraryTarget of libraryTargets) {
      it(`should parse chunk contents with libraryTarget: '${libraryTarget}'`, async () => {
        await webpackCompile(config({libraryTarget}));
      });
    }
  });
});
