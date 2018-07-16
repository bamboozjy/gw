var path = require("path");
var webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const PrerenderSPAPlugin = require("prerender-spa-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    publicPath: "/dist/",
    filename: "build.js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          loaders: {}
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      // {
      //   test: /\.(png|jpg|gif|svg)$/,
      //   loader: 'file-loader',
      //   options: {
      //     name: '[name].[ext]?[hash]'
      //   }
      // },
      {
        test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10000
            }
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      vue$: "vue/dist/vue.esm.js"
    },
    extensions: ["*", ".js", ".vue", ".json"]
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true
  },
  performance: {
    hints: false
  },
  devtool: "#eval-source-map"
};

if (process.env.NODE_ENV === "production") {
  module.exports.devtool = "#source-map";
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false //是否保留vue警告代码
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    new HtmlWebpackPlugin({
      template: "index.html"
    }),
    new PrerenderSPAPlugin({
      //预加载生成多个单html文件插件
      // Required - The path to the webpack-outputted app to prerender.
      staticDir: path.join(__dirname, "dist"),
      // Required - Routes to render.
      routes: [
        "/",
        "/index",
        "/home",
        "/intro",
        "/about",
        "/backstage",
        "/join",
        "/news",
        "/taobao"
      ]
    }),
    new BundleAnalyzerPlugin() //打包后分析依赖大小的插件
  ]);
}
