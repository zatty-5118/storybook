import { mergeConfig } from "vite";

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: [
    '../src/**/**/*.mdx',
    '../src/**/**/*.stories.@(js|jsx|mjs|ts|tsx)'
  ],
  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-docs',
    '@storybook/addon-onboarding',
    '@storybook/addon-a11y',
    '@storybook/addon-vitest'
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  // staticDirs: ['public'], // 必要に応じてフォルダ名を変更／不要なものは外す

  viteFinal: async (storybookConfig, { configType }) => {
    return mergeConfig(storybookConfig, {
      // アセットをすべて相対パスにする
      base: '/storybook-static/',
      build: {
        // まとめて assets/ に出力
        assetsDir: 'assets',
        rollupOptions: {
          output: {
            assetFileNames: 'assets/[name].[hash][extname]',
          },
        },
      },
      assetsInclude: ["**/*.png","**/*.jpg","**/*.svg"]
      // publicDir を変えたい場合は次を有効化
      // publicDir: 'public',
    });
  },
};

module.exports = config;