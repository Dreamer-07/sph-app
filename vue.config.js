module.exports = {
    publicPath: './',
    // 关闭打包时生成 Map 文件
    productionSourceMap: false,
    lintOnSave: false,
    devServer: {
        proxy: {
            // 当发送 '/api' 请求时就会通过指定的代理服务器(http://39.98.123.211)发送请求
            '/api': {
                target: 'http://39.98.123.211'
            }
        }
    }
}
