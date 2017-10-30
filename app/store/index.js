import Vue from 'vue'
import Vuex from 'vuex'
import {topics} from './modules'

Vue.use(Vuex)

export function createStore () {
    return new Vuex.Store({
        modules: {
            topics
        },
        strict: process.env.NODE_ENV !== 'production'
    })
}
