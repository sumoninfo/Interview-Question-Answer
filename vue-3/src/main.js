import {createApp} from 'vue'
import App         from './App.vue'
import router      from './router'
import store       from './store'
import './scss/main.scss'
import 'bootstrap'

//sweetalert2
window.Swal  = require('sweetalert2');
//Toast
const Toast  = Swal.mixin({
    toast            : true,
    position         : 'top-end',
    showConfirmButton: false,
    timer            : 3000,
    timerProgressBar : true,
    didOpen          : (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
});
window.Toast = Toast;

//services
import ApiService from '@/services/api.service.js'

ApiService.init();

createApp(App).use(store).use(router).mount('#app')
