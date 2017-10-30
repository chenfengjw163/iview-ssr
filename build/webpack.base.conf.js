const webpack = require('webpack');
const path = require('path');
const vuxLoader = require('vux-loader')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const postcssConfig = require('./postcss.config.js')

const isProd = process.env.NODE_ENV === 'production'

const webpackConfig = {
    output: {
        filename: 'static/js/[name].js',
        path: path.resolve(__dirname, `../bundle`),
        publicPath: '/'
    },
    devtool: isProd
        ? false
        : '#cheap-module-source-map',
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        modules: [
            'node_modules'
        ]
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: ['babel-loader'],
                exclude: /node_modules/
            }, {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        css: ExtractTextPlugin.extract({
                            use: 'css-loader',
                            fallback: 'vue-style-loader' // <- 这是vue-loader的依赖，所以如果使用npm3，则不需要显式安装
                        }),
                    },
                    postcss: {
                        plugins: postcssConfig(),
                        opetions: {
                            sourceMap: true
                        }
                    }
                }
            }, {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({
                    use: {
                        loader: 'postcss-loader',
                        options: {
                            plugins: postcssConfig()
                        }
                    },
                    fallback: 'vue-style-loader'
                })
            }, {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'static/img/[name].[hash:7].[ext]'
                }
            }, {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'static/fonts/[name].[hash:7].[ext]'
                }
            },
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'static/css/[name].[contenthash:7].css'
        }),
    ]
}

module.exports = vuxLoader.merge(webpackConfig, {
    plugins: ['vux-ui']
});
