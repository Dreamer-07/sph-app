import userApi from "@/api/modules/user";
import {saveToken, clearToken} from '@/utils/uuid-token'

const state = {
    phoneCode: '',
    userInfo: {},
}

const mutations = {
    GET_PHONECODE(state, phoneCode) {
        state.phoneCode = phoneCode;
    },
    // 保存用户信息
    SAVE_USERINFO(state, userInfo) {
        state.userInfo = userInfo;
    },
    // 请求用户信息
    CLEAR_USERINFO(state) {
        clearToken();
        state.userInfo = {};
    }
}

const actions = {
    // 获取手机验证码
    async getPhoneCode({commit}, phone) {
        let result = await userApi.getPhoneCode(phone);
        if (result.code === 200) {
            commit('GET_PHONECODE', result.data)
        }
    },
    // 注册新用户
    async registerUser({commit}, userInfo) {
        let result = await userApi.registerUser(userInfo);
        if (result.code === 200) {
            return Promise.resolve('success');
        } else {
            return Promise.reject('faild');
        }
    },
    // 用户登录
    async userLogin({commit}, userLoginInfo) {
        let result = await userApi.userLogin(userLoginInfo);
        if (result.code === 200) {
            // 保存 token 信息
            saveToken(result.data.token);
            return Promise.resolve('success');
        } else {
            return Promise.reject('faild');
        }
    },
    // 获取用户信息
    async getUserInfo({commit}) {
        let result = await userApi.getUserInfo();
        if (result.code === 200) {
            commit("SAVE_USERINFO", result.data)
            return Promise.resolve('success');
        } else {
            return Promise.reject('faild');
        }
    },
    async logoutUser({commit}) {
        let result = await userApi.logoutUser();
        if (result.code === 200) {
            commit('CLEAR_USERINFO');
            return Promise.resolve('success');
        } else {
            return Promise.reject('faild');
        }
    }
}

const getters = {}

export default {
    state,
    mutations,
    actions,
    getters
}
