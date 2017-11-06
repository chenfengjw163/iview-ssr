export default [{
    path: '/news',
    alias: '/',
    name: 'news',
    component: () => import(/* webpackChunkName: "news" */ './news')
}, {
    path: '/:id',
    name: 'news-detail',
    component: () => import(/* webpackChunkName: "news-detail" */ './news-detail')
}]
