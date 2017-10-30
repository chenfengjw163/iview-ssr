const webpack = require('webpack')
const path = require('path')
const MFS = require('memory-fs')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
let clientConfig = require('./webpack.client.conf.js')
let serverConfig = require('./webpack.server.conf.js')

const vm = require('vm');
const NativeModule = require('module');

const readFile = (fs, file) => {
    try {
        return fs.readFileSync(path.join(clientConfig.output.path, file), 'utf-8')
    } catch(e) {}
}

module.exports = (app, cb) => {
    let resolve;
    let realyPromise = new Promise(r => resolve = r)
    let ready = (...args) => {
        resolve()
        cb(...args);
    }
    clientConfig.entry.app = ['webpack-hot-middleware/client', clientConfig.entry.app]
    clientConfig.output.filename = '[name].js';
    clientConfig.plugins.push(
        new webpack.HotModuleReplacementPlugin()
    )
    const clientCompiler = webpack(clientConfig)
    const devMiddleware = webpackDevMiddleware(clientCompiler, {
        publicPath: clientConfig.output.publicPath,
    })

    app.use(devMiddleware)

    let bundle, clientManifest
    clientCompiler.plugin('done', stats => {
        stats = stats.toJson();
        stats.errors.forEach(error => console.log(error))
        stats.warnings.forEach(warning => console.log(warning))
        if (stats.errors.length) {
            return
        }
        clientManifest = JSON.parse(readFile(devMiddleware.fileSystem, 'vue-ssr-client-manifest.json'))

        console.error('client start')
        if (bundle) {
            console.error('client done')
            ready({bundle, options: {clientManifest}})
        }
    })
    const hotMiddleware = webpackHotMiddleware(clientCompiler, { heartbeat: 5000 })
    app.use(hotMiddleware)

    const serverCompiler = webpack(serverConfig)
    let mfs = new MFS()
    serverCompiler.outputFileSystem = mfs
    serverCompiler.watch({}, (err, stats) => {
        if (err) throw err
        stats = stats.toJson()
        if (stats.errors.length) {
            return
        }
        bundle = JSON.parse(readFile(mfs, 'vue-ssr-server-bundle.json'))
        if (clientManifest) {
            console.error('server done')
            ready({bundle, options: {clientManifest}})
        }
    })

    return realyPromise
}