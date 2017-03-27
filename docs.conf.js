var path = require('path')

module.exports = {
    port: 9999,
    webpack: {
        resolve: {
            alias: {
                'src': path.resolve(__dirname, 'src')
            }
        }
    },
    vue: { dir: './docs' },
    md: { dir: './', exclude: /node_modules/ }
}