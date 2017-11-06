import createApp from './app'
import {
    UPDATE_PAGE
} from 'store/vux/types'

const {app, router, store} = createApp()

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
            if (matchedComponents.length) {
                const matched = matchedComponents[0]
                if (matched.page) {
                    const page = matched.page()
                    store.commit(UPDATE_PAGE, typeof page === 'string' ? {
                        header: {
                            title: page
                        }
                    } : page)
                }
            }
            context.state = store.state
            resolve(app)
        })
    })
}
