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
            // 上传头像
            '/touxiang': {
                target: 'http://10.31.167.29:8010',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/touxiang': '/image/uploadImage'    //代理的路径
                }
            },
            // 送出礼物
            '/gift': {
                target: 'http://10.31.167.29:8013',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/gift': '/gift/sendGift'    //代理的路径
                }
            },
            //收到礼物 
            '/getGift': {
                target: 'http://10.31.167.29:8013',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/getGift': '/gift/getGift'    //代理的路径
                }
            },
            // 完善信息提交
            '/complete': {
                target: 'http://10.31.167.29:8020',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/complete': '/user/addUser'    //代理的路径
                }
            },
            // 我的粉丝
            '/fans': {
                target: 'http://10.31.167.29:8012',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/fans': '/care/fansList'    //代理的路径
                }
            },
            // 我的关注
            '/focus': {
                target: 'http://10.31.167.29:8012',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/focus': '/care/caredList'    //代理的路径
                }
            },
            // 取消关注
            '/iffocus': {
                target: 'http://10.31.167.29:8012',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/iffocus': '/care/delCare'    //代理的路径
                }
            }
        }
    },
};