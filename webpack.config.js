var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        "app": __dirname + '/src/app.js',
        "ajax": __dirname + '/src/ajax.js',
        "shop": __dirname + '/src/shop.js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({ 
                    fallback:'style-loader',
                    use:[
                        {
                            loader: 'css-loader'
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                includePaths: [
                                    require("bourbon-neat").includePaths,
                                    require("bourbon").includePaths
                                ]
                            }
                        },
                        {
                            loader: 'postcss-loader'
                        }
                        
                    ],
                })
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({ 
                    fallback:'style-loader',
                    use:[
                        {
                            loader: 'css-loader'
                        }
                    ],
                })
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader"
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    output: {
        path: __dirname + "/public/dist",
        filename: 'js/[name].bundle.js'
    },
    plugins: [
        new ExtractTextPlugin({
            filename:"css/[name].bundle.css"
        })
    ]
}; 
