const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = () => ({
    devtool: "none",
    output: {
        publicPath: "/",
        filename: "bundle.js"
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
        }]
    },
    plugins: [new CopyWebpackPlugin([{
        from: 'src/assets/',
        to: 'dist/assets/'
    }])]
});