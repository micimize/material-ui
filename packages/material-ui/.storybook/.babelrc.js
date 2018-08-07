module.exports = {
  presets: [
    ['@babel/preset-stage-1', { loose: true }],
    '@babel/preset-react',
    '@babel/flow',
  ],
  plugins: ['react-native-web'],
};
