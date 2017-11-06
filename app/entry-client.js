import Vue from 'vue';
import createApp from './app';
import FastClick from 'fastclick';
import './statics/css/iconfont.css';
import { AlertPlugin, ToastPlugin } from 'vux';
import {
    UPDATE_PAGE
} from 'store/vux/types';

FastClick.attach(document.body);

const {app, router, store} = createApp();

if (window.__INITIAL_STATE__) {
    store.replaceState(window.__INITIAL_STATE__);
}
Vue.use(AlertPlugin);
Vue.use(ToastPlugin);

router.onReady(() => {
    router.beforeResolve((to, from, next) => {
        const matched = to.matched[0];

        if (to.matched.length) {
            if (matched.components.default.page) {
                const page = matched.components.default.page();

                store.commit(UPDATE_PAGE, typeof page === 'string' ? {
                    header: {
                        title: page
                    }
                } : page);
            }
        }
        next();
    });
    app.$mount('#app');
});

module.hot.accept();
