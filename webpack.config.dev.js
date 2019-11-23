const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base.js');

const { HotModuleReplacementPlugin } = require('webpack');

module.exports = merge.smartStrategy({ 'module.rules.use': 'prepend' })(baseConfig, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './',
        hot: true
    },
    plugins: [new HotModuleReplacementPlugin()]
});
