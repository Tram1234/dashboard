/**
 * Created by vlad on 03/12/2016.
 */

var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

module.exports = {
    context: path.join(__dirname),
    devtool: debug ? "inline-sourcemap" : null,
    entry: "./index.js",
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0'],
                    plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
                }
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file?name=fonts/[name].[ext]'
            },
            {
                test: /\.(jpg|jpeg|gif|png|svg)$/,
                loader: 'file?name=images/[name].[ext]'
            }

        ]
    },
    output: {
        path: __dirname + "/../public",
        filename: "bundle.min.js"
    },
    plugins: debug ? [] : [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({mangle: false, sourcemap: false}),
    ]
};
