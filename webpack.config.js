var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        "app": __dirname + '/src/app.js',
        "app-react": __dirname + '/src/app-react.js',
        "ajax": __dirname + '/src/ajax.js',
        "shop": __dirname + '/src/shop.js',
        "login": __dirname + '/src/login.js',
        "user-orders": __dirname + '/src/user-orders.js',
        "user-addresses": __dirname + '/src/user-addresses.js',
        "user-profile": __dirname + '/src/user-profile.js',
        "checkout-login": __dirname + '/src/checkout-login.js',
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
                                    require("bourbon").includePaths,
                                    "src/styles"
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
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                exclude: /fonts/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: "assets/[name].[ext]",
                        publicPath: '/dist/',
                    }
                  }
            },
            {
                test: /\.(ttf|eot|woff|woff2|svg)$/,
                include: /fonts/,
                use: {
                  loader: "file-loader",
                  options: {
                    name: "assets/[name].[ext]",
                    publicPath: '/dist/'
                  },
                },
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
