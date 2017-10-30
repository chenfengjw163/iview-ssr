import {
    FETCH_TOPICS_REQUEST,
    FETCH_TOPICS_SUCCESS

    // FETCH_TOPICS_FAILURE
} from '../constants/type'

export const actions = {
    fetchList ({commit, state}, params) {
        commit(FETCH_TOPICS_REQUEST)
        setTimeout(() => {
            commit(FETCH_TOPICS_SUCCESS, {
                data: [{name: 1}, {name: 2}, {name: 3}]
            })
        }, 500)
    }
}
