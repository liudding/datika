import axios from 'axios'

const instance = axios.create({
    baseURL: process.env.VUE_APP_BASE_API_URL,
    timeout: 5000,
});

instance.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token) {
        // 让每个请求携带token
        config.headers['Authorization'] = 'Bearer ' + token
      }
      return config
})


export default instance;