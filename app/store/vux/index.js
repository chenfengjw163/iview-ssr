import {
    UPDATE_DIRECTION,
    UPDATE_PAGE
} from './types'
import _ from 'lodash'

export default {
    state: {
        direction: 'forward',
        rootPage: true,
        showNav: true,
        header: {
            title: '',
            showBack: true,
            showTabbar: false
        }
    },
    mutations: {
        [UPDATE_DIRECTION] (state, params) {
            state.direction = params.direction
        },
        [UPDATE_PAGE] (state, params) {
            state.header.title = _.get(params, 'header.title')
            state.header.showBack = _.get(params, 'header.showBack') !== false
            state.header.showTabbar = _.get(params, 'header.showTabbar') === true
        }
    },
    actions: {
    }
}
