import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './css/Index.css'
import './bootstrap/bootstrap-5.1.3/dist/css/bootstrap.min.css'
import 'v-slim-dialog/dist/v-slim-dialog.css'

import SlimDialog from 'v-slim-dialog'

createApp(App)
.use(
    router, SlimDialog
    )
.mount('#app')
