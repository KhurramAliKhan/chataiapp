module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src/'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          test: './test',
          underscore: 'lodash',
          '@src': './src',
          '@screens': './src/screens',
          '@theme': './src/theme',
          '@style': './src/style',
          '@utils': './src/utils',
          '@assets': './src/assets',
          '@commonComponents': './src/commonComponents',
          '@otherComponent': './src/otherComponent',
          '@config': './src/config',
          '@redux': './src/redux',
          '@App': './App',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
