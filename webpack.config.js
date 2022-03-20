const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    mode: "production",
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: "/node_modules/",
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env"]
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpg)$/,
                use: {
                    loader:"url-loader"
                }
            }
        ]
    },
    experiments: {
      topLevelAwait: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./template/index.html",
            filename: "index.html",
            favicon:'./image/favicon.ico'
        })
    ]
}