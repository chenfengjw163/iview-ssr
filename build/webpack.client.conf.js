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
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
            'process.env.VUE_ENV': '"client"'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "manifest",
            minChunks: Infinity
        }),
        new VueSSRClientPlugin()
    ]
});
module.exports = webpackConfig;
