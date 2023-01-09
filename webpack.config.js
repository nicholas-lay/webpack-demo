const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');

module.exports = {
    mode: 'development',
    devtool: "inline-source-map",
    devServer: {
        contentBase: "./dist",
    },
    entry: './src/index.js',
    output: {

        filename: '[name].[contenthash].js',
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'leetcode',
        template: 'src/assets/index.html'//该路径的html webpack打包后
        //在dist目录生成转译后的index.html
    })],

    module: {
        rules: [
            {
                test: /\.css$/i,  //意为文件名是.css结尾
                use: ["style-loader", "css-loader"],//用css-loader处理，
                //把css内容读到放到style标签再放到html head内
            },
        ],
    },
};






