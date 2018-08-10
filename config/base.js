let path = require("path")

module.exports = {

    development: {
        path: path.resolve(__dirname, "../clientPublic", "/development/dist"),
        publicPath: "/dist/",
    },
    test: {
        path: path.resolve(__dirname, "../clientPublic", "/test/dist"),
        publicPath: "/dist/",
    },
    production: {
        path: path.resolve(__dirname, "../clientPublic", "/production/dist"),
        publicPath: "/dist/",
    }
}