import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import replace from 'rollup-plugin-replace';
import nodeGlobals from 'rollup-plugin-node-globals';
import { uglify } from 'rollup-plugin-uglify';
import { sizeSnapshot } from 'rollup-plugin-size-snapshot';
import json from 'rollup-plugin-json';

const input = './src/index.js';
const name = 'material-ui';
const globals = {
  react: 'React',
  'react-dom': 'ReactDOM',
};
const babelOptions = {
  exclude: /node_modules\/(?!(react-native-vector-icons))/,
  // We are using @babel/plugin-transform-runtime
  runtimeHelpers: true,
};
const commonjsOptions = {
  ignoreGlobal: true,
  include: /node_modules/,
};

const jsonPlugin = json({
  include: [
    '../../node_modules/react-native-vector-icons/**',
    '../../node_modules/css-property-parser/**',
  ]
})

export default [
  {
    input,
    output: { file: `build/umd/${name}.development.js`, format: 'umd', name, globals },
    external: Object.keys(globals),
    plugins: [
      jsonPlugin,
      nodeResolve(),
      babel(babelOptions),
      commonjs(commonjsOptions),
      nodeGlobals(),
      replace({ 'process.env.NODE_ENV': JSON.stringify('development') }),
    ],
  },
  {
    input,
    output: { file: `build/umd/${name}.production.min.js`, format: 'umd', name, globals },
    external: Object.keys(globals),
    plugins: [
      jsonPlugin,
      nodeResolve(),
      babel(babelOptions),
      commonjs(commonjsOptions),
      nodeGlobals(),
      replace({ 'process.env.NODE_ENV': JSON.stringify('production') }),
      sizeSnapshot(),
      // TODO  breaks build uglify(),
    ],
  },
];
