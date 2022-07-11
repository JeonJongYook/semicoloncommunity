import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import './css/Index.css'
import './bootstrap/bootstrap-5.1.3/dist/css/bootstrap.min.css'
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
// import '@coreui/dist/css/coreui.min.css'


// BootstrapVue, IconsPlugin 사용을 위한 import
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap-vue/dist/bootstrap-vue.css";

// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

createApp(App).use(router)
// createApp(App).use(BootstrapVue)
// createApp(App).use(IconsPlugin)
.mount('#app')

createApp.productionTip = false
