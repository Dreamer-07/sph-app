<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <Footer v-show="this.$route.meta.showFooter"></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from  '@/components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  mounted() {
    // 获取全局组件中的需要的数据，避免多次发出请求
    this.$store.dispatch('getCategoryList')
  }
}
</script>

<style>
</style>
