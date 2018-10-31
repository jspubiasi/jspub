const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const modeConfig = env => require(`./build-utils/webpack.${env}`)(env);
const webpackMerge = require("webpack-merge");
const path = require('path');

module.exports = ({
    mode = "production"
}) => webpackMerge({
    mode,
    entry: "./src/app.js",
    devServer: {
        contentBase: path.join(__dirname, 'src')
    },
    module: {
        rules: [{
            test: /\.js/,
            use: "babel-loader"
        }]
    },
    plugins: [new HtmlWebpackPlugin({
        template: "index.html",
        inject: "body",
        minify: {
            html5: true,
            removeComments: true,
            collapseWhitespace: true
        }
    })]
}, modeConfig(mode));