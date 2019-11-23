const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.prod.js');

const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = merge.smart(baseConfig, {
    plugins: [
        new BundleAnalyzerPlugin()
    ],
});
