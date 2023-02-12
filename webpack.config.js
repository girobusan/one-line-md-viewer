var WebpackBundleSizeAnalyzerPlugin = require('webpack-bundle-size-analyzer').WebpackBundleSizeAnalyzerPlugin;
const CopyPlugin = require("copy-webpack-plugin");
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');
const pkg = require('./package.json');


const env = process.env.NODE_ENV;

module.exports = function (env, argv) {

  let builddir = argv.mode== 'production' ? 'dist' : 'test';

  return {
    //externals: ["fs"],
    watch: argv.mode != 'production',
    target: 'web',
    optimization: {

    },

    mode: argv.mode,
    entry: {
      "view": './src/view.js',
    },
    devtool: argv.mode != "production" ? 'inline-source-map' : false, 
    // devServer: argv.mode != "production" ? {contentBase: 'dist'} : {contentBase: 'dist'},

    output: {
    //   filename: '[name].js',
      path: path.resolve(__dirname, builddir, "")
    },

    module: {
      rules: [

        {
          test: /\.svg$/,
          type: 'asset/inline'
        },

        {
          test: /\.(less|css|scss)$/,
          use: [
            'style-loader' ,
            'css-loader',
            'sass-loader'
          ],
        },
        {
          test: /\.(woff|ttf)$/,
          use: [{
            loader: 'file-loader',
            options: {
              name: 'fonts/[name].[ext]'
            }
          }
          ],
        }
      ]

    },
    plugins: [
      new webpack.DefinePlugin({
        // Definitions...
        'VERSION': JSON.stringify(pkg.version)
      }),
      new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css"
      }),
new CopyPlugin({
      patterns: [
        { from: "src/readme.html", to: "readme.html" },
      ],
    }),
      // new HtmlWebpackPlugin({

      //   chunks: ["mdsite"],
      //   filename: 'index.html',
      //   minify: false,
      //   inject: false,
      //   template: path.join(__dirname, "src/templates/index.ejs"),
      // }
      // ),
      // new InlineChunkHtmlPlugin(HtmlWebpackPlugin, [/loader/]),

    ],
  };
}
