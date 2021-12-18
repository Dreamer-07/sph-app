// search - index
import productApi from "@/api/modules/product";

const state = {
    // 搜索的商品信息
    productInfo: {
        attrsList: [],
        goodsList: [],
        trademarkList: [],
    }
}

const mutations = {
    SAVE_PRODUCT_INFO(state, productInfo) {
        state.productInfo = productInfo;
    }
}

const actions = {
    // 搜索商品
    async goSearchProduct({commit}, searchObj) {
        let result = await productApi.searchProductInfo(searchObj);
        if (result.code === 200) {
            commit("SAVE_PRODUCT_INFO", result.data);
        }
    }
}

// 通过 getters 简化获取数据的步骤
const getters = {
    attrsList: (state) => state.productInfo.attrsList || [],
    goodsList: (state) => state.productInfo.goodsList || [],
    trademarkList: (state) => state.productInfo.trademarkList || []
}

export default {
    state,
    mutations,
    actions,
    getters
}
