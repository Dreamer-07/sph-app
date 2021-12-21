import request from '../request'

export default {
    // 获取手机验证码
    getPhoneCode: (phone) => request({
        url: `/user/passport/sendCode/${phone}`,
        method: 'get'
    }),
    // 注册新用户
    registerUser: (userInfo) => request({
        url: `/user/passport/register`,
        method: 'post',
        data: userInfo
    }),
    // 用户登录
    userLogin: (userLoginInfo) => request({
        url: `/user/passport/login`,
        method: 'post',
        data: userLoginInfo
    }),
    // 获取用户信息
    getUserInfo: () => request({
        url: `/user/passport/auth/getUserInfo`,
        method: 'get'
    }),
    // 注销用户
    logoutUser: () => request({
        url: `/user/passport/logout`,
        method: 'get'
    }),
    // 获取用户配置的地址信息
    getAddressList: () => request({
        url: `user/userAddress/auth/findUserAddressList`,
        method: 'get'
    })
}
