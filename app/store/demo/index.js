import {
    FETCH_DEMO_LIST_REQUEST,
    FETCH_DEMO_LIST_FAILURE,
    FETCH_DEMO_LIST_SUCCESS
} from './types';

export default {
    state: {
        fetching: false, // 查询数据的状态
        listError: '', // 查询返回错误时信息
        list: [] // 需要查询的数据
    },
    mutations: {
        [FETCH_DEMO_LIST_REQUEST](state) {
            state.fetching = true;
        },
        [FETCH_DEMO_LIST_FAILURE](state, params) {
            state.fetching = false;
            state.listError = params.error;
        },
        [FETCH_DEMO_LIST_SUCCESS](state, params) {
            state.fetching = false;
            state.list = params.list;
        }
    },
    actions: {
        async [FETCH_DEMO_LIST_REQUEST]({commit}, params) {
            commit(FETCH_DEMO_LIST_REQUEST);
            const result = await this.$api.get('/xxx', {name: params.name});

            if (result.code === 200) {
                commit(FETCH_DEMO_LIST_SUCCESS, {list: result.data});
            } else {
                commit(FETCH_DEMO_LIST_FAILURE);
            }
            return result;
        }
    }
};
