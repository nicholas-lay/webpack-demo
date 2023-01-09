const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');
const base = require("./webpack.config.base.js");

module.exports = {
    ...base,
    mode: 'production',
    plugins: [
        ...base.plugins,
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // all options are optional
            filename: "[name].[contenthash].css",
            chunkFilename: "[id].[contenthash].css",
            ignoreOrder: false, // Enable to remove warnings about conflicting order
        }),
    ],

    module: {
        rules: [

            {
                test: /\.css$/i,  //意为文件名是.css结尾
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {


                            publicPath: "../",

                        },
                    },
                    "css-loader",
                ],
                // use: ["style-loader", "css-loader"],//用css-loader处理，
                //把css内容读到放到style标签再放到html head内
            },
        ],
    },
};






