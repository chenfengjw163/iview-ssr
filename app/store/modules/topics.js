import {mutations} from '../mutations/topics'
import {getters} from '../getters/topics'
import {actions} from '../actions/topics'

export const topics = {
    state: {
        data: [],
        isFetching: false
    },
    mutations,
    getters,
    actions
}
