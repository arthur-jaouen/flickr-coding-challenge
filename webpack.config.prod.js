const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base.js');

const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge.smartStrategy({ 'module.rules.use': 'prepend' })(baseConfig, {
    mode: 'production',
    devtool: 'source-map',
    output: {
        path: path.join(__dirname, 'build'),
        publicPath: '/',
        filename: 'js/[name].[contenthash].js',
        chunkFilename: 'js/[name].[contenthash].js'
    },
    plugins: [new CleanWebpackPlugin()],
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    }
});
