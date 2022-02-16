import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import router from './router'
import { store, key } from './store'
import './index.css'
import ruRU from '~/i18n/ru-RU.json'
import enUS from '~/i18n/en-US.json'

// define the locale message schema as master
export type MessageSchema = typeof enUS
/**
 * if you can specify resource schema to type parameter of `createI18n`,
 * you can make to be type-safe the i18n resources.
 */

const i18n = createI18n<[MessageSchema], 'en-US' | 'ru-RU'>({
  locale: 'ru-RU',
  fallbackLocale: 'ru-RU', // set fallback locale
  legacy: false,
  messages: {
    'en-US': enUS,
    'ru-RU': ruRU,
  },
})

createApp(App).use(store, key).use(router).use(i18n).mount('#app')
