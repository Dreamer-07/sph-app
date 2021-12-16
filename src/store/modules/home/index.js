// home - vux
import productApi from "@/api/modules/product";

const state = {
    categoryList: [],
    bannerList: [],
    floorList: []
}

const mutations = {
    GET_CRTEGORYLIST(state, categoryList) {
        state.categoryList = categoryList;
    },
    GET_BANNERLIST(state, bannerList) {
        state.bannerList = bannerList;
    },
    GET_FLOORLIST(state, floorList) {
        state.floorList = floorList;
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
    },
    // 获取 banner 数据
    async getBannerList({commit}) {
        let result = await productApi.getBannerList();
        commit("GET_BANNERLIST", result);
    },
    // 获取 floor 数据
    async getFloorList({commit}) {
        let result = await productApi.getFloorList();
        commit("GET_FLOORLIST", result);
    }
}

const getters = {}

export default {
    state,
    mutations,
    actions,
    getters
}
