export default [{
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ './about')
}, {
    path: '/my',
    name: 'my',
    component: () => import(/* webpackChunkName: "my" */ './my')
}]
