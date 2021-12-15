import axios from "axios"
import nprogress from 'nprogress'
// 引入 nprogress 样式
import 'nprogress/nprogress.css'

// 配置 axios
const request = axios.create({
    // 接口基础路径
    baseURL: '/api',
    // 请求超时
    timeout: 5000
})

// 配置请求拦截器
request.interceptors.request.use(config => {
    // 开启进度条
    nprogress.start();
    return config;
})

// 配置响应拦截器
request.interceptors.response.use(
    // 服务器成功响应
    (res) => {
        // 关闭进度条
        nprogress.done();
        return res.data
    },
    // 服务器失败响应
    (error) => {
        return Promise.reject(new Error("faild"))
    }
)

export default request
