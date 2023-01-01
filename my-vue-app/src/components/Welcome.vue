<template>
    <h1>欢迎来到主页--{{ msg }} </h1>
    <!-- <el-button>去登录</el-button> -->
    <router-link to="/login">去登录</router-link>
</template>

<script>
export default {
  name: 'welcome',
  props:['msg'],
}
</script>

<style >

</style>
