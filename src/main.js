import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './css/Index.css'
import './bootstrap/bootstrap-5.1.3/dist/css/bootstrap.min.css'



createApp(App)
.use(
    router
    )
.mount('#app')
