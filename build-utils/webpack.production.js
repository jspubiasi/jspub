const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = () => ({
    devtool: "none",
    output: {
        filename: 'jspub.[contenthash].js'
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, "css-loader"]
        }]
    },
    plugins: [new MiniCssExtractPlugin({
        filename: "jspub.[contenthash].css"
    }), new OptimizeCSSAssetsPlugin(), new CopyWebpackPlugin([{
        from: 'src/assets/',
        to: 'assets/'
    }])]
});