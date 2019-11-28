const path = require('path');
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const ForkTsCheckerPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.join(__dirname, 'build'),
        publicPath: '',
        filename: 'js/[name].[hash].js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        plugins: [
            new TsconfigPathsPlugin({
                configFile: './tsconfig.json',
                extensions: ['.ts', '.tsx', '.d.ts']
            })
        ]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[contenthash].[ext]',
                    outputPath: 'img'
                }
            },
            {
                test: /\.(woff2?|ttf|eot)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[contenthash].[ext]',
                    outputPath: 'fonts'
                }
            }
        ]
    },
    plugins: [
        new HtmlPlugin({
            template: './public/index.html',
            title: 'Flickr Coding Challenge - Arthur JAOUEN'
        }),
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
    ]
};
