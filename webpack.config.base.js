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

    ],
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ["file-loader"]//作用是把文件变成文件路径
            },
            {
                test: /\.styl$/,
                use: ["style-loader", "css-loader", "stylus-loader"]
            },
            {
                test: /\.less$/,
                use: ["style-loader", "css-loader", "less-loader"]
            },

            {
                test: /\.scss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
        ],
    },
};






