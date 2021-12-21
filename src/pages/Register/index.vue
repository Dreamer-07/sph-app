<template>
  <div class="register-container">
    <!-- 注册内容 -->
    <div class="register">
      <h3>注册新用户
        <span class="go">我有账号，去 <a href="login.html" target="_blank">登陆</a>
        </span>
      </h3>
      <div class="content">
        <label>手机号:</label>
        <!-- 通过 name 和 v-validate 指令配置校验规则 -->
        <input type="text" placeholder="请输入你的手机号" v-model="phone" name="phone"
               v-validate="{ required: true, regex: /^1\d{10}$/  }" :class="{ invalid: errors.has('phone') }">
        <span class="error-msg">{{ errors.first('phone') }}</span>
      </div>
      <div class="content">
        <label>验证码:</label>
        <input type="text" placeholder="请输入验证码" v-model="phoneCode" name="phoneCode"
               v-validate="{ required: true, regex: /^\d{6}$/ }" :class="{ invalid: errors.has('phoneCode') }"
        />
        <button style="width: 100px; height: 38px" @click="getPhoneCode">获取验证码</button>
        <span class="error-msg">{{ errors.first('phoneCode') }}</span>
      </div>
      <div class="content">
        <label>登录密码:</label>
        <input type="password" placeholder="请输入你的登录密码" v-model="password" name="password"
               v-validate="{ required: true, regex: /^[0-9a-zA-Z]{8,20}$/ }"
               :class="{ invalid: errors.has('password') }"
        />
        <span class="error-msg">{{ errors.first('password') }}</span>
      </div>
      <div class="content">
        <label>确认密码:</label>
        <!-- is 表示与指定字段的值必须相同 -->
        <input type="password" placeholder="请输入确认密码" v-model="checkPassword" name="checkPassword"
               v-validate="{ required: true, is: password }" :class="{ invalid: errors.has('checkPassword') }">
        <span class="error-msg">{{ errors.first('checkPassword') }}</span>
      </div>
      <div class="controls">
        <input type="checkbox" v-model="isAggre" name="isAggre"
               v-validate="{ 'aggre': true }" :class="{ invalid: errors.has('isAggre') }">
        <span>同意协议并注册《尚品汇用户协议》</span>
        <span class="error-msg">{{ errors.first('isAggre') }}</span>
      </div>
      <div class="btn">
        <button @click="registerUser">完成注册</button>
      </div>
    </div>

    <!-- 底部 -->
    <div class="copyright">
      <ul>
        <li>关于我们</li>
        <li>联系我们</li>
        <li>联系客服</li>
        <li>商家入驻</li>
        <li>营销中心</li>
        <li>手机尚品汇</li>
        <li>销售联盟</li>
        <li>尚品汇社区</li>
      </ul>
      <div class="address">地址：北京市昌平区宏福科技园综合楼6层</div>
      <div class="beian">京ICP备19006430号
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data() {
    return {
      phone: '',
      phoneCode: '',
      password: '',
      checkPassword: '',
      isAggre: true
    }
  },
  methods: {
    // 获取手机验证码
    async getPhoneCode() {
      let {phone} = this;
      phone && await this.$store.dispatch('getPhoneCode', phone)
      this.phoneCode = this.$store.state.user.phoneCode;
    },
    // 注册新用户
    async registerUser() {
      // 进行规则校验
      let isSuccess = await this.$validator.validateAll();
      if (isSuccess) {
        try {
          let {phone, phoneCode, password, checkPassword, isAggre} = this;

          (phone && phoneCode && password && password === checkPassword && isAggre)
          && this.$store.dispatch('registerUser', {
            phone,
            password,
            code: phoneCode
          })

          // 注册成功跳转路由
          this.$router.push({name: 'login'})
        } catch (error) {
          console.error(error.message)
        }
      } else{
        alert('请按照要求填写信息')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.register-container {
  .register {
    width: 1200px;
    height: 445px;
    border: 1px solid rgb(223, 223, 223);
    margin: 0 auto;

    h3 {
      background: #ececec;
      margin: 0;
      padding: 6px 15px;
      color: #333;
      border-bottom: 1px solid #dfdfdf;
      font-size: 20.04px;
      line-height: 30.06px;

      span {
        font-size: 14px;
        float: right;

        a {
          color: #e1251b;
        }
      }
    }

    div:nth-of-type(1) {
      margin-top: 40px;
    }

    .content {
      padding-left: 390px;
      margin-bottom: 18px;
      position: relative;

      label {
        font-size: 14px;
        width: 96px;
        text-align: right;
        display: inline-block;
      }

      input {
        width: 270px;
        height: 38px;
        padding-left: 8px;
        box-sizing: border-box;
        margin-left: 5px;
        outline: none;
        border: 1px solid #999;
      }

      img {
        vertical-align: sub;
      }

      .error-msg {
        position: absolute;
        top: 100%;
        left: 495px;
        color: red;
      }
    }

    .controls {
      text-align: center;
      position: relative;

      input {
        vertical-align: middle;
      }

      .error-msg {
        position: absolute;
        top: 100%;
        left: 495px;
        color: red;
      }
    }

    .btn {
      text-align: center;
      line-height: 36px;
      margin: 17px 0 0 55px;

      button {
        outline: none;
        width: 270px;
        height: 36px;
        background: #e1251b;
        color: #fff !important;
        display: inline-block;
        font-size: 16px;
      }
    }
  }

  .copyright {
    width: 1200px;
    margin: 0 auto;
    text-align: center;
    line-height: 24px;

    ul {
      li {
        display: inline-block;
        border-right: 1px solid #e4e4e4;
        padding: 0 20px;
        margin: 15px 0;
      }
    }
  }
}
</style>
