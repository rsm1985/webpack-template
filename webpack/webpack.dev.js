const webpack = require("webpack")
require('dotenv').config({ path: './.env' });
module.exports = {
    mode: "development",
    devtool: "cheap-module-source-map",
    plugins: [
        new webpack.DefinePlugin({
            'process.env': JSON.stringify(process.env),
        }),
    ]
}
