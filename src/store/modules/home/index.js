// home - vux
import productApi from "@/api/product";

const state = {
    categoryList: []
}

const mutations = {
    GET_CRTEGORYLIST(state, categoryList) {
        state.categoryList = categoryList;
    }
}

const actions = {
    // async 函数的返回值为 Promise 对象且只能在 async 中使用 await
    async getCategoryList({commit}) {
        // 通过 await 可以获取右侧 promise 对象的成功的值
        let result = await productApi.getCategoryList();
        if (result.code === 200) {
            commit("GET_CRTEGORYLIST", result.data)
        }
    }
}

const getters = {

}

export default {
    state,
    mutations,
    actions,
    getters
}
