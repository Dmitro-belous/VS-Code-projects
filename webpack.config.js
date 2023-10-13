const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    output: {
        filename: 'main.js'
    },
    devServer: {
        static: './dist',
        hot: true,
        port: 8090,
        open: true,
    },
    stats: {
        children: false,
        entrypoints: true,
    },
    devtool: 'inline-source-map',
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            title: 'Development',
            template: './src/index.pug',
            filename: 'index.html'
        }),
        new ESLintPlugin({files: './src/**/*.{vue,scss}'}),
        new StylelintPlugin({files: './src/**/*.{vue,scss}'})
    ],
    optimization: {
        minimize: true,
        minimizer: [new TerserWebpackPlugin({}), new CssMinimizerPlugin({
            minimizerOptions: {
                preset: [
                    'default',
                    {
                        discardComments: { removeAll: true},
                    },
                ],
            },           
        })],
    },
    module: {
        rules: [
            { 
                test: /\.css$/,
                use: [
                    {
                      loader: MiniCssExtractPlugin.loader,
                      options: {
                        esModule: true,
                      },
                    },
                    'css-loader',
                    ], 
            },
            {
                test: /\.pug$/,
                loader: 'pug-loader',
                options: {
                    pretty: true
                    }
            }
        ]
    }
};
