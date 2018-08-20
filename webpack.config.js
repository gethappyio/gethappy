var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        "app": __dirname + '/src/js/app.js',
        "shop": __dirname + '/src/js/shop.js'
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({ 
                fallback:'style-loader',
                use:['css-loader','sass-loader'],
            })
        }]
    },
    output: {
        path: __dirname + "/public/dist",
        filename: 'js/[name].bundle.js'
    },
    plugins: [
        new ExtractTextPlugin({
            filename:"css/app.bundle.css"
        })
    ]
}; 
