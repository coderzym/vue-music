import { createApp } from "vue";
import router from "./router/index";
import ElementPlus from "element-plus";
import App from "./App.vue";

// 引入公共css文件
import "./assets/common.css";

createApp(App).use(router).use(ElementPlus).mount("#app");
