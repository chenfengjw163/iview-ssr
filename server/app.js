const fs = require('fs')
const bodyParser = require('body-parser')
const Express = require('express')
const path = require('path')
const {createBundleRenderer} = require('vue-server-renderer')
const serverBundle = require('./bundle/vue-ssr-server-bundle.json')
const clientManifest = require('./bundle/vue-ssr-client-manifest.json')

process.env.NODE_ENV = 'production'
let app = new Express()

app.use('/static', Express.static(path.join(__dirname, 'bundle/static')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

const template = fs.readFileSync(path.join(__dirname, '../index.html'), 'utf-8')
const renderer = createBundleRenderer(serverBundle, {
    template,
    clientManifest,
    inject: false
})

app.use('/', (req, res) => {
    let context = {
        req,
        res
    }

    renderer.renderToString(context, (error, html) => {
        if (error) {
            console.error(error)
        }
        return res.end(html)
    })
})
app.listen(3001, () => {
    console.log('start')
})
