


// vue js
import Vue from "vue";
window.Vue = Vue;


import app from './app.vue';

new Vue({
    render: (h) => h(app),
}).$mount('#app');