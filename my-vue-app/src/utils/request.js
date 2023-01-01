// axios二次封装
import axios from 'axios'
import config from '../config'
import { ElMessage } from 'element-plus'
import router from '../router'

const TOKEN_INVALID = 'Token认证失败，请重新登陆'
const NETWORK_ERROR = '网络请求异常，请稍后重试'
// 创建axios实例对象，添加全局配置
const service = axios.create({
    // 这里的作用是以后发请求的base地址请求都会指向这个地址，根据环境变量去匹配
    baseURL: config.baseApi,
    // 8s
    timeout: 8000,

})

// 请求拦截
service.interceptors.request.use((req) => {
    // TO-DO
    const headers = req.headers;
    // 判断
    if (!headers.Authorization) headers.Authorization = 'Bear Jack'
    return req;
})

//响应拦截 
// res是整个网络的状态码，我们要获取的是里边的接口返回的data
service.interceptors.response.use((res) => {
    const { code, data, msg } = res.data;
    if (code === 0) {
        return data;
    } else if (code === 40001) {
        ElMessage.error(TOKEN_INVALID)
        // 跳转登录页面
        setTimeout(() => {
            router.push('/login')
        }, 15000)
        // 抛出异常到控制台
        return Promise.reject(TOKEN_INVALID)
    } else {
        ElMessage.error(msg || NETWORK_ERROR)
        return Promise.reject(msg || NETWORK_ERROR)
    }
})

// 封装请求核心函数
function request(options) {
    options.method = options.method || 'get'
    if (options.method.toLowerCase() === 'get') {
        // 类型转换
        options.params = options.data;
    }

    if (config.env === 'prod') {
        // 防止变成mockapi
        service.defaults.baseURL = config.baseApi
    } else {
        service.defaults.baseURL = config.mockApi ? config.mockApi : config.baseApi

    }
    return service(options)
}
export default request;