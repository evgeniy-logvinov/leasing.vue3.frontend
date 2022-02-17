import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store, key } from './store'
import './index.css'
import { i18n } from './i18n'

createApp(App).use(store, key).use(router).use(i18n).mount('#app')
