import webpack from 'webpack'
import webpackMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackConfig from '../webpack.config.client'

const compile = (app) => {
    if(procces.env.NODE_ENV == "development") {
        const compiler = webpack(webpackConfig)
        const middleware = webpackMiddleware(compiler,
            {
                publicPath: webpackConfig.output.public-Path
            })
            app.use(middleware)
            app.use(webpackHotMiddleware(compiler))
    }
}

export default {
    compile
}