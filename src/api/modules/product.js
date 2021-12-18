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
    getProducetDetailInfo: (skuId) => request({
        url: `/item/${skuId}`,
        method: 'get'
    })
}
