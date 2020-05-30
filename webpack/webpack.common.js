const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "./main.js",
        path: path.resolve('./dist')
    },
    resolve: {
        alias: {
            '@HttpClient': path.resolve('./src/services/http.service.js'),
            '@Core': path.resolve('./src/core/'),
            '@Components': path.resolve('./src/components/'),
            '@Shared': path.resolve('./src/shared/'),
            '@Helper': path.resolve('./src/helper/'),
            '@Redux': path.resolve('./src/redux/'),
            '@Config': path.resolve('./src/config/'),
            '@Styles': path.resolve('./src/styles/')
        },
        extensions: ['.js', '.jsx', '.scss']
    },
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                use:  ['babel-loader']
            },
            {
                test: /\.s(a|c)ss$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                    },
                    "sass-loader"
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ["file-loader"]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                use: ["url-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ]
};
