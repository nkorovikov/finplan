import Vue from 'vue'
import VueI18n from 'vue-i18n'
import LocalStorage from '@/storages/LocalStorage'

Vue.use(VueI18n)

const storage: LocalStorage = new LocalStorage()
const profile = storage.getProfile()

function loadLocaleMessages() {
    const locales = require.context('./locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)
    const messages: any = {}
    locales.keys().forEach(key => {
        const matched = key.match(/([A-Za-z0-9-_]+)\./i)
        if (matched && matched.length > 1) {
            const locale = matched[1]
            messages[locale] = locales(key)
        }
    })
    return messages
}

export default new VueI18n({
    locale: profile.getLocale(),
    fallbackLocale: profile.getLocale(),
    messages: loadLocaleMessages()
})