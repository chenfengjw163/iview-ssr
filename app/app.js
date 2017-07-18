import Vue from 'vue'
import iview from 'iview'
import 'iview/dist/styles/iview.css'

Vue.use(iview)

export default () => {
    return new Vue({
        render () {
            return (
                <div id="app">
                    hello world!
                </div>
            )
        },
        created () {
            this.$Loading.start()

            setTimeout(() => {
                this.$Loading.finish()
            }, 2000)
        }
    })
}
