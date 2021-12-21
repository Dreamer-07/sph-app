import userApi from "@/api/modules/user";
import orderApi from "@/api/modules/order";

const state = {
    addressList: [],
    orderTradInfo: {}
}

const mutations = {
    SAVE_ADDRESS_LIST(state, addressList){
        state.addressList = addressList;
    },
    GET_ORDER_TRADE_INFO(state, orderTradeInfo) {
        state.orderTradInfo = orderTradeInfo;
    }
}

const actions = {
    async getAddressList({commit}) {
        let result = await userApi.getAddressList();
        if (result.code === 200) {
            commit('SAVE_ADDRESS_LIST', result.data);
            return Promise.resolve('success');
        } else {
            return Promise.reject(new Error('faild'));
        }
    },
    async getOrderTradeInfo({commit}) {
        let result = await orderApi.getOrderTradeInfo();
        if (result.code === 200) {
            commit('GET_ORDER_TRADE_INFO', result.data);
            return Promise.resolve('success');
        } else {
            return Promise.reject(new Error('faild'));
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
