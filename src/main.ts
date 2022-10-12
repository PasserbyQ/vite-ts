import { createApp } from 'vue'
import App from './App.vue'
import '@/styles/index.scss'
// router
import '@/router/router.interceptor'
import router from '@/router'
// pinia store
import pinia from "@/store/index";
// element plus
import ElementPlus from "element-plus";

const app = createApp(App);
app.use(router)
    .use(pinia)
    .use(ElementPlus)
    .mount('#app')