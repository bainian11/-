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
            // '/wanshan': {
            //     target: 'http://10.35.163.50:8080',
            //     ws: true,
            //     changeOrigin: true,
            //     pathRewrite: {
            //         '^/wanshan': '/image/uploadimage'    //代理的路径
            //     }
            // },
            // '/register': {
            //     target: 'http://10.31.167.42:8014',
            //     ws: true,
            //     changeOrigin: true,
            //     pathRewrite: {
            //         '^/register': '/api/isPhone'    //代理的路径
            //     }
            // },
            '/mine':{
                target:'http://10.31.167.27:8018',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/mine': '/mine'    //代理的路径
                }
            },
            '/blacklist':{
                target:'http://10.31.167.27:8011',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/blacklist': '/blacklist'    //代理的路径
                }
            }
        }
    },
};