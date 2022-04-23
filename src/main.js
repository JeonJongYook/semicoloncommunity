import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import axios from 'axios'

import './css/Index.css'
import './bootstrap/bootstrap-5.1.3/dist/css/bootstrap.min.css'
import '@coreui/coreui/dist/css/coreui.min.css'
import "bootstrap/dist/css/bootstrap.min.css";

// createApp.prototype.$axios = axios

createApp(App)
.use(
    router
    )
.mount('#app')
