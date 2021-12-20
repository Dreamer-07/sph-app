import productApi from "@/api/modules/product";

const state = {
    shopCartList: [{}]
}

const mutations = {
    GET_SHOPCART_LIST(state, shopCartList) {
        state.shopCartList = shopCartList;
    }
}

const actions = {
    async addOrUpdateShopCart({commit}, {skuId, skuNum}) {
        let result = await productApi.addShopCart(skuId, skuNum);
        if (result.code === 200) {
            return Promise.resolve('success');
        } else {
            return Promise.reject("faild")
        }
    },
    // 获取购物测列表
    async getShopCartList({commit}) {
        let result = await productApi.getShopCartList();
        if(result.code === 200) {
            commit("GET_SHOPCART_LIST", result.data)
        }
    },
    // 删除购物车列表中的信息
    async delShopCartDetailBySkuId({commit}, skuId) {
        let result = await productApi.delShopCartDetail(skuId);
        if (result.code === 200) {
            return Promise.resolve('success')
        } else {
            return Promise.reject('faild')
        }
    },
    // 修改购物测信息
    async updateShopCartDetailChecked({commit}, {skuId, checkedStatus}) {
        let result = await productApi.updateShopCartDetailChecked(skuId, checkedStatus)
        if (result.code === 200) {
            return Promise.resolve('success')
        } else {
            return Promise.reject('faild')
        }
    },
    // 删除所有选中的购物车商品信息
    delAllCheckedShopCartDetail({dispatch}, ids) {
        let promiseAll = [];
        ids.forEach(id => {
            let promise = dispatch('delShopCartDetailBySkuId', id);
            promiseAll.push(promise);
        })
        return Promise.all(promiseAll);
    },
    // 批量修改商品的选中状态
    batchUpdateShopIsChecked({dispatch}, skuInfoList) {
        let promiseAll = [];
        skuInfoList.forEach(skuInfo => {
            let promise = dispatch('updateShopCartDetailChecked', {skuId: skuInfo.skuId, checkedStatus: skuInfo.isChecked});
            promiseAll.push(promise);
        })
        return Promise.all(promiseAll);
    }
}

const getters = {
    // 购物车详情信息
    shopCartDetailList: state => state.shopCartList[0]?.cartInfoList || []
}

export default {
    state,
    mutations,
    actions,
    getters
}
