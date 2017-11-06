const config = {
    development: {
        axiosBaseUrl: process.env.VUE_ENV === 'server' ? 'http://localhost:6004/' : '//m.yohoblk.com/',
        axiosResponseType: 'json'
    },
    production: {
        axiosBaseUrl: process.env.VUE_ENV === 'server' ? 'http://localhost:6004/' : '//m.yohoblk.com/',
        axiosResponseType: 'json'
    }
};

export default config[process.env.NODE_ENV];
