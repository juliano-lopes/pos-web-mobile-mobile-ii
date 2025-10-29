module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // ADICIONE ESTA LINHA: ESSENCIAL para o SDK 54 e Reanimated v3+
      'react-native-reanimated/plugin', 
    ],
  };
};