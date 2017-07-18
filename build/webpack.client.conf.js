const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')
let baseConfig = require('./webpack.base.conf');


let webpackConfig = merge(baseConfig, {
    entry: {
        app: './app/entry-client.js'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {NODE_ENV: '"production"'},
            TARGET: '"web"'
        }),
        new VueSSRClientPlugin(),
    ]
});
module.exports = webpackConfig;
