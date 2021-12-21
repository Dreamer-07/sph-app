import Vue from "vue";
import VeeValidate from "vee-validate";
// 引入中文包
import zh_CN from 'vee-validate/dist/locale/zh_CN'

Vue.use(VeeValidate)

// 配置 VeeValidate 校验规则
VeeValidate.Validator.localize('zh_CN', {
    // 配置提示消息体
    messages: {
        ...zh_CN.messages,
        is: (field) => `${field}必须要和密码相同`
    },
    // 配置属性
    attributes: {
        phone: '手机号',
        phoneCode: '验证码',
        password: '密码',
        checkPassword: '确认密码',
        isAggre: '协议'
    }
})

// 自定义校验规则
VeeValidate.Validator.extend('aggre', {
    // 校验规则
    validate: value => value,
    // 错误信息
    getMessage: field => `只有同意${field}后才能继续哟`
})
