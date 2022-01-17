import Vue        from 'vue'
import App        from './App.vue'
import router     from './router'
import store      from './store'
import {currency} from './currency'
import '@/directives/index'
import '@/filters/index'

Vue.filter('currency', currency)
Vue.config.productionTip = false

/*before route*/
router.beforeEach((to, from, next) => {
    /*console.log(to, 'to')
    console.log(from, 'from')
    console.log(next, 'next')*/
    next();
})


new Vue({
    router, store, render: h => h(App)
}).$mount('#app')
