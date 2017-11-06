import axios from 'axios'
import config from 'config'

axios.defaults.baseURL = config.axiosBaseUrl
axios.defaults.responseType = config.axiosResponseType
axios.defaults.headers = {
    'X-Requested-With': 'XMLHttpRequest'
}

const errHandle = error => {
    let msg = error && error.config ? `ssr api:[${error.config.method}] ${error.config.url} ${error.config.params || ''} ${error.response && error.response.data}` : 'axios error'

    return Promise.reject(msg)
}
const request = async (options) => {
    return await new Promise(resolve => {
        return resolve({data: [{name: 1}], code: 200})
    })
    // return await axios(options).then(res => res.data, errHandle)
}

export const createApi = () => {
    return {
        async get (url, params, options) {
            return await request(Object.assign({
                url,
                params,
                method: 'get'
            }), options)
        },
        async post (url, data, options) {
            return await request(Object.assign({
                url,
                data,
                method: 'post'
            }, options))
        }
    }
}
