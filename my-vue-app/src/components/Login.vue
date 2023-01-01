<template>
  <div>
    <h1>欢迎来到登录界面 </h1>
    <el-button @click="goHome">回首页</el-button>
  </div>
</template>

<!-- // composition api方式：
<script setup>
import { useRouter } from 'vue-router'
let router = useRouter()
const goHome = () => {
  router.push('/welcome')
}
</script> -->
<script>
import Welcome from './Welcome.vue'
export default {
  name: 'login',
  components: { Welcome },

  mounted() {
    // request封装函数是调用这个函数然后返回一个options
    this.$request({
      method: 'get',
      url: '/login',
      data: {
        name: 'jack'
      }
    }).then((res) => {
      console.log(res);
    })
  },
  
  methods: {
    goHome() {
      this.$router.push('/welcome')
    }
  }
}
</script>

<style >

</style>
