import path from 'path';
import webpack from 'webpack';
import AssetsPlugin from 'assets-webpack-plugin';
import nodeExternals from 'webpack-node-externals';
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer';
import overrideRules from './lib/overrideRules';
import pkg from '../package.json';

const isDebug = !process.argv.includes('--release');
const isVerbose = process.argv.includes('--verbose');
const isAnalyze =
  process.argv.includes('--analyze') || process.argv.includes('--analyse');

const reScript = /\.jsx?$/;
const reStyle = /\.(css|less|scss|sss)$/;
const reImage = /\.(bmp|gif|jpe?g|png|svg)$/;
const staticAssetName = isDebug
  ? '[path][name].[ext]?[hash:8]'
  : '[hash:8].[ext]';

const config = {
  context: path.resolve(__dirname, '..'),

  output: {
    path: path.resolve(__dirname, '../build/public/assets'),
    publicPath: '/assets/',
    pathinfo: isVerbose,
    filename: isDebug ? '[name].js' : '[name].[chunkhash:8].js',
    chunkFilename: isDebug
      ? '[name].chunk.js'
      : '[name].[chunkhash:8].chunk.js',
    devtoolModuleFilenameTemplate: info =>
      path.resolve(info.absoluteResourcePath).replace(/\\/g, '/'),
  },

  resolve: {
    modules: ['node_modules', 'src'],
  },

  module: {
    strictExportPresence: true,

    rules: [
      {
        test: reScript,
        loader: 'babel-loader',
        include: [path.resolve(__dirname, '../src')],
        options: {
          cacheDirectory: isDebug,
          babelrc: false,
          presets: [
            [
              '@babel/preset-env',
              {
                targets: {
                  browsers: pkg.browserslist,
                  forceAllTransforms: !isDebug, // for UglifyJS
                },
                modules: false,
                useBuiltIns: false,
                debug: false,
              },
            ],
            '@babel/preset-stage-2',
            '@babel/preset-flow',
            [
              '@babel/preset-react',
              {
                development: isDebug,
              },
            ],
          ],
          plugins: [
            ...(isDebug ? [] : ['@babel/transform-react-constant-elements']),
            ...(isDebug ? [] : ['@babel/transform-react-inline-elements']),
            ...(isDebug ? [] : ['transform-react-remove-prop-types']),
          ],
        },
      },

      {
        test: /theme.scss$/,
        loaders: [
          'isomorphic-style-loader',
          `css-loader?${
            isDebug ? 'sourceMap&' : 'minimize&'
            }modules&localIdentName=[local]&importLoaders=2`,
          'sass-loader',
        ],
      },
      {
        test: reStyle,
        exclude: [/theme.scss$/],
        use: [
          'isomorphic-style-loader',
          `css-loader?${
            isDebug ? 'sourceMap&' : 'minimize&'
            }modules&localIdentName=
          ${
            isDebug ? '[name]_[local]_[hash:base64:3]' : '[hash:base64:4]'
            }&importLoaders=2`,
          'sass-loader',
        ],
      },
      {
        test: reImage,
        oneOf: [
          {
            issuer: reStyle,
            oneOf: [
              {
                test: /\.svg$/,
                loader: 'svg-url-loader',
                options: {
                  name: staticAssetName,
                  limit: 4096, // 4kb
                },
              },
              {
                loader: 'url-loader',
                options: {
                  name: staticAssetName,
                  limit: 4096, // 4kb
                },
              },
            ],
          },
          {
            loader: 'file-loader',
            options: {
              name: staticAssetName,
            },
          },
        ],
      },
      {
        test: /\.txt$/,
        loader: 'raw-loader',
      },
      {
        test: /\.md$/,
        loader: path.resolve(__dirname, './lib/markdown-loader.js'),
      },
      {
        exclude: [reScript, reStyle, reImage, /\.json$/, /\.txt$/, /\.md$/],
        loader: 'file-loader',
        options: {
          name: staticAssetName,
        },
      },
      ...(isDebug
        ? []
        : [
          {
            test: path.resolve(
              __dirname,
              '../node_modules/react-deep-force-update/lib/index.js',
            ),
            loader: 'null-loader',
          },
        ]),
    ],
  },

  bail: !isDebug,

  cache: isDebug,
  stats: {
    cached: isVerbose,
    cachedAssets: isVerbose,
    chunks: isVerbose,
    chunkModules: isVerbose,
    colors: true,
    hash: isVerbose,
    modules: isVerbose,
    reasons: isDebug,
    timings: true,
    version: isVerbose,
  },

  devtool: isDebug ? 'cheap-module-inline-source-map' : 'source-map',
};

const clientConfig = {
  ...config,

  name: 'client',
  target: 'web',

  entry: {
    client: ['@babel/polyfill', './src/client.js'],
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': isDebug ? '"development"' : '"production"',
      'process.env.BROWSER': true,
      __DEV__: isDebug,
    }),

    new AssetsPlugin({
      path: path.resolve(__dirname, '../build'),
      filename: 'assets.json',
      prettyPrint: true,
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: module => /node_modules/.test(module.resource),
    }),

    ...(isDebug
      ? []
      : [
        new webpack.optimize.ModuleConcatenationPlugin(),

        new webpack.optimize.UglifyJsPlugin({
          compress: {
            warnings: isVerbose,
            unused: true,
            dead_code: true,
            screw_ie8: true,
          },
          mangle: {
            screw_ie8: true,
          },
          output: {
            comments: false,
            screw_ie8: true,
          },
          sourceMap: true,
        }),
      ]),

    ...(isAnalyze ? [new BundleAnalyzerPlugin()] : []),
  ],

  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  },
};

const serverConfig = {
  ...config,

  name: 'server',
  target: 'node',

  entry: {
    server: ['@babel/polyfill', './src/server.js'],
  },

  output: {
    ...config.output,
    path: path.resolve(__dirname, '../build'),
    filename: '[name].js',
    chunkFilename: 'chunks/[name].js',
    libraryTarget: 'commonjs2',
  },

  resolve: {
    ...config.resolve,
  },

  module: {
    ...config.module,

    rules: overrideRules(config.module.rules, rule => {
      if (rule.loader === 'babel-loader') {
        return {
          ...rule,
          options: {
            ...rule.options,
            presets: rule.options.presets.map(
              preset =>
                preset[0] !== '@babel/preset-env'
                  ? preset
                  : [
                    '@babel/preset-env',
                    {
                      targets: {
                        node: pkg.engines.node.match(/(\d+\.?)+/)[0],
                      },
                      modules: false,
                      useBuiltIns: false,
                      debug: false,
                    },
                  ],
            ),
          },
        };
      }

      // Override paths to static assets
      if (
        rule.loader === 'file-loader' ||
        rule.loader === 'url-loader' ||
        rule.loader === 'svg-url-loader'
      ) {
        return {
          ...rule,
          options: {
            ...rule.options,
            name: `public/assets/${rule.options.name}`,
            publicPath: url => url.replace(/^public/, ''),
          },
        };
      }

      return rule;
    }),
  },

  externals: [
    './assets.json',
    nodeExternals({
      whitelist: [reStyle, reImage],
    }),
  ],

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': isDebug ? '"development"' : '"production"',
      'process.env.BROWSER': false,
      __DEV__: isDebug,
    }),

    new webpack.BannerPlugin({
      banner: 'require("source-map-support").install();',
      raw: true,
      entryOnly: false,
    }),
  ],

  node: {
    console: false,
    global: false,
    process: false,
    Buffer: false,
    __filename: false,
    __dirname: false,
  },
};

export default [clientConfig, serverConfig];
