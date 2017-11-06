import Vue from 'vue';
import Router from 'vue-router';
import pages from '../pages';
import _ from 'lodash/core';

Vue.use(Router);

const loadRoutes = (rous, paths, children) => {
    if (_.has(rous, 'path')) {
        let currentRous = Object.assign({}, rous);
        let ps = _.flattenDeep(paths).filter(p => p);

        if (_.last(ps) === currentRous.name) {
            ps.splice(ps.length - 1, 1);
        }
        if (!children) {
            if (currentRous.path) {
                currentRous.path = '/' + ps.join('/') + (currentRous.path[0] === '/' ? '' : '/') + currentRous.path;
            } else {
                currentRous.path = ps.join('/') + '.html';
            }
        }
        currentRous.name = _.concat(ps, [currentRous.name]).join('.');

        if (currentRous.children) {
            _.each(currentRous.children, child => loadRoutes(child, [paths, child.name], true));
            return [currentRous];
        }
        return [currentRous];
    }
    if (rous.length) {
        return _.map(rous, r => {
            return loadRoutes(r, [paths]);
        });
    } else {
        return _.map(rous, (rou, k) => {
            return loadRoutes(rou, [paths, k]);
        });
    }
};
const routes = _.flattenDeep(loadRoutes(pages));

export function createRouter() {
    const router = new Router({
        mode: 'history',
        routes,
        scrollBehavior(to, from, savedPosition) {
            if (savedPosition) {
                return savedPosition;
            } else {
                return { x: 0, y: 0 };
            }
        }
    });

    return router;
}
