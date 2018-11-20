import Vue from 'vue';
import root from './root.vue';
import router from './router';

new Vue({
    router,
    render: h => h(root)
}).$mount('#root');