const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
        project: './src/project.js',
        todo: './src/todo.js',
        eventListeners: './src/eventListeners.js',
    },
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Listify',
        }),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
            {
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ],
            },
        ],
    },
    optimization: {
        runtimeChunk: 'single',
    },
};