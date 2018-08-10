

module.exports = {
    CDN: (() => {
        const isProd = process.env.NODE_ENV === 'production'
        if (isProd) {
            return ""
        }
        return ""
    })()
}