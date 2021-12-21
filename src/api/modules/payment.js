import request from "@/api/request";

export default {
    // 获取支付信息
    getPayInfo: orderId => request({
        url: `/payment/weixin/createNative/${orderId}`,
        method: 'get'
    }),
    // 获取支付状态
    getPayStatus: orderId => request({
        url: `/payment/weixin/queryPayStatus/${orderId}`,
        method: 'get'
    })
}
