import request from "@/api/request";

export default {
    getCategoryList: () => request({
        url: '/product/getBaseCategoryList',
        method: 'get'
    })
}
