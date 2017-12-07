var webpack = require('webpack');
var path = require('path');

module.exports = {

    entry:{
        app: [
        './static-src/js/app.js'
        ]
    },

    output: {
        path: path.resolve(__dirname,'./static/lib'),
        filename: '[name].js'
    },


    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
    },


    module: {
        rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        }/*,
        {
            test: /\.scss$/,
            exclude: /node_modules/,
            use: ExtractTextPlugin.extract({
                use: ["css-loader", "sass-loader"],
                fallback: "style-loader"
            })
        }*/
        ]
    }/*,

    plugins: [
        new ExtractTextPlugin("[name].css")
        ]*/
    };