import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import Elementplus from 'element-plus'
import 'element-plus/dist/index.css'
import request from './utils/request'
// import config from './config'


console.log("环境变量=>", import.meta.env);
const app = createApp(App);
// 全局挂载
app.config.globalProperties.$request = request;
// 这里可以挂载到app上
app.use(router).use(Elementplus).mount('#app')
