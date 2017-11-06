const fs = require('fs')
const compression = require('compression')
const bodyParser = require('body-parser')
const Express = require('express')
const favicon = require('serve-favicon')
const path = require('path')
const {createBundleRenderer} = require('vue-server-renderer')

const isProd = process.env.NODE_ENV === 'production'
let app = new Express()

app.use(compression({ threshold: 0 }))
app.use(favicon(path.join(__dirname, '/favicon.ico')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

const template = fs.readFileSync(path.join(__dirname, './index.html'), 'utf-8')
let renderer
let realyPromise
if (isProd) {
    const serverBundle = require('./bundle/vue-ssr-server-bundle.json')
    const clientManifest = require('./bundle/vue-ssr-client-manifest.json')
    renderer = createBundleRenderer(serverBundle, {
        runInNewContext: false,
        template,
        clientManifest
    })
} else {
    realyPromise = require('./build/dev-server.js')(app, params => {
        renderer = createBundleRenderer(params.bundle, Object.assign(params.options, {
            runInNewContext: false,
            template
        }))
    })
}

const render = (req, res, next) => {
    let context = {
        req,
        res,
        url: req.url
    }
    try {
        renderer.renderToString(context, (err, html) => {
            if (err) {
                console.error('error:', err)
            }
            return res.end(html)
        })
    } catch (err) {
        next()
    }
}

app.use('/', isProd ? render : (req, res, next) => {
    return realyPromise.then(() => {
        render(req, res)
    })
})
app.listen(3001, () => {
    console.log('start width 3001')
})
