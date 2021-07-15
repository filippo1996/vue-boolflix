import Vue from 'vue'
import App from './App.vue'
import '@fortawesome/fontawesome-free/js/all.min.js';

Vue.config.productionTip = false

export const eventBus = new Vue();

new Vue({
  render: h => h(App),
}).$mount('#app')
