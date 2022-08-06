const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, '..', './src/index.tsx'),
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.png'],
    alias: {
      '@': require('path').resolve(__dirname, '..', 'src'),
    },
  },
  optimization: {
    runtimeChunk: true,
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          name: 'vendor',
          test: /node_modules/,
          enforce: true,
        },
      },
    },
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          mangle: true,
          output: {
            comments: false,
          },
          ie8: false,
          warnings: false,
          compress: true,
        },
        sourceMap: true,
        cache: true,
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
    ],
  },

  output: {
    path: path.resolve(__dirname, '..', './build'),
    filename: '[name].[hash:8].js',
    sourceMapFilename: '[name].[hash:8].map',
    chunkFilename: '[id].[hash:8].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', './src/index.html'),
    }),
    new ESLintPlugin({
      extensions: ['ts', 'tsx'],
      emitError: true,
      emitWarning: true,
      failOnWarning: false,
      failOnError: false,
    }),
    new CopyPlugin({
      patterns: [{ from: 'src/assets', to: 'assets' }],
    }),
  ],
}
