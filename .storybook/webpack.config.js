const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = (baseConfig, env, config) => {
    config.module.rules.push({
        test: /\.(ts|tsx)$/,
        loader: require.resolve('babel-loader'),
        options: {
            presets: [['react-app', { flow: false, typescript: true }]]
        }
    });

    config.module.rules.push({
        test: /\.mjs$/,
        type: 'javascript/auto'
    });

    config.resolve.plugins = config.resolve.plugins || [];
    config.resolve.plugins.push(
        new TsconfigPathsPlugin({
            configFile: path.resolve(__dirname, '../tsconfig.json')
        })
    );

    config.resolve.extensions.push('.ts', '.tsx');
    return config;
};
