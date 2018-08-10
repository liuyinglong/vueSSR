const path = require('path')
const {VueLoaderPlugin} = require('vue-loader')


console.log("当前环境:"+process.env.NODE_ENV)

let webpackConfigList=require("../config/webpackConfig")
let webpackConfig;

switch (process.env.NODE_ENV){
    case "test":
        webpackConfig=webpackConfigList["test"]
        break;
    case "production":
        webpackConfig=webpackConfigList["production"]
        break
    default:
        webpackConfig=webpackConfigList["development"]
        break
}


let base= {
    devtool: webpackConfig.devtool,
    output: {
        path: webpackConfig.path,
        publicPath: webpackConfig.publicPath,
        filename: 'js/[name].js?[hash]'
    },
    resolve: {
        alias: {
            'public': path.resolve(__dirname, '../public'),
            "@": path.resolve(__dirname, "../src")
        }
    },
    module: {
        noParse: /es6-promise\.js$/, // avoid webpack shimming process
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    compilerOptions: {
                        preserveWhitespace: false
                    }
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'images/[name].[ext]?[hash]'
                }
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|otf)(\?\S*)?$/,
                loader: 'file-loader',
                query: {
                    name: 'font/[name].[ext]?[hash]'
                }
            }
        ].concat(webpackConfig.loaders)
    },
    performance: {
        maxEntrypointSize: 300000,
        hints: webpackConfig.hints
    },

    plugins: [new VueLoaderPlugin()].concat(webpackConfig.plugins)
}

module.exports=base