import Vue from 'vue';
import root from './App.vue';
import router from './router';
import animate from 'animate.css'
Vue.use(animate)

new Vue({
    router,
    render: h => h(root)
}).$mount('#root');