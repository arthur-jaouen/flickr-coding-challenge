const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base.js');

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin: CleanPlugin } = require('clean-webpack-plugin');

module.exports = merge.smartStrategy({ 'module.rules.use': 'prepend' })(baseConfig, {
    mode: 'production',
    devtool: 'source-map',
    output: {
        path: path.join(__dirname, 'build'),
        publicPath: '/',
        filename: 'js/[name].[contenthash].js',
        chunkFilename: 'js/[name].[contenthash].js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [{ loader: MiniCssExtractPlugin.loader, options: { sourceMap: true } }]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash].css',
            chunkFilename: 'css/[name].[contenthash].css'
        }),
        new CleanPlugin()
    ],
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    }
});
