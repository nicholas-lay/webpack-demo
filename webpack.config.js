const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const base = require("./webpack.config.base.js");

module.exports = {
    ...base,//意为将base的所有属性抄过来
    devtool: "inline-source-map",
    devServer: {
        static: "./dist",
    },
    module: {
        rules: [
            ...base.module.rules,
            {
                test: /\.css$/i,  //意为文件名是.css结尾

                use: ["style-loader", "css-loader"],//用css-loader处理，
                //把css内容读到放到style标签再放到html head内
            },
        ],
    },
};






