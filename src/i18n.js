import { createI18n } from "vue-i18n";
import messages from '@intlify/unplugin-vue-i18n/messages'
import en from "./locales/en.json";
import es from "./locales/es.json";

export const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: 'es',
    //locale: window.navigator.language.substring(0,2) || 'es',
    fallbackLocale: 'en',
    availableLocales: [ "es", "en" ],
    messages: messages,
})