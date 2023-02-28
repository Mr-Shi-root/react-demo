const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
    entry: {
        index: path.join(__dirname, "./src/index.jsx"),
    },
    output: {
        path: path.join(__dirname, "./dist"),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "public/index.html"),
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)/,
                loader: "babel-loader",
            },
        ]
    },
    mode: "development",
    devServer: {
        host: "localhost",
        port: "8888",
    },
}