import productApi from "@/api/modules/product";

const state = {
    productDetail: {}
}

const mutations = {
    GET_PRODUCT_DETAIL(state, productDetail) {
        state.productDetail = productDetail;
    }
}

const actions = {
    async getProductDetail({commit}, skuId) {
        let result = await productApi.getProducetDetailInfo(skuId);
        if (result.code === 200) {
            commit('GET_PRODUCT_DETAIL', result.data);
        }
    }
}

const getters = {
    detailCategoryView: (state) => state.productDetail.categoryView || {},
    detailSkuInfo: (state) => state.productDetail.skuInfo || {},
    detailSpuSaleAttrList: state => state.productDetail.spuSaleAttrList || {},
}

export default {
    state,
    mutations,
    actions,
    getters
}
