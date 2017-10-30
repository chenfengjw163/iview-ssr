import Vue from 'vue'
import Router from 'vue-router'
import List from '../views/list'
import Edit from '../views/edit'
import Detail from '../views/detail'

Vue.use(Router)

const routes = [
    {
        path: '/list', component: List
    },
    {
        path: '/edit', component: Edit
    },
    {
        path: '/detail', component: Detail
    },
    {
        path: '/', redirect: '/list'
    }
]

export function createRouter () {
    return new Router({
        mode: 'history',
        routes
    })
}
