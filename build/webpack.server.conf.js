const webpack = require('webpack');
const merge = require('webpack-merge')
const path = require('path');
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')
let baseConfig = require('./webpack.base.conf');

let webpackConfig = merge(baseConfig, {
    entry: './app/entry-server.js',
    target: 'node',
    output: {
        libraryTarget: 'commonjs2',
    },
    plugins: [
        new VueSSRServerPlugin(),
        new webpack.DefinePlugin({
            'process.env': {NODE_ENV: '"production"'},
            TARGET: '"node"'
        }),
    ]
});

module.exports = webpackConfig;
