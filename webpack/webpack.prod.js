const webpack = require("webpack")
require('dotenv').config({ path: './.env.prod' });


module.exports = {
    mode: "production",
    devtool: "source-map",
    plugins: [
        new webpack.DefinePlugin({
            'process.env': JSON.stringify(process.env),
        }),

    ],
}
