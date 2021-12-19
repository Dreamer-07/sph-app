import productApi from "@/api/modules/product";

const state = {

}

const mutations = {

}

const actions = {
    async addShopCart({commit}, {skuId, skuNum}) {
        let result = await productApi.addShopCart(skuId, skuNum);
        if (result.code === 200) {
            return Promise.resolve('success');
        } else {
            return Promise.reject("faild")
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
