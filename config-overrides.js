/*
 * @Author: D.Y.M
 * @Date: 2021-10-19 16:48:53
 * @LastEditTime: 2021-11-09 17:56:00
 * @FilePath: /otter-data/config-overrides.js
 * @Description:
 */
const {
  override,
  addDecoratorsLegacy,
  disableEsLint,
  addBundleVisualizer,
  addWebpackAlias,
  adjustWorkbox,
  addLessLoader,
  overrideDevServer,
  watchAll,
  fixBabelImports,
  addPostcssPlugins,
} = require('customize-cra')
const path = require('path')
const apiMocker = require('mocker-api')
const getCSSModuleLocalIdent = require('react-dev-utils/getCSSModuleLocalIdent')
const getStyleLoaders = (cssOptions, preProcessor, lessOptions) => {
  // 这个是use里要设置的，封装了下
  const loaders = [
    require.resolve('style-loader'),
    {
      loader: require.resolve('css-loader'),
      options: cssOptions,
    },
    {
      // Options for PostCSS as we reference these options twice
      // Adds vendor prefixing based on your specified browser support in
      // package.json
      loader: require.resolve('postcss-loader'),
      options: {
        // Necessary for external CSS imports to work
        // https://github.com/facebook/create-react-app/issues/2677
        ident: 'postcss',
        plugins: () => [
          require('postcss-flexbugs-fixes'),
          require('postcss-preset-env')({
            autoprefixer: {
              flexbox: 'no-2009',
            },
            stage: 3,
          }),
        ],
      },
    },
  ]
  if (preProcessor) {
    loaders.push({
      loader: require.resolve(preProcessor),
      options: lessOptions,
    })
  }
  return loaders
}
const { name } = require('./package')
const devConfig = () => {
  return (config) => {
    config.headers = config.headers || {}
    config.headers['Access-Control-Allow-Origin'] = '*'
    config.historyApiFallback = true
    config.hot = false
    config.watchContentBase = false
    config.liveReload = false
    return {
      ...config,
      before(app) {
        apiMocker(app, path.resolve(__dirname, './mock/index.js'))
      },
    }
  }
}
module.exports = {
  webpack: override(
    // enable legacy decorators babel plugin
    addDecoratorsLegacy(),

    // disable eslint in webpack
    disableEsLint(),

    // add webpack bundle visualizer if BUNDLE_VISUALIZE flag is enabled
    process.env.BUNDLE_VISUALIZE == 1 && addBundleVisualizer(),

    // add an alias for "ag-grid-react" imports
    addWebpackAlias({
      '@': path.resolve(__dirname, 'src'),
    }),
    addLessLoader({
      lessOptions: {
        javascriptEnabled: true,
      },
    }),
    fixBabelImports('antd', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: true,
    }),
    fixBabelImports('@formily/antd', {
      libraryName: '@formily/antd',
      libraryDirectory: 'esm',
      style: true,
    }),

    addPostcssPlugins([require('tailwindcss'), require('autoprefixer')]),

    // adjust the underlying workbox
    adjustWorkbox((wb) =>
      Object.assign(wb, {
        skipWaiting: true,
        exclude: (wb.exclude || []).concat('index.html'),
      }),
    ),
    (config) => {
      config.output = config.output || {}
      config.output.library = `${name}-[name]`
      config.output.libraryTarget = 'umd'
      config.output.jsonpFunction = `webpackJsonp_${name}`
      config.output.globalObject = 'window'
      const oneOf_loc = config.module.rules.findIndex((n) => n.oneOf) // 这里的config是全局的
      config.module.rules[oneOf_loc].oneOf = [
        {
          test: /\.module\.less$/,
          use: getStyleLoaders(
            {
              importLoaders: 2,
              modules: {
                getLocalIdent: getCSSModuleLocalIdent,
              },
            },
            'less-loader',
          ),
        },
        ...config.module.rules[oneOf_loc].oneOf,
      ]
      return config
    },
  ),
  devServer: overrideDevServer(
    // dev server plugin
    devConfig(),
    watchAll(),
  ),
}
