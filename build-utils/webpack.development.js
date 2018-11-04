const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = () => ({
    devtool: "none",
    output: {
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