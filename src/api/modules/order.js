import request from "@/api/request";

export default {
    // 获取订单交易信息
    getOrderTradeInfo: () => request({
        url: `/order/auth/trade`,
        method: 'get'
    }),
    // 提交订单
    submitOrder: (tradeNo, orderInfo) => request({
        url: `/order/auth/submitOrder?tradeNo=${tradeNo}`,
        method: 'post',
        data: orderInfo
    }),
}
