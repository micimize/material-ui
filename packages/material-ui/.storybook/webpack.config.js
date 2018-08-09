const path = require('path');
const webpack = require('webpack');

const nodeModule = mod => path.dirname(require.resolve(mod))

const babelOptions = require('./.babelrc.js')

module.exports = storybookBaseConfig => {
  storybookBaseConfig.module.rules[0].query = babelOptions

  /*
  storybookBaseConfig.resolve = Object.assign(
    {},
    storybookBaseConfig.resolve || {},
    {
      alias: {
        'react-native$': 'react-native-web',
        'react-native-svg': 'svgs',
      },
    }
  )
  */

  storybookBaseConfig.module.rules[0].include.push(
    nodeModule('react-native-animatable')
  )

  storybookBaseConfig.module.rules.push({
    test: /\.(gif|jpe?g|png|svg)$/,
    use: {
      loader: 'url-loader',
      options: { name: '[name].[ext]' }
    }
  });

  storybookBaseConfig.resolve.extensions = ['.web.js', '.js', '.json', '.web.jsx', '.jsx'];

  storybookBaseConfig.resolve.alias = {
    'react-native': 'react-native-web',
    '@material-ui/core': path.resolve(__dirname, '../src'),
  };

  return storybookBaseConfig;
};
