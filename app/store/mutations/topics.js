import {
    FETCH_TOPICS_REQUEST,
    FETCH_TOPICS_SUCCESS,
    FETCH_TOPICS_FAILURE
} from '../constants/type'

export const mutations = {
    [FETCH_TOPICS_REQUEST] (state) {
        state.isFetching = true
    },
    [FETCH_TOPICS_SUCCESS] (state, params) {
        state.data = params.data
        state.isFetching = false
    },
    [FETCH_TOPICS_FAILURE] (state, params) {
        state.isFetching = false
        state.error = params.error
    }
}
