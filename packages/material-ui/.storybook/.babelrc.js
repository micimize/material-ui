module.exports = {
  presets: [
  //['@babel/preset-stage-1', { loose: true }],
  //'@babel/preset-react',
  //'@babel/flow',
    require.resolve('babel-preset-react-native')
  ],
  plugins: [require.resolve('babel-plugin-react-native-web')],
};
