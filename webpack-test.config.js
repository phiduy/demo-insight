// const path = require('path');
// const paths = require('./paths');
// const webpack = require('webpack');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const Dotenv = require('dotenv-webpack');
// const deps = require('./package.json').dependencies;

// const OUTPUT_DIR = path.resolve(__dirname, 'dist');

// module.exports = {
//   entry: path.resolve(__dirname, './src/index.js'),
//   mode: 'development',
//   target: 'web',

//   devServer: {
//     historyApiFallback: true,
//     contentBase: OUTPUT_DIR,
//     port: 3000,
//     open: true,
//     compress: true,
//     hot: true
//   },
//   devtool: 'eval-cheap-source-map',
//   output: {
//     path: OUTPUT_DIR,
//     publicPath: '/'
//   },
//   resolve: {
//     modules: [paths.appSrc, 'node_modules'],
//     extensions: ['.js', '.jsx', '.json'],
//     fallback: {
//       stream: require.resolve('stream-browserify'),
//       zlib: require.resolve('browserify-zlib')
//     },
//     alias: {
//       '~': paths.appSrc
//     }
//   },
//   module: {
//     rules: [
//       {
//         test: /\.jsx?$/,
//         exclude: /node_modules/,
//         include: paths.appSrc,
//         use: {
//           loader: 'babel-loader'
//         }
//       },
//       {
//         test: /\.(s[ac]|c)ss$/i,
//         use: [
//           {
//             loader: 'style-loader'
//           },
//           {
//             loader: 'css-loader'
//           }
//         ]
//       },
//       { test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, type: 'asset/inline' },
//       {
//         test: /\.(png|jpe?g|gif|svg)$/i,
//         type: 'asset',
//         use: {
//           loader: 'file-loader'
//         }
//       },
//       {
//         test: /\.md$/,
//         use: 'raw-loader'
//       }
//     ]
//   },
//   plugins: [
//     new Dotenv(),
//     new webpack.HotModuleReplacementPlugin(),
//     new CopyWebpackPlugin({
//       patterns: [
//         {
//           from: './src/assets/static',
//           to: 'static'
//         },
//         {
//           from: './src/assets/favicon',
//           to: 'favicon'
//         },
//         {
//           from: './src/assets/fonts',
//           to: 'fonts'
//         },
//         {
//           from: './src/assets/locales',
//           to: 'locales'
//         }
//       ]
//     }),
//     new MiniCssExtractPlugin(),
//     new HtmlWebpackPlugin({
//       favicon: paths.appSrc + '/assets/static/brand/logo_ftel.png',
//       template: paths.appSrc + '/index.html' // template file
//     })
//   ]
// };
