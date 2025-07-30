import { create } from 'storybook/theming';
import storybookLogo from "/public/images/logo/logo.svg";

export default create({
  base: "light",

  // フォント
  fontBase: '"Noto Sans JP", sans-serif',
  fontCode: 'monospace',

  // 左上のStorybookのロゴが入っていたエリア
  brandTitle: "zatty's Storybook",
  brandUrl: "https://zatty-5118.github.io/stroybook/",
  brandImage: storybookLogo,
  brandTarget: '_self',

  // カラー
  colorSecondary: "#B18A8B",
  
  // UI
  appBg: "#eae0e0", // サイドナビ背景
  appContentBg: "black", // 下部のタブパネルエリア背景
  appPreviewBg: 'whitesmoke', // プレビューエリア背景
  // // appBorderColor: 'white', // ボーダーカラー
  // // appBorderRadius: 20, // 角丸

  // テキストカラー
  textColor: "black",
  textInverseColor: "white",

  // ツールバー（下部のタブパネル）
  barTextColor: "#333", // タブタイトルテキスト
  barSelectedColor: "#B18A8B", // 選択中のタブ
  barHoverColor: "#B18A8B", // タブホバー中の下線
  // barBg: "#eae0e0", // タブバーの背景

  // // // フォームカラー
  // inputBg: 'lightsalmon', // input背景
  // // inputBorder: 'purple', // inputボーダー
  // // inputTextColor: 'salmon', // inputテキスト
  // // inputBorderRadius: 9999, // inputの角丸
});
