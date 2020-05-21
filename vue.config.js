const path = require("path");
const outputPath = path.resolve(__dirname, "dist");

module.exports = {
  // mode: production,
  pages: {
    index: {
      // エントリーポイントの設定
      entry: "src/main.js",
      // テンプレートファイル HtmlWebpackPluginの設定
      template: "public/index.html",
      // 出力されるファイル名
      filename: "index.html",
      title: "Index Page",
      // chunks to include on this page, by default includes
      // extracted common chunks and vendor chunks.
      chunks: ["chunk-vendors", "chunk-common", "index"],
    },
  },
  devServer: {
    contentBase: outputPath,
  },

  configureWebpack: {},
};
