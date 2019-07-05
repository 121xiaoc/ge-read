const path = require(`path`)
const pxtorem = require('postcss-pxtorem')
const autoprefixer = require('autoprefixer')
const resolve = dir => path.join(__dirname, dir)

const port = 3000

module.exports = {
    publicPath: '/',
    outputDir: "dist/",
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    autoprefixer(),
                    pxtorem({
                        rootValue: 37.5,
                        propList: ['*']
                    })
                ]
            }
        }
    },
    configureWebpack: {
        resolve: {
            extensions: ['.js', 'jsx', '.ts', '.vue', '.json', 'sass'],
            alias: {
                '@': resolve('src'),
            }
        },
    },
    chainWebpack: config => {
        config.resolve.symlinks(true);
        // dev环境下开启source-map便于调试
        config.merge({ devtool: 'source-map' });
    },
    devServer: {
        open: false,
        host: '0.0.0.0',
        port,
        https: false,
        hotOnly: true,
        proxy: {
            '/api': {
                target: 'http://localhost:3001',
                changOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }

            }
        },
    },
    parallel: require("os").cpus().length > 1, // 构建时开启多进程处理 babel 编译
}