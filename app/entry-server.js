import createApp from './app'

const {app, router} = createApp()

export default context => {
    return new Promise((resolve, reject) => {
        const {url} = context
        const route = router.resolve(url).route

        if (url !== route.fullPath && url !== route.redirectedFrom) {
            reject({url: route.fullPath})
        }
        router.push(url)
        router.onReady(() => {
            const matchedComponents = router.getMatchedComponents()
            if (!matchedComponents.length) {
                reject({code: 404})
            }
            resolve(app)
        })
    })
}
