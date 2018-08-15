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
  storybookBaseConfig.devtool = 'source-map'

  storybookBaseConfig.module.rules[0].include.push(
    //nodeModule('react-native-vector-icons')
    nodeModule("react-native-material-ripple") 
  )

  console.log(JSON.stringify(storybookBaseConfig, null, 2))

  storybookBaseConfig.module.rules.push({
    test: /\.(gif|jpe?g|png|svg)$/,
    use: {
      loader: 'url-loader',
      options: { name: '[name].[ext]' }
    }
  }, {
    test: /\.ttf$/,
    include: path.resolve(nodeModule("react-native-vector-icons")  + '/../Fonts'),
    loader: 'url-loader',
  });


  // storybookBaseConfig.node.fs = true
  // storybookBaseConfig.node.module = true
  storybookBaseConfig.node = {
    fs: 'empty',
    module: 'empty'

    // See "Other node core libraries" for additional options.
  }

  storybookBaseConfig.resolve.extensions = ['.web.js', '.js', '.json', '.web.jsx', '.jsx'];

  storybookBaseConfig.resolve.alias = {
    'react-native': 'react-native-web',
    'react-native-animatable': '@micimize/react-native-animatable',
    '@material-ui/core': path.resolve(__dirname, '../src'),
  };

  return storybookBaseConfig;
};
