const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const mode = process.env.NODE_ENV == "development";

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    devtool: "source-map",
    output: {
        path: path.resolve(__dirname, "build"),
        publicPath: "/",
        filename: "[name].[hash].js",
        clean: true,
    },
    resolve: {
        alias: {
            "@components": path.resolve(__dirname, 'src/components'),
            "@assets": path.resolve(__dirname, 'src/assets'),
        },
        extensions: [".js", ".jsx", ".scss", ".jpg", ".png", ".webp", ".svg"]
    },
    devServer: {
        port: 3000,
        hot: true,
        historyApiFallback: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        })
    ],
    module: {
        rules: [
            {
                test: /\.(html)$/,
                use: ["html-loader"]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
        
            },
            {
                test: /\.s[ac]ss|css$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
          },
          {
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: ["@svgr/webpack", "file-loader"],
          },
          {
            test: /\.(png|jpg|webp|gif)$/,
            use: ["file-loader"]
          }
        ]
    }
};
