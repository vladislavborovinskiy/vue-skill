import '@/assets/css/base.css';

import 'reflect-metadata';
import Vue from 'vue';
import App from './App.vue';

const main = async () => {
    Vue.config.productionTip = false;

    new Vue({
        render: h => h(App),
    }).$mount('#app');
}

main();