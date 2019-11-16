import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
import 'amfe-flexible';
import { PasswordInput, NumberKeyboard } from 'vant';
import axios from "axios";
Vue.prototype.axios = axios
const axiosAjax = axios.create({
    timeout: 1000 * 60, //时间
    withCredentials: true, //跨域携带cookie
    headers: {
        "Content-Type": "multipart/form-data"
    }
});
Vue.prototype.axiosAjax = axiosAjax// 用来上传文件的


Vue.use(PasswordInput).use(NumberKeyboard);//使用键盘输入验证码插件


Vue.use(Vant);

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')