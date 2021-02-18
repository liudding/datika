import axios from 'axios'
import store from '@/store'

const instance = axios.create({
    baseURL: process.env.VUE_APP_BASE_API_URL,
    timeout: 5000,
});

instance.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers['Authorization'] = 'Bearer ' + token
    }

    return config
})

instance.interceptors.response.use(
    response => response,
    error => {
        console.log('[HTTP REQUEST ERROR]: ' + error, error.response);

        if (error.response) {
            // The request was made and the server responded with a status code

            const response = error.response

            if (response.status === 401) {
                // 未认证
                store.dispatch('feLogout').then(() => {
                    // location.reload()
                })
                return Promise.reject(error)
            }

            if (response.data.message === 'Unauthenticated.') {
                // 由于服务端在 token 失效时，会返回 500, 所以使用此 trick 来判断登录态是否有效

                store.dispatch('feLogout').then(() => {
                    location.reload()
                })
            }



        } else if (error.request) {
            // The request was made but no response was received
        } else {
            // Something happened in setting up the request that triggered an Error
        }

        return Promise.reject(error)
    }
)


export default instance;