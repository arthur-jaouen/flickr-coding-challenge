const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = ({ config, mode }) => {
    config.module.rules.push({
        test: /\.stories.tsx?$/,
        loaders: [
            {
                loader: require.resolve('@storybook/source-loader'),
                options: { parser: 'typescript' }
            }
        ],
        enforce: 'pre'
    });

    config.module.rules.push({
        test: /\.tsx?$/,
        loader: require.resolve('babel-loader'),
        options: {
            presets: [['react-app', { flow: false, typescript: true }]]
        }
    });

    config.module.rules.push({
        test: /\.mjs$/,
        type: 'javascript/auto'
    });

    config.module.rules.push({
        test: /\.stories\.jsx?$/,
        loaders: [require.resolve('@storybook/source-loader')],
        enforce: 'pre'
    });

    config.resolve.plugins = config.resolve.plugins || [];
    config.resolve.plugins.push(
        new TsconfigPathsPlugin({
            configFile: path.resolve(__dirname, '../tsconfig.json'),
            extensions: ['.ts', '.tsx', '.d.ts']
        })
    );

    config.resolve.extensions.push('.ts', '.tsx');
    return config;
};
