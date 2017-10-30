const webpack = require('webpack');
const merge = require('webpack-merge')
const path = require('path');
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')
let baseConfig = require('./webpack.base.conf');

let webpackConfig = merge(baseConfig, {
    entry: './app/entry-server.js',
    target: 'node',
    devtool: 'source-map',
    output: {
        libraryTarget: 'commonjs2',
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
            'process.env.VUE_ENV': '"server"'
        }),
        new VueSSRServerPlugin(),
    ]
});

module.exports = webpackConfig;
