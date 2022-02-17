import { createI18n } from 'vue-i18n'
import ruRU from './locales/ru-RU.json'
import enUS from './locales/en-US.json'

// define the locale message schema as master
export type MessageSchema = typeof enUS
/**
 * if you can specify resource schema to type parameter of `createI18n`,
 * you can make to be type-safe the i18n resources.
 */

export const i18n = createI18n<[MessageSchema], 'en-US' | 'ru-RU'>({
  locale: 'ru-RU',
  fallbackLocale: 'ru-RU', // set fallback locale
  legacy: false,
  messages: {
    'en-US': enUS,
    'ru-RU': ruRU,
  },
})
