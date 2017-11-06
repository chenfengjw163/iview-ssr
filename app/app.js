import Vue from 'vue'
import App from './app.vue'
import pluginCore from './plugins/core'
import {createRouter} from './router'
import {createStore} from './store'

Vue.use(pluginCore)

export default () => {
    const store = createStore()
    const router = createRouter(store)

    const app = new Vue({
        router,
        store,
        render: h => h(App)
    })

    return {app, router, store}
}
