var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        "app": __dirname + '/src/app.js',
        "app-react": __dirname + '/src/app-react.js',
        "ajax": __dirname + '/src/ajax.js',
        "shop": __dirname + '/src/shop.js',
        "login": __dirname + '/src/login.js',
        "forgotpassword": __dirname + '/src/forgotpassword.js',
        "user-orders": __dirname + '/src/user-orders.js',
        "user-addresses": __dirname + '/src/user-addresses.js',
        "user-profile": __dirname + '/src/user-profile.js',
        "checkout-login": __dirname + '/src/checkout-login.js',
        "checkout": __dirname + '/src/checkout.js'
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
        alias: {
            "TweenLite": __dirname + '/node_modules/gsap/src/minified/TweenLite.min.js',
            "TweenMax": __dirname + '/node_modules/gsap/src/minified/TweenMax.min.js',
            "TimelineLite": __dirname + '/node_modules/gsap/src/minified/TimelineLite.min.js',
            "TimelineMax": __dirname + '/node_modules/gsap/src/minified/TimelineMax.min.js',
            "ScrollMagic": __dirname + '/node_modules/scrollmagic/scrollmagic/minified/ScrollMagic.min.js',
            "animation.gsap": __dirname + '/node_modules/scrollmagic/scrollmagic/minified/plugins/animation.gsap.min.js',
            "debug.addIndicators": __dirname + '/node_modules/scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min.js'
        }
    },
    output: {
        path: __dirname + "/public/dist",
        publicPath: '/dist/',
        filename: 'js/[name].bundle.[contenthash].js'
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendors: {
                  test: /[\\/]node_modules[\\/]/,
                  name: "vendors",
                  chunks: "initial"
                }
            }
        }
    },
    plugins: [
        new CleanWebpackPlugin(['public/dist', 'templates/_dist']),
        new HtmlWebpackPlugin({
            title: 'Caching',
            chunks: ['app-react', 'vendors'],
            template: 'templates/_layouts/boilerplate.twig',
            filename: '../../templates/_dist/index.boilerplate.twig'
        }),
        new HtmlWebpackPlugin({
            title: 'Caching',
            chunks: ['user-profile', 'vendors'],
            template: 'templates/_layouts/boilerplate.twig',
            filename: '../../templates/_dist/profile.boilerplate.twig'
        }),
        new HtmlWebpackPlugin({
            title: 'Caching',
            chunks: ['user-orders', 'vendors'],
            template: 'templates/_layouts/boilerplate.twig',
            filename: '../../templates/_dist/orders.boilerplate.twig'
        }),
        new HtmlWebpackPlugin({
            title: 'Caching',
            chunks: ['user-addresses', 'vendors'],
            template: 'templates/_layouts/boilerplate.twig',
            filename: '../../templates/_dist/addresses.boilerplate.twig'
        }),
        new HtmlWebpackPlugin({
            title: 'Caching',
            chunks: ['login', 'vendors'],
            template: 'templates/_layouts/boilerplate.twig',
            filename: '../../templates/_dist/login.boilerplate.twig'
        }),
        new HtmlWebpackPlugin({
            title: 'Caching',
            chunks: ['forgotpassword', 'vendors'],
            template: 'templates/_layouts/boilerplate.twig',
            filename: '../../templates/_dist/forgotpassword.boilerplate.twig'
        }),
        new HtmlWebpackPlugin({
            title: 'Caching',
            chunks: ['checkout-login', 'vendors'],
            template: 'templates/_layouts/boilerplate.twig',
            filename: '../../templates/_dist/checkout-login.boilerplate.twig'
        }),
        new HtmlWebpackPlugin({
            title: 'Caching',
            chunks: ['checkout', 'vendors'],
            template: 'templates/_layouts/boilerplate.twig',
            filename: '../../templates/_dist/checkout.boilerplate.twig'
        }),
        new ExtractTextPlugin({
            filename:"css/[name].bundle.css"
        })
    ]
}; 
