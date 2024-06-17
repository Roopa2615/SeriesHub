const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  context: __dirname,
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(js$|jsx)/,
        use: ["raw-loader", "style-loader", "css-loader", "sass-loader"],
        exclude: /node_modules/
      },
      {
        test: /\.(css$|scss)/,
        use: ["style-loader", "css-loader", "sass-loader"],
        exclude: /node_modules/
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },

  plugins: [new BundleAnalyzerPlugin(), new HtmlWebPackPlugin()],

  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    port: 9000,
    compress: true,
  },

  mode: "development",
};
