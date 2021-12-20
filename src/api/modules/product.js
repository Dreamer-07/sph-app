import request from "@/api/request";
import mockRequest from "@/api/mockRequest";

export default {
    getCategoryList: () => request({
        url: '/product/getBaseCategoryList',
        method: 'get'
    }),
    // 获取 banner 数据
    getBannerList: () => mockRequest({
        url: '/banner',
        method: 'get'
    }),
    // 获取 floor 数据
    getFloorList: () => mockRequest({
        url: '/floor',
        method: 'get'
    }),
    // 搜索商品信息
    searchProductInfo: (searchObj = {}) => request({
        url: '/list',
        method: 'post',
        data: searchObj
    }),
    // 获取商品详情信息
    getProducetDetailInfo: (skuId) => request({
        url: `/item/${skuId}`,
        method: 'get'
    }),
    // 添加商品到购物车
    addShopCart: (skuId, skuNum) => request({
        url: `/cart/addToCart/${skuId}/${skuNum}`,
        method: 'post'
    }),
    // 获取购物车列表
    getShopCartList: () => request({
        url: `/cart/cartList`,
        method: 'get'
    }),
    // 删除购物车中的信息
    delShopCartDetail: (skuId) => request({
        url: `/cart/deleteCart/${skuId}`,
        method: 'delete'
    }),
    updateShopCartDetailChecked: (skuId, checked) => request({
        url: `/cart/checkCart/${skuId}/${checked}`,
        method: 'get'
    })
}
