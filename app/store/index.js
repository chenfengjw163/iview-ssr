import Vue from 'vue';
import Vuex from 'vuex';
import {createApi} from 'create-api';

import vux from './vux';
import demo from './demo';

Vue.use(Vuex);

export function createStore() {
    const store = new Vuex.Store({
        modules: {
            vux,
            demo
        },
        strict: process.env.NODE_ENV !== 'production'
    });

    store.$api = createApi();

    return store;
}
