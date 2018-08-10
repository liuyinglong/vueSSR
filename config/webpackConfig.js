let path = require("path")
const webpack = require('webpack')
const baseConfig = require("./base")
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
module.exports = {
    //开发
    development: Object.assign(baseConfig.development, {
        devtool: "#cheap-module-source-map",
        hints: false,
        loaders: [
            {
                test: /\.styl(us)?$/,
                use: ['vue-style-loader', 'css-loader', 'stylus-loader']
            },
            {
                test: /\.scss$/,
                use: ["vue-style-loader", "css-loader?importLoaders=1", "sass-loader"]
            }
        ],
        plugins: [
            new FriendlyErrorsPlugin(),
        ]
    }),

    //测试
    test: Object.assign(baseConfig.test, {
        devtool: "#cheap-module-source-map",
        hints: "warning",
        loaders: [
            {
                test: /\.styl(us)?$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {minimize: true}
                        },
                        'stylus-loader'
                    ],
                    fallback: 'vue-style-loader'
                })
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: 'css-loader?importLoaders=1'
                        },
                        'sass-loader'
                    ],
                    fallback: 'vue-style-loader'
                })
            }
        ],
        plugins: [
            new webpack.optimize.UglifyJsPlugin({
                compress: {warnings: false}
            }),
            new webpack.optimize.ModuleConcatenationPlugin(),
            new ExtractTextPlugin({
                filename: 'css/common.css?[hash]'
            }),
            new webpack.BannerPlugin(function () {
                return "version:1.0.0 \n" +
                    "author:liuyinglong \n" +
                    "date:" + new Date() + " \n" +
                    "mail:liuyinglong@utimes.cc"
            }()),
        ]
    }),

    //生产
    production: Object.assign(baseConfig.production, {
        devtool: false,
        hints: "warning",
        loaders: [
            {
                test: /\.styl(us)?$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {minimize: true}
                        },
                        'stylus-loader'
                    ],
                    fallback: "vue-style-loader"
                })
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: 'css-loader?importLoaders=1'
                        },
                        'sass-loader'
                    ],
                    fallback: "vue-style-loader"
                })
            }
        ],
        plugins: [
            new webpack.optimize.UglifyJsPlugin({
                compress: {warnings: false}
            }),
            new webpack.optimize.ModuleConcatenationPlugin(),
            new ExtractTextPlugin({
                filename: 'css/common.css?[hash]'
            }),
            new webpack.BannerPlugin(function () {
                return "version:1.0.0 \n" +
                    "author:liuyinglong \n" +
                    "date:" + new Date() + " \n" +
                    "mail:liuyinglong@utimes.cc"
            }()),
        ]
    })
}