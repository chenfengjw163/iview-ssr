import createApp from './app'

createApp().then(vue => {
    vue.$router.onReady(() => {
        vue.$mount('#app')
    })
})
