const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');

module.exports = {
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    autoprefixer(),
                    pxtorem({
                        rootValue: 37.5,
                        propList: ['*'],
                        selectorBlackList: ['van-circle__layer']
                    })
                ]
            }
        }
    },
    devServer: {
        proxy: {
            '/wanshan': {
                target: 'http://10.35.163.50:8080',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/wanshan': '/image/uploadimage'    //代理的路径
                }
            }
        }
    },
};