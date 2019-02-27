import Vue from 'vue';
import root from './App.vue';
import router from './router';
import animate from 'animate.css'

Vue.use(animate)
// https://daneden.github.io/animate.css/
// css3动画库

new Vue({
    router,
    render: h => h(root)
}).$mount('#root');