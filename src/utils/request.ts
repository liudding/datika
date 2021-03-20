import axios from 'axios'
import store from '@/store'

const instance = axios.create({
    baseURL: process.env.VUE_APP_BASE_API_URL,
    timeout: 5000,
});

instance.interceptors.request.use(config => {
    const token = (store as any).state.user.token;
    if (token) {
        config.headers['Authorization'] = 'Bearer ' + token
    }

    config.headers['User-Agent'] = navigator.userAgent + ' youcce/' + process.env.VUE_APP_VERSION;
   
    console.log(config.headers);

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
                    location.reload()
                })
                return Promise.reject(error)
            }

            if (response.data.message === 'Unauthenticated.') {
                // 由于服务端在 token 失效时，会返回 500, 所以使用此 trick 来判断登录态是否有效

                store.dispatch('feLogout').then(() => {
                    location.reload()
                })
            }

            if (response.status === 404) {
                error.response.data.friendlyMessage = '数据不存在，请刷新';

                return Promise.reject(error);
            }

            error.response.data.friendlyMessage = response.data.message

            if (response.status === 422) {
                // validation errors
                let message;
                for (const key in response.data.errors) {
                    const errors = response.data.errors[key];
                    message = errors[0];
                    break;
                }

                message && (error.response.data.friendlyMessage = message);
                return Promise.reject(error);
            }

        } else if (error.request) {
            // The request was made but no response was received
            console.error(error.request)
            alert('请检测网络是否正常');
        } else {
            // Something happened in setting up the request that triggered an Error
            alert('出错了');
        }

        return Promise.reject(error)
    }
)


export default instance;