import Vue from 'vue'
import root from './App.vue'
import router from './router' 
import store from './store'
import animate from 'animate.css'

Vue.use(animate)
// https://daneden.github.io/animate.css/

new Vue({
    router,
    store,
    render: h => h(root)
}).$mount('#root');