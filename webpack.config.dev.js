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
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader']
            }
        ]
    },
    plugins: [new HotModuleReplacementPlugin()]
});
