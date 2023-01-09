const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {

        filename: '[name].[contenthash].js',
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'leetcode',
        template: 'src/assets/index.html'//该路径的html webpack打包后
        //在dist目录生成转译后的index.html
    }),

    ]
};






