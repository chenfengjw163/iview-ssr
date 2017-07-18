import Vue from 'vue'
import iview from 'iview'
import 'iview/dist/styles/iview.css'
import './app.css'

Vue.use(iview)

let Card = iview.Card;

export default () => {
    return Promise.resolve(new Vue({
        render () {
            // issue: card组件在服务端初始化时未被调用mount周期钩子，所以head在只出时被show出来了
            return (
                <div id="app">
                    <Card>
                        hello world!
                    </Card>
                </div>
            )
        },
        created () {
            // issue: loading组件使用了document报错
            this.$Loading.start()

            setTimeout(() => {
                this.$Loading.finish()
            }, 2000)
        }
    }))
}
